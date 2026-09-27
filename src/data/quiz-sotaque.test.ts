import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GUESS_QUESTIONS, GUESS_REGIONS, guessAccent, pointsTo, type GuessAnswers, type RegionId } from './quiz-sotaque';
import { surveyStats } from '@/services/accent-survey';

/** As respostas mais típicas de uma região: em cada pergunta, a opção com o maior peso para ela. */
function typical(region: RegionId): GuessAnswers {
  const out: GuessAnswers = {};
  for (const q of GUESS_QUESTIONS) {
    let best = -1;
    q.options.forEach((o, i) => {
      const w = o.weights[region] ?? 0;
      if (w > best) {
        best = w;
        out[q.id] = i;
      }
    });
  }
  return out;
}

test('quiz de sotaque: toda região dá para adivinhar com as respostas típicas dela', () => {
  for (const r of GUESS_REGIONS) assert.equal(guessAccent(typical(r.id))[0].region.id, r.id, r.id);
});

test('quiz de sotaque: «maneiro», «aipim», «sinal», «sacolé» e o «s» chiado dão carioca', () => {
  const pick = (q: string, label: string) => [q, GUESS_QUESTIONS.find((x) => x.id === q)!.options.findIndex((o) => o.label.startsWith(label))] as const;
  const answers = Object.fromEntries([pick('legal', 'maneiro'), pick('mandioca', 'aipim'), pick('semaforo', 'sinal'), pick('sacole', 'sacolé'), pick('s', 'chiado')]);
  for (const v of Object.values(answers)) assert.ok(v >= 0);
  assert.equal(guessAccent(answers)[0].region.id, 'carioca');
});

test('quiz de sotaque: cada pergunta tem ids únicos, opções diferentes e ninguém com peso negativo', () => {
  const ids = new Set(GUESS_QUESTIONS.map((q) => q.id));
  assert.equal(ids.size, GUESS_QUESTIONS.length);
  for (const q of GUESS_QUESTIONS) {
    assert.equal(new Set(q.options.map((o) => o.label)).size, q.options.length, q.id);
    for (const o of q.options) for (const w of Object.values(o.weights)) assert.ok(w! > 0 && w! <= 3, `${q.id} ${o.label}`);
  }
  // «aipim» aponta para o Rio; «top, show» não aponta para lugar nenhum
  assert.equal(pointsTo(GUESS_QUESTIONS[1].options[1])[0].id, 'carioca');
  assert.deepEqual(pointsTo(GUESS_QUESTIONS[0].options.at(-1)!), []);
});

test('pesquisa: conta os acertos do Linu', () => {
  const at = '2026-09-27T00:00:00Z';
  assert.deepEqual(
    surveyStats([
      { at, answers: {}, guess: 'carioca', actual: 'carioca' },
      { at, answers: {}, guess: 'gaucho', actual: 'catarinense' },
      { at, answers: {}, guess: 'mineiro', actual: 'outro' },
    ]),
    { total: 3, hits: 1 },
  );
});
