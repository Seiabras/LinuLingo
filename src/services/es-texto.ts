/** Regras de escrita do espanhol usadas nos verificadores e testes de conteúdo. */

/** Letras do português que não existem no espanhol: sinal de «portunhol». */
const PT_ONLY = /[ãõçâêôàÃÕÇÂÊÔÀ]/;

/** Problemas de escrita num texto em espanhol. */
export function spanishTextProblems(text: string): string[] {
  const out: string[] = [];
  const m = text.match(PT_ONLY);
  if (m) out.push(`«${m[0]}» não existe em espanhol (portunhol?)`);
  if (/[Ѐ-ӿ]/.test(text)) out.push('letra cirílica no espanhol');
  // cada frase com ? precisa do ¿ de abertura; com !, do ¡
  for (const sentence of text.split(/(?<=[.?!…])\s+/)) {
    if (/\?/.test(sentence) && !/¿/.test(sentence)) out.push(`pergunta sem «¿»: ${sentence.slice(0, 40)}`);
    if (/!/.test(sentence) && !/¡/.test(sentence)) out.push(`exclamação sem «¡»: ${sentence.slice(0, 40)}`);
  }
  return out;
}
