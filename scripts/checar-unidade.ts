// Confere um arquivo de unidades novas antes de entrar na trilha.
// Uso: npx tsx scripts/checar-unidade.ts caminho/arquivo.ts
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { ROMENO } from '../src/data/ro';
import type { UnitSeed } from '../src/data/types';
import { SUBLEVELS } from '../src/types';

void main();

async function main() {
  const file = resolve(process.argv[2]);
  const mod = await import(pathToFileURL(file).href);
  const units: UnitSeed[] = (Object.values(mod).flat() as UnitSeed[]).filter((u) => u && typeof u === 'object' && 'lessons' in u);
  const vocab = new Map(ROMENO.vocab.map((v) => [v.word_target, v]));
  const errors: string[] = [];
  const err = (m: string) => errors.push(m);
  for (const u of units) {
    if (!SUBLEVELS.includes(u.level)) err(`${u.id}: level inválido ${u.level}`);
    if (u.cefr !== u.level.slice(0, 2)) err(`${u.id}: cefr deve ser ${u.level.slice(0, 2)}`);
    const c = u.card;
    for (const k of ['id', 'title', 'emoji', 'history', 'culture_tip', 'grammar_why'] as const) if (!c[k]) err(`${u.id}: card sem ${k}`);
    if (c.grammar_examples.length < 3) err(`${u.id}: card com menos de 3 exemplos`);
    if (u.lessons.length !== 4) err(`${u.id}: precisa de 4 lições (3 + prova)`);
    if (u.lessons.at(-1)?.kind !== 'prova') err(`${u.id}: a última lição deve ser a prova`);
    const unitWords = new Set<string>();
    for (const l of u.lessons) {
      if (!l.voice?.expected?.length) err(`${l.id}: voz sem respostas`);
      if (!l.communityPrompt) err(`${l.id}: sem communityPrompt`);
      if (l.kind === 'prova') continue;
      if (l.words.length !== 6) err(`${l.id}: precisa de 6 palavras`);
      if (l.cloze.length !== 3) err(`${l.id}: precisa de 3 lacunas`);
      for (const w of l.words) {
        if (!vocab.has(w)) err(`${l.id}: «${w}» não está no vocabulário`);
        else if (!vocab.get(w)!.emoji) err(`${l.id}: «${w}» não tem emoji`);
        if (unitWords.has(w)) err(`${l.id}: «${w}» repetida na unidade`);
        unitWords.add(w);
      }
      for (const q of l.cloze) {
        if (!q.sentence.includes('___')) err(`${l.id}: lacuna sem ___: ${q.sentence}`);
        if (!q.options.includes(q.answer)) err(`${l.id}: gabarito fora das opções: ${q.sentence}`);
        if (new Set(q.options).size !== q.options.length) err(`${l.id}: opções repetidas`);
      }
    }
    const text = JSON.stringify(u);
    if (/[şţŞŢ]/.test(text)) err(`${u.id}: ş/ţ com cedilha (use ș ț com vírgula)`);
  }
  console.log(errors.length ? `❌ ${errors.length} problema(s):\n` + errors.join('\n') : `✅ ${units.length} unidade(s) ok`);
  process.exit(errors.length ? 1 : 0);
}
