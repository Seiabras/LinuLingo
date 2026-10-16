import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, ix, jogar, lancesDaPeca } from './chaturanga-engine';
import { lanceChaturanga } from './chaturanga-ia';

// o gaja branco da esquerda começa em c1 (linha 7, coluna 2)
const C1 = ix(7, 2);

test('chaturanga: as três reconstruções do gaja, cada uma com os seus lances', () => {
  // alfil: pula duas casas na diagonal, para a frente: a3 e e3
  const alfil = lancesDaPeca(createInitialState('alfil'), C1).map((l) => l.para);
  assert.ok(alfil.includes(ix(5, 0)) && alfil.includes(ix(5, 4)), 'alfil: a3 e e3');
  // al-Biruni: uma para a frente ou uma na diagonal — no começo, os padati tapam tudo
  assert.deepEqual(lancesDaPeca(createInitialState('biruni'), C1), []);
  // al-Adli: duas reto, pulando — para a frente, c3
  const adli = lancesDaPeca(createInitialState('adli'), C1).map((l) => l.para);
  assert.ok(adli.includes(ix(5, 2)), 'adli: c3');
});

test('chaturanga: o Linu joga nas três reconstruções', () => {
  for (const e of ['alfil', 'biruni', 'adli'] as const) {
    let s = createInitialState(e);
    for (let k = 0; k < 6; k++) {
      const l = lanceChaturanga(s, 'facil', () => 0.3);
      assert.ok(l, `${e}: tem lance`);
      const f = jogar(s, l!.de, l!.para);
      assert.notEqual(f, s, `${e}: lance válido`);
      s = f;
    }
  }
});
