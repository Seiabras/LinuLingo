/**
 * Motor de regras de Reversi/Othello — tabuleiro 8×8, regras "Othello" (a versão padronizada e
 * determinística, com posição inicial fixa). História real: a Reversi foi publicada na Inglaterra
 * em 1883 por Lewis Waterman, que disputou a autoria com John Mollett (ele chamava a versão dele
 * de "The Game of Annexation") — a disputa nunca foi resolvida por nenhum tribunal ou fonte
 * histórica definitiva. Quase 90 anos depois, em 1971, o japonês Goro Hasegawa patenteou uma
 * versão com posição inicial fixa e nome próprio, Othello, publicada no Japão pela Tsukuda
 * Original em 1973 — foi essa padronização que pegou mundialmente (fonte: Wikipédia, artigo
 * "Reversi").
 *
 * Peça preta joga primeiro. Colocar uma peça só é legal se, em pelo menos 1 das 8 direções, ela
 * fechar uma linha contínua de peças do adversário terminando numa peça própria (essas peças
 * viram da sua cor). Se um jogador não tem lance legal nenhum, passa a vez automaticamente (sem
 * escolha); se os dois não têm lance (tabuleiro cheio ou travado), o jogo acaba. Vence quem tem
 * mais peças no tabuleiro no final.
 */

export type Color = 'b' | 'w'; // b = preto, w = branco

export type ReversiBoard = (Color | null)[][];

export interface ReversiState {
  board: ReversiBoard;
  turn: Color;
  /** null enquanto o jogo continua; 'empate' ou a cor de quem tem mais peças, quando os dois não têm lance. */
  winner: Color | 'empate' | null;
}

const BOARD_SIZE = 8;
const opponent = (c: Color): Color => (c === 'b' ? 'w' : 'b');
const inBounds = (row: number, col: number) => row >= 0 && row < BOARD_SIZE && col >= 0 && col < BOARD_SIZE;
const DIRS: [number, number][] = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];

export function createInitialState(): ReversiState {
  const board: ReversiBoard = Array.from({ length: BOARD_SIZE }, () => Array<Color | null>(BOARD_SIZE).fill(null));
  board[3][3] = 'w';
  board[3][4] = 'b';
  board[4][3] = 'b';
  board[4][4] = 'w';
  return { board, turn: 'b', winner: null };
}

/** As peças do adversário que `color` viraria ao jogar em (row,col), na direção [dr,dc] — ou [] se essa direção não captura nada. */
function flipsInDirection(board: ReversiBoard, row: number, col: number, dr: number, dc: number, color: Color): [number, number][] {
  const opp = opponent(color);
  const line: [number, number][] = [];
  let r = row + dr;
  let c = col + dc;
  while (inBounds(r, c) && board[r][c] === opp) {
    line.push([r, c]);
    r += dr;
    c += dc;
  }
  if (line.length > 0 && inBounds(r, c) && board[r][c] === color) return line;
  return [];
}

/** Todas as peças que virariam se `color` jogasse em (row,col) — [] se o lance não é legal ali. */
function allFlips(board: ReversiBoard, row: number, col: number, color: Color): [number, number][] {
  if (board[row][col] !== null) return [];
  const flips: [number, number][] = [];
  for (const [dr, dc] of DIRS) flips.push(...flipsInDirection(board, row, col, dr, dc, color));
  return flips;
}

/** Casas onde `color` pode jogar agora. */
export function legalMoves(board: ReversiBoard, color: Color): [number, number][] {
  const out: [number, number][] = [];
  for (let row = 0; row < BOARD_SIZE; row++)
    for (let col = 0; col < BOARD_SIZE; col++) if (allFlips(board, row, col, color).length > 0) out.push([row, col]);
  return out;
}

function countPieces(board: ReversiBoard, color: Color): number {
  return board.flat().filter((c) => c === color).length;
}

/** Joga em (row,col) pra quem tem a vez. Sem mudança (mesma referência) se não for legal. Passa a vez automaticamente quando o próximo não tem lance (e encerra se NENHUM dos dois tiver). */
export function makeMove(state: ReversiState, row: number, col: number): ReversiState {
  if (state.winner !== null) return state;
  const flips = allFlips(state.board, row, col, state.turn);
  if (flips.length === 0) return state;

  const board = state.board.map((r) => r.slice());
  board[row][col] = state.turn;
  for (const [r, c] of flips) board[r][c] = state.turn;

  const next = opponent(state.turn);
  if (legalMoves(board, next).length > 0) return { board, turn: next, winner: null };

  // próximo sem lance: passa a vez de volta, automaticamente
  if (legalMoves(board, state.turn).length > 0) return { board, turn: state.turn, winner: null };

  // nenhum dos dois tem lance: o jogo acaba, vence quem tem mais peças
  const blacks = countPieces(board, 'b');
  const whites = countPieces(board, 'w');
  const winner: Color | 'empate' = blacks === whites ? 'empate' : blacks > whites ? 'b' : 'w';
  return { board, turn: next, winner };
}
