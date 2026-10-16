import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, idx, jogar, lancesLegais, type RGState } from './raposa-gansos-engine';
import { lanceRG } from './raposa-gansos-ia';

test('raposa e gansos, “gansos podem voltar”: 13 gansos que andam para trás e na diagonal', () => {
  const s = createInitialState('voltam');
  assert.equal(s.gansos.length, 13);
  // um ganso sozinho no meio do tabuleiro, na vez dos gansos: pode subir (voltar) e ir na diagonal
  const t: RGState = { ...s, gansos: [idx(4, 4)], raposa: idx(0, 3), vez: 'gansos' };
  const destinos = lancesLegais(t).flatMap((l) => (l.tipo === 'mover' ? [l.para] : []));
  assert.ok(destinos.includes(idx(3, 4)), 'para trás');
  assert.ok(destinos.includes(idx(3, 3)), 'na diagonal para trás');
  // nas outras versões, não volta
  for (const v of ['1870', 'moderna'] as const) {
    const u: RGState = { ...createInitialState(v), gansos: [idx(4, 4)], raposa: idx(0, 3), vez: 'gansos' };
    assert.ok(!lancesLegais(u).some((l) => l.tipo === 'mover' && l.para === idx(3, 4)), `${v}: não volta`);
  }
});

test('raposa e gansos, “gansos podem voltar”: o Linu joga com os gansos voltando e só lances válidos', () => {
  let s = createInitialState('voltam');
  for (let k = 0; k < 60 && s.vencedor === null; k++) {
    const l = lanceRG(s, k % 2 ? 'medio' : 'facil', () => 0.42);
    assert.ok(l, 'tem lance');
    const f = jogar(s, l!);
    assert.notEqual(f, s);
    s = f;
  }
});
