import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, ix, jogar, type MakrukState, type PecaM } from './makruk-engine';
import { lanceMakruk } from './makruk-ia';

test('Linu no makruk: captura o ruea solto', () => {
  const board: (PecaM | null)[] = Array(64).fill(null);
  board[ix(7, 3)] = { cor: 'w', tipo: 'k' };
  board[ix(0, 4)] = { cor: 'b', tipo: 'k' };
  board[ix(3, 0)] = { cor: 'b', tipo: 'r' };
  board[ix(3, 7)] = { cor: 'w', tipo: 'r' };
  const s: MakrukState = { ...createInitialState(), board, turn: 'b', repeticoes: {} };
  const m = lanceMakruk(s, 'medio');
  assert.deepEqual(m && [m.de, m.para], [ix(3, 0), ix(3, 7)]);
});

test('Linu no makruk: só lances que valem e menos de 1 s no difícil', () => {
  let s = createInitialState();
  let pior = 0;
  for (let k = 0; k < 16 && s.winner === null; k++) {
    const t0 = Date.now();
    const m = lanceMakruk(s, s.turn === 'b' ? 'dificil' : 'medio', () => 0.5);
    pior = Math.max(pior, Date.now() - t0);
    assert.ok(m, 'achou lance');
    const e = jogar(s, m.de, m.para);
    assert.notEqual(e, s, 'o lance vale');
    s = e;
  }
  console.log('makruk difícil, pior lance:', pior, 'ms');
  assert.ok(pior < 4000, `demorou ${pior} ms`);
});
