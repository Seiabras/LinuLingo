/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingHyw } from './reading-western-armenian';

test('armênio ocidental: ե e ո no começo da palavra soam "ye"/"vo" (não "e"/"o")', () => {
  assert.equal(toReadingHyw('երկու'), 'yergu');
  assert.equal(toReadingHyw('ոչ'), 'voch');
});

test('armênio ocidental: ով é a exceção da regra do ո inicial', () => {
  assert.equal(toReadingHyw('ով'), 'ov');
});

test('armênio ocidental: ւ sozinho soa "v"; եւ/և soam "ev" ("yev" no começo)', () => {
  assert.equal(toReadingHyw('լաւ'), 'lav');
  assert.equal(toReadingHyw('եւ'), 'yev');
});

test('armênio ocidental: իւ e ոյ formam ditongos "iu"/"uy"', () => {
  assert.equal(toReadingHyw('իւ'), 'iu');
  assert.equal(toReadingHyw('քոյր'), 'kuyr');
});

test('armênio ocidental: եա e եօ formam "ya"/"yo"', () => {
  assert.equal(toReadingHyw('սենեակ'), 'senyag');
  assert.equal(toReadingHyw('եօթ'), 'yot');
});

test('armênio ocidental: յ final cala num polissílabo, mas soa num monossílabo', () => {
  assert.equal(toReadingHyw('քնանայ'), 'knana');
  assert.equal(toReadingHyw('հայ'), 'hay');
  assert.equal(toReadingHyw('թէյ'), 'tey');
});

test('armênio ocidental: ռ e ր lêem-se os dois "r" (fundidos no ocidental)', () => {
  assert.equal(toReadingHyw('ռ'), 'r');
  assert.equal(toReadingHyw('ր'), 'r');
});

test('armênio ocidental: maiúscula preservada na primeira letra', () => {
  assert.equal(toReadingHyw('Երկու'), 'Yergu');
});

test('armênio ocidental: pontuação (dois-pontos do pacote vira ponto) e maiúscula da frase', () => {
  assert.equal(toReadingHyw('Բարև, անունս Լինու է:'), 'Parev, anuns Linu e.');
});

test('armênio ocidental: texto sem armênio fica sem leitura', () => {
  assert.equal(toReadingHyw('olá, 123!'), '');
});
