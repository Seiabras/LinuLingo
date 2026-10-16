import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, type QuoridorState } from './quoridor-engine';
import { jogarQuoridor, lanceQuoridor } from './quoridor-ia';

test('Linu no Quoridor: vence quando está a um passo da chegada', () => {
  const s: QuoridorState = { ...createInitialState(), pawns: [{ row: 7, col: 4 }, { row: 4, col: 0 }], turn: 0 };
  assert.deepEqual(lanceQuoridor(s, 'medio', () => 0.5), { tipo: 'andar', para: { row: 8, col: 4 } });
});

test('Linu no Quoridor: põe parede quando o adversário vai chegar antes', () => {
  // o jogador 1 está a 1 passo da fileira 0; o Linu (0) está longe: só uma parede salva
  const s: QuoridorState = { ...createInitialState(), pawns: [{ row: 0, col: 0 }, { row: 1, col: 4 }], turn: 0 };
  assert.equal(lanceQuoridor(s, 'medio', () => 0.5)?.tipo, 'parede');
});

test('Linu no Quoridor: uma partida inteira Linu contra Linu, nos dois tamanhos, com lances que valem e rápidos', () => {
  for (const n of [9, 7]) {
    let s = createInitialState(n);
    let pior = 0;
    for (let k = 0; k < 200 && s.winner === null; k++) {
      const t0 = Date.now();
      const m = lanceQuoridor(s, s.turn === 1 ? 'dificil' : 'facil', () => 0.37);
      pior = Math.max(pior, Date.now() - t0);
      assert.ok(m, `${n}: sem lance`);
      const nx = jogarQuoridor(s, m);
      assert.notEqual(nx, s, `${n}: lance que não vale`);
      s = nx;
    }
    console.log(`quoridor ${n}x${n}, pior lance:`, pior, 'ms; vencedor:', s.winner);
    assert.notEqual(s.winner, null, `${n}: a partida não acabou`);
    assert.ok(pior < 4000, `${n}: demorou ${pior} ms`);
  }
});
