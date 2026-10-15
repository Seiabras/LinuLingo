import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contarL, createInitialState, escura, ix, jogar, lancesLegais, topo, type ColunaL, type CorL, type LascaState } from './lasca-engine';

function posicao(cols: [number, number, ColunaL][], turn: CorL = 'w'): LascaState {
  const board: (ColunaL | null)[] = Array(49).fill(null);
  for (const [r, c, col] of cols) board[ix(r, c)] = col;
  return { ...createInitialState(), board, turn, repeticoes: {} };
}
const w = { cor: 'w' as const, oficial: false };
const b = { cor: 'b' as const, oficial: false };
const W = { cor: 'w' as const, oficial: true };

test('lasca: 7×7 com 25 casas escuras, 11 soldados de cada lado; as brancas começam com 3 lances', () => {
  let escuras = 0;
  for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) if (escura(r, c)) escuras++;
  assert.equal(escuras, 25);
  const s = createInitialState();
  assert.equal(contarL(s.board, 'w'), 11);
  assert.equal(contarL(s.board, 'b'), 11);
  assert.equal(s.turn, 'w');
  // só os 4 soldados da fileira 4 podem andar, para as 3 casas da fileira do meio: 6 lances
  assert.equal(lancesLegais(s).length, 6);
});

test('lasca: a captura leva só a peça de cima, que vai para baixo da coluna que pulou', () => {
  const s = posicao([
    [4, 2, [w]],
    [3, 3, [w, b]], // coluna branca com um soldado preto em cima: é preta
    [0, 0, [b]],
  ]);
  const t = jogar(s, { de: ix(4, 2), para: ix(2, 4) });
  assert.deepEqual(t.board[ix(2, 4)], [b, w]);
  assert.deepEqual(t.board[ix(3, 3)], [w], 'a coluna pulada ficou, agora branca');
  assert.equal(topo(t.board[ix(3, 3)])?.cor, 'w');
});

test('lasca: capturar é obrigatório e continua pulando', () => {
  const s = posicao([
    [6, 0, [w]],
    [5, 1, [b]],
    [3, 3, [b]],
    [6, 6, [w]],
    [0, 6, [b]],
  ]);
  const ls = lancesLegais(s);
  assert.ok(ls.every((l) => l.salto !== undefined), 'só capturas');
  const t = jogar(s, { de: ix(6, 0), para: ix(4, 2) });
  assert.equal(t.capturando, ix(4, 2));
  assert.equal(t.turn, 'w');
  const u = jogar(t, { de: ix(4, 2), para: ix(2, 4) });
  assert.equal(u.turn, 'b');
  assert.equal(u.board[ix(2, 4)]!.length, 3);
});

test('lasca: o soldado vira oficial na última fileira e o lance acaba; o oficial anda para trás', () => {
  const s = posicao([
    [1, 1, [w]],
    [6, 6, [b]],
    [5, 3, [w]],
  ]);
  const t = jogar(s, { de: ix(1, 1), para: ix(0, 0) });
  assert.deepEqual(t.board[ix(0, 0)], [W]);
  assert.equal(t.turn, 'b');
  const u = posicao([
    [2, 2, [W]],
    [6, 6, [b]],
  ]);
  assert.ok(lancesLegais(u).some((l) => l.para === ix(3, 3)), 'o oficial anda para trás');
});

test('lasca: perde quem não tem lance', () => {
  // o único soldado preto está preso: a frente dele está ocupada, e as brancas atrás dele também não podem pulá-lo
  const s = posicao([
    [5, 1, [b]],
    [6, 0, [w]],
    [6, 2, [w]],
    [4, 0, [w]],
    [4, 2, [w]],
    [2, 2, [w]],
  ]);
  const t = jogar(s, { de: ix(2, 2), para: ix(1, 1) });
  assert.equal(t.winner, 'w');
});
