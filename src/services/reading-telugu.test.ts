/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingTe } from './reading-telugu';

test('télugo: diferente do hindi, não derruba a vogal "a" inerente (dravídico, não indo-ariano)', () => {
  assert.equal(toReadingTe('తెలుగు'), 'telugu');
  assert.equal(toReadingTe('అమ్మ'), 'amma');
  assert.equal(toReadingTe('పుస్తకం'), 'pustakam');
  assert.equal(toReadingTe('ఇల్లు'), 'illu');
});

test('télugo: anusvara final vira "m" simples, não vogal nasalizada', () => {
  assert.equal(toReadingTe('నమస్కారం'), 'namaskāram');
  assert.equal(toReadingTe('కుటుంబం'), 'kutumbam');
});

test('télugo: ళ (exclusiva do télugo) vira "l" simples, igual a ల — mesma simplificação do ळ marata', () => {
  assert.equal(toReadingTe('నీళ్ళు'), 'nīllu');
  assert.equal(toReadingTe('వెళ్ళొస్తాను'), 'vellostānu');
});

test('télugo: vogais longas/curtas de ē/ō marcadas, encontros consonantais com vírama', () => {
  assert.equal(toReadingTe('దయచేసి'), 'dayachēsi');
  assert.equal(toReadingTe('ధన్యవాదములు'), 'dhanyavādamulu');
  assert.equal(toReadingTe('హైదరాబాద్'), 'haidarābād');
  assert.equal(toReadingTe('తమ్ముడు'), 'tammudu');
});

test('télugo: texto que não é télugo passa intacto', () => {
  assert.equal(toReadingTe('olá, 123!'), 'olá, 123!');
});
