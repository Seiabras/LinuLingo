import { test } from 'node:test';
import assert from 'node:assert/strict';
import { romanianNumber, romanianOrdinal, spellRomanianNumbers } from '@/services/numeros/ro';

test('números em romeno: unu/una, doi/două, e o «de» dentro do número', () => {
  const cases: [number, string][] = [
    [0, 'zero'],
    [1, 'unu'],
    [2, 'doi'],
    [11, 'unsprezece'],
    [12, 'doisprezece'],
    [14, 'paisprezece'],
    [21, 'douăzeci și unu'],
    [100, 'o sută'],
    [200, 'două sute'],
    [1000, 'o mie'],
    [1918, 'o mie nouă sute optsprezece'],
    [2005, 'două mii cinci'],
    [2042, 'două mii patruzeci și doi'],
    [12_000, 'douăsprezece mii'],
    [20_000, 'douăzeci de mii'],
    [21_000, 'douăzeci și una de mii'],
    [100_000, 'o sută de mii'],
    [1_000_000, 'un milion'],
    [2_000_000, 'două milioane'],
    [22_000_000, 'douăzeci și două de milioane'],
  ];
  for (const [n, w] of cases) assert.equal(romanianNumber(n), w, String(n));
  assert.equal(romanianNumber(1, 'm'), 'un');
  assert.equal(romanianNumber(1, 'n'), 'un');
  assert.equal(romanianNumber(1, 'f'), 'o');
  assert.equal(romanianNumber(2, 'n'), 'două');
  assert.equal(romanianNumber(12, 'f'), 'douăsprezece');
  assert.equal(romanianNumber(21, 'f'), 'douăzeci și una');
  assert.equal(romanianNumber(22, 'm'), 'douăzeci și doi');
  assert.equal(romanianOrdinal(2), 'doilea');
  assert.equal(romanianOrdinal(2, 'f'), 'doua');
  assert.equal(romanianOrdinal(8), 'optulea');
  assert.equal(romanianOrdinal(12, 'f'), 'douăsprezecea');
});

test('números em romeno: concordam com o substantivo que vem depois', () => {
  assert.equal(spellRomanianNumbers('Am 2 frați și 2 surori.'), 'Am doi frați și două surori.');
  assert.equal(spellRomanianNumbers('Am cumpărat 1 carte și 1 caiet.'), 'Am cumpărat o carte și un caiet.');
  assert.equal(spellRomanianNumbers('2 fete, 2 băieți, 2 trenuri, 2 cărți'), 'două fete, doi băieți, două trenuri, două cărți');
  assert.equal(spellRomanianNumbers('Bunicul meu are 82 de ani.'), 'Bunicul meu are optzeci și doi de ani.');
  assert.equal(spellRomanianNumbers('22 de fete, 21 de zile'), 'douăzeci și două de fete, douăzeci și una de zile');
  assert.equal(spellRomanianNumbers('12 luni, 12 băieți'), 'douăsprezece luni, doisprezece băieți');
  assert.equal(spellRomanianNumbers('Covrigul costă 2 lei.'), 'Covrigul costă doi lei.');
  assert.equal(spellRomanianNumbers('«Document rar, 1917 – 2.000 de lei»'), '«Document rar, o mie nouă sute șaptesprezece – două mii de lei»');
  assert.equal(spellRomanianNumbers('la 2.042 de metri'), 'la două mii patruzeci și doi de metri');
  // sem substantivo, a forma de contar
  assert.equal(spellRomanianNumbers('Coboară la etajul 2.'), 'Coboară la etajul doi.');
});

test('números em romeno: datas, anos, horas, ordinais, decimais', () => {
  assert.equal(spellRomanianNumbers('Pe 1 martie dăruim mărțișoare.'), 'Pe întâi martie dăruim mărțișoare.');
  assert.equal(spellRomanianNumbers('Pe 1 Decembrie 1918'), 'Pe întâi Decembrie o mie nouă sute optsprezece');
  assert.equal(spellRomanianNumbers('Pe 22 decembrie, televiziunea a anunțat…'), 'Pe douăzeci și doi decembrie, televiziunea a anunțat…');
  assert.equal(spellRomanianNumbers('Mihai Eminescu (1850–1889)'), 'Mihai Eminescu (o mie opt sute cincizeci – o mie opt sute optzeci și nouă)');
  assert.equal(spellRomanianNumbers('ora 1, ora 2, ora 12, după ora 22'), 'ora unu, ora două, ora douăsprezece, după ora douăzeci și două');
  assert.equal(spellRomanianNumbers('pentru 14 octombrie, ora 10:00'), 'pentru paisprezece octombrie, ora zece');
  assert.equal(spellRomanianNumbers('3:15, 14:30'), 'trei și cincisprezece, paisprezece și treizeci');
  assert.equal(spellRomanianNumbers('al 2-lea război, a 2-a oară'), 'al doilea război, a doua oară');
  assert.equal(spellRomanianNumbers('Farmacista îi ia temperatura: 38,5 grade.'), 'Farmacista îi ia temperatura: treizeci și opt virgulă cinci grade.');
  assert.equal(spellRomanianNumbers('Dobânda a fost redusă la 7%.'), 'Dobânda a fost redusă la șapte la sută.');
  assert.equal(spellRomanianNumbers('20 €, 1 €'), 'douăzeci de euro, un euro');
});

test('números em romeno: o que não é número fica como está', () => {
  for (const s of ['mp3', 'art. 75-1', '1/4', 'Bună ziua!']) assert.equal(spellRomanianNumbers(s), s);
});
