/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingKm } from './reading-khmer';

test('khmer: a mesma mátra de vogal soa diferente pela série da consoante (A × O)', () => {
  assert.equal(toReadingKm('បី'), 'bei'); // ប, série A
  assert.equal(toReadingKm('ពីរ'), 'pii'); // ព, série O — mesma mátra ី, som diferente
  assert.equal(toReadingKm('ធំ'), 'thom'); // série O
});

test('khmer: em encontro com subscrito, a consoante dominante decide o registro', () => {
  assert.equal(toReadingKm('ក្រុង'), 'krong'); // base dominante (A) + subscrito fraco
  assert.equal(toReadingKm('ម្តាយ'), 'mdaay'); // exceção lexical real (fala não segue a regra geral)
});

test('khmer: frase com saudação', () => {
  assert.equal(toReadingKm('សួស្តី'), 'suostei');
});

test('khmer: texto que não é khmer passa intacto', () => {
  assert.equal(toReadingKm('olá, 123!'), 'olá, 123!');
});

test('khmer: vogal longa escrita dobrada, como nas dicas do vocabulário (sem mácron)', () => {
  assert.equal(toReadingKm('ឆ្មា'), 'chhmaa');
  assert.doesNotMatch(toReadingKm('ថ្ងៃអាទិត្យ'), /[āīūēō]/);
});
