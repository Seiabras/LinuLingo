/**
 * Motor de regras do Jogo do Moinho (Nine Men's Morris / Mill / Merels) — tabuleiro clássico de 24
 * pontos (três quadrados concêntricos ligados pelos pontos do meio de cada lado), 9 peças por
 * jogador, regras padrão descritas na Wikipédia ("Nine men's morris"): fase de colocação (cada um
 * põe as 9 peças, alternando), fase de movimento (uma peça anda por vez, só pra um ponto vizinho
 * ligado por uma linha do tabuleiro — sem "pular"), "moinho" (3 peças em linha nas 16 linhas
 * possíveis do tabuleiro) permite remover 1 peça do adversário — mas NUNCA uma peça que está num
 * moinho do adversário, a não ser que todas as peças dele estejam em moinhos. "Voar": quando um
 * jogador fica com só 3 peças, elas passam a poder ir pra QUALQUER ponto vazio do tabuleiro (não só
 * vizinho) — fonte indica que essa regra é comum mas tratada como variante em algumas versões;
 * mantida aqui porque é a mais citada e torna o final de jogo jogável. Vence quem reduz o adversário
 * a 2 peças ou o deixa sem lance legal.
 *
 * SIMPLIFICAÇÃO DOCUMENTADA: não implementamos o empate por posição repetida 3 vezes (citado pela
 * Wikipédia como possível). O motor só termina quando um lado fica com 2 peças ou sem lance legal.
 */

export type PlayerId = 0 | 1;
export type Phase = 'colocando' | 'movendo';

export interface MoinhoState {
  /** 24 pontos, índice 0-23 (ver `POINT_COORDS`/`ADJACENCY`/`MILLS` abaixo pro mapa do tabuleiro). */
  points: (PlayerId | null)[];
  turn: PlayerId;
  phase: Phase;
  /** Quantas peças cada jogador já colocou (de 9). */
  placedCount: [number, number];
  /** >0 quando quem acabou de jogar formou moinho(s) e precisa escolher peça(s) do adversário pra remover antes de passar a vez. */
  removalsPending: number;
  winner: PlayerId | null;
}

const NUM_POINTS = 24;
const PIECES_PER_PLAYER = 9;

/** Coordenadas (linha, coluna) de cada ponto num grid lógico 0-6, só pra desenhar o tabuleiro na tela. */
export const POINT_COORDS: [number, number][] = [
  [0, 0], [0, 3], [0, 6], [3, 6], [6, 6], [6, 3], [6, 0], [3, 0], // anel externo (0-7)
  [1, 1], [1, 3], [1, 5], [3, 5], [5, 5], [5, 3], [5, 1], [3, 1], // anel do meio (8-15)
  [2, 2], [2, 3], [2, 4], [3, 4], [4, 4], [4, 3], [4, 2], [3, 2], // anel interno (16-23)
];

/** Ligações entre pontos vizinhos (as linhas desenhadas no tabuleiro — por onde as peças andam). */
export const ADJACENCY: number[][] = (() => {
  const adj: number[][] = Array.from({ length: NUM_POINTS }, () => []);
  const connect = (a: number, b: number) => { adj[a].push(b); adj[b].push(a); };
  const rings: number[][] = [
    [0, 1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22, 23],
  ];
  for (const ring of rings) for (let i = 0; i < ring.length; i++) connect(ring[i], ring[(i + 1) % ring.length]);
  const spokes: [number, number][] = [[1, 9], [9, 17], [3, 11], [11, 19], [5, 13], [13, 21], [7, 15], [15, 23]];
  for (const [a, b] of spokes) connect(a, b);
  return adj;
})();

/** As 16 linhas de 3 pontos que formam "moinho" quando as 3 são do mesmo jogador. */
export const MILLS: number[][] = [
  [0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 0],
  [8, 9, 10], [10, 11, 12], [12, 13, 14], [14, 15, 8],
  [16, 17, 18], [18, 19, 20], [20, 21, 22], [22, 23, 16],
  [1, 9, 17], [3, 11, 19], [5, 13, 21], [7, 15, 23],
];

const opponent = (p: PlayerId): PlayerId => (p === 0 ? 1 : 0);

export function createInitialState(): MoinhoState {
  return {
    points: Array(NUM_POINTS).fill(null),
    turn: 0,
    phase: 'colocando',
    placedCount: [0, 0],
    removalsPending: 0,
    winner: null,
  };
}

function countPieces(points: (PlayerId | null)[], player: PlayerId): number {
  return points.filter((p) => p === player).length;
}

/** Se `idx` faz parte de algum moinho já formado (3 peças do mesmo jogador que `points[idx]`). */
function isInAnyMill(points: (PlayerId | null)[], idx: number): boolean {
  const owner = points[idx];
  if (owner === null) return false;
  return MILLS.some((mill) => mill.includes(idx) && mill.every((i) => points[i] === owner));
}

/** Quantos moinhos NOVOS passam a existir em `idx` depois de uma jogada (0, 1 ou 2 se for um cruzamento duplo). */
function millsFormedAt(points: (PlayerId | null)[], idx: number): number {
  const owner = points[idx];
  if (owner === null) return 0;
  return MILLS.filter((mill) => mill.includes(idx) && mill.every((i) => points[i] === owner)).length;
}

/** Peças do adversário que podem ser removidas agora: todas, exceto as que estão em moinho — a não ser que TODAS estejam em moinho. */
export function removablePieces(state: MoinhoState): number[] {
  const opp = opponent(state.turn);
  const oppPieces: number[] = [];
  for (let i = 0; i < NUM_POINTS; i++) if (state.points[i] === opp) oppPieces.push(i);
  const unprotected = oppPieces.filter((i) => !isInAnyMill(state.points, i));
  return unprotected.length > 0 ? unprotected : oppPieces;
}

export function legalPlacements(state: MoinhoState): number[] {
  if (state.phase !== 'colocando' || state.removalsPending > 0 || state.winner !== null) return [];
  const out: number[] = [];
  for (let i = 0; i < NUM_POINTS; i++) if (state.points[i] === null) out.push(i);
  return out;
}

/** Destinos legais pra peça em `from`: vizinhos vazios, ou QUALQUER ponto vazio se esse jogador só tem 3 peças ("voar"). */
export function legalMovesFrom(state: MoinhoState, from: number): number[] {
  if (state.phase !== 'movendo' || state.removalsPending > 0 || state.winner !== null) return [];
  if (state.points[from] !== state.turn) return [];
  const flying = countPieces(state.points, state.turn) === 3;
  if (flying) return legalPlacements({ ...state, phase: 'colocando' });
  return ADJACENCY[from].filter((n) => state.points[n] === null);
}

function hasAnyLegalMove(state: MoinhoState, player: PlayerId): boolean {
  const flying = countPieces(state.points, player) === 3;
  for (let i = 0; i < NUM_POINTS; i++) {
    if (state.points[i] !== player) continue;
    if (flying) return state.points.some((p) => p === null);
    if (ADJACENCY[i].some((n) => state.points[n] === null)) return true;
  }
  return false;
}

/**
 * Fecha a vez: decide fase, vitória (adversário com ≤2 peças ou sem lance legal) ou passa a vez.
 * As duas condições de vitória só valem na fase de movimento — na colocação, ter poucas peças no
 * tabuleiro ainda é normal (ninguém colocou as 9 ainda), não é derrota.
 */
function finalizeTurn(state: MoinhoState): MoinhoState {
  const phase: Phase = state.placedCount[0] === PIECES_PER_PLAYER && state.placedCount[1] === PIECES_PER_PLAYER ? 'movendo' : state.phase;
  const next = opponent(state.turn);
  const base: MoinhoState = { ...state, phase, removalsPending: 0 };
  if (phase === 'movendo') {
    if (countPieces(state.points, next) <= 2) return { ...base, winner: state.turn };
    if (!hasAnyLegalMove(base, next)) return { ...base, winner: state.turn };
  }
  return { ...base, turn: next };
}

export function placePiece(state: MoinhoState, idx: number): MoinhoState {
  if (!legalPlacements(state).includes(idx)) return state;
  const points = state.points.slice();
  points[idx] = state.turn;
  const placedCount = [...state.placedCount] as [number, number];
  placedCount[state.turn] += 1;
  const newMills = millsFormedAt(points, idx);
  const mid = { ...state, points, placedCount };
  return newMills > 0 ? { ...mid, removalsPending: newMills } : finalizeTurn(mid);
}

export function movePiece(state: MoinhoState, from: number, to: number): MoinhoState {
  if (!legalMovesFrom(state, from).includes(to)) return state;
  const points = state.points.slice();
  points[to] = points[from];
  points[from] = null;
  const newMills = millsFormedAt(points, to);
  const mid = { ...state, points };
  return newMills > 0 ? { ...mid, removalsPending: newMills } : finalizeTurn(mid);
}

/** Remove a peça do adversário em `idx` (precisa estar em `removablePieces`). Resolve a vez quando não há mais remoção pendente. */
export function removeOpponentPiece(state: MoinhoState, idx: number): MoinhoState {
  if (state.removalsPending <= 0 || !removablePieces(state).includes(idx)) return state;
  const points = state.points.slice();
  points[idx] = null;
  const removalsPending = state.removalsPending - 1;
  const mid = { ...state, points, removalsPending };
  return removalsPending > 0 ? mid : finalizeTurn(mid);
}
