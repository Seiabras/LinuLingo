// Confere arquivos de conteúdo do japonês ou do coreano antes de entrarem no app: unidades da trilha,
// tópicos de gramática, histórias e conversas. No texto do idioma: números por extenso, sem letra latina,
// pontuação da escrita certa (src/services/texto-cjk.ts).
// Uso: npx tsx scripts/checar-conteudo-cjk.ts <idioma> arquivo.ts [outro.ts…]
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';
import { SUBLEVELS } from '../src/types';
import { reachable } from '../src/services/stories';
import { cjkTextProblems } from '../src/services/texto-cjk';

const LANG = process.argv[2];
const textProblems = (t: string) => cjkTextProblems(LANG, t);
import { existsSync } from 'node:fs';
import type { GrammarTopic, StorySeed, UnitSeed } from '../src/data/types';

// o vocabulário pode não existir ainda (rascunhos escritos antes da junção): VOCAB_TSV=lista.tsv o substitui
let vocab = new Map<string, { emoji: string | null }>();
const LEVELS: readonly string[] = SUBLEVELS;

/** Campos em português (não se checa a tônica russa neles). */
const PT_KEYS = new Set(['translation', 'note', 'tip', 'botTranslation', 'hint', 'communityPrompt', 'title', 'summary', 'cultural_context', 'history', 'culture_tip', 'grammar_why', 'message', 'wrong', 'explanation', 'question', 'heading', 'description', 'persona', 'story', 'evolution_note', 'origin_language', 'prompt', 'author_name', 'means', 'looksLike', 'name', 'pronunciation', 'cognates', 'root_word', 'recognition', 'debated', 'family', 'summary']);

void main();

async function main() {
  vocab = await loadVocab();
  const errors: string[] = [];
  const err = (m: string) => errors.push(m);
  let count = 0;
  for (const f of process.argv.slice(3)) {
    const mod = await import(pathToFileURL(resolve(f)).href);
    const items = Object.values(mod).flat() as Record<string, unknown>[];
    for (const it of items) {
      if (!it || typeof it !== 'object') continue;
      count++;
      const id = String(it.id ?? '?');
      // variantes: as histórias ficam dentro delas
      if ('stories' in it && Array.isArray(it.stories)) for (const st of it.stories as StorySeed[]) checkStory(st, err);
      if ('lessons' in it) checkUnit(it as unknown as UnitSeed, err);
      else if ('nodes' in it) checkStory(it as unknown as StorySeed, err);
      // sotaques e dialetos: o texto de dialeto tem grafia própria (friulano «stâstu»); não se confere como o padrão
      else if ('kind' in it && 'features' in it) continue;
      else if ('area' in it) {
        // linguística: o quiz costuma ser em português; confere só os exemplos (no idioma)
        const a = it as unknown as { area: string; sections: GrammarTopic['sections'] };
        walk(a.sections.map((x) => x.examples ?? []), a.area, err, 'examples');
        continue;
      } else if ('quiz' in it) checkGrammar(it as unknown as GrammarTopic, err);
      if ('quiz' in it) {
        // gramática: o texto explicativo é português; exemplos, tabelas e opções do quiz são do idioma
        const g = it as unknown as GrammarTopic;
        walk(g.sections.map((x) => x.text ?? ''), id, err, 'text', true);
        walk(g.sections.map((x) => x.examples ?? []), id, err, 'examples');
        walk(g.quiz.map((q) => q.options), id, err, 'options');
        walk(g.quiz.map((q) => q.answer), id, err, 'options');
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
    for (const p of textProblems(v)) {
      // textos em português podem ter ã, ç…: só se confere o idioma
      if (pt) continue;
      err(`${path}.${key}: ${p}`);
    }
    return;
  }
  if (Array.isArray(v)) {
    // pares [idioma, português] e trios [letra, som em português, exemplo]
    const strs = v.every((x) => typeof x === 'string');
    // vocabulário das variantes: [padrão, variante, português, nota]
    if (strs && key === 'vocab' && v.length >= 3) {
      v.forEach((x, i) => walk(x, `${path}[${i}]`, err, key, ptContext || i >= 2));
      return;
    }
    const ptIndex = strs && (v.length === 2 || v.length === 3) && key !== 'options' && key !== 'keywords' && key !== 'suggestions' && key !== 'expected' && !(key === 'words' && v.length !== 2) ? 1 : -1;
    v.forEach((x, i) => walk(x, `${path}[${i}]`, err, key, ptContext || i === ptIndex));
    return;
  }
  // o guia de letras mostra grafias soltas de propósito («è × é»)
  if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (k !== 'character_guide') walk(x, path, err, k, ptContext || PT_KEYS.has(key));
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

async function loadVocab() {
  if (process.env.VOCAB_TSV) {
    const { readFileSync } = await import('node:fs');
    const rows = readFileSync(process.env.VOCAB_TSV, 'utf8').split('\n').filter(Boolean).map((l) => l.split('\t'));
    return new Map(rows.map((r) => [r[0], { emoji: r[3] && r[3] !== '-' ? r[3] : null }]));
  }
  const path = resolve(__dirname, `../src/data/${LANG}/vocabulario.ts`);
  if (!existsSync(path)) return new Map();
  const mod = await import(pathToFileURL(path).href);
  const vocab = Object.values(mod).find((x) => Array.isArray(x) && (x as { word_target?: string }[])[0]?.word_target) as { word_target: string; emoji: string | null }[];
  // pacote sem vocabulário ainda (arquivos vazios): nenhuma palavra conhecida
  if (!vocab) return new Map();
  return new Map(vocab.map((v: { word_target: string; emoji: string | null }) => [v.word_target, v]));
}
