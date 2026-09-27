import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from './idiomas';
import { ARTICLES, readingVocab } from './artigos';
import { coverage, fold } from '@/services/leitura';

/** Quantas das palavras distintas do texto podem ser novas (glossário): no A1 o texto é curto e quase tudo é novo. */
const MAX_NEW = (level: string) => (level.startsWith('A1') ? 0.25 : level.startsWith('A2') ? 0.18 : level.startsWith('B1') ? 0.15 : 0.1);

test('artigos: cada palavra está no cofre até o nível do artigo ou no glossário dele', () => {
  for (const [lang, list] of Object.entries(ARTICLES)) {
    for (const a of list) {
      const c = coverage(a.paragraphs.join(' '), readingVocab(lang), a.level, lang, a.glossary, a.forms);
      assert.deepEqual(c.unknown, [], `${a.id}: palavras fora do nível e fora do glossário`);
      assert.ok(c.distinctNew / c.distinct <= MAX_NEW(a.level), `${a.id}: palavras novas demais (${c.distinctNew} de ${c.distinct} distintas)`);
    }
  }
});

test('artigos: tradução por parágrafo, glossário que aparece no texto, perguntas válidas', () => {
  const ids = new Set<string>();
  for (const [lang, list] of Object.entries(ARTICLES)) {
    assert.ok(PACKS[lang], `${lang} não é idioma do app`);
    for (const a of list) {
      assert.ok(!ids.has(a.id), `id repetido: ${a.id}`);
      ids.add(a.id);
      assert.equal(a.translation.length, a.paragraphs.length, `${a.id}: tradução`);
      const text = fold(a.paragraphs.join(' '));
      for (const [w, t] of a.glossary) assert.ok(w.split(' / ').every((alt) => text.includes(fold(alt))) && t.length > 0, `${a.id}: «${w}» não aparece no texto`);
      assert.ok(a.questions.length >= 2, `${a.id}: poucas perguntas`);
      for (const q of a.questions) assert.ok(q.answer >= 0 && q.answer < q.options.length && new Set(q.options).size === q.options.length, `${a.id}: ${q.q}`);
    }
  }
});
