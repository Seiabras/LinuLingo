/**
 * Motor de regras de Hnefatafl ("tábua do punho"/"mesa do rei") — jogo da família Tafl, da
 * Escandinávia da Era Viking (documentado entre os séc. IV-XII; tabuleiro de Gokstad, Noruega,
 * é do séc. IX). Implementa as regras de Copenhague (Copenhagen Hnefatafl), tabuleiro 11×11, o
 * conjunto de regras modernas mais citado pra reconstruir o jogo (fonte: material de Aage Nielsen,
 * aagenielsen.dk, referência padrão da comunidade de jogadores de tafl, e a Wikipédia em inglês,
 * artigo "Tafl games").
 *
 * Lados assimétricos: ATACANTES (24 peças, jogam primeiro) tentam capturar o REI; DEFENSORES (12
 * peças + o rei, que começa no trono no centro) tentam levar o rei a qualquer um dos 4 cantos.
 * Peças andam como a torre do xadrez (reto, qualquer distância, sem saltar peça nenhuma). Só o rei
 * pode entrar ou passar pelo trono (centro) e pelos 4 cantos — pras outras peças, essas casas são
 * paredes. Captura por "cerco": uma peça comum é capturada quando fica encurralada entre uma peça
 * inimiga e outra peça do mesmo lado de quem capturou, OU entre uma peça inimiga e uma casa hostil
 * (canto sempre; trono só quando vazio) — só peças comuns, nunca o rei, que tem regra própria.
 *
 * SIMPLIFICAÇÕES DOCUMENTADAS (jogo completo das regras de Copenhague tem mais exceções que não
 * entraram aqui):
 * 1. Captura do rei: o rei é capturado quando TODAS as 4 casas ortogonais ao redor dele são peça
 *    atacante ou casa hostil vazia (canto/trono) — e isso só vale com o rei longe da borda do
 *    tabuleiro (se alguma casa ao redor cair fora do tabuleiro, o rei não pode ser capturado ali).
 *    Não implementamos as capturas especiais contra a borda que as regras de Copenhague preveem
 *    em alguns casos.
 * 2. NÃO implementamos "shieldwall" (captura em massa de peças encostadas na borda) nem "exit
 *    fort" (fortaleza de saída, empate quando o rei forma uma posição segura e inalcançável perto
 *    da borda) — as duas são regras extras das regras de Copenhague, mais raras de acontecer.
 * 3. NÃO implementamos empate por repetição de posição.
 * 4. Adicionamos uma regra de desempate que NÃO é de Copenhague, mas é o padrão comum em jogos de
 *    tabuleiro sem lance possível: quem não tem nenhum lance legal na vez dele perde.
 */

export type Side = 'a' | 'd'; // 'a' = atacante, 'd' = defensor

export interface TaflPiece {
  side: Side;
  king?: boolean;
}

export interface Pos {
  row: number;
  col: number;
}

export type TaflBoard = (TaflPiece | null)[][];

export type TaflResult =
  | { status: 'playing' }
  | { status: 'vitoria'; lado: Side; motivo: 'rei_capturado' | 'rei_fugiu' | 'sem_lance' };

export interface HnefataflState {
  board: TaflBoard;
  turn: Side;
  result: TaflResult;
}

export const BOARD_SIZE = 11;
const CENTER = 5;
export const THRONE: Pos = { row: CENTER, col: CENTER };
export const CORNERS: Pos[] = [
  { row: 0, col: 0 }, { row: 0, col: BOARD_SIZE - 1 }, { row: BOARD_SIZE - 1, col: 0 }, { row: BOARD_SIZE - 1, col: BOARD_SIZE - 1 },
];

const inBounds = (p: Pos) => p.row >= 0 && p.row < BOARD_SIZE && p.col >= 0 && p.col < BOARD_SIZE;
const samePos = (a: Pos, b: Pos) => a.row === b.row && a.col === b.col;
const isThrone = (p: Pos) => samePos(p, THRONE);
const isCorner = (p: Pos) => CORNERS.some((c) => samePos(c, p));
const isSpecial = (p: Pos) => isThrone(p) || isCorner(p);
const opponent = (s: Side): Side => (s === 'a' ? 'd' : 'a');
const DIRS: Pos[] = [{ row: -1, col: 0 }, { row: 1, col: 0 }, { row: 0, col: -1 }, { row: 0, col: 1 }];

export function createInitialState(): HnefataflState {
  const board: TaflBoard = Array.from({ length: BOARD_SIZE }, () => Array<TaflPiece | null>(BOARD_SIZE).fill(null));
  const put = (row: number, col: number, piece: TaflPiece) => { board[row][col] = piece; };

  // defensores: diamante de 12 peças ao redor do trono + o rei no trono
  const defRing: Pos[] = [
    { row: 3, col: 5 },
    { row: 4, col: 4 }, { row: 4, col: 5 }, { row: 4, col: 6 },
    { row: 5, col: 3 }, { row: 5, col: 4 }, { row: 5, col: 6 }, { row: 5, col: 7 },
    { row: 6, col: 4 }, { row: 6, col: 5 }, { row: 6, col: 6 },
    { row: 7, col: 5 },
  ];
  for (const p of defRing) put(p.row, p.col, { side: 'd' });
  put(CENTER, CENTER, { side: 'd', king: true });

  // atacantes: 4 grupos de 6 (linha de 5 + 1 recuado), um em cada borda
  const topBottomCols = [3, 4, 5, 6, 7];
  for (const col of topBottomCols) { put(0, col, { side: 'a' }); put(BOARD_SIZE - 1, col, { side: 'a' }); }
  put(1, CENTER, { side: 'a' });
  put(BOARD_SIZE - 2, CENTER, { side: 'a' });
  const leftRightRows = [3, 4, 5, 6, 7];
  for (const row of leftRightRows) { put(row, 0, { side: 'a' }); put(row, BOARD_SIZE - 1, { side: 'a' }); }
  put(CENTER, 1, { side: 'a' });
  put(CENTER, BOARD_SIZE - 2, { side: 'a' });

  return { board, turn: 'a', result: { status: 'playing' } }; // atacantes começam (regras de Copenhague)
}

/** Lances de "torre" (reto, qualquer distância, sem saltar): só o rei pode entrar ou passar pelo trono/cantos. */
function slideMoves(board: TaflBoard, from: Pos, piece: TaflPiece): Pos[] {
  const out: Pos[] = [];
  for (const d of DIRS) {
    let cur: Pos = { row: from.row + d.row, col: from.col + d.col };
    while (inBounds(cur) && !board[cur.row][cur.col]) {
      if (isSpecial(cur) && !piece.king) break; // trono/canto: parede pra quem não é rei
      out.push({ ...cur });
      cur = { row: cur.row + d.row, col: cur.col + d.col };
    }
  }
  return out;
}

export function legalMovesFrom(state: HnefataflState, from: Pos): Pos[] {
  if (state.result.status !== 'playing') return [];
  const piece = state.board[from.row][from.col];
  if (!piece || piece.side !== state.turn) return [];
  return slideMoves(state.board, from, piece);
}

function hasAnyLegalMove(board: TaflBoard, side: Side): boolean {
  for (let row = 0; row < BOARD_SIZE; row++)
    for (let col = 0; col < BOARD_SIZE; col++) {
      const piece = board[row][col];
      if (piece && piece.side === side && slideMoves(board, { row, col }, piece).length > 0) return true;
    }
  return false;
}

/** Se `pos` conta como "parede" hostil pra cerco: canto sempre, trono só quando vazio. */
function isHostileWall(board: TaflBoard, pos: Pos): boolean {
  if (isCorner(pos)) return true;
  if (isThrone(pos)) return !board[pos.row][pos.col];
  return false;
}

/** Peças comuns capturadas por cerco a partir de quem acabou de chegar em `to`. O rei nunca é capturado aqui (regra própria). */
function custodialCaptures(board: TaflBoard, to: Pos, mover: Side): Pos[] {
  const captured: Pos[] = [];
  for (const d of DIRS) {
    const mid: Pos = { row: to.row + d.row, col: to.col + d.col };
    if (!inBounds(mid)) continue;
    const midPiece = board[mid.row][mid.col];
    if (!midPiece || midPiece.side === mover || midPiece.king) continue; // só peça comum inimiga
    const beyond: Pos = { row: mid.row + d.row, col: mid.col + d.col };
    if (!inBounds(beyond)) continue;
    const beyondPiece = board[beyond.row][beyond.col];
    if ((beyondPiece && beyondPiece.side === mover) || isHostileWall(board, beyond)) captured.push(mid);
  }
  return captured;
}

function findKing(board: TaflBoard): Pos | null {
  for (let row = 0; row < BOARD_SIZE; row++)
    for (let col = 0; col < BOARD_SIZE; col++) if (board[row][col]?.king) return { row, col };
  return null;
}

/** Rei capturado: as 4 casas ortogonais ao redor dele são peça atacante ou casa hostil vazia — e todas dentro do tabuleiro. */
function isKingCaptured(board: TaflBoard): boolean {
  const king = findKing(board);
  if (!king) return false;
  for (const d of DIRS) {
    const n: Pos = { row: king.row + d.row, col: king.col + d.col };
    if (!inBounds(n)) return false; // borda: simplificação documentada, não captura aqui
    const piece = board[n.row][n.col];
    if (piece && piece.side === 'a') continue; // atacante conta como parede
    if (!piece && isHostileWall(board, n)) continue; // canto, ou trono vazio, conta como parede
    return false;
  }
  return true;
}

export function makeMove(state: HnefataflState, from: Pos, to: Pos): HnefataflState {
  const legal = legalMovesFrom(state, from).some((p) => samePos(p, to));
  if (!legal) return state;

  const board = state.board.map((row) => row.slice());
  const piece = board[from.row][from.col]!;
  board[from.row][from.col] = null;
  board[to.row][to.col] = piece;

  const mover = state.turn;
  for (const cap of custodialCaptures(board, to, mover)) board[cap.row][cap.col] = null;

  let result: TaflResult = { status: 'playing' };
  if (mover === 'd' && piece.king && isCorner(to)) {
    result = { status: 'vitoria', lado: 'd', motivo: 'rei_fugiu' };
  } else if (mover === 'a' && isKingCaptured(board)) {
    result = { status: 'vitoria', lado: 'a', motivo: 'rei_capturado' };
  } else {
    const next = opponent(mover);
    if (!hasAnyLegalMove(board, next)) result = { status: 'vitoria', lado: mover, motivo: 'sem_lance' };
  }

  const turn = result.status === 'playing' ? opponent(mover) : state.turn;
  return { board, turn, result };
}
