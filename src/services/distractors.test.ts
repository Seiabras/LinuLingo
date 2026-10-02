/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pickDistractors } from './distractors';

interface W {
  id: string;
  category?: string | null;
  key: string;
}
const w = (id: string, key: string, category: string | null = null): W => ({ id, key, category });
const keyOf = (x: W) => x.key;
// sem sorteio: determinístico, pra não depender de sorte num pool pequeno (achado por seiabras-b8 —
// sem a preferência de categoria, os dois testes abaixo passavam "por sorte" em ~10% das rodadas)
const noShuffle = () => 0;

test('pickDistractors nunca devolve item com a mesma chave (mesma imagem)', () => {
  const word = w('1', 'img-a');
  const [mesmaChave1, mesmaChave2, imgB, imgC] = [w('2', 'img-a'), w('3', 'img-a'), w('4', 'img-b'), w('5', 'img-c')];
  const pool = [word, mesmaChave1, mesmaChave2, imgB, imgC];
  // noShuffle: com Math.random de verdade, essa mutação (tirar o filtro de chave) só reprovava
  // 9 de 10 rodadas — 1/6 de chance de os 2 sorteados serem justamente imgB e imgC (achado por
  // seiabras-b8, via teste de mutação). Determinístico, reprova sempre.
  const picked = pickDistractors(word, pool, keyOf, 2, noShuffle);
  assert.deepEqual(picked, [imgC, imgB]);
});

test('pickDistractors nunca devolve a própria palavra', () => {
  const word = w('1', 'img-a');
  const [outra1, outra2] = [w('2', 'img-b'), w('3', 'img-c')];
  const pool = [word, outra1, outra2];
  const picked = pickDistractors(word, pool, keyOf, 2, noShuffle);
  assert.deepEqual(picked, [outra2, outra1]);
});

test('pickDistractors com pool pequeno devolve o que der, sem travar', () => {
  const word = w('1', 'img-a');
  assert.deepEqual(pickDistractors(word, [word], keyOf, 2), []);
  assert.equal(pickDistractors(word, [word, w('2', 'img-b')], keyOf, 2).length, 1);
});

test('pickDistractors prefere a mesma categoria, completando com o resto quando falta', () => {
  const word = w('1', 'img-a', 'Saudações');
  const [saudacao2, pessoa, natureza, numero] = [
    w('2', 'img-b', 'Saudações'),
    w('3', 'img-c', 'Pessoas'),
    w('4', 'img-d', 'Natureza'),
    w('5', 'img-e', 'Números'),
  ];
  const pool = [word, saudacao2, pessoa, natureza, numero];
  // só 1 da mesma categoria no pool: o outro distrator tem que vir do resto, não travar em 1 só.
  // noShuffle: sem ele, este teste passaria "por sorte" em boa parte das rodadas (achado por
  // seiabras-b8, via teste de mutação) — determinístico, dá pra exigir o resultado exato.
  const picked = pickDistractors(word, pool, keyOf, 2, noShuffle);
  assert.deepEqual(picked, [saudacao2, natureza]);
});

test('pickDistractors tira todos os n da mesma categoria quando dá', () => {
  const word = w('1', 'img-a', 'Saudações');
  const [saudacao2, saudacao3, pessoa] = [w('2', 'img-b', 'Saudações'), w('3', 'img-c', 'Saudações'), w('4', 'img-d', 'Pessoas')];
  const pool = [word, saudacao2, saudacao3, pessoa];
  const picked = pickDistractors(word, pool, keyOf, 2, noShuffle);
  assert.deepEqual(picked, [saudacao3, saudacao2]);
});

test('pickDistractors sem category no pool ignora a preferência, sem quebrar', () => {
  const word = w('1', 'img-a');
  const pool = [word, w('2', 'img-b'), w('3', 'img-c')];
  assert.equal(pickDistractors(word, pool, keyOf, 2).length, 2);
});
