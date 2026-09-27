// Confere a cobertura de vocabulário de cada artigo no subnível dele: as palavras fora do cofre (até o
// corte do nível) e fora do glossário. Uso: npx tsx scripts/checar-artigos.ts [idioma]
import { PACKS } from '../src/data/idiomas';
import { ARTICLES, readingVocab } from '../src/data/artigos';
import { coverage } from '../src/services/leitura';
const only = process.argv[2];
for (const [lang, list] of Object.entries(ARTICLES)) {
  if (only && lang !== only) continue;
  for (const a of list) {
    const c = coverage(a.paragraphs.join(' '), readingVocab(lang), a.level, lang, a.glossary, a.forms);
    const pct = Math.round((c.distinctNew / Math.max(1, c.distinct)) * 100);
    console.log(`${a.id} ${a.level}: ${c.total} palavras (${c.distinct} distintas), ${c.distinctNew} novas no glossário (${pct}%)${c.unknown.length ? ` · FORA: ${c.unknown.join(', ')}` : ' ✓'}`);
  }
}
