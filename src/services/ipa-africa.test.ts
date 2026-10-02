/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toIpaAm, toIpaHa, toIpaIg, toIpaOm, toIpaYo, transliterateAm } from './ipa-africa';

test('iorubá: ẹ ọ ṣ gb p, vogal nasal e os três tons (médio sem marca na escrita)', () => {
  assert.equal(toIpaYo('Ẹ kú àárọ̀!'), '[ɛ̄ kú àáɾɔ̀]');
  assert.equal(toIpaYo('ṣé gbogbo'), '[ʃé ɡ͡bōɡ͡bō]');
  assert.equal(toIpaYo('Yorùbá'), '[jōɾùbá]');
});

test('igbo: vogais com ponto, duplas e labializadas', () => {
  assert.equal(toIpaIg('Kedu ka ị mere?'), '[kedu ka ɪ meɹe]');
  assert.equal(toIpaIg('nwanne ụlọ Igbo'), '[ŋʷanne ʊlɔ iɡ͡bo]');
});

test('hauçá: implosivas, ejetivas e vogal longa', () => {
  assert.equal(toIpaHa('ƙasa ɓera ɗaki'), '[kʼasa ɓeɾa ɗaki]');
  assert.equal(toIpaHa('kaaka shi'), '[kaːka ʃi]');
});

test('oromo: ejetivas do qubee, dh implosiva, vogais e consoantes longas', () => {
  assert.equal(toIpaOm("Akkam jirta? Nagaa!"), '[akːam d͡ʒirta naɡaː]');
  assert.equal(toIpaOm("xiqqaa dhugaa ba'e"), '[tʼikʼːaː ɗuɡaː baʔe]');
});

test('amárico: fidel sílaba por sílaba, guturais em [a], 6.ª ordem sem vogal no fim', () => {
  assert.equal(toIpaAm('ሰላም'), '[səlam]');
  assert.equal(toIpaAm('አማርኛ እንዴት ቋንቋ'), '[amarɲa ɨndet kʷʼankʷʼa]');
  assert.equal(transliterateAm('ሰላም ነው?'), 'sälam näw?');
});

test('amárico: transliterateAm não deixa um "ə" sobrando em encontro consonantal no meio da palavra', () => {
  assert.equal(transliterateAm('እንጀራ'), 'ənǧära');
  assert.equal(transliterateAm('ኢትዮጵያ'), 'ityop̣ya');
  assert.equal(transliterateAm('ጤና ይስጥልኝ'), 'ṭena yəsṭəlñ');
  assert.equal(transliterateAm('olá, 123!'), 'olá, 123!');
});
