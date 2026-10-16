import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, jogar, lancesLegais, type TerniState } from './terni-engine';
import { lanceTerni } from './terni-ia';

const poe = (s: TerniState, ...casas: number[]) => casas.reduce((e, para) => jogar(e, { de: null, para }), s);

test('terni lapilli: três peças de cada lado; depois só se move', () => {
  let s = poe(createInitialState(), 0, 1, 5, 3, 7, 8);
  assert.equal(s.fase, 'mover');
  assert.equal(s.winner, null);
  // pôr mais uma não vale
  assert.equal(jogar(s, { de: null, para: 4 }), s);
  // mover a peça do X de 0 para 4, qualquer casa vazia
  assert.ok(lancesLegais(s).every((l) => l.de !== null && s.board[l.de] === 'x'));
  s = jogar(s, { de: 0, para: 4 });
  assert.equal(s.board[0], null);
  assert.equal(s.board[4], 'x');
  assert.equal(s.turn, 'o');
});

test('terni lapilli: vence quem faz três em linha movendo', () => {
  // X em 0, 4, 5; O em 1, 3, 7 → X move 5 para 8 e faz a diagonal 0-4-8
  let s = poe(createInitialState(), 0, 1, 4, 3, 5, 7);
  s = jogar(s, { de: 5, para: 8 });
  assert.equal(s.winner, 'x');
  assert.deepEqual(s.linha, [0, 4, 8]);
});

test('terni lapilli: a mesma posição pela terceira vez é empate; o Linu fecha a linha', () => {
  let s = poe(createInitialState(), 0, 1, 5, 3, 7, 8);
  const ida = (e: TerniState) => jogar(jogar(e, { de: 7, para: 6 }), { de: 8, para: 2 });
  const volta = (e: TerniState) => jogar(jogar(e, { de: 6, para: 7 }), { de: 2, para: 8 });
  s = volta(ida(volta(ida(s))));
  assert.equal(s.winner, 'empate');
  const t = poe(createInitialState(), 0, 1, 4, 3, 5, 7);
  const l = lanceTerni(t, 'medio', () => 0.5)!;
  assert.equal(jogar(t, l).winner, 'x');
});
