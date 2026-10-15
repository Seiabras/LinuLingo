/**
 * Motor do Pylos (David G. Royffe, Gigamic, 1994). Regras da folha oficial da Gigamic (“PYLOS
 * 03-2017”, “© 1994 GIGAMIC from a concept of David G. Royffe”, export.gigamic.com, consultada em
 * 15/10/2026):
 *
 *   - tabuleiro em pirâmide com 16 covas (4×4); 15 bolas claras e 15 escuras na reserva; a clara começa;
 *   - na vez, o jogador põe uma bola da reserva numa cova vazia ou sobre um quadrado de 4 bolas
 *     (de qualquer cor), OU sobe uma bola sua que já está no tabuleiro para um quadrado mais alto
 *     (só se ela subir pelo menos um nível e não estiver segurando outra bola): assim ele poupa uma
 *     bola da reserva;
 *   - quem forma um quadrado de 4 bolas da SUA cor tira na hora uma ou duas bolas suas do tabuleiro
 *     (qualquer uma que não segure outra, inclusive a que acabou de pôr) e as devolve à reserva;
 *     formar vários quadrados de uma vez continua dando só uma ou duas;
 *   - ganha quem põe a bola do topo; quem fica sem bolas na reserva perde;
 *   - versão para crianças: sem a regra do quadrado da sua cor;
 *   - versão para jogadores experientes: também vale a linha (4 bolas da sua cor em linha no 1º
 *     nível, 3 no 2º; diagonal não vale), e nunca mais de 2 bolas por lance.
 *
 * As 30 posições: nível 0 (4×4) nos índices 0–15, nível 1 (3×3) em 16–24, nível 2 (2×2) em
 * 25–28 e o topo em 29.
 */

export type Cor = 0 | 1; // 0 = clara, 1 = escura
export type RegraPylos = 'criancas' | 'normal' | 'experientes';

export interface Pos {
  nivel: number;
  r: number;
  c: number;
}

export const INICIO_NIVEL = [0, 16, 25, 29];
export const N_POS = 30;
export const BOLAS = 15;

export const lado = (nivel: number) => 4 - nivel;
export const indice = (nivel: number, r: number, c: number) => INICIO_NIVEL[nivel]! + r * lado(nivel) + c;
export const POSICOES: Pos[] = [];
for (let nivel = 0; nivel < 4; nivel++) for (let r = 0; r < lado(nivel); r++) for (let c = 0; c < lado(nivel); c++) POSICOES.push({ nivel, r, c });

/** As 4 posições de baixo que seguram a posição `p` (vazio no nível 0). */
export const APOIOS: number[][] = POSICOES.map(({ nivel, r, c }) =>
  nivel === 0 ? [] : [indice(nivel - 1, r, c), indice(nivel - 1, r, c + 1), indice(nivel - 1, r + 1, c), indice(nivel - 1, r + 1, c + 1)],
);
/** As posições de cima que se apoiam em `p`. */
export const APOIADAS: number[][] = POSICOES.map(() => []);
APOIOS.forEach((apoios, p) => apoios.forEach((a) => APOIADAS[a]!.push(p)));

/** Os quadrados 2×2 de cada nível (as 4 posições), e os que passam por cada posição. */
export const QUADRADOS: number[][] = [];
for (let nivel = 0; nivel < 3; nivel++)
  for (let r = 0; r < lado(nivel) - 1; r++) for (let c = 0; c < lado(nivel) - 1; c++) QUADRADOS.push([indice(nivel, r, c), indice(nivel, r, c + 1), indice(nivel, r + 1, c), indice(nivel, r + 1, c + 1)]);
/** As linhas da versão para experientes: linhas e colunas inteiras dos níveis 0 (4) e 1 (3). */
export const LINHAS_EXPERIENTES: number[][] = [];
for (const nivel of [0, 1]) {
  const n = lado(nivel);
  for (let k = 0; k < n; k++) {
    LINHAS_EXPERIENTES.push(Array.from({ length: n }, (_, j) => indice(nivel, k, j)));
    LINHAS_EXPERIENTES.push(Array.from({ length: n }, (_, j) => indice(nivel, j, k)));
  }
}

export interface PylosState {
  board: (Cor | null)[];
  reserva: [number, number];
  turn: Cor;
  regra: RegraPylos;
  /** “jogar”: pôr ou subir uma bola; “retirar”: fez um quadrado e tira 1 ou 2 bolas suas */
  fase: 'jogar' | 'retirar';
  /** quantas bolas ainda pode tirar (fase “retirar”) e quantas já tirou */
  restam: number;
  tiradas: number[];
  winner: Cor | null;
  motivo: 'topo' | 'sem-bolas' | null;
  /** o que aconteceu no último passo, para animar: a bola posta (`para`), de onde subiu (`de`) */
  ultimo: { para: number; de?: number } | null;
  /** o quadrado (ou a linha) que deu direito a tirar bolas */
  figura: number[];
}

export function createInitialState(regra: RegraPylos = 'normal'): PylosState {
  return { board: Array(N_POS).fill(null), reserva: [BOLAS, BOLAS], turn: 0, regra, fase: 'jogar', restam: 0, tiradas: [], winner: null, motivo: null, ultimo: null, figura: [] };
}

export const outra = (c: Cor): Cor => (c === 0 ? 1 : 0);

/** Posição vazia com apoio (no nível 0, toda cova vazia). */
export function livre(board: (Cor | null)[], p: number): boolean {
  return board[p] === null && APOIOS[p]!.every((a) => board[a] !== null);
}

/** Bola que não segura nenhuma outra (pode subir ou sair). */
export function solta(board: (Cor | null)[], p: number): boolean {
  return board[p] !== null && APOIADAS[p]!.every((a) => board[a] === null);
}

/** Para onde a bola de `de` pode subir: posição livre mais alta que não se apoia nela. */
export function destinosSubir(s: PylosState, de: number): number[] {
  if (s.winner !== null || s.fase !== 'jogar' || s.board[de] !== s.turn || !solta(s.board, de)) return [];
  const nivel = POSICOES[de]!.nivel;
  const r: number[] = [];
  for (let p = 0; p < N_POS; p++) if (POSICOES[p]!.nivel > nivel && livre(s.board, p) && !APOIOS[p]!.includes(de)) r.push(p);
  return r;
}

/** A figura da sua cor (quadrado, ou linha na versão para experientes) formada pela bola em `p`. */
export function figuraFormada(board: (Cor | null)[], p: number, regra: RegraPylos): number[] | null {
  if (regra === 'criancas') return null;
  const cor = board[p];
  if (cor === null || cor === undefined) return null;
  const figuras = regra === 'experientes' ? [...QUADRADOS, ...LINHAS_EXPERIENTES] : QUADRADOS;
  for (const f of figuras) if (f.includes(p) && f.every((k) => board[k] === cor)) return f;
  return null;
}

/** Fecha a vez de quem jogou: passa a vez, e quem fica sem bolas na reserva perde. */
function fimDaVez(s: PylosState): PylosState {
  const prox = outra(s.turn);
  const base: PylosState = { ...s, fase: 'jogar', restam: 0, turn: prox };
  if (s.board[N_POS - 1] !== null) return { ...base, winner: s.turn, motivo: 'topo' };
  if (s.reserva[prox] === 0) return { ...base, winner: s.turn, motivo: 'sem-bolas' };
  return base;
}

/** Depois de pôr ou subir a bola em `p`: tira bolas se formou a figura, senão acaba a vez. */
function depoisDeColocar(s: PylosState, p: number): PylosState {
  if (p === N_POS - 1) return fimDaVez(s);
  const f = figuraFormada(s.board, p, s.regra);
  if (f) return { ...s, fase: 'retirar', restam: 2, figura: f };
  return fimDaVez(s);
}

/** Põe uma bola da reserva na posição `p`. */
export function por(s: PylosState, p: number): PylosState {
  if (s.winner !== null || s.fase !== 'jogar' || s.reserva[s.turn] === 0 || !livre(s.board, p)) return s;
  const board = s.board.slice();
  board[p] = s.turn;
  const reserva: [number, number] = [...s.reserva];
  reserva[s.turn]--;
  return depoisDeColocar({ ...s, board, reserva, ultimo: { para: p }, tiradas: [], figura: [] }, p);
}

/** Sobe a bola de `de` para `para`. */
export function subir(s: PylosState, de: number, para: number): PylosState {
  if (!destinosSubir(s, de).includes(para)) return s;
  const board = s.board.slice();
  board[de] = null;
  board[para] = s.turn;
  return depoisDeColocar({ ...s, board, ultimo: { para, de }, tiradas: [], figura: [] }, para);
}

/** As bolas que quem tem a vez pode tirar agora (fase “retirar”). */
export function retiraveis(s: PylosState): number[] {
  if (s.fase !== 'retirar' || s.winner !== null) return [];
  return s.board.flatMap((v, p) => (v === s.turn && solta(s.board, p) ? [p] : []));
}

/** Tira a bola de `p` e a devolve à reserva. */
export function retirar(s: PylosState, p: number): PylosState {
  if (!retiraveis(s).includes(p)) return s;
  const board = s.board.slice();
  board[p] = null;
  const reserva: [number, number] = [...s.reserva];
  reserva[s.turn]++;
  const e: PylosState = { ...s, board, reserva, restam: s.restam - 1, tiradas: [...s.tiradas, p] };
  return e.restam === 0 || retiraveis(e).length === 0 ? fimDaVez(e) : e;
}

/** Depois de tirar uma bola, fica só com ela (a segunda é opcional). */
export function parar(s: PylosState): PylosState {
  if (s.fase !== 'retirar' || s.tiradas.length === 0 || s.winner !== null) return s;
  return fimDaVez(s);
}

/** Um lance inteiro (para o Linu e os testes): pôr ou subir, e as bolas tiradas. */
export interface LancePylos {
  para: number;
  de?: number;
  tirar: number[];
}

export function aplicarLance(s: PylosState, l: LancePylos): PylosState {
  let e = l.de !== undefined ? subir(s, l.de, l.para) : por(s, l.para);
  for (const p of l.tirar) e = retirar(e, p);
  if (e.fase === 'retirar' && e.turn === s.turn && e.tiradas.length > 0) e = parar(e);
  return e;
}

/** Todos os lances inteiros possíveis de quem tem a vez. */
export function lancesLegais(s: PylosState): LancePylos[] {
  if (s.winner !== null || s.fase !== 'jogar') return [];
  const bases: { para: number; de?: number }[] = [];
  if (s.reserva[s.turn] > 0) for (let p = 0; p < N_POS; p++) if (livre(s.board, p)) bases.push({ para: p });
  for (let de = 0; de < N_POS; de++) for (const para of destinosSubir(s, de)) bases.push({ de, para });
  const r: LancePylos[] = [];
  for (const b of bases) {
    const e = b.de !== undefined ? subir(s, b.de, b.para) : por(s, b.para);
    if (e.fase !== 'retirar' || e.turn !== s.turn) {
      r.push({ ...b, tirar: [] });
      continue;
    }
    for (const p1 of retiraveis(e)) {
      r.push({ ...b, tirar: [p1] });
      const e1 = retirar(e, p1);
      if (e1.fase === 'retirar' && e1.turn === s.turn) for (const p2 of retiraveis(e1)) if (p2 > p1 || !retiraveis(e).includes(p2)) r.push({ ...b, tirar: [p1, p2] });
    }
  }
  return r;
}
