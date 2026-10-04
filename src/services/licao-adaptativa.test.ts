import { test } from 'node:test';
import assert from 'node:assert/strict';
import { devolverAoFim, filaInicial, podeEncurtar, RAPIDO_MS } from './licao-adaptativa';

test('encurta só com 4 acertos de primeira e rápidos, e se ainda sobra palavra', () => {
  const rapido = { correct: true, ms: RAPIDO_MS - 1 };
  assert.equal(podeEncurtar([rapido, rapido, rapido, rapido], 6), true);
  assert.equal(podeEncurtar([rapido, rapido, rapido, rapido], 4), false);
  assert.equal(podeEncurtar([rapido, rapido, rapido], 6), false);
  assert.equal(podeEncurtar([rapido, rapido, rapido, { correct: true, ms: RAPIDO_MS + 1 }], 6), false);
  assert.equal(podeEncurtar([rapido, rapido, { correct: false, ms: 100 }, rapido], 6), false);
});

test('o item errado volta no fim uma vez só', () => {
  const f = filaInicial(['a', 'b', 'c']);
  const f2 = devolverAoFim(f, f[1]);
  assert.deepEqual(f2.map((x) => `${x.item}${x.refazendo ? '*' : ''}`), ['a', 'b', 'c', 'b*']);
  assert.equal(devolverAoFim(f2, f2[3]), f2);
});
