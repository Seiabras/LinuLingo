import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as Q from './quixo-engine';
import { lanceQuixo } from './quixo-ia';

const X = 1;
const O = 2;

test('Quixo: começa com 25 cubos lisos e só os 16 da borda podem sair', () => {
  const s = Q.createInitialState();
  assert.ok(s.board.every((v) => v === 0));
  const tiraveis = s.board.map((_, i) => i).filter((i) => Q.podeTirar(s, i));
  assert.equal(tiraveis.length, 16);
  assert.ok(!Q.podeTirar(s, 12), 'o do meio não sai');
});

test('Quixo: canto volta em 2 pontas, meio da borda em 3, nunca no mesmo lugar', () => {
  assert.deepEqual(Q.destinos(0).sort((a, b) => a - b), [4, 20]);
  assert.deepEqual(Q.destinos(2).sort((a, b) => a - b), [0, 4, 22]);
  assert.deepEqual(Q.destinos(10).sort((a, b) => a - b), [0, 14, 20]);
  assert.equal(Q.lancesLegais(Q.createInitialState()).length, 4 * 2 + 12 * 3);
});

test('Quixo: empurrar a fileira desloca os cubos e o cubo entra com o símbolo de quem jogou', () => {
  let s = Q.createInitialState();
  const b = s.board.slice();
  b[1] = O; // um círculo na linha de cima
  s = { ...s, board: b };
  // tira o canto 0 e devolve pela ponta 4: a linha anda para a esquerda
  const t = Q.jogar(s, { de: 0, para: 4 });
  assert.equal(t.board[0], O, 'o círculo andou para a casa 0');
  assert.equal(t.board[4], X, 'a cruz entrou na ponta');
  assert.equal(t.turn, 1);
  // coluna: tira a casa 10 (linha 2, coluna 0) e devolve por cima (casa 0): a coluna desce
  const u = Q.jogar(Q.createInitialState(), { de: 10, para: 0 });
  assert.equal(u.board[0], X);
});

test('Quixo: não pode tirar cubo do adversário nem devolver no mesmo lugar', () => {
  const s0 = Q.createInitialState();
  const b = s0.board.slice();
  b[0] = O;
  const s = { ...s0, board: b };
  assert.equal(Q.podeTirar(s, 0), false);
  assert.equal(Q.jogar(s, { de: 0, para: 4 }), s);
  assert.equal(Q.jogar(s0, { de: 2, para: 2 }), s0);
  // cubo próprio pode
  const t = { ...s0, board: s0.board.map((v, i) => (i === 0 ? X : v)) };
  assert.equal(Q.podeTirar(t, 0), true);
});

test('Quixo: linha de 5 com o seu símbolo vence', () => {
  const s0 = Q.createInitialState();
  const w0 = s0.board.slice();
  for (const i of [0, 1, 2, 3]) w0[i] = X;
  // tirar o canto 24 e devolver pela ponta 4 empurra a coluna 4 para baixo: a cruz entra no 4 e fecha a linha de cima
  const w = Q.jogar({ ...s0, board: w0 }, { de: 24, para: 4 });
  assert.equal(w.winner, X);
  assert.deepEqual(w.linha, [0, 1, 2, 3, 4]);
  // com só 3 cruzes, não fecha
  const n0 = w0.map((v, i) => (i === 3 ? 0 : v));
  assert.equal(Q.jogar({ ...s0, board: n0 }, { de: 24, para: 4 }).winner, null);
});

test('Quixo: formar a linha do adversário perde, mesmo formando a sua junto', () => {
  const s0 = Q.createInitialState();
  const b = s0.board.slice();
  // círculos em 1..4 da linha de cima; 0 é uma cruz que a cruz vai tirar e devolver pela ponta 20,
  // empurrando a coluna 0 para cima: a casa 0 recebe o cubo da 5 (círculo)
  b[0] = X;
  for (const i of [1, 2, 3, 4, 5]) b[i] = O;
  const t = Q.jogar({ ...s0, board: b }, { de: 0, para: 20 });
  assert.equal(t.winner, O);
  assert.ok(t.entregou);
});

test('Quixo a quatro: a ponta diz qual parceiro pode jogar o cubo', () => {
  let s = Q.createInitialState({ quatro: true });
  s = Q.jogar(s, { de: 0, para: 4, ponta: 1 }); // A1 joga a cruz com a ponta para A2
  assert.equal(s.turn, 1, 'vez de B1');
  assert.equal(Q.simboloDe(s.board[4]!), X);
  assert.equal(Q.pontaDe(s.board[4]!), 1);
  // na vez de A1 (turn 0), a cruz da casa 4 não pode ser jogada por ele; na de A2 (turn 2), pode
  assert.equal(Q.podeTirar({ ...s, turn: 0 }, 4), false);
  assert.equal(Q.podeTirar({ ...s, turn: 2 }, 4), true);
  assert.equal(Q.podeTirar({ ...s, turn: 1 }, 4), false, 'B nunca tira cruz');
});

test('Linu no Quixo: fecha a linha quando pode e não entrega a dele', () => {
  const s0 = Q.createInitialState();
  const b = s0.board.slice();
  for (const i of [0, 1, 2, 3]) b[i] = O;
  const s = { ...s0, board: b, turn: 1 };
  for (const nivel of ['facil', 'medio', 'dificil'] as const) {
    const l = lanceQuixo(s, nivel)!;
    assert.equal(Q.jogar(s, l).winner, O, nivel);
  }
});

test('Linu no Quixo: partida Linu contra Linu só tem lances válidos e o difícil pensa rápido', () => {
  let semente = 5;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = Q.createInitialState();
  let maior = 0;
  for (let k = 0; k < 60 && s.winner === null; k++) {
    const t0 = Date.now();
    const l = lanceQuixo(s, k % 2 ? 'dificil' : 'facil', sorteio)!;
    maior = Math.max(maior, Date.now() - t0);
    const e = Q.jogar(s, l);
    assert.notEqual(e, s);
    s = e;
  }
  assert.ok(maior < 2500, `lance mais lento: ${maior} ms`);
});

test('Quixo: depois do limite de lances do app, empate', () => {
  const s = { ...Q.createInitialState(), lances: Q.LIMITE_LANCES - 1 };
  assert.equal(Q.jogar(s, { de: 0, para: 4 }).winner, 'empate');
});
