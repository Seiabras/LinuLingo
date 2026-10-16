import { test } from 'node:test';
import assert from 'node:assert/strict';
import { FIM_DA_VELA, contar, createInitialState, idx, jogar, lancesLegais, naVela, type Cor, type FanoronaState } from './fanorona-engine';

function montar(pecas: [number, number, Cor][], turn: Cor): FanoronaState {
  const s = createInitialState(true);
  const board: (Cor | null)[] = Array(45).fill(null);
  for (const [r, c, x] of pecas) board[idx(r, c)] = x;
  return { ...s, board, turn };
}

test('vela: as brancas tiram uma pedra só por captura, sem seguir capturando', () => {
  const s = createInitialState(true);
  assert.equal(s.vela, 'b');
  assert.ok(naVela(s));
  const caps = lancesLegais(s);
  assert.ok(caps.length > 0 && caps.every((l) => l.tipo !== null && l.capturadas.length === 1));
  const f = jogar(s, caps[0]!);
  assert.equal(contar(f, 'b'), 22 - 1);
  assert.equal(f.turn, 'b', 'passou a vez, sem sequência');
});

test('vela: as pretas não capturam e têm de deixar uma pedra para capturar', () => {
  // pretas com 6 pedras; o lance de (2,3) para (2,4) deixa a pedra ao lado da branca de (2,6)? confere pelo motor
  const pecas: [number, number, Cor][] = [
    [0, 0, 'b'],
    [0, 2, 'b'],
    [0, 4, 'b'],
    [0, 6, 'b'],
    [0, 8, 'b'],
    [2, 2, 'b'],
    [4, 4, 'w'],
  ];
  const s = montar(pecas, 'b');
  const ls = lancesLegais(s);
  assert.ok(ls.length > 0);
  assert.ok(ls.every((l) => l.tipo === null), 'as pretas não capturam');
  for (const l of ls) {
    const f = jogar(s, l);
    assert.ok(lancesLegais(f).some((m) => m.tipo !== null), 'cada lance deixa uma captura para as brancas');
  }
});

test('vela: sem pedra para oferecer, as brancas são perdoadas; com 5 pretas, volta a regra normal', () => {
  // a branca encurralada no canto, longe de tudo: as pretas não conseguem se oferecer
  const longe = montar(
    [
      [0, 0, 'b'],
      [0, 1, 'b'],
      [1, 0, 'b'],
      [1, 1, 'b'],
      [0, 2, 'b'],
      [2, 0, 'b'],
      [4, 8, 'w'],
      [3, 8, 'w'],
    ],
    'w',
  );
  const f = jogar(longe, lancesLegais(longe).find((l) => l.de === idx(3, 8))!);
  assert.equal(f.winner, 'w', 'perdoado');
  // com 5 pretas, a vela acabou
  const cinco = montar(
    [
      [0, 0, 'b'],
      [0, 2, 'b'],
      [0, 4, 'b'],
      [0, 6, 'b'],
      [0, 8, 'b'],
      [4, 4, 'w'],
    ],
    'b',
  );
  assert.equal(FIM_DA_VELA, 5);
  assert.equal(naVela(cinco), false);
});
