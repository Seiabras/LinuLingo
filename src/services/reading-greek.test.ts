/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingEl } from './reading-greek';

test('grego: ELOT 743, atento aos dígrafos (μπ, αυ/ευ, θ) em vez de letra a letra', () => {
  assert.equal(toReadingEl('καλημέρα'), 'kaliméra');
  assert.equal(toReadingEl('ευχαριστώ'), 'efcharistó');
  assert.equal(toReadingEl('αυτός'), 'aftós');
  assert.equal(toReadingEl('Αθήνα'), 'Athína');
  assert.equal(toReadingEl('Θεσσαλονίκη'), 'Thessaloníki');
  assert.equal(toReadingEl('μπαμπάς'), 'bampás');
});

test('grego: texto que não é grego passa intacto', () => {
  assert.equal(toReadingEl('olá, 123!'), 'olá, 123!');
});
