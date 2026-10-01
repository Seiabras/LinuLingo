/**
 * Conferência do dicionário de pronúncia do português: cada entrada é a palavra com a tônica
 * marcada e o timbre certo (é ó abertos, ê ô fechados, á aberto, â fechado, í ú), e «ẋ» para
 * x = [ks] (táẋi), «ẍ» para x = [s] (próẍimo). Palavras com til na tônica (irmã, lições) podem
 * ficar sem outra marca.
 */

const MARK: Record<string, string> = { á: 'a', â: 'a', é: 'e', ê: 'e', í: 'i', ó: 'o', ô: 'o', ú: 'u', ẋ: 'x', ẍ: 'x' };
const strip = (s: string) => [...s.normalize('NFC')].map((c) => MARK[c] ?? c).join('');
const STRESS_MARKS = 'áâéêíóôú';

/** Monossílabos átonos que não precisam de entrada (artigos, preposições, pronomes oblíquos). */
export const CLITICS_PT = new Set('o os a as e de do dos da das no nos na nas ao aos à às em um que se me te lhe lhes vos por com sem mas nem ou num numa'.split(' '));

const nuclei = (w: string) => (strip(w).replace(/[ãõ]/g, 'a').match(/[aeiou]+/g) ?? []).length;

/** Palavras (tokens) de um texto em português, em minúsculas, separando o hífen (diz-me). */
export function portugueseWords(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFC')
    .replace(/“[^”]*”/g, ' ')
    .split(/[^\p{L}]+/u)
    .filter((w) => /\p{L}/u.test(w));
}

/** A palavra precisa de entrada no dicionário? (2+ vogais, ou monossílabo tônico com e/o sem acento) */
export function needsPron(w: string): boolean {
  if (CLITICS_PT.has(w)) return false;
  if (nuclei(w) > 1) return true;
  return /[eo]/.test(w) && ![...w].some((c) => STRESS_MARKS.includes(c));
}

/** Problemas do dicionário `pron` para os textos `heads`. */
export function pronunciationProblemsPt(pron: Record<string, string>, heads: string[]): string[] {
  const out: string[] = [];
  for (const [k, v] of Object.entries(pron)) {
    if (k !== k.toLowerCase()) out.push(`“${k}”: chave em minúsculas`);
    if (strip(v) !== strip(k)) out.push(`“${k}” → “${v}”: tirando as marcas, tem de ser a mesma palavra`);
    const marks = [...v].filter((c) => STRESS_MARKS.includes(c)).length;
    if (marks > 1) out.push(`“${k}” → “${v}”: marque só UMA vogal tônica`);
    if (marks === 0 && !/[ãõ]/.test(v) && nuclei(k) > 1) out.push(`“${k}” → “${v}”: marque a vogal tônica`);
  }
  const missing = new Set<string>();
  for (const h of heads) for (const w of portugueseWords(h)) if (needsPron(w) && !pron[w]) missing.add(w);
  for (const w of missing) out.push(`falta “${w}”`);
  return out;
}
