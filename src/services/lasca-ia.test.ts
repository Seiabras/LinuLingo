import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, ix, jogar, type ColunaL, type LascaState } from './lasca-engine';
import { lanceLasca } from './lasca-ia';

test('Linu no Lasca: escolhe a captura que leva o oficial', () => {
  const board: (ColunaL | null)[] = Array(49).fill(null);
  board[ix(2, 2)] = [{ cor: 'b', oficial: false }];
  board[ix(3, 1)] = [{ cor: 'w', oficial: false }];
  board[ix(3, 3)] = [{ cor: 'w', oficial: true }];
  board[ix(6, 6)] = [{ cor: 'w', oficial: false }];
  const s: LascaState = { ...createInitialState(), board, turn: 'b', repeticoes: {} };
  const m = lanceLasca(s, 'medio', () => 0.5);
  assert.deepEqual(m && [m.de, m.para], [ix(2, 2), ix(4, 4)]);
});

test('Linu no Lasca: partida Linu contra Linu com lances que valem, rápido no difícil', () => {
  let s = createInitialState();
  let pior = 0;
  for (let k = 0; k < 120 && s.winner === null; k++) {
    const t0 = Date.now();
    const m = lanceLasca(s, s.turn === 'b' ? 'dificil' : 'facil', () => 0.41);
    pior = Math.max(pior, Date.now() - t0);
    assert.ok(m);
    const n = jogar(s, m);
    assert.notEqual(n, s);
    s = n;
  }
  console.log('lasca difícil, pior lance:', pior, 'ms; fim:', s.winner);
  assert.ok(pior < 4000, `demorou ${pior} ms`);
});
