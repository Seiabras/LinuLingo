/**
 * Conferência de textos em catalão: letras que não existem no catalão (ã õ ñ ê ô…), o apóstrofo
 * curvo (o app usa o reto), a «ela geminada» escrita com ponto comum em vez do ponto volante
 * (col·legi, não col.legi), as contrações e elisões obrigatórias (de el → del, a el → al,
 * el amic → l'amic, de aigua → d'aigua) e os acentos diacríticos que a ortografia de 2017 tirou (sóc → soc).
 */
const NOT_CATALAN = /[ãõñâêôûîùìåæøœ]/i;

export function catalanTextProblems(text: string): string[] {
  const out: string[] = [];
  const m = text.match(NOT_CATALAN);
  if (m) out.push(`“${m[0]}” não existe em catalão`);
  if (/’/.test(text)) out.push('apóstrofo curvo (use o reto)');
  if (/l\.l/i.test(text)) out.push('ela geminada com ponto comum: use “l·l”');
  // a ortografia do IEC de 2017 tirou o acento diacrítico destas palavras (ficaram só 15: bé, déu, és, mà,
  // més, món, pèl, què, sé, sí, sòl, són, té, ús, vénen/véns)
  const old = text.match(/(?<![\p{L}·])(sóc|dóna|dónes|nét|néts|néta|nétes|besnét|vés|fóra|móra|bóta|cóc|féu|ós|óssos)(?![\p{L}·])/iu);
  if (old) out.push(`“${old[0]}”: sem acento desde a ortografia de 2017 (soc, dona, net, ves, os…)`);
  // limites de palavra que entendem letras acentuadas e a ela geminada (o \b do JS acha que «ç» e «·» separam palavras)
  const c = text.match(/(?<![\p{L}·])(?:de|a|per) (?:el|els)(?!\p{L})/iu);
  if (c) out.push(`falta contração: “${c[0]}” → del/dels, al/als, pel/pels`);
  // el/la antes de vogal ou h viram l' (menos antes de i/u semivogal: la iaia, el iogurt; e la + i/u átono:
  // la universitat); o pronome depois de hífen não conta (posa-la a l'armari)
  const e = text.match(/(?<![\p{L}·-])(?:el|la) h?[aeoàèéòó]\p{L}*/iu);
  if (e) out.push(`falta elisão: “${e[0]}” → l'…`);
  const d = text.match(/(?<![\p{L}·])de h?[aeoàèéòóiu]\p{L}*/iu);
  if (d && !/^de (?:i[aeouàèéòó]|u[aeiàèéòó])/iu.test(d[0])) out.push(`falta elisão: “${d[0]}” → d'…`);
  return out;
}
