/**
 * Conferência do dicionário de pronúncia do italiano: cada entrada é a palavra com a grafia
 * dos dicionários (tônica marcada, è ò abertos, é ó fechados, ẓ para o z sonoro).
 */

const MARK: Record<string, string> = { à: 'a', á: 'a', è: 'e', é: 'e', ì: 'i', í: 'i', ò: 'o', ó: 'o', ù: 'u', ú: 'u', ẓ: 'z' };
const strip = (s: string) => [...s].map((c) => MARK[c] ?? c).join('');

/** Quantas vogais que podem ser tônicas a palavra tem (grupos de vogais contam por alto). */
const vowelGroups = (w: string) => (strip(w).match(/[aeiou]+/g) ?? []).length;

/** Palavras (tokens) de um texto italiano, em minúsculas, sem artigo elidido. */
export function italianWords(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^\p{L}’']+/u)
    .map((w) => w.replace(/^['’]+|['’]+$/g, '').replace(/^(l|dell|all|dall|nell|sull|coll|quell|bell|sant|un|nessun|c|d|m|t|s|v|n)[’']/, ''))
    .filter((w) => /\p{L}/u.test(w));
}

/** Problemas do dicionário `pron` para as entradas `heads` (palavras ou expressões). */
export function pronunciationProblems(pron: Record<string, string>, heads: string[]): string[] {
  const out: string[] = [];
  for (const [k, v] of Object.entries(pron)) {
    if (k !== k.toLowerCase()) out.push(`“${k}”: chave em minúsculas`);
    if (strip(v) !== strip(k)) out.push(`“${k}” → “${v}”: tirando os acentos, tem de ser a mesma palavra`);
    const marks = [...v].filter((c) => 'àáèéìíòóùú'.includes(c)).length;
    if (vowelGroups(k) > 1 && marks !== 1) out.push(`“${k}” → “${v}”: marque exatamente UMA vogal tônica`);
    if (marks > 1) out.push(`“${k}” → “${v}”: mais de um acento`);
    if (/[áíú]/.test(v)) out.push(`“${k}” → “${v}”: a, i, u tônicos levam acento grave (à ì ù)`);
  }
  for (const h of heads) for (const w of italianWords(h)) if (vowelGroups(w) > 1 && !pron[w]) out.push(`falta “${w}”`);
  return out;
}
