import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, type MoinhoState, type PlayerId } from './moinho-engine';
import { jogarMoinho, lanceMoinho } from './moinho-ia';

test('Linu no moinho: fecha o moinho quando pode e tira uma peça', () => {
  // fase de andar: o Linu (1) tem 0 e 1 no anel de fora, e a peça em 3 pode andar para 2 e fechar 0-1-2
  const points: (PlayerId | null)[] = Array(24).fill(null);
  for (const i of [0, 1, 3, 12, 14]) points[i] = 1;
  for (const i of [8, 16, 18, 20]) points[i] = 0;
  const s: MoinhoState = { ...createInitialState(), points, turn: 1, phase: 'movendo', placedCount: [9, 9] };
  const m = lanceMoinho(s, 'medio', () => 0.5);
  assert.deepEqual(m, { tipo: 'mover', de: 3, para: 2 });
  const t = jogarMoinho(s, m!);
  assert.equal(t.removalsPending, 1, 'não fechou o moinho');
  assert.equal(lanceMoinho(t, 'medio', () => 0.5)?.tipo, 'tirar');
});

test('Linu no moinho: uma partida inteira Linu contra Linu, nas três regras, com lances que valem e rápidos', () => {
  for (const regra of ['nove', 'doze', 'lasker'] as const) {
    let s = createInitialState(regra);
    let pior = 0;
    for (let k = 0; k < 200 && s.winner === null && !s.empate; k++) {
      const t0 = Date.now();
      const m = lanceMoinho(s, s.turn === 1 ? 'dificil' : 'facil', () => 0.37);
      pior = Math.max(pior, Date.now() - t0);
      assert.ok(m, `${regra}: sem lance`);
      const n = jogarMoinho(s, m);
      assert.notEqual(n, s, `${regra}: lance que não vale`);
      s = n;
    }
    console.log(`moinho ${regra}, difícil, pior lance:`, pior, 'ms; fim:', s.winner, s.empate ?? '');
    assert.ok(pior < 4000, `${regra}: demorou ${pior} ms`);
  }
});
