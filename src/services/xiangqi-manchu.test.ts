import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, emXeque, ix, jogar, lancesDaPeca, type PecaX, type XiangqiState } from './xiangqi-engine';
import { BUSCA_XIANGQI, escolherLance } from './jogos-ia';

test('xadrez manchu: as vermelhas sem cavalos, canhões e um carro; a bandeira em a1', () => {
  const s = createInitialState(true);
  const vermelhas = s.board.filter((p) => p?.cor === 'r').map((p) => p!.tipo);
  assert.equal(vermelhas.filter((t) => t === 'h' || t === 'c' || t === 'r').length, 0);
  assert.deepEqual(s.board[ix(9, 0)], { cor: 'r', tipo: 'b' });
  assert.equal(vermelhas.length, 16 - 5);
  // as pretas, completas
  assert.equal(s.board.filter((p) => p?.cor === 'b').length, 16);
});

/** Só a bandeira e os generais, para ver os três movimentos. */
function montar(extra: [number, PecaX][]): XiangqiState {
  const s = createInitialState(true);
  const board: (PecaX | null)[] = Array(90).fill(null);
  board[ix(9, 4)] = { cor: 'r', tipo: 'g' };
  board[ix(0, 3)] = { cor: 'b', tipo: 'g' };
  for (const [i, p] of extra) board[i] = p;
  return { ...s, board };
}

test('xadrez manchu: a bandeira anda como carro, cavalo (com a perna) e canhão', () => {
  const B: PecaX = { cor: 'r', tipo: 'b' };
  const s = montar([[ix(5, 4), B]]);
  const para = new Set(lancesDaPeca(s, ix(5, 4)).map((l) => l.para));
  assert.ok(para.has(ix(5, 0)) && para.has(ix(1, 4)), 'como carro');
  assert.ok(para.has(ix(3, 3)) && para.has(ix(7, 5)) && para.has(ix(4, 6)), 'como cavalo');
  // com uma peça colada acima, a perna para cima fica presa, mas o carro para ali e o canhão pula
  const comPerna = montar([
    [ix(5, 4), B],
    [ix(4, 4), { cor: 'b', tipo: 's' }],
    [ix(1, 4), { cor: 'b', tipo: 'r' }],
  ]);
  const p2 = new Set(lancesDaPeca(comPerna, ix(5, 4)).map((l) => l.para));
  assert.ok(!p2.has(ix(3, 3)) && !p2.has(ix(3, 5)), 'perna presa');
  assert.ok(p2.has(ix(4, 4)), 'captura como carro');
  assert.ok(p2.has(ix(1, 4)), 'captura como canhão, pulando o soldado');
});

test('xadrez manchu: a bandeira dá xeque nos três jeitos', () => {
  const B: PecaX = { cor: 'r', tipo: 'b' };
  assert.ok(emXeque(montar([[ix(0, 7), B]]).board, 'b'), 'como carro');
  assert.ok(emXeque(montar([[ix(2, 4), B]]).board, 'b'), 'como cavalo');
  assert.ok(emXeque(montar([[ix(5, 3), B], [ix(2, 3), { cor: 'r', tipo: 's' }]]).board, 'b'), 'como canhão');
  // o Linu acha o mate simples? ao menos joga um lance que vale
  const s = createInitialState(true);
  const l = escolherLance(s, 1, BUSCA_XIANGQI, 0, () => 0.5)!;
  assert.notEqual(jogar(s, l.de, l.para), s);
});
