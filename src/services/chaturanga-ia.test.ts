import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, ix, jogar, type ChaturangaState, type Elefante, type PecaC } from './chaturanga-engine';
import { lanceChaturanga } from './chaturanga-ia';

test('Linu no chaturanga: captura o ratha solto', () => {
  const board: (PecaC | null)[] = Array(64).fill(null);
  board[ix(7, 4)] = { cor: 'w', tipo: 'k' };
  board[ix(0, 3)] = { cor: 'b', tipo: 'k' };
  board[ix(3, 0)] = { cor: 'b', tipo: 'r' };
  board[ix(3, 7)] = { cor: 'w', tipo: 'r' };
  board[ix(6, 6)] = { cor: 'w', tipo: 'p' };
  const s: ChaturangaState = { ...createInitialState(), board, turn: 'b', repeticoes: {} };
  const m = lanceChaturanga(s, 'medio');
  assert.deepEqual(m && [m.de, m.para], [ix(3, 0), ix(3, 7)]);
});

for (const e of ['alfil', 'biruni', 'adli'] as Elefante[]) {
  test(`Linu no chaturanga (gaja ${e}): só lances que valem e rápido no difícil`, () => {
    let s = createInitialState(e);
    let pior = 0;
    for (let k = 0; k < 12 && s.winner === null; k++) {
      const t0 = Date.now();
      const m = lanceChaturanga(s, s.turn === 'b' ? 'dificil' : 'medio', () => 0.5);
      pior = Math.max(pior, Date.now() - t0);
      assert.ok(m);
      const n = jogar(s, m.de, m.para);
      assert.notEqual(n, s);
      s = n;
    }
    console.log(`chaturanga ${e} difícil, pior lance: ${pior} ms`);
    assert.ok(pior < 4000, `demorou ${pior} ms`);
  });
}
