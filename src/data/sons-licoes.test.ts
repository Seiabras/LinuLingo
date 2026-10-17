import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { ESTILOS_SOM_LICAO, SOM_LICAO_PADRAO, lerSomLicao } from './sons-licoes';

test('todo estilo com som tem os dois arquivos, de acerto e de erro', () => {
  for (const { id } of ESTILOS_SOM_LICAO) {
    if (id === 'nenhum') continue;
    for (const tipo of ['acerto', 'erro']) {
      assert.ok(existsSync(join(__dirname, '../../assets/sons/licoes', `${id}-${tipo}.wav`)), `${id}-${tipo}.wav`);
    }
  }
});

test('lerSomLicao aceita o que foi salvo e volta ao padrão no resto', () => {
  assert.deepEqual(lerSomLicao(JSON.stringify({ estilo: 'sino', volume: 80 })), { estilo: 'sino', volume: 80 });
  assert.deepEqual(lerSomLicao(null), SOM_LICAO_PADRAO);
  assert.deepEqual(lerSomLicao('{quebrado'), SOM_LICAO_PADRAO);
  assert.deepEqual(lerSomLicao(JSON.stringify({ estilo: 'trombone', volume: 33 })), SOM_LICAO_PADRAO);
});
