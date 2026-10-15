import { useCallback, useMemo, useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import Svg, { Circle, Line, Rect } from 'react-native-svg';
import * as haptics from '@/services/haptics';
import { useJogosPrefs, type DominoPedras } from '@/services/jogos-prefs';
import { lanceDomino } from '@/services/jogos-ia';
import {
  ALVOS,
  ALVO_PADRAO,
  comAlvo,
  comprar,
  createInitialState,
  ehCarroca,
  jogar,
  ladosPossiveis,
  lancesLegais,
  outro,
  passar,
  podeComprar,
  podePassar,
  pontas,
  proximaRodada,
  somaMao,
  visaoDe,
  type DominoState,
  type Jogador,
  type Lado,
  type PedraNaLinha,
} from '@/services/domino-engine';
import { Desliza, Surge } from './jogos/anim';
import { FundoSuperficie } from './jogos/visual';
import { useTemaJogo } from './jogos/tema';
import { ControlesJogo, FaixaResultado, Instrucao, LinuPensando, Moldura, PlacarJogo, useCasa, useHistorico, useLinuJoga, useXpDeVitoria } from './jogos/ui';

const NOME: Record<Jogador, string> = { 0: 'Jogador 1', 1: 'Jogador 2' };
// o alvo escolhido vale para as próximas partidas (enquanto o app estiver aberto)
let alvoEscolhido = ALVO_PADRAO;
const lembrarAlvo = (alvo: number) => {
  alvoEscolhido = alvo;
};
const inicio = () => createInitialState(alvoEscolhido);

// ── as pedras ──────────────────────────────────────────────────────────────────────────────────

/** Os estilos de pedra (a cor do osso e dos pontos). */
export const ESTILOS_DOMINO: Record<DominoPedras, { nome: string; fundo: string; borda: string; ponto: string | string[]; risco: string; verso: string }> = {
  marfim: { nome: 'Marfim', fundo: '#FBF7EC', borda: '#8A7A60', ponto: '#1C1917', risco: '#9C8B6E', verso: '#E9DFC6' },
  preta: { nome: 'Pretas', fundo: '#1F2226', borda: '#000000', ponto: '#F8FAFC', risco: '#6B7280', verso: '#30353C' },
  madeira: { nome: 'Madeira', fundo: '#D9B07A', borda: '#6B4423', ponto: '#2B1A0E', risco: '#7A5230', verso: '#B98A55' },
  // cada número com uma cor, como nos jogos de dominó de pontos coloridos
  colorida: { nome: 'Coloridas', fundo: '#FFFFFF', borda: '#64748B', ponto: ['#000', '#2563EB', '#16A34A', '#DC2626', '#9333EA', '#EA580C', '#0F766E'], risco: '#94A3B8', verso: '#E2E8F0' },
};

/** Onde ficam os pontos de cada número numa grade 3×3 (coluna, linha). */
const PONTOS: Record<number, [number, number][]> = {
  0: [],
  1: [[1, 1]],
  2: [[0, 0], [2, 2]],
  3: [[0, 0], [1, 1], [2, 2]],
  4: [[0, 0], [2, 0], [0, 2], [2, 2]],
  5: [[0, 0], [2, 0], [1, 1], [0, 2], [2, 2]],
  6: [[0, 0], [0, 1], [0, 2], [2, 0], [2, 1], [2, 2]],
};

/**
 * Uma pedra de dominó, deitada (`em pé` = false: `v1` à esquerda, `v2` à direita) ou em pé (`v1` em
 * cima). `l` é o lado curto, em pixels. `verso`: virada para baixo (a mão escondida).
 */
export function PedraDomino({ v1, v2, l, emPe = false, estilo, verso = false }: { v1: number; v2: number; l: number; emPe?: boolean; estilo: DominoPedras; verso?: boolean }) {
  const e = ESTILOS_DOMINO[estilo];
  const W = emPe ? l : l * 2;
  const H = emPe ? l * 2 : l;
  const r = l * 0.085;
  const corDe = (n: number) => (Array.isArray(e.ponto) ? e.ponto[n]! : e.ponto);
  const metade = (n: number, ox: number, oy: number) =>
    PONTOS[n]!.map(([c, li], k) => {
      // em pé, a grade gira junto (o 6 fica em duas colunas de três)
      const [gx, gy] = emPe ? [c, li] : [li, c];
      return <Circle key={`${ox}-${oy}-${k}`} cx={ox + l * (0.22 + gx * 0.28)} cy={oy + l * (0.22 + gy * 0.28)} r={r} fill={corDe(n)} />;
    });
  return (
    <Svg width={W} height={H}>
      <Rect x={0.75} y={1.5} width={W - 1.5} height={H - 1.5} rx={l * 0.16} fill="rgba(0,0,0,0.3)" />
      <Rect x={0.75} y={0.75} width={W - 1.5} height={H - 2} rx={l * 0.16} fill={verso ? e.verso : e.fundo} stroke={e.borda} strokeWidth={1.2} />
      {verso ? (
        <Circle cx={W / 2} cy={H / 2} r={l * 0.16} fill="none" stroke={e.risco} strokeWidth={1.2} />
      ) : (
        <>
          {emPe ? <Line x1={l * 0.14} y1={l} x2={l * 0.86} y2={l} stroke={e.risco} strokeWidth={1.2} /> : <Line x1={l} y1={l * 0.14} x2={l} y2={l * 0.86} stroke={e.risco} strokeWidth={1.2} />}
          {metade(v1, 0, 0)}
          {emPe ? metade(v2, 0, l) : metade(v2, l, 0)}
        </>
      )}
    </Svg>
  );
}

// ── a linha que serpenteia ─────────────────────────────────────────────────────────────────────

/** Uma pedra posta na mesa, em unidades do lado curto: canto de cima à esquerda, deitada ou em pé. */
interface Posta {
  x: number;
  y: number;
  emPe: boolean;
  v1: number;
  v2: number;
  /** índice em `linha` (−1 nas pedras imaginárias da reserva de espaço) */
  k: number;
}

/**
 * Arma um braço da linha a partir da primeira pedra: segue reto até perto da borda, desce (ou sobe)
 * com uma pedra em pé no canto e volta no sentido contrário, como se faz numa mesa pequena. As
 * carroças ficam atravessadas (em pé), menos logo depois de uma curva. `pedras` vêm da primeira para
 * a ponta: [número encostado, número livre, índice].
 */
function braco(pedras: [number, number, number][], x0: number, sentido: 1 | -1, desce: 1 | -1, C: number): Posta[] {
  const out: Posta[] = [];
  let x = x0;
  let d: 1 | -1 = sentido;
  let yc = 0;
  let depoisDaCurva = false;
  for (const [enc, livre, k] of pedras) {
    const dupla = enc === livre;
    const atravessada = dupla && !depoisDaCurva;
    const w = atravessada ? 1 : 2;
    const cabe = d === 1 ? x + w + 1 <= C : x - w - 1 >= 0;
    if (cabe) {
      const left = d === 1 ? x : x - w;
      const [v1, v2] = d === 1 ? [enc, livre] : [livre, enc];
      out.push(atravessada ? { x: left, y: yc - 1, emPe: true, v1, v2, k } : { x: left, y: yc - 0.5, emPe: false, v1, v2, k });
      x += d * w;
      depoisDaCurva = false;
    } else {
      // a curva: uma pedra em pé, metade nesta fileira e metade na seguinte
      const left = d === 1 ? x : x - 1;
      out.push(desce === 1 ? { x: left, y: yc - 0.5, emPe: true, v1: enc, v2: livre, k } : { x: left, y: yc - 1.5, emPe: true, v1: livre, v2: enc, k });
      x = d === 1 ? x + 1 : x - 1;
      yc += 2 * desce;
      d = d === 1 ? -1 : 1;
      depoisDaCurva = true;
    }
  }
  return out;
}

/** A linha inteira, com a primeira pedra no meio da fileira do meio. */
function armarLinha(linha: PedraNaLinha[], origem: number, C: number): Posta[] {
  if (linha.length === 0) return [];
  const o = linha[origem]!;
  const dupla = o.a === o.b;
  const w = dupla ? 1 : 2;
  const x0 = Math.floor((C - w) / 2);
  const primeira: Posta = dupla ? { x: x0, y: -1, emPe: true, v1: o.a, v2: o.b, k: origem } : { x: x0, y: -0.5, emPe: false, v1: o.a, v2: o.b, k: origem };
  const direita = linha.slice(origem + 1).map((p, i) => [p.a, p.b, origem + 1 + i] as [number, number, number]);
  const esquerda = linha
    .slice(0, origem)
    .map((p, i) => [p.b, p.a, i] as [number, number, number])
    .reverse();
  return [primeira, ...braco(direita, x0 + w, 1, 1, C), ...braco(esquerda, x0, -1, -1, C)];
}

/** Até onde a linha pode chegar (para o tabuleiro não mudar de altura no meio da rodada). */
function reserva(C: number): { topo: number; fundo: number } {
  const comuns = Array.from({ length: 13 }, () => [1, 2, -1] as [number, number, number]);
  const ps = [...braco(comuns, Math.floor(C / 2) + 1, 1, 1, C), ...braco(comuns, Math.floor(C / 2) - 1, -1, -1, C)];
  return { topo: Math.min(-1, ...ps.map((p) => p.y)), fundo: Math.max(1, ...ps.map((p) => p.y + (p.emPe ? 2 : 1))) };
}

// ── o tabuleiro ────────────────────────────────────────────────────────────────────────────────

/**
 * Dominó a dois (ver `domino-engine.ts`): toque numa pedra da sua mão para encostar numa ponta da
 * linha; se ela servir nas duas pontas, toque depois na ponta escolhida. Sem pedra que sirva, compre
 * do monte; com o monte vazio, passe. Contra o Linu, a mão dele fica virada para baixo. A dois no
 * mesmo aparelho, a mão de quem tem a vez só aparece depois de um toque (para o outro não ver), e
 * some quando a vez passa.
 */
export function DominoBoard() {
  const [prefs] = useJogosPrefs();
  const tema = useTemaJogo();
  const estilo = prefs.dominoPedras;
  // a mesa tem 14 lados curtos de largura
  const C = 14;
  const u = useCasa(C, 30, 17);
  const W = C * u;
  const h = useHistorico<DominoState>(inicio, 'domino');
  const state = h.state;
  const xp = useXpDeVitoria('domino');
  const [sel, setSel] = useState<number | null>(null);
  const [revelado, setRevelado] = useState<Jogador | null>(null);

  const contraLinu = prefs.adversario === 'linu';
  const emJogo = state.fimRodada === null && state.winner === null;
  const vezDoLinu = contraLinu && state.turn === 1 && emJogo;
  // quem fica embaixo: você contra o Linu; a dois, quem tem a vez
  const baixo: Jogador = contraLinu ? 0 : emJogo ? state.turn : 0;
  const cima = outro(baixo);
  const maoVisivel = contraLinu || !emJogo || revelado === state.turn;
  const lances = useMemo(() => lancesLegais(state), [state]);
  const jogaveis = new Set(lances.map((l) => l.i));
  const pt = pontas(state);

  const aplicar = useCallback(
    (next: DominoState) => {
      if (next === state) return;
      haptics.tapLight();
      setSel(null);
      h.jogar(next, next.fimRodada && next.fimRodada.vencedor !== null ? 'captura' : undefined);
      if (next.winner === 0 || (next.winner === 1 && !contraLinu)) xp.dar();
    },
    [state, h, contraLinu, xp],
  );

  const pensando = useLinuJoga(
    vezDoLinu,
    () => {
      const l = lanceDomino(visaoDe(state, 1), prefs.nivel);
      if (l) aplicar(jogar(state, l.i, l.lado));
      else aplicar(podeComprar(state) ? comprar(state) : passar(state));
    },
    state.ultimo?.tipo === 'comprou' && state.ultimo.por === 1 ? 420 : 750,
    h.lances,
  );

  const tocarPedra = (i: number) => {
    if (!emJogo || vezDoLinu || !maoVisivel) return;
    const lados = ladosPossiveis(state, state.maos[state.turn][i]!);
    if (lados.length === 0) {
      haptics.tapLight();
      setSel(null);
      return;
    }
    if (lados.length === 1) return aplicar(jogar(state, i, lados[0]!));
    haptics.tapLight();
    setSel(i === sel ? null : i);
  };
  const tocarPonta = (lado: Lado) => {
    if (sel === null) return;
    aplicar(jogar(state, sel, lado));
  };

  const recomecar = () => {
    haptics.tapLight();
    setSel(null);
    setRevelado(null);
    h.reiniciar();
    xp.zerar();
  };
  const novaRodada = () => {
    haptics.tapLight();
    setRevelado(null);
    if (state.winner !== null) return recomecar();
    h.jogar(proximaRodada(state));
  };
  const escolherAlvo = (alvo: number) => {
    lembrarAlvo(alvo);
    const next = comAlvo(state, alvo);
    if (next !== state) h.jogar(next);
  };

  const nomeDe = (j: Jogador) => (contraLinu ? (j === 0 ? 'Você' : 'Linu') : NOME[j]);

  // ── a mesa ──
  const postas = useMemo(() => armarLinha(state.linha, state.origem, C), [state.linha, state.origem]);
  const res = useMemo(() => reserva(C), []);
  const topo = Math.min(res.topo, ...postas.map((p) => p.y)) - 0.4;
  const fundo = Math.max(res.fundo, ...postas.map((p) => p.y + (p.emPe ? 2 : 1))) + 0.4;
  const H = (fundo - topo) * u;
  const px = (p: Posta) => ({ left: p.x * u, top: (p.y - topo) * u, w: (p.emPe ? 1 : 2) * u, h: (p.emPe ? 2 : 1) * u });
  const ultimo = state.ultimo;
  const ordemUltima = ultimo?.tipo === 'jogou' ? state.linha.length - 1 : -1;
  // as pontas que a pedra escolhida pode encostar
  const ladosSel = sel !== null && emJogo ? ladosPossiveis(state, state.maos[state.turn][sel]!) : [];
  const kPonta: Record<Lado, number> = { esq: 0, dir: state.linha.length - 1 };
  // a borda da moldura (a mesma conta de `Moldura`), para pôr as pedras por cima dela sem cortar a animação
  const borda = tema.padrao && tema.padraoCores ? 12 : 7;

  const pedraNaMesa = (p: Posta) => {
    const r = px(p);
    const linhaP = state.linha[p.k]!;
    const nova = linhaP.ordem === ordemUltima && ultimo?.tipo === 'jogou';
    const ehPonta = ladosSel.find((l) => kPonta[l] === p.k);
    const destaqueUltimo = nova && prefs.ultimoLance;
    let corpo = (
      <View>
        <PedraDomino v1={p.v1} v2={p.v2} l={u} emPe={p.emPe} estilo={estilo} />
        {(destaqueUltimo || ehPonta) && (
          <View
            style={{
              position: 'absolute',
              left: -3,
              top: -3,
              width: r.w + 6,
              height: r.h + 6,
              borderRadius: u * 0.25,
              borderWidth: 3,
              borderColor: ehPonta ? tema.selecao : tema.ultimo,
            }}
          />
        )}
      </View>
    );
    if (nova && ultimo?.tipo === 'jogou') {
      // a pedra sai da mão de quem jogou (embaixo ou em cima da mesa) e desliza até a ponta
      const deBaixo = contraLinu ? ultimo.por === 0 : true;
      const passoMao = u * 1.15 + 6;
      const xMao = W / 2 + (ultimo.indiceMao - (ultimo.tamanhoMao - 1) / 2) * passoMao;
      const yMao = deBaixo ? H + u * 3 : -u * 3;
      corpo = (
        <Desliza key={`d${h.lances}`} dx={xMao - (r.left + r.w / 2)} dy={yMao - (r.top + r.h / 2)} duracao={320}>
          {corpo}
        </Desliza>
      );
    }
    const ladoDaPonta = ehPonta;
    return (
      <Pressable
        key={p.k}
        disabled={!ladoDaPonta}
        accessibilityLabel={`Pedra ${linhaP.a} e ${linhaP.b}${ladoDaPonta ? `: encostar a pedra escolhida na ponta ${ladoDaPonta === 'esq' ? 'esquerda' : 'direita'}` : ''}`}
        onPress={() => ladoDaPonta && tocarPonta(ladoDaPonta)}
        style={{ position: 'absolute', left: r.left, top: r.top, width: r.w, height: r.h, zIndex: nova ? 5 : 1 }}
      >
        {corpo}
      </Pressable>
    );
  };

  // ── as mãos ──
  const l = Math.min(u * 1.15, 30);
  const maoDeBaixo = state.maos[baixo];
  const fimR = state.fimRodada;
  const mostrarCima = fimR !== null || state.winner !== null;
  const maoCima = (
    <View className="flex-row flex-wrap items-center justify-center" style={{ gap: 3, minHeight: l * 1.4 }}>
      {state.maos[cima].map((p, i) =>
        mostrarCima ? (
          <PedraDomino key={i} v1={p[0]} v2={p[1]} l={l * 0.7} emPe estilo={estilo} />
        ) : (
          <PedraDomino key={i} v1={0} v2={0} l={l * 0.7} emPe estilo={estilo} verso />
        ),
      )}
    </View>
  );

  const vezDeBaixo = emJogo && state.turn === baixo && !vezDoLinu;
  const maoBaixo = maoVisivel ? (
    <View className="flex-row flex-wrap items-end justify-center" style={{ gap: 6, minHeight: l * 2 + 10 }}>
      {maoDeBaixo.map((p, i) => {
        const serve = vezDeBaixo && jogaveis.has(i);
        const escolhida = sel === i;
        const apagada = vezDeBaixo && prefs.dicas && !serve && lances.length > 0;
        const nova = ultimo?.tipo === 'comprou' && ultimo.por === baixo && i === maoDeBaixo.length - 1;
        const pedra = <PedraDomino v1={p[0]} v2={p[1]} l={l} emPe estilo={estilo} />;
        return (
          <Pressable
            key={`${p[0]}-${p[1]}`}
            accessibilityLabel={`Sua pedra ${p[0]} e ${p[1]}${serve ? ', serve' : ''}`}
            onPress={() => tocarPedra(i)}
            style={{
              transform: [{ translateY: escolhida ? -10 : serve && prefs.dicas ? -4 : 0 }],
              opacity: apagada ? 0.45 : 1,
              borderRadius: l * 0.2,
              borderWidth: 3,
              borderColor: escolhida ? tema.selecao : 'transparent',
            }}
          >
            {nova ? <Surge key={`s${h.lances}`}>{pedra}</Surge> : pedra}
          </Pressable>
        );
      })}
    </View>
  ) : (
    <Pressable
      accessibilityRole="button"
      onPress={() => {
        haptics.tapLight();
        setRevelado(state.turn);
      }}
      className="items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 active:bg-slate-200 dark:bg-slate-800 dark:active:bg-slate-700"
    >
      <View className="flex-row flex-wrap justify-center" style={{ gap: 3 }}>
        {maoDeBaixo.map((_, i) => (
          <PedraDomino key={i} v1={0} v2={0} l={l * 0.7} emPe estilo={estilo} verso />
        ))}
      </View>
      <Text className="text-center text-sm font-bold text-slate-700 dark:text-slate-200">Vez do {NOME[state.turn]}: o outro não olha! Toque para ver suas pedras.</Text>
    </Pressable>
  );

  // ── avisos ──
  const fala = (j: Jogador) => (contraLinu && j === 1 ? 'O Linu' : contraLinu ? 'Você' : NOME[j]);
  const aconteceu =
    ultimo && ultimo.por !== state.turn && emJogo
      ? ultimo.tipo === 'passou'
        ? `${fala(ultimo.por)} passou. `
        : ''
      : '';
  const instrucao = (() => {
    if (!maoVisivel) return `Passe o aparelho para o ${NOME[state.turn]}.`;
    if (state.linha.length === 0 && state.saidaObrigatoria) {
      const [a] = state.saidaObrigatoria;
      return ehCarroca(state.saidaObrigatoria)
        ? `${aconteceu}Quem tem a carroça mais alta começa: toque na ${a}|${a}.`
        : `Ninguém tem carroça: começa a pedra mais pesada, a ${state.saidaObrigatoria[0]}|${state.saidaObrigatoria[1]}.`;
    }
    if (state.linha.length === 0) return `${aconteceu}Você começa a rodada: toque em qualquer pedra.`;
    if (sel !== null) return 'Esta pedra serve nas duas pontas: toque na ponta marcada onde quer encostar.';
    if (lances.length > 0) return `${aconteceu}Pontas: ${pt![0]} e ${pt![1]}. Toque numa pedra que tenha um desses números.`;
    if (podeComprar(state)) return `${aconteceu}Nenhuma pedra serve: compre do monte (${state.monte.length}).`;
    return `${aconteceu}Nenhuma pedra serve e o monte acabou: passe a vez.`;
  })();

  const resumoRodada = (() => {
    if (!fimR) return null;
    const [s0, s1] = fimR.somas;
    if (fimR.tipo === 'batida') {
      const v = fimR.vencedor!;
      return `${fala(v)} bateu! Ganha os ${fimR.pontos} pontos da mão de ${contraLinu ? (v === 0 ? 'Linu' : 'você') : NOME[outro(v)]}.`;
    }
    const somas = contraLinu ? `você tem ${s0}, o Linu tem ${s1}` : `o Jogador 1 tem ${s0}, o Jogador 2 tem ${s1}`;
    if (fimR.vencedor === null) return `Jogo trancado: ${somas} pontos na mão. Empate, ninguém marca.`;
    return `Jogo trancado: ${somas} pontos na mão. ${fala(fimR.vencedor)} tem menos e leva ${fimR.pontos}.`;
  })();

  const resultado =
    state.winner === null
      ? null
      : contraLinu
        ? state.winner === 0
          ? { texto: `Você venceu o Linu, ${state.placar[0]} a ${state.placar[1]}!`, tom: 'vitoria' as const }
          : { texto: `O Linu venceu, ${state.placar[1]} a ${state.placar[0]}.`, tom: 'derrota' as const }
        : { texto: `${NOME[state.winner]} venceu, ${state.placar[state.winner]} a ${state.placar[outro(state.winner)]}!`, tom: 'vitoria' as const };

  const podeEscolherAlvo = state.rodada === 1 && state.linha.length === 0 && state.placar[0] + state.placar[1] === 0;
  const botaoMonte = emJogo && !vezDoLinu && maoVisivel && (podeComprar(state) || podePassar(state));

  return (
    <View className="items-center gap-3">
      <PlacarJogo
        jogadores={([0, 1] as const).map((j) => ({
          id: j,
          nome: nomeDe(j),
          amostra: <PedraDomino v1={j === 0 ? 6 : 3} v2={j === 0 ? 6 : 3} l={12} estilo={estilo} />,
          extra: `${state.placar[j]} pts · ${state.maos[j].length} pedras`,
        }))}
        vez={state.turn}
        terminou={!emJogo}
      />
      {resultado ? (
        <FaixaResultado texto={resultado.texto} tom={resultado.tom} />
      ) : fimR ? (
        <FaixaResultado texto={`Fim da rodada ${state.rodada}`} tom={fimR.vencedor === null ? 'empate' : contraLinu && fimR.vencedor === 1 ? 'derrota' : 'vitoria'} />
      ) : vezDoLinu || pensando ? (
        <LinuPensando visivel />
      ) : (
        <Instrucao>{instrucao}</Instrucao>
      )}

      {/* a mão de cima (a do Linu ou a do outro jogador), virada para baixo */}
      <View className="items-center gap-1">
        <Text className="text-[11px] font-bold text-slate-500 dark:text-slate-400">
          {nomeDe(cima)}: {state.maos[cima].length} pedras{mostrarCima ? ` · ${somaMao(state.maos[cima])} pontos` : ''}
        </Text>
        {maoCima}
      </View>

      <View style={{ zIndex: 10 }}>
        <Moldura largura={W} altura={H} fundo={tema.superficie}>
          <FundoSuperficie largura={W} altura={H} tema={tema} unidade={u * 2} />
        </Moldura>
        <View style={{ position: 'absolute', left: borda, top: borda, width: W, height: H }}>
          {state.linha.length === 0 && (
            <View style={{ position: 'absolute', left: 0, right: 0, top: H / 2 - 10, alignItems: 'center' }}>
              <Text style={{ color: tema.linha, opacity: 0.6, fontSize: 12, fontWeight: '700' }}>Rodada {state.rodada}: a mesa está vazia</Text>
            </View>
          )}
          {postas.map(pedraNaMesa)}
        </View>
      </View>

      {/* o monte e o botão de comprar ou passar */}
      <View className="flex-row flex-wrap items-center justify-center gap-3">
        <View className="flex-row items-center gap-1.5" accessibilityLabel={`Monte: ${state.monte.length} pedras`}>
          <View style={{ width: l * 0.7 + 8, height: l * 1.4 + 6 }}>
            {state.monte.length > 0 &&
              [2, 1, 0].map((k) =>
                k < state.monte.length ? (
                  <View key={k} style={{ position: 'absolute', left: k * 3, top: 6 - k * 3 }}>
                    <PedraDomino v1={0} v2={0} l={l * 0.7} emPe estilo={estilo} verso />
                  </View>
                ) : null,
              )}
          </View>
          <Text className="text-xs font-bold text-slate-600 dark:text-slate-300">Monte: {state.monte.length}</Text>
        </View>
        {botaoMonte && (
          <Pressable
            accessibilityRole="button"
            onPress={() => aplicar(podeComprar(state) ? comprar(state) : passar(state))}
            className="rounded-full bg-conecta px-4 py-2 active:opacity-80 dark:bg-blue-500"
          >
            <Text className="text-sm font-extrabold text-white">{podeComprar(state) ? 'Comprar uma pedra' : 'Passar a vez'}</Text>
          </Pressable>
        )}
      </View>

      {fimR ? (
        <View className="w-full items-center gap-2 rounded-2xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
          <Text className="text-center text-sm font-semibold text-slate-700 dark:text-slate-200">{resumoRodada}</Text>
          <Text className="text-center text-xs text-slate-600 dark:text-slate-300">
            Placar: {nomeDe(0)} {state.placar[0]} × {state.placar[1]} {nomeDe(1)} (a partida vai até {state.alvo})
          </Text>
          <View className="flex-row flex-wrap justify-center" style={{ gap: 3 }}>
            {maoDeBaixo.map((p, i) => (
              <PedraDomino key={i} v1={p[0]} v2={p[1]} l={l * 0.7} emPe estilo={estilo} />
            ))}
          </View>
          <Pressable accessibilityRole="button" onPress={novaRodada} className="rounded-full bg-conecta px-4 py-2 active:opacity-80 dark:bg-blue-500">
            <Text className="text-sm font-extrabold text-white">{state.winner !== null ? 'Nova partida' : 'Próxima rodada'}</Text>
          </Pressable>
        </View>
      ) : (
        <View className="items-center gap-1">
          <Text className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{contraLinu ? 'Suas pedras' : `Pedras do ${NOME[baixo]}`}</Text>
          {maoBaixo}
        </View>
      )}

      <ControlesJogo
        onRecomecar={recomecar}
        extra={
          <View className="flex-row flex-wrap items-center justify-center gap-1.5">
            <Text className="text-xs font-bold text-slate-600 dark:text-slate-300">Partida até</Text>
            {ALVOS.map((a) => (
              <Pressable
                key={a}
                accessibilityRole="button"
                accessibilityState={{ selected: state.alvo === a, disabled: !podeEscolherAlvo }}
                disabled={!podeEscolherAlvo && state.alvo !== a}
                onPress={() => escolherAlvo(a)}
                className={`rounded-full border-2 px-2.5 py-1 ${state.alvo === a ? 'border-conecta bg-blue-50 dark:border-blue-400 dark:bg-blue-950' : 'border-slate-200 dark:border-slate-700'} ${!podeEscolherAlvo && state.alvo !== a ? 'opacity-40' : ''}`}
              >
                <Text className="text-xs font-bold text-slate-700 dark:text-slate-200">{a}</Text>
              </Pressable>
            ))}
          </View>
        }
      />
      <Text className="text-center text-[11px] text-slate-500 dark:text-slate-400">
        Rodada {state.rodada}. O alvo só muda antes do primeiro lance; “Recomeçar” começa uma partida nova com ele.
      </Text>
    </View>
  );
}

