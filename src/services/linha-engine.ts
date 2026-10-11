/**
 * Motor dos jogos de “k em linha” num tabuleiro n×n, em que cada um põe uma marca por vez e ninguém
 * tira nem move nada (o “m,n,k-game” do artigo “Tic-tac-toe” da Wikipédia em inglês, consultado em
 * 11/10/2026). Serve para dois jogos do app:
 *   - Jogo da velha: 3×3, três em linha (linha, coluna ou diagonal); o X começa (o artigo diz que
 *     não há regra universal sobre quem começa e adota essa convenção). Tabuleiro cheio sem linha é
 *     empate, a “velha”.
 *   - Gomoku (cinco em linha): 15×15, as pretas começam, vence quem fizer uma linha sem
 *     interrupção de cinco ou mais (o “estilo livre” do artigo “Gomoku”: sem a regra de linha longa).
 * Aqui a marca 'x' é sempre de quem começa (no gomoku, as pretas) e 'o' do outro.
 */

export type Marca = 'x' | 'o';

export interface LinhaState {
  n: number;
  /** quantas em linha para vencer */
  k: number;
  /** casas linha a linha (índice = linha * n + coluna) */
  board: (Marca | null)[];
  turn: Marca;
  winner: Marca | 'empate' | null;
  /** as casas da linha vencedora (para destacar) */
  linha: number[];
  ultimo: number | null;
}

const outra = (m: Marca): Marca => (m === 'x' ? 'o' : 'x');
export const DIRECOES: [number, number][] = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1],
];

export function createInitialState(n: number, k: number): LinhaState {
  return { n, k, board: Array(n * n).fill(null), turn: 'x', winner: null, linha: [], ultimo: null };
}

/** A linha de `k` ou mais que passa por `i`, com a marca de `i` (as casas dela), ou []. */
export function linhaPor(board: (Marca | null)[], n: number, k: number, i: number): number[] {
  const m = board[i];
  if (!m) return [];
  const r = Math.floor(i / n);
  const c = i % n;
  for (const [dr, dc] of DIRECOES) {
    const casas = [i];
    for (const s of [1, -1]) {
      let rr = r + dr * s;
      let cc = c + dc * s;
      while (rr >= 0 && rr < n && cc >= 0 && cc < n && board[rr * n + cc] === m) {
        casas.push(rr * n + cc);
        rr += dr * s;
        cc += dc * s;
      }
    }
    if (casas.length >= k) return casas.sort((a, b) => a - b);
  }
  return [];
}

export function lancesLegais(s: LinhaState): number[] {
  if (s.winner !== null) return [];
  const out: number[] = [];
  s.board.forEach((m, i) => m === null && out.push(i));
  return out;
}

/** Põe a marca de quem tem a vez em `i`. Lance que não vale devolve o mesmo `s`. */
export function jogar(s: LinhaState, i: number): LinhaState {
  if (s.winner !== null || i < 0 || i >= s.board.length || s.board[i] !== null) return s;
  const board = s.board.slice();
  board[i] = s.turn;
  const linha = linhaPor(board, s.n, s.k, i);
  const winner = linha.length > 0 ? s.turn : board.every((m) => m !== null) ? 'empate' : null;
  return { ...s, board, turn: outra(s.turn), winner, linha, ultimo: i };
}
