// Confere lotes do dicionário de pronúncia do italiano (grafia de dicionário: tônica, è/é, ò/ó, ẓ).
// Uso: [LISTA=palavras.txt] npx tsx scripts/checar-pron-it.ts arquivo.ts   (LISTA: palavras que o lote tem de cobrir)
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { pronunciationProblems } from '../src/services/it-pronuncia';

void main();

async function main() {
  const f = process.argv[2];
  const mod = await import(pathToFileURL(resolve(f)).href);
  const pron = (mod.PRON ?? {}) as Record<string, string>;
  const heads = process.env.LISTA ? readFileSync(process.env.LISTA, 'utf8').split('\n').filter(Boolean) : [];
  const errors = pronunciationProblems(pron, heads);
  console.log(errors.length ? `❌ ${errors.length} problema(s):\n` + errors.slice(0, 80).join('\n') : `✅ ${Object.keys(pron).length} entradas ok`);
  process.exit(errors.length ? 1 : 0);
}
