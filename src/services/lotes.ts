/**
 * Lotes binários: as peças de sorte que caem de um jeito ou de outro (os dados tetraédricos do jogo de
 * Ur, as varetas do senet e do yut nori, os búzios do pachisi). Cada lote cai “marcado” com chance de
 * 1/2; o resultado é quantos caíram marcados. O sorteio é injetável, para os testes repetirem a partida.
 * Na vida real os búzios e as varetas não caem meio a meio; aqui, para simplificar, caem.
 */
export type Sorteio = () => number;

/** Lança `n` lotes: `true` = caiu marcado (a ponta pintada, o lado branco, a boca para cima). */
export function lancarLotes(n: number, sorteio: Sorteio = Math.random): boolean[] {
  return Array.from({ length: n }, () => sorteio() < 0.5);
}

export const contaMarcados = (lotes: boolean[]) => lotes.filter(Boolean).length;

/** A chance de `k` marcados em `n` lotes meio a meio (binomial). */
export function chanceDeMarcados(n: number, k: number): number {
  let c = 1;
  for (let i = 0; i < k; i++) c = (c * (n - i)) / (i + 1);
  return c / 2 ** n;
}

/** Lotes que dão exatamente `k` marcados (para os testes e para o Linu montar um lançamento). */
export const lotesCom = (n: number, k: number) => Array.from({ length: n }, (_, i) => i < k);
