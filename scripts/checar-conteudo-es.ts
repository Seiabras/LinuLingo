// Confere arquivos de conteúdo espanhol antes de entrarem no app: unidades da trilha, tópicos
// de gramática, histórias e conversas. Em todo texto espanhol: nada de portunhol (ã õ ç…) e
// perguntas/exclamações com ¿ ¡.
// Uso: npx tsx scripts/checar-conteudo-es.ts arquivo.ts [outro.ts…]
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { VOCAB_ES } from '../src/data/es/vocabulario';
import { SUBLEVELS } from '../src/types';
import { reachable } from '../src/services/stories';
import { spanishTextProblems } from '../src/services/es-texto';
import type { GrammarTopic, StorySeed, UnitSeed } from '../src/data/types';

const vocab = new Map(VOCAB_ES.map((v) => [v.word_target, v]));
const LEVELS: readonly string[] = SUBLEVELS;

/** Campos em português (não se checa a tônica russa neles). */
const PT_KEYS = new Set(['translation', 'botTranslation', 'hint', 'communityPrompt', 'title', 'summary', 'cultural_context', 'history', 'culture_tip', 'grammar_why', 'message', 'wrong', 'explanation', 'question', 'heading', 'description', 'persona', 'story', 'evolution_note', 'origin_language', 'prompt', 'author_name']);

void main();

async function main() {
  const errors: string[] = [];
  const err = (m: string) => errors.push(m);
  let count = 0;
  for (const f of process.argv.slice(2)) {
    const mod = await import(pathToFileURL(resolve(f)).href);
    const items = Object.values(mod).flat() as Record<string, unknown>[];
    for (const it of items) {
      if (!it || typeof it !== 'object') continue;
      count++;
      const id = String(it.id ?? '?');
      if ('lessons' in it) checkUnit(it as unknown as UnitSeed, err);
      else if ('nodes' in it) checkStory(it as unknown as StorySeed, err);
      else if ('quiz' in it) checkGrammar(it as unknown as GrammarTopic, err);
      if ('quiz' in it) {
        // gramática: o texto explicativo é português; exemplos, tabelas e opções do quiz são russo
        const g = it as unknown as GrammarTopic;
        walk(g.sections.map((x) => x.text ?? ''), id, err, 'text', true);
        walk(g.sections.map((x) => x.examples ?? []), id, err, 'examples');
        // opções e resposta à parte: um quiz de 3 opções pareceria um trio [idioma, português, …] e a 2ª opção escaparia
        // quizzes com opções em português (ex.: «O que significa cajón?» → gaveta / caixão) ficam de fora
        const quizEs = g.quiz.filter((q) => !q.options.some((o) => /[ãõçâêôà]/i.test(o)));
        walk(quizEs.map((q) => q.options), id, err, 'options');
        walk(quizEs.map((q) => q.answer), id, err, 'options');
      } else walk(it, id, err);
    }
  }
  console.log(errors.length ? `❌ ${errors.length} problema(s):\n` + errors.slice(0, 100).join('\n') : `✅ ${count} item(ns) ok`);
  process.exit(errors.length ? 1 : 0);
}

/** Percorre os textos: nos campos em português só procura letra latina dentro de palavra cirílica. */
function walk(v: unknown, path: string, err: (m: string) => void, key = '', ptContext = false) {
  if (typeof v === 'string') {
    const pt = ptContext || PT_KEYS.has(key);
    for (const p of spanishTextProblems(v)) {
      // textos em português podem ter ã, ç…: só se confere o espanhol
      if (pt) continue;
      err(`${path}.${key}: ${p}`);
    }
    return;
  }
  if (Array.isArray(v)) {
    // pares [russo, português] (glossário, exemplos): o 2º é português
    // pares [russo, português] e trios [letra, som em português, exemplo]
    const strs = v.every((x) => typeof x === 'string');
    const ptIndex = strs && (v.length === 2 || v.length === 3) && key !== 'options' && key !== 'keywords' && key !== 'suggestions' && key !== 'expected' && key !== 'words' ? 1 : -1;
    v.forEach((x, i) => walk(x, `${path}[${i}]`, err, key, ptContext || i === ptIndex));
    return;
  }
  if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) walk(x, path, err, k, ptContext);
}

function checkUnit(u: UnitSeed, err: (m: string) => void) {
  if (!LEVELS.includes(u.level)) err(`${u.id}: level inválido ${u.level}`);
  if (u.cefr !== u.level.slice(0, 2)) err(`${u.id}: cefr deve ser ${u.level.slice(0, 2)}`);
  if (u.lessons.length !== 4 || u.lessons.at(-1)?.kind !== 'prova') err(`${u.id}: precisa de 4 lições, a última é a prova`);
  if ((u.card.grammar_examples ?? []).length < 3) err(`${u.id}: card com menos de 3 exemplos`);
  const seen = new Set<string>();
  for (const l of u.lessons) {
    if (!l.voice?.expected?.length) err(`${l.id}: voz sem respostas`);
    if (l.kind === 'prova') continue;
    if (l.words.length !== 6) err(`${l.id}: precisa de 6 palavras`);
    if (l.cloze.length !== 3) err(`${l.id}: precisa de 3 lacunas`);
    for (const w of l.words) {
      if (!vocab.has(w)) err(`${l.id}: «${w}» não está no vocabulário (copie exatamente, com os acentos)`);
      else if (!vocab.get(w)!.emoji) err(`${l.id}: «${w}» não tem emoji`);
      if (seen.has(w)) err(`${l.id}: «${w}» repetida na unidade`);
      seen.add(w);
    }
    for (const q of l.cloze) {
      if (!q.sentence.includes('___')) err(`${l.id}: lacuna sem ___`);
      if (!q.options.includes(q.answer)) err(`${l.id}: gabarito fora das opções (${q.sentence})`);
      if (new Set(q.options).size !== q.options.length) err(`${l.id}: opções repetidas`);
    }
  }
}

function checkStory(st: StorySeed, err: (m: string) => void) {
  if (!LEVELS.includes(st.level)) err(`${st.id}: level inválido`);
  if (!st.nodes[st.start]) err(`${st.id}: início inexistente`);
  const seen = reachable(st);
  let endings = 0;
  let good = 0;
  let wrongs = 0;
  for (const [nid, n] of Object.entries(st.nodes)) {
    if (!seen.has(nid)) err(`${st.id}: nó «${nid}» inalcançável`);
    if (n.ending) {
      endings++;
      if (n.ending.tone === 'bom') good++;
      if (n.choices?.length) err(`${st.id}.${nid}: final com escolhas`);
      continue;
    }
    if (!n.choices?.some((c) => c.next)) err(`${st.id}.${nid}: beco sem saída`);
    for (const c of n.choices ?? []) {
      if (!!c.next === !!c.wrong) err(`${st.id}.${nid}: escolha precisa de next OU wrong`);
      if (c.next && !st.nodes[c.next]) err(`${st.id}.${nid}: next «${c.next}» não existe`);
      if (c.wrong) wrongs++;
    }
  }
  if (endings < 2 || good < 1) err(`${st.id}: precisa de 2+ finais, 1+ bom`);
  if (wrongs < 1 || wrongs > 3) err(`${st.id}: precisa de 1 a 3 escolhas «wrong» (tem ${wrongs})`);
}

function checkGrammar(g: GrammarTopic, err: (m: string) => void) {
  if (!LEVELS.includes(g.level)) err(`${g.id}: level inválido`);
  if (!g.sections.length) err(`${g.id}: sem seções`);
  if (g.quiz.length < 3) err(`${g.id}: quiz com menos de 3 perguntas`);
  for (const q of g.quiz) {
    if (!q.options.includes(q.answer)) err(`${g.id}: resposta fora das opções (${q.question})`);
    if (new Set(q.options).size !== q.options.length) err(`${g.id}: opções repetidas`);
  }
}
