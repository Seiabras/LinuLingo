/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickVoice } from './voice-pick';

const voices = [
  { identifier: 'espeak-ro', name: 'Romanian (espeak-ng)', language: 'ro' },
  { identifier: 'ro_RO-mihai-medium', name: 'ro_RO-mihai-medium', language: 'ro' },
  { identifier: 'en', name: 'English', language: 'en-US' },
];

test('prefere a voz natural (Piper) ao eSpeak', () => {
  const v = pickVoice(voices, 'ro-RO');
  assert.equal(v?.identifier, 'ro_RO-mihai-medium');
  assert.equal(v?.natural, true);
});

test('aceita ro_RO e cai no eSpeak se for a única', () => {
  const v = pickVoice([{ identifier: 'x', name: 'Romanian (espeak-ng)', language: 'ro_RO' }], 'ro-RO');
  assert.equal(v?.identifier, 'x');
  assert.equal(v?.natural, false);
});

test('sem voz do idioma devolve null', () => {
  assert.equal(pickVoice(voices, 'ja-JP'), null);
});
