import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, jogar, podeTrocar, trocar, type LinhaState, type Marca } from './linha-engine';
import { lanceGomoku } from './jogos-ia';

/** Põe as pedras direto no tabuleiro (sem passar pelas vezes). */
function posicao(n: number, pedras: [number, Marca][], turn: Marca, opcoes: { caro?: boolean; troca?: boolean } = {}): LinhaState {
  const s = createInitialState(n, 5, opcoes);
  const board = s.board.slice();
  for (const [i, m] of pedras) board[i] = m;
  return { ...s, board, turn };
}

const n = 15;
const em = (r: number, c: number) => r * n + c;

test('gomoku Caro: cinco bloqueado nas duas pontas por pedras do adversário não vence', () => {
  // brancas nas duas pontas da fileira 7, colunas 2 e 8; pretas de 3 a 6, falta a 7
  const pedras: [number, Marca][] = [
    [em(7, 2), 'o'],
    [em(7, 8), 'o'],
    [em(7, 3), 'x'],
    [em(7, 4), 'x'],
    [em(7, 5), 'x'],
    [em(7, 6), 'x'],
  ];
  const caro = jogar(posicao(n, pedras, 'x', { caro: true }), em(7, 7));
  assert.equal(caro.winner, null);
  // no estilo livre, a mesma jogada vence
  assert.equal(jogar(posicao(n, pedras, 'x'), em(7, 7)).winner, 'x');
});

test('gomoku Caro: bloqueado de um lado só, ou na beira do tabuleiro, vence', () => {
  const umLado = jogar(posicao(n, [[em(7, 2), 'o'], [em(7, 3), 'x'], [em(7, 4), 'x'], [em(7, 5), 'x'], [em(7, 6), 'x']], 'x', { caro: true }), em(7, 7));
  assert.equal(umLado.winner, 'x');
  const beira = jogar(posicao(n, [[em(0, 5), 'o'], [em(0, 0), 'x'], [em(0, 1), 'x'], [em(0, 2), 'x'], [em(0, 3), 'x']], 'x', { caro: true }), em(0, 4));
  assert.equal(beira.winner, 'x', 'a beira não bloqueia');
});

test('gomoku Caro: seis em linha vence mesmo bloqueado nas duas pontas', () => {
  const pedras: [number, Marca][] = [[em(7, 1), 'o'], [em(7, 8), 'o'], ...[2, 3, 4, 5, 6].map((c) => [em(7, c), 'x'] as [number, Marca])];
  assert.equal(jogar(posicao(n, pedras, 'x', { caro: true }), em(7, 7)).winner, 'x');
});

test('gomoku com troca: só depois da primeira pedra, uma vez', () => {
  let s = createInitialState(n, 5, { troca: true });
  assert.equal(podeTrocar(s), false);
  s = jogar(s, em(7, 7));
  assert.equal(podeTrocar(s), true);
  const t = trocar(s);
  assert.equal(t.trocou, true);
  assert.equal(t.turn, 'o', 'a vez continua das brancas');
  assert.deepEqual(t.board, s.board);
  assert.equal(podeTrocar(t), false);
  const depois = jogar(t, em(7, 8));
  assert.equal(trocar(depois), depois, 'depois do segundo lance não troca mais');
  const sem = jogar(createInitialState(n, 5), em(7, 7));
  assert.equal(trocar(sem), sem, 'sem a regra, não troca');
});

test('gomoku Caro: o Linu fecha o cinco que vale e não perde tempo com o bloqueado', () => {
  // brancas (Linu) com 4 de 3 a 6 na fileira 5, pontas livres: fecha
  const s = posicao(n, [[em(5, 3), 'o'], [em(5, 4), 'o'], [em(5, 5), 'o'], [em(5, 6), 'o'], [em(9, 9), 'x'], [em(9, 10), 'x']], 'o', { caro: true });
  const l = lanceGomoku(s, 'dificil', () => 0.5)!;
  assert.equal(jogar(s, l).winner, 'o');
});
