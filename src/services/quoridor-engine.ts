/**
 * Motor de regras do Quoridor (tabuleiro 9×9, 2 jogadores, 10 paredes cada) — regra oficial Gigamic,
 * a mesma usada em quoridorstrategy.com e na página da Wikipédia (Quoridor). Sem dado nenhum
 * inventado: peça comum anda uma casa ortogonal por vez; se a peça adversária está logo ao lado,
 * salta por cima dela em linha reta (se não houver parede/borda atrás dela) ou, se o salto reto
 * estiver bloqueado, salta na diagonal. Paredes ocupam 2 casas de borda, não podem se sobrepor nem
 * se cruzar, e nunca podem fechar o último caminho de QUALQUER jogador até a fileira de chegada dele.
 *
 * Representação das paredes: um "slot" é a interseção (r, c) com r, c em 0..7 — o canto compartilhado
 * pelas 4 casas (r,c), (r,c+1), (r+1,c), (r+1,c+1). Uma parede horizontal nesse slot bloqueia a
 * borda entre (r,c)/(r+1,c) e entre (r,c+1)/(r+1,c+1); uma vertical bloqueia entre (r,c)/(r,c+1) e
 * entre (r+1,c)/(r+1,c+1).
 */

export const BOARD_SIZE = 9;
export const WALLS_PER_PLAYER = 10;

export interface Pos {
  row: number;
  col: number;
}

export type WallOrientation = 'h' | 'v';

export interface Wall {
  row: number;
  col: number;
  orientation: WallOrientation;
}

export type PlayerId = 0 | 1;

export interface QuoridorState {
  pawns: [Pos, Pos];
  wallsLeft: [number, number];
  walls: Wall[];
  turn: PlayerId;
  winner: PlayerId | null;
}

/** Jogador 0 começa na fileira 0 e precisa chegar na 8; jogador 1 começa na 8 e precisa chegar na 0. */
const GOAL_ROW: [number, number] = [8, 0];
const START: [Pos, Pos] = [
  { row: 0, col: 4 },
  { row: 8, col: 4 },
];

export function createInitialState(): QuoridorState {
  return {
    pawns: [{ ...START[0] }, { ...START[1] }],
    wallsLeft: [WALLS_PER_PLAYER, WALLS_PER_PLAYER],
    walls: [],
    turn: 0,
    winner: null,
  };
}

const inBounds = (p: Pos) => p.row >= 0 && p.row < BOARD_SIZE && p.col >= 0 && p.col < BOARD_SIZE;
const samePos = (a: Pos, b: Pos) => a.row === b.row && a.col === b.col;

const vEdgeKey = (row: number, col: number) => `v:${row}:${col}`; // entre (row,col) e (row+1,col)
const hEdgeKey = (row: number, col: number) => `h:${row}:${col}`; // entre (row,col) e (row,col+1)

function wallEdges(w: Wall): [string, string] {
  return w.orientation === 'h' ? [vEdgeKey(w.row, w.col), vEdgeKey(w.row, w.col + 1)] : [hEdgeKey(w.row, w.col), hEdgeKey(w.row + 1, w.col)];
}

function blockedEdgeSet(walls: Wall[]): Set<string> {
  const s = new Set<string>();
  for (const w of walls) for (const e of wallEdges(w)) s.add(e);
  return s;
}

/** Se o passo de `a` para `b` (vizinhos ortogonais) está livre de parede. */
function edgeOpen(a: Pos, b: Pos, blocked: Set<string>): boolean {
  if (a.row === b.row) {
    const col = Math.min(a.col, b.col);
    return !blocked.has(hEdgeKey(a.row, col));
  }
  if (a.col === b.col) {
    const row = Math.min(a.row, b.row);
    return !blocked.has(vEdgeKey(row, a.col));
  }
  return false;
}

const DIRS: Pos[] = [
  { row: -1, col: 0 },
  { row: 1, col: 0 },
  { row: 0, col: -1 },
  { row: 0, col: 1 },
];

/**
 * Casas em que a peça do jogador da vez pode ir: passo simples, ou salto (reto ou diagonal) sobre
 * a peça adversária quando ela está logo ao lado.
 */
export function legalPawnMoves(state: QuoridorState): Pos[] {
  const me = state.turn;
  const opp = (1 - me) as PlayerId;
  const from = state.pawns[me];
  const oppPos = state.pawns[opp];
  const blocked = blockedEdgeSet(state.walls);
  const moves: Pos[] = [];

  for (const d of DIRS) {
    const step1: Pos = { row: from.row + d.row, col: from.col + d.col };
    if (!inBounds(step1) || !edgeOpen(from, step1, blocked)) continue;
    if (!samePos(step1, oppPos)) {
      moves.push(step1);
      continue;
    }
    // peça adversária logo ali: tenta o salto reto
    const straight: Pos = { row: step1.row + d.row, col: step1.col + d.col };
    if (inBounds(straight) && edgeOpen(step1, straight, blocked)) {
      moves.push(straight);
      continue;
    }
    // salto reto bloqueado (parede ou borda do tabuleiro): salta na diagonal
    const perpendiculars: Pos[] = d.row === 0 ? [{ row: -1, col: 0 }, { row: 1, col: 0 }] : [{ row: 0, col: -1 }, { row: 0, col: 1 }];
    for (const p of perpendiculars) {
      const diag: Pos = { row: step1.row + p.row, col: step1.col + p.col };
      if (inBounds(diag) && edgeOpen(step1, diag, blocked)) moves.push(diag);
    }
  }
  return moves;
}

/** Busca em largura: existe algum caminho de `from` até a fileira `goalRow`, ignorando as peças? */
function hasPathToGoal(from: Pos, goalRow: number, blocked: Set<string>): boolean {
  const seen = new Set<string>([`${from.row},${from.col}`]);
  const queue: Pos[] = [from];
  while (queue.length) {
    const cur = queue.shift()!;
    if (cur.row === goalRow) return true;
    for (const d of DIRS) {
      const next: Pos = { row: cur.row + d.row, col: cur.col + d.col };
      if (!inBounds(next) || !edgeOpen(cur, next, blocked)) continue;
      const key = `${next.row},${next.col}`;
      if (seen.has(key)) continue;
      seen.add(key);
      queue.push(next);
    }
  }
  return false;
}

/** Se um slot (r,c) já tem outra parede cruzando (mesma posição, orientação perpendicular). */
function crosses(walls: Wall[], w: Wall): boolean {
  const otherOrientation: WallOrientation = w.orientation === 'h' ? 'v' : 'h';
  return walls.some((x) => x.row === w.row && x.col === w.col && x.orientation === otherOrientation);
}

/** Se colocar `w` é permitido: dentro do tabuleiro, sem sobrepor/cruzar parede, sem fechar o caminho de ninguém. */
export function canPlaceWall(state: QuoridorState, w: Wall): boolean {
  if (state.winner !== null) return false;
  if (w.row < 0 || w.row > BOARD_SIZE - 2 || w.col < 0 || w.col > BOARD_SIZE - 2) return false;
  if (state.wallsLeft[state.turn] <= 0) return false;
  const [e1, e2] = wallEdges(w);
  const existing = blockedEdgeSet(state.walls);
  if (existing.has(e1) || existing.has(e2)) return false;
  if (crosses(state.walls, w)) return false;
  const nextBlocked = new Set(existing);
  nextBlocked.add(e1);
  nextBlocked.add(e2);
  if (!hasPathToGoal(state.pawns[0], GOAL_ROW[0], nextBlocked)) return false;
  if (!hasPathToGoal(state.pawns[1], GOAL_ROW[1], nextBlocked)) return false;
  return true;
}

/** Aplica a parede (se legal) e passa a vez; devolve o mesmo estado (sem mutar) se for ilegal. */
export function placeWall(state: QuoridorState, w: Wall): QuoridorState {
  if (!canPlaceWall(state, w)) return state;
  const wallsLeft = [...state.wallsLeft] as [number, number];
  wallsLeft[state.turn] -= 1;
  return {
    ...state,
    walls: [...state.walls, w],
    wallsLeft,
    turn: (1 - state.turn) as PlayerId,
  };
}

/** Move a peça do jogador da vez para `to` (se for um dos `legalPawnMoves`); passa a vez e detecta vitória. */
export function movePawn(state: QuoridorState, to: Pos): QuoridorState {
  if (state.winner !== null) return state;
  const legal = legalPawnMoves(state).some((p) => samePos(p, to));
  if (!legal) return state;
  const pawns = [...state.pawns] as [Pos, Pos];
  pawns[state.turn] = to;
  const won = to.row === GOAL_ROW[state.turn];
  return {
    ...state,
    pawns,
    turn: (1 - state.turn) as PlayerId,
    winner: won ? state.turn : null,
  };
}
