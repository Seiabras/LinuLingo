/**
 * Motor de regras do Ligue 4 (Connect Four; “Conecta 4” até 11/10/2026) — jogo moderno, criado em 1973/74 pelos americanos
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

/**
 * Variante 'popout' (Pop Out, vendida pela Hasbro; Wikipédia em inglês “Connect Four”, consultada em
 * 15/10/2026): na sua vez, solte uma peça por cima OU tire uma peça sua da fileira de baixo; as de
 * cima descem uma casa. Ganha quem fizer 4 em linha. O artigo não diz o que acontece quando tirar
 * uma peça faz 4 em linha para os dois; aqui, para simplificar, ganha quem tirou. O tabuleiro cheio
 * não empata (ainda dá para tirar); empata quem fica sem lance, ou a mesma posição pela 3ª vez.
 */
export type RegraConecta4 = 'classica' | 'popout';

export interface Conecta4State {
  board: Conecta4Board;
  turn: Color;
  winner: Color | 'empate' | null;
  regra?: RegraConecta4;
  /** no Pop Out: quantas vezes cada posição (grade + vez) já apareceu */
  vistas?: Record<string, number>;
}

export const ROWS = 6;
export const COLS = 7;
const opponent = (c: Color): Color => (c === 'r' ? 'y' : 'r');

export function createInitialState(regra: RegraConecta4 = 'classica'): Conecta4State {
  const board = Array.from({ length: ROWS }, () => Array<Color | null>(COLS).fill(null));
  return regra === 'popout' ? { board, turn: 'r', winner: null, regra, vistas: {} } : { board, turn: 'r', winner: null };
}

const chave = (board: Conecta4Board, turn: Color) => board.map((l) => l.map((c) => c ?? '.').join('')).join('/') + turn;

/** Há 4 em linha de `color` em algum lugar do tabuleiro? */
export function temQuatro(board: Conecta4Board, color: Color): boolean {
  for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) if (board[r][c] === color && hasFourThrough(board, r, c, color)) return true;
  return false;
}

/** Pop Out: as colunas em que quem tem a vez pode tirar a própria peça de baixo. */
export function legalPops(state: Conecta4State): number[] {
  if (state.regra !== 'popout' || state.winner !== null) return [];
  const out: number[] = [];
  for (let col = 0; col < COLS; col++) if (state.board[ROWS - 1][col] === state.turn) out.push(col);
  return out;
}

/** Fecha a vez no Pop Out: repetição e falta de lance viram empate. */
function fecharPopOut(prev: Conecta4State, next: Conecta4State): Conecta4State {
  if (next.winner !== null) return next;
  const k = chave(next.board, next.turn);
  const vistas = { ...(prev.vistas ?? {}), [k]: ((prev.vistas ?? {})[k] ?? 0) + 1 };
  const comVistas = { ...next, vistas };
  if (vistas[k]! >= 3) return { ...comVistas, winner: 'empate' };
  if (legalCols(comVistas).length === 0 && legalPops(comVistas).length === 0) return { ...comVistas, winner: 'empate' };
  return comVistas;
}

/** Pop Out: tira a peça de baixo da coluna `col` (tem de ser de quem joga); as de cima descem. */
export function popPiece(state: Conecta4State, col: number): Conecta4State {
  if (!legalPops(state).includes(col)) return state;
  const board = state.board.map((r) => r.slice());
  for (let row = ROWS - 1; row > 0; row--) board[row][col] = board[row - 1][col];
  board[0][col] = null;
  const eu = state.turn;
  const outro = opponent(eu);
  const winner: Color | null = temQuatro(board, eu) ? eu : temQuatro(board, outro) ? outro : null;
  return fecharPopOut(state, { ...state, board, turn: outro, winner });
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

  if (state.regra === 'popout') {
    return fecharPopOut(state, { ...state, board, turn: opponent(state.turn), winner: hasFourThrough(board, row, col, state.turn) ? state.turn : null });
  }
  if (hasFourThrough(board, row, col, state.turn)) {
    return { board, turn: opponent(state.turn), winner: state.turn };
  }
  const full = board.every((r) => r.every((cell) => cell !== null));
  if (full) return { board, turn: opponent(state.turn), winner: 'empate' };
  return { board, turn: opponent(state.turn), winner: null };
}
