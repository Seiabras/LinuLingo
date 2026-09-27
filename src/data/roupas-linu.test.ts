import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lessonsToUnlock, OUTFIT_UNLOCK, ROUPAS_LINU, unlockedOutfits } from './roupas-linu';
import { PACKS } from './idiomas';

test('roupinhas: ids únicos, de idiomas do app, com nome, região e texto', () => {
  assert.equal(new Set(ROUPAS_LINU.map((o) => o.id)).size, ROUPAS_LINU.length);
  for (const o of ROUPAS_LINU) {
    assert.ok(PACKS[o.lang], `${o.id}: idioma ${o.lang}`);
    assert.ok(o.name && o.region && o.about.length > 20);
  }
  for (const code of Object.keys(PACKS)) assert.ok(ROUPAS_LINU.some((o) => o.lang === code), `${code} tem pelo menos uma roupinha`);
});

test('roupinhas: a 1ª com 1 lição do idioma, a 2ª com 10, a 3ª com 25', () => {
  const es = ROUPAS_LINU.filter((o) => o.lang === 'es');
  assert.deepEqual(es.map(lessonsToUnlock), OUTFIT_UNLOCK.slice(0, es.length));
  assert.deepEqual([...unlockedOutfits({})], []);
  assert.deepEqual([...unlockedOutfits({ es: 1 })], [es[0].id]);
  assert.equal(unlockedOutfits({ es: 25, ro: 10 }).size, es.length + ROUPAS_LINU.filter((o) => o.lang === 'ro').length);
  assert.ok(!unlockedOutfits({ ro: 50 }).has('cordobes'), 'lições de romeno não dão roupinha de espanhol');
});
