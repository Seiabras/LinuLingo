import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line } from 'react-native-svg';
import { useLadoDoLinu } from '@/services/quem-comeca';
import * as haptics from '@/services/haptics';
import { useJogosPrefs } from '@/services/jogos-prefs';
import { ARESTAS, contar, createInitialState, jogar, lancesLegais, rc, type AlquerqueState, type JogadorA, type LanceA, type RegraA } from '@/services/alquerque-engine';
import { lanceAlquerque } from '@/services/alquerque-ia';
import { Desliza, Estouro, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PecaRedonda, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const COR: Record<JogadorA, 'clara' | 'escura'> = { 0: 'clara', 1: 'escura' };
const REGRAS: { id: RegraA; nome: string; nota: string }[] = [
  { id: 'livro', nome: 'Livro de Alfonso X', nota: 'Anda para qualquer lado; capturar é opcional.' },
  { id: 'bell', nome: 'Regras de Bell', nota: 'Captura obrigatória, sem andar para trás nem voltar a um ponto.' },
  { id: 'soprada', nome: 'Peça soprada', nota: 'Quem podia capturar e não capturou perde a peça (o sopro aqui é automático).' },
];

/**
 * Alquerque (alquerque de doze, ver `alquerque-engine.ts`): 5×5 com diagonais, 12 peças de cada
 * lado. Toque numa peça sua e depois no ponto de destino; para capturar, salte por cima de uma peça
 * do outro. Depois de capturar, a mesma peça continua saltando enquanto der.
 */
export function AlquerqueBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const passo = useCasa(5, 76, 58);
  const pad = passo * 0.55;
  const lado = passo * 4 + pad * 2;
  const xy = (i: number) => ({ x: pad + rc(i)[1] * passo, y: pad + rc(i)[0] * passo });
  const [regra, setRegra] = useState<RegraA>('livro');
  const inicio = useCallback(() => createInitialState(regra), [regra]);
  const h = useHistorico<AlquerqueState>(inicio, 'alquerque');
  const s = h.state;
  const [sel, setSel] = useState<number | null>(null);
  const xp = useXpDeVitoria('alquerque');

  const contraLinu = prefs.adversario === 'linu';
  // de que lado fica o Linu nesta partida (a escolha “quem começa”)
  const LINU = useLadoDoLinu(h.pilha[0]!.vez, h.pilha[0]!.vez === 0 ? 1 : 0, h.pilha[0]!, h.lances);
  const vezDoLinu = contraLinu && s.vez === LINU && s.vencedor === null;
  const nome = (j: JogadorA) => (contraLinu ? (j === LINU ? 'Linu' : 'Você') : j === 0 ? 'Claras' : 'Escuras');

  const legais = useMemo(() => lancesLegais(s), [s]);
  // na sequência de saltos do Linu, não mostra os destinos dele como se fossem seus
  const origem = vezDoLinu ? null : (s.seq ?? sel);
  const destinos = useMemo(() => (origem !== null ? legais.filter((l) => l.de === origem) : []), [legais, origem]);
  const podeMover = new Set(legais.map((l) => l.de));

  const fazer = useCallback(
    (l: LanceA) => {
      const next = jogar(s, l);
      if (next === s) return;
      haptics.tapLight();
      h.jogar(next, l.capturada !== null ? 'captura' : undefined);
      setSel(null);
      if (next.vencedor !== null && (!contraLinu || next.vencedor !== LINU)) xp.dar();
    },
    [s, h, contraLinu, xp, LINU],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceAlquerque(s, prefs.nivel);
      if (l) fazer(l);
    },
    550,
    `${h.lances}`,
  );

  const aoTocar = (i: number) => {
    if (s.vencedor !== null || vezDoLinu) return;
    const d = destinos.find((x) => x.para === i);
    if (d) return fazer(d);
    if (s.seq !== null) return;
    if (s.casas[i] === s.vez && podeMover.has(i)) {
      haptics.tapLight();
      setSel(sel === i ? null : i);
    } else setSel(null);
  };

  const trocarRegra = (r: RegraA) => {
    if (r === s.regra) return;
    haptics.tapLight();
    setRegra(r);
    setSel(null);
    xp.zerar();
    // o histórico guarda a partida; recomeça já com a regra nova
    h.jogar(createInitialState(r), null);
  };
  const recomecar = () => {
    haptics.tapLight();
    h.jogar(createInitialState(s.regra), null);
    setSel(null);
    xp.zerar();
  };
  const desfazer = () => {
    haptics.tapLight();
    let n = 1;
    if (contraLinu) while (h.pilha.length - 1 - n > 0 && h.pilha[h.pilha.length - 1 - n]!.vez === LINU) n++;
    h.desfazer(n);
    setSel(null);
  };

  const u = s.ultimo;
  const tam = passo * 0.6;
  const resultado = (() => {
    if (s.vencedor === null) return null;
    if (s.vencedor === 'empate') return { texto: '40 lances sem captura: empate.', tom: 'empate' as const };
    const semPecas = contar(s, s.vencedor === 0 ? 1 : 0) === 0;
    const como = semPecas ? 'capturou todas as peças' : 'deixou o outro sem lance';
    const texto = contraLinu ? (s.vencedor !== LINU ? `Você ${como}: venceu o Linu!` : `O Linu ${como}.`) : `As ${nome(s.vencedor).toLowerCase()} ${semPecas ? 'capturaram todas as peças' : 'deixaram o outro sem lance'}!`;
    return { texto, tom: !contraLinu || s.vencedor !== LINU ? ('vitoria' as const) : ('derrota' as const) };
  })();
  const temCaptura = legais.some((l) => l.capturada !== null);
  const instrucao =
    s.seq !== null
      ? 'Capturou! Continue saltando com a mesma peça.'
      : s.soprada != null
        ? `Soprada! Quem podia capturar e não capturou perdeu a peça. ${contraLinu ? (s.vez === 0 ? 'Sua vez' : 'Vez do Linu') : `Vez das ${nome(s.vez).toLowerCase()}`}.`
      : `${contraLinu ? 'Sua vez' : `Vez das ${nome(s.vez).toLowerCase()}`}: toque numa peça e no destino.${temCaptura ? (s.regra === 'bell' ? ' Capturar é obrigatório.' : s.regra === 'soprada' ? ' Capture, ou a peça é soprada!' : ' Dá para capturar.') : ''}`;

  return (
    <View className="items-center gap-3">
      <View className="flex-row flex-wrap justify-center gap-2">
        {REGRAS.map((r) => (
          <Pressable
            key={r.id}
            accessibilityRole="button"
            accessibilityState={{ selected: s.regra === r.id }}
            onPress={() => trocarRegra(r.id)}
            className={`rounded-full border-2 px-3 py-1 ${s.regra === r.id ? 'border-conecta bg-conecta-50 dark:border-conecta-400 dark:bg-conecta-950' : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900'}`}
          >
            <Text className="text-xs font-bold text-slate-800 dark:text-slate-100">{r.nome}</Text>
          </Pressable>
        ))}
      </View>
      <Text className="text-center text-[11px] text-slate-600 dark:text-slate-400">{REGRAS.find((r) => r.id === s.regra)!.nota}</Text>
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({ id: j, nome: nome(j), amostra: <PecaRedonda jogo="alquerque" lado={COR[j]} tamanho={18} />, extra: `${contar(s, j)} peças` }))}
        vez={s.vez}
        terminou={s.vencedor !== null}
      />
      {resultado ? <FaixaResultado texto={resultado.texto} tom={resultado.tom} /> : pensando || vezDoLinu ? <LinuPensando visivel /> : <Instrucao>{instrucao}</Instrucao>}

      <Moldura largura={lado} altura={lado} fundo={tema.superficie}>
        <FundoSuperficie largura={lado} altura={lado} tema={tema} unidade={passo} />
        <Svg width={lado} height={lado} style={{ position: 'absolute', left: 0, top: 0 }}>
          {ARESTAS.map(([a, b], k) => {
            const pa = xy(a);
            const pb = xy(b);
            return <Line key={k} x1={pa.x} y1={pa.y} x2={pb.x} y2={pb.y} stroke={tema.linha} strokeWidth={3} strokeLinecap="round" />;
          })}
          {s.casas.map((_, i) => {
            const { x, y } = xy(i);
            return <Circle key={i} cx={x} cy={y} r={passo * 0.08} fill={tema.linha} />;
          })}
        </Svg>
        {s.casas.map((dono, i) => {
          const { x, y } = xy(i);
          const destino = destinos.find((d) => d.para === i);
          const doUltimo = prefs.ultimoLance && u && (u.para === i || u.de === i);
          const peca = dono !== null && <PecaRedonda jogo="alquerque" lado={COR[dono]} tamanho={tam} />;
          const conteudo =
            peca && u?.para === i && prefs.animacoes ? (
              <Desliza key={h.lances} dx={xy(u.de).x - x} dy={xy(u.de).y - y}>
                {peca}
              </Desliza>
            ) : peca && u?.para === i ? (
              <Surge key={h.lances}>{peca}</Surge>
            ) : (
              peca
            );
          return (
            <Pressable
              key={i}
              accessibilityRole="button"
              accessibilityLabel={`Ponto ${rc(i)[0] + 1}-${rc(i)[1] + 1}${dono === null ? (destino ? (destino.capturada !== null ? ', saltar para cá' : ', mover para cá') : ', vazio') : `, peça ${dono === 0 ? 'clara' : 'escura'}`}`}
              onPress={() => aoTocar(i)}
              style={{ position: 'absolute', left: x - passo / 2, top: y - passo / 2, width: passo, height: passo, alignItems: 'center', justifyContent: 'center', zIndex: u?.para === i ? 3 : 1 }}
            >
              {doUltimo && <View style={{ position: 'absolute', width: tam * 1.2, height: tam * 1.2, borderRadius: passo, backgroundColor: tema.ultimo }} />}
              {origem === i && <View style={{ position: 'absolute', width: tam * 1.3, height: tam * 1.3, borderRadius: passo, backgroundColor: tema.selecao }} />}
              {conteudo}
              {u?.capturada === i && prefs.animacoes && <Estouro key={`e${h.lances}`} tamanho={passo} />}
              {prefs.dicas && destino && <View style={{ position: 'absolute', width: passo * 0.28, height: passo * 0.28, borderRadius: passo, backgroundColor: destino.capturada !== null ? tema.especial : tema.dica }} />}
            </Pressable>
          );
        })}
      </Moldura>

      <ControlesJogo onRecomecar={recomecar} onDesfazer={desfazer} podeDesfazer={h.lances > 0 && !pensando} />
    </View>
  );
}
