import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS, isAvailable, getPack, preloadPack, preloadAllPacks, LOADERS, DEFAULT_LANGUAGE } from './idiomas';

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

test('preloadPack: uma falha transitória não fica presa pra sempre — a próxima chamada tenta de novo', async () => {
  const code = 'teste-falha-transitoria';
  let tentativas = 0;
  LOADERS[code] = () => {
    tentativas++;
    if (tentativas === 1) return Promise.reject(new Error('falha simulada, como o Metro não achando um arquivo novo'));
    return preloadPack('fi').then((p) => p!);
  };
  try {
    await assert.rejects(preloadPack(code));
    const pack = await preloadPack(code);
    assert.ok(pack);
    assert.equal(tentativas, 2);
  } finally {
    delete LOADERS[code];
    delete PACKS[code];
  }
});

test('preloadAllPacks: um pacote falhando não trava o carregamento dos outros', async () => {
  const code = 'teste-falha-nao-trava';
  LOADERS[code] = () => Promise.reject(new Error('falha simulada'));
  try {
    await preloadAllPacks();
    // chegou até aqui sem lançar, e os idiomas de verdade continuam carregando normalmente
    assert.ok(PACKS[DEFAULT_LANGUAGE]);
    assert.ok(PACKS.fi);
  } finally {
    delete LOADERS[code];
  }
});
