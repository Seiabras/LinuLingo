/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingDevanagari } from './reading-devanagari';

test('devanágari: apagamento do "a" final (ghara → ghar), mas não quando é a única vogal', () => {
  assert.equal(toReadingDevanagari('नमस्कार'), 'namaskār');
  assert.equal(toReadingDevanagari('कमरा'), 'kamrā');
  assert.equal(toReadingDevanagari('अपना'), 'apnā');
});

test('devanágari: regra de Ohala apaga o "a" do meio em contexto VC_CV, varrendo da direita pra esquerda', () => {
  assert.equal(toReadingDevanagari('लड़का'), 'larkā');
  assert.equal(toReadingDevanagari('पढ़ना'), 'parhnā');
  assert.equal(toReadingDevanagari('कृपया'), 'kripyā');
  assert.equal(toReadingDevanagari('समझना'), 'samajhnā');
  assert.equal(toReadingDevanagari('रहना'), 'rahnā');
  // नमस्ते NÃO perde o "a" do meio: स já está preso a um encontro (स्ते), não é C+vogal à direita
  assert.equal(toReadingDevanagari('नमस्ते'), 'namaste');
});

test('devanágari: aproximante não fica isolada no fim de um encontro (सूर्य, चंद्र)', () => {
  assert.equal(toReadingDevanagari('सूर्य'), 'sūrya');
  assert.equal(toReadingDevanagari('चंद्र'), 'chandra');
});

test('devanágari: ज्ञ é um encontro irregular (gy, não jn); nukta de empréstimo (कॉफ़ी, बड़ा)', () => {
  assert.equal(toReadingDevanagari('ज्ञान'), 'gyān');
  assert.equal(toReadingDevanagari('कॉफ़ी'), 'kofī');
  assert.equal(toReadingDevanagari('बड़ा'), 'barā');
});

test('devanágari: anusvara/candrabindu nasalizam (hā̃, nahī̃) e o ळ do marata vira "l" simples', () => {
  assert.equal(toReadingDevanagari('हाँ'), 'hā̃');
  assert.equal(toReadingDevanagari('नहीं'), 'nahī̃');
  assert.equal(toReadingDevanagari('काळा'), 'kālā');
  assert.equal(toReadingDevanagari('शाळा'), 'shālā');
});

test('devanágari: texto que não é devanágari passa intacto', () => {
  assert.equal(toReadingDevanagari('olá, 123!'), 'olá, 123!');
});
