/**
 * Motor do terni lapilli, o “jogo da velha” dos romanos. Wikipédia em inglês, “Tic-tac-toe”
 * (consultada em 16/10/2026): em vez de quantas peças quisessem, cada um tinha só três, e depois era
 * preciso movê-las “para casas vazias” para continuar jogando. Vence quem faz três em linha (linha,
 * coluna ou diagonal), pondo ou movendo.
 *
 * O que o app escolheu (as fontes não dizem): a peça pode ir para qualquer casa vazia, não só para a
 * vizinha; e, para a partida não durar para sempre, a mesma posição pela terceira vez é empate.
 *
 * Casas 0 a 8, linha a linha. O X começa.
 */
export type MarcaT = 'x' | 'o';

export interface TerniState {
  board: (MarcaT | null)[];
  turn: MarcaT;
  /** 'por' até cada um ter as suas três peças; depois 'mover' */
  fase: 'por' | 'mover';
  winner: MarcaT | 'empate' | null;
  linha: number[];
  /** o último lance (de onde saiu, se foi um movimento, e onde caiu) */
  ultimo: { de: number | null; para: number } | null;
  repeticoes: Record<string, number>;
}

export interface LanceT {
  de: number | null;
  para: number;
}

export const PECAS_TERNI = 3;
export const LINHAS_TERNI: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const chave = (b: (MarcaT | null)[], t: MarcaT) => b.map((m) => m ?? '.').join('') + t;
const outra = (m: MarcaT): MarcaT => (m === 'x' ? 'o' : 'x');

export function createInitialState(): TerniState {
  const board = Array<MarcaT | null>(9).fill(null);
  return { board, turn: 'x', fase: 'por', winner: null, linha: [], ultimo: null, repeticoes: { [chave(board, 'x')]: 1 } };
}

export const pecasDe = (s: Pick<TerniState, 'board'>, m: MarcaT) => s.board.filter((v) => v === m).length;

export function lancesLegais(s: TerniState): LanceT[] {
  if (s.winner !== null) return [];
  const vazias = s.board.flatMap((v, i) => (v === null ? [i] : []));
  if (s.fase === 'por') return vazias.map((para) => ({ de: null, para }));
  const minhas = s.board.flatMap((v, i) => (v === s.turn ? [i] : []));
  return minhas.flatMap((de) => vazias.map((para) => ({ de, para })));
}

function linhaFeita(b: (MarcaT | null)[], m: MarcaT): number[] {
  return LINHAS_TERNI.find((l) => l.every((i) => b[i] === m)) ?? [];
}

/** Faz o lance (pôr, com `de` null, ou mover). Lance que não vale devolve o mesmo estado. */
export function jogar(s: TerniState, l: LanceT): TerniState {
  if (!lancesLegais(s).some((x) => x.de === l.de && x.para === l.para)) return s;
  const board = s.board.slice();
  if (l.de !== null) board[l.de] = null;
  board[l.para] = s.turn;
  const turn = outra(s.turn);
  const fase = pecasDe({ board }, 'x') === PECAS_TERNI && pecasDe({ board }, 'o') === PECAS_TERNI ? 'mover' : 'por';
  const k = chave(board, turn);
  const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
  const linha = linhaFeita(board, s.turn);
  const winner = linha.length ? s.turn : repeticoes[k]! >= 3 ? 'empate' : null;
  return { board, turn, fase, winner, linha, ultimo: { de: l.de, para: l.para }, repeticoes };
}
