import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, ix, jogar, type DaraState, type JogadorD } from './dara-engine';
import { lanceDara } from './dara-ia';

test('Linu no dara: faz a linha de três quando pode, e captura', () => {
  const board: (JogadorD | null)[] = Array(30).fill(null);
  for (const [r, c, j] of [
    [0, 0, 'b'],
    [0, 1, 'b'],
    [1, 2, 'b'],
    [4, 0, 'a'],
    [4, 2, 'a'],
    [4, 4, 'a'],
    [3, 5, 'a'],
  ] as [number, number, JogadorD][])
    board[ix(r, c)] = j;
  const s: DaraState = { ...createInitialState(), board, turn: 'b', fase: 'mover', mao: { a: 0, b: 0 } };
  const m = lanceDara(s, 'medio', () => 0.5);
  assert.deepEqual(m, { tipo: 'mover', de: ix(1, 2), para: ix(0, 2) });
  const t = jogar(s, m!);
  assert.equal(t.fase, 'capturar');
  assert.equal(lanceDara(t, 'medio', () => 0.5)?.tipo, 'capturar');
});

test('Linu no dara: uma partida inteira Linu contra Linu, com lances que valem e rápidos', () => {
  let s = createInitialState();
  let pior = 0;
  for (let k = 0; k < 160 && s.winner === null; k++) {
    const t0 = Date.now();
    const m = lanceDara(s, s.turn === 'b' ? 'dificil' : 'facil', () => 0.37);
    pior = Math.max(pior, Date.now() - t0);
    assert.ok(m);
    const n = jogar(s, m);
    assert.notEqual(n, s);
    s = n;
  }
  console.log('dara difícil, pior lance:', pior, 'ms; fim:', s.winner);
  assert.ok(pior < 4000, `demorou ${pior} ms`);
});
