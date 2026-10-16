/**
 * O nome de cada jogador no modo a dois (item 11 do PENDENTES.md, 16/10/2026). Fica à parte de
 * `jogos-prefs.ts` (que importa o app) para os testes rodarem sem o React Native.
 */

/** Até quantas letras vai o nome de um jogador. */
export const NOME_MAX = 16;

/** O nome digitado do jogador `k` (0 = quem começa), ou '' se ele não digitou nada. */
export function nomeDigitado(prefs: { nome1?: string; nome2?: string }, k: number): string {
  const v = k === 0 ? prefs.nome1 : k === 1 ? prefs.nome2 : '';
  return typeof v === 'string' ? v.trim().slice(0, NOME_MAX) : '';
}
