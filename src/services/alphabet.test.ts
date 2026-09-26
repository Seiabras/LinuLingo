import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildRound, masteredCount, recordAnswer, MASTERED } from './alphabet';
import { ALPHABET_RU } from '../data/ru/alfabeto';

const seq = () => {
  let s = 7;
  return () => (s = (s * 9301 + 49297) % 233280) / 233280;
};

test('alfabeto: 33 letras, grupos e sons curtos distintos o bastante para o jogo', () => {
  assert.equal(ALPHABET_RU.letters.length, 33);
  assert.deepEqual(
    ALPHABET_RU.letters.filter((l) => l.group === 'falsa').map((l) => l.letter[0]),
    ['В', 'Н', 'Р', 'С', 'У', 'Х'],
  );
});

test('alfabeto: rodada com gabarito nas opções e sem opções repetidas', () => {
  const r = buildRound(ALPHABET_RU, {}, 12, seq());
  assert.equal(r.length, 12);
  assert.ok(r.every((q) => q.kind !== 'leitura'), 'leitura só depois de ver algumas letras');
  for (const q of r) {
    assert.ok(q.options.includes(q.answer));
    assert.equal(new Set(q.options).size, q.options.length);
  }
  // no começo, as falsas amigas aparecem logo
  assert.ok(r.some((q) => 'letter' in q && q.letter.group === 'falsa'));
});

test('alfabeto: leitura de palavras entra depois de 8 letras vistas; progresso e domínio', () => {
  const seen = Object.fromEntries(ALPHABET_RU.letters.slice(0, 10).map((l) => [l.letter, 1]));
  const r = buildRound(ALPHABET_RU, seen, 12, seq());
  assert.equal(r.filter((q) => q.kind === 'leitura').length, 3);
  const q = r.find((x) => x.kind !== 'leitura')!;
  let p = {};
  for (let i = 0; i < MASTERED; i++) p = recordAnswer(p, q, true);
  assert.equal(masteredCount(ALPHABET_RU, p), 1);
  p = recordAnswer(p, q, false);
  assert.equal(masteredCount(ALPHABET_RU, p), 0);
});
