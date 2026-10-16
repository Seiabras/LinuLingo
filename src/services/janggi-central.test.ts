import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, ix, lancesLegais, NOMES_ARRUMACAO, trocarArrumacao } from './janggi-engine';

test('janggi, a quinta arrumação (carro no meio): elefantes nas pontas e carros ao lado dos guardas', () => {
  const s = createInitialState({ cho: 'central', han: 'central' });
  const linha = (r: number) => Array.from({ length: 9 }, (_, c) => s.board[ix(r, c)]?.tipo ?? '.').join('');
  assert.equal(linha(9), 'ehra.arhe');
  assert.equal(linha(0), 'ehra.arhe');
  assert.ok(NOMES_ARRUMACAO.central.includes('carro no meio'));
  // dá para escolher antes do primeiro lance, e a partida anda
  const t = trocarArrumacao(createInitialState(), 'cho', 'central');
  assert.equal(t.board[ix(9, 2)]?.tipo, 'r');
  assert.equal(t.board[ix(9, 0)]?.tipo, 'e');
  assert.ok(lancesLegais(t).length > 0);
});
