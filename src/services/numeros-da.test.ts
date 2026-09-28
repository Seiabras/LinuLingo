import { test } from 'node:test';
import assert from 'node:assert/strict';
import { danishNumber, danishOrdinal, danishYear, spellDanishNumbers } from '@/services/numeros/da';

test('números em dinamarquês: vigesimais (halvtreds, tres, halvfjerds, firs, halvfems), unidade antes da dezena', () => {
  const cases: [number, string][] = [
    [0, 'nul'],
    [1, 'en'],
    [7, 'syv'],
    [21, 'enogtyve'],
    [30, 'tredive'],
    [40, 'fyrre'],
    [50, 'halvtreds'],
    [52, 'tooghalvtreds'],
    [60, 'tres'],
    [64, 'fireogtres'],
    [70, 'halvfjerds'],
    [80, 'firs'],
    [90, 'halvfems'],
    [99, 'nioghalvfems'],
    [100, 'hundrede'],
    [147, 'hundrede og syvogfyrre'],
    [200, 'to hundrede'],
    [1000, 'tusind'],
    [1300, 'tusind tre hundrede'],
    [2008, 'to tusind og otte'],
    [2024, 'to tusind og fireogtyve'],
    [300_000, 'tre hundrede tusind'],
    [1_000_000, 'en million'],
    [70_000_000, 'halvfjerds millioner'],
  ];
  for (const [n, w] of cases) assert.equal(danishNumber(n), w, String(n));
  assert.equal(danishYear(1849), 'atten hundrede og niogfyrre');
  assert.equal(danishYear(1945), 'nitten hundrede og femogfyrre');
  assert.equal(danishOrdinal(1), 'første');
  assert.equal(danishOrdinal(2), 'anden');
  assert.equal(danishOrdinal(2, 'n'), 'andet');
  assert.equal(danishOrdinal(5), 'femte');
  assert.equal(danishOrdinal(20), 'tyvende');
  assert.equal(danishOrdinal(22), 'toogtyvende');
  assert.equal(danishOrdinal(30), 'tredivte');
  assert.equal(danishOrdinal(31), 'enogtredivte');
});

test('números em dinamarquês: o 1 concorda com o substantivo (en krone, et år)', () => {
  assert.equal(spellDanishNumbers('Det koster 1 krone.'), 'Det koster en krone.');
  assert.equal(spellDanishNumbers('Hun boede der i 1 år.'), 'Hun boede der i et år.');
  assert.equal(spellDanishNumbers('Mødet begynder kl. 1.'), 'Mødet begynder kl. et.');
  assert.equal(spellDanishNumbers('det 2. århundrede'), 'det andet århundrede');
});

test('números em dinamarquês: frases do curso (datas, anos, horas, dinheiro)', () => {
  assert.equal(spellDanishNumbers('Et spil kort har 52 spillekort.'), 'Et spil kort har tooghalvtreds spillekort.');
  assert.equal(spellDanishNumbers('Folketinget har 179 medlemmer.'), 'Folketinget har hundrede og nioghalvfjerds medlemmer.');
  assert.equal(spellDanishNumbers('Aarhus har over 300.000 indbyggere.'), 'Aarhus har over tre hundrede tusind indbyggere.');
  assert.equal(spellDanishNumbers('Himmelbjerget er 147 meter højt.'), 'Himmelbjerget er hundrede og syvogfyrre meter højt.');
  assert.equal(spellDanishNumbers('Grundloven blev underskrevet den 5. juni 1849.'), 'Grundloven blev underskrevet den femte juni atten hundrede og niogfyrre.');
  assert.equal(spellDanishNumbers('Ansøgningen skal sendes senest den 1. marts.'), 'Ansøgningen skal sendes senest den første marts.');
  assert.equal(spellDanishNumbers('en 5. klasse fra Vejle'), 'en femte klasse fra Vejle');
  assert.equal(spellDanishNumbers('i løbet af det 20. århundrede'), 'i løbet af det tyvende århundrede');
  assert.equal(spellDanishNumbers('Krigen sluttede i 1945.'), 'Krigen sluttede i nitten hundrede og femogfyrre.');
  assert.equal(spellDanishNumbers('Der var en økonomisk krise i 2008.'), 'Der var en økonomisk krise i to tusind og otte.');
  assert.equal(spellDanishNumbers('for omkring 1300 år siden'), 'for omkring tusind tre hundrede år siden');
  assert.equal(spellDanishNumbers('Kirken er fra 1100-tallet.'), 'Kirken er fra ellevehundredetallet.');
  assert.equal(spellDanishNumbers('ved 22-tiden'), 'ved toogtyvetiden');
  assert.equal(spellDanishNumbers('i 70\'erne'), 'i halvfjerdserne');
  assert.equal(spellDanishNumbers('kl. 8.15, kl. 14.30'), 'kl. otte femten, kl. fjorten tredive');
  assert.equal(spellDanishNumbers('Man lukker døren kl. 22.'), 'Man lukker døren kl. toogtyve.');
  assert.equal(spellDanishNumbers('3,5 procent'), 'tre komma fem procent');
  assert.equal(spellDanishNumbers('10.000 kr.'), 'ti tusind kroner.');
  assert.equal(spellDanishNumbers('Ring til alarmcentralen på 112.'), 'Ring til alarmcentralen på en en to.');
});

test('números em dinamarquês: algarismos grudados em letras ficam como estão', () => {
  assert.equal(spellDanishNumbers('V2, 3D, mp3, A1.1'), 'V2, 3D, mp3, A1.1');
});
