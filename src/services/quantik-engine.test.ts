import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as K from './quantik-engine';
import { lanceQuantik } from './quantik-ia';

/** Monta uma posição a partir de [casa, jogador, forma], com a reserva descontada. */
function posicao(pecas: [number, K.JogadorK, K.Forma][], turn: K.JogadorK = 0): K.QuantikState {
  const s = K.createInitialState(turn);
  const board = s.board.slice();
  const reserva: [number[], number[]] = [[2, 2, 2, 2], [2, 2, 2, 2]];
  for (const [i, j, f] of pecas) {
    board[i] = K.peca(j, f);
    reserva[j][f]!--;
  }
  return { ...s, board, reserva };
}

test('Quantik: 12 zonas (4 linhas, 4 colunas, 4 regiões) e cada casa está em 3', () => {
  assert.equal(K.ZONAS.length, 12);
  for (let i = 0; i < 16; i++) assert.equal(K.ZONAS_DA_CASA[i]!.length, 3);
  assert.deepEqual(K.ZONAS[8]!.casas, [0, 1, 4, 5]);
  assert.equal(K.regiaoDa(10), 3);
});

test('Quantik: no começo há 64 lances (16 casas × 4 formas)', () => {
  assert.equal(K.lancesLegais(K.createInitialState()).length, 64);
});

test('Quantik: não pode pôr a forma onde o ADVERSÁRIO já tem essa forma (linha, coluna ou região)', () => {
  const s = posicao([[0, 1, 0]], 0); // esfera do jogador 2 na casa 0
  assert.equal(K.podeJogar(s, 3, 0), false, 'mesma linha');
  assert.equal(K.podeJogar(s, 12, 0), false, 'mesma coluna');
  assert.equal(K.podeJogar(s, 5, 0), false, 'mesma região');
  assert.equal(K.podeJogar(s, 10, 0), true, 'longe dela');
  assert.equal(K.podeJogar(s, 3, 1), true, 'outra forma na mesma linha');
});

test('Quantik: as próprias peças não proíbem, mas a do adversário proíbe mesmo assim', () => {
  const s = posicao([[0, 0, 0]], 0); // a sua esfera na casa 0
  assert.equal(K.podeJogar(s, 3, 0), true, 'pode repetir a própria forma na linha');
  const t = posicao([[0, 0, 0], [15, 1, 0]], 0);
  assert.equal(K.podeJogar(t, 3, 0), false, 'a esfera dele na coluna da casa 3 proíbe');
});

test('Quantik: só 2 peças de cada forma', () => {
  const s = posicao([[0, 0, 2], [10, 0, 2]], 0);
  assert.equal(K.podeJogar(s, 5, 2), false);
});

test('Quantik: a quarta forma diferente numa linha, coluna ou região vence, de quem quer que sejam as outras', () => {
  // linha de cima: esfera (você), cilindro (Linu), cubo (você); o cone na casa 3 fecha
  const s = K.jogar(posicao([[0, 0, 0], [1, 1, 1], [2, 0, 2]], 1), 3, 3);
  assert.equal(s.winner, 1, 'quem põe a quarta forma vence');
  assert.equal(s.motivo, 'formas');
  assert.deepEqual(s.linha, [0, 1, 2, 3]);
  // região de baixo à direita
  const r = K.jogar(posicao([[10, 0, 0], [11, 1, 1], [14, 1, 2]], 0), 15, 3);
  assert.equal(r.winner, 0);
  assert.deepEqual(r.linha, [10, 11, 14, 15]);
  // formas repetidas não valem
  const t = K.jogar(posicao([[0, 0, 0], [1, 0, 0], [2, 1, 2]], 1), 3, 3);
  assert.equal(t.winner, null);
});

test('Quantik: quem fica sem lance na vez perde', () => {
  // o jogador 2 tem só esferas na mão (as outras já foram usadas, longe), e as esferas do jogador 1
  // proíbem todas as casas vazias que sobram
  const s = K.createInitialState(0);
  const board = s.board.slice();
  // esferas do jogador 1 nas casas 0 e 10: proíbem as linhas 1 e 3, as colunas 1 e 3 e as regiões 1 e 4
  board[0] = K.peca(0, 0);
  board[10] = K.peca(0, 0);
  // o resto do tabuleiro cheio, menos a casa 15 (região 4, proibida pela esfera da 10)
  const enchimento: [number, K.JogadorK, K.Forma][] = [];
  for (let i = 0; i < 15; i++) if (board[i] === null) enchimento.push([i, 1, 1]);
  for (const [i, j, f] of enchimento) board[i] = K.peca(j, f);
  const reserva: [number[], number[]] = [[0, 0, 0, 0], [2, 0, 0, 0]];
  const antes: K.QuantikState = { ...s, board, reserva, turn: 1 };
  assert.equal(K.lancesLegais(antes).length, 0);
  // e o lance do jogador 1 que deixa o 2 assim vence
  const quase: K.QuantikState = { ...antes, board: board.map((v, i) => (i === 10 ? null : v)), reserva: [[1, 0, 0, 0], [2, 0, 0, 0]], turn: 0 };
  const fim = K.jogar(quase, 10, 0);
  assert.equal(fim.winner, 0);
  assert.equal(fim.motivo, 'sem-lance');
});

test('Linu no Quantik: fecha as 4 formas quando pode', () => {
  const s = posicao([[0, 0, 0], [1, 0, 1], [2, 0, 2]], 1);
  for (const nivel of ['facil', 'medio', 'dificil'] as const) {
    const l = lanceQuantik(s, nivel)!;
    assert.equal(K.jogar(s, l.casa, l.forma).winner, 1, nivel);
  }
});

test('Linu no Quantik: não deixa a vitória na cara (médio e difícil)', () => {
  // você ameaça pôr o cone na casa 3; o Linu precisa bloquear (cone dele na linha, casa 3 ocupada…)
  const s = posicao([[0, 0, 0], [1, 0, 1], [2, 0, 2], [15, 1, 0]], 1);
  for (const nivel of ['medio', 'dificil'] as const) {
    const l = lanceQuantik(s, nivel)!;
    const depois = K.jogar(s, l.casa, l.forma);
    const ameaca = K.podeJogar(depois, 3, 3) && depois.reserva[0][3]! > 0;
    assert.ok(!ameaca || depois.winner !== null, `${nivel} deixou o cone na casa 3`);
  }
});

test('Linu no Quantik: partida Linu contra Linu termina, só com lances válidos e rápida', () => {
  let semente = 11;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = K.createInitialState(0);
  let maior = 0;
  for (let k = 0; k < 20 && s.winner === null; k++) {
    const t0 = Date.now();
    const l = lanceQuantik(s, k % 2 ? 'dificil' : 'medio', sorteio)!;
    maior = Math.max(maior, Date.now() - t0);
    assert.ok(K.podeJogar(s, l.casa, l.forma));
    s = K.jogar(s, l.casa, l.forma);
  }
  assert.notEqual(s.winner, null);
  assert.ok(maior < 2500, `lance mais lento: ${maior} ms`);
});
