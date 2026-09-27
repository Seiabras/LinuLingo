// Confere lotes do dicionário de pronúncia do português (tônica e timbre: é/ê, ó/ô; ẋ = [ks], ẍ = [s]).
// Uso: [LISTA=palavras.txt] npx tsx scripts/checar-pron-pt.ts arquivo.ts   (LISTA: palavras que o lote tem de cobrir)
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { readFileSync } from 'node:fs';
import { pronunciationProblemsPt } from '../src/services/pt-pronuncia';

void main();

async function main() {
  const f = process.argv[2];
  const mod = await import(pathToFileURL(resolve(f)).href);
  const pron = (mod.PRON ?? {}) as Record<string, string>;
  const heads = process.env.LISTA ? readFileSync(process.env.LISTA, 'utf8').split('\n').filter(Boolean) : [];
  const errors = pronunciationProblemsPt(pron, heads);
  console.log(errors.length ? `❌ ${errors.length} problema(s):\n` + errors.slice(0, 80).join('\n') : `✅ ${Object.keys(pron).length} entradas ok`);
  process.exit(errors.length ? 1 : 0);
}
