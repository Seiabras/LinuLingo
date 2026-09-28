import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FAUNA_MUSICA } from './fauna-musica';
import { CULTURA_PAISES, CULTURE_KINDS } from './cultura-paises';

test('cultura dos países: todo país com bichos e instrumentos tem todas as categorias', () => {
  assert.deepEqual(Object.keys(CULTURA_PAISES).sort(), Object.keys(FAUNA_MUSICA).sort());
  for (const [iso, c] of Object.entries(CULTURA_PAISES))
    for (const { key } of CULTURE_KINDS) {
      assert.ok(c[key].length > 0, `${iso}: sem ${key}`);
      const names = c[key].map((i) => i.name);
      assert.equal(new Set(names).size, names.length, `${iso}/${key}: nome repetido`);
      for (const i of c[key]) assert.ok(i.emoji && i.name && i.fact.length > 20, `${iso}/${key}: ${i.name}`);
    }
});
