import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, type OctiState } from './octi-engine';
import { jogarOcti, lanceOcti } from './octi-ia';

test('Linu no Octi: pisa na base do outro quando pode', () => {
  const s0 = createInitialState();
  // a peça 0 do jogador 0 está logo abaixo da base do jogador 1 (fileira 5), com o pino para o norte;
  // a casa (5,1) da base está vazia (a peça de lá saiu do tabuleiro)
  const pods = s0.pods.filter((p) => !(p.player === 1 && p.row === 5 && p.col === 1)).map((p) => (p.id === 0 ? { ...p, row: 4, col: 1, prongs: new Set([0]) } : p));
  const s: OctiState = { ...s0, pods };
  const m = lanceOcti(s, 'medio', () => 0.5)!;
  const t = jogarOcti(s, m);
  assert.equal(t.winner, 0, `jogou ${JSON.stringify(m)}`);
});

test('Linu no Octi: uma partida inteira Linu contra Linu, com lances que valem e rápidos', () => {
  let s = createInitialState();
  let pior = 0;
  for (let k = 0; k < 400 && s.winner === null; k++) {
    const t0 = Date.now();
    const m = lanceOcti(s, s.turn === 1 ? 'dificil' : 'facil', () => 0.37);
    pior = Math.max(pior, Date.now() - t0);
    assert.ok(m);
    const n = jogarOcti(s, m);
    assert.notEqual(n, s, `lance que não vale: ${JSON.stringify(m)}`);
    s = n;
  }
  console.log('octi, pior lance:', pior, 'ms; vencedor:', s.winner);
  assert.equal(s.winner, 1, 'o difícil (1) devia vencer o fácil');
  assert.ok(pior < 4000, `demorou ${pior} ms`);
});
