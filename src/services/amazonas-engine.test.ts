import { test } from 'node:test';
import assert from 'node:assert/strict';
import { alcance, andar, atirar, createInitialState, ix, jogarLance, lancesLegais, perft, podeJogar, type AmazonasState, type CasaA } from './amazonas-engine';
import { lanceAmazonas } from './amazonas-ia';

test('amazonas: posição inicial e perft igual ao do Fairy-Stockfish (2176 e 4.307.152)', () => {
  const s = createInitialState();
  assert.equal(s.board.filter((c) => c === 1).length, 4);
  assert.equal(s.board[ix(9, 3)], 1);
  assert.equal(s.board[ix(0, 6)], 2);
  assert.equal(perft(s, 1), 2176);
  assert.equal(perft(s, 2), 4307152);
});

test('amazonas: anda como a dama, sem pular; depois atira a flecha, que queima a casa', () => {
  let s = createInitialState();
  // a amazona de d1 sobe a coluna d até d9 (d10 tem a preta)
  assert.ok(alcance(s.board, ix(9, 3)).includes(ix(1, 3)));
  assert.ok(!alcance(s.board, ix(9, 3)).includes(ix(0, 3)));
  assert.equal(atirar(s, ix(5, 5)), s, 'não atira antes de andar');
  s = andar(s, ix(9, 3), ix(5, 3));
  assert.equal(s.atirando, ix(5, 3));
  assert.equal(andar(s, ix(9, 6), ix(8, 6)), s, 'não anda duas vezes');
  // a flecha pode voltar para a casa de onde ela veio
  s = atirar(s, ix(9, 3));
  assert.equal(s.board[ix(9, 3)], 3);
  assert.equal(s.turn, 'b');
  // ninguém passa pela flecha
  assert.ok(!alcance(s.board, ix(9, 6)).includes(ix(9, 2)));
});

test('amazonas: perde quem não consegue mais andar', () => {
  // a amazona preta presa no canto por flechas; a branca solta
  const board: CasaA[] = Array(100).fill(0);
  board[ix(0, 0)] = 2;
  board[ix(0, 1)] = 3;
  board[ix(1, 0)] = 3;
  board[ix(5, 5)] = 1;
  const s: AmazonasState = { ...createInitialState(), board };
  assert.ok(podeJogar(board, 'b'), 'a casa b9 ainda está livre');
  // a branca vai a b2 e atira na b9 (1,1): a preta fica sem lance
  const t = jogarLance(s, { de: ix(5, 5), para: ix(2, 2), flecha: ix(1, 1) });
  assert.equal(t.winner, 'w');
  assert.equal(lancesLegais(t).length, 0);
});

test('amazonas: o Linu fecha a última saída do adversário, e responde rápido', () => {
  const board: CasaA[] = Array(100).fill(0);
  board[ix(0, 0)] = 2;
  board[ix(0, 1)] = 3;
  board[ix(1, 0)] = 3;
  board[ix(5, 5)] = 1;
  const s: AmazonasState = { ...createInitialState(), board };
  for (const nivel of ['medio', 'dificil'] as const) {
    const l = lanceAmazonas(s, nivel, () => 0.5)!;
    assert.equal(jogarLance(s, l).winner, 'w', nivel);
  }
  const t0 = Date.now();
  lanceAmazonas(createInitialState(), 'dificil', () => 0.5);
  console.log('amazonas difícil, primeiro lance:', Date.now() - t0, 'ms');
  assert.ok(Date.now() - t0 < 3000);
});
