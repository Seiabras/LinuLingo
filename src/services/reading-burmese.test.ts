/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingMy } from './reading-burmese';
import { VOCAB_MY } from '@/data/my/vocabulario';
import { MLCTS_MY } from '@/data/my/mlcts';

// Os valores esperados são o MLCTS mostrado na página de cada verbete do Wiktionary em inglês
// (en.wiktionary.org/wiki/<palavra>, linha «Romanization: MLCTS»), copiados um a um.

test('birmanês: os quatro tons do MLCTS (baixo sem marca, alto «:», rangido «.», checado pela consoante final)', () => {
  assert.equal(toReadingMy('ရေ'), 're'); // baixo
  assert.equal(toReadingMy('ခွေး'), 'hkwe:'); // alto
  assert.equal(toReadingMy('မြို့'), 'mrui.'); // rangido
  assert.equal(toReadingMy('ကြက်'), 'krak'); // checado
  assert.equal(toReadingMy('က'), 'ka.'); // vogal inerente, rangida
});

test('birmanês: mediais, aspiração e consoante empilhada', () => {
  assert.equal(toReadingMy('ကျွန်တော်'), 'kywantau');
  assert.equal(toReadingMy('ငှက်'), 'hngak');
  assert.equal(toReadingMy('ကပ္ပီတန်'), 'kappitan'); // ပ္ပ: a de cima fecha a sílaba
  assert.equal(toReadingMy('မင်္ဂလာပါ'), 'mangga.lapa'); // kinzi (င်္)
  assert.equal(toReadingMy('ကျွန်တော့်'), 'kywantau.'); // ့ antes do ်
});

test('birmanês: hífen do MLCTS entre sílabas que poderiam se ler como uma consoante só', () => {
  assert.equal(toReadingMy('သူငယ်ချင်း'), 'su-ngaihkyang:');
  assert.equal(toReadingMy('လက်ဖက်ရည်'), 'lakhpak-rany');
  assert.equal(toReadingMy('ကြက်ဥ'), 'krak-u.');
});

test('birmanês: as abreviações literárias ၏ ၌ ၍ e a pontuação', () => {
  assert.equal(toReadingMy('ကျေးဇူးပြု၍'), 'kye:ju:pru.rwe');
  assert.equal(toReadingMy('၏'), 'e');
  assert.equal(toReadingMy('ဒီနေ့ ကျွန်တော် လာပါတယ်။'), 'dine. kywantau lapatai.');
  assert.equal(toReadingMy('၁၀'), '10');
});

test('birmanês: texto que não é birmanês passa intacto', () => {
  assert.equal(toReadingMy('olá, 123!'), 'olá, 123!');
});

test('birmanês: a leitura de cada palavra do vocabulário bate com o MLCTS do Wiktionary', () => {
  for (const v of VOCAB_MY) {
    const esperado = MLCTS_MY[v.word_target];
    assert.ok(esperado !== undefined, `falta o MLCTS de ${v.word_target}`);
    assert.equal(toReadingMy(v.word_target), esperado, v.word_target);
  }
});
