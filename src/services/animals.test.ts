import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildAnimalRound, recordAnimal, splitVerb } from './animals';
import { BICHOS_PT } from '../data/bichos-pt';
import { BICHOS_ES } from '../data/es/bichos';
import { BICHOS_RO } from '../data/ro/bichos';
import { BICHOS_RU } from '../data/ru/bichos';
import { BICHOS_IT } from '../data/it/bichos';

let seed = 3;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

test('bichos: todos os idiomas têm os mesmos bichos do português, com som, verbo e tradução', () => {
  for (const list of [BICHOS_ES, BICHOS_RO, BICHOS_RU, BICHOS_IT]) {
    assert.deepEqual(list.map((a) => a.id).sort(), Object.keys(BICHOS_PT).sort());
    for (const a of list) {
      assert.ok(a.animal && a.sound && a.translation);
      assert.ok(/[.!]$/.test(a.verb), `frase do verbo termina com ponto: ${a.verb}`);
      assert.ok(splitVerb(a.verb)[1], `verbo de ${a.verb}`);
    }
  }
});

test('bichos: o verbo é a última palavra da frase', () => {
  assert.deepEqual(splitVerb('Câinele latră.'), ['Câinele ___.', 'latră']);
  assert.deepEqual(splitVerb("L'anatra starnazza."), ["L'anatra ___.", 'starnazza']);
  assert.deepEqual(splitVerb('Соба́ка ла́ет.'), ['Соба́ка ___.', 'ла́ет']);
});

test('bichos: a rodada mistura os 3 tipos, a certa sempre nas opções e o português como armadilha', () => {
  const round = buildAnimalRound(BICHOS_RO, {}, 12, rnd);
  assert.equal(round.length, 12);
  assert.ok(new Set(round.map((q) => q.kind)).size === 3);
  for (const q of round) {
    assert.ok(q.options.includes(q.answer));
    assert.equal(new Set(q.options).size, q.options.length);
    assert.ok(q.options.length >= 3);
  }
  const dog = buildAnimalRound(BICHOS_RO, {}, 60, rnd).find((q) => q.kind === 'como-faz' && q.a.id === 'cao');
  assert.ok(dog && dog.kind === 'como-faz' && dog.trap === 'au-au' && dog.options.includes('au-au'), 'o “au-au” do português aparece como armadilha');
  const cat = buildAnimalRound(BICHOS_ES, {}, 60, rnd).find((q) => q.kind === 'como-faz' && q.a.id === 'gato');
  assert.ok(cat && cat.kind === 'como-faz' && cat.trap === null, 'miau é igual: sem armadilha');
  const cow = buildAnimalRound(BICHOS_RO, {}, 60, rnd).find((q) => q.kind === 'como-faz' && q.a.id === 'vaca');
  assert.ok(cow && cow.kind === 'como-faz' && cow.trap === null, '“muu” e “muuu” são o mesmo som: sem armadilha');
});

test('bichos: os menos acertados vêm primeiro', () => {
  const progress = Object.fromEntries(BICHOS_ES.map((a) => [a.id, 5]));
  progress.lobo = -1;
  const round = buildAnimalRound(BICHOS_ES, progress, 3, rnd);
  assert.equal(round[0].a.id, 'lobo');
  assert.equal(recordAnimal({}, round[0], false).lobo, -1);
});
