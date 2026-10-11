import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ESTILOS_XIANGQI } from './xiangqi-estilos';
import { contraste } from './exercitos-jogos';

test('peças do xiangqi: em todo estilo, o caractere lê bem sobre o disco, e os dois lados se distinguem', () => {
  for (const [id, e] of Object.entries(ESTILOS_XIANGQI)) {
    for (const c of ['r', 'b'] as const) assert.ok(contraste(e.letra[c], e.disco[c]) >= 3.5, `${id}/${c}: ${contraste(e.letra[c], e.disco[c]).toFixed(2)}`);
    assert.ok(e.letra.r !== e.letra.b || e.disco.r !== e.disco.b, `${id}: os dois lados iguais`);
  }
});
