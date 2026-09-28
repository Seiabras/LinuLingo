// Confere lotes de vocabulário do hauçá, amárico, iorubá, oromo ou igbo: formato, escrita (src/services/texto-africa.ts),
// frase de exemplo e repetidas (entre os arquivos passados e, com EXISTENTES=lista.txt, com as já do app).
// Uso: [EXISTENTES=lista.txt] npx tsx scripts/checar-vocab-africa.ts <ha|am|yo|om|ig> arquivo.ts [outro.ts…]
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { africaTextProblems } from '../src/services/texto-africa';

const LANG = process.argv[2];
const POS = ['substantivo', 'verbo', 'adjetivo', 'advérbio', 'pronome', 'preposição', 'conjunção', 'artigo', 'numeral', 'interjeição', 'expressão', 'partícula', 'contador'];
const SCRIPT = LANG === 'am' ? /[\u1200-\u137f]/ : /\p{L}/u;
/** Idiomas com gênero gramatical (masculino e feminino). */
const GENDERED = ['ha', 'am', 'om'];
void main();

async function main() {
  const errors: string[] = [];
  const seen = new Map<string, string>();
  if (process.env.EXISTENTES) {
    const { readFileSync } = await import('node:fs');
    for (const w of readFileSync(process.env.EXISTENTES, 'utf8').split('\n')) if (w.trim()) seen.set(w.trim(), 'o app');
  }
  let total = 0;
  for (const f of process.argv.slice(3)) {
    const mod = await import(pathToFileURL(resolve(f)).href);
    const rows = (mod.ROWS ?? mod.default) as unknown[][];
    if (!Array.isArray(rows)) {
      errors.push(`${f}: exporte const ROWS`);
      continue;
    }
    for (const r of rows) {
      total++;
      const [w, pt, pos, cat, emoji, ex, g] = r as [string, string, string, string, string | null, string, string?];
      const tag = `${f.split('/').pop()}: «${w}»`;
      if (typeof w !== 'string' || !w.trim() || w !== w.trim()) errors.push(`${tag}: palavra vazia ou com espaço nas pontas`);
      else if (!SCRIPT.test(w)) errors.push(`${tag}: não está na escrita do idioma`);
      for (const p of [...africaTextProblems(LANG, w), ...africaTextProblems(LANG, ex ?? '')]) errors.push(`${tag}: ${p}`);
      if (!pt || /^[\s(]/.test(pt)) errors.push(`${tag}: tradução vazia ou começando com parêntese`);
      if (!POS.includes(pos)) errors.push(`${tag}: classe inválida ${pos}`);
      if (!cat) errors.push(`${tag}: sem categoria`);
      if (emoji !== null && typeof emoji !== 'string') errors.push(`${tag}: emoji deve ser string ou null`);
      if (!ex || !SCRIPT.test(ex) || ex.replace(/\s/g, '').length < 4) errors.push(`${tag}: sem frase de exemplo no idioma`);
      else if (!/[.!?።]$/.test(ex)) errors.push(`${tag}: frase de exemplo sem pontuação no fim`);
      if (GENDERED.includes(LANG) && pos === 'substantivo' && !['m', 'f'].includes(g ?? '') && !/\(pl\.\)/.test(pt)) errors.push(`${tag}: substantivo sem gênero m/f`);
      if (!GENDERED.includes(LANG) && g) errors.push(`${tag}: ${LANG} não tem gênero (tire o 7º campo)`);
      if (seen.has(w)) errors.push(`${tag}: repetida (também em ${seen.get(w)})`);
      else seen.set(w, f.split('/').pop()!);
    }
  }
  console.log(errors.length ? `❌ ${errors.length} problema(s):\n` + errors.slice(0, 80).join('\n') : `✅ ${total} palavras ok`);
  process.exit(errors.length ? 1 : 0);
}
