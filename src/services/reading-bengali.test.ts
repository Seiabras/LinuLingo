/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingBn } from './reading-bengali';

test('bengali: a vogal inerente অ sai "o" (não "a" como no hindi), a mátra া sai "a"', () => {
  assert.equal(toReadingBn('নমস্কার'), 'nomoshkar');
  assert.equal(toReadingBn('বাংলা'), 'bangla');
  assert.equal(toReadingBn('বিড়াল'), 'biral');
});

test('bengali: frase completa, nasalização com til, ড় com vogal final mantida', () => {
  assert.equal(toReadingBn('তুমি কেমন আছ?'), 'tumi kemon achh?');
  assert.equal(toReadingBn('পাঁচ'), 'pãch');
  assert.equal(toReadingBn('বড়'), 'boro');
});

test('bengali: texto que não é bengali passa intacto', () => {
  assert.equal(toReadingBn('olá, 123!'), 'olá, 123!');
});
