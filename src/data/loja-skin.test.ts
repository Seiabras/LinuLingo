import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ITENS_LOJA, JOGOS_MANCALA, skinDoJogo } from './loja-jogos';

test('peça especial: vale no jogo dela, e escolher outra peça num jogo (semSkin) não apaga a dos outros', () => {
  const hnef = ITENS_LOJA.find((i) => i.skin?.jogo === 'hnefatafl')!;
  assert.ok(skinDoJogo('hnefatafl', [hnef.id]));
  assert.equal(skinDoJogo('hnefatafl', [hnef.id], ['hnefatafl']), undefined);
  // a coleção das mancalas vale para todas; desligar no oware não desliga no kalah
  const mancala = ITENS_LOJA.find((i) => i.skin?.jogo === 'mancala')!;
  assert.ok(JOGOS_MANCALA.length >= 3);
  assert.equal(skinDoJogo('oware', [mancala.id], ['oware']), undefined);
  assert.ok(skinDoJogo('kalah', [mancala.id], ['oware']));
});
