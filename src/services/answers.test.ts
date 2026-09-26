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

test('apóstrofo reto, tipográfico ou ausente dão a mesma resposta', () => {
  assert.equal(normalize('Las’ că!'), normalize("las' ca"));
  assert.equal(normalize('Las’ că!'), normalize('las ca'));
});

test('cirílico: й continua letra, ё vale е e a tônica marcada não conta', () => {
  assert.notEqual(normalize('мой'), normalize('мои'));
  assert.equal(normalize('Мой дом'), 'мой дом');
  assert.equal(normalize('ещё'), normalize('еще'));
  assert.equal(normalize('Спаси́бо!', { keepDiacritics: true }), 'спасибо');
  assert.ok(matchesAny('спасибо большое', ['Спаси́бо большо́е!']));
  // o romeno segue tolerante: ă → a
  assert.equal(normalize('mâncă'), 'manca');
});
