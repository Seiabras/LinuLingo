/**
 * Motor do Lasca, as “damas de colunas” de Emanuel Lasker (1911). Regras do artigo “Lasca” da Wikipédia
 * em inglês e da página do Lasca no MindSports (mindsports.nl, “609 lasca”), consultados em 15/10/2026:
 *   - tabuleiro 7×7, só as 25 casas escuras (as dos cantos são escuras); cada lado tem 11 soldados, nas
 *     três fileiras do seu lado. As brancas começam;
 *   - o soldado (ou a coluna com um soldado em cima) anda uma casa na diagonal para a frente; o oficial
 *     (ou a coluna com um oficial em cima) anda uma casa na diagonal para a frente ou para trás;
 *   - captura: pula-se uma coluna vizinha com uma peça do adversário em cima, caindo na casa vazia logo
 *     depois. A coluna pulada NÃO sai do tabuleiro: só a peça de cima dela é capturada, e vai para baixo
 *     da coluna que pulou, como prisioneira. O soldado só pula para a frente; o oficial, para os dois
 *     lados;
 *   - capturar é obrigatório, e quem começa a pular continua pulando enquanto der; entre capturas
 *     diferentes, a escolha é livre (não há a “lei da maioria” das damas brasileiras);
 *   - quem domina a coluna é a peça de cima: ela diz a cor e se a coluna anda como soldado ou oficial;
 *   - o soldado que chega à última fileira vira oficial, e o lance acaba ali (mesmo no meio de uma
 *     captura);
 *   - perde quem não tem lance (sem peças, ou todas presas). A mesma posição pela terceira vez é empate.
 *   - Se a mesma coluna pode ser pulada duas vezes no mesmo lance, as fontes divergem; aqui pode (como
 *     no aplicativo do MindSports).
 *
 * Coordenadas: linha 0 é a fileira das pretas (em cima), linha 6 a das brancas.
 */

export type CorL = 'w' | 'b';
export interface PecaL {
  cor: CorL;
  oficial: boolean;
}
/** uma coluna, de baixo para cima (a última é a de cima, que manda) */
export type ColunaL = PecaL[];
export interface LanceL {
  de: number;
  para: number;
  /** a casa da coluna pulada, se o lance é uma captura */
  salto?: number;
}
export interface LascaState {
  board: (ColunaL | null)[];
  turn: CorL;
  /** a coluna que está no meio de uma sequência de capturas (a vez continua com ela) */
  capturando: number | null;
  winner: CorL | 'empate' | null;
  ultimo: LanceL | null;
  repeticoes: Record<string, number>;
}

export const N_L = 7;
export const ix = (r: number, c: number) => r * N_L + c;
export const lx = (i: number) => Math.floor(i / N_L);
export const cx = (i: number) => i % N_L;
export const escura = (r: number, c: number) => (r + c) % 2 === 0;
const dentro = (r: number, c: number) => r >= 0 && r < N_L && c >= 0 && c < N_L;
export const outraL = (c: CorL): CorL => (c === 'w' ? 'b' : 'w');
const frente = (c: CorL) => (c === 'w' ? -1 : 1);
const ultimaFileira = (c: CorL) => (c === 'w' ? 0 : N_L - 1);
export const topo = (col: ColunaL | null | undefined) => (col && col.length ? col[col.length - 1]! : null);

const chave = (s: { board: (ColunaL | null)[]; turn: CorL }) =>
  s.board.map((col) => (col ? col.map((p) => (p.cor === 'w' ? (p.oficial ? 'W' : 'w') : p.oficial ? 'B' : 'b')).join('') : '.')).join('/') + s.turn;

export function createInitialState(): LascaState {
  const board: (ColunaL | null)[] = Array(N_L * N_L).fill(null);
  for (let r = 0; r < N_L; r++)
    for (let c = 0; c < N_L; c++) {
      if (!escura(r, c)) continue;
      if (r <= 2) board[ix(r, c)] = [{ cor: 'b', oficial: false }];
      else if (r >= 4) board[ix(r, c)] = [{ cor: 'w', oficial: false }];
    }
  const s: LascaState = { board, turn: 'w', capturando: null, winner: null, ultimo: null, repeticoes: {} };
  return { ...s, repeticoes: { [chave(s)]: 1 } };
}

/** As direções em que a coluna em `i` anda (pela peça de cima). */
function direcoes(top: PecaL): [number, number][] {
  const f = frente(top.cor);
  return top.oficial
    ? [
        [f, -1],
        [f, 1],
        [-f, -1],
        [-f, 1],
      ]
    : [
        [f, -1],
        [f, 1],
      ];
}

/** Os saltos (capturas de um pulo) da coluna em `i`. */
export function saltosDe(board: (ColunaL | null)[], i: number): LanceL[] {
  const t = topo(board[i]);
  if (!t) return [];
  const out: LanceL[] = [];
  const r = lx(i);
  const c = cx(i);
  for (const [dr, dc] of direcoes(t)) {
    const rm = r + dr;
    const cm = c + dc;
    const rd = r + 2 * dr;
    const cd = c + 2 * dc;
    if (!dentro(rd, cd) || board[ix(rd, cd)] !== null) continue;
    const meio = topo(board[ix(rm, cm)]);
    if (meio && meio.cor !== t.cor) out.push({ de: i, para: ix(rd, cd), salto: ix(rm, cm) });
  }
  return out;
}

/** Os passos simples (sem captura) da coluna em `i`. */
function passosDe(board: (ColunaL | null)[], i: number): LanceL[] {
  const t = topo(board[i]);
  if (!t) return [];
  const out: LanceL[] = [];
  for (const [dr, dc] of direcoes(t)) {
    const r = lx(i) + dr;
    const c = cx(i) + dc;
    if (dentro(r, c) && board[ix(r, c)] === null) out.push({ de: i, para: ix(r, c) });
  }
  return out;
}

export function lancesLegais(s: LascaState): LanceL[] {
  if (s.winner !== null) return [];
  if (s.capturando !== null) return saltosDe(s.board, s.capturando);
  const saltos: LanceL[] = [];
  const passos: LanceL[] = [];
  for (let i = 0; i < s.board.length; i++) {
    if (topo(s.board[i])?.cor !== s.turn) continue;
    saltos.push(...saltosDe(s.board, i));
    passos.push(...passosDe(s.board, i));
  }
  // capturar é obrigatório
  return saltos.length > 0 ? saltos : passos;
}

/** Passa a vez: o outro perde se não tem lance; a terceira repetição empata. */
function passar(s: LascaState): LascaState {
  const turn = outraL(s.turn);
  const next: LascaState = { ...s, turn, capturando: null };
  if (lancesLegais(next).length === 0) return { ...next, winner: s.turn };
  const k = chave(next);
  const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
  if (repeticoes[k]! >= 3) return { ...next, repeticoes, winner: 'empate' };
  return { ...next, repeticoes };
}

/** Faz um lance (um passo, ou um pulo de uma sequência de capturas). Lance que não vale devolve `s`. */
export function jogar(s: LascaState, l: LanceL): LascaState {
  const valido = lancesLegais(s).find((x) => x.de === l.de && x.para === l.para);
  if (!valido) return s;
  const board = s.board.slice();
  let coluna = board[l.de]!.slice();
  board[l.de] = null;
  if (valido.salto !== undefined) {
    // a peça de cima da coluna pulada vai para baixo da coluna que pulou
    const pulada = board[valido.salto]!.slice();
    const presa = pulada.pop()!;
    board[valido.salto] = pulada.length ? pulada : null;
    coluna = [presa, ...coluna];
  }
  // o soldado que chega à última fileira vira oficial, e o lance acaba
  const t = coluna[coluna.length - 1]!;
  const coroou = !t.oficial && lx(l.para) === ultimaFileira(t.cor);
  if (coroou) coluna = [...coluna.slice(0, -1), { cor: t.cor, oficial: true }];
  board[l.para] = coluna;
  const next: LascaState = { ...s, board, ultimo: valido, capturando: null };
  if (valido.salto !== undefined && !coroou && saltosDe(board, l.para).length > 0) return { ...next, capturando: l.para };
  return passar(next);
}

/** Quantas peças de cada cor há no tabuleiro (dentro das colunas também). */
export function contarL(board: (ColunaL | null)[], cor: CorL): number {
  let n = 0;
  for (const col of board) if (col) for (const p of col) if (p.cor === cor) n++;
  return n;
}
