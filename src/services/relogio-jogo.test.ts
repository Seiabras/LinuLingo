import { test } from 'node:test';
import assert from 'node:assert/strict';
import { esgotou, limiteDo, mostrador } from './relogio-jogo';

test('relógio dos jogos: cronômetro conta para cima, com limite conta para baixo e acaba no zero', () => {
  assert.equal(limiteDo('desligado'), null);
  assert.equal(limiteDo('cronometro'), null);
  assert.equal(limiteDo('5'), 300_000);
  assert.equal(mostrador('cronometro', 0), '0:00');
  assert.equal(mostrador('cronometro', 65_400), '1:05');
  assert.equal(mostrador('3', 0), '3:00');
  assert.equal(mostrador('3', 179_500), '0:01');
  assert.equal(mostrador('3', 200_000), '0:00');
  assert.equal(esgotou('3', 179_999), false);
  assert.equal(esgotou('3', 180_000), true);
  assert.equal(esgotou('cronometro', 10_000_000), false);
});
