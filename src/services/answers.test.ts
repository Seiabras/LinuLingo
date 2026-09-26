/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { markWords, matchesAny, normalize, pronunciationScore, registerBreaks, keywordHits } from './answers';

test('normalize tira pontuação, caixa e acentos; unifica ş/ș', () => {
  assert.equal(normalize('Bună! Ce faci?'), 'buna ce faci');
  assert.equal(normalize('Şi', { keepDiacritics: true }), 'și');
});

test('matchesAny aceita sem acentos e exige palavras inteiras', () => {
  assert.ok(matchesAny('Bine, multumesc!', ['bine']));
  assert.ok(matchesAny('Mă numesc Joana', ['mă numesc']));
  assert.ok(!matchesAny('binele', ['bine']));
  assert.ok(!matchesAny('', ['bine']));
});

test('markWords: verde, amarelo e vermelho', () => {
  const m = markWords('Bine, mulțumesc!', 'bine multumesc');
  assert.deepEqual(m.map((x) => x.mark), ['ok', 'quase']);
  const m2 = markWords('Sunt din Brazilia.', 'sunt brazila');
  assert.deepEqual(m2.map((x) => x.mark), ['ok', 'faltou', 'quase']);
  assert.equal(pronunciationScore(m), 80);
});

test('registro social e palavras-chave', () => {
  assert.deepEqual(registerBreaks('Tu ai o cameră?', ['tu', 'ai', 'te rog']), ['tu', 'ai']);
  assert.deepEqual(registerBreaks('Aveți o cameră, vă rog?', ['tu', 'ai', 'te rog']), []);
  assert.equal(keywordHits('O cafea cu lapte', ['cafea', 'ceai', 'lapte']), 2);
});
