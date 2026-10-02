/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingKa } from './reading-georgian';

test('georgiano: National System (2002/BGN-PCGN), apóstrofo só nas seis ejetivas', () => {
  assert.equal(toReadingKa('გამარჯობა'), 'gamarjoba');
  assert.equal(toReadingKa('მადლობა'), 'madloba');
  assert.equal(toReadingKa('კატა'), "k'at'a");
  assert.equal(toReadingKa('წყალი'), "ts'q'ali");
  assert.equal(toReadingKa('ხაჭაპური'), "khach'ap'uri");
});

test('georgiano: texto que não é georgiano passa intacto', () => {
  assert.equal(toReadingKa('olá, 123!'), 'olá, 123!');
});
