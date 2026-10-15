import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, jogar, type LinhaState } from './linha-engine';
import { lanceGomoku } from './jogos-ia';

for (const n of [15, 19]) {
  test(`gomoku ${n}×${n}: cinco em linha na última fileira vence`, () => {
    let s: LinhaState = createInitialState(n, 5);
    const u = n - 1;
    for (let k = 0; k < 5; k++) {
      s = jogar(s, u * n + (u - k)); // pretas na última fileira, da direita para a esquerda
      if (k < 4) s = jogar(s, k); // brancas na primeira
    }
    assert.equal(s.winner, 'x');
  });

  test(`gomoku ${n}×${n}: o Linu tapa a linha de quatro, rápido, em todos os níveis`, () => {
    let s: LinhaState = createInitialState(n, 5);
    const m = Math.floor(n / 2);
    // pretas com quatro em linha aberta no meio; brancas espalhadas longe
    for (let k = 0; k < 4; k++) {
      s = jogar(s, m * n + m - 2 + k);
      s = jogar(s, k === 3 ? n * n - 1 : k);
    }
    s = { ...s, turn: 'o' };
    const ponta = [m * n + m - 3, m * n + m + 2];
    for (const nivel of ['medio', 'dificil'] as const) {
      const t0 = Date.now();
      const l = lanceGomoku(s, nivel, () => 0.5);
      assert.ok(Date.now() - t0 < 1000, `${nivel} demorou`);
      assert.ok(l !== null && ponta.includes(l), `${nivel} tapou uma ponta`);
    }
  });
}
