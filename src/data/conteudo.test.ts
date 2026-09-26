/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS, LANGUAGES, groupByLineage } from './idiomas';
import { endingIds, reachable } from '../services/stories';
import { SUBLEVELS } from '../types';

for (const pack of Object.values(PACKS)) {
  const words = new Set(pack.vocab.map((v) => v.word_target));

  test(`${pack.code}: vocabulário sem duplicatas e com ids únicos`, () => {
    assert.equal(words.size, pack.vocab.length);
    assert.equal(new Set(pack.vocab.map((v) => v.id)).size, pack.vocab.length);
  });

  test(`${pack.code}: palavras das lições existem e têm emoji para a imersão`, () => {
    for (const u of pack.units)
      for (const l of u.lessons)
        for (const w of l.words) {
          assert.ok(words.has(w), `${l.id}: "${w}" não está no vocabulário`);
          assert.ok(pack.vocab.find((v) => v.word_target === w)?.emoji, `${l.id}: "${w}" sem emoji`);
        }
  });

  test(`${pack.code}: cloze tem lacuna, gabarito nas opções e opções distintas`, () => {
    for (const u of pack.units)
      for (const l of u.lessons)
        for (const c of l.cloze) {
          assert.ok(c.sentence.includes('___'), `${l.id}: sem lacuna em "${c.sentence}"`);
          assert.ok(c.options.includes(c.answer), `${l.id}: gabarito fora das opções`);
          assert.equal(new Set(c.options).size, c.options.length);
        }
  });

  test(`${pack.code}: cada unidade tem lições, uma prova no fim e ids únicos`, () => {
    const ids = pack.units.flatMap((u) => u.lessons.map((l) => l.id));
    assert.equal(new Set(ids).size, ids.length);
    for (const u of pack.units) {
      assert.equal(u.lessons.at(-1)?.kind, 'prova');
      for (const l of u.lessons.filter((x) => x.kind !== 'prova')) {
        assert.equal(l.words.length, 6, l.id);
        assert.equal(l.cloze.length, 3, l.id);
      }
      assert.ok(u.lessons.every((l) => l.voice.expected.length > 0));
    }
  });

  test(`${pack.code}: etimologia aponta para palavras do vocabulário`, () => {
    for (const e of pack.etymology) assert.ok(words.has(e.word), `etimologia de "${e.word}" sem palavra`);
  });

  test(`${pack.code}: histórias sem becos sem saída, com todo nó alcançável`, () => {
    for (const st of pack.stories) {
      assert.ok(st.nodes[st.start], `${st.id}: início inexistente`);
      const seen = reachable(st);
      for (const [id, n] of Object.entries(st.nodes)) {
        assert.ok(seen.has(id), `${st.id}/${id} inalcançável`);
        assert.ok(n.ending || n.choices?.some((c) => c.next), `${st.id}/${id} sem saída`);
        assert.ok(!(n.ending && n.choices?.length), `${st.id}/${id} é final e tem escolhas`);
        for (const c of n.choices ?? []) {
          assert.ok(!!c.next !== !!c.wrong, `${st.id}/${id}: escolha precisa de next OU wrong`);
          if (c.next) assert.ok(st.nodes[c.next], `${st.id}/${id} → ${c.next} inexistente`);
        }
      }
      assert.ok(endingIds(st).some((e) => st.nodes[e].ending?.tone === 'bom'), `${st.id} sem final bom`);
    }
  });

  test(`${pack.code}: gramática com ids únicos, quiz consistente e subnível válido`, () => {
    const ids = pack.grammar.map((g) => g.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const g of pack.grammar) {
      assert.ok((SUBLEVELS as readonly string[]).includes(g.level), `${g.id}: nível ${g.level}`);
      assert.ok(g.sections.length > 0, g.id);
      for (const q of g.quiz) assert.ok(q.options.includes(q.answer), `${g.id}: «${q.answer}» fora das opções`);
      for (const sec of g.sections) if (sec.table) for (const r of sec.table.rows) assert.equal(r.length, sec.table.head.length, `${g.id}: tabela com colunas desiguais`);
    }
  });

  test(`${pack.code}: histórias com subnível válido`, () => {
    for (const st of pack.stories) assert.ok((SUBLEVELS as readonly string[]).includes(st.level), `${st.id}: ${st.level}`);
    assert.equal(new Set(pack.stories.map((s) => s.id)).size, pack.stories.length, 'ids repetidos');
    assert.equal(new Set(pack.stories.map((s) => s.title)).size, pack.stories.length, 'títulos repetidos');
    for (const lv of SUBLEVELS) assert.ok(pack.stories.filter((s) => s.level === lv).length >= 3, `menos de 3 histórias em ${lv}`);
  });

  test(`${pack.code}: cenários têm turnos com sugestões`, () => {
    for (const s of pack.scenarios) for (const t of s.turns) assert.ok(t.suggestions.length && t.keywords.length, s.id);
  });
}

test('seletor agrupa por família e ramo', () => {
  const g = groupByLineage(LANGUAGES);
  assert.deepEqual(Object.keys(g).sort(), ['Coreânico', 'Indo-europeu', 'Japônico', 'Urálico']);
  assert.deepEqual(g['Indo-europeu']['Itálico'].map((l) => l.code), ['ro', 'es']);
  assert.deepEqual(g['Urálico']['Fínico'].map((l) => l.code).sort(), ['et', 'fi']);
});
