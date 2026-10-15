import { test } from 'node:test';
import assert from 'node:assert/strict';
import { casasDoMeio, createInitialState, legalMoves, makeMove } from './reversi-engine';
import { BUSCA_REVERSI, escolherLance } from './jogos-ia';

test('Reversi clássica: começa vazia e os 4 primeiros lances são só nas casas do meio', () => {
  let s = createInitialState(8, true);
  assert.ok(s.board.flat().every((c) => c === null));
  assert.deepEqual(legalMoves(s.board, 'b', true).sort(), casasDoMeio(8).sort());
  assert.equal(makeMove(s, 0, 0), s, 'fora do meio não vale');
  s = makeMove(s, 3, 3);
  assert.equal(s.turn, 'w');
  s = makeMove(s, 4, 4); // brancas
  s = makeMove(s, 3, 4); // pretas
  assert.equal(s.board[3]![3], 'b', 'nada vira na abertura');
  s = makeMove(s, 4, 3); // brancas: o meio fica cheio
  assert.equal(s.turn, 'b');
  // a posição “oblíqua” não é a do Othello (lá o 3,3 é branco)
  assert.deepEqual([s.board[3]![3], s.board[3]![4], s.board[4]![3], s.board[4]![4]], ['b', 'b', 'w', 'w']);
  // depois da abertura, vale a regra de sempre (tem de virar)
  assert.ok(legalMoves(s.board, 'b').length > 0);
  assert.ok(legalMoves(s.board, 'b').every(([r, c]) => !casasDoMeio(8).some(([a, b]) => a === r && b === c)));
});

test('Reversi clássica: o Othello continua com as 4 peças já postas', () => {
  const s = createInitialState(8);
  assert.equal(s.board.flat().filter(Boolean).length, 4);
  assert.equal(legalMoves(s.board, 'b').length, 4);
});

test('Reversi clássica: o Linu joga a abertura e segue', () => {
  let s = createInitialState(6, true);
  for (let k = 0; k < 6 && s.winner === null; k++) {
    const m = escolherLance(s, 2, BUSCA_REVERSI, 0)!;
    s = makeMove(s, m[0], m[1]);
  }
  assert.equal(casasDoMeio(6).every(([r, c]) => s.board[r]![c] !== null), true);
});
