/**
 * Motor do Quixo (Thierry Chapeau, Gigamic, 1995). Regras da folha oficial da Gigamic (“® & ©
 * Copyright 1995 GiGamic S.A. based on an idea by Thierry Chapeau”, impressão de 2006, cópia em
 * cs.uwaterloo.ca/~dtompkin/dtlib/base/Quixo.pdf, consultada em 15/10/2026):
 *
 *   - 25 cubos num tabuleiro 5×5; cada cubo mostra em cima uma face lisa, um círculo ou uma cruz;
 *     no começo, todos lisos;
 *   - na vez, o jogador tira um cubo da BORDA que esteja liso ou com o símbolo dele (nunca um do
 *     adversário), põe o símbolo dele virado para cima e devolve o cubo numa das pontas da fileira
 *     (linha ou coluna) que ficou incompleta, empurrando-a; não pode devolver no lugar de onde saiu;
 *   - ganha quem forma uma linha de 5 cubos com o seu símbolo (horizontal, vertical ou diagonal);
 *     quem forma uma linha com o símbolo do ADVERSÁRIO perde, mesmo que forme a sua ao mesmo tempo;
 *   - a quatro, em duplas (A1, B1, A2, B2, no sentido horário): a ponta desenhada no símbolo do cubo
 *     diz qual dos dois parceiros pode jogá-lo de novo; quem não tem cubo que possa tirar passa a vez.
 *
 * O cubo é um número: 0 liso; senão o símbolo (1 cruz, 2 círculo) mais 4 × a ponta (0 ou 1, só no
 * jogo a quatro).
 */

export const LADO = 5;
/**
 * A regra oficial não tem empate, mas com jogo perfeito a partida não acaba (Tanaka, Bonnet, Tixeuil e
 * Tamura, “Quixo Is Solved”, 2020: é empate). Aqui, para simplificar, depois de 150 lances a
 * partida termina empatada.
 */
export const LIMITE_LANCES = 150;
export type Simbolo = 1 | 2; // 1 = cruz (X), 2 = círculo (O)

export interface QuixoState {
  board: number[];
  /** de quem é a vez: 0 ou 1 a dois; 0 a 3 a quatro (A1, B1, A2, B2) */
  turn: number;
  quatro: boolean;
  /** 'empate' só pelo limite de lances do app (ver `LIMITE_LANCES`) */
  winner: Simbolo | 'empate' | null;
  /** a linha vencedora (ou a linha do adversário que fez o jogador perder) */
  linha: number[];
  /** se a vitória veio porque o adversário formou a linha do outro */
  entregou?: boolean;
  /** o último lance, para animar o empurrão */
  ultimo: LanceQuixo | null;
  /** quantos lances já foram feitos */
  lances: number;
}

export interface LanceQuixo {
  de: number;
  para: number;
  /** a quatro: para qual dos parceiros a ponta do símbolo fica virada (0 = A1/B1, 1 = A2/B2) */
  ponta?: 0 | 1;
}

export const simboloDe = (v: number) => (v & 3) as 0 | Simbolo;
export const pontaDe = (v: number) => (v >> 2) as 0 | 1;
/** O símbolo de quem joga na vez `t` (a quatro, A1 e A2 são cruz; B1 e B2, círculo). */
export const simboloDaVez = (t: number): Simbolo => (t % 2 === 0 ? 1 : 2);
/** A quatro: qual parceiro da dupla joga na vez `t` (0 = A1/B1, 1 = A2/B2). */
export const parceiroDaVez = (t: number) => (t >> 1) as 0 | 1;

export const naBorda = (i: number) => {
  const r = Math.floor(i / LADO);
  const c = i % LADO;
  return r === 0 || c === 0 || r === LADO - 1 || c === LADO - 1;
};

export const LINHAS: number[][] = [];
for (let r = 0; r < LADO; r++) LINHAS.push([0, 1, 2, 3, 4].map((c) => r * LADO + c));
for (let c = 0; c < LADO; c++) LINHAS.push([0, 1, 2, 3, 4].map((r) => r * LADO + c));
LINHAS.push([0, 6, 12, 18, 24], [4, 8, 12, 16, 20]);

export function createInitialState(opcoes: { quatro?: boolean } = {}): QuixoState {
  return { board: Array(LADO * LADO).fill(0), turn: 0, quatro: !!opcoes.quatro, winner: null, linha: [], ultimo: null, lances: 0 };
}

/** Se quem tem a vez pode tirar o cubo da casa `i`. */
export function podeTirar(s: QuixoState, i: number): boolean {
  if (s.winner !== null || !naBorda(i)) return false;
  const v = s.board[i]!;
  if (v === 0) return true;
  if (simboloDe(v) !== simboloDaVez(s.turn)) return false;
  return !s.quatro || pontaDe(v) === parceiroDaVez(s.turn);
}

/** As pontas onde o cubo tirado de `de` pode voltar (2 nos cantos, 3 no meio das bordas). */
export function destinos(de: number): number[] {
  const r = Math.floor(de / LADO);
  const c = de % LADO;
  const cands = [r * LADO, r * LADO + LADO - 1, c, (LADO - 1) * LADO + c];
  return [...new Set(cands)].filter((x) => x !== de);
}

export function lancesLegais(s: QuixoState): LanceQuixo[] {
  if (s.winner !== null) return [];
  const r: LanceQuixo[] = [];
  for (let i = 0; i < LADO * LADO; i++) if (podeTirar(s, i)) for (const para of destinos(i)) r.push({ de: i, para });
  return r;
}

/** O tabuleiro depois de tirar o cubo de `de`, empurrar a fileira e pôr `valor` em `para`. */
export function empurrar(board: number[], de: number, para: number, valor: number): number[] {
  const b = board.slice();
  const [r1, c1] = [Math.floor(de / LADO), de % LADO];
  const [r2, c2] = [Math.floor(para / LADO), para % LADO];
  if (r1 === r2) {
    const passo = c2 > c1 ? 1 : -1;
    for (let c = c1; c !== c2; c += passo) b[r1 * LADO + c] = b[r1 * LADO + c + passo]!;
  } else {
    const passo = r2 > r1 ? 1 : -1;
    for (let r = r1; r !== r2; r += passo) b[r * LADO + c1] = b[(r + passo) * LADO + c1]!;
  }
  b[para] = valor;
  return b;
}

/** As linhas completas com o símbolo `sim`. */
export function linhasDe(board: number[], sim: Simbolo): number[][] {
  return LINHAS.filter((l) => l.every((i) => simboloDe(board[i]!) === sim));
}

/** A próxima vez; a quatro, pula quem não tem cubo que possa tirar. */
function proximaVez(s: QuixoState): number {
  const n = s.quatro ? 4 : 2;
  for (let k = 1; k <= n; k++) {
    const t = (s.turn + k) % n;
    if (lancesLegais({ ...s, turn: t }).length > 0) return t;
  }
  return (s.turn + 1) % n;
}

/** Faz o lance; devolve o mesmo estado se ele não vale. */
export function jogar(s: QuixoState, l: LanceQuixo): QuixoState {
  if (!podeTirar(s, l.de) || !destinos(l.de).includes(l.para)) return s;
  const meu = simboloDaVez(s.turn);
  const ponta = s.quatro ? (l.ponta ?? parceiroDaVez(s.turn)) : 0;
  const board = empurrar(s.board, l.de, l.para, meu | (ponta << 2));
  const base: QuixoState = { ...s, board, ultimo: { ...l, ponta: ponta as 0 | 1 }, lances: s.lances + 1 };
  const dele: Simbolo = meu === 1 ? 2 : 1;
  const contra = linhasDe(board, dele);
  // formar a linha do adversário perde, mesmo formando a sua junto
  if (contra.length > 0) return { ...base, winner: dele, linha: contra[0]!, entregou: true };
  const minhas = linhasDe(board, meu);
  if (minhas.length > 0) return { ...base, winner: meu, linha: minhas[0]! };
  if (base.lances >= LIMITE_LANCES) return { ...base, winner: 'empate' };
  return { ...base, turn: proximaVez(base) };
}
