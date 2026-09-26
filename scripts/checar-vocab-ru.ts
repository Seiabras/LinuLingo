// Confere lotes de vocabulário russo: formato, alfabeto (sem letras latinas parecidas),
// marca de tônica (U+0301) e duplicatas. Uso: [EXISTENTES=lista.txt] npx tsx scripts/checar-vocab-ru.ts arquivo.ts [outro.ts…]
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { stressProblem } from '../src/services/ru-texto';

const LATIN = /[A-Za-z]/;
const POS = ['substantivo', 'verbo', 'adjetivo', 'advérbio', 'pronome', 'preposição', 'conjunção', 'artigo', 'numeral', 'interjeição', 'expressão'];
void main();

async function main() {
  const errors: string[] = [];
  const seen = new Map<string, string>();
  // EXISTENTES=arquivo.txt: palavras que já estão no app (uma por linha, sem tônica) também contam como repetidas
  if (process.env.EXISTENTES) {
    const { readFileSync } = await import('node:fs');
    for (const w of readFileSync(process.env.EXISTENTES, 'utf8').split('\n')) if (w.trim()) seen.set(w.trim().toLowerCase(), 'o app');
  }
  let total = 0;
  for (const f of process.argv.slice(2)) {
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
      if (typeof w !== 'string' || !w.trim()) errors.push(`${tag}: palavra vazia`);
      if (LATIN.test(w) || LATIN.test(ex ?? '')) errors.push(`${tag}: letra latina no russo (${w} / ${ex})`);
      if (!pt) errors.push(`${tag}: sem tradução`);
      if (!POS.includes(pos)) errors.push(`${tag}: classe inválida ${pos}`);
      if (!cat) errors.push(`${tag}: sem categoria`);
      if (emoji !== null && typeof emoji !== 'string') errors.push(`${tag}: emoji deve ser string ou null`);
      if (!ex || !/[а-яё]/i.test(ex)) errors.push(`${tag}: sem frase de exemplo em russo`);
      // substantivos só de plural (де́ньги, часы́) vêm sem gênero e com «(pl.)» na tradução
      if (pos === 'substantivo' && !['m', 'f', 'n'].includes(g ?? '') && !/\(pl\.\)/.test(pt)) errors.push(`${tag}: substantivo sem gênero m/f/n (ou «(pl.)» na tradução)`);
      for (const part of w.split(/[\s-]+/)) {
        const p = stressProblem(part);
        if (p) errors.push(`${tag}: ${p}`);
      }
      for (const part of (ex ?? '').split(/[^\p{L}\p{M}]+/u).filter(Boolean)) {
        const p = stressProblem(part);
        if (p) errors.push(`${tag}: exemplo «${part}»: ${p}`);
      }
      const bare = w.replace(/́/g, '').toLowerCase();
      if (seen.has(bare)) errors.push(`${tag}: repetida (também em ${seen.get(bare)})`);
      else seen.set(bare, f.split('/').pop()!);
    }
  }
  console.log(errors.length ? `❌ ${errors.length} problema(s):\n` + errors.slice(0, 80).join('\n') : `✅ ${total} palavras ok`);
  process.exit(errors.length ? 1 : 0);
}
