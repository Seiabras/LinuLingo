import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import { acharNaFrase, diffMask, findConfusables, perguntasConfusas } from './confusaveis';
import { CONFUSAVEIS_PT } from '@/data/confusaveis-pt';
import type { VocabSeed } from '@/data/types';

const row = (id: string, word_target: string, word_native: string): VocabSeed => ({
  id,
  language: 'xx',
  word_target,
  word_native,
  frequency_rank: Number(id),
  part_of_speech: 'substantivo',
  category: 'Essenciais',
  emoji: null,
  example_sentence: '',
  gender: null,
});

test('confusáveis: palavras parecidas na escrita e de sentido diferente entram', () => {
  const vocab = [row('1', 'casa', 'casa'), row('2', 'caça', 'caça'), row('3', 'elefante', 'elefante')];
  const pairs = findConfusables(vocab);
  assert.ok(pairs.some((p) => new Set([p.a.id, p.b.id]).has('1') && new Set([p.a.id, p.b.id]).has('2')));
  assert.ok(!pairs.some((p) => [p.a.id, p.b.id].includes('3')));
});

test('confusáveis: o mesmo sentido (gênero da mesma palavra) não conta como confusão', () => {
  const vocab = [row('1', 'gato', 'gato'), row('2', 'gata', 'gato')];
  assert.equal(findConfusables(vocab).length, 0);
});

test('confusáveis: palavra curta demais não entra (muito ruído)', () => {
  const vocab = [row('1', 'eu', 'eu'), row('2', 'eles', 'eles')];
  assert.equal(findConfusables(vocab).length, 0);
});

test('diffMask: marca só as letras que mudam', () => {
  const mask = diffMask('casa', 'caça');
  assert.deepEqual(mask, [false, false, true, false]);
});

test('findConfusables não quebra com vocabulário de verdade (idioma grande e um incompleto)', () => {
  for (const code of ['sv', 'rm']) {
    const pairs = findConfusables(PACKS[code].vocab);
    assert.ok(Array.isArray(pairs));
    for (const p of pairs) assert.notEqual(p.a.id, p.b.id);
  }
});

test('acharNaFrase só casa palavra inteira, sem ligar para maiúscula', () => {
  assert.equal(acharNaFrase('Volto daqui a três dias.', 'a')?.inicio, 12);
  assert.equal(acharNaFrase('Aonde você vai?', 'aonde')?.trecho, 'Aonde');
  assert.equal(acharNaFrase('Moro aqui há dois anos.', 'há')?.trecho, 'há');
  assert.equal(acharNaFrase('Eles são maus.', 'mau'), null);
  assert.equal(acharNaFrase('Se não chover, vamos.', 'se não')?.inicio, 0);
});

test('palavras confusas do português: cada exemplo tem a sua palavra, e só ela, do grupo', () => {
  const ids = new Set<string>();
  for (const g of CONFUSAVEIS_PT) {
    assert.ok(!ids.has(g.id), `id repetido: ${g.id}`);
    ids.add(g.id);
    assert.ok(g.palavras.length >= 2, g.id);
    for (const p of g.palavras) {
      assert.ok(acharNaFrase(p.exemplo, p.palavra), `“${p.palavra}” não está em “${p.exemplo}”`);
      // a frase não pode conter outra palavra do grupo, senão a lacuna fica ambígua
      for (const o of g.palavras) if (o !== p) assert.equal(acharNaFrase(p.exemplo, o.palavra), null, `“${p.exemplo}” também tem “${o.palavra}”`);
    }
  }
  const qs = perguntasConfusas(CONFUSAVEIS_PT);
  assert.equal(
    qs.length,
    CONFUSAVEIS_PT.reduce((n, g) => n + g.palavras.length, 0),
  );
  for (const q of qs) {
    assert.ok(q.lacuna.includes('____') && q.opcoes.includes(q.certa));
    assert.equal(acharNaFrase(q.lacuna, q.certa), null, q.lacuna);
  }
});
