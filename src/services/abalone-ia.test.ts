import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, key, type AbaloneState, type PlayerId } from './abalone-engine';
import { jogarAbalone, lanceAbalone } from './abalone-ia';

test('Linu no Abalone: empurra para fora a bolinha da borda quando pode, e vence', () => {
  // o Linu (0) tem duas bolinhas em fila apontando para a bolinha do 1, que está na borda (q = 4)
  const board: Record<string, PlayerId> = { [key({ q: 2, r: 0 })]: 0, [key({ q: 3, r: 0 })]: 0, [key({ q: 4, r: 0 })]: 1, [key({ q: -3, r: 1 })]: 1 };
  const s: AbaloneState = { board, turn: 0, lost: [0, 5], winner: null };
  const m = lanceAbalone(s, 'medio', () => 0.5)!;
  assert.equal(jogarAbalone(s, m).winner, 0, `jogou ${JSON.stringify(m)}`);
});

test('Linu no Abalone: lances que valem e rápidos, nas duas regras', () => {
  for (const regra of ['oficial', 'linha'] as const) {
    let s: AbaloneState = regra === 'oficial' ? createInitialState() : { ...createInitialState(), regra };
    let pior = 0;
    for (let k = 0; k < 40 && s.winner === null; k++) {
      const t0 = Date.now();
      const m = lanceAbalone(s, k % 2 === 0 ? 'dificil' : 'facil', () => 0.37);
      pior = Math.max(pior, Date.now() - t0);
      assert.ok(m);
      const n = jogarAbalone(s, m);
      assert.notEqual(n, s);
      s = n;
    }
    console.log(`abalone ${regra}, pior lance:`, pior, 'ms; fora:', s.lost);
    assert.ok(pior < 4000, `${regra}: demorou ${pior} ms`);
  }
});
