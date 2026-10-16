import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BOARD_SIZE, createInitialState, makeMove, type HnefataflState, type TaflBoard } from './hnefatafl-engine';
import { lanceHnefatafl } from './hnefatafl-ia';

const vazio = (): TaflBoard => Array.from({ length: BOARD_SIZE }, () => Array(BOARD_SIZE).fill(null));

test('Linu no hnefatafl: com os defensores, leva o rei ao canto quando o caminho está livre', () => {
  const board = vazio();
  board[0]![5] = { side: 'd', king: true };
  board[10]![5] = { side: 'a' };
  board[9]![2] = { side: 'a' };
  board[6]![6] = { side: 'd' };
  const s: HnefataflState = { board, turn: 'd', result: { status: 'playing' } };
  const m = lanceHnefatafl(s, 'medio', () => 0.5)!;
  assert.equal(m.para.row, 0);
  assert.ok(m.para.col === 0 || m.para.col === 10, `foi para ${JSON.stringify(m.para)}`);
});

test('Linu no hnefatafl: com os atacantes, fecha o cerco do rei quando falta uma peça', () => {
  const board = vazio();
  board[3]![3] = { side: 'd', king: true };
  board[2]![3] = { side: 'a' };
  board[4]![3] = { side: 'a' };
  board[3]![2] = { side: 'a' };
  board[3]![8] = { side: 'a' }; // pode deslizar até (3,4) e fechar o cerco
  board[8]![8] = { side: 'd' };
  const s: HnefataflState = { board, turn: 'a', result: { status: 'playing' } };
  const m = lanceHnefatafl(s, 'medio', () => 0.5)!;
  assert.deepEqual(m, { de: { row: 3, col: 8 }, para: { row: 3, col: 4 } });
});

test('Linu no hnefatafl: lances que valem e rápidos, desde a abertura', () => {
  let s = createInitialState();
  let pior = 0;
  for (let k = 0; k < 40 && s.result.status === 'playing'; k++) {
    const t0 = Date.now();
    const m = lanceHnefatafl(s, k % 2 === 0 ? 'dificil' : 'medio', () => 0.37);
    pior = Math.max(pior, Date.now() - t0);
    assert.ok(m);
    const n = makeMove(s, m.de, m.para);
    assert.notEqual(n, s);
    s = n;
  }
  console.log('hnefatafl, pior lance:', pior, 'ms; resultado:', JSON.stringify(s.result));
  assert.ok(pior < 4000, `demorou ${pior} ms`);
});
