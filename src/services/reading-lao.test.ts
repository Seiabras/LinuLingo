/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { leituraLao } from './reading-lao';

test('lao: saudação, sílabas de uma palavra conhecida ligadas por hífen', () => {
  const ler = leituraLao(['ສະບາຍດີ']);
  assert.equal(ler('ສະບາຍດີ'), 'sa-bāi-dī');
});

test('lao: ວ no começo é "v", no fim de sílaba fechada é a vogal "o"', () => {
  const ler = leituraLao([]);
  assert.equal(ler('ວັດ'), 'vat');
  assert.equal(ler('ນາວ'), 'nāo');
});

test('lao: ວ de encontro ("w") depois de velar, e como vogal "ūa" antes de consoante final', () => {
  const ler = leituraLao([]);
  assert.equal(ler('ຂວາ'), 'khwā');
  assert.equal(ler('ດ້ວຍ'), 'dūai');
});

test('lao: ຫ mudo antes de soante, e ອ como consoante "ʻ" no começo da sílaba', () => {
  const ler = leituraLao([]);
  assert.equal(ler('ຫຍ້າ'), 'nyā');
  assert.equal(ler('ອີກ'), 'ʻīk');
});

test('lao: os tons não se romanizam', () => {
  const ler = leituraLao([]);
  assert.equal(ler('ດີ'), ler('ດີ່'));
});

test('lao: letra sozinha (treino do alfabeto) sai com o valor da consoante ou vogal', () => {
  const ler = leituraLao([]);
  assert.equal(ler('ກ'), 'k');
  assert.equal(ler('ມ'), 'm');
});

test('lao: texto que não é lao passa intacto (sem leitura)', () => {
  const ler = leituraLao([]);
  assert.equal(ler('olá, 123!'), '');
});

test('lao: consoante sem vogal escrita que a tabela não explica fica sem leitura', () => {
  const ler = leituraLao([]);
  assert.equal(ler('ກນ'), '');
});
