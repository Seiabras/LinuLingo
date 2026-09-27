import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KRILL_XP, krillBalance, lessonsToUnlock, OUTFIT_UNLOCK, ROUPAS_LINU, unlockedOutfits } from './roupas-linu';
import { PACKS } from './idiomas';
import { WORLD } from './mapa-mundi';

test('roupinhas: ids únicos, com país, região, cultura e texto; de um idioma do app ou da loja', () => {
  assert.equal(new Set(ROUPAS_LINU.map((o) => o.id)).size, ROUPAS_LINU.length);
  for (const o of ROUPAS_LINU) {
    assert.ok(/^[a-z]+$/.test(o.id), `${o.id}: id em minúsculas sem acento`);
    assert.ok(o.lang ? PACKS[o.lang] && !o.price : (o.price ?? 0) > 0, `${o.id}: presente de um idioma do app ou item da loja com preço`);
    assert.ok(WORLD.some((c) => c.iso2 === o.country), `${o.id}: país ${o.country}`);
    assert.ok(o.name && o.region && o.culture && o.about.length > 20, o.id);
  }
  for (const code of Object.keys(PACKS)) assert.ok(ROUPAS_LINU.some((o) => o.lang === code), `${code} tem pelo menos uma roupinha`);
});

test('roupinhas: as de cada idioma vêm com as lições (1, 5, 10…); as da loja, não', () => {
  const es = ROUPAS_LINU.filter((o) => o.lang === 'es');
  assert.deepEqual(es.map(lessonsToUnlock), OUTFIT_UNLOCK.slice(0, es.length));
  assert.deepEqual([...unlockedOutfits({})], []);
  assert.deepEqual([...unlockedOutfits({ es: 1 })], [es[0].id]);
  assert.equal(unlockedOutfits({ es: 100, ro: 100 }).size, es.length + ROUPAS_LINU.filter((o) => o.lang === 'ro').length);
  assert.ok(!unlockedOutfits({ ro: 50 }).has('cordobes'), 'lições de romeno não dão roupinha de espanhol');
  assert.ok(!unlockedOutfits({ es: 1000 }).has('fez'), 'lições não dão as da loja');
});

test('loja: krill = XP / 10 menos o que foi gasto; o comprado fica liberado', () => {
  const fez = ROUPAS_LINU.find((o) => o.id === 'fez')!;
  assert.equal(krillBalance(0, []), 0);
  assert.equal(krillBalance(10 * KRILL_XP + 9, []), 10);
  assert.equal(krillBalance(100 * KRILL_XP, ['fez']), 100 - fez.price!);
  assert.ok(unlockedOutfits({}, ['fez']).has('fez'));
  assert.ok(!unlockedOutfits({}, ['caciula']).has('caciula'), 'presente de idioma não se «compra»');
});
