import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from './idiomas';
import { ISO_3166_2 } from './iso-3166-2';
import { WORLD } from './mapa-mundi';
import { russianTextProblems } from '@/services/ru-texto';
import { spanishTextProblems } from '@/services/es-texto';

const withAccents = Object.values(PACKS).filter((p) => p.accents?.length);

test('sotaques: ids únicos, país e regiões ISO 3166-2 que existem', () => {
  const ids = withAccents.flatMap((p) => p.accents!.map((a) => a.id));
  assert.equal(new Set(ids).size, ids.length, 'id de sotaque repetido');
  for (const p of withAccents)
    for (const a of p.accents!) {
      const country = WORLD.find((c) => c.iso === a.country);
      assert.ok(country, `${a.id}: país ${a.country} fora do mapa`);
      const codes = new Set((ISO_3166_2[country!.iso2] ?? []).map(([c]) => c));
      for (const s of a.subdivisions ?? []) assert.ok(codes.has(s), `${a.id}: ${s} não é subdivisão de ${a.country}`);
      if (a.variant) assert.ok(p.variants?.some((v) => v.code === a.variant), `${a.id}: variante ${a.variant} não existe`);
      assert.ok(a.features.length >= 2 && a.examples.length >= 1, `${a.id}: poucos traços ou exemplos`);
    }
});

test('sotaques: russo com tônica marcada, espanhol com a ortografia da RAE', () => {
  for (const a of PACKS.ru?.accents ?? []) {
    const texts = [a.summary, ...a.features, ...a.examples.flatMap(([t, , n]) => [t, n ?? '']), ...(a.words ?? []).flat()];
    for (const t of texts) assert.deepEqual(russianTextProblems(t), [], `${a.id}: ${t}`);
  }
  // kind 'língua' não é espanhol (catalão, basco, galego…): a ortografia da RAE não se aplica
  for (const a of PACKS.es?.accents ?? []) {
    if (a.kind === 'língua') continue;
    for (const [t] of a.examples) assert.deepEqual(spanishTextProblems(t), [], `${a.id}: ${t}`);
    for (const [w] of a.words ?? []) assert.deepEqual(spanishTextProblems(w), [], `${a.id}: ${w}`);
  }
});
