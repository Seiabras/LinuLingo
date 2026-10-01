import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GLOTTOLOG_ROWS } from './linguas-glottolog';
import { PACKS } from './idiomas';
import { allOwnLanguages, findAccentAnywhere, OWN_LANGUAGE_META, sameFamily } from './linguas-proprias';
import { familiesOf, languagesOfCountry, riskCounts, scopeOf } from './linguas-indigenas';

test('línguas próprias: toda língua (kind “língua”) dos idiomas tem família, e todo glottocode existe', () => {
  const codes = new Set(GLOTTOLOG_ROWS.map((r) => r[5]));
  const all = allOwnLanguages('sv');
  assert.ok(all.length >= 15);
  assert.equal(all[0].pack.code, 'sv', 'as do idioma estudado vêm primeiro');
  for (const l of all) {
    assert.ok(l.meta, `${l.accent.id}: sem família em OWN_LANGUAGE_META`);
    for (const g of l.meta!.glottocodes ?? []) assert.ok(codes.has(g), `${l.accent.id}: ${g} não está no Glottolog`);
  }
  // nenhuma entrada solta, de um id que não existe mais
  const ids = new Set(Object.values(PACKS).flatMap((p) => (p.accents ?? []).map((a) => a.id)));
  for (const id of Object.keys(OWN_LANGUAGE_META)) assert.ok(ids.has(id), `${id} não existe em nenhum sotaques.ts`);
});

test('línguas próprias: o sámi não é da família do sueco; o sardo é parente do italiano; o crioulo não se diz', () => {
  const sv = PACKS.sv;
  assert.equal(sameFamily(OWN_LANGUAGE_META['sv-samiska'], sv), false);
  assert.equal(sameFamily(OWN_LANGUAGE_META['it-lingua-sarda'], PACKS.it), true);
  assert.equal(sameFamily(OWN_LANGUAGE_META['pt-kriolu'], PACKS.pt), null);
  assert.equal(findAccentAnywhere('da-faroes')?.pack.code, 'da');
  assert.equal(findAccentAnywhere('nao-existe'), null);
});

test('indígenas: Américas e Oceania listam as indígenas; o resto do mundo, as ameaçadas', () => {
  assert.equal(scopeOf('BRA'), 'indigenas');
  assert.equal(scopeOf('AUS'), 'indigenas');
  assert.equal(scopeOf('SWE'), 'ameacadas');
  const bra = languagesOfCountry(GLOTTOLOG_ROWS, 'BRA');
  const names = bra.map((l) => l.name);
  // as de família indo-europeia (o português, o talian) chegaram com a colonização e a imigração
  assert.ok(bra.every((l) => l.family !== 'Indo-europeu'));
  assert.ok(!names.includes('Português'));
  // o ticuna vive dos dois lados da fronteira: entra mesmo com o ponto do Glottolog na Colômbia
  assert.ok(names.includes('Ticuna'));
  assert.ok(familiesOf(bra)[0][0] === 'Tupi');
  // nos EUA, o indonésio (de outro continente) fica de fora; o navajo entra
  const usa = languagesOfCountry(GLOTTOLOG_ROWS, 'USA').map((l) => l.name);
  assert.ok(!usa.includes('Standard Indonesian'));
  assert.ok(usa.includes('Navaja'));
  // na Suécia, só as em risco (o sueco não entra), com as sámi
  const swe = languagesOfCountry(GLOTTOLOG_ROWS, 'SWE');
  assert.ok(swe.every((l) => l.level !== null && l.level >= 1));
  assert.ok(swe.some((l) => l.name === 'Sami setentrional'));
});

test('indígenas: a ordem vai das mais ameaçadas às extintas, e as contas batem', () => {
  const bra = languagesOfCountry(GLOTTOLOG_ROWS, 'BRA');
  const { byLevel, unknown } = riskCounts(bra);
  assert.equal(byLevel.reduce((a, b) => a + b, 0) + unknown, bra.length);
  const firstExtinct = bra.findIndex((l) => l.level === 5);
  assert.ok(bra.slice(0, firstExtinct).every((l) => l.level !== null && l.level < 5));
  assert.equal(bra[0].level, 4);
});
