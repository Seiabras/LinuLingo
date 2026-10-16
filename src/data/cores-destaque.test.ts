import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CORES_DESTAQUE, hexDaCor, variaveisDaCor } from './cores-destaque';

test('cores de destaque: o azul é o de sempre, e toda paleta tem os 11 tons em hex', () => {
  assert.equal(hexDaCor('azul'), '#2563EB');
  assert.equal(variaveisDaCor('azul')['--conecta-600'], '37 99 235');
  for (const c of CORES_DESTAQUE) {
    assert.equal(Object.keys(c.paleta).length, 11, c.id);
    for (const v of Object.values(c.paleta)) assert.match(v, /^#[0-9A-F]{6}$/, `${c.id}: ${v}`);
  }
});
