/**
 * A lição que se ajusta a quem está fazendo (ideia 5 da lista do Gemini):
 * - acertou de primeira e sem hesitar as primeiras palavras da imersão? A lição encurta: as que
 *   faltam entram no cofre como já sabidas;
 * - errou uma lacuna? Antes de seguir, um cartão «Por que é assim?» com a regra da unidade, e a
 *   frase volta no fim para tentar de novo (sem mudar a nota, que conta só a primeira tentativa).
 */

/** Resposta “sem hesitar”: até quantos milissegundos entre ver a palavra e acertar. */
export const RAPIDO_MS = 4000;
/** Depois de quantas palavras certas e rápidas a imersão encurta. */
export const ENCURTA_DEPOIS = 4;

export interface RespostaCronometrada {
  correct: boolean;
  ms: number;
}

/** Encurta quando as `ENCURTA_DEPOIS` primeiras foram certas de primeira e rápidas, e ainda sobra palavra. */
export function podeEncurtar(respostas: RespostaCronometrada[], total: number): boolean {
  return respostas.length === ENCURTA_DEPOIS && total > ENCURTA_DEPOIS && respostas.every((r) => r.correct && r.ms <= RAPIDO_MS);
}

/** Item da fila de lacunas: os originais e, no fim, os que voltam para uma segunda tentativa. */
export interface ItemDaFila<T> {
  item: T;
  /** segunda tentativa (não conta na nota) */
  refazendo: boolean;
}

export function filaInicial<T>(items: T[]): ItemDaFila<T>[] {
  return items.map((item) => ({ item, refazendo: false }));
}

/** Errou um item da primeira passada: ele volta no fim da fila (uma vez só). */
export function devolverAoFim<T>(fila: ItemDaFila<T>[], atual: ItemDaFila<T>): ItemDaFila<T>[] {
  return atual.refazendo ? fila : [...fila, { item: atual.item, refazendo: true }];
}
