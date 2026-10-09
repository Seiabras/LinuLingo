/**
 * Motor de regras do Conecta 4 (Connect Four) — jogo moderno, criado em 1973/74 pelos americanos
 * Howard Wexler e Ned Strongin, lançado pela Milton Bradley em fevereiro de 1974 sob a marca
 * "Connect Four" (fonte: Wikipédia, artigo "Connect Four"). Já foi matematicamente resolvido:
 * jogando perfeitamente, quem começa (vermelho) sempre pode forçar a vitória.
 *
 * Tabuleiro 6×7, peças "caem" até a casa mais baixa livre da coluna escolhida (como ficha de
 * verdade, por gravidade). Vence quem formar 4 peças seguidas na mesma cor — na horizontal,
 * vertical ou diagonal. Se o tabuleiro enche sem ninguém vencer, é empate.
 */

export type Color = 'r' | 'y'; // vermelho começa, amarelo depois

export type Conecta4Board = (Color | null)[][];

export interface Conecta4State {
  board: Conecta4Board;
  turn: Color;
  winner: Color | 'empate' | null;
}

export const ROWS = 6;
export const COLS = 7;
const opponent = (c: Color): Color => (c === 'r' ? 'y' : 'r');

export function createInitialState(): Conecta4State {
  return { board: Array.from({ length: ROWS }, () => Array<Color | null>(COLS).fill(null)), turn: 'r', winner: null };
}

/** Em que fileira a peça cairia nessa coluna (a mais baixa livre) — ou -1 se a coluna está cheia. */
function dropRow(board: Conecta4Board, col: number): number {
  for (let row = ROWS - 1; row >= 0; row--) if (!board[row][col]) return row;
  return -1;
}

export function legalCols(state: Conecta4State): number[] {
  if (state.winner !== null) return [];
  const out: number[] = [];
  for (let col = 0; col < COLS; col++) if (dropRow(state.board, col) !== -1) out.push(col);
  return out;
}

const LINE_DIRS: [number, number][] = [[0, 1], [1, 0], [1, 1], [1, -1]];

/** Se há 4 em linha de `color` passando por (row,col), em qualquer uma das 4 direções. */
function hasFourThrough(board: Conecta4Board, row: number, col: number, color: Color): boolean {
  for (const [dr, dc] of LINE_DIRS) {
    let count = 1;
    let r = row + dr;
    let c = col + dc;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === color) { count++; r += dr; c += dc; }
    r = row - dr;
    c = col - dc;
    while (r >= 0 && r < ROWS && c >= 0 && c < COLS && board[r][c] === color) { count++; r -= dr; c -= dc; }
    if (count >= 4) return true;
  }
  return false;
}

/** Deixa cair uma peça na coluna `col` (precisa estar em `legalCols`). Sem mudança (mesma referência) se não for legal. */
export function dropPiece(state: Conecta4State, col: number): Conecta4State {
  if (state.winner !== null) return state;
  const row = dropRow(state.board, col);
  if (row === -1) return state;

  const board = state.board.map((r) => r.slice());
  board[row][col] = state.turn;

  if (hasFourThrough(board, row, col, state.turn)) {
    return { board, turn: opponent(state.turn), winner: state.turn };
  }
  const full = board.every((r) => r.every((cell) => cell !== null));
  if (full) return { board, turn: opponent(state.turn), winner: 'empate' };
  return { board, turn: opponent(state.turn), winner: null };
}
