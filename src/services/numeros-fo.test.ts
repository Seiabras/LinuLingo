import { test } from 'node:test';
import assert from 'node:assert/strict';
import { faroeseNumber, spellFaroeseNumbers } from '@/services/numeros/fo';

test('números em feroês: as formas da trilha (tjúgu og ein, fimmti, hundrað, túsund)', () => {
  const cases: [number, string][] = [
    [0, 'null'],
    [1, 'ein'],
    [3, 'trý'],
    [12, 'tólv'],
    [19, 'nítjan'],
    [20, 'tjúgu'],
    [21, 'tjúgu og ein'],
    [45, 'fýrati og fimm'],
    [50, 'fimmti'],
    [99, 'níti og níggju'],
    [100, 'hundrað'],
    [120, 'hundrað og tjúgu'],
    [125, 'hundrað tjúgu og fimm'],
    [200, 'tvey hundrað'],
    [305, 'trý hundrað og fimm'],
    [1000, 'túsund'],
    [1846, 'túsund átta hundrað fýrati og seks'],
    [2000, 'tvey túsund'],
    [2026, 'tvey túsund tjúgu og seks'],
    [2030, 'tvey túsund og tríati'],
    [70000, 'sjeyti túsund'],
    [1_000_000, 'ein millión'],
    [2_000_000, 'tvær milliónir'],
    [3_000_000, 'tríggjar milliónir'],
    [21_000, 'tjúgu og eitt túsund'],
    [22_000, 'tjúgu og tvey túsund'],
    [2500, 'tvey túsund og fimm hundrað'],
    [1100, 'túsund og eitt hundrað'],
    [1_000_005, 'ein millión og fimm'],
    [1_001_000, 'ein millión og eitt túsund'],
    [2_000_020, 'tvær milliónir og tjúgu'],
    [125_000, 'hundrað tjúgu og fimm túsund'],
  ];
  for (const [n, w] of cases) assert.equal(faroeseNumber(n), w, String(n));
});

test('números em feroês: dentro do texto, com decimais e milhares', () => {
  assert.equal(spellFaroeseNumbers('Í Føroyum eru 70.000 seyðir.'), 'Í Føroyum eru sjeyti túsund seyðir.');
  assert.equal(spellFaroeseNumbers('Tað kostar 12 krónur.'), 'Tað kostar tólv krónur.');
  assert.equal(spellFaroeseNumbers('3,5 kilometrar'), 'trý komma fimm kilometrar');
  assert.equal(spellFaroeseNumbers('Klokkan er 7.'), 'Klokkan er sjey.');
  assert.equal(spellFaroeseNumbers('Klokkan er 2.'), 'Klokkan er tvey.');
  assert.equal(spellFaroeseNumbers('2 + 2 = 4'), 'tvey + tvey = fýra');
  assert.equal(spellFaroeseNumbers('Flogfarið lendir klokkan 2.'), 'Flogfarið lendir klokkan tvey.');
  assert.equal(spellFaroeseNumbers('Góðan morgun!'), 'Góðan morgun!');
});

test('números em feroês: concordam com o gênero do substantivo que vem depois', () => {
  assert.equal(spellFaroeseNumbers('Eg havi 2 brøður.'), 'Eg havi tveir brøður.');
  assert.equal(spellFaroeseNumbers('Hon hevur 2 systrar.'), 'Hon hevur tvær systrar.');
  assert.equal(spellFaroeseNumbers('Tey hava 2 børn.'), 'Tey hava tvey børn.');
  assert.equal(spellFaroeseNumbers('3 menn sita við borðið.'), 'tríggir menn sita við borðið.');
  assert.equal(spellFaroeseNumbers('3 kvinnur arbeiða her.'), 'tríggjar kvinnur arbeiða her.');
  assert.equal(spellFaroeseNumbers('Tað kostar 22 krónur.'), 'Tað kostar tjúgu og tvær krónur.');
  assert.equal(spellFaroeseNumbers('Hann er 2 ára gamal.'), 'Hann er tvey ára gamal.');
  // um adjetivo no meio
  assert.equal(spellFaroeseNumbers('Hon keypti 2 stórar bøkur.'), 'Hon keypti tvær stórar bøkur.');
  // palavra desconhecida: a forma de contar
  assert.equal(spellFaroeseNumbers('2 xyz'), 'tveir xyz');
});

test('números em feroês: datas, séculos, anos, e o que não é número de falar', () => {
  assert.equal(spellFaroeseNumbers('Tingið verður sett 29. juli.'), 'Tingið verður sett tjúgunda og níggjunda juli.');
  assert.equal(spellFaroeseNumbers('áðrenn 1. mai'), 'áðrenn fyrsta mai');
  assert.equal(spellFaroeseNumbers('tann 28. og 29. juli'), 'tann tjúgunda og áttanda og tjúgunda og níggjunda juli');
  assert.equal(spellFaroeseNumbers('Eftir siðaskiftið í 16. øld'), 'Eftir siðaskiftið í sekstandu øld');
  assert.equal(spellFaroeseNumbers('Í 1846 gav hann út'), 'Í átjan hundrað fýrati og seks gav hann út');
  assert.equal(spellFaroeseNumbers('frá 1909.'), 'frá nítjan hundrað og níggju.');
  assert.equal(spellFaroeseNumbers('í 2026'), 'í tvey túsund tjúgu og seks');
  for (const t of ['Regra V2', '3ª pessoa', '1º lugar', 'mp3']) assert.equal(spellFaroeseNumbers(t), t);
});
