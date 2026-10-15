/**
 * Motor do Quantik (Nouri Khalifa, Gigamic, 2019). Regras da folha oficial da Gigamic (“QUANTIK
 * 06-2019”, “® & © 2019 GIGAMIC from a concept of Nouri Khalifa”, consultada em 14/10/2026):
 *
 *   - tabuleiro de 4×4 dividido em 4 regiões (quadrados de 4 casas); cada jogador tem 8 peças da
 *     sua cor: 2 esferas, 2 cilindros, 2 cubos e 2 cones;
 *   - o primeiro jogador é sorteado; na vez, coloca uma das suas peças numa casa vazia;
 *   - é proibido colocar uma forma numa linha, coluna ou região onde o ADVERSÁRIO já tem uma peça
 *     dessa forma; as suas próprias peças não proíbem nada (mas se as suas permitem e as dele
 *     proíbem, é proibido);
 *   - ganha na hora quem coloca a quarta forma diferente numa linha, coluna ou região, não importa
 *     de quem são as outras peças;
 *   - quem não pode colocar nenhuma peça na sua vez perde na hora.
 */

export const FORMAS = ['esfera', 'cilindro', 'cubo', 'cone'] as const;
export type Forma = 0 | 1 | 2 | 3;
export type JogadorK = 0 | 1;

/** Uma peça no tabuleiro: o jogador e a forma, num número (jogador × 4 + forma). */
export const peca = (j: JogadorK, f: Forma) => j * 4 + f;
export const formaDe = (v: number) => (v & 3) as Forma;
export const donoDe = (v: number) => (v >> 2) as JogadorK;

export interface QuantikState {
  board: (number | null)[];
  /** quantas peças de cada forma cada jogador ainda tem na mão */
  reserva: [number[], number[]];
  turn: JogadorK;
  winner: JogadorK | null;
  /** como acabou: a quarta forma diferente numa zona, ou o adversário ficou sem lance */
  motivo: 'formas' | 'sem-lance' | null;
  /** as casas da zona vencedora (linha, coluna ou região) */
  linha: number[];
  ultimo: number | null;
}

export interface LanceK {
  casa: number;
  forma: Forma;
}

/** As 12 zonas: 4 linhas, 4 colunas e 4 regiões (os quadrantes 2×2). */
export const ZONAS: { tipo: 'linha' | 'coluna' | 'região'; casas: number[] }[] = [];
for (let r = 0; r < 4; r++) ZONAS.push({ tipo: 'linha', casas: [0, 1, 2, 3].map((c) => r * 4 + c) });
for (let c = 0; c < 4; c++) ZONAS.push({ tipo: 'coluna', casas: [0, 1, 2, 3].map((r) => r * 4 + c) });
for (const [r0, c0] of [
  [0, 0],
  [0, 2],
  [2, 0],
  [2, 2],
])
  ZONAS.push({ tipo: 'região', casas: [r0 * 4 + c0, r0 * 4 + c0 + 1, (r0 + 1) * 4 + c0, (r0 + 1) * 4 + c0 + 1] });

/** As 3 zonas de cada casa (a linha, a coluna e a região). */
export const ZONAS_DA_CASA: number[][] = Array.from({ length: 16 }, (_, i) => ZONAS.flatMap((z, k) => (z.casas.includes(i) ? [k] : [])));

export const regiaoDa = (i: number) => ((i >> 3) << 1) | ((i & 3) >> 1);

export function createInitialState(comeca: JogadorK = 0): QuantikState {
  return { board: Array(16).fill(null), reserva: [[2, 2, 2, 2], [2, 2, 2, 2]], turn: comeca, winner: null, motivo: null, linha: [], ultimo: null };
}

export const outro = (j: JogadorK): JogadorK => (j === 0 ? 1 : 0);

/** Se o jogador `j` pode colocar a forma `f` na casa `i` (sem olhar a reserva). */
export function casaPermite(board: (number | null)[], i: number, f: Forma, j: JogadorK): boolean {
  if (board[i] !== null) return false;
  const proibida = peca(outro(j), f);
  for (const z of ZONAS_DA_CASA[i]!) for (const k of ZONAS[z]!.casas) if (board[k] === proibida) return false;
  return true;
}

export function podeJogar(s: QuantikState, i: number, f: Forma): boolean {
  return s.winner === null && s.reserva[s.turn][f]! > 0 && casaPermite(s.board, i, f, s.turn);
}

export function lancesLegais(s: QuantikState): LanceK[] {
  if (s.winner !== null) return [];
  const r: LanceK[] = [];
  for (let f = 0 as Forma; f < 4; f = (f + 1) as Forma) {
    if (s.reserva[s.turn][f]! === 0) continue;
    for (let i = 0; i < 16; i++) if (casaPermite(s.board, i, f, s.turn)) r.push({ casa: i, forma: f });
  }
  return r;
}

/** A zona que a casa `i` completa com as 4 formas diferentes, ou null. */
export function zonaCompleta(board: (number | null)[], i: number): number | null {
  for (const z of ZONAS_DA_CASA[i]!) {
    let formas = 0;
    for (const k of ZONAS[z]!.casas) {
      const v = board[k];
      if (v === null) {
        formas = -1;
        break;
      }
      formas |= 1 << formaDe(v!);
    }
    if (formas === 15) return z;
  }
  return null;
}

/** Coloca a forma `f` do jogador da vez na casa `i`. Devolve o mesmo estado se o lance não vale. */
export function jogar(s: QuantikState, i: number, f: Forma): QuantikState {
  if (!podeJogar(s, i, f)) return s;
  const board = s.board.slice();
  board[i] = peca(s.turn, f);
  const reserva: [number[], number[]] = [s.reserva[0].slice(), s.reserva[1].slice()];
  reserva[s.turn][f]!--;
  const base: QuantikState = { ...s, board, reserva, ultimo: i };
  const z = zonaCompleta(board, i);
  if (z !== null) return { ...base, winner: s.turn, motivo: 'formas', linha: ZONAS[z]!.casas };
  const seguinte: QuantikState = { ...base, turn: outro(s.turn) };
  // quem não tem lance na vez perde na hora
  if (lancesLegais(seguinte).length === 0) return { ...seguinte, winner: s.turn, motivo: 'sem-lance' };
  return seguinte;
}
