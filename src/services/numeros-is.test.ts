import { test } from 'node:test';
import assert from 'node:assert/strict';
import { icelandicNumber, icelandicOrdinal, icelandicYear, spellIcelandicNumbers } from '@/services/numeros/is';

test('números em islandês: as formas de contar e o «og» antes da última palavra', () => {
  const cases: [number, string][] = [
    [0, 'núll'],
    [1, 'einn'],
    [2, 'tveir'],
    [4, 'fjórir'],
    [17, 'sautján'],
    [21, 'tuttugu og einn'],
    [45, 'fjörutíu og fimm'],
    [100, 'hundrað'],
    [120, 'hundrað og tuttugu'],
    [125, 'hundrað tuttugu og fimm'],
    [200, 'tvö hundruð'],
    [1000, 'þúsund'],
    [1500, 'þúsund og fimm hundruð'],
    [2024, 'tvö þúsund tuttugu og fjórir'],
    [3000, 'þrjú þúsund'],
    [21_000, 'tuttugu og eitt þúsund'],
    [1_000_000, 'ein milljón'],
    [2_000_000, 'tvær milljónir'],
  ];
  for (const [n, w] of cases) assert.equal(icelandicNumber(n), w, String(n));
  assert.equal(icelandicNumber(22, { g: 'f', c: 'nom' }), 'tuttugu og tvær');
  assert.equal(icelandicNumber(3, { g: 'n', c: 'nom' }), 'þrjú');
  assert.equal(icelandicNumber(3, { g: 'm', c: 'acc' }), 'þrjá');
  assert.equal(icelandicNumber(2, { g: 'f', c: 'dat' }), 'tveimur');
  assert.equal(icelandicNumber(4, { g: 'n', c: 'gen' }), 'fjögurra');
  assert.equal(icelandicNumber(1, { g: 'f', c: 'dat' }), 'einni');
  assert.equal(icelandicYear(1944), 'nítján hundruð fjörutíu og fjögur');
  assert.equal(icelandicYear(1918), 'nítján hundruð og átján');
  assert.equal(icelandicOrdinal(17, { g: 'm', c: 'nom' }), 'sautjándi');
  assert.equal(icelandicOrdinal(17, { g: 'm', c: 'acc' }), 'sautjánda');
  assert.equal(icelandicOrdinal(9, { g: 'f', c: 'dat' }), 'níundu');
  assert.equal(icelandicOrdinal(2, { g: 'm', c: 'acc' }), 'annan');
  assert.equal(icelandicOrdinal(23, { g: 'm', c: 'acc' }), 'tuttugasta og þriðja');
});

test('números em islandês: concordam em gênero e caso com o substantivo', () => {
  assert.equal(spellIcelandicNumbers('Ég á 2 bíla.'), 'Ég á tvo bíla.');
  assert.equal(spellIcelandicNumbers('2 bílar standa hér.'), 'tveir bílar standa hér.');
  assert.equal(spellIcelandicNumbers('Þau eiga 3 börn.'), 'Þau eiga þrjú börn.');
  assert.equal(spellIcelandicNumbers('Hún á 2 dætur og 3 syni.'), 'Hún á tvær dætur og þrjá syni.');
  assert.equal(spellIcelandicNumbers('Ég var þar í 3 daga.'), 'Ég var þar í þrjá daga.');
  assert.equal(spellIcelandicNumbers('Hann bjó í 3 ár í Ósló.'), 'Hann bjó í þrjú ár í Ósló.');
  assert.equal(spellIcelandicNumbers('Hann flutti fyrir 2 árum.'), 'Hann flutti fyrir tveimur árum.');
  assert.equal(spellIcelandicNumbers('með 4 hestum'), 'með fjórum hestum');
  assert.equal(spellIcelandicNumbers('til 4 ára'), 'til fjögurra ára');
  assert.equal(spellIcelandicNumbers('Þar voru 2 konur og 1 maður.'), 'Þar voru tvær konur og einn maður.');
  assert.equal(spellIcelandicNumbers('Það kostar 22 krónur.'), 'Það kostar tuttugu og tvær krónur.');
  assert.equal(spellIcelandicNumbers('Hún keypti 2 stórar bækur.'), 'Hún keypti tvær stórar bækur.');
  assert.equal(spellIcelandicNumbers('Húsið kostar 3,5 milljónir.'), 'Húsið kostar þrjár komma fimm milljónir.');
  // palavra desconhecida: a forma de contar; nas horas e nas contas
  assert.equal(spellIcelandicNumbers('2 xyz'), 'tveir xyz');
  assert.equal(spellIcelandicNumbers('Klukkan er 2.'), 'Klukkan er tvö.');
  assert.equal(spellIcelandicNumbers('2 + 2 = 4'), 'tveir + tveir = fjórir');
});

test('números em islandês: frases do curso (datas, séculos, anos, dinheiro)', () => {
  assert.equal(spellIcelandicNumbers('Lýðveldið Ísland var stofnað 17. júní 1944.'), 'Lýðveldið Ísland var stofnað sautjánda júní nítján hundruð fjörutíu og fjögur.');
  assert.equal(spellIcelandicNumbers('Dagur íslenskrar tungu er 16. nóvember.'), 'Dagur íslenskrar tungu er sextándi nóvember.');
  assert.equal(spellIcelandicNumbers('Umsóknum skal skilað fyrir 1. mars.'), 'Umsóknum skal skilað fyrir fyrsta mars.');
  assert.equal(spellIcelandicNumbers('Eldgosið hófst um miðja nótt 23. janúar 1973.'), 'Eldgosið hófst um miðja nótt tuttugasta og þriðja janúar nítján hundruð sjötíu og þrjú.');
  assert.equal(spellIcelandicNumbers('Ísland var numið á 9. öld.'), 'Ísland var numið á níundu öld.');
  assert.equal(spellIcelandicNumbers('Á 17. og 18. öld safnaði Árni handritum.'), 'Á sautjándu og átjándu öld safnaði Árni handritum.');
  assert.equal(spellIcelandicNumbers('Alþingi var stofnað á Þingvöllum árið 930.'), 'Alþingi var stofnað á Þingvöllum árið níu hundruð og þrjátíu.');
  assert.equal(spellIcelandicNumbers('Árið 1000 ákvað Alþingi að taka kristni.'), 'Árið þúsund ákvað Alþingi að taka kristni.');
  assert.equal(spellIcelandicNumbers('Eftir að Ísland varð lýðveldi árið 1944 kröfðust Íslendingar þess.'), 'Eftir að Ísland varð lýðveldi árið nítján hundruð fjörutíu og fjögur kröfðust Íslendingar þess.');
  assert.equal(spellIcelandicNumbers('Eyjafjallajökull gaus árið 2010.'), 'Eyjafjallajökull gaus árið tvö þúsund og tíu.');
  assert.equal(spellIcelandicNumbers('Snorri var veginn árið 1241.'), 'Snorri var veginn árið tólf hundruð fjörutíu og eitt.');
  assert.equal(spellIcelandicNumbers('Miðinn kostar 1.500 kr.'), 'Miðinn kostar þúsund og fimm hundruð krónur.');
  assert.equal(spellIcelandicNumbers('Það kostar 21 kr.'), 'Það kostar tuttugu og ein króna.');
  assert.equal(spellIcelandicNumbers('Verðið hækkaði um 10%.'), 'Verðið hækkaði um tíu prósent.');
  assert.equal(spellIcelandicNumbers('Fundurinn er kl. 14.30.'), 'Fundurinn er kl. fjórtán þrjátíu.');
  assert.equal(spellIcelandicNumbers('Hringdu í 112!'), 'Hringdu í einn einn tveir!');
  assert.equal(spellIcelandicNumbers('V2, 3D, mp3, A1.1'), 'V2, 3D, mp3, A1.1');
});
