import type { LanguagePack } from '../types';

/**
 * Todos os textos EM PORTUGUÊS DE PORTUGAL de um pacote, para conferir a escrita e a pronúncia.
 * Ficam de fora as histórias da variante do Brasil e os textos dos alunos (com erros de propósito).
 */
export function europeanTexts(p: LanguagePack): string[] {
  const out: string[] = [];
  for (const v of p.vocab) out.push(v.word_target, v.example_sentence);
  for (const u of p.units) {
    out.push(...u.card.grammar_examples.map((e) => e[0]));
    for (const l of u.lessons) {
      out.push(...l.words, l.voice.bot, ...l.voice.expected);
      // só a resposta certa: os distratores podem ser brasileiros de propósito
      for (const c of l.cloze) out.push(c.sentence.replace('___', c.answer));
    }
  }
  for (const s of p.stories.filter((x) => !x.variant)) {
    out.push(s.title, ...s.glossary.map((g) => g[0]));
    for (const n of Object.values(s.nodes)) out.push(n.text, ...(n.choices ?? []).map((c) => c.text));
  }
  for (const g of p.grammar) for (const sec of g.sections) out.push(...(sec.examples ?? []).map((e) => e[0]));
  for (const sc of p.scenarios) for (const t of sc.turns) out.push(t.bot, ...t.suggestions);
  for (const c of p.community) out.push(c.reference);
  out.push(...p.journalPrompts.map((j) => j[0]), ...p.shadowing.map((s) => s[0]));
  for (const f of p.falseFriends ?? []) out.push(f.word, f.forThat, f.example[0]);
  return out.filter(Boolean);
}
