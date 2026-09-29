/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LANGUAGES, PACKS } from './idiomas';
import { RESOURCES } from './recursos';
import { MEDIA_LABEL } from './recursos/tipos';

const CEFR = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

test('provas e dicas: todo idioma da lista tem a sua página', () => {
  // os idiomas em construção (só o A1) podem ainda não ter a página; o aviso de incompleto diz isso
  for (const l of LANGUAGES) if (!PACKS[l.code]?.incomplete) assert.ok(RESOURCES[l.code], `sem provas e dicas: ${l.code}`);
  for (const [code, r] of Object.entries(RESOURCES)) assert.equal(r.lang, code);
});

test('provas: campos preenchidos, uma principal, site oficial em https', () => {
  for (const r of Object.values(RESOURCES)) {
    const ids = r.exams.map((e) => e.id);
    assert.equal(new Set(ids).size, ids.length, `${r.lang}: id de prova repetido`);
    if (r.exams.length) assert.equal(r.exams.filter((e) => e.main).length, 1, `${r.lang}: precisa de exatamente uma prova principal`);
    for (const e of r.exams) {
      const tag = `${r.lang}/${e.id}`;
      for (const k of ['name', 'fullName', 'org', 'flag', 'levels', 'validity', 'where', 'tip'] as const) assert.ok(e[k]?.trim(), `${tag}: sem ${k}`);
      assert.match(e.url, /^https:\/\/[^\s]+$/, `${tag}: url`);
      assert.ok(e.format.length >= 2, `${tag}: formato com menos de 2 partes`);
      assert.ok(e.usedFor.length >= 1, `${tag}: para que serve`);
      assert.ok(CEFR.indexOf(e.cefr[0]) <= CEFR.indexOf(e.cefr[1]) && CEFR.includes(e.cefr[0]), `${tag}: faixa do QECR`);
    }
  }
});

test('recomendações: tipos e níveis válidos, sem repetir título, dicas', () => {
  for (const r of Object.values(RESOURCES)) {
    assert.ok(r.media.length >= 12, `${r.lang}: só ${r.media.length} recomendações`);
    const kinds = new Set(r.media.map((m) => m.kind));
    for (const k of ['filme', 'serie', 'livro', 'musica'] as const) assert.ok(kinds.has(k), `${r.lang}: sem ${k}`);
    const titles = r.media.map((m) => `${m.kind}:${m.title}`);
    assert.equal(new Set(titles).size, titles.length, `${r.lang}: recomendação repetida`);
    for (const m of r.media) {
      assert.ok(MEDIA_LABEL[m.kind], `${r.lang}: tipo ${m.kind}`);
      assert.ok(CEFR.includes(m.level), `${r.lang}/${m.title}: nível ${m.level}`);
      assert.ok(m.title.trim() && m.by.trim() && m.why.trim().length > 20, `${r.lang}/${m.title}: campos`);
    }
    assert.ok(r.tips.length >= 3, `${r.lang}: menos de 3 dicas`);
  }
});
