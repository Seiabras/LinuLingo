import { test } from 'node:test';
import assert from 'node:assert/strict';
import { casasDoKomaochi, createInitialState, ix, lancesLegais, NOMES_KOMAOCHI, T, type Komaochi } from './shogi-engine';

test('komaochi: o gote tira as peças da vantagem e começa', () => {
  const s = createInitialState('nimai');
  assert.equal(s.turn, 'g');
  assert.equal(s.board[ix(1, 1)], 0, 'sem a torre');
  assert.equal(s.board[ix(1, 7)], 0, 'sem o bispo');
  // o sente fica completo
  assert.equal(s.board[ix(7, 7)], T.R);
  assert.equal(s.board[ix(7, 1)], T.B);
  // a lança da coluna 9 (casa 0, 0)
  const kyo = createInitialState('kyo');
  assert.equal(kyo.board[ix(0, 0)], 0);
  assert.equal(kyo.board[ix(0, 8)], -T.L);
  assert.ok(lancesLegais(kyo).length > 0);
  assert.ok(lancesLegais(kyo).every((l) => l.drop || kyo.board[l.de]! < 0), 'quem joga é o gote');
});

test('komaochi: cada vantagem tira as peças certas; sem ela, o jogo normal', () => {
  const quantas: Record<Komaochi, number> = { kyo: 1, kaku: 1, hisha: 1, hikyo: 2, nimai: 2, yonmai: 4, rokumai: 6 };
  for (const k of Object.keys(NOMES_KOMAOCHI) as Komaochi[]) {
    const s = createInitialState(k);
    assert.equal(casasDoKomaochi(k).length, quantas[k]);
    assert.equal(s.board.filter((p) => p < 0).length, 20 - quantas[k], k);
  }
  const normal = createInitialState();
  assert.equal(normal.turn, 's');
  assert.equal(normal.board.filter((p) => p < 0).length, 20);
});
