import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, horizontal, lancesLegais, tracar, tracosDoInicio, vertical, type PontinhosState } from './pontinhos-engine';
import { lancePontinhos } from './pontinhos-ia';

const feitos = (s: PontinhosState) => s.tracos.flatMap((v, t) => (v === 'inicio' ? [t] : []));

test('Pontos e Caixas, tabuleiro sueco: a borda de fora começa traçada', () => {
  const s = createInitialState(3, 3, 0, 'sueco');
  assert.equal(feitos(s).length, 12, '3 em cima, 3 embaixo, 3 à esquerda, 3 à direita');
  for (let c = 0; c < 3; c++) {
    assert.equal(s.tracos[horizontal(3, 0, c)], 'inicio');
    assert.equal(s.tracos[horizontal(3, 3, c)], 'inicio');
    assert.equal(s.tracos[vertical(3, 3, c, 0)], 'inicio');
    assert.equal(s.tracos[vertical(3, 3, c, 3)], 'inicio');
  }
  // por dentro, nada; e ninguém começa com quadradinho
  assert.equal(s.tracos[horizontal(3, 1, 1)], null);
  assert.deepEqual(s.placar, [0, 0]);
  assert.equal(lancesLegais(s).length, 24 - 12);
});

test('Pontos e Caixas, tabuleiro islandês: só a esquerda e a de baixo', () => {
  const s = createInitialState(3, 3, 0, 'islandes');
  assert.equal(feitos(s).length, 6);
  for (let c = 0; c < 3; c++) {
    assert.equal(s.tracos[horizontal(3, 3, c)], 'inicio', 'embaixo');
    assert.equal(s.tracos[vertical(3, 3, c, 0)], 'inicio', 'à esquerda');
    assert.equal(s.tracos[horizontal(3, 0, c)], null, 'em cima, livre');
    assert.equal(s.tracos[vertical(3, 3, c, 3)], null, 'à direita, livre');
  }
  assert.deepEqual(tracosDoInicio(2, 2, 'americano'), []);
});

test('Pontos e Caixas, sueco: fechar o canto conta para quem fechou, e a partida vai até o fim', () => {
  let s = createInitialState(2, 2, 0, 'sueco');
  // o quadradinho de cima à esquerda já tem 2 lados; o jogador 0 faz o 3º, o 1 fecha
  s = tracar(s, horizontal(2, 1, 0));
  assert.equal(s.turn, 1);
  s = tracar(s, vertical(2, 2, 0, 1));
  assert.equal(s.placar[1], 1);
  assert.equal(s.turn, 1, 'fechou, joga de novo');
  // Linu contra Linu até o fim
  let n = 0;
  while (s.winner === null && n++ < 50) s = tracar(s, lancePontinhos(s, 'dificil', () => 0.5)!);
  assert.notEqual(s.winner, null);
  assert.equal(s.placar[0] + s.placar[1], 4);
});
