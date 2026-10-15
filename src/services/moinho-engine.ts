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
/**
 * As regras jogáveis (variantes, pedido do dono, 15/10/2026; Wikipédia em inglês “Nine men's
 * morris”, consultada em 15/10/2026):
 * - 'nove' (a de sempre), descrita acima;
 * - 'doze' (Twelve men's morris): o tabuleiro ganha 4 linhas diagonais, ligando os cantos dos três
 *   quadrados, e cada um joga com 12 peças. Se o tabuleiro encher na colocação, é empate;
 * - 'lasker' (Lasker morris, “ten men's morris”): 10 peças para cada um, e desde o primeiro lance
 *   cada um escolhe, na sua vez, colocar uma peça nova ou mover uma que já está no tabuleiro. Aqui,
 *   como na regra de sempre, só se “voa” com 3 peças depois que todas foram colocadas.
 */
export type RegraMoinho = 'nove' | 'doze' | 'lasker';

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
  /** a regra da partida (sem nada: a de 9 peças) */
  regra?: RegraMoinho;
  /** só na de 12 peças: o tabuleiro encheu na colocação */
  empate?: boolean;
}

const NUM_POINTS = 24;
const PECAS: Record<RegraMoinho, number> = { nove: 9, doze: 12, lasker: 10 };
export const pecasPorJogador = (s: Pick<MoinhoState, 'regra'>) => PECAS[s.regra ?? 'nove'];

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

/** As 4 diagonais da trilha de 12 peças, ligando os cantos dos três quadrados. */
const DIAGONAIS: number[][] = [
  [0, 8, 16],
  [2, 10, 18],
  [4, 12, 20],
  [6, 14, 22],
];

/** As ligações do tabuleiro de 12 peças: as de sempre e as das diagonais. */
const ADJACENCY_DOZE: number[][] = (() => {
  const adj = ADJACENCY.map((v) => [...v]);
  for (const [a, b, c] of DIAGONAIS) {
    adj[a]!.push(b!);
    adj[b]!.push(a!, c!);
    adj[c]!.push(b!);
  }
  return adj;
})();

/** As 16 linhas de 3 pontos que formam "moinho" quando as 3 são do mesmo jogador. */
export const MILLS: number[][] = [
  [0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 0],
  [8, 9, 10], [10, 11, 12], [12, 13, 14], [14, 15, 8],
  [16, 17, 18], [18, 19, 20], [20, 21, 22], [22, 23, 16],
  [1, 9, 17], [3, 11, 19], [5, 13, 21], [7, 15, 23],
];

const MILLS_DOZE: number[][] = [...MILLS, ...DIAGONAIS];

/** As ligações e os moinhos da regra (o tabuleiro de 12 peças tem as diagonais). */
export const ligacoesDe = (s: Pick<MoinhoState, 'regra'>) => (s.regra === 'doze' ? ADJACENCY_DOZE : ADJACENCY);
export const moinhosDe = (s: Pick<MoinhoState, 'regra'>) => (s.regra === 'doze' ? MILLS_DOZE : MILLS);

const opponent = (p: PlayerId): PlayerId => (p === 0 ? 1 : 0);

export function createInitialState(regra: RegraMoinho = 'nove'): MoinhoState {
  const s: MoinhoState = {
    points: Array(NUM_POINTS).fill(null),
    turn: 0,
    phase: 'colocando',
    placedCount: [0, 0],
    removalsPending: 0,
    winner: null,
  };
  return regra === 'nove' ? s : { ...s, regra };
}

function countPieces(points: (PlayerId | null)[], player: PlayerId): number {
  return points.filter((p) => p === player).length;
}

/** Se `idx` faz parte de algum moinho já formado (3 peças do mesmo jogador que `points[idx]`). */
function isInAnyMill(points: (PlayerId | null)[], idx: number, mills: number[][]): boolean {
  const owner = points[idx];
  if (owner === null) return false;
  return mills.some((mill) => mill.includes(idx) && mill.every((i) => points[i] === owner));
}

/** Quantos moinhos NOVOS passam a existir em `idx` depois de uma jogada (0, 1 ou 2 se for um cruzamento duplo). */
function millsFormedAt(points: (PlayerId | null)[], idx: number, mills: number[][]): number {
  const owner = points[idx];
  if (owner === null) return 0;
  return mills.filter((mill) => mill.includes(idx) && mill.every((i) => points[i] === owner)).length;
}

/** Peças do adversário que podem ser removidas agora: todas, exceto as que estão em moinho — a não ser que TODAS estejam em moinho. */
export function removablePieces(state: MoinhoState): number[] {
  const opp = opponent(state.turn);
  const oppPieces: number[] = [];
  for (let i = 0; i < NUM_POINTS; i++) if (state.points[i] === opp) oppPieces.push(i);
  const unprotected = oppPieces.filter((i) => !isInAnyMill(state.points, i, moinhosDe(state)));
  return unprotected.length > 0 ? unprotected : oppPieces;
}

export function legalPlacements(state: MoinhoState): number[] {
  if (state.phase !== 'colocando' || state.removalsPending > 0 || state.winner !== null || state.empate) return [];
  // na Lasker, quem já pôs as 10 não coloca mais (só move), mesmo que o outro ainda tenha peças na mão
  if (state.placedCount[state.turn] >= pecasPorJogador(state)) return [];
  const out: number[] = [];
  for (let i = 0; i < NUM_POINTS; i++) if (state.points[i] === null) out.push(i);
  return out;
}

/** Destinos legais pra peça em `from`: vizinhos vazios, ou QUALQUER ponto vazio se esse jogador só tem 3 peças ("voar"). */
export function legalMovesFrom(state: MoinhoState, from: number): number[] {
  const podeMover = state.phase === 'movendo' || state.regra === 'lasker';
  if (!podeMover || state.removalsPending > 0 || state.winner !== null || state.empate) return [];
  if (state.points[from] !== state.turn) return [];
  const flying = state.phase === 'movendo' && countPieces(state.points, state.turn) === 3;
  if (flying) return state.points.flatMap((p, i) => (p === null ? [i] : []));
  return ligacoesDe(state)[from]!.filter((n) => state.points[n] === null);
}

function hasAnyLegalMove(state: MoinhoState, player: PlayerId): boolean {
  if (state.regra === 'lasker' && state.placedCount[player] < pecasPorJogador(state) && state.points.some((p) => p === null)) return true;
  const flying = state.phase === 'movendo' && countPieces(state.points, player) === 3;
  const adj = ligacoesDe(state);
  for (let i = 0; i < NUM_POINTS; i++) {
    if (state.points[i] !== player) continue;
    if (flying) return state.points.some((p) => p === null);
    if (adj[i]!.some((n) => state.points[n] === null)) return true;
  }
  return false;
}

/**
 * Fecha a vez: decide fase, vitória (adversário com ≤2 peças ou sem lance legal) ou passa a vez.
 * As duas condições de vitória só valem na fase de movimento — na colocação, ter poucas peças no
 * tabuleiro ainda é normal (ninguém colocou as 9 ainda), não é derrota.
 */
function finalizeTurn(state: MoinhoState): MoinhoState {
  const total = pecasPorJogador(state);
  const phase: Phase = state.placedCount[0] === total && state.placedCount[1] === total ? 'movendo' : state.phase;
  const next = opponent(state.turn);
  const base: MoinhoState = { ...state, phase, removalsPending: 0 };
  // trilha de 12: o tabuleiro encheu na colocação (as 24 peças sem nenhuma tirada), ninguém pode andar: empate
  if (state.regra === 'doze' && state.points.every((p) => p !== null)) return { ...base, empate: true };
  // Lasker: na colocação, quem fica sem lance (sem peça para pôr nem para mover) também perde
  if (state.regra === 'lasker' && phase === 'colocando' && !hasAnyLegalMove(base, next)) return { ...base, winner: state.turn };
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
  const newMills = millsFormedAt(points, idx, moinhosDe(state));
  const mid = { ...state, points, placedCount };
  return newMills > 0 ? { ...mid, removalsPending: newMills } : finalizeTurn(mid);
}

export function movePiece(state: MoinhoState, from: number, to: number): MoinhoState {
  if (!legalMovesFrom(state, from).includes(to)) return state;
  const points = state.points.slice();
  points[to] = points[from];
  points[from] = null;
  const newMills = millsFormedAt(points, to, moinhosDe(state));
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
