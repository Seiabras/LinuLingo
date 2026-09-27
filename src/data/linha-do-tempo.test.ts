import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WORLD } from './mapa-mundi';
import { erasOf, officialToday, TIMELINES } from './linha-do-tempo';

test('linha do tempo: todo país citado existe no mapa, e cada etapa só cresce ou muda com texto', () => {
  const isos = new Set(WORLD.map((c) => c.iso));
  for (const f of TIMELINES) {
    const eras = erasOf(f);
    assert.ok(eras.length >= 3, `${f.id}: poucas etapas`);
    assert.equal(eras.at(-1)!.label, 'Hoje');
    for (const e of eras) {
      assert.ok(e.countries.length > 0 && e.text.length > 40, `${f.id} ${e.label}`);
      for (const c of e.countries) assert.ok(isos.has(c), `${f.id} ${e.label}: ${c} não está no mapa`);
    }
  }
});

test('linha do tempo: o «hoje» vem dos dados do mapa (onde a família é oficial)', () => {
  assert.ok(officialToday('Românico').includes('BRA'));
  assert.ok(officialToday('Eslavo').includes('RUS'));
  assert.ok(officialToday('Germânico').includes('ISL'));
  assert.deepEqual(new Set(officialToday('Urálico')), new Set(['FIN', 'EST', 'HUN']));
});
