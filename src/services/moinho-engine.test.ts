import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialState,
  legalMovesFrom,
  legalPlacements,
  movePiece,
  placePiece,
  removablePieces,
  removeOpponentPiece,
  type MoinhoState,
  type PlayerId,
} from './moinho-engine';

test('moinho: estado inicial tem 24 pontos vazios, fase de colocação, vez do jogador 0', () => {
  const s = createInitialState();
  assert.equal(s.points.length, 24);
  assert.ok(s.points.every((p) => p === null));
  assert.equal(s.phase, 'colocando');
  assert.equal(s.turn, 0);
  assert.deepEqual(s.placedCount, [0, 0]);
  assert.equal(s.winner, null);
});

test('moinho: no início, os 24 pontos são colocações legais', () => {
  const s = createInitialState();
  assert.equal(legalPlacements(s).length, 24);
});

test('moinho: colocar numa casa ocupada não faz nada (mesma referência)', () => {
  let s = createInitialState();
  s = placePiece(s, 0);
  const s2 = placePiece(s, 0);
  assert.equal(s2, s);
});

test('moinho: formar moinho na colocação deixa 1 remoção pendente e NÃO passa a vez', () => {
  let s = createInitialState();
  s = placePiece(s, 0); // jogador 0 em 0
  s = placePiece(s, 16); // jogador 1 em 16 (longe, só pra não interferir)
  s = placePiece(s, 1); // jogador 0 em 1
  s = placePiece(s, 18); // jogador 1 em 18
  assert.equal(s.turn, 0);
  s = placePiece(s, 2); // jogador 0 em 2 — completa o moinho {0,1,2}
  assert.equal(s.removalsPending, 1);
  assert.equal(s.turn, 0); // ainda não passou a vez: precisa remover primeiro
});

test('moinho: remover a peça do adversário resolve a vez', () => {
  let s = createInitialState();
  s = placePiece(s, 0);
  s = placePiece(s, 16);
  s = placePiece(s, 1);
  s = placePiece(s, 18);
  s = placePiece(s, 2); // moinho {0,1,2}, removalsPending = 1
  const removivel = removablePieces(s);
  assert.deepEqual(removivel.sort(), [16, 18]);
  s = removeOpponentPiece(s, 16);
  assert.equal(s.points[16], null);
  assert.equal(s.removalsPending, 0);
  assert.equal(s.turn, 1); // agora passou a vez
});

test('moinho: proteção de moinho — não pode remover peça que está num moinho do adversário, a não ser que todas estejam', () => {
  const points = Array(24).fill(null) as (PlayerId | null)[];
  points[8] = 1; points[9] = 1; points[10] = 1; // moinho do jogador 1: {8,9,10}
  points[16] = 1; // peça solta do jogador 1, fora de moinho
  points[0] = 0; points[1] = 0; // quase moinho do jogador 0, falta o 3º ponto
  const s: MoinhoState = { points, turn: 0, phase: 'colocando', placedCount: [2, 4], removalsPending: 1, winner: null };
  // só a peça solta (16) pode ser removida: as 3 do moinho {8,9,10} estão protegidas
  assert.deepEqual(removablePieces(s), [16]);
});

test('moinho: proteção de moinho — quando TODAS as peças do adversário estão em moinho, todas ficam removíveis', () => {
  const points = Array(24).fill(null) as (PlayerId | null)[];
  points[8] = 1; points[9] = 1; points[10] = 1; // moinho do jogador 1, e são as 3 únicas peças dele
  points[0] = 0;
  const s: MoinhoState = { points, turn: 0, phase: 'colocando', placedCount: [1, 3], removalsPending: 1, winner: null };
  assert.deepEqual(removablePieces(s).sort((a, b) => a - b), [8, 9, 10]);
});

test('moinho: dupla captura — um lance que fecha 2 moinhos ao mesmo tempo dá 2 remoções', () => {
  // ponto 17 completa tanto o moinho do anel interno {16,17,18} quanto o raio {1,9,17}
  const points = Array(24).fill(null) as (PlayerId | null)[];
  points[16] = 0; points[18] = 0; // faltando só o 17 pro moinho do anel
  points[1] = 0; points[9] = 0; // faltando só o 17 pro moinho do raio
  const s: MoinhoState = { points, turn: 0, phase: 'colocando', placedCount: [4, 0], removalsPending: 0, winner: null };
  const s2 = placePiece(s, 17);
  assert.equal(s2.removalsPending, 2);
});

test('moinho: fase de movimento começa só depois que os dois colocaram as 9 peças', () => {
  let s = createInitialState();
  const pontosLivres = Array.from({ length: 24 }, (_, i) => i);
  // coloca 9 de cada, alternando, sem nunca formar moinho (espalhado o bastante no grafo)
  const ordemSemMoinho = [0, 2, 4, 6, 9, 11, 13, 15, 18, 1, 3, 5, 7, 10, 12, 14, 16, 20];
  for (const idx of ordemSemMoinho) {
    assert.ok(pontosLivres.includes(idx));
    s = placePiece(s, idx);
    assert.equal(s.removalsPending, 0); // confirma que essa sequência não forma moinho nenhum
  }
  assert.deepEqual(s.placedCount, [9, 9]);
  assert.equal(s.phase, 'movendo');
});

test('moinho: na fase de movimento, uma peça só anda pra um vizinho vazio (sem pular)', () => {
  const points = Array(24).fill(null) as (PlayerId | null)[];
  points[0] = 0; // peça do jogador 0 no ponto 0 (vizinhos no anel externo: 1 e 7)
  points[1] = 1; // vizinho ocupado
  const s: MoinhoState = { points, turn: 0, phase: 'movendo', placedCount: [9, 9], removalsPending: 0, winner: null };
  const moves = legalMovesFrom(s, 0);
  assert.deepEqual(moves, [7]); // só o 7 está livre; o 1 está ocupado
});

test('moinho: "voar" — com só 3 peças no tabuleiro, qualquer ponto vazio é destino legal', () => {
  const points = Array(24).fill(null) as (PlayerId | null)[];
  points[0] = 0; points[6] = 0; points[12] = 0; // 3 peças do jogador 0, bem espalhadas
  points[8] = 1; points[20] = 1;
  const s: MoinhoState = { points, turn: 0, phase: 'movendo', placedCount: [9, 9], removalsPending: 0, winner: null };
  const moves = legalMovesFrom(s, 0);
  const vaziasEsperadas = 24 - 5; // 24 pontos menos as 5 peças no tabuleiro
  assert.equal(moves.length, vaziasEsperadas);
  assert.ok(moves.includes(17)); // ponto bem distante de 0, só alcançável voando
});

test('moinho: vence quem reduz o adversário a 2 peças', () => {
  const points = Array(24).fill(null) as (PlayerId | null)[];
  points[16] = 1; points[17] = 1; points[18] = 1; // jogador 1: exatamente 3 peças, todas em moinho {16,17,18} (as únicas dele)
  points[0] = 0; // jogador 0, peça qualquer (não precisa participar da remoção)
  const sAntesRemocao: MoinhoState = { points, turn: 0, phase: 'movendo', placedCount: [9, 9], removalsPending: 1, winner: null };
  const removivel = removablePieces(sAntesRemocao); // todas em moinho, mas são as únicas peças do jogador 1: todas removíveis
  assert.deepEqual(removivel.sort((a, b) => a - b), [16, 17, 18]);
  const depois = removeOpponentPiece(sAntesRemocao, 16);
  assert.equal(depois.winner, 0); // jogador 1 caiu pra 2 peças: jogador 0 vence
});

test('moinho: jogador sem lance legal nenhum (todas as peças travadas) perde', () => {
  const points = Array(24).fill(null) as (PlayerId | null)[];
  // jogador 1 nos 4 cantos do anel externo (0,2,4,6) — cada canto só tem 2 vizinhos, os pontos do
  // meio do lado (1,3,5,7); travando esses 4 pontos do meio, nenhum canto tem vizinho livre.
  points[0] = 1; points[2] = 1; points[4] = 1; points[6] = 1;
  points[1] = 0; points[3] = 0; points[5] = 0; points[7] = 0;
  points[18] = 0; // peça extra do jogador 0, livre pra mover (vizinhos 17 e 19, ambos vazios)
  const s: MoinhoState = { points, turn: 0, phase: 'movendo', placedCount: [9, 9], removalsPending: 0, winner: null };
  assert.ok([0, 2, 4, 6].every((i) => legalMovesFrom(s, i).length === 0)); // jogador 1 já está travado nesta posição
  const s2 = movePiece(s, 18, 17); // jogador 0 faz um lance qualquer, sem afetar o cerco
  assert.equal(s2.winner, 0); // ao fechar a vez, o jogador 1 não tem lance legal nenhum: jogador 0 vence
});
