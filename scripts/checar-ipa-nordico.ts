// Confere lotes do dicionário de IPA de um idioma nórdico: formato da transcrição e cobertura.
// Uso: [LISTA=palavras.txt] npx tsx scripts/checar-ipa-nordico.ts <idioma> arquivo.ts   (LISTA: palavras que o lote tem de cobrir)
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { ipaLexiconProblems } from '../src/services/ipa-lexicon';

void main();

async function main() {
  const f = process.argv[3];
  const mod = await import(pathToFileURL(resolve(f)).href);
  const ipa = (mod.IPA ?? {}) as Record<string, string>;
  const words = process.env.LISTA ? readFileSync(process.env.LISTA, 'utf8').split('\n').filter(Boolean) : [];
  const errors = ipaLexiconProblems(ipa, words);
  console.log(errors.length ? `❌ ${errors.length} problema(s):\n` + errors.slice(0, 80).join('\n') : `✅ ${Object.keys(ipa).length} entradas ok`);
  process.exit(errors.length ? 1 : 0);
}
