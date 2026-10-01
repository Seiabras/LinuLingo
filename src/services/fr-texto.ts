/** Regras de escrita do francês usadas nos verificadores e testes de conteúdo. */

/** Letras do português (ou do espanhol) que não existem no francês. */
const NOT_FRENCH = /[ãõñÃÕÑ]/;

/** Palavras curtas que perdem o «e» (ou o «a») antes de vogal: le ami → l'ami, que il → qu'il. */
const ELIDES = /(?:^|[\s“(])(le|la|de|je|me|te|se|ne|que|ce|jusque|lorsque|puisque) (?=[aeiouyâàéèêëîïôûùœæAEIOUYÂÀÉÈÊÎÔÛ])/;

/** Problemas de escrita num texto em francês. */
export function frenchTextProblems(text: string): string[] {
  const out: string[] = [];
  const m = text.match(NOT_FRENCH);
  if (m) out.push(`“${m[0]}” não existe em francês`);
  if (/[Ѐ-ӿ]/.test(text)) out.push('letra cirílica no francês');
  const e = text.match(ELIDES);
  // «le un» não existe, mas «la une» (a primeira página) e «le onze» existem: o verificador só avisa;
  // e a gíria «de ouf» (incrível, em verlan) se diz sem elisão
  if (e && !/\b(?:le|la) (?:onze|oui|un\b|une\b|uhlan|ouistiti|yaourt|yoga|yéti)|\bde ouf\b/i.test(text)) out.push(`falta elisão: “${e[0].trim()}…” (${text.slice(0, 50)})`);
  if (/\bsi ils?\b/i.test(text)) out.push(`falta elisão: “si il” → “s'il” (${text.slice(0, 50)})`);
  if (/’/.test(text)) out.push('use o apóstrofo reto (\') nos dados');
  return out;
}
