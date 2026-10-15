/**
 * Motor do Hex (Piet Hein, 1942; John Nash, 1948). Regras como na Wikipédia em inglês, “Hex (board
 * game)”, consultada em 15/10/2026:
 *
 *   - tabuleiro em losango de hexágonos, 11×11 no padrão (13×13 e 19×19 também são comuns; aqui há
 *     9×9, 11×11 e 13×13);
 *   - cada jogador tem dois lados opostos do losango; na vez, põe uma pedra da sua cor numa casa
 *     vazia; as pedras nunca saem;
 *   - vence quem ligar os seus dois lados com uma corrente de pedras vizinhas; o jogo não tem empate
 *     (quando o tabuleiro enche, exatamente um dos dois ligou os seus lados);
 *   - regra da troca (swap, ou “pie rule”), opcional: depois do primeiro lance, o segundo jogador pode
 *     ficar com ele. Aqui a troca é feita do jeito que não muda as cores de ninguém: a primeira pedra
 *     vira da cor do segundo jogador, espelhada na diagonal do losango (o que dá exatamente a mesma
 *     posição, vista do outro lado), e a vez volta para o primeiro.
 *
 * Casas: índice r × n + c. O jogador 0 (vermelho) liga a linha de cima (r = 0) à de baixo (r = n − 1);
 * o jogador 1 (azul) liga a coluna da esquerda (c = 0) à da direita (c = n − 1). As 6 vizinhas de (r, c)
 * são (r−1, c), (r−1, c+1), (r, c−1), (r, c+1), (r+1, c−1) e (r+1, c).
 */

export type JogadorH = 0 | 1;
export type CasaH = JogadorH | null;

export interface HexState {
  n: number;
  board: CasaH[];
  turn: JogadorH;
  winner: JogadorH | null;
  /** a corrente vencedora, de um lado ao outro */
  caminho: number[];
  ultimo: number | null;
  lances: number;
  /** a regra da troca vale nesta partida */
  troca: boolean;
  /** houve troca */
  trocou: boolean;
}

const DIRS = [
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
] as const;

export function createInitialState(n = 11, troca = false, primeiro: JogadorH = 0): HexState {
  return { n, board: Array(n * n).fill(null), turn: primeiro, winner: null, caminho: [], ultimo: null, lances: 0, troca, trocou: false };
}

/** As vizinhas de uma casa, num tabuleiro n×n. */
export function vizinhas(n: number, i: number): number[] {
  const r = Math.floor(i / n);
  const c = i % n;
  const v: number[] = [];
  for (const [dr, dc] of DIRS) {
    const rr = r + dr;
    const cc = c + dc;
    if (rr >= 0 && rr < n && cc >= 0 && cc < n) v.push(rr * n + cc);
  }
  return v;
}

const noInicio = (n: number, j: JogadorH, i: number) => (j === 0 ? i < n : i % n === 0);
const noFim = (n: number, j: JogadorH, i: number) => (j === 0 ? i >= n * (n - 1) : i % n === n - 1);

/** A corrente que liga os dois lados de `j` (a mais curta), ou [] se ainda não ligou. */
export function correnteVencedora(n: number, board: CasaH[], j: JogadorH): number[] {
  const pai = new Map<number, number>();
  const fila: number[] = [];
  for (let i = 0; i < n * n; i++)
    if (board[i] === j && noInicio(n, j, i)) {
      pai.set(i, -1);
      fila.push(i);
    }
  for (let k = 0; k < fila.length; k++) {
    const i = fila[k]!;
    if (noFim(n, j, i)) {
      const r: number[] = [];
      for (let x = i; x !== -1; x = pai.get(x)!) r.push(x);
      return r.reverse();
    }
    for (const v of vizinhas(n, i))
      if (board[v] === j && !pai.has(v)) {
        pai.set(v, i);
        fila.push(v);
      }
  }
  return [];
}

export function podeJogar(s: HexState, i: number): boolean {
  return s.winner === null && i >= 0 && i < s.n * s.n && s.board[i] === null;
}

/** Põe a pedra de quem tem a vez. Lance ilegal devolve o mesmo estado. */
export function jogar(s: HexState, i: number): HexState {
  if (!podeJogar(s, i)) return s;
  const board = s.board.slice();
  board[i] = s.turn;
  const caminho = correnteVencedora(s.n, board, s.turn);
  return {
    ...s,
    board,
    turn: s.turn === 0 ? 1 : 0,
    winner: caminho.length ? s.turn : null,
    caminho,
    ultimo: i,
    lances: s.lances + 1,
  };
}

/** Dá para trocar agora? Só no segundo lance da partida, com a regra ligada. */
export const podeTrocar = (s: HexState) => s.troca && s.lances === 1 && !s.trocou && s.winner === null;

/** A troca: a primeira pedra muda de dono, espelhada na diagonal; a vez volta para quem começou. */
export function trocar(s: HexState): HexState {
  if (!podeTrocar(s) || s.ultimo === null) return s;
  const { n } = s;
  const r = Math.floor(s.ultimo / n);
  const c = s.ultimo % n;
  const espelho = c * n + r;
  const board: CasaH[] = Array(n * n).fill(null);
  board[espelho] = s.turn;
  return { ...s, board, turn: s.turn === 0 ? 1 : 0, ultimo: espelho, lances: 2, trocou: true };
}

export function lancesLegais(s: HexState): number[] {
  if (s.winner !== null) return [];
  const r: number[] = [];
  for (let i = 0; i < s.board.length; i++) if (s.board[i] === null) r.push(i);
  return r;
}

/**
 * Quantas casas vazias, no mínimo, `j` ainda precisa preencher para ligar os seus lados (as pedras
 * dele custam 0, as vazias 1, as do adversário bloqueiam). Infinity se não dá mais.
 */
export function distancia(n: number, board: CasaH[], j: JogadorH): number {
  const dist = new Array<number>(n * n).fill(Infinity);
  const deque: number[] = [];
  for (let i = 0; i < n * n; i++)
    if (noInicio(n, j, i) && board[i] !== (j === 0 ? 1 : 0)) {
      dist[i] = board[i] === j ? 0 : 1;
      if (dist[i] === 0) deque.unshift(i);
      else deque.push(i);
    }
  // 0-1 BFS
  while (deque.length) {
    const i = deque.shift()!;
    if (noFim(n, j, i)) return dist[i]!;
    for (const v of vizinhas(n, i)) {
      if (board[v] === (j === 0 ? 1 : 0)) continue;
      const d = dist[i]! + (board[v] === j ? 0 : 1);
      if (d < dist[v]!) {
        dist[v] = d;
        if (board[v] === j) deque.unshift(v);
        else deque.push(v);
      }
    }
  }
  return Infinity;
}
