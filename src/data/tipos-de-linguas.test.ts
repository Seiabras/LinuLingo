import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GLOTTOLOG_ROWS } from './linguas-glottolog';
import { CONLANGS, ORIGINS, PURPOSES, STAGES, contactFromGlottolog } from './tipos-de-linguas';

test('tipos de línguas: toda língua artificial tem classificação válida e ids únicos', () => {
  const ids = new Set<string>();
  for (const c of CONLANGS) {
    assert.ok(!ids.has(c.id), `id repetido: ${c.id}`);
    ids.add(c.id);
    assert.ok(PURPOSES[c.purpose] && ORIGINS[c.origin] && STAGES[c.stage], c.id);
  }
  // os exemplos pedidos em cada categoria estão lá
  for (const name of ['Esperanto', 'Interlingua', 'Ido', 'Volapük', 'Quenya', 'Sindarin', 'Klingon', 'Dothraki', 'Alto Valiriano', 'Na’vi', 'Lojban', 'Toki Pona', 'Ithkuil', 'Solresol', 'Lapine'])
    assert.ok(CONLANGS.some((c) => c.name.startsWith(name)), name);
  for (const k of Object.keys(PURPOSES)) assert.ok(CONLANGS.some((c) => c.purpose === k), k);
  for (const k of Object.keys(STAGES)) assert.ok(CONLANGS.some((c) => c.stage === k), k);
});

test('tipos de línguas: os pidgins e as línguas mistas do Glottolog', () => {
  const list = contactFromGlottolog(GLOTTOLOG_ROWS);
  assert.ok(list.filter((l) => l.kind === 'pidgin').length > 50);
  assert.ok(list.some((l) => l.kind === 'mista'));
  // os ainda usados vêm antes dos extintos
  assert.ok(list.findIndex((l) => l.extinct) > list.findLastIndex((l) => !l.extinct));
});
