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

test('traços de sotaque: o mesmo texto com o «s», o «r», o t/d e as vogais de cada lugar', () => {
  const lex = { ...LEX, chuva: 'chúva', tia: 'tía', oito: 'ôito' };
  // carioca: «s» chiado e «r» na garganta
  assert.equal(toIpaPt('festas', 'BR', lex, { sCoda: 'ʃ' }), '[ˈfɛʃtɐʃ]');
  assert.equal(toIpaPt('porta', 'BR', lex, { rCoda: 'χ' }), '[ˈpɔχtɐ]');
  // caipira: «r» retroflexo
  assert.equal(toIpaPt('porta', 'BR', lex, { rCoda: 'ɻ' }), '[ˈpɔɻtɐ]');
  // Recife: «tia» sem chiado, mas «oito» chia depois do [j]
  assert.equal(toIpaPt('tia', 'BR', lex, { palatalTD: 'apos-j' }), '[ˈtiɐ]');
  assert.equal(toIpaPt('oito', 'BR', lex, { palatalTD: 'apos-j' }), '[ˈojt͡ʃu]');
  // Nordeste: pretônicas abertas; o «de» acompanha o t/d sem chiado
  assert.equal(toIpaPt('pequeno', 'BR', lex, { pretonicaAberta: true }), '[pɛˈkenu]');
  assert.equal(toIpaPt('de', 'BR', lex, { palatalTD: 'nunca' }), '[di]');
  // Cuiabá e Trás-os-Montes: «ch» [tʃ]; Cuiabá: «j» [dʒ]
  assert.equal(toIpaPt('chuva', 'BR', lex, { ch: 't͡ʃ' }), '[ˈt͡ʃuvɐ]');
  assert.equal(toIpaPt('chuva', 'PT', lex, { ch: 't͡ʃ' }), '[ˈt͡ʃuvɐ]');
  // interior gaúcho: «e» final [e] e t/d sem chiado
  assert.equal(toIpaPt('leite', 'BR', lex, { eFinal: 'e', palatalTD: 'nunca' }), '[ˈlejte]');
  // Norte de Portugal: betacismo e «ei» [ej]; Sul: «ei» [e]
  assert.equal(toIpaPt('leite', 'PT', lex, { ei: 'ej' }), '[ˈlejtɨ]');
  assert.equal(toIpaPt('leite', 'PT', lex, { ei: 'e' }), '[ˈletɨ]');
  // São Miguel: «u» tônico [y]
  assert.equal(toIpaPt('chuva', 'PT', lex, { uTonico: 'y' }), '[ˈʃyvɐ]');
  // Angola: átonas plenas
  assert.equal(toIpaPt('pequeno', 'PT', lex, { atonas: 'plenas' }), '[peˈkenu]');
  // sem traços, nada muda
  assert.equal(toIpaPt('festas', 'BR', lex), '[ˈfɛstɐs]');
  assert.equal(toIpaPt('leite', 'PT', lex), '[ˈlɐjtɨ]');
});

test('traços de sotaque: o «s» do Nordeste chia só antes de t e d', () => {
  const lex = { ...LEX, mesmo: 'mêsmo', mas: 'mas' };
  assert.equal(toIpaPt('festas', 'BR', lex, { sCoda: 'ʃtd' }), '[ˈfɛʃtɐs]');
  assert.equal(toIpaPt('mesmo', 'BR', lex, { sCoda: 'ʃtd' }), '[ˈmezmu]');
  assert.equal(toIpaPt('mesmo', 'BR', lex, { sCoda: 'ʃtd-ɦ' }), '[ˈmeɦmu]');
  assert.equal(toIpaPt('os', 'BR', lex, { sCoda: 'ʃtd' }), '[us]');
  assert.equal(toIpaPt('os', 'BR', lex, { sCoda: 'ʃ' }), '[uʃ]');
});

test('traços de sotaque: «r» e «l» finais que caem, «j» espanhol e «-em» fechado', () => {
  const lex = { ...LEX, estar: 'estár', manuel: 'manuél', hoje: 'hôje' };
  assert.equal(toIpaPt('estar', 'PT', lex, { rFinalCai: true }), '[iʃˈta]');
  assert.equal(toIpaPt('Manuel', 'PT', lex, { rFinalCai: true }), '[mɐnuˈɛ]');
  assert.equal(toIpaPt('hoje', 'PT', lex, { j: 'x' }), '[ˈoxɨ]');
  assert.equal(toIpaPt('bem', 'PT', lex, { ei: 'ej' }), '[bẽj̃]');
  assert.equal(toIpaPt('em', 'PT', lex, { ei: 'ej' }), '[ẽj̃]');
});
