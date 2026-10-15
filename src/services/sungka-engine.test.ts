import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as S from './sungka-engine';
import { deposito, type EstadoMancala } from './mancala-familia';
import { lanceMancala } from './mancala-familia-ia';

const n = S.N_SUNGKA;
const total = (s: EstadoMancala) => s.covas.reduce((a, b) => a + b, 0);
function posicao(m: Record<number, number>, turn: 0 | 1 = 0): EstadoMancala {
  const s = S.createInitialState(turn);
  return { ...s, covas: s.covas.map((_, i) => m[i] ?? 0) };
}

test('Sungka: 2×7 casinhas com 7 conchas e dois depósitos vazios, 98 conchas', () => {
  const s = S.createInitialState();
  assert.equal(total(s), 98);
  assert.equal(s.covas[deposito(n, 0)], 0);
});

test('Sungka: última concha no próprio depósito — joga de novo', () => {
  const f = S.jogar(posicao({ 4: 3, 10: 1 }), 4); // 5, 6, depósito
  assert.equal(f.covas[deposito(n, 0)], 1);
  assert.equal(f.turn, 0);
  assert.ok(f.ultimo!.jogaDeNovo);
});

test('Sungka: passa pelo próprio depósito, mas não pelo do adversário', () => {
  // casinha 13 do jogador 1 com 3: depósito dele (15), pula o 7 (do 0), cai na 0 e na 1
  const f = S.jogar(posicao({ 13: 3, 3: 1 }, 1), 13);
  assert.equal(f.covas[deposito(n, 1)], 1);
  assert.equal(f.covas[deposito(n, 0)], 0);
  assert.equal(f.covas[0], 1);
});

test('Sungka: última numa casinha com conchas — pega todas e continua', () => {
  // 0 com 2: cai na 1 e na 2; a 2 já tinha 1 → pega 2 e cai na 3 e na 4 (vazias): para na 4
  const f = S.jogar(posicao({ 0: 2, 2: 1, 13: 1 }), 0);
  assert.deepEqual(
    f.ultimo!.eventos.map((e) => e.t + ('i' in e ? e.i : '')),
    ['pega0', 'semeia1', 'semeia2', 'pega2', 'semeia3', 'semeia4'],
  );
  assert.equal(f.turn, 1);
});

test('Sungka: última numa casinha vazia sua captura a da frente e a própria concha', () => {
  // 0 com 2: 1 e 2 (vazia); a da frente da 2 é a 12, com 5
  const f = S.jogar(posicao({ 0: 2, 12: 5 }), 0);
  assert.equal(f.covas[deposito(n, 0)], 6);
  assert.equal(f.covas[12], 0);
  assert.equal(f.covas[2], 0);
});

test('Sungka: casinha vazia do adversário — a vez só acaba', () => {
  const f = S.jogar(posicao({ 6: 3, 2: 1 }), 6); // depósito, 8, 9 (vazia, do adversário)
  assert.equal(f.covas[9], 1);
  assert.equal(f.turn, 1);
});

test('Sungka: sem conchas, o jogador passa a vez; sem conchas em lugar nenhum, acaba', () => {
  const f = S.jogar(posicao({ 0: 2, 4: 1 }), 0); // o jogador 1 não tem nada
  assert.equal(f.turn, 0);
  assert.ok(f.ultimo!.passou);
  const fim = S.jogar(posicao({ 6: 1, 12: 0 }), 6); // a última concha vai para o depósito
  assert.notEqual(fim.winner, null);
  assert.equal(fim.winner, 0);
});

test('Sungka: as conchas nunca somem e o Linu difícil decide em menos de 1 s', () => {
  let s = S.createInitialState(0);
  let maior = 0;
  for (let k = 0; k < 400 && s.winner === null; k++) {
    const t0 = Date.now();
    const l = lanceMancala(s, S, s.turn === 1 ? 'dificil' : 'facil')!;
    maior = Math.max(maior, Date.now() - t0);
    s = S.jogar(s, l);
    assert.equal(total(s), 98);
  }
  assert.notEqual(s.winner, null);
  assert.ok(maior < 1000, `lance mais lento: ${maior} ms`);
});
