/**
 * As contas da escolha “quem começa” (ver `quem-comeca.ts`), sem React, para os testes.
 */
export type QuemComeca = 'eu' | 'linu' | 'sorteio';

/** O lado do Linu para uma escolha (função pura, para os testes). */
export function ladoDoLinu<L>(escolha: QuemComeca, comeca: L, outro: L, rng: () => number = Math.random): L {
  if (escolha === 'linu') return comeca;
  if (escolha === 'sorteio') return rng() < 0.5 ? comeca : outro;
  return outro;
}

/**
 * Para os jogos em que o Linu tem sempre o mesmo lugar e a regra não diz quem começa (a amarelinha,
 * a primeira rodada do Hanafuda): quem faz o primeiro lance, pela escolha.
 */
export function primeiroAJogar<J>(escolha: QuemComeca, voce: J, linu: J, rng: () => number = Math.random): J {
  return ladoDoLinu(escolha, linu, voce, rng);
}
