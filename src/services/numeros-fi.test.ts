import { test } from 'node:test';
import assert from 'node:assert/strict';
import { finnishNumber, finnishOrdinal, spellFinnishNumbers } from '@/services/numeros/fi';

test('números em finlandês: uma palavra só, o multiplicado no partitivo (kaksikymmentä, kolmesataa, neljätuhatta)', () => {
  const cases: [number, string][] = [
    [0, 'nolla'],
    [1, 'yksi'],
    [10, 'kymmenen'],
    [11, 'yksitoista'],
    [19, 'yhdeksäntoista'],
    [20, 'kaksikymmentä'],
    [25, 'kaksikymmentäviisi'],
    [100, 'sata'],
    [101, 'satayksi'],
    [200, 'kaksisataa'],
    [214, 'kaksisataaneljätoista'],
    [1000, 'tuhat'],
    [1917, 'tuhatyhdeksänsataaseitsemäntoista'],
    [2009, 'kaksituhattayhdeksän'],
    [21_000, 'kaksikymmentäyksituhatta'],
    [190_000, 'satayhdeksänkymmentätuhatta'],
    [1_000_000, 'miljoona'],
    [2_500_000, 'kaksi miljoonaa viisisataatuhatta'],
  ];
  for (const [n, w] of cases) assert.equal(finnishNumber(n), w, String(n));
});

test('números em finlandês: todas as partes declinam', () => {
  assert.equal(finnishNumber(25, 'ine'), 'kahdessakymmenessäviidessä');
  assert.equal(finnishNumber(2, 'gen'), 'kahden');
  assert.equal(finnishNumber(3, 'all'), 'kolmelle');
  assert.equal(finnishNumber(100, 'ine'), 'sadassa');
  assert.equal(finnishNumber(1000, 'gen'), 'tuhannen');
  assert.equal(finnishNumber(12, 'ade'), 'kahdellatoista');
  assert.equal(finnishNumber(5, 'ill'), 'viiteen');
  assert.equal(finnishNumber(7, 'ess'), 'seitsemänä');
  assert.equal(finnishNumber(1, 'tra'), 'yhdeksi');
  assert.equal(finnishNumber(300, 'ela'), 'kolmestasadasta');
});

test('números em finlandês: ordinais', () => {
  assert.equal(finnishOrdinal(1), 'ensimmäinen');
  assert.equal(finnishOrdinal(2), 'toinen');
  assert.equal(finnishOrdinal(6), 'kuudes');
  assert.equal(finnishOrdinal(12), 'kahdestoista');
  assert.equal(finnishOrdinal(21), 'kahdeskymmenesensimmäinen');
  assert.equal(finnishOrdinal(28), 'kahdeskymmeneskahdeksas');
  assert.equal(finnishOrdinal(28, 'ess'), 'kahdentenakymmenentenäkahdeksantena');
  assert.equal(finnishOrdinal(3, 'ine'), 'kolmannessa');
  assert.equal(finnishOrdinal(15, 'ess'), 'viidentenätoista');
});

test('números em finlandês: concordam com o caso do substantivo que vem depois', () => {
  assert.equal(spellFinnishNumbers('Minulla on 3 taloa.'), 'Minulla on kolme taloa.');
  assert.equal(spellFinnishNumbers('Asun 3 talossa.'), 'Asun kolmessa talossa.');
  assert.equal(spellFinnishNumbers('Annoin kirjan 3 ihmiselle.'), 'Annoin kirjan kolmelle ihmiselle.');
  assert.equal(spellFinnishNumbers('Tulen 2 viikon päästä.'), 'Tulen kahden viikon päästä.');
  assert.equal(spellFinnishNumbers('Se tapahtui 100 vuodessa.'), 'Se tapahtui sadassa vuodessa.');
  assert.equal(spellFinnishNumbers('He asuivat 25 kaupungissa.'), 'He asuivat kahdessakymmenessäviidessä kaupungissa.');
  assert.equal(spellFinnishNumbers('Ostin 1 auton.'), 'Ostin yhden auton.');
  assert.equal(spellFinnishNumbers('Suomessa on noin 190 000 järveä.'), 'Suomessa on noin satayhdeksänkymmentätuhatta järveä.');
  // um adjetivo no meio
  assert.equal(spellFinnishNumbers('Asun 2 isossa talossa.'), 'Asun kahdessa isossa talossa.');
  // palavra desconhecida: a forma de contar
  assert.equal(spellFinnishNumbers('2 xyz'), 'kaksi xyz');
});

test('números em finlandês: anos, datas, horas, rótulos e compostos', () => {
  assert.equal(spellFinnishNumbers('Suomi on ollut itsenäinen vuodesta 1917.'), 'Suomi on ollut itsenäinen vuodesta tuhatyhdeksänsataaseitsemäntoista.');
  assert.equal(spellFinnishNumbers('Hän kuoli vuoden 1872 viimeisenä päivänä.'), 'Hän kuoli vuoden tuhatkahdeksansataaseitsemänkymmentäkaksi viimeisenä päivänä.');
  assert.equal(spellFinnishNumbers('Kalevalan päivää vietetään 28. helmikuuta.'), 'Kalevalan päivää vietetään kahdeskymmeneskahdeksas helmikuuta.');
  assert.equal(spellFinnishNumbers('Kalevalan päivää vietetään helmikuun 28. päivänä.'), 'Kalevalan päivää vietetään helmikuun kahdentenakymmenentenäkahdeksantena päivänä.');
  assert.equal(spellFinnishNumbers('Itsenäisyyspäivä on 6.12.'), 'Itsenäisyyspäivä on kuudes joulukuuta.');
  assert.equal(spellFinnishNumbers('Asun 3. kerroksessa.'), 'Asun kolmannessa kerroksessa.');
  assert.equal(spellFinnishNumbers('Juna lähtee klo 14.30.'), 'Juna lähtee kello neljätoista kolmekymmentä.');
  assert.equal(spellFinnishNumbers('Herään kello 7 aamulla.'), 'Herään kello seitsemän aamulla.');
  assert.equal(spellFinnishNumbers('Huone 214 on toisessa kerroksessa.'), 'Huone kaksisataaneljätoista on toisessa kerroksessa.');
  assert.equal(spellFinnishNumbers('Kirkko rakennettiin 1400-luvulla.'), 'Kirkko rakennettiin tuhatneljäsataaluvulla.');
  assert.equal(spellFinnishNumbers('Hän on 5-vuotias.'), 'Hän on viisivuotias.');
  assert.equal(spellFinnishNumbers('Se on 3:ssa osassa.'), 'Se on kolmessa osassa.');
});

test('números em finlandês: decimais, porcentagens, moedas; letras e números colados ficam', () => {
  assert.equal(spellFinnishNumbers('Kuume on 37,5 astetta.'), 'Kuume on kolmekymmentäseitsemän pilkku viisi astetta.');
  assert.equal(spellFinnishNumbers('Se maksaa 3,50 €.'), 'Se maksaa kolme pilkku viisikymmentä euroa.');
  assert.equal(spellFinnishNumbers('Se maksaa 1 €.'), 'Se maksaa yksi euro.');
  assert.equal(spellFinnishNumbers('Alv on 24 %.'), 'Alv on kaksikymmentäneljä prosenttia.');
  assert.equal(spellFinnishNumbers('Hinnat nousivat 2 %:lla.'), 'Hinnat nousivat kahdella prosentilla.');
  assert.equal(spellFinnishNumbers('Osaan suomea B2-tasolla.'), 'Osaan suomea B2-tasolla.');
  assert.equal(spellFinnishNumbers('Hyvää huomenta!'), 'Hyvää huomenta!');
});
