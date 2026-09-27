import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WORLD } from './mapa-mundi';
import { ALL_MAP_LANGUAGES, languagesIn, MAP_LANGUAGES, searchLanguages } from './onde-se-fala';

test('idiomas do mundo: códigos únicos e países que existem no mapa', () => {
  const codes = ALL_MAP_LANGUAGES.map((l) => l.code);
  assert.equal(new Set(codes).size, codes.length);
  assert.ok(ALL_MAP_LANGUAGES.length > 600, `só ${ALL_MAP_LANGUAGES.length} idiomas`);
  const isos = new Set(WORLD.map((c) => c.iso));
  for (const l of ALL_MAP_LANGUAGES) for (const c of l.countries) assert.ok(isos.has(c.iso), `${l.code}: país ${c.iso} fora do mapa`);
  // os idiomas do app continuam com a lista escrita à mão (notas, regiões, variantes)
  for (const l of MAP_LANGUAGES) assert.ok(!l.fromCldr);
});

test('idiomas do mundo: todo idioma com família e cor', () => {
  for (const l of ALL_MAP_LANGUAGES) {
    assert.ok(l.lineage.length > 0, `${l.code} sem família`);
    assert.match(l.color, /^#[0-9A-F]{6}$/i);
  }
});

test('busca de idiomas: pelo nome, sem acento e pela família', () => {
  assert.equal(searchLanguages('guarani')[0].code, 'gn');
  assert.equal(searchLanguages('suaili')[0].code, 'sw');
  assert.ok(searchLanguages('tupi').some((l) => l.code === 'gn'));
  assert.equal(searchLanguages('').length, 40);
});

test('cartão do país: oficial primeiro, depois pela % da população', () => {
  const br = languagesIn('BRA');
  assert.equal(br[0].lang.code, 'pt');
  assert.ok(br.some((x) => x.lang.code === 'kgp'), 'kaingang no Brasil');
  const py = languagesIn('PRY').map((x) => x.lang.code);
  assert.ok(py.indexOf('gn') >= 0 && py.indexOf('gn') < 2, 'guarani entre as oficiais do Paraguai');
});
