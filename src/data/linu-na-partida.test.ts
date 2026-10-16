import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ROUPA_DO_TEMA } from './linu-na-partida';
import { ROUPAS_LINU } from './roupas-linu';
import { TEMAS_JOGO, type TemaJogoId } from './temas-jogos';

test('Linu na partida: cada roupa de tema existe na loja e cada tema existe', () => {
  const roupas = new Set(ROUPAS_LINU.map((r) => r.id));
  for (const [tema, ids] of Object.entries(ROUPA_DO_TEMA)) {
    assert.ok(TEMAS_JOGO[tema as TemaJogoId], `tema ${tema} não existe`);
    for (const id of ids!) assert.ok(roupas.has(id), `${tema}: a roupa ${id} não existe na loja`);
  }
});
