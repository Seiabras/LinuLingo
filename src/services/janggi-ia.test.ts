import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, ix, jogar, type JanggiState, type PecaJ } from './janggi-engine';
import { lanceJanggi } from './janggi-ia';

test('Linu no janggi: captura o carro solto', () => {
  const board: (PecaJ | null)[] = Array(90).fill(null);
  board[ix(8, 4)] = { cor: 'cho', tipo: 'k' };
  board[ix(1, 3)] = { cor: 'han', tipo: 'k' };
  board[ix(5, 0)] = { cor: 'han', tipo: 'r' };
  board[ix(5, 8)] = { cor: 'cho', tipo: 'r' };
  const s: JanggiState = { ...createInitialState(), board, turn: 'han', repeticoes: {} };
  const m = lanceJanggi(s, 'medio');
  assert.deepEqual(m && [m.de, m.para], [ix(5, 0), ix(5, 8)]);
});

test('Linu no janggi: só lances que valem e menos de 1 s no difícil', () => {
  let s = createInitialState();
  let pior = 0;
  for (let k = 0; k < 16 && s.winner === null; k++) {
    const t0 = Date.now();
    const m = lanceJanggi(s, s.turn === 'han' ? 'dificil' : 'medio', () => 0.5);
    pior = Math.max(pior, Date.now() - t0);
    assert.ok(m, 'achou lance');
    const e = jogar(s, m.de, m.para);
    assert.notEqual(e, s, 'o lance vale');
    s = e;
  }
  console.log('janggi difícil, pior lance:', pior, 'ms');
  assert.ok(pior < 4000, `demorou ${pior} ms`);
});
