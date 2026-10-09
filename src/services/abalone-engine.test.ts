import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  ALL_CELLS,
  applyMove,
  createInitialState,
  legalDirections,
  owner,
  type AbaloneState,
} from './abalone-engine';

test('abalone: tabuleiro tem 61 casas (hexágono de raio 4, 5 por lado)', () => {
  assert.equal(ALL_CELLS.length, 61);
});

test('abalone: estado inicial tem 14 bolinhas por jogador, vez do jogador 0, sem baixas', () => {
  const s = createInitialState();
  const count = (p: 0 | 1) => Object.values(s.board).filter((v) => v === p).length;
  assert.equal(count(0), 14);
  assert.equal(count(1), 14);
  assert.deepEqual(s.lost, [0, 0]);
  assert.equal(s.turn, 0);
  assert.equal(s.winner, null);
});

test('abalone: movimento simples de 1 bolinha para casa vazia adjacente', () => {
  const s = createInitialState();
  const from = { q: -1, r: -3 }; // fileira de trás do jogador 0
  assert.equal(owner(s, from), 0);
  const to = { q: -1, r: -2 }; // casa vazia na borda da fileira do meio (as 3 centrais estão ocupadas, as bordas não)
  assert.equal(owner(s, to), null);
  const moves = legalDirections(s, [from]);
  assert.ok(moves.some((m) => m.dir.q === 0 && m.dir.r === 1 && m.kind === 'simples'));
  const s2 = applyMove(s, [from], { q: 0, r: 1 });
  assert.notEqual(s2, s);
  assert.equal(owner(s2, from), null);
  assert.equal(owner(s2, to), 0);
  assert.equal(s2.turn, 1);
});

test('abalone: movimento ilegal não faz nada (sem trapaça)', () => {
  const s = createInitialState();
  const s2 = applyMove(s, [{ q: -1, r: -3 }], { q: -1, r: 0 }); // destino ocupado por bolinha própria
  assert.equal(s2, s);
});

test('abalone: movimento lateral de 2 bolinhas em linha, ambas as casas vazias', () => {
  const s = createInitialState();
  const a = { q: 0, r: -2 };
  const b = { q: 1, r: -2 }; // duas das 3 bolinhas centrais do jogador 0 na 3ª fileira, eixo (1,0)
  assert.equal(owner(s, a), 0);
  assert.equal(owner(s, b), 0);
  const dir = { q: 0, r: 1 }; // lateral: não é o eixo (1,0)/(−1,0) da linha
  const moves = legalDirections(s, [a, b]);
  assert.ok(moves.some((m) => m.dir.q === dir.q && m.dir.r === dir.r && m.kind === 'lateral'));
  const s2 = applyMove(s, [a, b], dir);
  assert.notEqual(s2, s);
  assert.equal(owner(s2, a), null);
  assert.equal(owner(s2, b), null);
  assert.equal(owner(s2, { q: 0, r: -1 }), 0);
  assert.equal(owner(s2, { q: 1, r: -1 }), 0);
});

test('abalone: Sumito válido — 2 bolinhas empurram 1 bolinha adversária isolada', () => {
  const s: AbaloneState = {
    board: { '0,0': 0, '1,0': 0, '2,0': 1 },
    turn: 0,
    lost: [0, 0],
    winner: null,
  };
  const selection = [{ q: 0, r: 0 }, { q: 1, r: 0 }];
  const dir = { q: 1, r: 0 };
  const moves = legalDirections(s, selection);
  assert.ok(moves.some((m) => m.dir.q === 1 && m.dir.r === 0 && m.kind === 'sumito'));
  const s2 = applyMove(s, selection, dir);
  assert.notEqual(s2, s);
  assert.equal(owner(s2, { q: 0, r: 0 }), null);
  assert.equal(owner(s2, { q: 1, r: 0 }), 0);
  assert.equal(owner(s2, { q: 2, r: 0 }), 0);
  assert.equal(owner(s2, { q: 3, r: 0 }), 1); // empurrada 1 casa pra frente
  assert.deepEqual(s2.lost, [0, 0]); // ninguém caiu do tabuleiro ainda
  assert.equal(s2.turn, 1);
});

test('abalone: Sumito inválido — 1 bolinha nunca empurra (empate 1 x 1)', () => {
  const s: AbaloneState = {
    board: { '0,0': 0, '1,0': 1 },
    turn: 0,
    lost: [0, 0],
    winner: null,
  };
  const selection = [{ q: 0, r: 0 }];
  const moves = legalDirections(s, selection);
  assert.ok(!moves.some((m) => m.dir.q === 1 && m.dir.r === 0));
  const s2 = applyMove(s, selection, { q: 1, r: 0 });
  assert.equal(s2, s);
});

test('abalone: Sumito inválido — 2 contra 2 (empate) não empurra', () => {
  const s: AbaloneState = {
    board: { '0,0': 0, '1,0': 0, '2,0': 1, '3,0': 1 },
    turn: 0,
    lost: [0, 0],
    winner: null,
  };
  const selection = [{ q: 0, r: 0 }, { q: 1, r: 0 }];
  const moves = legalDirections(s, selection);
  assert.ok(!moves.some((m) => m.dir.q === 1 && m.dir.r === 0));
  const s2 = applyMove(s, selection, { q: 1, r: 0 });
  assert.equal(s2, s);
});

test('abalone: Sumito inválido — fileira adversária maior (3) atrás de outra bolinha bloqueia', () => {
  // 2 bolinhas próprias x 1 adversária isolada seria válido, mas aqui há uma 2ª bolinha adversária
  // logo depois (mesma cor), então a "cadeia" tem 2 — e 2 bolinhas não vencem 2 bolinhas.
  const s: AbaloneState = {
    board: { '0,0': 0, '1,0': 0, '2,0': 1, '3,0': 1, '4,0': 1 },
    turn: 0,
    lost: [0, 0],
    winner: null,
  };
  const s2 = applyMove(s, [{ q: 0, r: 0 }, { q: 1, r: 0 }], { q: 1, r: 0 });
  assert.equal(s2, s);
});

test('abalone: bolinha empurrada para fora da borda do tabuleiro é removida (3 empurram 1 na borda)', () => {
  const s: AbaloneState = {
    board: { '1,0': 0, '2,0': 0, '3,0': 0, '4,0': 1 }, // (4,0) é a casa de borda da fileira central (q máx = 4 em r=0)
    turn: 0,
    lost: [0, 0],
    winner: null,
  };
  const selection = [{ q: 1, r: 0 }, { q: 2, r: 0 }, { q: 3, r: 0 }];
  const dir = { q: 1, r: 0 };
  const moves = legalDirections(s, selection);
  assert.ok(moves.some((m) => m.dir.q === 1 && m.dir.r === 0 && m.kind === 'sumito'));
  const s2 = applyMove(s, selection, dir);
  assert.notEqual(s2, s);
  assert.deepEqual(s2.lost, [0, 1]);
  assert.equal(owner(s2, { q: 4, r: 0 }), 0); // a bolinha que empurrou ocupa a borda
  assert.equal(Object.keys(s2.board).length, 3); // a bolinha adversária some do tabuleiro
});

test('abalone: empurrar a 6ª bolinha do adversário para fora vence o jogo', () => {
  const s: AbaloneState = {
    board: { '1,0': 0, '2,0': 0, '3,0': 0, '4,0': 1 },
    turn: 0,
    lost: [0, 5], // já tinha perdido 5; esta é a 6ª
    winner: null,
  };
  const s2 = applyMove(s, [{ q: 1, r: 0 }, { q: 2, r: 0 }, { q: 3, r: 0 }], { q: 1, r: 0 });
  assert.deepEqual(s2.lost, [0, 6]);
  assert.equal(s2.winner, 0);
});

test('abalone: depois de vencer, nenhum outro movimento é aceito', () => {
  const s: AbaloneState = {
    board: { '0,0': 0, '1,0': 1 },
    turn: 1,
    lost: [0, 6],
    winner: 0,
  };
  const s2 = applyMove(s, [{ q: 1, r: 0 }], { q: 1, r: 0 });
  assert.equal(s2, s);
});
