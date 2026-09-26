/** Regras de escrita do russo usadas nos verificadores e testes de conteúdo. */

const VOWELS = /[аеёиоуыэюяАЕЁИОУЫЭЮЯ]/g;
const ENCLITICS = new Set(['нибудь', 'либо', 'таки']);

/** Palavra com 2+ vogais precisa de exatamente uma tônica marcada (U+0301) ou de um ё. */
export function stressProblem(word: string): string | null {
  if (ENCLITICS.has(word.toLowerCase())) return null;
  const n = (word.match(VOWELS) ?? []).length;
  const marks = (word.match(/́/g) ?? []).length;
  if (/[ёЁ]/.test(word)) return marks ? 'ё já é tônico: tire a marca' : null;
  if (n <= 1) return marks > 1 ? 'mais de uma marca' : null;
  if (marks !== 1) return marks ? 'mais de uma marca de tônica' : 'sem marca de tônica';
  if (!/[аеиоуыэюяАЕИОУЫЭЮЯ]́/.test(word)) return 'marca de tônica fora de uma vogal';
  return null;
}

/** Problemas de escrita num texto: letra latina misturada numa palavra cirílica e tônica. */
export function russianTextProblems(text: string): string[] {
  const out: string[] = [];
  for (const tok of text.match(/[\p{L}\p{M}]+/gu) ?? []) {
    const cyr = /[Ѐ-ӿ]/.test(tok);
    if (!cyr) continue;
    if (/[A-Za-z]/.test(tok)) out.push(`«${tok}»: letra latina misturada no cirílico`);
    // siglas em maiúsculas (СССР, МГУ) e partículas átonas coladas por hífen (что-нибудь, кто-либо) não levam marca
    if (tok === tok.toUpperCase() && tok.length <= 5) continue;
    if (ENCLITICS.has(tok.toLowerCase())) continue;
    const p = stressProblem(tok);
    if (p) out.push(`«${tok}»: ${p}`);
  }
  return out;
}
