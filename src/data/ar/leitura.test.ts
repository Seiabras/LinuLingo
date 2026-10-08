/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LEITURA_AR } from './leitura';

test('árabe: palavra conhecida da tabela', () => {
  assert.equal(LEITURA_AR.reading('سلام'), 'salām');
  assert.equal(LEITURA_AR.reading('قهوة'), 'qahwa');
});

test('árabe: o artigo "al-" assimila antes das letras solares', () => {
  assert.equal(LEITURA_AR.reading('الشمس'), 'ash-shams');
  assert.equal(LEITURA_AR.reading('القمر'), 'al-qamar'); // ق não é letra solar
});

test('árabe: "wa-" (e) tira o a- do artigo seguinte', () => {
  assert.equal(LEITURA_AR.reading('والسكر'), 'wa-s-sukkar');
});

test('árabe: frase inteira, palavra a palavra, com espaços preservados', () => {
  assert.equal(LEITURA_AR.reading('كيف حالك'), 'kayfa ḥāluk');
});

test('árabe: entrada de mais de uma palavra na tabela (desambiguação de "من")', () => {
  assert.equal(LEITURA_AR.reading('من'), 'min');
  assert.equal(LEITURA_AR.reading('من يريد'), 'man yurīd');
});

test('árabe: palavra fora da tabela deixa o texto inteiro sem leitura', () => {
  assert.equal(LEITURA_AR.reading('مرحبا'), '');
});

test('árabe: texto sem escrita árabe fica sem leitura', () => {
  assert.equal(LEITURA_AR.reading('olá, 123!'), '');
});

test('árabe: letra sozinha (treino do alfabeto) sai pelo valor da letra, não da tabela de palavras', () => {
  assert.equal(LEITURA_AR.letterReading('ب'), 'b');
  assert.equal(LEITURA_AR.letterReading('م'), 'm');
});

test('árabe: hamza e ʿayn não têm letra latina própria', () => {
  assert.equal(LEITURA_AR.letterReading('ء'), '');
  assert.equal(LEITURA_AR.letterReading('ع'), '');
});
