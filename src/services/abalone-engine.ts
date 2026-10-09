/**
 * Motor de regras do Abalone (tabuleiro hexagonal de 61 casas, 5 por lado; 2 jogadores, 14 bolinhas
 * cada) — regra confirmada em várias fontes (playabalone.com/pages/rules.html, a página da Wikipédia
 * "Abalone (board game)" e a implementação `gym-abalone`, que usa as mesmas 61 casas e a mesma
 * disposição inicial clássica). Sem regra inventada:
 *
 * - Tabuleiro: hexágono com 9 fileiras de 5,6,7,8,9,8,7,6,5 casas. Aqui usamos coordenadas axiais de
 *   cubo (q, r, s = -q-r), um hexágono de raio 4 (|q|,|r|,|s| ≤ 4) — é a mesma matemática padrão de
 *   grade hexagonal e dá exatamente 61 casas com essas larguras de fileira.
 * - Disposição inicial clássica: cada jogador ocupa as 2 fileiras mais próximas da borda dele por
 *   completo (5 + 6 = 11 bolinhas) mais as 3 casas centrais da 3ª fileira (11 + 3 = 14).
 * - Movimento: o jogador escolhe uma linha reta de 1 a 3 bolinhas próprias e adjacentes e as move uma
 *   casa em uma das 6 direções. Se a direção é a do próprio eixo da linha, é um movimento "em linha"
 *   (pode empurrar); em qualquer outra direção é um movimento "lateral" (nunca empurra — todas as
 *   casas de destino têm que estar vazias).
 * - Sumito (empurrão): só em movimento em linha, e só com maioria numérica clara (nunca empate):
 *   2 bolinhas empurram 1; 3 empurram 1 ou 2. A fileira empurrada vai para uma casa vazia ou para
 *   fora do tabuleiro — nunca para uma casa ocupada.
 * - Vitória: o primeiro jogador a empurrar 6 bolinhas do adversário para fora do tabuleiro vence.
 */

export const RADIUS = 4;
export const MARBLES_PER_PLAYER = 14;
export const MARBLES_TO_WIN = 6;

export interface Axial {
  q: number;
  r: number;
}

export type PlayerId = 0 | 1;

export interface AbaloneState {
  /** chave `"q,r"` -> dono da bolinha; só casas ocupadas aparecem aqui. */
  board: Record<string, PlayerId>;
  turn: PlayerId;
  /** `lost[p]` = quantas bolinhas do jogador p já foram empurradas para fora. */
  lost: [number, number];
  winner: PlayerId | null;
}

export function key(a: Axial): string {
  return `${a.q},${a.r}`;
}

function sOf(a: Axial): number {
  return -a.q - a.r;
}

export function inBounds(a: Axial): boolean {
  const s = sOf(a);
  return Math.max(Math.abs(a.q), Math.abs(a.r), Math.abs(s)) <= RADIUS;
}

/** As 61 casas do hexágono, coordenadas axiais de cubo com raio 4. */
export const ALL_CELLS: Axial[] = (() => {
  const cells: Axial[] = [];
  for (let q = -RADIUS; q <= RADIUS; q++) {
    for (let r = -RADIUS; r <= RADIUS; r++) {
      const a = { q, r };
      if (inBounds(a)) cells.push(a);
    }
  }
  return cells;
})();

/** As 6 direções possíveis (vizinhos de uma casa num hexágono). */
export const DIRECTIONS: Axial[] = [
  { q: 1, r: 0 },
  { q: 1, r: -1 },
  { q: 0, r: -1 },
  { q: -1, r: 0 },
  { q: -1, r: 1 },
  { q: 0, r: 1 },
];

function add(a: Axial, b: Axial): Axial {
  return { q: a.q + b.q, r: a.r + b.r };
}

function neg(a: Axial): Axial {
  return { q: -a.q, r: -a.r };
}

function sameCell(a: Axial, b: Axial): boolean {
  return a.q === b.q && a.r === b.r;
}

function isDirection(d: Axial): boolean {
  return DIRECTIONS.some((x) => sameCell(x, d));
}

function rowCells(r: number): Axial[] {
  return ALL_CELLS.filter((c) => c.r === r).sort((x, y) => x.q - y.q);
}

/** As 3 casas centrais de uma fileira (usadas na disposição inicial clássica). */
function middleThree(r: number): Axial[] {
  const row = rowCells(r);
  const mid = Math.floor(row.length / 2);
  return [row[mid - 1], row[mid], row[mid + 1]];
}

/**
 * Disposição inicial clássica (não a "Belgian daisy" dos torneios, que também é válida mas é outra
 * posição): jogador 0 perto da fileira r=-4, jogador 1 perto da fileira r=+4, cada um com as 2
 * fileiras mais próximas da própria borda cheias + as 3 casas centrais da 3ª fileira. Jogador 0 (o
 * primeiro a jogar, "preto" nas fontes) começa.
 */
export function createInitialState(): AbaloneState {
  const board: Record<string, PlayerId> = {};
  const place = (cells: Axial[], p: PlayerId) => cells.forEach((c) => { board[key(c)] = p; });
  place(rowCells(-RADIUS), 0);
  place(rowCells(-RADIUS + 1), 0);
  place(middleThree(-RADIUS + 2), 0);
  place(rowCells(RADIUS), 1);
  place(rowCells(RADIUS - 1), 1);
  place(middleThree(RADIUS - 2), 1);
  return { board, turn: 0, lost: [0, 0], winner: null };
}

export function owner(state: AbaloneState, a: Axial): PlayerId | null {
  const v = state.board[key(a)];
  return v === undefined ? null : v;
}

/** Quantas bolinhas cada jogador ainda tem no tabuleiro. */
export function marblesOnBoard(state: AbaloneState): [number, number] {
  return [MARBLES_PER_PLAYER - state.lost[0], MARBLES_PER_PLAYER - state.lost[1]];
}

/**
 * Se as 3 (ou 2, ou a única) casas formam uma linha reta e adjacente: para 3 casas, acha a do meio
 * (tem vizinho nos dois lados, na mesma direção) e devolve essa direção; devolve null se não formarem
 * uma linha válida.
 */
function findLineAxis(cells: Axial[]): Axial | null {
  if (cells.length === 1) return null;
  if (cells.length === 2) {
    const d = { q: cells[1].q - cells[0].q, r: cells[1].r - cells[0].r };
    return isDirection(d) ? d : null;
  }
  for (const center of cells) {
    const others = cells.filter((c) => !sameCell(c, center));
    for (const d of DIRECTIONS) {
      const p1 = add(center, d);
      const p2 = add(center, neg(d));
      if (others.some((o) => sameCell(o, p1)) && others.some((o) => sameCell(o, p2))) return d;
    }
  }
  return null;
}

/** Se `cells` (1 a 3 casas) são todas do `player`, distintas, e — quando mais de 1 — formam uma linha reta e adjacente. */
export function isValidLine(state: AbaloneState, player: PlayerId, cells: Axial[]): boolean {
  if (cells.length < 1 || cells.length > 3) return false;
  const seen = new Set<string>();
  for (const c of cells) {
    if (!inBounds(c) || owner(state, c) !== player) return false;
    const k = key(c);
    if (seen.has(k)) return false;
    seen.add(k);
  }
  if (cells.length === 1) return true;
  return findLineAxis(cells) !== null;
}

/** Cadeia de bolinhas do `opponent` a partir de `start`, andando em `d`, até achar casa vazia, fora do tabuleiro, ou da própria cor. */
function opponentChain(state: AbaloneState, start: Axial, d: Axial, opponent: PlayerId): { chain: Axial[]; after: Axial } {
  const chain: Axial[] = [];
  let cur = start;
  while (inBounds(cur) && owner(state, cur) === opponent) {
    chain.push(cur);
    cur = add(cur, d);
  }
  return { chain, after: cur };
}

export type MoveKind = 'simples' | 'lateral' | 'sumito';

interface MoveCheck {
  ok: boolean;
  kind?: MoveKind;
}

/** Se mover a linha `selection` (já validada como do jogador da vez) na direção `d` é legal, e de que tipo. */
function checkMove(state: AbaloneState, selection: Axial[], d: Axial): MoveCheck {
  const player = state.turn;
  const opponent = (1 - player) as PlayerId;

  if (selection.length === 1) {
    const target = add(selection[0], d);
    if (!inBounds(target)) return { ok: false };
    const o = owner(state, target);
    if (o === null) return { ok: true, kind: 'simples' };
    return { ok: false }; // uma bolinha só nunca empurra (precisaria de maioria sobre pelo menos 1)
  }

  const axis = findLineAxis(selection);
  const isInline = axis !== null && (sameCell(axis, d) || sameCell(neg(axis), d));

  if (!isInline) {
    // movimento lateral: todo mundo anda de lado, em unidade; nunca empurra — todas as casas de destino têm que estar vazias
    for (const c of selection) {
      const t = add(c, d);
      if (!inBounds(t) || owner(state, t) !== null) return { ok: false };
    }
    return { ok: true, kind: 'lateral' };
  }

  // movimento em linha: acha a bolinha da frente (a que não tem vizinho da própria seleção em d)
  const set = new Set(selection.map(key));
  const front = selection.find((c) => !set.has(key(add(c, d))))!;
  const target = add(front, d);
  if (!inBounds(target)) return { ok: false }; // a própria bolinha não sai do tabuleiro por movimento simples
  const o = owner(state, target);
  if (o === null) return { ok: true, kind: 'simples' };
  if (o === player) return { ok: false }; // bloqueada por outra bolinha própria

  const { chain, after } = opponentChain(state, target, d, opponent);
  if (selection.length <= chain.length) return { ok: false }; // sem maioria clara (empate ou minoria) — Sumito inválido
  if (inBounds(after) && owner(state, after) !== null) return { ok: false }; // sem espaço: bloqueada depois da fileira adversária
  return { ok: true, kind: 'sumito' };
}

/** Direções em que é legal mover a linha `selection` (do jogador da vez), e de que tipo cada uma é. */
export function legalDirections(state: AbaloneState, selection: Axial[]): { dir: Axial; kind: MoveKind }[] {
  if (state.winner !== null) return [];
  if (!isValidLine(state, state.turn, selection)) return [];
  const out: { dir: Axial; kind: MoveKind }[] = [];
  for (const d of DIRECTIONS) {
    const check = checkMove(state, selection, d);
    if (check.ok) out.push({ dir: d, kind: check.kind! });
  }
  return out;
}

/** Aplica o movimento da linha `selection` na direção `d` (se for legal); devolve o mesmo estado, sem mutar, se for ilegal. */
export function applyMove(state: AbaloneState, selection: Axial[], d: Axial): AbaloneState {
  if (state.winner !== null) return state;
  if (!isValidLine(state, state.turn, selection)) return state;
  const check = checkMove(state, selection, d);
  if (!check.ok) return state;

  const player = state.turn;
  const opponent = (1 - player) as PlayerId;
  const board = { ...state.board };
  const lost = [...state.lost] as [number, number];

  if (check.kind === 'sumito') {
    const set = new Set(selection.map(key));
    const front = selection.find((c) => !set.has(key(add(c, d))))!;
    const { chain } = opponentChain(state, add(front, d), d, opponent);
    for (const c of chain) delete board[key(c)];
    for (const c of selection) delete board[key(c)];
    for (const c of chain) {
      const t = add(c, d);
      if (inBounds(t)) board[key(t)] = opponent;
      else lost[opponent] += 1;
    }
    for (const c of selection) board[key(add(c, d))] = player;
  } else {
    for (const c of selection) delete board[key(c)];
    for (const c of selection) board[key(add(c, d))] = player;
  }

  const winner = lost[opponent] >= MARBLES_TO_WIN ? player : null;
  return { board, turn: opponent, lost, winner };
}
