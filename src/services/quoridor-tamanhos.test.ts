import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canPlaceWall, createInitialState, legalPawnMoves, movePawn, placeWall, type QuoridorState } from './quoridor-engine';

test('quoridor Kid 7×7: peões no meio das pontas e 8 paredes para cada um', () => {
  const s = createInitialState(7);
  assert.equal(s.n, 7);
  assert.deepEqual(s.pawns, [
    { row: 0, col: 3 },
    { row: 6, col: 3 },
  ]);
  assert.deepEqual(s.wallsLeft, [8, 8]);
  const c = createInitialState(9);
  assert.deepEqual(c.wallsLeft, [10, 10]);
  assert.deepEqual(c.pawns[1], { row: 8, col: 4 });
});

test('quoridor 7×7: a parede cabe só até o penúltimo cruzamento', () => {
  const s = createInitialState(7);
  assert.ok(canPlaceWall(s, { row: 5, col: 5, orientation: 'h' }));
  assert.ok(!canPlaceWall(s, { row: 6, col: 5, orientation: 'h' }));
  assert.ok(!canPlaceWall(s, { row: 5, col: 6, orientation: 'v' }));
});

test('quoridor 7×7: chegar na fileira 6 vence', () => {
  let s: QuoridorState = { ...createInitialState(7), pawns: [{ row: 5, col: 0 }, { row: 6, col: 6 }], turn: 0 };
  s = movePawn(s, { row: 6, col: 0 });
  assert.equal(s.winner, 0);
});

test('quoridor 7×7: não pode fechar o caminho de ninguém, nem com 8 paredes', () => {
  let s = createInitialState(7);
  // uma fileira de paredes deitadas na linha 2, deixando só a última coluna aberta
  for (const col of [0, 2, 4]) {
    s = placeWall(s, { row: 2, col, orientation: 'h' });
    s = placeWall(s, { row: 4, col: col, orientation: 'v' });
  }
  // fechar a última passagem (colunas 5 e 6) não vale
  assert.ok(!canPlaceWall(s, { row: 2, col: 5, orientation: 'h' }));
  assert.ok(legalPawnMoves(s).length > 0);
});
