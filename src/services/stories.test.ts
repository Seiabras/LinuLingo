import { test } from 'node:test';
import assert from 'node:assert/strict';
import { canRead, readingFit } from './stories';

test('leituras graduadas: abaixo e no nível abertas, o subnível seguinte é desafio, o resto espera a trilha', () => {
  assert.equal(readingFit('A1.1', 'A2.1'), 'revisao');
  assert.equal(readingFit('A2.1', 'A2.1'), 'no-nivel');
  assert.equal(readingFit('A2.2', 'A2.1'), 'desafio');
  assert.equal(readingFit('B1.1', 'A2.1'), 'acima');
  assert.equal(readingFit('C2', 'C1.2'), 'desafio');
  assert.ok(canRead('revisao') && canRead('no-nivel') && canRead('desafio'));
  assert.ok(!canRead('acima'));
});
