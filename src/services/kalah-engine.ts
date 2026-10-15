/**
 * Motor do Kalah, a mancala com os dois depósitos nas pontas (o jogo vendido como “Mancala”). Regras
 * do artigo “Kalah” da Wikipédia em inglês (consultado em 11/10/2026), as “regras padrão”:
 *   - 6 casas de cada lado e um depósito (a “kalah”) em cada ponta; 4 sementes em cada casa;
 *   - na vez, o jogador pega todas as sementes de uma casa sua e semeia uma por casa, no sentido
 *     anti-horário, passando pelo próprio depósito, mas não pelo do adversário;
 *   - se a última semente cai no próprio depósito, ele joga de novo (sem limite de vezes);
 *   - se a última cai numa casa sua que estava vazia e a casa da frente tem sementes, as duas coisas
 *     (a última semente e as da frente) vão para o depósito dele;
 *   - quando um jogador fica sem nenhuma semente nas casas, o jogo acaba: o outro leva para o próprio
 *     depósito as sementes que sobraram do lado dele, e vence quem tiver mais no depósito.
 *
 * As covas, em ordem de semeadura: 0-5 são as casas do jogador 0 (da esquerda para a direita, embaixo),
 * 6 é o depósito dele, 7-12 as casas do jogador 1 (da direita para a esquerda, em cima) e 13 o depósito
 * do jogador 1.
 */

export type Jogador = 0 | 1;

export interface KalahState {
  /**
   * Variante 'frente-vazia' (do mesmo artigo): a última semente numa casa sua vazia vai para o
   * depósito mesmo quando a casa da frente está vazia. Sem nada: a regra padrão.
   */
  regra?: 'frente-vazia';
  covas: number[];
  turn: Jogador;
  winner: Jogador | 'empate' | null;
  /** a casa jogada no último lance, as covas que receberam semente e se houve captura */
  ultimo: { de: number; semeadas: number[]; captura: number | null; jogaDeNovo: boolean } | null;
}

export const SEMENTES_POR_CASA = 4;
export const DEPOSITO: Record<Jogador, number> = { 0: 6, 1: 13 };

/** As casas de um jogador (sem o depósito), na ordem de semeadura. */
export const casasDe = (p: Jogador): number[] => (p === 0 ? [0, 1, 2, 3, 4, 5] : [7, 8, 9, 10, 11, 12]);
/** A casa da frente (do outro lado do tabuleiro). */
export const frente = (i: number) => 12 - i;

export function createInitialState(sementes = SEMENTES_POR_CASA, regra?: 'frente-vazia'): KalahState {
  const covas = Array(14).fill(sementes);
  covas[6] = 0;
  covas[13] = 0;
  return regra ? { regra, covas, turn: 0, winner: null, ultimo: null } : { covas, turn: 0, winner: null, ultimo: null };
}

export function lancesLegais(s: KalahState): number[] {
  if (s.winner !== null) return [];
  return casasDe(s.turn).filter((i) => s.covas[i]! > 0);
}

/** Semeia a partir da casa `i`. Lance que não vale devolve o mesmo `s`. */
export function jogar(s: KalahState, i: number): KalahState {
  if (!lancesLegais(s).includes(i)) return s;
  const covas = s.covas.slice();
  const eu = s.turn;
  const dele = DEPOSITO[eu === 0 ? 1 : 0];
  let mao = covas[i]!;
  covas[i] = 0;
  let pos = i;
  const semeadas: number[] = [];
  while (mao > 0) {
    pos = (pos + 1) % 14;
    if (pos === dele) continue;
    covas[pos]!++;
    semeadas.push(pos);
    mao--;
  }
  let captura: number | null = null;
  // a última caiu numa casa minha que estava vazia (agora tem só ela) e a da frente tem sementes
  if (casasDe(eu).includes(pos) && covas[pos] === 1 && (covas[frente(pos)]! > 0 || s.regra === 'frente-vazia')) {
    captura = frente(pos);
    covas[DEPOSITO[eu]]! += covas[frente(pos)]! + 1;
    covas[frente(pos)] = 0;
    covas[pos] = 0;
  }
  const jogaDeNovo = pos === DEPOSITO[eu];
  const next: KalahState = { ...(s.regra ? { regra: s.regra } : {}), covas, turn: jogaDeNovo ? eu : eu === 0 ? 1 : 0, winner: null, ultimo: { de: i, semeadas, captura, jogaDeNovo } };
  return verificarFim(next);
}

/** Se um lado ficou sem sementes, o outro recolhe as dele e o jogo acaba. */
function verificarFim(s: KalahState): KalahState {
  const vazio = (p: Jogador) => casasDe(p).every((i) => s.covas[i] === 0);
  if (!vazio(0) && !vazio(1)) return s;
  const covas = s.covas.slice();
  for (const p of [0, 1] as const) {
    for (const i of casasDe(p)) {
      covas[DEPOSITO[p]]! += covas[i]!;
      covas[i] = 0;
    }
  }
  const a = covas[6]!;
  const b = covas[13]!;
  return { ...s, covas, winner: a === b ? 'empate' : a > b ? 0 : 1 };
}
