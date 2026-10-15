/**
 * Motor do Quarto (Blaise Müller, Gigamic, 1991). Regras da folha oficial da Gigamic (edição
 * 11-2016, “© 1991 Gigamic from a concept of Blaise Muller”, consultada em 14/10/2026):
 *
 *   - 16 peças diferentes, cada uma com 4 características: clara ou escura, redonda ou quadrada,
 *     alta ou baixa, maciça ou furada (“solid or hollow”);
 *   - quem começa escolhe uma peça e a DÁ ao adversário; ele a coloca numa casa vazia e escolhe a
 *     próxima peça para o outro, e assim por diante;
 *   - ganha quem, ao colocar a peça recebida, completa uma linha de 4 peças (horizontal, vertical
 *     ou diagonal) com pelo menos uma característica em comum, e anuncia “QUARTO!”. Não precisa ter
 *     colocado as outras 3;
 *   - se ele não percebe e passa uma peça ao adversário, este pode, “naquele momento”, anunciar o
 *     “QUARTO!” e ganha; se ninguém vê o alinhamento no lance em que ele surgiu, ele perde o valor e
 *     o jogo continua;
 *   - empate: todas as peças colocadas sem ninguém anunciar;
 *   - variante para jogadores avançados: vale também um QUADRADO de 4 peças (os 9 quadrados 2×2 do
 *     tabuleiro), “9 maneiras a mais de anunciar QUARTO!”;
 *   - variante para iniciantes: só valem 1, 2 ou 3 das características (`caracs`, uma máscara dos
 *     bits que contam; sem ela, as 4).
 *
 * A peça é um número de 0 a 15, um bit por característica (ver `ALTA`, `ESCURA`, `QUADRADA`,
 * `FURADA`); o bit desligado é o contrário (baixa, clara, redonda, maciça).
 */

export const ALTA = 1;
export const ESCURA = 2;
export const QUADRADA = 4;
export const FURADA = 8;
export const TODAS = 15;

export type JogadorQ = 0 | 1;

export interface QuartoState {
  /** as 16 casas (linha a linha); a peça ou null */
  board: (number | null)[];
  /** as peças ainda fora do tabuleiro e fora da mão (uma máscara de 16 bits, bit p = peça p) */
  livres: number;
  /** quem age agora: escolhe a peça para o outro (fase “escolher”) ou coloca a recebida (“colocar”) */
  turn: JogadorQ;
  fase: 'escolher' | 'colocar';
  /** a peça na mão de quem vai colocar (só na fase “colocar”) */
  dada: number | null;
  /** variante avançada: os quadrados 2×2 também valem */
  quadrados: boolean;
  /** regra oficial do anúncio: quem completa precisa anunciar (senão a vitória é automática) */
  anunciar: boolean;
  /** o Quarto que quem acabou de colocar formou e ainda não anunciou (as casas de cada alinhamento) */
  aberto: number[][] | null;
  /** o Quarto que o adversário formou e deixou passar: quem vai colocar ainda pode anunciá-lo */
  perdido: number[][] | null;
  winner: JogadorQ | 'empate' | null;
  /** as casas do alinhamento vencedor */
  linha: number[];
  /** a casa do último lance */
  ultimo: number | null;
  /** quando a vitória veio de um Quarto que o adversário deixou passar */
  roubado?: boolean;
  /** variante para iniciantes: as características que contam (máscara de `ALTA`, `ESCURA`…); sem ela, todas */
  caracs?: number;
}

/** As 10 linhas (4 horizontais, 4 verticais, 2 diagonais). */
export const LINHAS: number[][] = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [0, 4, 8, 12],
  [1, 5, 9, 13],
  [2, 6, 10, 14],
  [3, 7, 11, 15],
  [0, 5, 10, 15],
  [3, 6, 9, 12],
];

/** Os 9 quadrados 2×2 da variante avançada. */
export const QUADRADOS: number[][] = [];
for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) QUADRADOS.push([r * 4 + c, r * 4 + c + 1, r * 4 + c + 4, r * 4 + c + 5]);

export const alinhamentos = (quadrados: boolean) => (quadrados ? [...LINHAS, ...QUADRADOS] : LINHAS);

/** Os alinhamentos que passam por cada casa, com e sem a variante. */
const POR_CASA: Record<'l' | 'q', number[][][]> = { l: [], q: [] };
for (let i = 0; i < 16; i++) {
  POR_CASA.l.push(LINHAS.filter((a) => a.includes(i)));
  POR_CASA.q.push(alinhamentos(true).filter((a) => a.includes(i)));
}
export const alinhamentosDaCasa = (i: number, quadrados: boolean) => POR_CASA[quadrados ? 'q' : 'l'][i]!;

/**
 * As características em comum de 4 peças, num número de 8 bits: os 4 de baixo são as ligadas em
 * comum (todas altas, todas escuras…), os 4 de cima as desligadas em comum (todas baixas, claras…).
 * Zero = nada em comum.
 */
export function comum(pecas: number[], caracs = TODAS): number {
  let sim = caracs;
  let nao = caracs;
  for (const p of pecas) {
    sim &= p;
    nao &= ~p & TODAS;
  }
  return sim | (nao << 4);
}

/** Os alinhamentos completos e com algo em comum que passam pela casa `i`. */
export function quartosNaCasa(board: (number | null)[], i: number, quadrados: boolean, caracs = TODAS): number[][] {
  const r: number[][] = [];
  for (const a of alinhamentosDaCasa(i, quadrados)) {
    const ps = a.map((k) => board[k]);
    if (ps.every((p) => p !== null) && comum(ps as number[], caracs) !== 0) r.push(a);
  }
  return r;
}

export function createInitialState(opcoes: { quadrados?: boolean; anunciar?: boolean; comeca?: JogadorQ; caracs?: number } = {}): QuartoState {
  return {
    ...(opcoes.caracs !== undefined && opcoes.caracs !== TODAS ? { caracs: opcoes.caracs & TODAS } : {}),
    board: Array(16).fill(null),
    livres: 0xffff,
    turn: opcoes.comeca ?? 0,
    fase: 'escolher',
    dada: null,
    quadrados: !!opcoes.quadrados,
    anunciar: !!opcoes.anunciar,
    aberto: null,
    perdido: null,
    winner: null,
    linha: [],
    ultimo: null,
  };
}

export const outro = (j: JogadorQ): JogadorQ => (j === 0 ? 1 : 0);
export const estaLivre = (s: QuartoState, p: number) => (s.livres & (1 << p)) !== 0;
export function pecasLivres(s: QuartoState): number[] {
  const r: number[] = [];
  for (let p = 0; p < 16; p++) if (estaLivre(s, p)) r.push(p);
  return r;
}
export const casasVazias = (s: QuartoState) => s.board.flatMap((p, i) => (p === null ? [i] : []));

/** Dá a peça `p` para o adversário colocar. Devolve o mesmo estado se o lance não vale. */
export function escolher(s: QuartoState, p: number): QuartoState {
  if (s.winner !== null || s.fase !== 'escolher' || !estaLivre(s, p)) return s;
  return {
    ...s,
    livres: s.livres & ~(1 << p),
    turn: outro(s.turn),
    fase: 'colocar',
    dada: p,
    // o Quarto que não foi anunciado fica à disposição do adversário, só nesta vez dele
    perdido: s.aberto,
    aberto: null,
  };
}

/** Coloca a peça recebida na casa `i`. Devolve o mesmo estado se o lance não vale. */
export function colocar(s: QuartoState, i: number): QuartoState {
  if (s.winner !== null || s.fase !== 'colocar' || s.dada === null || s.board[i] !== null) return s;
  const board = s.board.slice();
  board[i] = s.dada;
  const quartos = quartosNaCasa(board, i, s.quadrados, s.caracs);
  const base: QuartoState = { ...s, board, dada: null, fase: 'escolher', ultimo: i, perdido: null, aberto: null };
  if (quartos.length > 0 && !s.anunciar) return vence(base, s.turn, quartos);
  const cheio = board.every((p) => p !== null);
  if (quartos.length > 0) return { ...base, aberto: quartos };
  if (cheio) return { ...base, winner: 'empate' };
  return base;
}

function vence(s: QuartoState, j: JogadorQ, quartos: number[][], roubado = false): QuartoState {
  const linha = [...new Set(quartos.flat())];
  return { ...s, winner: j, linha, aberto: null, perdido: null, roubado: roubado || undefined };
}

/** O Quarto que quem tem a vez pode anunciar agora (o próprio ou o que o adversário deixou passar). */
export const quartoAnunciavel = (s: QuartoState): number[][] | null => (s.winner !== null ? null : s.fase === 'escolher' ? s.aberto : s.perdido);

/**
 * “QUARTO!”: quem tem a vez anuncia. Vale o alinhamento que ele acabou de formar ou o que o
 * adversário formou e deixou passar. Sem alinhamento para anunciar, devolve o mesmo estado.
 */
export function anunciar(s: QuartoState): QuartoState {
  const q = quartoAnunciavel(s);
  if (!q) return s;
  return vence(s, s.turn, q, s.fase === 'colocar');
}

/** Tabuleiro cheio com um Quarto que ninguém anunciou: a partida termina empatada. */
export function encerrar(s: QuartoState): QuartoState {
  if (s.winner !== null || s.board.some((p) => p === null)) return s;
  return { ...s, winner: 'empate', aberto: null, perdido: null };
}

/** As casas em que a peça `p` completaria um Quarto agora. */
export function casasQueVencem(board: (number | null)[], p: number, quadrados: boolean, caracs = TODAS): number[] {
  const r: number[] = [];
  for (let i = 0; i < 16; i++) {
    if (board[i] !== null) continue;
    board[i] = p;
    if (quartosNaCasa(board, i, quadrados, caracs).length > 0) r.push(i);
    board[i] = null;
  }
  return r;
}

/** As características da variante para iniciantes, na ordem em que entram: 1 (cor), 2 (cor e altura), 3 (cor, altura e forma). */
export const CARACS_INICIANTES: Record<1 | 2 | 3, number> = { 1: ESCURA, 2: ESCURA | ALTA, 3: ESCURA | ALTA | QUADRADA };

const NOMES: [number, string, string][] = [
  [ALTA, 'altas', 'baixas'],
  [ESCURA, 'escuras', 'claras'],
  [QUADRADA, 'quadradas', 'redondas'],
  [FURADA, 'furadas', 'maciças'],
];

/** “alta, escura, quadrada, furada” */
export function descreverPeca(p: number): string {
  return NOMES.map(([b, sim, nao]) => (p & b ? sim : nao).slice(0, -1)).join(', ');
}

/** O que as peças do alinhamento têm em comum, por extenso: “todas altas e escuras”. */
export function descreverComum(c: number): string {
  const partes: string[] = [];
  for (const [b, sim, nao] of NOMES) {
    if (c & b) partes.push(sim);
    if (c & (b << 4)) partes.push(nao);
  }
  if (partes.length === 0) return '';
  return 'todas ' + (partes.length === 1 ? partes[0] : `${partes.slice(0, -1).join(', ')} e ${partes[partes.length - 1]}`);
}
