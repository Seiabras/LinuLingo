/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARTIGOS, artigoDe, deLocal, emLocal } from './artigo-geografico';
import { WORLD } from '../data/mapa-mundi';

test('emLocal: contrai "em" com o artigo certo (casos do bug relatado)', () => {
  assert.equal(emLocal('Romênia'), 'na Romênia');
  assert.equal(emLocal('Ilhas Faroe'), 'nas Ilhas Faroe');
  assert.equal(emLocal('Brasil'), 'no Brasil');
  assert.equal(emLocal('Países Baixos'), 'nos Países Baixos');
  assert.equal(emLocal('Estados Unidos'), 'nos Estados Unidos');
  assert.equal(emLocal('Cuba'), 'em Cuba'); // sem artigo
  assert.equal(emLocal('Portugal'), 'em Portugal'); // sem artigo
});

test('emLocal: mais alguns casos confirmados pela fonte (variados)', () => {
  assert.equal(emLocal('Egito'), 'no Egito');
  assert.equal(emLocal('Hungria'), 'na Hungria');
  assert.equal(emLocal('Chipre'), 'no Chipre');
  assert.equal(emLocal('Filipinas'), 'nas Filipinas');
  assert.equal(emLocal('Reino Unido'), 'no Reino Unido');
  assert.equal(emLocal('Costa Rica'), 'na Costa Rica');
  assert.equal(emLocal('Moçambique'), 'em Moçambique'); // sem artigo (Senado/Ciberdúvidas)
  assert.equal(emLocal('Angola'), 'em Angola'); // sem artigo, apesar de terminar em "a"
});

test('deLocal: mesma contração com "de"', () => {
  assert.equal(deLocal('Romênia'), 'da Romênia');
  assert.equal(deLocal('Brasil'), 'do Brasil');
  assert.equal(deLocal('Países Baixos'), 'dos Países Baixos');
  assert.equal(deLocal('Cuba'), 'de Cuba');
});

test('artigoDe: nome não listado é tratado como sem artigo (padrão seguro)', () => {
  assert.equal(artigoDe('Um país qualquer que não existe na tabela'), null);
});

test('toda chave da tabela de artigos bate com um nome real em WORLD (ou é região sem país)', () => {
  const nomes = new Set(WORLD.map((c) => c.name));
  nomes.add('Curdistão'); // REGIOES_SEM_PAIS, em src/services/aventura.ts
  nomes.add('espaço (ficção)'); // REGIOES_SEM_PAIS: klingon (tlh), língua fictícia sem território real
  for (const chave of Object.keys(ARTIGOS)) {
    assert.ok(nomes.has(chave), `"${chave}" não é um nome de WORLD nem de REGIOES_SEM_PAIS — provável erro de digitação`);
  }
});
