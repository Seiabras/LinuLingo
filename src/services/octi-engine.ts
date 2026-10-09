/**
 * Motor de regras de Octi — "OCTI: New Edition" (antes chamada "OCTI for Kids"), tabuleiro 6×7, a
 * variante mais simples do jogo criado por Donald Green (Octi, 1999, The Great American Trading
 * Company). A variante "Octi-X" (tabuleiro 9×9, com empilhamento de peças e vitória por ocupar as 3
 * bases ao mesmo tempo) é mais complexa e fica fora do escopo aqui. Fontes usadas, nada inventado:
 *
 *  - Cedric Roijakkers, "OCTI" (dissertação de mestrado em Ciência da Computação, Maastricht
 *    University, Dept. of Knowledge Engineering) — texto completo das regras na seção 2.2 ("Rules of
 *    'OCTI: New Edition'") e o diagrama da posição inicial (Figura 2.1), citando como fonte primária
 *    Green, D. (2000b), o regulamento oficial do jogo.
 *    PDF: https://project.dke.maastrichtuniversity.nl/games/files/msc/Roijakkers_thesis.pdf
 *  - rulespal.com/octi/rulebook — resumo independente do regulamento, usado pra conferir os mesmos
 *    pontos (tabuleiro básico 6×7 / "Octi-X" 9×9, 4 bases por jogador, 12 prongs de reserva, um prong
 *    habilita movimento numa direção, salto é opcional, captura é opcional por peça saltada, nunca se
 *    salta a mesma casa duas vezes no mesmo turno).
 *  - Wikipédia, verbete "Octi": designer Donald Green, publicado em 1999 pela The Great American
 *    Trading Company; tabuleiro original 9×9, com uma versão 6×7 pra crianças (hoje "New Edition").
 *
 * Observação importante: o tabuleiro NÃO é octogonal — é um grid retangular comum (6 colunas × 7
 * linhas). O "octo" do nome vem da peça (o "pod"): ela tem 8 faces, uma pra cada direção da bússola,
 * onde se encaixam os "prongs" (pinos) que liberam o movimento naquela direção.
 *
 * Regras implementadas (OCTI: New Edition, 2 jogadores):
 *  - Cada jogador começa com 4 pods nas suas 4 casas OCTI (a base dele, onde ele nasce) e 12 prongs de
 *    reserva.
 *  - Na vez, UMA ação: (1) instalar um prong numa direção ainda livre de um pod seu (gasta 1 prong da
 *    reserva), (2) mover um pod uma casa na direção de um prong que ele já tem (a casa de destino tem
 *    que estar vazia), ou (3) saltar com um pod sobre uma peça (sua ou do adversário) numa casa
 *    adjacente, na direção de um prong, caindo na casa vazia logo depois dela — pode encadear vários
 *    saltos seguidos com a MESMA peça (nunca saltando a mesma casa duas vezes no mesmo turno); cada
 *    peça saltada pode ser capturada (removida do tabuleiro, com os prongs dela indo pra reserva de
 *    quem capturou) ou deixada no tabuleiro — decisão livre, peça por peça.
 *  - Vence quem primeiro pisar com um pod numa casa OCTI do ADVERSÁRIO (por movimento simples ou por
 *    salto) — ou quem deixar o adversário sem NENHUMA ação possível na vez dele (sem prong pra
 *    instalar e sem pod que consiga mover ou saltar).
 *
 * Simplificação deliberada e documentada (não é regra inventada): os prongs são tratados como pinos
 * sem identidade própria — o slot ocupado é só "a direção X do pod", sem o nome de letra (a-h) que a
 * notação oficial usa (ligado à orientação física da peça, que sempre aponta pro lado do adversário).
 * Isso não muda em nada o que é ou não é um lance legal — é só notação de registro de partida (como o
 * SGF), que este app não precisa, já que não exporta partidas. Também não implementamos empate por
 * repetição de posição: a própria dissertação diz que isso é "teoricamente possível, mas nunca
 * documentado nas regras oficiais nem em relatos de torneio" — como nenhuma fonte confirma essa regra,
 * ela não entra aqui. O jogo só termina por casa OCTI ocupada ou por bloqueio total, exatamente como
 * no regulamento.
 */

export const ROWS = 7;
export const COLS = 6;
export const PRONGS_RESERVE = 12;

export type PlayerId = 0 | 1;

export interface Pos {
  row: number;
  col: number;
}

/** As 8 direções (índice = "direção" do prong nesse pod); linha crescente = "norte" (pra cima na tela). */
export const DIRS: Pos[] = [
  { row: 1, col: 0 }, // 0 N
  { row: 1, col: 1 }, // 1 NE
  { row: 0, col: 1 }, // 2 L
  { row: -1, col: 1 }, // 3 SE
  { row: -1, col: 0 }, // 4 S
  { row: -1, col: -1 }, // 5 SO
  { row: 0, col: -1 }, // 6 O
  { row: 1, col: -1 }, // 7 NO
];

export const DIR_LABELS = ['N', 'NE', 'L', 'SE', 'S', 'SO', 'O', 'NO'] as const;

export interface Pod {
  id: number;
  player: PlayerId;
  row: number;
  col: number;
  /** direções (índices em DIRS) já com prong instalado — uma vez instalada, nunca sai. */
  prongs: ReadonlySet<number>;
}

export type JumpPhase =
  | { kind: 'normal' }
  | { kind: 'salto'; podId: number; jumped: ReadonlySet<string>; lastOverPodId: number | null };

export interface OctiState {
  pods: Pod[]; // só peças vivas no tabuleiro
  reserve: [number, number];
  turn: PlayerId;
  winner: PlayerId | null;
  phase: JumpPhase;
}

const posKey = (p: Pos) => `${p.row},${p.col}`;
const inBounds = (p: Pos) => p.row >= 0 && p.row < ROWS && p.col >= 0 && p.col < COLS;
const samePos = (a: Pos, b: Pos) => a.row === b.row && a.col === b.col;

/** As 4 casas OCTI (base) de cada jogador: onde os pods dele nascem — pisar na do adversário vence. */
export function basesOf(player: PlayerId): Pos[] {
  const row = player === 0 ? 1 : ROWS - 2;
  return [1, 2, 3, 4].map((col) => ({ row, col }));
}

function isOpponentBase(player: PlayerId, pos: Pos): boolean {
  const opp = (1 - player) as PlayerId;
  return basesOf(opp).some((b) => samePos(b, pos));
}

export function createInitialState(): OctiState {
  const pods: Pod[] = [];
  let id = 0;
  for (const player of [0, 1] as PlayerId[]) {
    for (const b of basesOf(player)) {
      pods.push({ id: id++, player, row: b.row, col: b.col, prongs: new Set() });
    }
  }
  return { pods, reserve: [PRONGS_RESERVE, PRONGS_RESERVE], turn: 0, winner: null, phase: { kind: 'normal' } };
}

export function podAt(state: OctiState, pos: Pos): Pod | undefined {
  return state.pods.find((p) => p.row === pos.row && p.col === pos.col);
}

/** Direções em que o pod ainda pode ganhar um prong (ainda não instalada ali). */
export function freeDirections(pod: Pod): number[] {
  const out: number[] = [];
  for (let d = 0; d < DIRS.length; d++) if (!pod.prongs.has(d)) out.push(d);
  return out;
}

export function canAddProng(state: OctiState, podId: number, dir: number): boolean {
  if (state.winner !== null || state.phase.kind === 'salto') return false;
  const pod = state.pods.find((p) => p.id === podId);
  if (!pod || pod.player !== state.turn) return false;
  if (state.reserve[state.turn] <= 0) return false;
  return !pod.prongs.has(dir);
}

/** Instala um prong (se legal) e passa a vez; devolve o mesmo estado (sem mutar) se for ilegal. */
export function addProng(state: OctiState, podId: number, dir: number): OctiState {
  if (!canAddProng(state, podId, dir)) return state;
  const pods = state.pods.map((p) => (p.id === podId ? { ...p, prongs: new Set([...p.prongs, dir]) } : p));
  const reserve = [...state.reserve] as [number, number];
  reserve[state.turn] -= 1;
  return endOfAction({ ...state, pods, reserve });
}

/** Casas pra onde o pod pode se mover (um passo, sem saltar): direção com prong e casa vazia. */
export function legalSteps(state: OctiState, podId: number): Pos[] {
  if (state.winner !== null || state.phase.kind === 'salto') return [];
  const pod = state.pods.find((p) => p.id === podId);
  if (!pod || pod.player !== state.turn) return [];
  const moves: Pos[] = [];
  for (const d of pod.prongs) {
    const to: Pos = { row: pod.row + DIRS[d].row, col: pod.col + DIRS[d].col };
    if (inBounds(to) && !podAt(state, to)) moves.push(to);
  }
  return moves;
}

/** Move o pod (passo simples, se for um dos `legalSteps`); passa a vez e detecta vitória. */
export function movePod(state: OctiState, podId: number, to: Pos): OctiState {
  const legal = legalSteps(state, podId).some((p) => samePos(p, to));
  if (!legal) return state;
  const pod = state.pods.find((p) => p.id === podId)!;
  const pods = state.pods.map((p) => (p.id === podId ? { ...p, row: to.row, col: to.col } : p));
  const won = isOpponentBase(pod.player, to);
  return endOfAction({ ...state, pods, winner: won ? pod.player : state.winner });
}

export interface JumpHop {
  to: Pos;
  overPodId: number;
}

/** Saltos possíveis a partir da posição ATUAL do pod (seja o 1º salto do turno, seja no meio de uma cadeia). */
export function legalJumpHops(state: OctiState, podId: number): JumpHop[] {
  if (state.winner !== null) return [];
  if (state.phase.kind === 'salto' && state.phase.podId !== podId) return [];
  const pod = state.pods.find((p) => p.id === podId);
  if (!pod || pod.player !== state.turn) return [];
  const jumped = state.phase.kind === 'salto' ? state.phase.jumped : new Set<string>();
  const hops: JumpHop[] = [];
  for (const d of pod.prongs) {
    const over: Pos = { row: pod.row + DIRS[d].row, col: pod.col + DIRS[d].col };
    const to: Pos = { row: pod.row + DIRS[d].row * 2, col: pod.col + DIRS[d].col * 2 };
    if (!inBounds(over) || !inBounds(to)) continue;
    if (jumped.has(posKey(over))) continue;
    const overPod = podAt(state, over);
    if (!overPod) continue;
    if (podAt(state, to)) continue;
    hops.push({ to, overPodId: overPod.id });
  }
  return hops;
}

/**
 * Faz um salto pra `to` (se for um dos `legalJumpHops`). Não passa a vez — o turno continua na fase
 * "salto": o jogador pode saltar de novo com a mesma peça, decidir capturar a peça saltada
 * (`captureJumped`) ou encerrar o turno (`endTurn`). Devolve o mesmo estado se o salto for ilegal.
 */
export function jump(state: OctiState, podId: number, to: Pos): OctiState {
  if (state.winner !== null) return state;
  const hop = legalJumpHops(state, podId).find((h) => samePos(h.to, to));
  if (!hop) return state;
  const pod = state.pods.find((p) => p.id === podId)!;
  const over: Pos = { row: (pod.row + to.row) / 2, col: (pod.col + to.col) / 2 };
  const pods = state.pods.map((p) => (p.id === podId ? { ...p, row: to.row, col: to.col } : p));
  const prevJumped = state.phase.kind === 'salto' ? state.phase.jumped : new Set<string>();
  const jumped = new Set(prevJumped);
  jumped.add(posKey(over));
  const won = isOpponentBase(pod.player, to);
  return {
    ...state,
    pods,
    winner: won ? pod.player : state.winner,
    phase: won ? { kind: 'normal' } : { kind: 'salto', podId, jumped, lastOverPodId: hop.overPodId },
  };
}

/** Se dá pra capturar agora a peça do salto mais recente (ainda não decidida). */
export function canCaptureJumped(state: OctiState): boolean {
  return state.winner === null && state.phase.kind === 'salto' && state.phase.lastOverPodId !== null;
}

/** Captura a peça do salto mais recente: remove do tabuleiro e manda os prongs dela pra reserva de quem capturou. */
export function captureJumped(state: OctiState): OctiState {
  if (!canCaptureJumped(state)) return state;
  const phase = state.phase as { kind: 'salto'; podId: number; jumped: ReadonlySet<string>; lastOverPodId: number };
  const overPod = state.pods.find((p) => p.id === phase.lastOverPodId);
  if (!overPod) return state;
  const pods = state.pods.filter((p) => p.id !== overPod.id);
  const reserve = [...state.reserve] as [number, number];
  reserve[state.turn] += overPod.prongs.size;
  return { ...state, pods, reserve, phase: { ...phase, lastOverPodId: null } };
}

/** Encerra o turno depois de pelo menos 1 salto (a peça saltada mais recente que não foi capturada fica no tabuleiro). */
export function endTurn(state: OctiState): OctiState {
  if (state.winner !== null || state.phase.kind !== 'salto') return state;
  return endOfAction({ ...state, phase: { kind: 'normal' } });
}

/** Se o jogador da vez tem QUALQUER ação legal (instalar prong, mover ou saltar). */
function hasAnyLegalAction(state: OctiState): boolean {
  const mine = state.pods.filter((p) => p.player === state.turn);
  if (state.reserve[state.turn] > 0 && mine.some((p) => freeDirections(p).length > 0)) return true;
  for (const p of mine) {
    if (legalSteps(state, p.id).length > 0) return true;
    if (legalJumpHops(state, p.id).length > 0) return true;
  }
  return false;
}

/** Passa a vez pro outro jogador e, se ele ficar sem nenhuma ação possível, declara o jogador atual vencedor. */
function endOfAction(state: OctiState): OctiState {
  if (state.winner !== null) return state;
  const next = (1 - state.turn) as PlayerId;
  const switched: OctiState = { ...state, turn: next, phase: { kind: 'normal' } };
  if (!hasAnyLegalAction(switched)) return { ...switched, winner: state.turn };
  return switched;
}
