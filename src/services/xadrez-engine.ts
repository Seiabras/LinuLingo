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
  /** no roque: a coluna de onde a torre sai (no xadrez de sempre, 7 ou 0) */
  rookFrom?: number;
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

/**
 * Xadrez960 (Fischer Random; Wikipédia em inglês “Chess960”, consultada em 15/10/2026): a fileira de
 * trás é sorteada entre 960 posições, com os bispos em casas de cores diferentes e o rei entre as
 * torres; as pretas espelham as brancas. O roque deixa o rei e a torre nas mesmas casas do roque de
 * sempre (rei na coluna g ou c, torre na f ou d); todas as casas entre o rei e o destino dele, e
 * entre a torre e o destino dela, têm de estar vazias (fora o próprio rei e a própria torre), e o
 * rei não pode estar em xeque, passar por casa atacada nem terminar em xeque. Aqui, para fazer o roque, toque
 * no rei e depois na torre do lado do roque.
 */
export interface Fischer {
  /** coluna do rei e das duas torres no começo */
  rei: number;
  torreK: number;
  torreQ: number;
}

export interface ChessState {
  /** só no Xadrez960: onde o rei e as torres começaram (o roque depende disso) */
  fischer?: Fischer;
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

/**
 * Uma fileira de trás do Xadrez960, sorteada: um bispo em casa clara e outro em escura, a dama e os
 * dois cavalos em casas livres, e nas três que sobram torre, rei e torre, nessa ordem.
 */
export function fileira960(rng: () => number = Math.random): PieceType[] {
  const fila: (PieceType | null)[] = Array(8).fill(null);
  const livres = () => fila.flatMap((p, i) => (p === null ? [i] : []));
  const sorteia = (xs: number[]) => xs[Math.floor(rng() * xs.length)]!;
  fila[sorteia([0, 2, 4, 6])] = 'b';
  fila[sorteia([1, 3, 5, 7])] = 'b';
  fila[sorteia(livres())] = 'q';
  fila[sorteia(livres())] = 'n';
  fila[sorteia(livres())] = 'n';
  const [a, b, c] = livres();
  fila[a!] = 'r';
  fila[b!] = 'k';
  fila[c!] = 'r';
  return fila as PieceType[];
}

export function createInitialState(fileira?: PieceType[]): ChessState {
  const back = fileira ?? BACK_RANK;
  const board: Board = Array.from({ length: BOARD_SIZE }, () => Array<Piece | null>(BOARD_SIZE).fill(null));
  for (let col = 0; col < BOARD_SIZE; col++) {
    board[0][col] = { type: back[col]!, color: 'b' };
    board[1][col] = { type: 'p', color: 'b' };
    board[6][col] = { type: 'p', color: 'w' };
    board[7][col] = { type: back[col]!, color: 'w' };
  }
  const fischer = fileira
    ? { rei: back.indexOf('k'), torreQ: back.indexOf('r'), torreK: back.lastIndexOf('r') }
    : undefined;
  return {
    ...(fischer ? { fischer } : {}),
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
/** As colunas de partida do rei e das torres (as de sempre, ou as do Xadrez960). */
const colunasDoRoque = (state: ChessState) => state.fischer ?? { rei: 4, torreK: 7, torreQ: 0 };

/** As colunas de `a` até `b`, as duas inclusive. */
const faixa = (a: number, b: number) => Array.from({ length: Math.abs(b - a) + 1 }, (_, i) => a + i * Math.sign(b - a || 1));

/** Se o roque (pequeno `'K'` ou grande `'Q'`) é permitido agora para `color`. */
export function canCastle(state: ChessState, color: Color, side: 'K' | 'Q'): boolean {
  const right = state.castling[`${color}${side}` as keyof CastlingRights];
  if (!right) return false;
  const { board } = state;
  const row = color === 'w' ? 7 : 0;
  const cols = colunasDoRoque(state);
  const king = board[row][cols.rei];
  if (!king || king.type !== 'k' || king.color !== color) return false;
  const rookCol = side === 'K' ? cols.torreK : cols.torreQ;
  const rook = board[row][rookCol];
  if (!rook || rook.type !== 'r' || rook.color !== color) return false;
  const reiVai = side === 'K' ? 6 : 2;
  const torreVai = side === 'K' ? 5 : 3;
  // todas as casas por onde o rei e a torre passam (e onde param) vazias, fora os dois
  for (const col of [...faixa(cols.rei, reiVai), ...faixa(rookCol, torreVai)]) {
    if (col === cols.rei || col === rookCol) continue;
    if (board[row][col]) return false;
  }
  const opp = opponent(color);
  for (const col of faixa(cols.rei, reiVai)) if (isSquareAttacked(board, { row, col }, opp)) return false;
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
    // no Xadrez960 o lance de roque é “rei na própria torre”; no de sempre, o rei anda duas casas
    const cols = colunasDoRoque(state);
    for (const side of ['K', 'Q'] as const) {
      if (!canCastle(state, color, side)) continue;
      const rookFrom = side === 'K' ? cols.torreK : cols.torreQ;
      const to = state.fischer ? { row: from.row, col: rookFrom } : { row: from.row, col: side === 'K' ? 6 : 2 };
      moves.push({ from, to, piece: 'k', color, isCastle: side, rookFrom });
    }
  }
  return moves;
}

/** Aplica `move` só no tabuleiro (sem tocar no resto do estado) — usado pra simular e pra `makeMove`. */
function applyToBoard(board: Board, move: Move): Board {
  const next = cloneBoard(board);
  const piece = next[move.from.row][move.from.col]!;
  if (move.isCastle) {
    // tira o rei e a torre e põe os dois nas casas do roque (no Xadrez960 elas podem se cruzar)
    const row = move.from.row;
    const rookFrom = move.rookFrom ?? (move.isCastle === 'K' ? 7 : 0);
    const rook = next[row][rookFrom];
    next[row][move.from.col] = null;
    next[row][rookFrom] = null;
    next[row][move.isCastle === 'K' ? 6 : 2] = piece;
    next[row][move.isCastle === 'K' ? 5 : 3] = rook;
    return next;
  }
  next[move.from.row][move.from.col] = null;
  if (move.isEnPassant) {
    next[move.from.row][move.to.col] = null; // peão capturado fica na mesma fileira de origem, coluna de destino
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
  const cols = colunasDoRoque(state);
  if (move.piece === 'r') {
    if (move.from.row === row0 && move.from.col === cols.torreQ) { if (color === 'w') castling.wQ = false; else castling.bQ = false; }
    if (move.from.row === row0 && move.from.col === cols.torreK) { if (color === 'w') castling.wK = false; else castling.bK = false; }
  }
  // torre capturada na casa de origem dela também derruba o direito de roque daquele lado
  if (move.captured === 'r' && !move.isCastle) {
    const oppRow0 = next === 'w' ? 7 : 0;
    if (move.to.row === oppRow0 && move.to.col === cols.torreQ) { if (next === 'w') castling.wQ = false; else castling.bQ = false; }
    if (move.to.row === oppRow0 && move.to.col === cols.torreK) { if (next === 'w') castling.wK = false; else castling.bK = false; }
  }

  const enPassantTarget =
    move.piece === 'p' && Math.abs(move.to.row - move.from.row) === 2
      ? { row: (move.to.row + move.from.row) / 2, col: move.from.col }
      : null;

  const halfmoveClock = move.captured || move.piece === 'p' ? 0 : state.halfmoveClock + 1;

  const sig = positionSignature({ board, turn: next, castling, enPassantTarget });
  const positionCounts = { ...state.positionCounts, [sig]: (state.positionCounts[sig] ?? 0) + 1 };

  const nextStateBase: ChessState = {
    ...(state.fischer ? { fischer: state.fischer } : {}),
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
