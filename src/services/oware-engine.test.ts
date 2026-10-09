import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, legalMoves, sow, type OwareState } from './oware-engine';

test('oware: estado inicial tem 4 sementes em cada uma das 12 casas, 0×0, vez do jogador 0', () => {
  const s = createInitialState();
  assert.equal(s.houses.length, 12);
  assert.ok(s.houses.every((h) => h === 4));
  assert.deepEqual(s.scores, [0, 0]);
  assert.equal(s.turn, 0);
  assert.equal(s.winner, null);
});

test('oware: semear sem capturar distribui 1 semente por casa seguinte e passa a vez', () => {
  const s = createInitialState();
  const s2 = sow(s, 0);
  assert.deepEqual(s2.houses, [0, 5, 5, 5, 5, 4, 4, 4, 4, 4, 4, 4]);
  assert.deepEqual(s2.scores, [0, 0]);
  assert.equal(s2.turn, 1);
});

test('oware: jogar numa casa vazia ou do adversário não faz nada (mesma referência)', () => {
  const s = createInitialState();
  const s2 = sow(s, 6); // casa do jogador 1, não é a vez dele
  assert.equal(s2, s);
});

test('oware: captura simples — a última semente cai numa casa do adversário que fica com 2', () => {
  const s: OwareState = { houses: [0, 0, 0, 0, 0, 1, 1, 4, 4, 4, 4, 4], scores: [0, 0], turn: 0, winner: null };
  const s2 = sow(s, 5);
  assert.equal(s2.houses[6], 0); // capturada
  assert.equal(s2.scores[0], 2);
});

test('oware: captura em cadeia — pra trás, enquanto as casas do adversário também ficarem com 2 ou 3', () => {
  const s: OwareState = { houses: [0, 0, 0, 0, 0, 2, 1, 1, 4, 4, 4, 4], scores: [0, 0], turn: 0, winner: null };
  const s2 = sow(s, 5);
  assert.equal(s2.houses[6], 0);
  assert.equal(s2.houses[7], 0);
  assert.equal(s2.scores[0], 4); // 2 + 2
});

test('oware: "grand slam" — capturar TODAS as sementes do adversário de uma vez é anulado (regra abapa)', () => {
  // casa 0 com 1 semente mantém a fileira do jogador 0 não-vazia depois do lance, só pra isolar o
  // teste do "grand slam" da regra de alimentar (sem isso, o jogador 1 ficaria travado depois e o
  // motor encerraria o jogo por fome — outro teste, mais abaixo, cobre esse caso).
  const s: OwareState = { houses: [1, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0], scores: [0, 0], turn: 0, winner: null };
  const s2 = sow(s, 5);
  assert.equal(s2.houses[6], 2); // a captura foi anulada: as sementes continuam no tabuleiro
  assert.equal(s2.houses[7], 2);
  assert.equal(s2.scores[0], 0); // nenhum ponto capturado
  assert.equal(s2.winner, null); // o jogo segue normalmente
});

test('oware: regra de alimentar — com a fileira do adversário vazia, só jogadas que chegam até ela são legais', () => {
  const s: OwareState = { houses: [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], scores: [0, 0], turn: 0, winner: null };
  // a única casa com sementes (0, com 1 semente) semeia só pra casa 1 (própria fileira) — não alimenta
  assert.deepEqual(legalMoves(s), []);

  const s2: OwareState = { houses: [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], scores: [0, 0], turn: 0, winner: null };
  // a casa 3, com 1 semente, semeia pra casa 4 (própria fileira) — também não alimenta
  assert.deepEqual(legalMoves(s2), []);

  const s3: OwareState = { houses: [0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0], scores: [0, 0], turn: 0, winner: null };
  // a casa 5, com 1 semente, semeia pra casa 6 — já é da fileira do adversário: alimenta
  assert.deepEqual(legalMoves(s3), [5]);
});

test('oware: sem lance legal por fome — o motor já resolve isso dentro do próprio lance que trava o adversário', () => {
  // jogador 0 joga a casa 5 (1 semente), que cai na casa 6 do jogador 1 (sem capturar: 3+1=4)
  const s: OwareState = { houses: [0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0], scores: [0, 0], turn: 0, winner: null };
  const s2 = sow(s, 5);
  // o jogador 1 ficaria só com a casa 6 (4 sementes); semeando, cai nas casas 7-10, todas da
  // própria fileira — não alimenta o jogador 0 (fileira dele ficou vazia). Travado, a função já
  // resolve o fim de jogo no mesmo lance (ver teste completo abaixo).
  assert.equal(legalMoves(s2).length, 0); // nem o próprio jogador 1 tem lance: o tabuleiro já foi recolhido
  assert.equal(s2.winner, 1);
});

test('oware: fome encadeada — ao jogar e descobrir que o próximo não tem lance, o jogo termina e o travado recolhe o que tinha', () => {
  const s: OwareState = { houses: [0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0], scores: [0, 0], turn: 0, winner: null };
  const s2 = sow(s, 5); // jogador 0 semeia; jogador 1 fica com só a casa 6 (4 sementes) e sem alimentar
  // Como o motor já teria detectado isso no próprio `sow`, o jogo já deve ter terminado aqui:
  assert.equal(s2.winner, 1); // jogador 1 recolhe as 4 sementes da própria casa 6 e vence (4 > 0)
  assert.equal(s2.scores[1], 4);
  assert.equal(s2.scores[0], 0);
  assert.ok(s2.houses.every((h) => h === 0)); // tabuleiro todo recolhido
});

test('oware: vence quem chega a 25 sementes capturadas, mesmo que o jogo pudesse continuar', () => {
  const s: OwareState = { houses: [0, 0, 0, 0, 0, 1, 2, 4, 4, 4, 4, 4], scores: [24, 0], turn: 0, winner: null };
  const s2 = sow(s, 5); // captura a casa 6 (2+1=3), scores[0] vai de 24 pra 27
  assert.equal(s2.scores[0], 27);
  assert.equal(s2.winner, 0);
});
