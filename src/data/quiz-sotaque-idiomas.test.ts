import { test } from 'node:test';
import assert from 'node:assert/strict';
import { QUIZ_SOTAQUE_IDIOMAS } from './quiz-sotaque-idiomas';
import { guessAccent, type GuessAnswers, type GuessQuestion, type GuessRegion } from '@/services/sotaque-quiz';

/**
 * As respostas mais típicas de uma região: em cada pergunta onde ela tem peso próprio, a opção com
 * o maior peso para ela. Perguntas sem nenhum peso para a região ficam sem resposta — responder
 * «o jeito comum» ali não diz nada sobre a região, mas por acaso pode favorecer outra (a que colocou
 * a 1ª opção), então é melhor deixar de fora, como faria alguém respondendo só o que sabe de si.
 */
function typical(questions: GuessQuestion[], region: string): GuessAnswers {
  const out: GuessAnswers = {};
  for (const q of questions) {
    let best = 0;
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

for (const [lang, data] of Object.entries(QUIZ_SOTAQUE_IDIOMAS)) {
  if (!data) continue;
  const { regions, questions, idioma }: { regions: GuessRegion[]; questions: GuessQuestion[]; idioma: string } = data;

  test(`quiz de sotaque (${idioma}): toda região dá para adivinhar com as respostas típicas dela`, () => {
    for (const r of regions) assert.equal(guessAccent(regions, questions, typical(questions, r.id))[0].region.id, r.id, `${lang}/${r.id}`);
  });

  test(`quiz de sotaque (${idioma}): cada pergunta tem ids únicos, opções diferentes e ninguém com peso negativo`, () => {
    const ids = new Set(questions.map((q) => q.id));
    assert.equal(ids.size, questions.length, lang);
    for (const q of questions) {
      assert.equal(new Set(q.options.map((o) => o.label)).size, q.options.length, `${lang}/${q.id}`);
      for (const o of q.options) for (const w of Object.values(o.weights)) assert.ok(w! > 0 && w! <= 3, `${lang}/${q.id} ${o.label}`);
    }
  });

  test(`quiz de sotaque (${idioma}): toda região citada numa pergunta existe na lista de regiões`, () => {
    const regionIds = new Set(regions.map((r) => r.id));
    for (const q of questions) for (const o of q.options) for (const id of Object.keys(o.weights)) assert.ok(regionIds.has(id), `${lang}/${q.id}: região desconhecida "${id}"`);
  });
}
