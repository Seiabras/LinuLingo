import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lithuanianNumber, spellLithuanianNumbers } from '@/services/numeros/lt';

test('números em lituano: 1 e 2 concordam em gênero e caso, 3 a 9 só em caso', () => {
  assert.equal(lithuanianNumber(1), 'vienas');
  assert.equal(lithuanianNumber(1, 'nom', 'f'), 'viena');
  assert.equal(lithuanianNumber(1, 'gen', 'f'), 'vienos');
  assert.equal(lithuanianNumber(2), 'du');
  assert.equal(lithuanianNumber(2, 'nom', 'f'), 'dvi');
  assert.equal(lithuanianNumber(2, 'gen'), 'dviejų');
  assert.equal(lithuanianNumber(3), 'trys');
  assert.equal(lithuanianNumber(3, 'loc', 'f'), 'trijose');
  assert.equal(lithuanianNumber(4, 'nom', 'f'), 'keturios');
  assert.equal(lithuanianNumber(4, 'dat', 'f'), 'keturioms');
  assert.equal(lithuanianNumber(9, 'ins', 'm'), 'devyniais');
});

test('números em lituano: 10 a 99, indeclináveis', () => {
  assert.equal(lithuanianNumber(10), 'dešimt');
  assert.equal(lithuanianNumber(11), 'vienuolika');
  assert.equal(lithuanianNumber(19), 'devyniolika');
  assert.equal(lithuanianNumber(20), 'dvidešimt');
  assert.equal(lithuanianNumber(21), 'dvidešimt vienas');
  assert.equal(lithuanianNumber(21, 'nom', 'f'), 'dvidešimt viena');
  assert.equal(lithuanianNumber(45), 'keturiasdešimt penki');
  assert.equal(lithuanianNumber(99), 'devyniasdešimt devyni');
});

test('números em lituano: šimtas/tūkstantis/milijonas concordam pelo último dígito', () => {
  assert.equal(lithuanianNumber(100), 'šimtas');
  assert.equal(lithuanianNumber(200), 'du šimtai');
  assert.equal(lithuanianNumber(500), 'penki šimtai');
  assert.equal(lithuanianNumber(135), 'šimtas trisdešimt penki');
  assert.equal(lithuanianNumber(1000), 'tūkstantis');
  assert.equal(lithuanianNumber(1999), 'tūkstantis devyni šimtai devyniasdešimt devyni');
  assert.equal(lithuanianNumber(2000), 'du tūkstančiai');
  assert.equal(lithuanianNumber(10_000), 'dešimt tūkstančių');
  assert.equal(lithuanianNumber(15_000), 'penkiolika tūkstančių');
  assert.equal(lithuanianNumber(20_000), 'dvidešimt tūkstančių');
  assert.equal(lithuanianNumber(21_000), 'dvidešimt vienas tūkstantis');
  assert.equal(lithuanianNumber(22_000), 'dvidešimt du tūkstančiai');
  assert.equal(lithuanianNumber(1_000_000), 'milijonas');
  assert.equal(lithuanianNumber(2_000_000), 'du milijonai');
});

test('números em lituano no texto: o caso vem da terminação da palavra depois', () => {
  assert.equal(spellLithuanianNumbers('Turiu 2 knygas.'), 'Turiu dvi knygas.');
  assert.equal(spellLithuanianNumbers('Kalbu su 2 draugais.'), 'Kalbu su dviem draugais.');
  assert.equal(spellLithuanianNumbers('Neturiu 10 knygų.'), 'Neturiu dešimt knygų.');
  assert.equal(spellLithuanianNumbers('Esu 4 miestuose.'), 'Esu keturiuose miestuose.');
  assert.equal(spellLithuanianNumbers('Padovanojau 3 draugėms.'), 'Padovanojau trims draugėms.');
  // sem palavra reconhecida depois: fica no nominativo masculino (a forma de contar)
  assert.equal(spellLithuanianNumbers('Skaičiuoju: 1, 2, 3.'), 'Skaičiuoju: vienas, du, trys.');
});
