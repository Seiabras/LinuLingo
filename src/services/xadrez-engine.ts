/**
 * Motor de regras do Xadrez (tabuleiro 8×8, 2 jogadores) — regras oficiais da FIDE (Laws of Chess),
 * a mesma referência usada pela Wikipédia ("Rules of chess"/"FIDE"). Cobre: movimento de cada peça,
 * captura, xeque, xeque-mate, afogamento (stalemate), roque (pequeno e grande, com todas as
 * condições), captura en passant e promoção de peão (a escolha da peça fica com quem joga).
 *
 * Tabuleiro: `board[row][col]`, row 0 = fileira 8 (lado das peças pretas, topo), row 7 = fileira 1
 * (lado das peças brancas, base). col 0 = coluna "a", col 7 = coluna "h". Posição inicial padrão.
 *
 * Empates por repetição tripla e pela regra dos 50 lances: IMPLEMENTADOS, mas de forma simplificada
 * — a assinatura de posição usada pra repetição considera tabuleiro + vez + direitos de roque +
 * casa de en passant (o suficiente pra cobrir os casos reais de jogo), e a regra dos 50 lances conta
 * meio-lances (plies) sem captura nem movimento de peão, exatamente como a FIDE define (100 meios-
 * lances = 50 lances de cada jogador). Nenhuma das duas é aplicada automaticamente como "lance
 * ilegal": o motor só marca `result.status === 'draw'` quando a condição já vale (não há a opção de
 * "reivindicar" o empate antes disso, que na FIDE é facultativa — aqui simplificamos para automático).
 */

export type PieceType = 'p' | 'n' | 'b' | 'r' | 'q' | 'k';
export type Color = 'w' | 'b';

export interface Piece {
  type: PieceType;
  color: Color;
}

export interface Pos {
  row: number;
  col: number;
}

export type Board = (Piece | null)[][];

export interface Move {
  from: Pos;
  to: Pos;
  piece: PieceType;
  color: Color;
  captured?: PieceType;
  isEnPassant?: boolean;
  isCastle?: 'K' | 'Q';
  /** Só preenchido em lances de promoção. Durante a geração de lances legais usamos 'q' como
   * marcador (a escolha real da peça não afeta a segurança do próprio rei), e `makeMove` substitui
   * pela peça escolhida por quem joga. */
  promotion?: PieceType;
}

export interface CastlingRights {
  wK: boolean;
  wQ: boolean;
  bK: boolean;
  bQ: boolean;
}

export type GameResult =
  | { status: 'playing' }
  | { status: 'checkmate'; winner: Color }
  | { status: 'stalemate' }
  | { status: 'draw'; reason: 'repeticao-tripla' | '50-lances' };

export interface ChessState {
  board: Board;
  turn: Color;
  castling: CastlingRights;
  /** Casa onde um peão pode capturar en passant nesta jogada (ou null). */
  enPassantTarget: Pos | null;
  /** Meios-lances (plies) desde a última captura ou movimento de peão — regra dos 50 lances conta até 100. */
  halfmoveClock: number;
  /** Contagem de cada posição já vista (assinatura tabuleiro+vez+roque+en passant), pra repetição tripla. */
  positionCounts: Record<string, number>;
  history: Move[];
  result: GameResult;
  /** Se quem tem a vez agora está em xeque (pra destacar o rei na tela). */
  inCheck: boolean;
}

const BOARD_SIZE = 8;
const inBounds = (p: Pos) => p.row >= 0 && p.row < BOARD_SIZE && p.col >= 0 && p.col < BOARD_SIZE;
const samePos = (a: Pos, b: Pos) => a.row === b.row && a.col === b.col;
const opponent = (c: Color): Color => (c === 'w' ? 'b' : 'w');

function cloneBoard(board: Board): Board {
  return board.map((row) => row.slice());
}

const BACK_RANK: PieceType[] = ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'];

export function createInitialState(): ChessState {
  const board: Board = Array.from({ length: BOARD_SIZE }, () => Array<Piece | null>(BOARD_SIZE).fill(null));
  for (let col = 0; col < BOARD_SIZE; col++) {
    board[0][col] = { type: BACK_RANK[col], color: 'b' };
    board[1][col] = { type: 'p', color: 'b' };
    board[6][col] = { type: 'p', color: 'w' };
    board[7][col] = { type: BACK_RANK[col], color: 'w' };
  }
  return {
    board,
    turn: 'w',
    castling: { wK: true, wQ: true, bK: true, bQ: true },
    enPassantTarget: null,
    halfmoveClock: 0,
    positionCounts: {},
    history: [],
    result: { status: 'playing' },
    inCheck: false,
  };
}

// ---------- Ataques (pra xeque, roque e geração de movimentos) ----------

const KNIGHT_DELTAS: Pos[] = [
  { row: -2, col: -1 }, { row: -2, col: 1 }, { row: -1, col: -2 }, { row: -1, col: 2 },
  { row: 1, col: -2 }, { row: 1, col: 2 }, { row: 2, col: -1 }, { row: 2, col: 1 },
];
const KING_DELTAS: Pos[] = [
  { row: -1, col: -1 }, { row: -1, col: 0 }, { row: -1, col: 1 }, { row: 0, col: -1 },
  { row: 0, col: 1 }, { row: 1, col: -1 }, { row: 1, col: 0 }, { row: 1, col: 1 },
];
const BISHOP_DIRS: Pos[] = [{ row: -1, col: -1 }, { row: -1, col: 1 }, { row: 1, col: -1 }, { row: 1, col: 1 }];
const ROOK_DIRS: Pos[] = [{ row: -1, col: 0 }, { row: 1, col: 0 }, { row: 0, col: -1 }, { row: 0, col: 1 }];
const QUEEN_DIRS: Pos[] = [...BISHOP_DIRS, ...ROOK_DIRS];

function findKing(board: Board, color: Color): Pos {
  for (let row = 0; row < BOARD_SIZE; row++)
    for (let col = 0; col < BOARD_SIZE; col++) {
      const p = board[row][col];
      if (p && p.type === 'k' && p.color === color) return { row, col };
    }
  throw new Error(`xadrez: rei de ${color} não encontrado no tabuleiro`);
}

/** Se `target` está sob ataque de alguma peça de `byColor` nesse tabuleiro (ignora en passant: não se aplica a ataque de casa). */
export function isSquareAttacked(board: Board, target: Pos, byColor: Color): boolean {
  // peões: atacam na diagonal, na direção em que avançam
  const pawnDir = byColor === 'w' ? -1 : 1; // peão branco avança pra row menor; ataca a partir de row+1 de target
  for (const dc of [-1, 1]) {
    const from: Pos = { row: target.row + pawnDir, col: target.col + dc };
    if (inBounds(from)) {
      const p = board[from.row][from.col];
      if (p && p.type === 'p' && p.color === byColor) return true;
    }
  }
  for (const d of KNIGHT_DELTAS) {
    const from: Pos = { row: target.row + d.row, col: target.col + d.col };
    if (inBounds(from)) {
      const p = board[from.row][from.col];
      if (p && p.type === 'n' && p.color === byColor) return true;
    }
  }
  for (const d of KING_DELTAS) {
    const from: Pos = { row: target.row + d.row, col: target.col + d.col };
    if (inBounds(from)) {
      const p = board[from.row][from.col];
      if (p && p.type === 'k' && p.color === byColor) return true;
    }
  }
  for (const d of BISHOP_DIRS) {
    let cur: Pos = { row: target.row + d.row, col: target.col + d.col };
    while (inBounds(cur)) {
      const p = board[cur.row][cur.col];
      if (p) {
        if (p.color === byColor && (p.type === 'b' || p.type === 'q')) return true;
        break;
      }
      cur = { row: cur.row + d.row, col: cur.col + d.col };
    }
  }
  for (const d of ROOK_DIRS) {
    let cur: Pos = { row: target.row + d.row, col: target.col + d.col };
    while (inBounds(cur)) {
      const p = board[cur.row][cur.col];
      if (p) {
        if (p.color === byColor && (p.type === 'r' || p.type === 'q')) return true;
        break;
      }
      cur = { row: cur.row + d.row, col: cur.col + d.col };
    }
  }
  return false;
}

export function isInCheck(board: Board, color: Color): boolean {
  return isSquareAttacked(board, findKing(board, color), opponent(color));
}

// ---------- Geração de lances pseudo-legais ----------

function slideMoves(board: Board, from: Pos, color: Color, dirs: Pos[]): Pos[] {
  const out: Pos[] = [];
  for (const d of dirs) {
    let cur: Pos = { row: from.row + d.row, col: from.col + d.col };
    while (inBounds(cur)) {
      const p = board[cur.row][cur.col];
      if (!p) {
        out.push({ ...cur });
      } else {
        if (p.color !== color) out.push({ ...cur });
        break;
      }
      cur = { row: cur.row + d.row, col: cur.col + d.col };
    }
  }
  return out;
}

function stepMoves(board: Board, from: Pos, color: Color, deltas: Pos[]): Pos[] {
  const out: Pos[] = [];
  for (const d of deltas) {
    const to: Pos = { row: from.row + d.row, col: from.col + d.col };
    if (!inBounds(to)) continue;
    const p = board[to.row][to.col];
    if (!p || p.color !== color) out.push(to);
  }
  return out;
}

const ROW_START: Record<Color, number> = { w: 6, b: 1 };
const ROW_PROMO: Record<Color, number> = { w: 0, b: 7 };
const PAWN_DIR: Record<Color, number> = { w: -1, b: 1 };

function pawnPseudoMoves(state: ChessState, from: Pos): Move[] {
  const { board } = state;
  const piece = board[from.row][from.col]!;
  const color = piece.color;
  const dir = PAWN_DIR[color];
  const moves: Move[] = [];
  const addMaybePromo = (to: Pos, captured?: PieceType, isEnPassant?: boolean) => {
    if (to.row === ROW_PROMO[color]) moves.push({ from, to, piece: 'p', color, captured, isEnPassant, promotion: 'q' });
    else moves.push({ from, to, piece: 'p', color, captured, isEnPassant });
  };
  const one: Pos = { row: from.row + dir, col: from.col };
  if (inBounds(one) && !board[one.row][one.col]) {
    addMaybePromo(one);
    const two: Pos = { row: from.row + 2 * dir, col: from.col };
    if (from.row === ROW_START[color] && !board[two.row][two.col]) moves.push({ from, to: two, piece: 'p', color });
  }
  for (const dc of [-1, 1]) {
    const to: Pos = { row: from.row + dir, col: from.col + dc };
    if (!inBounds(to)) continue;
    const target = board[to.row][to.col];
    if (target && target.color !== color) {
      addMaybePromo(to, target.type);
    } else if (!target && state.enPassantTarget && samePos(to, state.enPassantTarget)) {
      moves.push({ from, to, piece: 'p', color, captured: 'p', isEnPassant: true });
    }
  }
  return moves;
}

/** Se o roque (pequeno `'K'` ou grande `'Q'`) é permitido agora para `color`. */
export function canCastle(state: ChessState, color: Color, side: 'K' | 'Q'): boolean {
  const right = state.castling[`${color}${side}` as keyof CastlingRights];
  if (!right) return false;
  const { board } = state;
  const row = color === 'w' ? 7 : 0;
  const king = board[row][4];
  if (!king || king.type !== 'k' || king.color !== color) return false;
  const rookCol = side === 'K' ? 7 : 0;
  const rook = board[row][rookCol];
  if (!rook || rook.type !== 'r' || rook.color !== color) return false;
  const between = side === 'K' ? [5, 6] : [1, 2, 3];
  for (const col of between) if (board[row][col]) return false;
  const kingPath = side === 'K' ? [4, 5, 6] : [4, 3, 2];
  const opp = opponent(color);
  for (const col of kingPath) if (isSquareAttacked(board, { row, col }, opp)) return false;
  return true;
}

function pseudoMovesForPiece(state: ChessState, from: Pos): Move[] {
  const { board } = state;
  const piece = board[from.row][from.col];
  if (!piece) return [];
  const { type, color } = piece;
  if (type === 'p') return pawnPseudoMoves(state, from);
  const tos =
    type === 'n' ? stepMoves(board, from, color, KNIGHT_DELTAS) :
    type === 'b' ? slideMoves(board, from, color, BISHOP_DIRS) :
    type === 'r' ? slideMoves(board, from, color, ROOK_DIRS) :
    type === 'q' ? slideMoves(board, from, color, QUEEN_DIRS) :
    stepMoves(board, from, color, KING_DELTAS); // 'k'
  const moves: Move[] = tos.map((to) => {
    const captured = board[to.row][to.col]?.type;
    return { from, to, piece: type, color, captured };
  });
  if (type === 'k') {
    if (canCastle(state, color, 'K')) moves.push({ from, to: { row: from.row, col: 6 }, piece: 'k', color, isCastle: 'K' });
    if (canCastle(state, color, 'Q')) moves.push({ from, to: { row: from.row, col: 2 }, piece: 'k', color, isCastle: 'Q' });
  }
  return moves;
}

/** Aplica `move` só no tabuleiro (sem tocar no resto do estado) — usado pra simular e pra `makeMove`. */
function applyToBoard(board: Board, move: Move): Board {
  const next = cloneBoard(board);
  const piece = next[move.from.row][move.from.col]!;
  next[move.from.row][move.from.col] = null;
  if (move.isEnPassant) {
    next[move.from.row][move.to.col] = null; // peão capturado fica na mesma fileira de origem, coluna de destino
  }
  if (move.isCastle) {
    const row = move.from.row;
    const rookFromCol = move.isCastle === 'K' ? 7 : 0;
    const rookToCol = move.isCastle === 'K' ? 5 : 3;
    next[row][rookToCol] = next[row][rookFromCol];
    next[row][rookFromCol] = null;
  }
  next[move.to.row][move.to.col] = move.promotion ? { type: move.promotion, color: piece.color } : piece;
  return next;
}

/** Todos os lances pseudo-legais de `color` (sem filtrar se deixam o próprio rei em xeque). */
function pseudoLegalMoves(state: ChessState, color: Color): Move[] {
  const out: Move[] = [];
  for (let row = 0; row < BOARD_SIZE; row++)
    for (let col = 0; col < BOARD_SIZE; col++) {
      const p = state.board[row][col];
      if (p && p.color === color) out.push(...pseudoMovesForPiece(state, { row, col }));
    }
  return out;
}

/** Todos os lances legais de quem tem a vez agora (filtra os que deixariam o próprio rei em xeque). */
export function legalMoves(state: ChessState): Move[] {
  if (state.result.status !== 'playing') return [];
  const color = state.turn;
  return pseudoLegalMoves(state, color).filter((m) => {
    const nextBoard = applyToBoard(state.board, m);
    return !isInCheck(nextBoard, color);
  });
}

/** Casas de destino legais pra peça em `from` (pra destacar na tela). */
export function legalMovesFrom(state: ChessState, from: Pos): Pos[] {
  return legalMoves(state)
    .filter((m) => samePos(m.from, from))
    .map((m) => m.to);
}

/** Se o lance de `from` pra `to` (já legal) é uma promoção — a tela deve perguntar a peça antes de chamar `makeMove`. */
export function moveNeedsPromotion(state: ChessState, from: Pos, to: Pos): boolean {
  return legalMoves(state).some((m) => samePos(m.from, from) && samePos(m.to, to) && m.promotion !== undefined);
}

function positionSignature(state: Pick<ChessState, 'board' | 'turn' | 'castling' | 'enPassantTarget'>): string {
  const b = state.board.map((row) => row.map((c) => (c ? `${c.color}${c.type}` : '.')).join('')).join('/');
  const castle = `${state.castling.wK ? 'K' : ''}${state.castling.wQ ? 'Q' : ''}${state.castling.bK ? 'k' : ''}${state.castling.bQ ? 'q' : ''}`;
  const ep = state.enPassantTarget ? `${state.enPassantTarget.row},${state.enPassantTarget.col}` : '-';
  return `${b}|${state.turn}|${castle}|${ep}`;
}

/**
 * Move a peça do jogador da vez de `from` pra `to` (precisa ser um dos `legalMoves`). Se a peça
 * promove, `promotion` escolhe a peça nova ('q' por padrão se não vier escolha). Devolve o mesmo
 * `state` (mesma referência) se o lance não for legal — não muda nada.
 */
export function makeMove(state: ChessState, from: Pos, to: Pos, promotion: PieceType = 'q'): ChessState {
  const candidates = legalMoves(state).filter((m) => samePos(m.from, from) && samePos(m.to, to));
  if (candidates.length === 0) return state;
  const base = candidates[0];
  const move: Move = base.promotion ? { ...base, promotion } : base;

  const board = applyToBoard(state.board, move);
  const color = state.turn;
  const next = opponent(color);

  const castling = { ...state.castling };
  const row0 = color === 'w' ? 7 : 0;
  if (move.piece === 'k' && !move.isCastle) {
    if (color === 'w') { castling.wK = false; castling.wQ = false; } else { castling.bK = false; castling.bQ = false; }
  }
  if (move.isCastle) {
    if (color === 'w') { castling.wK = false; castling.wQ = false; } else { castling.bK = false; castling.bQ = false; }
  }
  if (move.piece === 'r') {
    if (move.from.row === row0 && move.from.col === 0) { if (color === 'w') castling.wQ = false; else castling.bQ = false; }
    if (move.from.row === row0 && move.from.col === 7) { if (color === 'w') castling.wK = false; else castling.bK = false; }
  }
  // torre capturada na casa de origem dela também derruba o direito de roque daquele lado
  if (move.captured === 'r') {
    const oppRow0 = next === 'w' ? 7 : 0;
    if (move.to.row === oppRow0 && move.to.col === 0) { if (next === 'w') castling.wQ = false; else castling.bQ = false; }
    if (move.to.row === oppRow0 && move.to.col === 7) { if (next === 'w') castling.wK = false; else castling.bK = false; }
  }

  const enPassantTarget =
    move.piece === 'p' && Math.abs(move.to.row - move.from.row) === 2
      ? { row: (move.to.row + move.from.row) / 2, col: move.from.col }
      : null;

  const halfmoveClock = move.captured || move.piece === 'p' ? 0 : state.halfmoveClock + 1;

  const sig = positionSignature({ board, turn: next, castling, enPassantTarget });
  const positionCounts = { ...state.positionCounts, [sig]: (state.positionCounts[sig] ?? 0) + 1 };

  const nextStateBase: ChessState = {
    board,
    turn: next,
    castling,
    enPassantTarget,
    halfmoveClock,
    positionCounts,
    history: [...state.history, move],
    result: { status: 'playing' },
    inCheck: false,
  };

  const inCheckNow = isInCheck(board, next);
  const hasMoves = legalMoves(nextStateBase).length > 0;
  let result: GameResult;
  if (!hasMoves) {
    result = inCheckNow ? { status: 'checkmate', winner: color } : { status: 'stalemate' };
  } else if (halfmoveClock >= 100) {
    result = { status: 'draw', reason: '50-lances' };
  } else if (positionCounts[sig] >= 3) {
    result = { status: 'draw', reason: 'repeticao-tripla' };
  } else {
    result = { status: 'playing' };
  }

  return { ...nextStateBase, result, inCheck: inCheckNow };
}
