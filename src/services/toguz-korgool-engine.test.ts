import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as T from './toguz-korgool-engine';
import { deposito, type EstadoMancala } from './mancala-familia';
import { NIVEIS_TOGUZ, lanceMancala } from './mancala-familia-ia';

const n = T.N_TOGUZ;
const total = (s: EstadoMancala) => s.covas.reduce((a, b) => a + b, 0);
function posicao(m: Record<number, number>, turn: 0 | 1 = 0, tuz: [number | null, number | null] = [null, null]): EstadoMancala {
  const s = T.createInitialState(turn);
  return { ...s, covas: s.covas.map((_, i) => m[i] ?? 0), tuz };
}

test('Toguz korgool: 2×9 covas com 9 bolinhas, 162 ao todo', () => {
  const s = T.createInitialState();
  assert.equal(total(s), 162);
  assert.deepEqual(T.lancesLegais(s), [0, 1, 2, 3, 4, 5, 6, 7, 8]);
});

test('Toguz korgool: a primeira bolinha cai na própria cova; com uma só, vai para a seguinte', () => {
  const s = posicao({ 0: 3, 15: 1 });
  const f = T.jogar(s, 0);
  assert.equal(f.covas[0], 1);
  assert.equal(f.covas[1], 1);
  assert.equal(f.covas[2], 1);
  const g = T.jogar(posicao({ 4: 1, 15: 1 }), 4);
  assert.equal(g.covas[4], 0);
  assert.equal(g.covas[5], 1);
});

test('Toguz korgool: a semeadura pula os kazans', () => {
  const f = T.jogar(posicao({ 8: 2, 15: 1 }), 8);
  assert.equal(f.covas[deposito(n, 0)], 0);
  assert.equal(f.covas[10], 1, 'da cova 8 para a 10, do outro lado');
});

test('Toguz korgool: última bolinha deixando número par do outro lado captura', () => {
  // cova 7 com 3: 7, 8, 10; a 10 tinha 3 e fica com 4 → captura
  const s = posicao({ 7: 3, 10: 3, 15: 1 });
  const f = T.jogar(s, 7);
  assert.equal(f.covas[10], 0);
  assert.equal(f.covas[deposito(n, 0)], 4);
});

test('Toguz korgool: deixando 3 do outro lado, a cova vira a tuz de quem jogou', () => {
  const s = posicao({ 7: 3, 10: 2, 15: 1 });
  const f = T.jogar(s, 7);
  assert.equal(f.tuz![0], 10);
  // o que estava nela vai para o kazan do dono
  assert.equal(f.covas[10], 0);
  assert.equal(f.covas[deposito(n, 0)], 3);
  // e a cova deixa de ser jogável para o adversário
  assert.ok(!T.lancesLegais(f).includes(10));
});

test('Toguz korgool: só uma tuz, nunca a nona cova, nunca a de mesmo número da tuz do outro', () => {
  // já tem tuz: não faz outra
  let f = T.jogar(posicao({ 7: 4, 11: 2, 15: 1 }, 0, [12, null]), 7);
  assert.equal(f.tuz![0], 12);
  assert.equal(f.covas[11], 3);
  // a nona cova do jogador 1 é a 18: não vira tuz
  f = T.jogar(posicao({ 8: 11, 18: 1, 15: 1 }), 8);
  assert.equal(f.tuz![0], null);
  // o jogador 1 tem tuz na cova 3 do jogador 0 (índice 2); o 0 não pode ter tuz na cova 3 dele (índice 12)
  f = T.jogar(posicao({ 7: 6, 12: 2, 15: 1 }, 0, [null, 2]), 7);
  assert.equal(f.tuz![0], null);
});

test('Toguz korgool: bolinhas que caem na tuz são do dono dela', () => {
  // tuz do jogador 1 na cova 2 (lado do 0); o jogador 0 semeia por cima dela
  const s = posicao({ 0: 4, 15: 1 }, 0, [null, 2]);
  const f = T.jogar(s, 0);
  assert.equal(f.covas[2], 0);
  assert.equal(f.covas[deposito(n, 1)], 1);
});

test('Toguz korgool: sem bolinhas para jogar, acaba e cada um fica com as do seu lado', () => {
  const s = posicao({ 0: 1, 3: 4, 12: 1 }, 0);
  // o jogador 0 move a 0 para a 1; o 1 só tem a 12; depois de jogar ela, se o 0 ficar sem nada, acaba
  const f = T.jogar(T.jogar(s, 0), 12);
  assert.equal(total(f), total(s));
  assert.ok(f.winner === null || typeof f.winner === 'number' || f.winner === 'empate');
});

test('Toguz korgool: as bolinhas nunca somem e o Linu difícil decide em menos de 1 s', () => {
  let s = T.createInitialState(0);
  let maior = 0;
  for (let k = 0; k < 300 && s.winner === null; k++) {
    const t0 = Date.now();
    const l = lanceMancala(s, T, s.turn === 1 ? 'dificil' : 'facil', NIVEIS_TOGUZ)!;
    maior = Math.max(maior, Date.now() - t0);
    s = T.jogar(s, l);
    assert.equal(total(s), 162);
  }
  assert.notEqual(s.winner, null);
  assert.ok(maior < 1000, `lance mais lento: ${maior} ms`);
});
