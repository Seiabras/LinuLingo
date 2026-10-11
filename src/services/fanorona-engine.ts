/**
 * Motor do fanorona (Fanoron-Tsivy, o tabuleiro de 9×5 de Madagascar). Fontes, consultadas em
 * 11/10/2026: o artigo “Fanorona” da Wikipédia em inglês (regras e posição inicial, na figura
 * “Fanorona starting setup”) e as regras do boardspace.net (“White moves first”).
 *   - 22 peças de cada cor em todos os pontos, menos o do meio: as pretas nas duas fileiras de cima,
 *     as brancas nas duas de baixo e, na fileira do meio, da esquerda para a direita: preta, branca,
 *     preta, branca, vazio, preta, branca, preta, branca. As brancas começam.
 *   - Nos pontos “fortes” passam diagonais (aqui, os de linha + coluna par); nos “fracos”, a peça só
 *     anda na horizontal e na vertical.
 *   - O lance simples (paika) leva uma peça a um ponto vizinho vazio, ao longo de uma linha.
 *   - Captura por aproximação: a peça chega ao lado de uma peça adversária, na continuação da linha
 *     do movimento; por afastamento: sai do lado de uma adversária, indo na direção oposta a ela. Junto
 *     vão todas as adversárias seguidas naquela linha, até um ponto vazio ou uma peça própria.
 *   - Se dá para capturar, é obrigatório capturar. Não dá para capturar por aproximação e por
 *     afastamento no mesmo lance: escolhe-se um dos dois.
 *   - Depois de capturar, a mesma peça pode seguir capturando (é opcional), mas sem passar duas vezes
 *     pelo mesmo ponto e sem andar duas vezes seguidas na mesma direção.
 *   - Vence quem capturar todas as peças do outro. A partida pode empatar: aqui, quando a mesma
 *     posição se repete pela terceira vez (o boardspace cita o empate por repetição) ou quando os dois
 *     jogadores combinam o empate.
 */

export type Cor = 'w' | 'b';
export type TipoCaptura = 'aproximacao' | 'afastamento';

export const LINHAS = 5;
export const COLUNAS = 9;

export interface LanceFanorona {
  de: number;
  para: number;
  /** índice em DIRECOES */
  dir: number;
  tipo: TipoCaptura | null;
  capturadas: number[];
}

export interface FanoronaState {
  board: (Cor | null)[];
  turn: Cor;
  /** a sequência de capturas em andamento (a vez ainda é do mesmo jogador) */
  seq: { peca: number; visitados: number[]; ultimaDir: number } | null;
  winner: Cor | 'empate' | null;
  ultimo: LanceFanorona | null;
  /** quantas vezes cada posição (tabuleiro + vez) já apareceu no começo de uma vez */
  repeticoes: Record<string, number>;
}

export const DIRECOES: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

export const idx = (r: number, c: number) => r * COLUNAS + c;
export const lin = (i: number) => Math.floor(i / COLUNAS);
export const col = (i: number) => i % COLUNAS;
const dentro = (r: number, c: number) => r >= 0 && r < LINHAS && c >= 0 && c < COLUNAS;
/** Ponto forte: dele saem as diagonais. */
export const forte = (i: number) => (lin(i) + col(i)) % 2 === 0;
const outra = (c: Cor): Cor => (c === 'w' ? 'b' : 'w');
const chave = (board: (Cor | null)[], turn: Cor) => board.map((x) => x ?? '.').join('') + turn;

export function createInitialState(): FanoronaState {
  const board: (Cor | null)[] = [];
  const meio: (Cor | null)[] = ['b', 'w', 'b', 'w', null, 'b', 'w', 'b', 'w'];
  for (let r = 0; r < LINHAS; r++) for (let c = 0; c < COLUNAS; c++) board.push(r < 2 ? 'b' : r > 2 ? 'w' : meio[c]!);
  return { board, turn: 'w', seq: null, winner: null, ultimo: null, repeticoes: { [chave(board, 'w')]: 1 } };
}

/** As direções em que a peça do ponto `i` pode andar. */
export function direcoesDe(i: number): number[] {
  return forte(i) ? [0, 1, 2, 3, 4, 5, 6, 7] : [0, 1, 2, 3];
}

/** As adversárias seguidas a partir de (r, c), andando em (dr, dc). */
function linhaDeAdversarias(board: (Cor | null)[], r: number, c: number, dr: number, dc: number, adv: Cor): number[] {
  const out: number[] = [];
  while (dentro(r, c) && board[idx(r, c)] === adv) {
    out.push(idx(r, c));
    r += dr;
    c += dc;
  }
  return out;
}

/** Todos os lances da peça em `p` (capturas e lances simples), sem olhar as restrições da vez. */
function lancesDaPeca(board: (Cor | null)[], p: number): LanceFanorona[] {
  const eu = board[p];
  if (!eu) return [];
  const adv = outra(eu);
  const r = lin(p);
  const c = col(p);
  const out: LanceFanorona[] = [];
  for (const dir of direcoesDe(p)) {
    const [dr, dc] = DIRECOES[dir]!;
    if (!dentro(r + dr, c + dc)) continue;
    const q = idx(r + dr, c + dc);
    if (board[q] !== null) continue;
    const aprox = linhaDeAdversarias(board, r + 2 * dr, c + 2 * dc, dr, dc, adv);
    const afast = linhaDeAdversarias(board, r - dr, c - dc, -dr, -dc, adv);
    if (aprox.length) out.push({ de: p, para: q, dir, tipo: 'aproximacao', capturadas: aprox });
    if (afast.length) out.push({ de: p, para: q, dir, tipo: 'afastamento', capturadas: afast });
    if (!aprox.length && !afast.length) out.push({ de: p, para: q, dir, tipo: null, capturadas: [] });
  }
  return out;
}

/** Os lances que valem agora. No meio de uma sequência, só as capturas da mesma peça que respeitam as restrições. */
export function lancesLegais(s: FanoronaState): LanceFanorona[] {
  if (s.winner !== null) return [];
  if (s.seq) {
    const { peca, visitados, ultimaDir } = s.seq;
    return lancesDaPeca(s.board, peca).filter((l) => l.tipo !== null && l.dir !== ultimaDir && !visitados.includes(l.para));
  }
  const todos: LanceFanorona[] = [];
  s.board.forEach((x, i) => {
    if (x === s.turn) todos.push(...lancesDaPeca(s.board, i));
  });
  const capturas = todos.filter((l) => l.tipo !== null);
  return capturas.length ? capturas : todos;
}

/** Passa a vez: confere quem venceu e a repetição de posição. */
function fimDaVez(s: FanoronaState): FanoronaState {
  const turn = outra(s.turn);
  const base: FanoronaState = { ...s, turn, seq: null };
  if (!s.board.includes(turn)) return { ...base, winner: s.turn };
  if (lancesLegais(base).length === 0) return { ...base, winner: s.turn };
  const k = chave(s.board, turn);
  const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
  return { ...base, repeticoes, winner: repeticoes[k]! >= 3 ? 'empate' : null };
}

const mesmoLance = (a: LanceFanorona, b: LanceFanorona) => a.de === b.de && a.para === b.para && a.tipo === b.tipo;

/** Faz o lance. Lance que não vale devolve o mesmo `s`. */
export function jogar(s: FanoronaState, lance: Pick<LanceFanorona, 'de' | 'para' | 'tipo'>): FanoronaState {
  const l = lancesLegais(s).find((x) => mesmoLance(x, lance as LanceFanorona));
  if (!l) return s;
  const board = s.board.slice();
  board[l.para] = board[l.de]!;
  board[l.de] = null;
  for (const i of l.capturadas) board[i] = null;
  const depois: FanoronaState = { ...s, board, ultimo: l };
  if (l.tipo === null) return fimDaVez(depois);
  if (!board.includes(outra(s.turn))) return { ...depois, seq: null, winner: s.turn };
  // pode seguir capturando com a mesma peça?
  const seq = { peca: l.para, visitados: [...(s.seq?.visitados ?? [l.de]), l.para], ultimaDir: l.dir };
  const continua: FanoronaState = { ...depois, seq };
  return lancesLegais(continua).length ? continua : fimDaVez(depois);
}

/** Para a sequência de capturas no meio (continuar é opcional). */
export function encerrarVez(s: FanoronaState): FanoronaState {
  return s.seq && s.winner === null ? fimDaVez(s) : s;
}

/** Os dois jogadores combinam o empate. */
export function combinarEmpate(s: FanoronaState): FanoronaState {
  return s.winner === null ? { ...s, seq: null, winner: 'empate' } : s;
}

export const contar = (s: FanoronaState, c: Cor) => s.board.filter((x) => x === c).length;
