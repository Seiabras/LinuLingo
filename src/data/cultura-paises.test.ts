import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FAUNA_MUSICA } from './fauna-musica';
import { CULTURA_PAISES, CULTURE_KINDS } from './cultura-paises';

test('cultura dos países: todo país com bichos e instrumentos tem todas as categorias obrigatórias', () => {
  assert.deepEqual(Object.keys(CULTURA_PAISES).sort(), Object.keys(FAUNA_MUSICA).sort());
  for (const [iso, c] of Object.entries(CULTURA_PAISES))
    for (const { key, optional } of CULTURE_KINDS) {
      const items = c[key];
      if (optional && !items) continue; // categoria opcional (mito de criação): nem todo país tem
      assert.ok(items && items.length > 0, `${iso}: sem ${key}`);
      const names = items.map((i) => i.name);
      assert.equal(new Set(names).size, names.length, `${iso}/${key}: nome repetido`);
      for (const i of items) assert.ok(i.emoji && i.name && i.fact.length > 20, `${iso}/${key}: ${i.name}`);
    }
});

test('mito de criação: só nos países com fonte real, sem ficha vazia', () => {
  const comMito = Object.entries(CULTURA_PAISES).filter(([, c]) => c.creationMyth);
  assert.ok(comMito.length >= 3, 'esperado pelo menos 3 países com mito de criação cadastrado');
  for (const [iso, c] of comMito) {
    assert.ok(c.creationMyth && c.creationMyth.length > 0, `${iso}: creationMyth presente mas vazio`);
  }
});
