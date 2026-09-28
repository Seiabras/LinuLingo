import { test } from 'node:test';
import assert from 'node:assert/strict';
import { italianNumber, italianOrdinal, spellItalianNumbers } from '@/services/numeros/it';

test('números em italiano: numa palavra até os milhares, ventuno, ventotto, ventitré', () => {
  const cases: [number, string][] = [
    [0, 'zero'],
    [1, 'uno'],
    [17, 'diciassette'],
    [21, 'ventuno'],
    [23, 'ventitré'],
    [28, 'ventotto'],
    [100, 'cento'],
    [103, 'centotré'],
    [180, 'centottanta'],
    [1000, 'mille'],
    [1265, 'milleduecentosessantacinque'],
    [1946, 'millenovecentoquarantasei'],
    [2000, 'duemila'],
    [2026, 'duemilaventisei'],
    [21_000, 'ventunomila'],
    [1_000_000, 'un milione'],
    [2_300_000, 'due milioni trecentomila'],
  ];
  for (const [n, w] of cases) assert.equal(italianNumber(n), w, String(n));
  assert.equal(italianNumber(21, 'm', 'anni'), 'ventun');
  assert.equal(italianNumber(21, 'm', 'studenti'), 'ventuno');
  assert.equal(italianNumber(101, 'm', 'anni'), 'centouno');
  assert.equal(italianOrdinal(1), 'primo');
  assert.equal(italianOrdinal(1, 'f'), 'prima');
  assert.equal(italianOrdinal(11), 'undicesimo');
  assert.equal(italianOrdinal(23), 'ventitreesimo');
  assert.equal(italianOrdinal(26), 'ventiseiesimo');
});

test('números em italiano: o 1 concorda com o substantivo que vem depois', () => {
  assert.equal(spellItalianNumbers('Ho 21 anni.'), 'Ho ventun anni.');
  assert.equal(spellItalianNumbers('Aspetto da 1 ora.'), "Aspetto da un'ora.");
  assert.equal(spellItalianNumbers('1 casa, 1 amica, 1 zaino'), "una casa, un'amica, uno zaino");
  assert.equal(spellItalianNumbers('Novembre ha 30 giorni, dicembre 31 giorni.'), 'Novembre ha trenta giorni, dicembre trentun giorni.');
  assert.equal(spellItalianNumbers('ventuno ragazze: 21 ragazze'), 'ventuno ragazze: ventuno ragazze');
  assert.equal(spellItalianNumbers('Prendo 1 libro.'), 'Prendo un libro.');
  // sem substantivo, a forma de contar
  assert.equal(spellItalianNumbers('Uno alla volta: 1 alla volta.'), 'Uno alla volta: uno alla volta.');
});

test('números em italiano: datas, anos, horas, ordinais, decimais, milhares', () => {
  assert.equal(spellItalianNumbers('Dante Alighieri nacque a Firenze nel 1265.'), 'Dante Alighieri nacque a Firenze nel milleduecentosessantacinque.');
  assert.equal(spellItalianNumbers('il 1° maggio'), 'il primo maggio');
  assert.equal(spellItalianNumbers('il 1 maggio'), 'il primo maggio');
  assert.equal(spellItalianNumbers('il 2 giugno'), 'il due giugno');
  assert.equal(spellItalianNumbers("l'8 settembre"), "l'otto settembre");
  assert.equal(spellItalianNumbers('Domani prendete l’autopostale delle 7.02.'), 'Domani prendete l’autopostale delle sette e due.');
  assert.equal(spellItalianNumbers('alle 14:30'), 'alle quattordici e trenta');
  assert.equal(spellItalianNumbers("all'1"), "all'una");
  assert.equal(spellItalianNumbers('la 3ª volta, il 3° piano'), 'la terza volta, il terzo piano');
  assert.equal(spellItalianNumbers('ci sono circa 1.400 metri di roccia'), 'ci sono circa millequattrocento metri di roccia');
  assert.equal(spellItalianNumbers('3,5 chili'), 'tre virgola cinque chili');
  assert.equal(spellItalianNumbers('Fa 30° all’ombra, 36,6 °C di febbre.'), 'Fa trenta gradi all’ombra, trentasei virgola sei gradi di febbre.');
  assert.equal(spellItalianNumbers('il 50%'), 'il cinquanta per cento');
  assert.equal(spellItalianNumbers('2,50 €'), 'due euro e cinquanta centesimi');
});

test('números em italiano: o que não é número fica como está', () => {
  for (const s of ['mp3', 'la legge 482/1999', 'livello A2.1', 'Ciao!']) assert.equal(spellItalianNumbers(s), s);
});
