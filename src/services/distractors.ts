import { shuffle } from './answers';

/**
 * Escolhe até `n` distratores de `pool` pra uma palavra: nunca o próprio item, nunca um com a mesma
 * `keyOf` (pensado pra imagem repetida — foto, pictograma ou emoji — mas serve pra qualquer critério
 * de "mesma coisa" que o chamador queira excluir). Dá preferência a palavras da mesma `category`
 * (quando ela existe), completando com o resto do pool quando não houver `n` da mesma categoria —
 * assim a Imersão testa o que o aluno ouviu, não deixa acertar por eliminação entre palavras raras
 * de qualquer assunto. Com um pool pequeno, devolve o que der; nunca trava nem lança erro.
 *
 * `rnd` é só pra teste determinístico (padrão: `Math.random` de verdade, via `shuffle`) — passe
 * algo como `() => 0` pra desligar o sorteio e checar a ordem de preferência sem depender de sorte.
 */
export function pickDistractors<T extends { id: string; category?: string | null }>(
  word: T,
  pool: T[],
  keyOf: (w: T) => string,
  n = 2,
  rnd: () => number = Math.random,
): T[] {
  const wordKey = keyOf(word);
  const sameCategory: T[] = [];
  const rest: T[] = [];
  for (const p of pool) {
    if (p.id === word.id || keyOf(p) === wordKey) continue;
    (word.category != null && p.category === word.category ? sameCategory : rest).push(p);
  }
  return shuffle(sameCategory, rnd)
    .slice(0, n)
    .concat(shuffle(rest, rnd))
    .slice(0, n);
}
