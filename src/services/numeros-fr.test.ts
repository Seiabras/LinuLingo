import { test } from 'node:test';
import assert from 'node:assert/strict';
import { frenchNumber, frenchOrdinal, spellFrenchNumbers } from '@/services/numeros/fr';

test('números em francês: hífens, «et», quatre-vingts, cents e mille', () => {
  const cases: [number, string][] = [
    [0, 'zéro'],
    [1, 'un'],
    [17, 'dix-sept'],
    [21, 'vingt et un'],
    [22, 'vingt-deux'],
    [70, 'soixante-dix'],
    [71, 'soixante et onze'],
    [80, 'quatre-vingts'],
    [81, 'quatre-vingt-un'],
    [91, 'quatre-vingt-onze'],
    [99, 'quatre-vingt-dix-neuf'],
    [100, 'cent'],
    [200, 'deux cents'],
    [201, 'deux cent un'],
    [1000, 'mille'],
    [1789, 'mille sept cent quatre-vingt-neuf'],
    [1946, 'mille neuf cent quarante-six'],
    [2026, 'deux mille vingt-six'],
    [80_000, 'quatre-vingt mille'],
    [200_000, 'deux cent mille'],
    [1_000_000, 'un million'],
    [200_000_000, 'deux cents millions'],
  ];
  for (const [n, w] of cases) assert.equal(frenchNumber(n), w, String(n));
  assert.equal(frenchNumber(21, 'f'), 'vingt et une');
  assert.equal(frenchNumber(81, 'f'), 'quatre-vingt-une');
  assert.equal(frenchOrdinal(1), 'premier');
  assert.equal(frenchOrdinal(1, 'f'), 'première');
  assert.equal(frenchOrdinal(3), 'troisième');
  assert.equal(frenchOrdinal(5), 'cinquième');
  assert.equal(frenchOrdinal(9), 'neuvième');
  assert.equal(frenchOrdinal(21), 'vingt et unième');
  assert.equal(frenchOrdinal(80), 'quatre-vingtième');
});

test('números em francês: o «un» concorda com o substantivo que vem depois', () => {
  assert.equal(spellFrenchNumbers("J'ai 21 ans."), "J'ai vingt et un ans.");
  assert.equal(spellFrenchNumbers('Le livre a 21 pages.'), 'Le livre a vingt et une pages.');
  assert.equal(spellFrenchNumbers('Il reste 1 place.'), 'Il reste une place.');
  assert.equal(spellFrenchNumbers('Les Mille et 1 nuits'), 'Les Mille et une nuits');
  assert.equal(spellFrenchNumbers('1 belle maison'), 'une belle maison');
  assert.equal(spellFrenchNumbers('Je préfère voir les 374 marches.'), 'Je préfère voir les trois cent soixante-quatorze marches.');
  // sem substantivo, un
  assert.equal(spellFrenchNumbers('Du 41 ?'), 'Du quarante et un ?');
});

test('números em francês: datas, anos, horas, ordinais, decimais, milhares', () => {
  assert.equal(spellFrenchNumbers('Le peuple a pris la Bastille le 14 juillet 1789.'), 'Le peuple a pris la Bastille le quatorze juillet mille sept cent quatre-vingt-neuf.');
  assert.equal(spellFrenchNumbers('à compter du 1er janvier'), 'à compter du premier janvier');
  assert.equal(spellFrenchNumbers('le 1 mai'), 'le premier mai');
  assert.equal(spellFrenchNumbers('la 1re fois, le 2e étage, le 2nd tour'), 'la première fois, le deuxième étage, le second tour');
  assert.equal(spellFrenchNumbers('La Fontaine (1621–1695)'), 'La Fontaine (mille six cent vingt et un à mille six cent quatre-vingt-quinze)');
  assert.equal(spellFrenchNumbers('Le musée ouvre à 9 h 30 le mardi 2 avril.'), 'Le musée ouvre à neuf heures trente le mardi deux avril.');
  assert.equal(spellFrenchNumbers('à 18h, à 1 h, à 21 h, 14:30'), 'à dix-huit heures, à une heure, à vingt et une heures, quatorze heures trente');
  assert.equal(spellFrenchNumbers('à 3 842 mètres'), 'à trois mille huit cent quarante-deux mètres');
  assert.equal(spellFrenchNumbers('1.800 mètres'), 'mille huit cents mètres');
  assert.equal(spellFrenchNumbers('3,5 km'), 'trois virgule cinq km');
  assert.equal(spellFrenchNumbers('50 %'), 'cinquante pour cent');
  assert.equal(spellFrenchNumbers('2,50 €'), 'deux euros cinquante');
});

test('números em francês: o que não é número fica como está', () => {
  for (const s of ['le XXe siècle', 'mp3', 'art. 75-1', '1/4', 'Bonjour !']) assert.equal(spellFrenchNumbers(s), s);
});
