/**
 * Motor de regras de Oware — jogo de mancala (semear-e-capturar) de Gana, de origem provavelmente
 * Ashanti (fonte: Wikipédia, artigo "Oware", citando um registro etnográfico de 1927 em Gana via
 * Ludii Portal). Implementa a variante "abapa", a mais jogada em competições internacionais e a
 * usada como regra principal no artigo da Wikipédia.
 *
 * Tabuleiro: 12 casas numa fileira circular, índices 0-5 (fileira do jogador 0) e 6-11 (fileira do
 * jogador 1), com 4 semente cada no início (48 no total). Na vez, o jogador esvazia uma casa da
 * PRÓPRIA fileira e semeia 1 semente em cada casa seguinte, sentido horário/anti-horário fixo
 * (sempre índice+1, circular) — pulando a própria casa de origem se a volta for longa o bastante
 * pra voltar nela. Captura: se a ÚLTIMA semente cai numa casa do ADVERSÁRIO que fica com 2 ou 3
 * sementes, captura; e continua capturando pra trás (casa anterior semeada nesta mesma jogada),
 * enquanto também for do adversário e tiver 2 ou 3. "Grand slam" (capturar TODAS as sementes do
 * adversário de uma vez): a captura é ANULADA (regra abapa) — as sementes ficam no tabuleiro.
 * Regra de alimentar: se a fileira do adversário está totalmente vazia, você só pode jogar uma
 * casa que leve pelo menos 1 semente pra fileira dele; se nenhuma das suas casas faz isso, você
 * recolhe todas as sementes do seu próprio lado e o jogo acaba. Vence quem captura 25 sementes ou
 * mais (ou tiver mais sementes capturadas quando o jogo terminar por falta de lance); 24-24 é
 * empate (total do tabuleiro é 48).
 *
 * SIMPLIFICAÇÃO DOCUMENTADA: a Wikipédia cita uma regra extra de alguns conjuntos de regras — se os
 * dois jogadores concordam que a posição virou um ciclo infinito, o jogo acaba e cada um recolhe as
 * sementes do próprio lado. Como isso depende de acordo mútuo dos jogadores (não é uma condição
 * automática e objetiva), não implementamos essa regra — só as duas condições de fim de jogo
 * automáticas (25+ sementes capturadas, ou falta de lance legal por fome).
 */

export type PlayerId = 0 | 1;

export interface OwareState {
  /** 12 casas: 0-5 são do jogador 0, 6-11 são do jogador 1. */
  houses: number[];
  scores: [number, number];
  turn: PlayerId;
  winner: PlayerId | 'empate' | null;
}

const NUM_HOUSES = 12;
const SEEDS_PER_HOUSE = 4;
const SEEDS_TO_WIN = 25;

const opponent = (p: PlayerId): PlayerId => (p === 0 ? 1 : 0);
export const rowOf = (player: PlayerId): number[] => (player === 0 ? [0, 1, 2, 3, 4, 5] : [6, 7, 8, 9, 10, 11]);
const ownerOf = (idx: number): PlayerId => (idx < 6 ? 0 : 1);

export function createInitialState(): OwareState {
  return { houses: Array(NUM_HOUSES).fill(SEEDS_PER_HOUSE), scores: [0, 0], turn: 0, winner: null };
}

/** Em que casas a semeadura a partir de `startIdx` cai, na ordem — pulando a própria casa de origem. */
function sowPlan(houses: number[], startIdx: number): number[] {
  let remaining = houses[startIdx];
  let cur = startIdx;
  const sown: number[] = [];
  while (remaining > 0) {
    cur = (cur + 1) % NUM_HOUSES;
    if (cur === startIdx) cur = (cur + 1) % NUM_HOUSES; // pula a casa de origem, que fica vazia
    sown.push(cur);
    remaining--;
  }
  return sown;
}

/** Casas da própria fileira de `state.turn` que são jogáveis agora, já aplicando a regra de alimentar. */
export function legalMoves(state: OwareState): number[] {
  if (state.winner !== null) return [];
  const player = state.turn;
  const own = rowOf(player);
  const candidates = own.filter((h) => state.houses[h] > 0);
  const oppRow = rowOf(opponent(player));
  const oppTotal = oppRow.reduce((sum, h) => sum + state.houses[h], 0);
  if (oppTotal > 0) return candidates;
  return candidates.filter((h) => sowPlan(state.houses, h).some((i) => oppRow.includes(i)));
}

/** Joga a casa `houseIdx` (precisa estar em `legalMoves`). Sem mudança (mesma referência) se não for legal. */
export function sow(state: OwareState, houseIdx: number): OwareState {
  if (!legalMoves(state).includes(houseIdx)) return state;
  const player = state.turn;
  const opp = opponent(player);
  const houses = state.houses.slice();
  const sown = sowPlan(houses, houseIdx);
  houses[houseIdx] = 0;
  for (const idx of sown) houses[idx] += 1;

  // captura: a partir da última casa semeada, pra trás, enquanto for da fileira do adversário e tiver 2 ou 3
  const oppRow = rowOf(opp);
  const captureList: number[] = [];
  for (let i = sown.length - 1; i >= 0; i--) {
    const idx = sown[i];
    if (ownerOf(idx) === opp && (houses[idx] === 2 || houses[idx] === 3)) captureList.push(idx);
    else break;
  }
  // grand slam: se a captura esvaziaria TODA a fileira do adversário, ela é anulada (regra abapa)
  const oppTotalAfterSow = oppRow.reduce((sum, h) => sum + houses[h], 0);
  const captureTotal = captureList.reduce((sum, h) => sum + houses[h], 0);
  const grandSlam = captureList.length > 0 && captureTotal === oppTotalAfterSow;

  const scores = [...state.scores] as [number, number];
  if (!grandSlam) {
    for (const idx of captureList) { scores[player] += houses[idx]; houses[idx] = 0; }
  }

  if (scores[player] >= SEEDS_TO_WIN) {
    return { houses, scores, turn: opponent(player), winner: player };
  }

  const next = opponent(player);
  const afterMove: OwareState = { houses, scores, turn: next, winner: null };
  if (legalMoves(afterMove).length > 0) return afterMove;

  // `next` não tem lance legal (fome): recolhe as próprias sementes do tabuleiro e o jogo acaba
  const finalHouses = houses.slice();
  const finalScores = [...scores] as [number, number];
  for (const h of rowOf(next)) { finalScores[next] += finalHouses[h]; finalHouses[h] = 0; }
  const winner: PlayerId | 'empate' = finalScores[0] === finalScores[1] ? 'empate' : finalScores[0] > finalScores[1] ? 0 : 1;
  return { houses: finalHouses, scores: finalScores, turn: next, winner };
}
