/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildLexicon, checkJournal, countSentences } from './journal';
import { detectPitch, expectedContour, finalContour, rhythmScore } from './pitch';
import { genderTip } from './mnemonics';
import { ROMENO } from '../data/ro';

const lex = buildLexicon(
  ROMENO.vocab.flatMap((v) => [v.word_target, v.example_sentence]),
  ROMENO.vocab.filter((v) => v.gender).map((v) => ({ word: v.word_target, gender: v.gender! })),
);

test('diário: devolve acentos que faltam', () => {
  const r = checkJournal('Multumesc, sunt bine si fericit.', lex);
  assert.equal(r.corrected, 'Mulțumesc, sunt bine și fericit.');
  assert.ok(r.issues.every((i) => i.kind === 'acento'));
});

test('diário: erros típicos de lusófonos', () => {
  assert.equal(checkJournal('Eu este Lucas.', lex).corrected, 'Eu sunt Lucas.');
  assert.equal(checkJournal('Sunt 20 de ani.', lex).corrected, 'Am 20 de ani.');
  assert.equal(checkJournal('Am foame.', lex).corrected, 'Mi-e foame.');
  assert.equal(checkJournal('Locuiesc la Cluj.', lex).corrected, 'Locuiesc în Cluj.');
  assert.equal(checkJournal('Buna dimineata!', lex).corrected, 'Bună dimineața!');
  assert.equal(checkJournal('Eu place ciocolata.', lex).corrected, 'Îmi place ciocolata.');
});

test('diário: gênero do vocabulário corrige artigo e possessivo', () => {
  assert.equal(checkJournal('Vreau un cafea.', lex).corrected, 'Vreau o cafea.');
  assert.equal(checkJournal('Am o tren.', lex).corrected, 'Am un tren.');
  assert.equal(checkJournal('Mama meu gătește.', lex).corrected, 'Mama mea gătește.');
});

test('diário: texto correto não é alterado', () => {
  const t = 'Azi am mâncat sarmale la bunica. Mi-e dor de tine!';
  const r = checkJournal(t, lex);
  assert.equal(r.corrected, t);
  assert.equal(r.issues.length, 0);
  assert.equal(countSentences(t), 2);
});

test('pitch: detecta um tom de 200 Hz e ignora silêncio', () => {
  const sr = 16000;
  const buf = Float32Array.from({ length: 2048 }, (_, i) => 0.5 * Math.sin((2 * Math.PI * 200 * i) / sr));
  const f = detectPitch(buf, sr)!;
  assert.ok(Math.abs(f - 200) < 5, `detectou ${f}`);
  assert.equal(detectPitch(new Float32Array(2048), sr), null);
});

test('entonação: sim/não sobe; pergunta com «unde» e afirmação descem', () => {
  assert.equal(expectedContour('Vorbești română?'), 'sobe');
  assert.equal(expectedContour('Unde este gara?'), 'desce');
  assert.equal(expectedContour('Sunt din Brazilia.'), 'desce');
  assert.equal(finalContour([150, 150, 150, 150, 150, 150, 180, 185, 190]), 'sobe');
  assert.equal(finalContour([200, 200, 200, 200, 200, 200, 160, 150, 150]), 'desce');
  assert.equal(finalContour([null, 150]), null);
  assert.equal(rhythmScore(2000, 2000), 100);
  assert.equal(rhythmScore(3000, 2000), 50);
});

test('mnemônicos: dicas por terminação', () => {
  assert.match(genderTip('casă', 'f'), /-ă/);
  assert.match(genderTip('câine', 'm'), /masculina/);
  assert.match(genderTip('tren', 'n'), /un ou/);
});

test('diário em russo: ё que falta, possessivo pelo gênero e erros de lusófonos', () => {
  const ru = buildLexicon(['Ещё ча́ю, пожа́луйста.', 'Моя́ ма́ма до́ма.'], [
    { word: 'ма́ма', gender: 'f' },
    { word: 'дом', gender: 'm' },
    { word: 'окно́', gender: 'n' },
  ]);
  assert.equal(checkJournal('Еще чаю.', ru, 'ru').corrected, 'Ещё чаю.');
  assert.equal(checkJournal('Мой мама дома.', ru, 'ru').corrected, 'Моя мама дома.');
  assert.equal(checkJournal('Моя дом большой.', ru, 'ru').corrected, 'Мой дом большой.');
  assert.equal(checkJournal('Я имею 20 лет.', ru, 'ru').corrected, 'Мне 20 лет.');
  assert.equal(checkJournal('Я имею двадцать лет.', ru, 'ru').corrected, 'Мне двадцать лет.');
  assert.equal(checkJournal('Я нравится музыка.', ru, 'ru').corrected, 'Мне нравится музыка.');
  assert.equal(checkJournal('Я холодно.', ru, 'ru').corrected, 'Мне холодно.');
  assert.equal(checkJournal('Я есть студент.', ru, 'ru').corrected, 'Я студент.');
  // texto correto fica intacto
  assert.equal(checkJournal('Мне нравится Москва.', ru, 'ru').issues.length, 0);
});

test('entonação: russo não cobra subida no fim da pergunta de sim/não', () => {
  assert.equal(expectedContour('Вы говори́те по-ру́сски?', 'ru'), null);
  assert.equal(expectedContour('Где метро́?', 'ru'), 'desce');
  assert.equal(expectedContour('Я из Брази́лии.', 'ru'), 'desce');
});
