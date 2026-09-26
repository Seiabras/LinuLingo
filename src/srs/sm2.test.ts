/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { calculateNextReview, newCard, isDue, retentionLevel, MIN_EASE } from './sm2';

const now = new Date('2026-01-01T12:00:00Z');

test('primeira resposta correta agenda para 1 dia, a segunda para 6', () => {
  const c1 = calculateNextReview(newCard('w', now), 4, now);
  assert.equal(c1.interval, 1);
  assert.equal(c1.repetition, 1);
  assert.equal(c1.nextReviewDate, '2026-01-02T12:00:00.000Z');
  const c2 = calculateNextReview(c1, 4, now);
  assert.equal(c2.interval, 6);
  const c3 = calculateNextReview(c2, 5, now);
  assert.equal(c3.interval, Math.round(6 * c2.easeFactor));
});

test('erro zera a sequência e volta para 1 dia', () => {
  let c = newCard('w', now);
  c = calculateNextReview(c, 5, now);
  c = calculateNextReview(c, 5, now);
  c = calculateNextReview(c, 1, now);
  assert.equal(c.repetition, 0);
  assert.equal(c.interval, 1);
});

test('fator de facilidade nunca cai abaixo de 1.3', () => {
  let c = newCard('w', now);
  for (let i = 0; i < 20; i++) c = calculateNextReview(c, 0, now);
  assert.equal(c.easeFactor, MIN_EASE);
});

test('qualidade 5 aumenta o fator, 3 diminui', () => {
  assert.equal(calculateNextReview(newCard('w', now), 5, now).easeFactor, 2.6);
  assert.equal(calculateNextReview(newCard('w', now), 3, now).easeFactor, 2.36);
});

test('isDue e retentionLevel', () => {
  assert.equal(isDue('2025-12-31T00:00:00Z', now), true);
  assert.equal(isDue('2026-02-01T00:00:00Z', now), false);
  assert.equal(isDue(null, now), false);
  assert.equal(retentionLevel(0, 2.5), 0);
  assert.equal(retentionLevel(5, 2.5), 1);
});
