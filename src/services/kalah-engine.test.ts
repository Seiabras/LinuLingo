import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, jogar, lancesLegais, type KalahState } from './kalah-engine';

const total = (s: KalahState) => s.covas.reduce((a, b) => a + b, 0);

test('kalah: começa com 4 sementes em cada uma das 12 casas e os depósitos vazios', () => {
  const s = createInitialState();
  assert.equal(total(s), 48);
  assert.equal(s.covas[6], 0);
  assert.equal(s.covas[13], 0);
  assert.deepEqual(lancesLegais(s), [0, 1, 2, 3, 4, 5]);
});

test('kalah: a última semente no próprio depósito dá outra vez', () => {
  // da casa 2, quatro sementes: 3, 4, 5 e o depósito (6)
  const s = jogar(createInitialState(), 2);
  assert.equal(s.covas[6], 1);
  assert.equal(s.turn, 0);
  assert.equal(s.ultimo?.jogaDeNovo, true);
  // da casa 0: 1, 2, 3, 4 — a vez passa
  assert.equal(jogar(createInitialState(), 0).turn, 1);
});

test('kalah: semeia pelo próprio depósito, mas pula o do adversário', () => {
  const s0 = createInitialState();
  s0.covas[5] = 10;
  const s = jogar(s0, 5);
  // 6 (meu depósito), 7..12 (6 casas), pula o 13, e 0, 1, 2
  assert.equal(s.covas[13], 0);
  assert.equal(s.covas[6], 1);
  assert.deepEqual(s.ultimo?.semeadas, [6, 7, 8, 9, 10, 11, 12, 0, 1, 2]);
  assert.equal(total(s), total(s0));
});

test('kalah: última semente numa casa minha vazia leva as da frente', () => {
  const s0 = createInitialState();
  s0.covas[1] = 1;
  s0.covas[2] = 0; // vazia; a da frente é a 10, com 4
  const s = jogar(s0, 1);
  assert.equal(s.ultimo?.captura, 10);
  assert.equal(s.covas[10], 0);
  assert.equal(s.covas[2], 0);
  assert.equal(s.covas[6], 5);
  assert.equal(s.turn, 1);
});

test('kalah: na casa vazia com a da frente vazia, não captura (regra padrão)', () => {
  const s0 = createInitialState();
  s0.covas[1] = 1;
  s0.covas[2] = 0;
  s0.covas[10] = 0;
  const s = jogar(s0, 1);
  assert.equal(s.ultimo?.captura, null);
  assert.equal(s.covas[2], 1);
});

test('kalah: quando um lado esvazia, o outro recolhe o que sobrou e vence quem tem mais', () => {
  const s0: KalahState = { covas: [0, 0, 0, 0, 0, 1, 20, 1, 2, 0, 0, 0, 0, 24], turn: 0, winner: null, ultimo: null };
  const s = jogar(s0, 5); // a última cai no depósito; o lado do jogador 0 fica vazio
  assert.equal(s.covas[6], 21);
  assert.equal(s.covas[13], 27);
  assert.equal(s.winner, 1);
  assert.equal(total(s), 48);
});

test('kalah: lance de casa vazia ou do adversário não vale', () => {
  const s = createInitialState();
  assert.equal(jogar(s, 8), s);
  s.covas[0] = 0;
  assert.equal(jogar(s, 0), s);
});
