// Mostra a IPA que as regras dão para cada palavra de um lote de vocabulário francês (entradas e
// exemplos), para conferir e corrigir as erradas no IPA do lote.
// Uso: npx tsx scripts/ipa-fr-amostra.ts lote.ts   → linhas «palavra<TAB>ipa pelas regras»
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { wordToIpaFr } from '../src/services/ipa-fr';

void main();

async function main() {
  const mod = await import(pathToFileURL(resolve(process.argv[2])).href);
  const rows = (mod.ROWS ?? []) as string[][];
  const verbs = new Set(rows.filter((r) => r[2] === 'verbo').map((r) => r[0].toLowerCase()));
  const fix = (mod.IPA ?? {}) as Record<string, string>;
  const seen = new Set<string>();
  for (const r of rows)
    for (const t of `${r[0]} ${r[5]}`.split(/[^\p{L}'-]+/u)) {
      for (const part of t.toLowerCase().split("'").filter((x) => x.length > 1)) {
        const w = part.replace(/-/g, '');
        if (!w || seen.has(w)) continue;
        seen.add(w);
        // o «-ent» de verbo sai mudo no app quando o infinitivo está no vocabulário: mostra as duas leituras
        const asVerb = /ent$/.test(w) ? wordToIpaFr(w, new Set([w.slice(0, -2) + 'r', w.slice(0, -3) + 'ir', w.slice(0, -3) + 're'])) : '';
        const ipa = wordToIpaFr(w, verbs);
        console.log(`${w}\t${ipa}${asVerb && asVerb !== ipa ? `\t(como verbo, automático no app: ${asVerb})` : ''}${fix[w] ? `\t(corrigida: ${fix[w]})` : ''}`);
      }
    }
}
