/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaPt, wordToIpaPt } from './ipa-pt';

// dicionário mínimo com a grafia dos dicionários (tônica e timbre)
const LEX = {
  porta: 'pórta',
  mesa: 'mêsa',
  escola: 'escóla',
  pequeno: 'pequêno',
  leite: 'lêite',
  homem: 'hómem',
  senhor: 'senhôr',
  comboio: 'combóio',
  queijo: 'quêijo',
  'táxi': 'táẋi',
  'próximo': 'próẍimo',
  nove: 'nóve',
  bolo: 'bôlo',
  festas: 'féstas',
  espelho: 'espêlho',
  venho: 'vênho',
};

const PT: [string, string][] = [
  ['casa', 'ˈkazɐ'],
  ['porta', 'ˈpɔɾtɐ'],
  ['mesa', 'ˈmezɐ'],
  ['falar', 'fɐˈlaɾ'],
  ['escola', 'iʃˈkɔlɐ'],
  ['pequeno', 'pɨˈkenu'],
  ['leite', 'ˈlɐjtɨ'],
  ['pão', 'pɐ̃w̃'],
  ['mãe', 'mɐ̃j̃'],
  ['bem', 'bɐ̃j̃'],
  ['homem', 'ˈɔmɐ̃j̃'],
  ['falam', 'ˈfalɐ̃w̃'],
  ['cidade', 'siˈdadɨ'],
  ['trabalho', 'tɾɐˈbaʎu'],
  ['senhor', 'sɨˈɲoɾ'],
  ['Brasil', 'bɾɐˈziɫ'],
  ['comboio', 'kõˈbɔju'],
  ['telemóvel', 'tɨlɨˈmɔvɛɫ'],
  ['exame', 'iˈzɐmɨ'],
  ['ouvir', 'oˈviɾ'],
  ['quatro', 'ˈkwatɾu'],
  ['queijo', 'ˈkɐjʒu'],
  ['água', 'ˈagwɐ'],
  ['também', 'tɐ̃ˈbɐ̃j̃'],
  ['coração', 'kuɾɐˈsɐ̃w̃'],
  ['avô', 'ɐˈvo'],
  ['rato', 'ˈʁatu'],
  ['carro', 'ˈkaʁu'],
  ['festas', 'ˈfɛʃtɐʃ'],
  ['táxi', 'ˈtaksi'],
  ['próximo', 'ˈpɾɔsimu'],
  ['lições', 'liˈsõj̃ʃ'],
  ['mesmo', 'ˈmeʒmu'],
  ['espelho', 'iʃˈpɐʎu'],
  ['venho', 'ˈvɐɲu'],
];

const BR: [string, string][] = [
  ['cidade', 'siˈdad͡ʒi'],
  ['leite', 'ˈlejt͡ʃi'],
  ['Brasil', 'bɾaˈziw'],
  ['porta', 'ˈpɔhtɐ'],
  ['mesa', 'ˈmezɐ'],
  ['pequeno', 'peˈkenu'],
  ['festas', 'ˈfɛstɐs'],
  ['bem', 'bẽj̃'],
  ['tia', 'ˈt͡ʃiɐ'],
];

test('português de Portugal em IPA', () => {
  for (const [w, ipa] of PT) assert.equal(wordToIpaPt(w, 'PT', LEX), ipa, w);
});

test('português do Brasil em IPA', () => {
  for (const [w, ipa] of BR) assert.equal(wordToIpaPt(w, 'BR', LEX), ipa, w);
});

test('frases: clíticos e hífen', () => {
  assert.equal(toIpaPt('Diz-me a verdade.', 'PT', { ...LEX, verdade: 'verdáde' }), '[diʃ mɨ ɐ vɨɾˈdadɨ]');
});
