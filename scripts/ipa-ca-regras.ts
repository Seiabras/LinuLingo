// Lê palavras (uma por linha) na entrada e escreve o IPA das regras do catalão, sem dicionário.
import { readFileSync } from 'node:fs';
import { wordToIpaCa } from '../src/services/ipa-ca';
for (const w of readFileSync(0, 'utf8').split('\n')) if (w.trim()) console.log(wordToIpaCa(w.trim(), {}));
