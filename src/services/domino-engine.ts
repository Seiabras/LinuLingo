/**
 * Dominó a dois (o “jogo de compra”, em inglês Draw game), com o jogo duplo-seis de 28 pedras.
 * Regras conferidas em pagat.com (Draw Dominoes) e na Wikipédia (“Dominoes”, em inglês, e “Dominó”,
 * em português), consultadas em 14/10/2026; ver o texto do jogo em `data/jogos-conhecimento.ts`.
 *
 * - Cada jogador recebe 7 pedras; as 14 que sobram ficam no monte (o “dorme”), viradas para baixo.
 * - Na primeira rodada começa quem tem a carroça (o duplo) mais alta, jogando essa carroça; se
 *   ninguém tiver carroça, começa quem tem a pedra mais pesada, com ela. Nas rodadas seguintes,
 *   começa quem ganhou a rodada anterior, com a pedra que quiser (empate: quem não começou a anterior).
 * - Na sua vez, você encosta uma pedra numa das duas pontas da linha, com o número igual. Sem pedra
 *   que sirva, compra do monte, uma de cada vez, até poder jogar; com o monte vazio, passa.
 * - A rodada acaba quando alguém “bate” (joga a última pedra): ele ganha os pontos que sobraram na mão
 *   do outro. Se ninguém mais pode jogar e o monte acabou, o jogo está “trancado”: ganha quem tem
 *   menos pontos na mão e leva os pontos do outro; com a mesma soma, ninguém marca.
 * - A partida vai até um alvo de pontos (100, como no pagat, ou outro escolhido).
 *
 * O estado é imutável. Toda a sorte (embaralhar) vem de `rng`, que o teste pode trocar por uma
 * sequência fixa.
 */

export type Jogador = 0 | 1;
/** Uma pedra: os dois números, o menor primeiro. */
export type Pedra = readonly [number, number];
export type Lado = 'esq' | 'dir';
export type Rng = () => number;

/** Uma pedra já na linha, virada do jeito que ficou: `a` é o número da esquerda e `b`, o da direita. */
export interface PedraNaLinha {
  a: number;
  b: number;
  por: Jogador;
  /** em que ordem entrou (0 = a primeira) */
  ordem: number;
}

export type Acontecimento =
  | { tipo: 'jogou'; por: Jogador; pedra: Pedra; lado: Lado; indiceMao: number; tamanhoMao: number }
  | { tipo: 'comprou'; por: Jogador }
  | { tipo: 'passou'; por: Jogador };

export interface FimRodada {
  tipo: 'batida' | 'trancado';
  /** quem ganhou a rodada (null: trancado com a mesma soma) */
  vencedor: Jogador | null;
  pontos: number;
  /** a soma dos pontos que sobrou na mão de cada um */
  somas: [number, number];
}

export interface DominoState {
  maos: [Pedra[], Pedra[]];
  monte: Pedra[];
  linha: PedraNaLinha[];
  /** índice, em `linha`, da primeira pedra jogada (as da esquerda dela foram encostadas na ponta esquerda) */
  origem: number;
  turn: Jogador;
  placar: [number, number];
  alvo: number;
  rodada: number;
  /** quem começou a rodada */
  comecou: Jogador;
  /** a pedra que é obrigatória no primeiro lance (a carroça mais alta, na primeira rodada) */
  saidaObrigatoria: Pedra | null;
  fimRodada: FimRodada | null;
  /** quem venceu a partida (chegou ao alvo) */
  winner: Jogador | null;
  ultimo: Acontecimento | null;
  /**
   * Números que cada jogador mostrou que não tem: as pontas da linha na hora em que ele comprou ou
   * passou. É informação que os dois veem na mesa (o Linu usa, como um jogador de verdade usaria).
   */
  semNumero: [number[], number[]];
}

export const ALVOS = [50, 100, 150] as const;
export const ALVO_PADRAO = 100;
export const PEDRAS_NA_MAO = 7;

/** As 28 pedras do duplo-seis, em ordem: [0,0], [0,1] … [6,6]. */
export function jogoCompleto(): Pedra[] {
  const out: Pedra[] = [];
  for (let a = 0; a <= 6; a++) for (let b = a; b <= 6; b++) out.push([a, b]);
  return out;
}

export const pontos = (p: Pedra) => p[0] + p[1];
export const ehCarroca = (p: Pedra) => p[0] === p[1];
export const somaMao = (m: readonly Pedra[]) => m.reduce((t, p) => t + pontos(p), 0);
export const outro = (j: Jogador): Jogador => (j === 0 ? 1 : 0);
const mesma = (p: Pedra, q: Pedra) => p[0] === q[0] && p[1] === q[1];

/** Embaralha (Fisher–Yates) com o sorteio dado. */
export function embaralhar<T>(xs: readonly T[], rng: Rng): T[] {
  const out = [...xs];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/** As pontas abertas da linha: [esquerda, direita]; linha vazia, null. */
export function pontas(s: Pick<DominoState, 'linha'>): [number, number] | null {
  if (s.linha.length === 0) return null;
  return [s.linha[0]!.a, s.linha[s.linha.length - 1]!.b];
}

/** Quem sai na primeira rodada e com que pedra: a carroça mais alta; sem carroça, a pedra mais pesada. */
function saida(maos: [Pedra[], Pedra[]]): { quem: Jogador; pedra: Pedra } {
  let melhor: { quem: Jogador; pedra: Pedra; nota: number } | null = null;
  for (const quem of [0, 1] as const)
    for (const p of maos[quem]) {
      // carroça vale mais que qualquer pedra comum; entre as comuns, a mais pesada (e, empatando, a do maior número)
      const nota = ehCarroca(p) ? 1000 + p[0] : pontos(p) * 10 + p[1];
      if (!melhor || nota > melhor.nota) melhor = { quem, pedra: p, nota };
    }
  return { quem: melhor!.quem, pedra: melhor!.pedra };
}

function distribuir(rng: Rng): { maos: [Pedra[], Pedra[]]; monte: Pedra[] } {
  const todas = embaralhar(jogoCompleto(), rng);
  return { maos: [todas.slice(0, PEDRAS_NA_MAO), todas.slice(PEDRAS_NA_MAO, 2 * PEDRAS_NA_MAO)], monte: todas.slice(2 * PEDRAS_NA_MAO) };
}

export function createInitialState(alvo: number = ALVO_PADRAO, rng: Rng = Math.random): DominoState {
  const { maos, monte } = distribuir(rng);
  const s = saida(maos);
  return {
    maos,
    monte,
    linha: [],
    origem: 0,
    turn: s.quem,
    placar: [0, 0],
    alvo,
    rodada: 1,
    comecou: s.quem,
    saidaObrigatoria: s.pedra,
    fimRodada: null,
    winner: null,
    ultimo: null,
    semNumero: [[], []],
  };
}

/** Em que pontas a pedra cabe (as duas, quando as pontas são iguais, contam como uma só: a direita). */
export function ladosPossiveis(s: DominoState, p: Pedra): Lado[] {
  const pt = pontas(s);
  if (!pt) {
    if (s.saidaObrigatoria && !mesma(p, s.saidaObrigatoria)) return [];
    return ['dir'];
  }
  const [e, d] = pt;
  const out: Lado[] = [];
  if ((p[0] === e || p[1] === e) && e !== d) out.push('esq');
  if (p[0] === d || p[1] === d) out.push('dir');
  return out;
}

export interface LanceDomino {
  /** a posição da pedra na mão de quem joga */
  i: number;
  lado: Lado;
}

/** Os lances de quem tem a vez (vazio quando ele tem de comprar ou passar, ou quando a rodada acabou). */
export function lancesLegais(s: DominoState): LanceDomino[] {
  if (s.fimRodada || s.winner !== null) return [];
  const out: LanceDomino[] = [];
  s.maos[s.turn].forEach((p, i) => {
    for (const lado of ladosPossiveis(s, p)) out.push({ i, lado });
  });
  return out;
}

export const podeComprar = (s: DominoState) => !s.fimRodada && s.winner === null && s.monte.length > 0 && lancesLegais(s).length === 0;
export const podePassar = (s: DominoState) => !s.fimRodada && s.winner === null && s.monte.length === 0 && lancesLegais(s).length === 0;

/** Se um jogador tem alguma pedra que cabe nas pontas. */
function temJogada(s: DominoState, j: Jogador): boolean {
  const pt = pontas(s);
  if (!pt) return true;
  return s.maos[j].some((p) => p[0] === pt[0] || p[1] === pt[0] || p[0] === pt[1] || p[1] === pt[1]);
}

/** Fecha a rodada, soma os pontos e vê se alguém chegou ao alvo. */
function fecharRodada(s: DominoState, tipo: FimRodada['tipo'], batedor: Jogador | null): DominoState {
  const somas: [number, number] = [somaMao(s.maos[0]), somaMao(s.maos[1])];
  let vencedor: Jogador | null = batedor;
  if (tipo === 'trancado') vencedor = somas[0] < somas[1] ? 0 : somas[1] < somas[0] ? 1 : null;
  const pontosRodada = vencedor === null ? 0 : somas[outro(vencedor)];
  const placar: [number, number] = [...s.placar];
  if (vencedor !== null) placar[vencedor] += pontosRodada;
  const winner = vencedor !== null && placar[vencedor] >= s.alvo ? vencedor : null;
  return { ...s, placar, fimRodada: { tipo, vencedor, pontos: pontosRodada, somas }, winner };
}

/** Depois de um lance: passa a vez e vê se o jogo trancou. */
function depois(s: DominoState): DominoState {
  const prox = { ...s, turn: outro(s.turn) };
  if (prox.monte.length === 0 && !temJogada(prox, 0) && !temJogada(prox, 1)) return fecharRodada(prox, 'trancado', null);
  return prox;
}

/** Joga a pedra `i` da mão de quem tem a vez na ponta `lado`. Lance que não vale devolve o mesmo estado. */
export function jogar(s: DominoState, i: number, lado: Lado): DominoState {
  if (s.fimRodada || s.winner !== null) return s;
  const mao = s.maos[s.turn];
  const p = mao[i];
  if (!p || !ladosPossiveis(s, p).includes(lado)) return s;
  const pt = pontas(s);
  const ordem = s.linha.length;
  let linha: PedraNaLinha[];
  let origem = s.origem;
  if (!pt) linha = [{ a: p[0], b: p[1], por: s.turn, ordem }];
  else if (lado === 'esq') {
    // o número igual à ponta fica encostado nela (à direita da pedra nova)
    const [a, b] = p[1] === pt[0] ? [p[0], p[1]] : [p[1], p[0]];
    linha = [{ a, b, por: s.turn, ordem }, ...s.linha];
    origem++;
  } else {
    const [a, b] = p[0] === pt[1] ? [p[0], p[1]] : [p[1], p[0]];
    linha = [...s.linha, { a, b, por: s.turn, ordem }];
  }
  const maos: [Pedra[], Pedra[]] = [...s.maos];
  maos[s.turn] = mao.filter((_, k) => k !== i);
  const ultimo: Acontecimento = { tipo: 'jogou', por: s.turn, pedra: p, lado, indiceMao: i, tamanhoMao: mao.length };
  const novo: DominoState = { ...s, maos, linha, origem, saidaObrigatoria: null, ultimo };
  if (maos[s.turn].length === 0) return fecharRodada(novo, 'batida', s.turn);
  return depois(novo);
}

/** Compra uma pedra do monte (só quando não há pedra que sirva). A vez continua com quem comprou. */
export function comprar(s: DominoState): DominoState {
  if (!podeComprar(s)) return s;
  const [p, ...monte] = s.monte;
  const maos: [Pedra[], Pedra[]] = [...s.maos];
  maos[s.turn] = [...s.maos[s.turn], p!];
  const semNumero: [number[], number[]] = [...s.semNumero];
  semNumero[s.turn] = [...new Set(pontas(s) ?? [])];
  return { ...s, maos, monte, semNumero, ultimo: { tipo: 'comprou', por: s.turn } };
}

/** Passa a vez (só com o monte vazio e sem pedra que sirva). */
export function passar(s: DominoState): DominoState {
  if (!podePassar(s)) return s;
  const semNumero: [number[], number[]] = [...s.semNumero];
  semNumero[s.turn] = [...new Set(pontas(s) ?? [])];
  return depois({ ...s, semNumero, ultimo: { tipo: 'passou', por: s.turn } });
}

/** Começa a rodada seguinte (depois de `fimRodada`, se a partida não acabou). */
export function proximaRodada(s: DominoState, rng: Rng = Math.random): DominoState {
  if (!s.fimRodada || s.winner !== null) return s;
  const { maos, monte } = distribuir(rng);
  const quem = s.fimRodada.vencedor ?? outro(s.comecou);
  return {
    ...s,
    maos,
    monte,
    linha: [],
    origem: 0,
    turn: quem,
    comecou: quem,
    rodada: s.rodada + 1,
    saidaObrigatoria: null,
    fimRodada: null,
    ultimo: null,
    semNumero: [[], []],
  };
}

/** Muda o alvo da partida (só antes do primeiro lance da partida). */
export function comAlvo(s: DominoState, alvo: number): DominoState {
  if (s.rodada !== 1 || s.linha.length > 0 || s.placar[0] + s.placar[1] > 0) return s;
  return { ...s, alvo };
}

/**
 * O que um jogador sabe da mesa: a própria mão, a linha, quantas pedras o outro tem, quantas há no
 * monte e os números que o outro mostrou que não tem. É só isso que o Linu enxerga (`jogos-ia.ts`).
 */
export interface VisaoDomino {
  eu: Jogador;
  mao: Pedra[];
  linha: PedraNaLinha[];
  pontas: [number, number] | null;
  saidaObrigatoria: Pedra | null;
  pedrasDoOutro: number;
  noMonte: number;
  outroSemNumero: number[];
  lances: LanceDomino[];
  placar: [number, number];
  alvo: number;
}

export function visaoDe(s: DominoState, eu: Jogador): VisaoDomino {
  return {
    eu,
    mao: [...s.maos[eu]],
    linha: s.linha,
    pontas: pontas(s),
    saidaObrigatoria: s.saidaObrigatoria,
    pedrasDoOutro: s.maos[outro(eu)].length,
    noMonte: s.monte.length,
    outroSemNumero: [...s.semNumero[outro(eu)]],
    lances: s.turn === eu ? lancesLegais(s) : [],
    placar: s.placar,
    alvo: s.alvo,
  };
}
