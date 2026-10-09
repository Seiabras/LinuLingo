import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS, isAvailable, getPack, preloadPack, DEFAULT_LANGUAGE } from './idiomas';

test('preloadPack: carrega um pacote de verdade e preenche PACKS', async () => {
  const pack = await preloadPack('fi');
  assert.ok(pack);
  assert.equal(pack.code, 'fi');
  assert.equal(PACKS.fi, pack);
});

test('preloadPack: código desconhecido devolve undefined, sem quebrar', async () => {
  const pack = await preloadPack('xx-nao-existe');
  assert.equal(pack, undefined);
});

test('isAvailable: não depende de o pacote já ter sido carregado', () => {
  assert.equal(isAvailable('ro'), true);
  assert.equal(isAvailable('xx-nao-existe'), false);
});

test('getPack: cai pro idioma padrão quando o pedido ainda não carregou', async () => {
  await preloadPack(DEFAULT_LANGUAGE);
  assert.equal(getPack('xx-nao-existe'), PACKS[DEFAULT_LANGUAGE]);
});
