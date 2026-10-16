import { useCallback, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Polygon, Rect } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { LADO, createInitialState, destinos, jogar, parceiroDaVez, podeTirar, pontaDe, simboloDaVez, simboloDe, type QuixoState } from '@/services/quixo-engine';
import { lanceQuixo } from '@/services/quixo-ia';
import { Desliza, Pulsa } from './jogos/anim';
import { DefsBrilho, DefsTextura, idTextura } from './jogos/visual';
import { useParDeCores, useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

/**
 * Um cubo do Quixo visto de cima, com um pouco de volume (a borda de baixo e da direita mais
 * escura): liso, com a cruz ou com o círculo. A quatro, um triângulo na beira mostra para qual
 * parceiro a ponta do símbolo está virada. Desenho próprio do app.
 */
export function CuboQuixo({ v, tamanho, cores, quatro = false }: { v: number; tamanho: number; cores: [string, string]; quatro?: boolean }) {
  const sim = simboloDe(v);
  const cor = sim === 1 ? cores[0] : cores[1];
  const t = tamanho;
  const e = t * 0.08;
  // ponta: cruz (dupla A) para baixo (A1) ou para cima (A2); círculo (dupla B) para a esquerda (B1) ou a direita (B2)
  const ponta = (() => {
    if (!quatro || sim === 0) return null;
    const p = pontaDe(v);
    const m = t / 2;
    const k = t * 0.09;
    if (sim === 1) return p === 0 ? `${m - k},${t - e * 2.2} ${m + k},${t - e * 2.2} ${m},${t - e * 1.1}` : `${m - k},${e * 2.2} ${m + k},${e * 2.2} ${m},${e * 1.1}`;
    return p === 0 ? `${e * 2.2},${m - k} ${e * 2.2},${m + k} ${e * 1.1},${m}` : `${t - e * 2.2},${m - k} ${t - e * 2.2},${m + k} ${t - e * 1.1},${m}`;
  })();
  return (
    <Svg width={t} height={t}>
      <Rect x={e} y={e} width={t - e * 1.4} height={t - e * 1.4} rx={t * 0.12} fill="#B9925E" />
      <DefsTextura material="madeira" />
      <DefsBrilho />
      <Rect x={e * 0.6} y={e * 0.6} width={t - e * 1.8} height={t - e * 1.8} rx={t * 0.12} fill="#EED9B0" stroke="#7A5530" strokeWidth={1.2} />
      {/* o veio e a luz da face de cima do cubo de madeira */}
      <Rect x={e * 0.6} y={e * 0.6} width={t - e * 1.8} height={t - e * 1.8} rx={t * 0.12} fill={`url(#${idTextura('madeira')})`} />
      <Rect x={e * 0.6} y={e * 0.6} width={t - e * 1.8} height={t - e * 1.8} rx={t * 0.12} fill="url(#tx-brilho)" />
      {sim === 1 && (
        <>
          <Line x1={t * 0.3} y1={t * 0.3} x2={t * 0.66} y2={t * 0.66} stroke={cor} strokeWidth={t * 0.11} strokeLinecap="round" />
          <Line x1={t * 0.66} y1={t * 0.3} x2={t * 0.3} y2={t * 0.66} stroke={cor} strokeWidth={t * 0.11} strokeLinecap="round" />
        </>
      )}
      {sim === 2 && <Circle cx={t * 0.48} cy={t * 0.48} r={t * 0.2} fill="none" stroke={cor} strokeWidth={t * 0.1} />}
      {ponta && <Polygon points={ponta} fill={cor} />}
    </Svg>
  );
}

let opcoesQuixo = { quatro: false };
const inicio = () => createInitialState(opcoesQuixo);

const linhaDe = (i: number) => Math.floor(i / LADO);
const colunaDe = (i: number) => i % LADO;

/**
 * Quixo (5×5, ver `quixo-engine.ts`): toque num cubo da borda (liso ou seu) e depois na ponta da
 * fileira por onde ele volta, empurrando a fileira. A dois, contra o Linu, ou a quatro em duplas.
 */
export function QuixoBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const cores = useParDeCores('quixo');
  const casa = useCasa(LADO, 64, 44);
  const lado = casa * LADO;
  const h = useHistorico<QuixoState>(inicio, 'quixo');
  const s = h.state;
  const xp = useXpDeVitoria('quixo');
  const [sel, setSel] = useState<number | null>(null);
  const [pontaParceiro, setPontaParceiro] = useState(false);

  const contraLinu = prefs.adversario === 'linu' && !s.quatro;
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.turn, h.pilha[0]!.turn === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.turn === LINU && s.winner === null;

  const fazer = useCallback(
    (de: number, para: number) => {
      const ponta = s.quatro ? ((pontaParceiro ? 1 - parceiroDaVez(s.turn) : parceiroDaVez(s.turn)) as 0 | 1) : undefined;
      const next = jogar(s, { de, para, ponta });
      setSel(null);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next);
      // o símbolo de quem venceu é o lado + 1 (cruz = 1, círculo = 2)
      if (next.winner !== null && next.winner !== 'empate' && (!contraLinu || next.winner !== LINU + 1)) xp.dar();
    },
    [s, h, contraLinu, xp, pontaParceiro, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceQuixo(s, prefs.nivel);
      if (l) fazer(l.de, l.para);
    },
    500,
  );

  const mudarModo = (quatro: boolean) => {
    haptics.tapLight();
    opcoesQuixo = { quatro };
    setSel(null);
    h.reiniciar();
    xp.zerar();
  };
  const recomecar = () => mudarModo(s.quatro && prefs.adversario !== 'linu');
  const desfazer = () => {
    haptics.tapLight();
    setSel(null);
    h.desfazer(contraLinu && s.turn !== LINU && h.lances >= 2 ? 2 : 1);
  };

  const NOMES4 = ['A1 (cruz)', 'B1 (círculo)', 'A2 (cruz)', 'B2 (círculo)'];
  const nome = (t: number) => (s.quatro ? NOMES4[t]! : contraLinu ? (t === LINU ? 'Linu' : 'Você') : t === 0 ? 'Cruz' : 'Círculo');
  const lado2 = (sim: 1 | 2) => (s.quatro ? (sim === 1 ? 'A dupla A' : 'A dupla B') : contraLinu ? (sim === LINU + 1 ? 'O Linu' : 'Você') : sim === 1 ? 'A cruz' : 'O círculo');
  const resultado = (() => {
    if (s.winner === null) return null;
    if (s.winner === 'empate') return { texto: `${s.lances} lances sem cinco em linha: empate.`, tom: 'empate' as const };
    const perdedor = s.winner === 1 ? 2 : 1;
    const texto = s.entregou
      ? `${lado2(perdedor)} formou a linha do adversário e perdeu! ${contraLinu ? (s.winner !== LINU + 1 ? 'Você venceu!' : '') : `${lado2(s.winner)} vence.`}`
      : contraLinu
        ? s.winner !== LINU + 1
          ? 'Cinco em linha! Você venceu o Linu!'
          : 'O Linu fez cinco em linha.'
        : `Cinco em linha! ${lado2(s.winner)} vence${s.quatro ? '' : 'u'}!`;
    return { texto: texto.trim(), tom: contraLinu && s.winner === LINU + 1 ? ('derrota' as const) : ('vitoria' as const) };
  })();

  const minhaVez = !vezDoLinu && s.winner === null;
  const alvos = sel !== null ? destinos(sel) : [];
  // a animação do empurrão: de onde veio cada cubo da fileira mexida
  const veio = new Map<number, number>();
  if (s.ultimo) {
    const { de, para } = s.ultimo;
    const passo = linhaDe(de) === linhaDe(para) ? (colunaDe(para) > colunaDe(de) ? 1 : -1) : colunaDe(para) === colunaDe(de) ? (linhaDe(para) > linhaDe(de) ? LADO : -LADO) : 0;
    if (passo !== 0) {
      for (let k = de; k !== para; k += passo) veio.set(k, k + passo);
      veio.set(para, de);
    }
  }

  const tocar = (i: number) => {
    if (!minhaVez) return;
    if (sel !== null && alvos.includes(i)) return fazer(sel, i);
    if (sel === i) return setSel(null);
    if (podeTirar(s, i)) {
      haptics.tapLight();
      setSel(i);
    }
  };

  const seta = (i: number) => {
    if (sel === null) return '';
    if (linhaDe(i) === linhaDe(sel)) return colunaDe(i) === 0 ? '▶' : '◀';
    return linhaDe(i) === 0 ? '▼' : '▲';
  };

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={(s.quatro ? [0, 1, 2, 3] : [0, 1]).map((t) => ({ id: t, nome: nome(t), amostra: <CuboQuixo v={simboloDaVez(t)} tamanho={20} cores={cores} /> }))}
        vez={s.turn}
        terminou={s.winner !== null}
      />
      {prefs.adversario !== 'linu' && (
        <View className="flex-row flex-wrap justify-center gap-2">
          <Opcao ativo={!s.quatro} onPress={() => mudarModo(false)} texto="2 jogadores" />
          <Opcao ativo={s.quatro} onPress={() => mudarModo(true)} texto="4 jogadores, em duplas" />
        </View>
      )}
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>
          {nome(s.turn)}: {sel === null ? 'toque num cubo da borda, liso ou seu' : 'toque numa seta para devolver o cubo, empurrando a fileira'}
          {s.quatro ? ' (a ponta do símbolo diz qual parceiro pode jogar o cubo)' : ''}.
        </Instrucao>
      )}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: lado }}>
          {s.board.map((v, i) => {
            const naLinha = s.winner !== null && s.linha.includes(i);
            const pode = minhaVez && podeTirar(s, i);
            const alvo = alvos.includes(i);
            const origem = veio.get(i);
            const cubo = <CuboQuixo v={v} tamanho={casa * 0.94} cores={cores} quatro={s.quatro} />;
            const fundo = sel === i ? tema.selecao : naLinha ? tema.dica : prefs.ultimoLance && s.ultimo?.para === i ? tema.ultimo : 'transparent';
            return (
              <Pressable
                key={i}
                accessibilityLabel={`Cubo ${linhaDe(i) + 1}-${colunaDe(i) + 1}, ${['liso', 'cruz', 'círculo'][simboloDe(v)]}${alvo ? ', devolver por aqui' : pode ? ', pode tirar' : ''}`}
                disabled={!minhaVez || (!pode && !alvo)}
                onPress={() => tocar(i)}
                style={{ width: casa, height: casa, alignItems: 'center', justifyContent: 'center', backgroundColor: fundo, borderRadius: 6 }}
              >
                {naLinha ? (
                  <Pulsa key={`l${h.lances}`} surge={false} atraso={200 + s.linha.indexOf(i) * 100}>
                    {cubo}
                  </Pulsa>
                ) : origem !== undefined ? (
                  <Desliza key={`d${h.lances}`} dx={(colunaDe(origem) - colunaDe(i)) * casa} dy={(linhaDe(origem) - linhaDe(i)) * casa} duracao={origem === s.ultimo?.de ? 320 : 220}>
                    {cubo}
                  </Desliza>
                ) : (
                  cubo
                )}
                {prefs.dicas && pode && sel === null && (
                  <View style={{ position: 'absolute', zIndex: 10, top: 3, right: 3, width: casa * 0.16, height: casa * 0.16, borderRadius: casa, backgroundColor: tema.dica }} />
                )}
                {alvo && (
                  <View style={{ position: 'absolute', inset: 0, zIndex: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(16,185,129,0.35)', borderRadius: 6, borderWidth: 2, borderColor: '#059669' }}>
                    <Text style={{ fontSize: casa * 0.4, fontWeight: '900', color: '#064E3B' }}>{seta(i)}</Text>
                  </View>
                )}
              </Pressable>
            );
          })}
        </View>
      </Moldura>

      {s.quatro && s.winner === null && (
        <View className="flex-row flex-wrap items-center justify-center gap-2">
          <Text className="text-xs text-slate-600 dark:text-slate-300">Ponta do símbolo para:</Text>
          <Opcao ativo={!pontaParceiro} onPress={() => setPontaParceiro(false)} texto="mim" />
          <Opcao ativo={pontaParceiro} onPress={() => setPontaParceiro(true)} texto="meu parceiro" />
        </View>
      )}

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}

function Opcao({ ativo, onPress, texto }: { ativo: boolean; onPress: () => void; texto: string }) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ selected: ativo }}
      onPress={onPress}
      className={`rounded-full border px-3 py-1.5 ${ativo ? 'border-emerald-600 bg-emerald-50 dark:border-emerald-400 dark:bg-emerald-950' : 'border-slate-300 bg-white dark:border-slate-600 dark:bg-slate-900'}`}
    >
      <Text className={`text-xs font-bold ${ativo ? 'text-emerald-800 dark:text-emerald-200' : 'text-slate-600 dark:text-slate-300'}`}>{texto}</Text>
    </Pressable>
  );
}
