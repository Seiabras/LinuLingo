import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canPlaceWall, createInitialState, legalPawnMoves, movePawn, placeWall, type QuoridorState } from './quoridor-engine';

test('quoridor: estado inicial tem as peças, paredes e vez certas', () => {
  const s = createInitialState();
  assert.deepEqual(s.pawns[0], { row: 0, col: 4 });
  assert.deepEqual(s.pawns[1], { row: 8, col: 4 });
  assert.deepEqual(s.wallsLeft, [10, 10]);
  assert.equal(s.turn, 0);
  assert.equal(s.winner, null);
});

test('quoridor: do início, só os 3 passos ortogonais livres são legais (peça adversária longe)', () => {
  const s = createInitialState();
  const moves = legalPawnMoves(s).sort((a, b) => a.row - b.row || a.col - b.col);
  assert.deepEqual(moves, [
    { row: 0, col: 3 },
    { row: 0, col: 5 },
    { row: 1, col: 4 },
  ]);
});

test('quoridor: mover para uma casa ilegal não faz nada (sem trapaça)', () => {
  const s = createInitialState();
  const s2 = movePawn(s, { row: 5, col: 5 });
  assert.equal(s2, s); // mesma referência: rejeitado, estado intacto
});

test('quoridor: salto reto sobre a peça adversária quando não há parede atrás dela', () => {
  const s: QuoridorState = { ...createInitialState(), pawns: [{ row: 3, col: 4 }, { row: 4, col: 4 }], turn: 0 };
  const moves = legalPawnMoves(s).sort((a, b) => a.row - b.row || a.col - b.col);
  assert.deepEqual(moves, [
    { row: 2, col: 4 },
    { row: 3, col: 3 },
    { row: 3, col: 5 },
    { row: 5, col: 4 },
  ]);
});

test('quoridor: salto diagonal quando o salto reto está bloqueado por parede', () => {
  const s: QuoridorState = {
    ...createInitialState(),
    pawns: [{ row: 3, col: 4 }, { row: 4, col: 4 }],
    walls: [{ row: 4, col: 3, orientation: 'h' }], // bloqueia v:4:3 e v:4:4 (atrás da peça adversária)
    turn: 0,
  };
  const moves = legalPawnMoves(s).sort((a, b) => a.row - b.row || a.col - b.col);
  assert.deepEqual(moves, [
    { row: 2, col: 4 },
    { row: 3, col: 3 },
    { row: 3, col: 5 },
    { row: 4, col: 3 },
    { row: 4, col: 5 },
  ]);
});

test('quoridor: duas paredes paralelas que se sobrepõem são ilegais', () => {
  const s: QuoridorState = { ...createInitialState(), walls: [{ row: 5, col: 2, orientation: 'h' }] };
  assert.equal(canPlaceWall(s, { row: 5, col: 3, orientation: 'h' }), false); // compartilha a borda v:5:3
  assert.equal(canPlaceWall(s, { row: 5, col: 2, orientation: 'h' }), false); // duplicada
});

test('quoridor: duas paredes perpendiculares no mesmo cruzamento são ilegais', () => {
  const s: QuoridorState = { ...createInitialState(), walls: [{ row: 5, col: 2, orientation: 'h' }] };
  assert.equal(canPlaceWall(s, { row: 5, col: 2, orientation: 'v' }), false);
});

test('quoridor: parede em T (perpendicular encostando no meio, sem cruzar) é legal', () => {
  const s: QuoridorState = { ...createInitialState(), walls: [{ row: 5, col: 2, orientation: 'h' }] };
  assert.equal(canPlaceWall(s, { row: 5, col: 3, orientation: 'v' }), true);
});

test('quoridor: nunca pode fechar o último caminho de um jogador até a chegada', () => {
  // Duas paredes que, juntas, isolam (0,0) num quadrado 2×2 sem saída. A primeira ainda deixa
  // escape por (0,2); só a segunda fecha de vez — e tem que ser rejeitada.
  const base: QuoridorState = { ...createInitialState(), pawns: [{ row: 0, col: 0 }, { row: 8, col: 8 }] };
  const comPrimeira: QuoridorState = { ...base, walls: [{ row: 1, col: 0, orientation: 'h' }] };
  assert.equal(canPlaceWall(base, { row: 1, col: 0, orientation: 'h' }), true);
  assert.equal(canPlaceWall(comPrimeira, { row: 0, col: 1, orientation: 'v' }), false);
});

test('quoridor: parede some do estoque e passa a vez ao colocar', () => {
  const s = createInitialState();
  const s2 = placeWall(s, { row: 5, col: 2, orientation: 'h' });
  assert.deepEqual(s2.wallsLeft, [9, 10]);
  assert.equal(s2.turn, 1);
  assert.equal(s2.walls.length, 1);
});

test('quoridor: sem paredes no estoque não dá pra colocar mais nenhuma', () => {
  const s: QuoridorState = { ...createInitialState(), wallsLeft: [0, 10] };
  assert.equal(canPlaceWall(s, { row: 5, col: 2, orientation: 'h' }), false);
});

test('quoridor: chegar na fileira de chegada vence o jogo', () => {
  const s: QuoridorState = { ...createInitialState(), pawns: [{ row: 7, col: 4 }, { row: 8, col: 0 }], turn: 0 };
  const s2 = movePawn(s, { row: 8, col: 4 });
  assert.equal(s2.winner, 0);
});
