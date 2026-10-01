import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import { diffMask, findConfusables } from './confusaveis';
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
