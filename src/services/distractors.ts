import { shuffle } from './answers';

/**
 * Escolhe até `n` distratores de `pool` pra uma palavra: nunca o próprio item, nunca um com a mesma
 * `keyOf` (pensado pra imagem repetida — foto, pictograma ou emoji — mas serve pra qualquer critério
 * de "mesma coisa" que o chamador queira excluir). Dá preferência a palavras da mesma `category`
 * (quando ela existe), completando com o resto do pool quando não houver `n` da mesma categoria —
 * assim a Imersão testa o que o aluno ouviu, não deixa acertar por eliminação entre palavras raras
 * de qualquer assunto. Com um pool pequeno, devolve o que der; nunca trava nem lança erro.
 */
export function pickDistractors<T extends { id: string; category?: string | null }>(word: T, pool: T[], keyOf: (w: T) => string, n = 2): T[] {
  const wordKey = keyOf(word);
  const candidates = pool.filter((p) => p.id !== word.id && keyOf(p) !== wordKey);
  const sameCategory = word.category != null ? candidates.filter((c) => c.category === word.category) : [];
  const rest = candidates.filter((c) => !sameCategory.includes(c));
  return shuffle(sameCategory)
    .slice(0, n)
    .concat(shuffle(rest))
    .slice(0, n);
}
