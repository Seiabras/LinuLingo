import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, emXeque, ix, jogar, lancesDaPeca, lancesLegais, type CorX, type PecaX, type TipoX, type XiangqiState } from './xiangqi-engine';

const montar = (pecas: [number, number, CorX, TipoX][], turn: CorX = 'r'): XiangqiState => {
  const board: (PecaX | null)[] = Array(90).fill(null);
  for (const [r, c, cor, tipo] of pecas) board[ix(r, c)] = { cor, tipo };
  return { board, turn, winner: null, fim: null, emXeque: emXeque(board, turn), ultimo: null, repeticoes: {} };
};
const destinos = (s: XiangqiState, r: number, c: number) => lancesDaPeca(s, ix(r, c)).map((l) => l.para).sort((a, b) => a - b);

/** Conta as posições a `n` lances (o “perft”), o teste clássico de gerador de lances. */
function perft(s: XiangqiState, n: number): number {
  if (n === 0) return 1;
  let t = 0;
  for (const l of lancesLegais(s)) t += perft(jogar(s, l.de, l.para), n - 1);
  return t;
}

test('xiangqi: 32 peças, as vermelhas começam, e os números de lances conferem com os conhecidos (44 e 1.920)', () => {
  const s = createInitialState();
  assert.equal(s.board.filter(Boolean).length, 32);
  assert.equal(s.turn, 'r');
  assert.equal(perft(s, 1), 44);
  assert.equal(perft(s, 2), 1920);
});

test('xiangqi: o cavalo não pula: a perna presa bloqueia', () => {
  const livre = montar([
    [9, 1, 'r', 'h'],
    [9, 4, 'r', 'g'],
    [0, 3, 'b', 'g'],
  ]);
  assert.deepEqual(destinos(livre, 9, 1), [ix(7, 0), ix(7, 2), ix(8, 3)].sort((a, b) => a - b));
  const presa = montar([
    [9, 1, 'r', 'h'],
    [8, 1, 'r', 's'],
    [9, 4, 'r', 'g'],
    [0, 3, 'b', 'g'],
  ]);
  assert.deepEqual(destinos(presa, 9, 1), [ix(8, 3)]);
});

test('xiangqi: o elefante tem o olho tapado e não atravessa o rio', () => {
  const s = montar([
    [5, 2, 'r', 'e'],
    [6, 3, 'r', 's'],
    [9, 4, 'r', 'g'],
    [0, 3, 'b', 'g'],
  ]);
  // de (5,2): para cima seria atravessar o rio; (7,4) tem o olho (6,3) tapado; sobra (7,0)
  assert.deepEqual(destinos(s, 5, 2), [ix(7, 0)]);
});

test('xiangqi: o canhão só captura pulando exatamente uma peça', () => {
  const s = montar([
    [9, 0, 'r', 'c'],
    [5, 0, 'b', 's'],
    [2, 0, 'b', 'r'],
    [9, 4, 'r', 'g'],
    [0, 3, 'b', 'g'],
  ]);
  const d = destinos(s, 9, 0);
  assert.ok(d.includes(ix(2, 0)), 'captura o carro, pulando o soldado');
  assert.ok(!d.includes(ix(5, 0)), 'não captura o soldado colado na linha (sem plataforma)');
  assert.ok(d.includes(ix(6, 0)), 'anda até antes da peça');
});

test('xiangqi: o soldado só anda para o lado depois do rio', () => {
  const antes = montar([
    [6, 4, 'r', 's'],
    [9, 3, 'r', 'g'],
    [0, 5, 'b', 'g'],
  ]);
  assert.deepEqual(destinos(antes, 6, 4), [ix(5, 4)]);
  const depois = montar([
    [4, 4, 'r', 's'],
    [9, 3, 'r', 'g'],
    [0, 5, 'b', 'g'],
  ]);
  assert.deepEqual(destinos(depois, 4, 4), [ix(3, 4), ix(4, 3), ix(4, 5)].sort((a, b) => a - b));
});

test('xiangqi: os generais não podem ficar frente a frente sem nada no meio', () => {
  const s = montar([
    [9, 3, 'r', 'g'],
    [0, 4, 'b', 'g'],
  ]);
  assert.ok(!destinos(s, 9, 3).includes(ix(9, 4)), 'não pode ir para a coluna do outro general');
});

test('xiangqi: ficar sem nenhum lance é derrota, mesmo sem xeque', () => {
  // o general preto em (0,3), cercado: (0,4) e (1,3) são vigiados pelos carros vermelhos; ninguém dá xeque
  const s = montar(
    [
      [0, 3, 'b', 'g'],
      [9, 5, 'r', 'g'],
      [1, 8, 'r', 'r'],
      [5, 4, 'r', 'r'],
      [8, 0, 'r', 's'],
    ],
    'r',
  );
  const depois = jogar(s, ix(8, 0), ix(7, 0));
  assert.equal(depois.emXeque, false);
  assert.equal(depois.winner, 'r');
  assert.equal(depois.fim, 'sem-lance');
});
