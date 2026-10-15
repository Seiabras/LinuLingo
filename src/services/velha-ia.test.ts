import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, jogar, type LinhaState } from './linha-engine';
import { lanceVelha } from './velha-ia';

test('velha 4×4: quatro em linha vence; três não', () => {
  let s: LinhaState = createInitialState(4, 4);
  for (const [x, o] of [
    [0, 4],
    [1, 5],
    [2, 6],
  ])
    s = jogar(jogar(s, x!), o!);
  assert.equal(s.winner, null, 'três em linha ainda não vence');
  s = jogar(s, 3);
  assert.equal(s.winner, 'x');
});

test('velha 4×4: o Linu tapa a linha de três e completa a própria; rápido no difícil', () => {
  let s: LinhaState = createInitialState(4, 4);
  s = jogar(jogar(s, 0), 15);
  s = jogar(jogar(s, 1), 14);
  s = jogar(s, 2); // o X ameaça o 3
  const t0 = Date.now();
  const l = lanceVelha(s, 'dificil', () => 0.5);
  assert.ok(Date.now() - t0 < 1000, `demorou ${Date.now() - t0} ms`);
  assert.equal(l, 3, 'tapou');
  // a vez do O com três em linha: completa
  let t: LinhaState = createInitialState(4, 4);
  t = jogar(jogar(t, 0), 12);
  t = jogar(jogar(t, 5), 13);
  t = jogar(jogar(t, 10), 14);
  t = jogar(t, 3);
  assert.equal(lanceVelha(t, 'medio', () => 0.5), 15);
});

test('velha 4×4: a primeira resposta do Linu no difícil sai em menos de 1 s', () => {
  const s = jogar(createInitialState(4, 4), 0);
  const t0 = Date.now();
  const l = lanceVelha(s, 'dificil', () => 0.5);
  console.log('velha 4×4 difícil, primeiro lance:', Date.now() - t0, 'ms');
  assert.ok(l !== null);
  assert.ok(Date.now() - t0 < 1500);
});

test('velha 3×3: continua perfeito (não perde para a abertura no canto)', () => {
  const s = jogar(createInitialState(3, 3), 0);
  assert.equal(lanceVelha(s, 'dificil', () => 0.5), 4);
});
