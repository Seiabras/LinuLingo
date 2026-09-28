import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KOI_ALPHABET, KOI_TENSES, koiLetters, koiRound } from './koiwrit';

test('koiwrit: 40 sinais, cada traço (1–10) em 4 tamanhos, letras únicas', () => {
  assert.equal(KOI_ALPHABET.length, 40);
  assert.equal(new Set(KOI_ALPHABET.map((l) => l.letter)).size, 40);
  assert.equal(new Set(KOI_ALPHABET.map((l) => `${l.shape}-${l.size}`)).size, 40);
  assert.equal(KOI_ALPHABET.find((l) => l.letter === 'a')?.size, 4, '«a» é o círculo inteiro');
  assert.equal(KOI_ALPHABET.find((l) => l.letter === 'r')?.shape, 10);
});

test('koiwrit: divide as palavras respeitando os dígrafos', () => {
  const seq = (w: string) => koiLetters(w).map((l) => l.letter).join('.');
  assert.equal(seq('Tsevhu'), 'ts.e.vh.u');
  assert.equal(seq('xuji'), 'x.u.j.i');
  assert.equal(seq("'eujak"), "'.eu.j.a.k");
  assert.equal(seq('khaen'), 'kh.ae.n');
  assert.equal(seq('tzahdei'), 'ts.a.h.d.e.i', 'tz não tem sinal próprio: usa o de ts');
});

test('koiwrit: 8 tempos em volta do koi (o presente com o focinho para baixo) e rodadas de treino', () => {
  assert.equal(KOI_TENSES.length, 8);
  assert.equal(KOI_TENSES.find((t) => t.id === 'presente')?.angle, 180);
  const round = koiRound(10, () => 0.3);
  assert.equal(round.length, 10);
  for (const q of round) assert.ok(q.options.includes(q.letter) && q.options.length === 4);
});
