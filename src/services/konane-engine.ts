/**
 * Motor do kōnane, o jogo havaiano de saltar pedras. Puro e sem tela.
 *
 * Regras (Wikipédia em inglês, “Kōnane”, consultada em 15/10/2026):
 * - o tabuleiro (papamū) começa cheio, com pedras pretas e brancas alternadas, como num xadrez;
 * - as pretas começam tirando uma pedra preta do meio (dos 4 pontos centrais) ou de um canto;
 * - as brancas tiram uma pedra branca vizinha (em linha reta) do buraco aberto;
 * - depois, todo lance é uma captura: a pedra salta, em linha reta (nunca na diagonal), sobre uma
 *   pedra adversária vizinha e cai no ponto vazio logo depois. Pode seguir saltando, mas sempre na
 *   mesma direção, e pode parar quando quiser (no mínimo um salto);
 * - perde quem, na sua vez, não tem captura. Não existe empate.
 * Jogador 0 = pretas (basalto), jogador 1 = brancas (coral).
 */

export type JogadorK = 0 | 1;
export type FaseK = 'tirar-preta' | 'tirar-branca' | 'saltar';

export interface KonaneState {
  n: number;
  board: (JogadorK | null)[];
  turn: JogadorK;
  fase: FaseK;
  winner: JogadorK | null;
  /** o último lance: a casa tirada, ou o salto (de, para e as pedras capturadas) */
  ultimo: LanceKonane | null;
}

export type LanceKonane = { tipo: 'tirar'; casa: number } | { tipo: 'saltar'; de: number; para: number; capturadas: number[] };

export const TAMANHOS_KONANE = [6, 8, 10] as const;

/** A cor da pedra que começa em (linha, coluna): preta onde linha + coluna é par. */
export const corInicial = (r: number, c: number): JogadorK => ((r + c) % 2 === 0 ? 0 : 1);

export function createInitialState(n = 8): KonaneState {
  const board: (JogadorK | null)[] = Array.from({ length: n * n }, (_, i) => corInicial(Math.floor(i / n), i % n));
  return { n, board, turn: 0, fase: 'tirar-preta', winner: null, ultimo: null };
}

const DIRS = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
] as const;

/** As casas do meio (o quadrado 2×2 central) e os 4 cantos. */
export function casasDoComeco(n: number): number[] {
  const m = n / 2;
  return [(m - 1) * n + (m - 1), (m - 1) * n + m, m * n + (m - 1), m * n + m, 0, n - 1, (n - 1) * n, n * n - 1];
}

function saltos(s: KonaneState, quem: JogadorK): LanceKonane[] {
  const { n, board } = s;
  const r: LanceKonane[] = [];
  for (let i = 0; i < n * n; i++) {
    if (board[i] !== quem) continue;
    const y0 = Math.floor(i / n);
    const x0 = i % n;
    for (const [dy, dx] of DIRS) {
      const capturadas: number[] = [];
      let y = y0;
      let x = x0;
      for (;;) {
        const ym = y + dy;
        const xm = x + dx;
        const yd = y + 2 * dy;
        const xd = x + 2 * dx;
        if (yd < 0 || yd >= n || xd < 0 || xd >= n) break;
        const meio = ym * n + xm;
        const dest = yd * n + xd;
        if (board[meio] === null || board[meio] === quem || board[dest] !== null) break;
        capturadas.push(meio);
        r.push({ tipo: 'saltar', de: i, para: dest, capturadas: [...capturadas] });
        y = yd;
        x = xd;
      }
    }
  }
  return r;
}

/** Os lances de quem tem a vez. */
export function lancesLegais(s: KonaneState): LanceKonane[] {
  if (s.winner !== null) return [];
  if (s.fase === 'tirar-preta') return casasDoComeco(s.n).filter((c) => s.board[c] === 0).map((casa) => ({ tipo: 'tirar' as const, casa }));
  if (s.fase === 'tirar-branca') {
    const buraco = s.board.indexOf(null);
    const y = Math.floor(buraco / s.n);
    const x = buraco % s.n;
    return DIRS.map(([dy, dx]) => [y + dy, x + dx] as const)
      .filter(([yy, xx]) => yy >= 0 && yy < s.n && xx >= 0 && xx < s.n)
      .map(([yy, xx]) => ({ tipo: 'tirar' as const, casa: yy * s.n + xx }));
  }
  return saltos(s, s.turn);
}

const mesmo = (a: LanceKonane, b: LanceKonane) =>
  a.tipo === b.tipo && (a.tipo === 'tirar' ? a.casa === (b as typeof a).casa : a.de === (b as typeof a).de && a.para === (b as typeof a).para);

/** Faz o lance; se não for legal, devolve o mesmo estado. */
export function jogar(s: KonaneState, l: LanceKonane): KonaneState {
  const legal = lancesLegais(s).find((x) => mesmo(x, l));
  if (!legal) return s;
  const board = [...s.board];
  let fase: FaseK = 'saltar';
  if (legal.tipo === 'tirar') {
    board[legal.casa] = null;
    if (s.fase === 'tirar-preta') fase = 'tirar-branca';
  } else {
    board[legal.para] = board[legal.de]!;
    board[legal.de] = null;
    for (const c of legal.capturadas) board[c] = null;
  }
  const turn: JogadorK = s.turn === 0 ? 1 : 0;
  const next: KonaneState = { n: s.n, board, turn, fase, winner: null, ultimo: legal };
  if (fase === 'saltar' && saltos(next, turn).length === 0) next.winner = s.turn;
  return next;
}
