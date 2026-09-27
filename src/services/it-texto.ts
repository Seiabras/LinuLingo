/** Regras de escrita do italiano usadas nos verificadores e testes de conteúdo. */

/** Letras do português (ou do espanhol) que não existem no italiano: sinal de interferência. */
const FOREIGN = /[ãõçâêôñ¿¡ÃÕÇÂÊÔÑ]/;

/** Grafias erradas comuns: o acento na direção errada, o apóstrofo que não existe. */
// \b não enxerga letras acentuadas: as bordas de palavra usam \p{L} com a flag u
const B = '(?<![\\p{L}])';
const E = '(?![\\p{L}])';
const MISSPELLINGS: [RegExp, string][] = [
  [new RegExp(`${B}(perch|poich|bench|affinch|finch|giacch|sicch|nonch|cosicch|purch)è${E}`, 'iu'), 'o acento fechado: «-ché» (perché, poiché, benché)'],
  [new RegExp(`${B}nè${E}`, 'iu'), '«né» (nem) leva acento agudo'],
  [new RegExp(`${B}sè${E}`, 'iu'), '«sé» (si mesmo) leva acento agudo'],
  [new RegExp(`${B}(ventitr|trentatr|quarantatr|cinquantatr|sessantatr|settantatr|ottantatr|novantatr)è${E}`, 'iu'), 'os compostos de «tre» terminam em «-tré»'],
  [new RegExp(`${B}pò${E}`, 'iu'), '«un po’» se escreve com apóstrofo, não com acento'],
  [new RegExp(`${B}qual[’'] ?è`, 'iu'), '«qual è» se escreve sem apóstrofo'],
  [new RegExp(`${B}un[’'](amico|albero|uomo|anno|altro${E})`, 'iu'), 'artigo masculino antes de vogal é «un», sem apóstrofo (un amico)'],
  [new RegExp(`${B}[éÉ]${E}`, 'u'), '«é» sozinho: o verbo essere é «è»/«È» (acento grave)'],
  [new RegExp(`${B}E[’'](?=\\s)`, 'u'), 'use «È» maiúsculo acentuado, não «E’»'],
];

/** Nomes próprios de outras línguas que podem aparecer num texto italiano (lugares da imigração). */
const PROPER_NAMES = /Bento Gonçalves|São Paulo|Caxias do Sul|Santa Catarina|Espírito Santo|São Marcos|Nova Trento|Paraná|Ribeirão Preto|Conceição|Farroupilha|Rio Grande do Sul|Brás|Bixiga|Mooca|Jundiaí|Petrópolis|Minas Gerais|São Bento/g;

/** Problemas de escrita num texto em italiano. */
export function italianTextProblems(raw: string): string[] {
  const out: string[] = [];
  const text = raw.replace(PROPER_NAMES, 'X');
  const m = text.match(FOREIGN);
  if (m) out.push(`«${m[0]}» não existe em italiano (interferência do português/espanhol?)`);
  if (/[Ѐ-ӿ]/.test(text)) out.push('letra cirílica no italiano');
  for (const [re, why] of MISSPELLINGS) if (re.test(text)) out.push(`${why}: ${text.slice(0, 50)}`);
  return out;
}
