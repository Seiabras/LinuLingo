/**
 * Motor dos Pontinhos (“dots and boxes”, “la pipopipette” de Édouard Lucas). Regras como na
 * Wikipédia em inglês, “Dots and boxes”, consultada em 15/10/2026:
 *
 *   - uma grade de pontos; na vez, o jogador traça um traço horizontal ou vertical entre dois pontos
 *     vizinhos ainda não ligados;
 *   - quem fecha o quarto lado de um quadradinho ganha o quadradinho (um ponto) e joga de novo; um
 *     traço pode fechar dois quadradinhos de uma vez;
 *   - o jogo acaba quando não há mais traço a fazer; vence quem tiver mais quadradinhos (com um número
 *     par de quadradinhos, pode empatar).
 *
 * Grade de L × A quadradinhos ((L + 1) × (A + 1) pontos). Traços: primeiro os horizontais, linha a
 * linha ((A + 1) × L), depois os verticais ((L + 1) × A).
 */

export type JogadorP = 0 | 1;

export interface PontinhosState {
  /** quadradinhos na largura e na altura */
  l: number;
  a: number;
  /** quem traçou cada traço (null: ainda não traçado) */
  tracos: (JogadorP | null)[];
  /** de quem é cada quadradinho */
  caixas: (JogadorP | null)[];
  placar: [number, number];
  turn: JogadorP;
  winner: JogadorP | 'empate' | null;
  /** o último traço e os quadradinhos que ele fechou */
  ultimo: { traco: number; fechou: number[] } | null;
}

export function createInitialState(l = 3, a = l, primeiro: JogadorP = 0): PontinhosState {
  const n = (a + 1) * l + (l + 1) * a;
  return { l, a, tracos: Array(n).fill(null), caixas: Array(l * a).fill(null), placar: [0, 0], turn: primeiro, winner: null, ultimo: null };
}

export const totalTracos = (l: number, a: number) => (a + 1) * l + (l + 1) * a;

/** O traço horizontal acima da linha `r` (0 a A), na coluna `c`. */
export const horizontal = (l: number, r: number, c: number) => r * l + c;
/** O traço vertical à esquerda da coluna `c` (0 a L), na linha `r`. */
export const vertical = (l: number, a: number, r: number, c: number) => (a + 1) * l + r * (l + 1) + c;

/** Os 4 traços de um quadradinho: cima, baixo, esquerda, direita. */
export function ladosDaCaixa(l: number, a: number, caixa: number): [number, number, number, number] {
  const r = Math.floor(caixa / l);
  const c = caixa % l;
  return [horizontal(l, r, c), horizontal(l, r + 1, c), vertical(l, a, r, c), vertical(l, a, r, c + 1)];
}

/** Os quadradinhos (1 ou 2) que um traço ajuda a fechar. */
export function caixasDoTraco(l: number, a: number, t: number): number[] {
  const nh = (a + 1) * l;
  if (t < nh) {
    const r = Math.floor(t / l);
    const c = t % l;
    const v: number[] = [];
    if (r > 0) v.push((r - 1) * l + c);
    if (r < a) v.push(r * l + c);
    return v;
  }
  const k = t - nh;
  const r = Math.floor(k / (l + 1));
  const c = k % (l + 1);
  const v: number[] = [];
  if (c > 0) v.push(r * l + c - 1);
  if (c < l) v.push(r * l + c);
  return v;
}

/** As pontas de um traço, em (coluna, linha) de pontos. */
export function pontasDoTraco(l: number, a: number, t: number): [[number, number], [number, number]] {
  const nh = (a + 1) * l;
  if (t < nh) {
    const r = Math.floor(t / l);
    const c = t % l;
    return [
      [c, r],
      [c + 1, r],
    ];
  }
  const k = t - nh;
  const r = Math.floor(k / (l + 1));
  const c = k % (l + 1);
  return [
    [c, r],
    [c, r + 1],
  ];
}

/** Quantos lados já traçados o quadradinho tem. */
export const ladosFeitos = (s: Pick<PontinhosState, 'l' | 'a' | 'tracos'>, caixa: number) => ladosDaCaixa(s.l, s.a, caixa).filter((t) => s.tracos[t] !== null).length;

export function lancesLegais(s: PontinhosState): number[] {
  if (s.winner !== null) return [];
  const r: number[] = [];
  for (let t = 0; t < s.tracos.length; t++) if (s.tracos[t] === null) r.push(t);
  return r;
}

/** Traça um traço. Se fechar quadradinho, marca e quem jogou joga de novo. Traço já feito: mesmo estado. */
export function tracar(s: PontinhosState, t: number): PontinhosState {
  if (s.winner !== null || t < 0 || t >= s.tracos.length || s.tracos[t] !== null) return s;
  const tracos = s.tracos.slice();
  tracos[t] = s.turn;
  const caixas = s.caixas.slice();
  const fechou: number[] = [];
  for (const b of caixasDoTraco(s.l, s.a, t))
    if (caixas[b] === null && ladosDaCaixa(s.l, s.a, b).every((x) => tracos[x] !== null)) {
      caixas[b] = s.turn;
      fechou.push(b);
    }
  const placar: [number, number] = [s.placar[0], s.placar[1]];
  placar[s.turn] += fechou.length;
  const acabou = caixas.every((x) => x !== null);
  const winner = acabou ? (placar[0] > placar[1] ? 0 : placar[1] > placar[0] ? 1 : 'empate') : null;
  return {
    ...s,
    tracos,
    caixas,
    placar,
    turn: fechou.length > 0 ? s.turn : s.turn === 0 ? 1 : 0,
    winner,
    ultimo: { traco: t, fechou },
  };
}
