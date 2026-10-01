import { test } from 'node:test';
import assert from 'node:assert/strict';
import { norwegianNumber, norwegianOrdinal, norwegianYear, spellNorwegianNumbers } from '@/services/numeros/nb';

test('números em norueguês: a contagem nova (tjueen, førtifem) e o “og” antes do último pedaço', () => {
  const cases: [number, string][] = [
    [0, 'null'],
    [1, 'en'],
    [7, 'sju'],
    [20, 'tjue'],
    [21, 'tjueen'],
    [45, 'førtifem'],
    [100, 'hundre'],
    [120, 'hundre og tjue'],
    [169, 'hundre og sekstini'],
    [250, 'to hundre og femti'],
    [1000, 'tusen'],
    [1200, 'tusen to hundre'],
    [2005, 'to tusen og fem'],
    [2024, 'to tusen og tjuefire'],
    [21_000, 'tjueen tusen'],
    [300_000, 'tre hundre tusen'],
    [1_000_000, 'en million'],
    [2_000_000, 'to millioner'],
  ];
  for (const [n, w] of cases) assert.equal(norwegianNumber(n), w, String(n));
  assert.equal(norwegianYear(1814), 'atten hundre og fjorten');
  assert.equal(norwegianYear(1900), 'nitten hundre');
  assert.equal(norwegianOrdinal(1), 'første');
  assert.equal(norwegianOrdinal(2), 'andre');
  assert.equal(norwegianOrdinal(17), 'syttende');
  assert.equal(norwegianOrdinal(23), 'tjuetredje');
  assert.equal(norwegianOrdinal(30), 'trettiende');
});

test('números em norueguês: o 1 concorda com o substantivo (en, ei, ett)', () => {
  assert.equal(spellNorwegianNumbers('Jeg har 1 bok, 1 hund og 1 hus.'), 'Jeg har ei bok, en hund og ett hus.');
  assert.equal(spellNorwegianNumbers('Det tok 1 uke.'), 'Det tok ei uke.');
  assert.equal(spellNorwegianNumbers('1 gammel bok'), 'ei gammel bok');
  assert.equal(spellNorwegianNumbers('Toget står på perrong 1.'), 'Toget står på perrong en.');
  assert.equal(spellNorwegianNumbers('Klokka er 1.'), 'Klokka er ett.');
});

test('números em norueguês: frases do curso (datas, anos, horas, dinheiro)', () => {
  assert.equal(spellNorwegianNumbers('Vi feirer 17. mai.'), 'Vi feirer syttende mai.');
  assert.equal(spellNorwegianNumbers('Grunnloven ble underskrevet 17. mai 1814.'), 'Grunnloven ble underskrevet syttende mai atten hundre og fjorten.');
  assert.equal(spellNorwegianNumbers('fredag 17. mai 2024'), 'fredag syttende mai to tusen og tjuefire');
  assert.equal(spellNorwegianNumbers('Svar oss innen 1. juni.'), 'Svar oss innen første juni.');
  assert.equal(spellNorwegianNumbers('Stortinget har 169 representanter.'), 'Stortinget har hundre og sekstini representanter.');
  assert.equal(spellNorwegianNumbers('Det norske alfabetet har 29 bokstaver.'), 'Det norske alfabetet har tjueni bokstaver.');
  assert.equal(spellNorwegianNumbers('I 1814 fikk Norge sin egen grunnlov.'), 'I atten hundre og fjorten fikk Norge sin egen grunnlov.');
  assert.equal(spellNorwegianNumbers('Kirken er fra 1200-tallet.'), 'Kirken er fra tolvhundretallet.');
  assert.equal(spellNorwegianNumbers('Han har vært der siden 1970-tallet.'), 'Han har vært der siden nittensyttitallet.');
  assert.equal(spellNorwegianNumbers('en mann i 30-årene'), 'en mann i trettiårene');
  assert.equal(spellNorwegianNumbers('kl. 08.15, kl. 14.30'), 'kl. åtte femten, kl. fjorten tretti');
  assert.equal(spellNorwegianNumbers('Møtet begynner kl. 09.00.'), 'Møtet begynner kl. ni.');
  assert.equal(spellNorwegianNumbers('3,5 prosent'), 'tre komma fem prosent');
  assert.equal(spellNorwegianNumbers('10 000 kroner'), 'ti tusen kroner');
  assert.equal(spellNorwegianNumbers('Det koster 1 kr.'), 'Det koster en krone.');
  assert.equal(spellNorwegianNumbers('Materialet analyseres i kapittel 3.'), 'Materialet analyseres i kapittel tre.');
  assert.equal(spellNorwegianNumbers('Nødnummeret for ambulanse er 113.'), 'Nødnummeret for ambulanse er en en tre.');
});

test('números em norueguês: algarismos grudados em letras ficam como estão', () => {
  assert.equal(spellNorwegianNumbers('V2, 3D, mp3, A1.1'), 'V2, 3D, mp3, A1.1');
});
