/**
 * Regras de escrita dos idiomas nórdicos (e bálticos-fínicos) usadas nos verificadores e testes:
 * cada idioma tem as suas letras próprias, e a letra de um vizinho no lugar errado é sinal de
 * mistura (ø no sueco, ä no norueguês, å no islandês…).
 */

/** Letras que NÃO existem no idioma e costumam escapar de um vizinho. */
const FOREIGN: Record<string, RegExp> = {
  sv: /[æøðþõãçñÆØÐÞ]/, // sueco: å ä ö
  nb: /[äöðþõãçñÄÖÐÞ]/, // norueguês bokmål: æ ø å
  nn: /[äöðþõãçñÄÖÐÞ]/, // norueguês nynorsk: æ ø å
  da: /[äöðþõãçñÄÖÐÞ]/, // dinamarquês: æ ø å
  is: /[äøåõãçñÄØÅ]/, // islandês: á é í ó ú ý ð þ æ ö
  fo: /[äöþõãçñÄÖÞ]/, // feroês: á í ó ú ý ð æ ø
  fi: /[æøðþõãçñÆØÐÞ]/, // finlandês: ä ö (å só em nomes suecos)
  et: /[æøðþåãçñÆØÐÞÅ]/, // estoniano: õ ä ö ü š ž
};

/** Palavras muito frequentes de um vizinho que denunciam mistura (fora de citações). */
const NEIGHBOR_WORDS: Record<string, string[]> = {
  // «og» e «jeg» ficam de fora no sueco: a unidade de intercompreensão tem uma fala em norueguês de propósito
  sv: ['ikke', 'også'], // «hvad» era a grafia sueca antes da reforma de 1906
  nb: ['och', 'inte', 'jag', 'också', 'någon'],
  nn: ['och', 'inte', 'jag', 'också', 'någon'],
  da: ['och', 'inte', 'jag', 'också', 'någon', 'hva', 'ikkje'],
};

const NAMES: Record<string, string> = { sv: 'sueco', nb: 'bokmål', nn: 'nynorsk', da: 'dinamarquês', is: 'islandês', fo: 'feroês', fi: 'finlandês', et: 'estoniano' };

/** Nomes próprios de lugares de outros idiomas que podem aparecer no texto (citados). */
const PROPER = /São Paulo|Brasília|Ålesund|Tórshavn|Þingvellir|Göteborg|Malmö|Øresund|København|Århus|Aarhus|Tromsø|Bodø|Jökulsárlón|Reykjavík|Mývatn|Saaremaa|Pärnu|Tartu|Åland|Mariehamn|Suðuroy|Klaksvík/g;

/** Problemas de escrita num texto no idioma `lang`. */
export function nordicTextProblems(lang: string, raw: string): string[] {
  const out: string[] = [];
  // citação curta entre « » (até 3 palavras) é palavra de outra língua citada de propósito
  const text = raw.replace(PROPER, 'X').replace(/«([^»]*)»/g, (m, inner: string) => (inner.trim().split(/\s+/).length <= 3 ? '«»' : m));
  const re = FOREIGN[lang];
  const m = re ? text.match(re) : null;
  if (m) out.push(`«${m[0]}» não existe em ${NAMES[lang] ?? lang} (letra de outra língua?)`);
  if (/[Ѐ-ӿ]/.test(text)) out.push('letra cirílica');
  for (const w of NEIGHBOR_WORDS[lang] ?? [])
    if (new RegExp(`(?<![\\p{L}])${w}(?![\\p{L}])`, 'iu').test(text)) out.push(`«${w}» é de uma língua vizinha, não de ${NAMES[lang] ?? lang}`);
  return out;
}
