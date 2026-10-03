import { test } from 'node:test';
import assert from 'node:assert/strict';
import { palavrasDaUnidade, reparoDasParadas, REPARO_MIN } from './reparo';
import type { UnitSeed } from '@/data/types';

const unit = (id: string, words: string[][]) =>
  ({ id, lessons: [...words.map((w, i) => ({ id: `${id}-${i}`, kind: 'licao', words: w })), { id: `${id}-p`, kind: 'prova', words: ['so-na-prova'] }] }) as unknown as UnitSeed;

test('palavrasDaUnidade junta as lições e ignora a prova', () => {
  assert.deepEqual([...palavrasDaUnidade(unit('u', [['a', 'b'], ['c']]))].sort(), ['a', 'b', 'c']);
});

test('reparo só nas paradas concluídas, a partir de REPARO_MIN palavras vencidas', () => {
  const u1 = unit('u1', [['a', 'b', 'c'], ['d']]);
  const u2 = unit('u2', [['x', 'y', 'z']]);
  const vencidas = new Set(['a', 'b', 'c', 'x', 'y', 'z', 'so-na-prova']);
  assert.equal(REPARO_MIN, 3);
  assert.deepEqual(reparoDasParadas([{ unit: u1 }, { unit: u2 }, { unit: null }], [true, false, true], vencidas), [3, 0, 0]);
  assert.deepEqual(reparoDasParadas([{ unit: u1 }], [true], new Set(['a', 'b'])), [0]);
});
