import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { KRILL_XP, krillBalance, lessonsToUnlock, OUTFIT_UNLOCK, ROUPAS_LINU, slotOf, unlockedOutfits, withOutfit } from './roupas-linu';
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
  // os idiomas em construção (só o A1) ganham a roupinha quando a trilha crescer
  for (const code of Object.keys(PACKS)) if (!PACKS[code].incomplete) assert.ok(ROUPAS_LINU.some((o) => o.lang === code), `${code} tem pelo menos uma roupinha`);
});

test('roupinhas: as de cada idioma vêm com as lições (1, 5, 10…); as da loja, não', () => {
  const es = ROUPAS_LINU.filter((o) => o.lang === 'es');
  assert.deepEqual(es.map(lessonsToUnlock), OUTFIT_UNLOCK.slice(0, es.length));
  assert.deepEqual([...unlockedOutfits({})], []);
  assert.deepEqual([...unlockedOutfits({ es: 1 })], [es[0].id]);
  assert.equal(unlockedOutfits({ es: 1000, ro: 1000 }).size, es.length + ROUPAS_LINU.filter((o) => o.lang === 'ro').length);
  assert.ok(!unlockedOutfits({ ro: 50 }).has('cordobes'), 'lições de romeno não dão roupinha de espanhol');
  assert.ok(!unlockedOutfits({ es: 1000 }).has('fez'), 'lições não dão as da loja');
});

test('loja: krill = XP / 10 menos o que foi gasto; o comprado fica liberado', () => {
  const fez = ROUPAS_LINU.find((o) => o.id === 'fez')!;
  assert.equal(krillBalance(0, []), 0);
  assert.equal(krillBalance(10 * KRILL_XP + 9, []), 10);
  assert.equal(krillBalance(100 * KRILL_XP, ['fez']), 100 - fez.price!);
  assert.ok(unlockedOutfits({}, ['fez']).has('fez'));
  assert.ok(!unlockedOutfits({}, ['caciula']).has('caciula'), 'presente de idioma não se “compra”');
});

test('visual: uma peça por lugar (cabeça, corpo, mão, rosto); vestir outra do mesmo lugar troca', () => {
  assert.equal(slotOf('fez'), 'cabeca');
  assert.equal(slotOf('ie'), 'corpo');
  assert.equal(slotOf('matriochka'), 'mao');
  assert.equal(slotOf('catrina'), 'rosto');
  const look = withOutfit(withOutfit(withOutfit(withOutfit([], 'fez'), 'ie'), 'matriochka'), 'catrina');
  assert.deepEqual([...look].sort(), ['catrina', 'fez', 'ie', 'matriochka']);
  assert.deepEqual([...withOutfit(look, 'ushanka')].sort(), ['catrina', 'ie', 'matriochka', 'ushanka']);
  assert.deepEqual([...withOutfit(look, 'balalaica')].sort(), ['balalaica', 'catrina', 'fez', 'ie']);
});

test('visual: toda peça tem desenho (chapéus em LinuOutfit.tsx; o resto em LinuRoupas.tsx, na função do lugar)', () => {
  const hats = readFileSync('src/components/LinuOutfit.tsx', 'utf8');
  const rest = readFileSync('src/components/LinuRoupas.tsx', 'utf8');
  // o corpo de cada função exportada de LinuRoupas.tsx
  const fn = (name: string) => {
    const start = rest.indexOf(`export function ${name}`);
    const end = rest.indexOf('export function', start + 1);
    return rest.slice(start, end < 0 ? undefined : end);
  };
  const where: Record<string, string> = { corpo: fn('BodyArt'), rosto: fn('FaceArt'), mao: fn('HeldArt') };
  for (const o of ROUPAS_LINU) {
    const src = o.slot ? where[o.slot] : hats;
    assert.ok(src.includes(`case '${o.id}':`), `${o.id}: falta o desenho (${o.slot ?? 'cabeca'})`);
  }
});

test('visual: as peças novas de um idioma vêm depois dos chapéus dele (quem já liberou um chapéu não o perde)', () => {
  for (const code of new Set(ROUPAS_LINU.map((o) => o.lang).filter(Boolean))) {
    const mine = ROUPAS_LINU.filter((o) => o.lang === code);
    const firstExtra = mine.findIndex((o) => o.slot);
    if (firstExtra >= 0) assert.ok(mine.slice(firstExtra).every((o) => o.slot), `${code}: chapéu depois de roupa muda a ordem das liberações`);
  }
});
