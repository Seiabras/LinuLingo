import { test } from 'node:test';
import assert from 'node:assert/strict';
import { nomeDigitado, NOME_MAX } from './nomes-jogadores';

test('nomes dos jogadores: vazio por padrão, sem espaços nas pontas, cortados no tamanho máximo', () => {
  assert.equal(nomeDigitado({ nome1: '', nome2: '' }, 0), '');
  const p = { nome1: '  Ana  ', nome2: 'Beto' };
  assert.equal(nomeDigitado(p, 0), 'Ana');
  assert.equal(nomeDigitado(p, 1), 'Beto');
  assert.equal(nomeDigitado(p, 2), '', 'só há dois nomes');
  assert.equal(nomeDigitado({ nome1: 'x'.repeat(40) }, 0).length, NOME_MAX);
  assert.equal(nomeDigitado({ nome1: 42 as unknown as string }, 0), '', 'valor estranho vira vazio');
});
