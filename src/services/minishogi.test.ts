import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createMinishogi, jogar, lancesLegais, N5, naZona, perft, T, type ShogiState } from './shogi-engine';
import { BUSCA_SHOGI, escolherLance } from './jogos-ia';

const i5 = (r: number, c: number) => r * N5 + c;

test('minishogi: 5×5, rei, ouro, prata, bispo e torre, com o peão na frente do rei', () => {
  const s = createMinishogi();
  assert.equal(s.board.length, 25);
  assert.deepEqual(
    [0, 1, 2, 3, 4].map((c) => s.board[i5(4, c)]),
    [T.K, T.G, T.S, T.B, T.R],
  );
  assert.deepEqual(
    [0, 1, 2, 3, 4].map((c) => s.board[i5(0, c)]),
    [-T.R, -T.B, -T.S, -T.G, -T.K],
  );
  assert.equal(s.board[i5(3, 0)], T.P);
  assert.equal(s.board[i5(1, 4)], -T.P);
  assert.equal(s.turn, 's');
});

test('minishogi: perft igual ao do Fairy-Stockfish (tests/perft.sh: 533.203 a 5 lances)', () => {
  const s = createMinishogi();
  assert.equal(perft(s, 1), 14);
  assert.equal(perft(s, 2), 181);
  assert.equal(perft(s, 3), 2512);
  assert.equal(perft(s, 5), 533203);
});

test('minishogi: a zona de promoção é só a última fileira', () => {
  assert.equal(naZona('s', 0, N5), true);
  assert.equal(naZona('s', 1, N5), false);
  assert.equal(naZona('g', 4, N5), true);
  assert.equal(naZona('g', 3, N5), false);
  // o peão do sente que chega na última fileira promove sempre
  const board = Array(25).fill(0);
  board[i5(4, 0)] = T.K;
  board[i5(0, 4)] = -T.K;
  board[i5(1, 2)] = T.P;
  const s: ShogiState = { ...createMinishogi(), board };
  const ls = lancesLegais(s).filter((l) => l.de === i5(1, 2));
  assert.equal(ls.length, 1);
  assert.equal(ls[0]!.promove, true);
});

test('minishogi: a repetição pela quarta vez é derrota do sente; o Linu joga', () => {
  let s = createMinishogi();
  // os reis vão e voltam: rei do sente 4,0 → 3,1 (livre?) usa o ouro, que tem casas livres
  const ida = (e: ShogiState) => jogar(jogar(e, i5(4, 1), i5(3, 1)), i5(0, 3), i5(1, 3));
  const volta = (e: ShogiState) => jogar(jogar(e, i5(3, 1), i5(4, 1)), i5(1, 3), i5(0, 3));
  for (let k = 0; k < 3 && s.winner === null; k++) s = volta(ida(s));
  assert.equal(s.winner, 'g');
  assert.equal(s.fim, 'repeticao');
  assert.ok(escolherLance(createMinishogi(), 2, BUSCA_SHOGI, 0, () => 0.5));
});
