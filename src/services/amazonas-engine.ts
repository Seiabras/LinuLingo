/**
 * Motor do Jogo das Amazonas (El Juego de las Amazonas), de Walter Zamkauskas (Argentina, 1988). Regras
 * do artigo “Game of the Amazons” da Wikipédia em inglês (consultado em 15/10/2026), e a posição
 * inicial e o perft conferidos com a variante amazons do Fairy-Stockfish:
 *   - tabuleiro 10×10; cada jogador tem 4 amazonas. As brancas começam em d1, g1, a4 e j4; as pretas
 *     em d10, g10, a7 e j7;
 *   - na vez, o jogador anda com uma amazona como a dama do xadrez (quantas casas quiser, reto ou na
 *     diagonal, sem pular nada) e, da casa onde ela parou, atira uma flecha do mesmo jeito. A casa da
 *     flecha fica queimada para sempre: ninguém passa nem para nela;
 *   - não há captura. Perde quem não consegue mais jogar (o último a jogar vence); não há empate.
 *
 * O lance tem duas partes, e o estado guarda a do meio: depois de andar, `flecha` é a casa da amazona
 * que vai atirar. Coordenadas: linha 0 é a 10ª fileira (em cima), linha 9 a 1ª; colunas a–j.
 */

export type CorA = 'w' | 'b';
/** 0 vazia, 1 amazona branca, 2 amazona preta, 3 flecha */
export type CasaA = 0 | 1 | 2 | 3;
export interface LanceA {
  de: number;
  para: number;
  flecha: number;
}
export interface AmazonasState {
  board: CasaA[];
  turn: CorA;
  /** a amazona que acabou de andar e ainda vai atirar (ou null, no começo da vez) */
  atirando: number | null;
  /** de onde ela veio (para desfazer e mostrar) */
  veioDe: number | null;
  winner: CorA | null;
  ultimo: LanceA | null;
  lances: number;
}

export const N_A = 10;
export const ix = (r: number, c: number) => r * N_A + c;
export const lx = (i: number) => Math.floor(i / N_A);
export const cx = (i: number) => i % N_A;
export const outraA = (c: CorA): CorA => (c === 'w' ? 'b' : 'w');
export const pecaDe = (c: CorA): CasaA => (c === 'w' ? 1 : 2);
const DIRS: [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];

export function createInitialState(): AmazonasState {
  const board: CasaA[] = Array(N_A * N_A).fill(0);
  for (const [r, c] of [
    [9, 3],
    [9, 6],
    [6, 0],
    [6, 9],
  ])
    board[ix(r, c)] = 1;
  for (const [r, c] of [
    [0, 3],
    [0, 6],
    [3, 0],
    [3, 9],
  ])
    board[ix(r, c)] = 2;
  return { board, turn: 'w', atirando: null, veioDe: null, winner: null, ultimo: null, lances: 0 };
}

/** As casas que se alcançam de `i` andando como a dama, pelas casas vazias. */
export function alcance(board: CasaA[], i: number): number[] {
  const out: number[] = [];
  const r0 = lx(i);
  const c0 = cx(i);
  for (const [dr, dc] of DIRS) {
    let r = r0 + dr;
    let c = c0 + dc;
    while (r >= 0 && r < N_A && c >= 0 && c < N_A && board[ix(r, c)] === 0) {
      out.push(ix(r, c));
      r += dr;
      c += dc;
    }
  }
  return out;
}

/** Se alguma amazona da cor ainda pode andar (tem uma casa vazia ao lado). */
export function podeJogar(board: CasaA[], cor: CorA): boolean {
  const p = pecaDe(cor);
  for (let i = 0; i < board.length; i++) {
    if (board[i] !== p) continue;
    const r0 = lx(i);
    const c0 = cx(i);
    for (const [dr, dc] of DIRS) {
      const r = r0 + dr;
      const c = c0 + dc;
      if (r >= 0 && r < N_A && c >= 0 && c < N_A && board[ix(r, c)] === 0) return true;
    }
  }
  return false;
}

/** Primeira parte da vez: a amazona em `de` anda até `para`. */
export function andar(s: AmazonasState, de: number, para: number): AmazonasState {
  if (s.winner !== null || s.atirando !== null || s.board[de] !== pecaDe(s.turn) || !alcance(s.board, de).includes(para)) return s;
  const board = s.board.slice();
  board[para] = board[de]!;
  board[de] = 0;
  return { ...s, board, atirando: para, veioDe: de };
}

/** Segunda parte: a amazona que andou atira a flecha em `alvo`; passa a vez e vê se o outro ainda joga. */
export function atirar(s: AmazonasState, alvo: number): AmazonasState {
  if (s.atirando === null || !alcance(s.board, s.atirando).includes(alvo)) return s;
  const board = s.board.slice();
  board[alvo] = 3;
  const turn = outraA(s.turn);
  const ultimo = { de: s.veioDe!, para: s.atirando, flecha: alvo };
  return { board, turn, atirando: null, veioDe: null, winner: podeJogar(board, turn) ? null : s.turn, ultimo, lances: s.lances + 1 };
}

/** O lance inteiro de uma vez (o Linu usa). */
export function jogarLance(s: AmazonasState, l: LanceA): AmazonasState {
  const a = andar(s, l.de, l.para);
  return a === s ? s : atirar(a, l.flecha);
}

/** Todos os lances inteiros da vez (são muitos: 2176 na posição inicial). */
export function lancesLegais(s: AmazonasState): LanceA[] {
  if (s.winner !== null) return [];
  const out: LanceA[] = [];
  const p = pecaDe(s.turn);
  const b = s.board.slice();
  for (let de = 0; de < b.length; de++) {
    if (b[de] !== p) continue;
    for (const para of alcance(b, de)) {
      b[de] = 0;
      b[para] = p;
      for (const flecha of alcance(b, para)) out.push({ de, para, flecha });
      b[para] = 0;
      b[de] = p;
    }
  }
  return out;
}

/** Conta as posições a `prof` lances (para comparar com o perft do Fairy-Stockfish). */
export function perft(s: AmazonasState, prof: number): number {
  const ls = lancesLegais(s);
  if (prof === 1) return ls.length;
  let t = 0;
  for (const l of ls) t += perft(jogarLance(s, l), prof - 1);
  return t;
}
