import { test } from 'node:test';
import assert from 'node:assert/strict';
import { IDIOMAS_METADADOS } from './idiomas-metadados';
import { LOADERS } from './idiomas';

test('idiomas-metadados: todo código tem o nome, a bandeira e a família batendo com o pacote de verdade', async () => {
  const codes = Object.keys(LOADERS);
  assert.ok(codes.length > 100, 'esperava bem mais de 100 idiomas carregáveis');
  for (const code of codes) {
    const meta = IDIOMAS_METADADOS[code];
    assert.ok(meta, `idiomas-metadados.ts não tem o código '${code}' (regenerar o arquivo?)`);
    const pack = await LOADERS[code]();
    assert.equal(meta.code, pack.code, `code de '${code}'`);
    assert.equal(meta.name, pack.name, `name de '${code}' está desatualizado em idiomas-metadados.ts`);
    assert.equal(meta.nativeName, pack.nativeName, `nativeName de '${code}' está desatualizado em idiomas-metadados.ts`);
    assert.equal(meta.flag, pack.flag, `flag de '${code}' está desatualizada em idiomas-metadados.ts`);
    assert.deepEqual(meta.lineage, pack.lineage, `lineage de '${code}' está desatualizada em idiomas-metadados.ts`);
  }
});

test('idiomas-metadados: nenhum código sobrando que não exista mais como pacote', () => {
  const codes = new Set(Object.keys(LOADERS));
  for (const code of Object.keys(IDIOMAS_METADADOS)) {
    assert.ok(codes.has(code), `idiomas-metadados.ts tem '${code}', que não existe mais em idiomas.ts`);
  }
});
