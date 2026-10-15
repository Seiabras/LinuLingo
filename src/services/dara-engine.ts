/**
 * Motor do dara (derrah, “doki” em hauçá, “dili” entre os zarma do Níger). Regras do artigo “Dara
 * (game)” da Wikipédia em inglês (consultado em 15/10/2026):
 *   - tabuleiro de 5×6 casas (5 fileiras de 6); cada jogador tem 12 peças;
 *   - fase de colocar: cada um põe uma peça por vez numa casa vazia, até as 24 estarem no tabuleiro. As
 *     linhas feitas nessa fase não contam; no Níger, nem é permitido fazê-las, e é essa a regra daqui
 *     (também não vale fazer quatro ou mais em linha);
 *   - fase de mover: cada um anda com uma peça para uma casa vizinha vazia, na horizontal ou na
 *     vertical;
 *   - quem faz uma linha de EXATAMENTE três peças suas, na horizontal ou na vertical (não na diagonal),
 *     tira uma peça do adversário que não esteja numa linha. Quatro ou mais em linha não vale (o lance
 *     é proibido). Duas linhas no mesmo lance tiram só uma peça;
 *   - perde quem não consegue mais fazer linha (com menos de três peças).
 *   - Simplificações (ditas na ficha): se todas as peças do adversário estão em linha, pode-se tirar
 *     qualquer uma; quem fica sem lance perde; a mesma posição pela terceira vez, ou 200 lances na fase
 *     de mover, é empate.
 */

export type JogadorD = 'a' | 'b';
export type FaseD = 'colocar' | 'mover' | 'capturar';
export type LanceD = { tipo: 'colocar'; para: number } | { tipo: 'mover'; de: number; para: number } | { tipo: 'capturar'; alvo: number };
export interface DaraState {
  board: (JogadorD | null)[];
  turn: JogadorD;
  fase: FaseD;
  /** peças ainda na mão (fase de colocar) */
  mao: Record<JogadorD, number>;
  winner: JogadorD | 'empate' | null;
  ultimo: LanceD | null;
  /** a linha de três que acabou de ser feita (para mostrar) */
  linha: number[];
  /** lances na fase de mover */
  lancesMover: number;
  repeticoes: Record<string, number>;
}

export const LINHAS_D = 5;
export const COLUNAS_D = 6;
export const PECAS_D = 12;
export const LIMITE_D = 200;
export const ix = (r: number, c: number) => r * COLUNAS_D + c;
export const lx = (i: number) => Math.floor(i / COLUNAS_D);
export const cx = (i: number) => i % COLUNAS_D;
export const outroD = (j: JogadorD): JogadorD => (j === 'a' ? 'b' : 'a');
const chave = (s: { board: (JogadorD | null)[]; turn: JogadorD }) => s.board.map((p) => p ?? '.').join('') + s.turn;

export function createInitialState(): DaraState {
  return {
    board: Array(LINHAS_D * COLUNAS_D).fill(null),
    turn: 'a',
    fase: 'colocar',
    mao: { a: PECAS_D, b: PECAS_D },
    winner: null,
    ultimo: null,
    linha: [],
    lancesMover: 0,
    repeticoes: {},
  };
}

/** As peças seguidas da mesma cor que passam por `i` na direção (dr, dc), incluindo `i`. */
function seguidas(board: (JogadorD | null)[], i: number, dr: number, dc: number): number[] {
  const j = board[i];
  if (!j) return [];
  const out = [i];
  for (const s of [1, -1]) {
    let r = lx(i) + dr * s;
    let c = cx(i) + dc * s;
    while (r >= 0 && r < LINHAS_D && c >= 0 && c < COLUNAS_D && board[ix(r, c)] === j) {
      out.push(ix(r, c));
      r += dr * s;
      c += dc * s;
    }
  }
  return out.sort((a, b) => a - b);
}

/** O maior número de peças seguidas que passa por `i` (na horizontal ou na vertical). */
const maiorSeguida = (board: (JogadorD | null)[], i: number) => Math.max(seguidas(board, i, 0, 1).length, seguidas(board, i, 1, 0).length);

/** As linhas de exatamente três que passam por `i`. */
export function linhasPor(board: (JogadorD | null)[], i: number): number[][] {
  return [seguidas(board, i, 0, 1), seguidas(board, i, 1, 0)].filter((l) => l.length === 3);
}

/** Se a peça em `i` faz parte de alguma linha de três. */
export const emLinha = (board: (JogadorD | null)[], i: number) => linhasPor(board, i).length > 0;

/** As peças do adversário que podem ser tiradas (as que não estão em linha; se todas estão, qualquer uma). */
export function capturaveis(s: DaraState): number[] {
  const alvo = outroD(s.turn);
  const todas = s.board.flatMap((p, i) => (p === alvo ? [i] : []));
  const livres = todas.filter((i) => !emLinha(s.board, i));
  return livres.length > 0 ? livres : todas;
}

export function lancesLegais(s: DaraState): LanceD[] {
  if (s.winner !== null) return [];
  const out: LanceD[] = [];
  if (s.fase === 'capturar') return capturaveis(s).map((alvo) => ({ tipo: 'capturar', alvo }));
  if (s.fase === 'colocar') {
    for (let i = 0; i < s.board.length; i++) {
      if (s.board[i] !== null) continue;
      const b = s.board.slice();
      b[i] = s.turn;
      // na colocação, não vale fazer linha (nem de três, nem maior)
      if (maiorSeguida(b, i) < 3) out.push({ tipo: 'colocar', para: i });
    }
    return out;
  }
  for (let de = 0; de < s.board.length; de++) {
    if (s.board[de] !== s.turn) continue;
    for (const [dr, dc] of [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ] as const) {
      const r = lx(de) + dr;
      const c = cx(de) + dc;
      if (r < 0 || r >= LINHAS_D || c < 0 || c >= COLUNAS_D || s.board[ix(r, c)] !== null) continue;
      const b = s.board.slice();
      b[ix(r, c)] = s.turn;
      b[de] = null;
      // quatro ou mais em linha não vale
      if (maiorSeguida(b, ix(r, c)) <= 3) out.push({ tipo: 'mover', de, para: ix(r, c) });
    }
  }
  return out;
}

/** Quantas peças o jogador tem (no tabuleiro e na mão). */
export const pecasDe = (s: DaraState, j: JogadorD) => s.board.filter((p) => p === j).length + s.mao[j];

/** Passa a vez, vendo se o próximo ainda pode jogar e se a partida empatou. */
function passar(s: DaraState): DaraState {
  const turn = outroD(s.turn);
  const fase: FaseD = s.mao.a + s.mao.b > 0 ? 'colocar' : 'mover';
  let next: DaraState = { ...s, turn, fase };
  if (fase === 'mover') {
    if (pecasDe(next, turn) < 3) return { ...next, winner: s.turn };
    const k = chave(next);
    const repeticoes = { ...s.repeticoes, [k]: (s.repeticoes[k] ?? 0) + 1 };
    next = { ...next, repeticoes };
    if (repeticoes[k]! >= 3 || next.lancesMover >= LIMITE_D) return { ...next, winner: 'empate' };
  }
  // quem não tem lance perde (na colocação sempre há casa, a não ser em caso raro de bloqueio)
  if (lancesLegais(next).length === 0) return { ...next, winner: s.turn };
  return next;
}

/** Faz o lance. Lance que não vale devolve o mesmo `s`. */
export function jogar(s: DaraState, l: LanceD): DaraState {
  const valido = lancesLegais(s).some((x) => JSON.stringify(x) === JSON.stringify(l));
  if (!valido) return s;
  const board = s.board.slice();
  if (l.tipo === 'capturar') {
    board[l.alvo] = null;
    return passar({ ...s, board, ultimo: l, linha: [] });
  }
  if (l.tipo === 'colocar') {
    board[l.para] = s.turn;
    const mao = { ...s.mao, [s.turn]: s.mao[s.turn] - 1 };
    return passar({ ...s, board, mao, ultimo: l, linha: [] });
  }
  board[l.para] = s.turn;
  board[l.de] = null;
  const linhas = linhasPor(board, l.para);
  const next: DaraState = { ...s, board, ultimo: l, linha: linhas[0] ?? [], lancesMover: s.lancesMover + 1 };
  // fez linha de três: tira uma peça do adversário (a vez continua, na fase de capturar)
  if (linhas.length > 0) return { ...next, fase: 'capturar' };
  return passar(next);
}
