/**
 * IPA a partir de um dicionário de pronúncia por palavra (forma → transcrição sem colchetes).
 * Usado nos idiomas em que a escrita não diz a pronúncia com regras simples (dinamarquês,
 * sueco, norueguês, islandês, feroês…): cada forma que aparece no app tem a sua transcrição,
 * conferida pelos testes de conteúdo.
 */
export type IpaLexicon = Record<string, string>;

/** Palavras (tokens) de um texto, em minúsculas; o hífen e o apóstrofo ficam dentro da palavra. */
export function lexiconWords(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFC')
    .split(/[^\p{L}\p{M}’'-]+/u)
    .map((w) => w.replace(/^[-’']+|[-’']+$/g, ''))
    .filter((w) => /\p{L}/u.test(w));
}

/** Frase inteira em IPA, entre colchetes. Palavra fora do dicionário sai entre ⟨ ⟩ (grafia). */
export function lexiconIpa(text: string, lex: IpaLexicon): string {
  const words = lexiconWords(text);
  if (!words.length) return '';
  return `[${words.map((w) => lex[w] ?? lex[w.replace(/[’']/g, '')] ?? `⟨${w}⟩`).join(' ')}]`;
}

/** Problemas de um dicionário de IPA para os textos `texts`. */
export function ipaLexiconProblems(lex: IpaLexicon, texts: string[]): string[] {
  const out: string[] = [];
  for (const [k, v] of Object.entries(lex)) {
    if (k !== k.toLowerCase().normalize('NFC')) out.push(`«${k}»: chave em minúsculas`);
    if (!v || /[A-Z0-9[\]/⟨⟩]/.test(v)) out.push(`«${k}» → «${v}»: só a transcrição, sem colchetes, barras nem maiúsculas`);
    // palavras de 2+ sílabas levam a marca de tônica ˈ
    const syll = (v.match(/[aeiouyæøɛɔœɐəɨʉɪʊʏɑɒʌɜɯɤ]+/g) ?? []).length;
    if (syll > 1 && !v.includes('ˈ')) out.push(`«${k}» → «${v}»: falta a marca de tônica ˈ`);
  }
  const missing = new Set<string>();
  for (const t of texts) for (const w of lexiconWords(t)) if (!lex[w] && !lex[w.replace(/[’']/g, '')]) missing.add(w);
  for (const w of missing) out.push(`falta «${w}»`);
  return out;
}
