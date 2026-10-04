import { test } from 'node:test';
import assert from 'node:assert/strict';
import { somDaMoradia } from './ambiente-moradia';

test('cada moradia da Antártida tem o seu som; as casas do país ficam em silêncio', () => {
  assert.equal(somDaMoradia('barraca'), 'vento');
  assert.equal(somDaMoradia('estacao'), 'vento');
  assert.equal(somDaMoradia('refugio'), 'pinguins');
  assert.equal(somDaMoradia('navio'), 'mar');
  assert.equal(somDaMoradia('casa-es'), null);
});
