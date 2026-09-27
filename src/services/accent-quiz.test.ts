import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ACCENTS_ES } from '@/data/es/sotaques';
import { accentMastery, buildAccentRound, recordAccent } from './accent-quiz';

const porteno = ACCENTS_ES.find((a) => a.id === 'es-porteno')!;

test('treino do sotaque: resposta sempre entre as opções, sem opções repetidas', () => {
  for (const a of ACCENTS_ES) {
    for (const q of buildAccentRound(a, ACCENTS_ES, {}, 20)) {
      assert.ok(q.options.includes(q.answer), `${a.id}: ${q.prompt}`);
      assert.equal(new Set(q.options).size, q.options.length, `${a.id}: opções repetidas em ${q.prompt}`);
    }
  }
});

test('treino do sotaque: os três tipos de pergunta e as menos acertadas primeiro', () => {
  const round = buildAccentRound(porteno, ACCENTS_ES, {}, 50, () => 0.5);
  assert.ok(round.some((q) => q.kind === 'significa'));
  assert.ok(round.some((q) => q.kind === 'como-se-diz'));
  const origin = round.find((q) => q.kind === 'de-onde')!;
  assert.equal(origin.answer, 'Portenho (Buenos Aires)');
  // uma pergunta já dominada vai para o fim
  const dominated = { [round[0].key]: 5 };
  assert.notEqual(buildAccentRound(porteno, ACCENTS_ES, dominated, 50, () => 0.5)[0].key, round[0].key);
});

test('treino do sotaque: domínio conta acertos repetidos', () => {
  const q = buildAccentRound(porteno, ACCENTS_ES, {}, 1, () => 0.5)[0];
  let p = recordAccent({}, q, true);
  p = recordAccent(p, q, true);
  assert.equal(accentMastery(porteno, p).done, 1);
  assert.equal(recordAccent(p, q, false)[q.key], 1);
});
