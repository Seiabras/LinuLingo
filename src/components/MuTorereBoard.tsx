import { useCallback, useRef } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Polygon } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { CENTRO, createInitialState, jogar, lancesLegais, type JogadorMT, type MuTorereState, type RegraMT } from '@/services/mutorere-engine';
import { lanceMuTorere } from '@/services/mutorere-ia';
import { Desliza } from './jogos/anim';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, Escala, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const L = 300; // lado do desenho; a Escala ajusta para a tela
const C = L / 2;
const R = L * 0.4;
const PECA = 40;

/** Posição em pixels de cada ponto: as 8 pontas (kewai) em volta, começando no alto, e o centro (pūtahi). */
const PONTOS = [
  ...Array.from({ length: 8 }, (_, i) => {
    const a = (i * Math.PI) / 4;
    return { x: C + R * Math.sin(a), y: C - R * Math.cos(a) };
  }),
  { x: C, y: C },
];

/** A estrela de 8 pontas: as pontas nos kewai e os vales no meio do caminho. */
const ESTRELA = Array.from({ length: 16 }, (_, k) => {
  const a = (k * Math.PI) / 8;
  const r = k % 2 === 0 ? R + 16 : R * 0.42;
  return `${C + r * Math.sin(a)},${C - r * Math.cos(a)}`;
}).join(' ');

const NOME_PONTO = (i: number) => (i === CENTRO ? 'o centro (pūtahi)' : `a ponta ${i + 1}`);

/**
 * Mū tōrere (ver `mutorere-engine.ts`): a estrela maori de 8 pontas. Sempre há um só ponto vazio:
 * toque numa peça sua que possa ir para ele. Perde quem fica sem lance. A regra das primeiras jogadas
 * (a mais comum nas fontes) ou a de sempre (a do R. C. Bell) se escolhe embaixo.
 */
export function MuTorereBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const regraRef = useRef<RegraMT>('primeiras');
  const inicio = useCallback(() => createInitialState(regraRef.current, 0), []);
  const h = useHistorico<MuTorereState>(inicio, 'mu-torere');
  const s = h.state;
  const xp = useXpDeVitoria('mu-torere');

  const contraLinu = prefs.adversario === 'linu';
  const acabou = s.winner !== null || s.empate;
  const vezDoLinu = contraLinu && s.turn === 1 && !acabou;
  const minhaVez = !vezDoLinu && !acabou;
  const lances = lancesLegais(s);
  const vazio = s.board.indexOf(null);

  const fazer = useCallback(
    (de: number, para: number) => {
      const next = jogar(s, de, para);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [s, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceMuTorere(s, prefs.nivel);
      if (l) fazer(l.de, l.para);
    },
    650,
  );

  const trocarRegra = (regra: RegraMT) => {
    if (regra === s.regra) return;
    haptics.tapLight();
    regraRef.current = regra;
    h.reiniciar();
    xp.zerar();
  };
  const recomecar = () => {
    haptics.tapLight();
    regraRef.current = s.regra;
    h.reiniciar();
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.turn === 1) n++;
    h.desfazer(n);
  };

  const nome = (j: JogadorMT) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : j === 0 ? 'Claras' : 'Escuras');
  const resultado = (() => {
    if (s.empate) return { texto: 'A mesma posição voltou pela terceira vez: empate. Com os dois jogando bem, o mū tōrere sempre empata.', tom: 'empate' as const };
    if (s.winner === null) return null;
    const perdeu: JogadorMT = s.winner === 0 ? 1 : 0;
    const texto = contraLinu
      ? s.winner === 0
        ? 'O Linu ficou sem lance: você venceu!'
        : 'Você ficou sem lance: o Linu venceu.'
      : `As ${nome(perdeu).toLowerCase()} ficaram sem lance: as ${nome(s.winner).toLowerCase()} venceram!`;
    return { texto, tom: !contraLinu || s.winner === 0 ? ('vitoria' as const) : ('derrota' as const) };
  })();

  const restricaoAgora = s.regra === 'sempre' || s.lances < 4;

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PecaRedonda jogo="mu-torere" lado={j === 0 ? 'clara' : 'escura'} tamanho={18} /> }))}
        vez={s.turn}
        terminou={acabou}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {contraLinu ? 'Sua vez' : `Vez das ${nome(s.turn).toLowerCase()}`}: toque numa peça que possa ir para o ponto vazio.
          {vazio === CENTRO && restricaoAgora ? ' Para o centro, só vai a peça que está ao lado de uma adversária.' : ''}
        </Instrucao>
      )}

      <Escala largura={L + 26} altura={L + 26}>
        <Moldura largura={L} altura={L} fundo={tema.claro}>
          <Svg width={L} height={L} style={{ position: 'absolute', left: 0, top: 0 }}>
            <Polygon points={ESTRELA} fill={tema.escuro} stroke={tema.linha ?? tema.moldura} strokeWidth={2} strokeLinejoin="round" />
            {PONTOS.slice(0, 8).map((p, i) => (
              <Line key={`r${i}`} x1={C} y1={C} x2={p.x} y2={p.y} stroke={tema.linha ?? tema.moldura} strokeWidth={2.5} />
            ))}
            {PONTOS.map((p, i) => {
              const ultimo = prefs.ultimoLance && s.ultimo && (s.ultimo.de === i || s.ultimo.para === i);
              const alvo = prefs.dicas && minhaVez && i === vazio;
              return <Circle key={`p${i}`} cx={p.x} cy={p.y} r={PECA / 2 + 3} fill={alvo ? tema.dica : ultimo ? tema.ultimo : tema.claro} stroke={tema.linha ?? tema.moldura} strokeWidth={2} />;
            })}
          </Svg>
          {PONTOS.map((p, i) => {
            const v = s.board[i];
            if (v === null || v === undefined) return null;
            const lance = minhaVez ? lances.find((l) => l.de === i) : undefined;
            const pode = !!lance && v === s.turn;
            const veio = s.ultimo && s.ultimo.para === i ? PONTOS[s.ultimo.de]! : null;
            const peca = <PecaRedonda jogo="mu-torere" lado={v === 0 ? 'clara' : 'escura'} tamanho={PECA} />;
            return (
              <Pressable
                key={`q${i}`}
                accessibilityRole="button"
                accessibilityLabel={`Peça ${v === 0 ? 'clara' : 'escura'} n${i === CENTRO ? 'o centro' : `a ponta ${i + 1}`}${pode ? `, pode ir para ${NOME_PONTO(lance!.para)}` : ''}`}
                disabled={!pode}
                onPress={() => fazer(i, lance!.para)}
                style={{ position: 'absolute', left: p.x - PECA / 2, top: p.y - PECA / 2, width: PECA, height: PECA }}
              >
                {veio ? (
                  <Desliza key={h.lances} dx={veio.x - p.x} dy={veio.y - p.y} duracao={260}>
                    {peca}
                  </Desliza>
                ) : (
                  peca
                )}
                {pode && prefs.dicas && (
                  <View pointerEvents="none" style={{ position: 'absolute', left: -3, top: -3, width: PECA + 6, height: PECA + 6, borderRadius: PECA, borderWidth: 3, borderColor: tema.dica }} />
                )}
              </Pressable>
            );
          })}
        </Moldura>
      </Escala>

      <View className="flex-row flex-wrap items-center justify-center gap-2">
        <Text className="text-xs font-bold text-slate-600 dark:text-slate-400">Regra do centro:</Text>
        {(
          [
            ['primeiras', 'Nas primeiras jogadas'],
            ['sempre', 'Sempre'],
          ] as [RegraMT, string][]
        ).map(([r, rotulo]) => (
          <Pressable
            key={r}
            accessibilityRole="radio"
            accessibilityState={{ selected: s.regra === r }}
            aria-checked={s.regra === r}
            onPress={() => trocarRegra(r)}
            className={`rounded-full border-2 px-3 py-1 ${s.regra === r ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className={`text-xs font-bold ${s.regra === r ? 'text-conecta-dark dark:text-blue-300' : 'text-slate-700 dark:text-slate-200'}`}>{rotulo}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="max-w-md text-center text-[11px] text-slate-500 dark:text-slate-400">
        {s.regra === 'primeiras'
          ? 'Nos dois primeiros lances de cada um, só vai para o centro a peça ao lado de uma adversária (a regra mais comum nas fontes).'
          : 'Em todo lance, só vai para o centro a peça ao lado de uma adversária (a regra de R. C. Bell).'}{' '}
        Trocar a regra recomeça a partida.
      </Text>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
