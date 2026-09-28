import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { EXPEDITION_PLACES, isoWeek, STOPS_PER_EXPEDITION, weeklyStops } from './expedicoes';
import { ISO_3166_2 } from './iso-3166-2';
import { WORLD } from './mapa-mundi';

test('expedições: toda parada tem a região no mapa do país (senão ninguém acerta)', () => {
  for (const [lang, places] of Object.entries(EXPEDITION_PLACES)) {
    assert.ok(places.length >= 10, `${lang}: poucas cidades`);
    for (const p of places) {
      const shapes = JSON.parse(readFileSync(`assets/geo/${p.country}.geo`, 'utf8')) as [string, string, string, number, number, number, string][];
      const codes = new Set(shapes.flatMap((s) => [s[0], s[6]]));
      assert.ok(p.codes.some((c) => codes.has(c)), `${lang}: ${p.cityPt} (${p.codes.join('/')}) não está no mapa de ${p.country}`);
      assert.ok(p.fact.length > 20 && p.city && p.cityPt);
    }
  }
});

test('expedições: a semana ISO e as 3 paradas da semana, sempre as mesmas', () => {
  assert.equal(isoWeek(new Date('2026-09-27T12:00:00')), '2026-39');
  assert.equal(isoWeek(new Date('2026-01-01T12:00:00')), '2026-01');
  assert.equal(isoWeek(new Date('2027-01-01T12:00:00')), '2026-53');
  const a = weeklyStops('ro', '2026-39');
  assert.equal(a.length, STOPS_PER_EXPEDITION);
  assert.equal(new Set(a.map((p) => p.city)).size, STOPS_PER_EXPEDITION);
  assert.deepEqual(weeklyStops('ro', '2026-39'), a, 'mesma semana, mesmas paradas');
  assert.notDeepEqual(weeklyStops('ro', '2026-40').map((p) => p.city), a.map((p) => p.city));
  assert.deepEqual(weeklyStops('xx', '2026-39'), []);
});

test('expedições: o 1º código de cada parada tem nome (a tela mostra o nome da região por ele)', () => {
  for (const [lang, places] of Object.entries(EXPEDITION_PLACES))
    for (const p of places) {
      const iso2 = WORLD.find((c) => c.iso === p.country)?.iso2 ?? '';
      assert.ok(ISO_3166_2[iso2]?.some(([c]) => c === p.codes[0]), `${lang}: ${p.cityPt} (${p.codes[0]}) sem nome na lista ISO 3166-2`);
    }
});
