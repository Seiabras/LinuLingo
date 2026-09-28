import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spanishNumber, spanishOrdinal, spellSpanishNumbers } from '@/services/numeros/es';

test('números em espanhol: de 16 a 29 numa palavra, cien × ciento, «y» só nas dezenas', () => {
  const cases: [number, string][] = [
    [0, 'cero'],
    [1, 'uno'],
    [16, 'dieciséis'],
    [21, 'veintiuno'],
    [22, 'veintidós'],
    [23, 'veintitrés'],
    [31, 'treinta y uno'],
    [100, 'cien'],
    [101, 'ciento uno'],
    [120, 'ciento veinte'],
    [500, 'quinientos'],
    [999, 'novecientos noventa y nueve'],
    [1000, 'mil'],
    [1946, 'mil novecientos cuarenta y seis'],
    [2026, 'dos mil veintiséis'],
    [2850, 'dos mil ochocientos cincuenta'],
    [21_000, 'veintiún mil'],
    [100_000, 'cien mil'],
    [1_000_000, 'un millón'],
    [21_000_000, 'veintiún millones'],
  ];
  for (const [n, w] of cases) assert.equal(spanishNumber(n), w, String(n));
  assert.equal(spanishNumber(21, 'm'), 'veintiún');
  assert.equal(spanishNumber(21, 'f'), 'veintiuna');
  assert.equal(spanishNumber(200, 'f'), 'doscientas');
  assert.equal(spanishNumber(21_000, 'f'), 'veintiuna mil');
  assert.equal(spanishOrdinal(1), 'primero');
  assert.equal(spanishOrdinal(1, 'm', true), 'primer');
  assert.equal(spanishOrdinal(3, 'm', true), 'tercer');
  assert.equal(spanishOrdinal(13), 'decimotercero');
  assert.equal(spanishOrdinal(21, 'f'), 'vigésima primera');
});

test('números em espanhol: concordam com o substantivo que vem depois', () => {
  assert.equal(spellSpanishNumbers('Tengo 21 años y 21 primas.'), 'Tengo veintiún años y veintiuna primas.');
  assert.equal(spellSpanishNumbers('Compré 1 libro y 1 revista.'), 'Compré un libro y una revista.');
  assert.equal(spellSpanishNumbers('Llegaron 200 mil personas.'), 'Llegaron doscientas mil personas.');
  assert.equal(spellSpanishNumbers('Noviembre tiene 30 días; enero, 31 días.'), 'Noviembre tiene treinta días; enero, treinta y un días.');
  assert.equal(spellSpanishNumbers('El avión sale de la puerta 4.'), 'El avión sale de la puerta cuatro.');
  // sem substantivo: o artigo feminino (as horas) ou a forma de contar
  assert.equal(spellSpanishNumbers('Nos vemos a la 1.'), 'Nos vemos a la una.');
  assert.equal(spellSpanishNumbers('del 1 al 21'), 'del uno al veintiuno');
});

test('números em espanhol: datas, anos, horas, ordinais, decimais, milhares', () => {
  assert.equal(spellSpanishNumbers('El 15 de septiembre comemos pozole.'), 'El quince de septiembre comemos pozole.');
  assert.equal(spellSpanishNumbers('el 1 de mayo'), 'el primero de mayo');
  assert.equal(spellSpanishNumbers('el 1.º de noviembre'), 'el primero de noviembre');
  assert.equal(spellSpanishNumbers('Vivo en el 1.er piso, ella en la 3.ª planta.'), 'Vivo en el primer piso, ella en la tercera planta.');
  assert.equal(spellSpanishNumbers('Gabriel García Márquez (1927–2014)'), 'Gabriel García Márquez (mil novecientos veintisiete a dos mil catorce)');
  assert.equal(spellSpanishNumbers('Quito está a 2.850 metros de altura.'), 'Quito está a dos mil ochocientos cincuenta metros de altura.');
  assert.equal(spellSpanishNumbers('2,850 pesos'), 'dos mil ochocientos cincuenta pesos');
  assert.equal(spellSpanishNumbers('3,5 kilos'), 'tres coma cinco kilos');
  assert.equal(spellSpanishNumbers('3.5 kilos'), 'tres punto cinco kilos');
  assert.equal(spellSpanishNumbers('a las 14:30'), 'a las catorce y treinta');
  assert.equal(spellSpanishNumbers('50%'), 'cincuenta por ciento');
  assert.equal(spellSpanishNumbers('2,50 €'), 'dos euros con cincuenta céntimos');
});

test('números em espanhol: o que não é número fica como está', () => {
  for (const s of ['La fórmula del agua es H2O.', 'es-419', 'nivel A2.1', '1/4', '¡Hola!']) assert.equal(spellSpanishNumbers(s), s);
});
