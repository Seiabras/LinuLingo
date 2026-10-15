import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, legalMoves, makeMove } from './reversi-engine';
import { BUSCA_REVERSI, escolherLance, NIVEIS } from './jogos-ia';

for (const n of [6, 8]) {
  test(`reversi ${n}×${n}: quatro peças no meio e 4 lances para as pretas`, () => {
    const s = createInitialState(n);
    assert.equal(s.board.length, n);
    assert.equal(s.board.flat().filter((c) => c !== null).length, 4);
    assert.equal(s.board[n / 2 - 1]![n / 2 - 1], 'w');
    assert.equal(legalMoves(s.board, 'b').length, 4);
  });

  test(`reversi ${n}×${n}: uma partida Linu contra Linu termina, e o difícil pensa rápido`, () => {
    let s = createInitialState(n);
    let pior = 0;
    for (let k = 0; k < n * n && s.winner === null; k++) {
      const t0 = Date.now();
      const prof = NIVEIS.reversi.dificil.prof + (n === 6 ? 1 : 0);
      const m = escolherLance(s, s.turn === 'w' ? prof : 1, BUSCA_REVERSI, 0);
      pior = Math.max(pior, Date.now() - t0);
      assert.ok(m);
      const e = makeMove(s, m[0], m[1]);
      assert.notEqual(e, s);
      s = e;
    }
    assert.ok(s.winner !== null, 'terminou');
    console.log(`reversi ${n}×${n} difícil, pior lance: ${pior} ms`);
    // folga para a máquina de teste ocupada: no navegador fica abaixo de 1 s
    assert.ok(pior < 2500, `demorou ${pior} ms`);
  });
}
