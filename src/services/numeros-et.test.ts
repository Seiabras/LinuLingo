import { test } from 'node:test';
import assert from 'node:assert/strict';
import { estonianNumber, estonianOrdinal, spellEstonianNumbers } from '@/services/numeros/et';

test('números em estoniano: palavras separadas (kakskümmend viis, kaks tuhat)', () => {
  const cases: [number, string][] = [
    [0, 'null'],
    [1, 'üks'],
    [10, 'kümme'],
    [11, 'üksteist'],
    [19, 'üheksateist'],
    [20, 'kakskümmend'],
    [25, 'kakskümmend viis'],
    [100, 'sada'],
    [112, 'sada kaksteist'],
    [300, 'kolmsada'],
    [1000, 'tuhat'],
    [1918, 'tuhat üheksasada kaheksateist'],
    [2025, 'kaks tuhat kakskümmend viis'],
    [45_000, 'nelikümmend viis tuhat'],
    [1_000_000, 'miljon'],
    [2_500_000, 'kaks miljonit viissada tuhat'],
  ];
  for (const [n, w] of cases) assert.equal(estonianNumber(n), w, String(n));
});

test('números em estoniano: todas as partes declinam; no comitativo e afins, só a última', () => {
  assert.equal(estonianNumber(2, 'gen'), 'kahe');
  assert.equal(estonianNumber(25, 'gen'), 'kahekümne viie');
  assert.equal(estonianNumber(25, 'ine'), 'kahekümnes viies');
  assert.equal(estonianNumber(3, 'all'), 'kolmele');
  assert.equal(estonianNumber(7, 'gen'), 'seitsme');
  assert.equal(estonianNumber(11, 'gen'), 'üheteistkümne');
  assert.equal(estonianNumber(300, 'gen'), 'kolmesaja');
  assert.equal(estonianNumber(2000, 'gen'), 'kahe tuhande');
  assert.equal(estonianNumber(25, 'com'), 'kahekümne viiega');
});

test('números em estoniano: ordinais (só a última parte; as outras no genitivo)', () => {
  assert.equal(estonianOrdinal(1), 'esimene');
  assert.equal(estonianOrdinal(2), 'teine');
  assert.equal(estonianOrdinal(3), 'kolmas');
  assert.equal(estonianOrdinal(16), 'kuueteistkümnes');
  assert.equal(estonianOrdinal(21), 'kahekümne esimene');
  assert.equal(estonianOrdinal(24), 'kahekümne neljas');
  assert.equal(estonianOrdinal(24, 'ade'), 'kahekümne neljandal');
  assert.equal(estonianOrdinal(1918, 'ade'), 'tuhande üheksasaja kaheksateistkümnendal');
  assert.equal(estonianOrdinal(2007, 'gen'), 'kahe tuhande seitsmenda');
});

test('números em estoniano: concordam com o caso do substantivo que vem depois', () => {
  assert.equal(spellEstonianNumbers('Mul on 3 maja.'), 'Mul on kolm maja.');
  assert.equal(spellEstonianNumbers('Ma elan 3 majas.'), 'Ma elan kolmes majas.');
  assert.equal(spellEstonianNumbers('Andsin raamatu 3 inimesele.'), 'Andsin raamatu kolmele inimesele.');
  assert.equal(spellEstonianNumbers('Tulen 2 nädala pärast.'), 'Tulen kahe nädala pärast.');
  // päeva é genitivo e partitivo: decide a posposição
  assert.equal(spellEstonianNumbers('Ootasin 2 päeva.'), 'Ootasin kaks päeva.');
  assert.equal(spellEstonianNumbers('Tulen 2 päeva pärast.'), 'Tulen kahe päeva pärast.');
  // comitativo: o número no genitivo
  assert.equal(spellEstonianNumbers('Ta tuli 3 sõbraga.'), 'Ta tuli kolme sõbraga.');
  assert.equal(spellEstonianNumbers('Eesti pindala on umbes 45 000 ruutkilomeetrit.'), 'Eesti pindala on umbes nelikümmend viis tuhat ruutkilomeetrit.');
  assert.equal(spellEstonianNumbers('2 xyz'), 'kaks xyz');
});

test('números em estoniano: datas, anos, horas, rótulos e compostos', () => {
  assert.equal(spellEstonianNumbers('Iseseisvuspäeva tähistatakse 24. veebruaril.'), 'Iseseisvuspäeva tähistatakse kahekümne neljandal veebruaril.');
  assert.equal(spellEstonianNumbers('24. veebruar'), 'kahekümne neljas veebruar');
  assert.equal(spellEstonianNumbers('Tartu ülikool asutati 1632. aastal.'), 'Tartu ülikool asutati tuhande kuuesaja kolmekümne teisel aastal.');
  assert.equal(spellEstonianNumbers('Alates 1. jaanuarist kehtivad uued reeglid.'), 'Alates esimesest jaanuarist kehtivad uued reeglid.');
  assert.equal(spellEstonianNumbers('Mida tehti 1988. aasta suvel?'), 'Mida tehti tuhande üheksasaja kaheksakümne kaheksanda aasta suvel?');
  assert.equal(spellEstonianNumbers('Minu poeg käib 3. klassis.'), 'Minu poeg käib kolmandas klassis.');
  assert.equal(spellEstonianNumbers('Manifest kuulutati välja 24. veebruaril 1918.'), 'Manifest kuulutati välja kahekümne neljandal veebruaril tuhat üheksasada kaheksateist.');
  assert.equal(spellEstonianNumbers('Eepos ilmus aastatel 1857–1861.'), 'Eepos ilmus aastatel tuhat kaheksasada viiskümmend seitse kuni tuhat kaheksasada kuuskümmend üks.');
  assert.equal(spellEstonianNumbers('Rong väljub kell 14.30.'), 'Rong väljub kell neliteist kolmkümmend.');
  assert.equal(spellEstonianNumbers('Eesti hädaabinumber on 112.'), 'Eesti hädaabinumber on sada kaksteist.');
  assert.equal(spellEstonianNumbers('Vastavalt punktile 4 on tähtaeg kolmkümmend päeva.'), 'Vastavalt punktile neli on tähtaeg kolmkümmend päeva.');
  assert.equal(spellEstonianNumbers('Peterson suri vaid 21-aastasena.'), 'Peterson suri vaid kahekümne üheaastasena.');
});

test('números em estoniano: decimais, porcentagens, moedas; letras e números colados ficam', () => {
  assert.equal(spellEstonianNumbers('Pilet maksab 3,50 eurot.'), 'Pilet maksab kolm koma viiskümmend eurot.');
  assert.equal(spellEstonianNumbers('See maksab 5 €.'), 'See maksab viis eurot.');
  assert.equal(spellEstonianNumbers('See maksab 1 €.'), 'See maksab üks euro.');
  assert.equal(spellEstonianNumbers('Hind tõusis 5% võrra.'), 'Hind tõusis viie protsendi võrra.');
  assert.equal(spellEstonianNumbers('Oskan eesti keelt B2 tasemel.'), 'Oskan eesti keelt B2 tasemel.');
  assert.equal(spellEstonianNumbers('Tere hommikust!'), 'Tere hommikust!');
});
