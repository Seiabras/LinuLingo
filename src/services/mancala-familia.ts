/**
 * O que as mancalas de duas fileiras com semeadura em revezamento têm em comum (pallanguzhi, toguz
 * korgool, sungka): o desenho das covas num vetor só e os eventos de cada lance, para a animação.
 * As regras de cada jogo ficam no motor dele.
 *
 * Covas, na ordem da semeadura (sentido anti-horário na tela, como no Kalah):
 *   0 … n−1     as casas do jogador 0 (embaixo, da esquerda para a direita)
 *   n           o depósito do jogador 0 (à direita)
 *   n+1 … 2n    as casas do jogador 1 (em cima, da direita para a esquerda)
 *   2n+1        o depósito do jogador 1 (à esquerda)
 * Nos jogos em que os depósitos não fazem parte do caminho, a semeadura simplesmente pula os dois.
 */
import type { Quadro, Voo } from './semeadura';

export type JogadorM = 0 | 1;

/** Um passo do lance, na ordem: pegar uma cova, deixar uma semente, ou capturar covas para um depósito. */
export type EventoM = { t: 'pega'; i: number } | { t: 'semeia'; i: number } | { t: 'captura'; de: number[]; para: number };

export interface EstadoMancala {
  n: number;
  covas: number[];
  turn: JogadorM;
  winner: JogadorM | 'empate' | null;
  ultimo: { de: number; eventos: EventoM[]; jogaDeNovo: boolean; passou: boolean } | null;
  /** toguz korgool: a cova “tuz” de cada jogador (no lado do adversário), ou null */
  tuz?: [number | null, number | null];
}

export const deposito = (n: number, j: JogadorM) => (j === 0 ? n : 2 * n + 1);
export const casasDe = (n: number, j: JogadorM): number[] => Array.from({ length: n }, (_, k) => (j === 0 ? k : n + 1 + k));
export const donoDa = (n: number, i: number): JogadorM => (i <= n ? 0 : 1);
/** A casa da frente (do outro lado do tabuleiro). */
export const frente = (n: number, i: number) => 2 * n - i;
/** O número da casa do ponto de vista do dono (1 a n, da esquerda para a direita de quem joga). */
export const numeroDaCasa = (n: number, i: number) => (i < n ? i + 1 : i - n);

/** A cova seguinte na semeadura, pulando os depósitos indicados. */
export function seguinte(n: number, i: number, pula: (i: number) => boolean): number {
  let p = i;
  do p = (p + 1) % (2 * n + 2);
  while (pula(p));
  return p;
}

export const sementesDoLado = (s: EstadoMancala, j: JogadorM) => casasDe(s.n, j).reduce((t, i) => t + s.covas[i]!, 0);

/** Recolhe as sementes de cada lado para o depósito do dono (fim de jogo) e decide o vencedor. */
export function encerrar(s: EstadoMancala, eventos: EventoM[], recolhe: (j: JogadorM) => JogadorM = (j) => j): EstadoMancala {
  const covas = s.covas.slice();
  for (const j of [0, 1] as const) {
    const de = casasDe(s.n, j).filter((i) => covas[i]! > 0);
    if (de.length === 0) continue;
    const para = deposito(s.n, recolhe(j));
    for (const i of de) {
      covas[para]! += covas[i]!;
      covas[i] = 0;
    }
    eventos.push({ t: 'captura', de, para });
  }
  const a = covas[deposito(s.n, 0)]!;
  const b = covas[deposito(s.n, 1)]!;
  return { ...s, covas, winner: a === b ? 'empate' : a > b ? 0 : 1 };
}

/**
 * Os quadros da animação a partir dos eventos do lance (a mão pega, deixa uma semente por cova, pega
 * de novo no revezamento, e as capturadas voam para o depósito). O último quadro é sempre a posição
 * final do motor. Lances muito compridos (mais de `maximo` sementes deixadas) não são animados.
 */
export function quadrosDosEventos(antes: readonly number[], eventos: readonly EventoM[], depois: readonly number[], maximo = 90): Quadro[] {
  const semeadas = eventos.filter((e) => e.t === 'semeia').length;
  if (semeadas > maximo) return [];
  const quadros: Quadro[] = [];
  let covas = antes.slice();
  let mao = 0;
  for (const e of eventos) {
    if (e.t === 'pega') {
      covas = covas.slice();
      mao += covas[e.i]!;
      covas[e.i] = 0;
      // o primeiro quadro diz quantas sementes o lance vai deixar (dá o ritmo da animação)
      quadros.push({ tipo: 'pega', covas, cai: null, mao: quadros.length === 0 ? Math.max(mao, semeadas) : mao, voam: [], chegou: [] });
    } else if (e.t === 'semeia') {
      covas = covas.slice();
      covas[e.i]!++;
      mao = Math.max(0, mao - 1);
      quadros.push({ tipo: 'semeia', covas, cai: e.i, mao, voam: [], chegou: [] });
    } else {
      const voam: Voo[] = e.de.filter((i) => covas[i]! > 0).map((i) => ({ de: i, n: covas[i]!, para: e.para }));
      if (voam.length === 0) continue;
      covas = covas.slice();
      for (const v of voam) covas[v.de] = 0;
      quadros.push({ tipo: 'voa', covas, cai: null, mao, voam, chegou: [] });
      covas = covas.slice();
      for (const v of voam) covas[e.para]! += v.n;
      quadros.push({ tipo: 'chega', covas, cai: null, mao, voam: [], chegou: [e.para] });
    }
  }
  if (covas.some((x, i) => x !== depois[i])) quadros.push({ tipo: 'chega', covas: depois.slice(), cai: null, mao: 0, voam: [], chegou: [] });
  return quadros;
}

/** Limite de segurança do revezamento (a semeadura que poderia, em tese, não acabar). */
export const LIMITE_SEMENTES = 3000;
