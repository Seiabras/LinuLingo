/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS, LANGUAGES, groupByLineage } from './idiomas';
import { endingIds, reachable } from '../services/stories';
import { SUBLEVELS } from '../types';
import type { LanguagePack } from './types';

import { WORLD } from './mapa-mundi';
import { ISO_3166_2 } from './iso-3166-2';
import { MAP_LANGUAGES } from './onde-se-fala';
import { FORMER_COUNTRIES } from './iso-3166-3';

/** Os subníveis que o pacote já tem: todos, ou só até `incomplete.until` nos idiomas em construção. */
const levelsOf = (pack: LanguagePack) =>
  pack.incomplete ? SUBLEVELS.slice(0, SUBLEVELS.indexOf(pack.incomplete.until) + 1) : [...SUBLEVELS];

const STORIES_PER_LEVEL: Record<string, number> = { ro: 3, ru: 3, lt: 3, ja: 3, ko: 3 };

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
      assert.ok(
        endingIds(st).some((e) => st.nodes[e].ending?.tone === 'bom'),
        `${st.id} sem final bom`,
      );
    }
  });

  test(`${pack.code}: gramática com ids únicos, quiz consistente e subnível válido`, () => {
    const ids = pack.grammar.map((g) => g.id);
    assert.equal(new Set(ids).size, ids.length);
    for (const g of pack.grammar) {
      assert.ok((SUBLEVELS as readonly string[]).includes(g.level), `${g.id}: nível ${g.level}`);
      assert.ok(g.sections.length > 0, g.id);
      for (const q of g.quiz) assert.ok(q.options.includes(q.answer), `${g.id}: «${q.answer}» fora das opções`);
      for (const sec of g.sections)
        if (sec.table) for (const r of sec.table.rows) assert.equal(r.length, sec.table.head.length, `${g.id}: tabela com colunas desiguais`);
    }
  });

  test(`${pack.code}: histórias com subnível válido`, () => {
    for (const st of pack.stories) assert.ok((SUBLEVELS as readonly string[]).includes(st.level), `${st.id}: ${st.level}`);
    assert.equal(new Set(pack.stories.map((s) => s.id)).size, pack.stories.length, 'ids repetidos');
    assert.equal(new Set(pack.stories.map((s) => s.title)).size, pack.stories.length, 'títulos repetidos');
    // meta: 3 histórias por subnível
    const min = STORIES_PER_LEVEL[pack.code] ?? 1;
    for (const lv of levelsOf(pack)) assert.ok(pack.stories.filter((s) => s.level === lv).length >= min, `menos de ${min} histórias em ${lv}`);
  });

  test(`${pack.code}: cenários têm turnos com sugestões`, () => {
    for (const s of pack.scenarios) for (const t of s.turns) assert.ok(t.suggestions.length && t.keywords.length, s.id);
  });
}

test('mapa: códigos ISO 3166-1/2 usados em «onde se fala» existem', () => {
  const countries = new Set(WORLD.map((c) => c.iso));
  const subs = new Set(
    Object.values(ISO_3166_2)
      .flat()
      .map(([code]) => code),
  );
  assert.ok(WORLD.length >= 249, 'mapa sem todos os países da ISO 3166-1');
  for (const l of MAP_LANGUAGES)
    for (const c of l.countries) {
      assert.ok(countries.has(c.iso), `${l.code}: país ${c.iso} fora do mapa`);
      for (const sd of c.subdivisions ?? []) assert.ok(subs.has(sd), `${l.code}: subdivisão ${sd} não existe`);
    }
});

test('ISO 3166-3: os 31 códigos oficiais e sucessores que existem no mapa', async () => {
  const { readFileSync } = await import('node:fs');
  const official = JSON.parse(readFileSync('/usr/share/iso-codes/json/iso_3166-3.json', 'utf8'))
    ['3166-3'].map((x: { alpha_4: string }) => x.alpha_4)
    .sort();
  assert.deepEqual(FORMER_COUNTRIES.map((f) => f.alpha4).sort(), official);
  const countries = new Set(WORLD.map((c) => c.iso));
  for (const f of FORMER_COUNTRIES) for (const s of f.successors) assert.ok(countries.has(s), `${f.alpha4}: sucessor ${s} fora do mapa`);
});

test('seletor agrupa por família e ramo', () => {
  const g = groupByLineage(LANGUAGES);
  assert.deepEqual(Object.keys(g).sort(), ['Afro-asiático', 'Austro-asiático', 'Austronésio', 'Coreânico', 'Dravídico', 'Indo-europeu', 'Japônico', 'Níger-Congo', 'Sino-tibetano', 'Túrquico', 'Urálico']);
  assert.deepEqual(
    g['Indo-europeu']['Indo-iraniano'].map((l) => l.code),
    ['hi', 'bn', 'ur', 'mr'],
  );
  // os seis completos primeiro, depois os incompletos (só o A1), na ordem da lista
  const italico = g['Indo-europeu']['Itálico'].map((l) => l.code);
  assert.deepEqual(italico.slice(0, 6), ['ro', 'es', 'it', 'pt', 'fr', 'ca']);
  for (const code of italico.slice(6)) assert.ok(PACKS[code]?.incomplete, `${code}: românico novo sem a marca de incompleto`);
  assert.deepEqual(g['Urálico']['Fínico'].map((l) => l.code).sort(), ['et', 'fi']);
});

test('subdivisões: um arquivo por país do mapa e as regiões de «onde se fala» desenhadas', async () => {
  const { readFileSync, readdirSync } = await import('node:fs');
  const files = new Set(readdirSync('assets/geo').map((f) => f.replace('.geo', '')));
  const index = readFileSync('src/data/subdivisoes-geo.ts', 'utf8');
  // a Antártida não tem subdivisões (só o marcador no mapa)
  for (const c of WORLD.filter((w) => w.iso !== 'ATA')) {
    assert.ok(files.has(c.iso), `sem subdivisões: ${c.iso}`);
    assert.ok(index.includes(`${c.iso}: require(`), `fora do índice: ${c.iso}`);
  }
  for (const l of MAP_LANGUAGES)
    for (const s of l.countries)
      for (const code of s.subdivisions ?? []) {
        const shapes = JSON.parse(readFileSync(`assets/geo/${s.iso}.geo`, 'utf8')) as [string, string, string, number, number, number, string][];
        assert.ok(
          shapes.some((x) => x[0] === code || x[6] === code),
          `${l.code}: ${code} não aparece no desenho de ${s.iso}`,
        );
      }
});

test('regiões do mundo: cada país ou território do mapa em exatamente uma sub-região', async () => {
  const { WORLD_REGIONS } = await import('./regioes');
  const all = WORLD_REGIONS.flatMap((r) => r.subs.flatMap((s) => s.countries));
  assert.equal(new Set(all).size, all.length, 'país repetido');
  assert.deepEqual([...all].sort(), WORLD.map((c) => c.iso).sort());
  const sa = WORLD_REGIONS.find((r) => r.id === 'sa')!;
  assert.deepEqual(
    sa.subs.map((s) => s.name),
    ['Andina', 'Brasil e Cone Sul', 'Guianas'],
  );
});

for (const pack of Object.values(PACKS))
  test(`${pack.code}: trilha com uma unidade por subnível, na ordem do A1.1 ao C2 (ou até onde o idioma incompleto chegou)`, () => {
    assert.deepEqual(
      pack.units.map((u) => u.level),
      levelsOf(pack),
    );
    for (const u of pack.units) assert.equal(u.cefr, u.level.slice(0, 2), u.id);
  });

test('ru: todo texto russo com tônica marcada e só cirílico', async () => {
  const { russianTextProblems } = await import('../services/ru-texto');
  const ru = PACKS.ru;
  const texts: [string, string][] = [];
  for (const v of ru.vocab) texts.push([v.id, v.word_target], [v.id, v.example_sentence]);
  for (const u of ru.units)
    for (const l of u.lessons) {
      for (const c of l.cloze) texts.push([l.id, c.sentence.replace('___', '')], ...c.options.map((o) => [l.id, o] as [string, string]));
      texts.push([l.id, l.voice.bot], [l.id, l.voice.expected[0]]);
    }
  for (const st of ru.stories)
    for (const [nid, n] of Object.entries(st.nodes)) {
      texts.push([`${st.id}.${nid}`, n.text]);
      for (const c of n.choices ?? []) texts.push([`${st.id}.${nid}`, c.text]);
    }
  for (const [ph] of ru.shadowing) texts.push(['shadowing', ph]);
  const problems = texts.flatMap(([id, t]) => russianTextProblems(t).map((p) => `${id}: ${p}`));
  assert.deepEqual(problems.slice(0, 10), []);
});

test('linguística: aulas gerais e áreas por idioma consistentes', async () => {
  const { LESSONS } = await import('./linguistica-aulas');
  const { AREAS } = await import('./linguistica');
  assert.equal(new Set(LESSONS.map((l) => l.id)).size, LESSONS.length);
  for (const l of LESSONS) for (const q of l.quiz) assert.ok(q.options.includes(q.answer), `${l.id}: ${q.question}`);
  for (const pack of Object.values(PACKS)) {
    if (!pack.linguistics) continue;
    assert.deepEqual(
      pack.linguistics.map((a) => a.area),
      AREAS.map((a) => a.id),
      `${pack.code}: áreas fora de ordem`,
    );
    const used = pack.linguistics.flatMap((a) => a.topics);
    assert.equal(new Set(used).size, used.length, `${pack.code}: tópico em duas áreas`);
    assert.deepEqual([...used].sort(), pack.grammar.map((g) => g.id).sort(), `${pack.code}: todo tópico numa área`);
    for (const a of pack.linguistics) for (const q of a.quiz) assert.ok(q.options.includes(q.answer), `${pack.code}/${a.area}: ${q.question}`);
  }
});

test('it: todo texto italiano sem letras do português e com os acentos certos', async () => {
  const { italianTextProblems } = await import('../services/it-texto');
  const { italianTexts } = await import('./it/textos');
  const problems = italianTexts(PACKS.it).flatMap((t) => italianTextProblems(t).map((p) => `«${t.slice(0, 40)}»: ${p}`));
  assert.deepEqual(problems.slice(0, 10), []);
});

test('it: dicionário de pronúncia cobre o vocabulário, com tônica e timbre bem marcados', async () => {
  const { PRON_IT } = await import('./it/pronuncia');
  const { pronunciationProblems } = await import('../services/it-pronuncia');
  assert.deepEqual(pronunciationProblems(PRON_IT, PACKS.it.vocab.map((v) => v.word_target)).slice(0, 10), []);
  // e toda palavra das frases em italiano (conjugações, plurais, nomes): senão a IPA erra a tônica
  const { italianTexts } = await import('./it/textos');
  assert.deepEqual(pronunciationProblems(PRON_IT, italianTexts(PACKS.it)).slice(0, 10), []);
});

test('pt: texto europeu sem brasileirismos (gerúndio com estar, próclise no começo, grafias do Brasil)', async () => {
  const { europeanPortugueseProblems } = await import('../services/pt-texto');
  const { europeanTexts } = await import('./pt/textos');
  const problems = europeanTexts(PACKS.pt).flatMap((t) => europeanPortugueseProblems(t).map((p) => `«${t.slice(0, 40)}»: ${p}`));
  assert.deepEqual(problems.slice(0, 10), []);
});

test('pt: dicionário de pronúncia cobre toda palavra europeia do app, com a tônica marcada', async () => {
  const { PRON_PT } = await import('./pt/pronuncia');
  const { pronunciationProblemsPt } = await import('../services/pt-pronuncia');
  const { europeanTexts } = await import('./pt/textos');
  assert.deepEqual(pronunciationProblemsPt(PRON_PT, europeanTexts(PACKS.pt)).slice(0, 10), []);
});

// idiomas cuja IPA vem de um dicionário por forma (src/data/<idioma>/pronuncia.ts)
const LEXICON_LANGS = ['sv', 'nb', 'da', 'is', 'fo', 'fi', 'et', 'lt', 'lv'];
for (const code of LEXICON_LANGS.filter((c) => PACKS[c])) {
  test(`${code}: texto sem letras nem palavras de línguas vizinhas`, async () => {
    const { nordicTextProblems } = await import('../services/texto-nordico');
    const { targetTexts } = await import('./textos-alvo');
    const problems = targetTexts(PACKS[code]).flatMap((t) => nordicTextProblems(code, t).map((p) => `«${t.slice(0, 40)}»: ${p}`));
    assert.deepEqual(problems.slice(0, 10), []);
  });

  test(`${code}: toda palavra do app tem IPA no dicionário, com a tônica marcada`, async () => {
    const { ipaLexiconProblems } = await import('../services/ipa-lexicon');
    const { targetTexts } = await import('./textos-alvo');
    const mod = await import(`./${code}/pronuncia`);
    const lex = Object.values(mod)[0] as Record<string, string>;
    assert.deepEqual(ipaLexiconProblems(lex, targetTexts(PACKS[code])).slice(0, 10), []);
  });
}
