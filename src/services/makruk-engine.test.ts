import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aplicar, createInitialState, destinos, ix, jogar, limitePecas, perft, type CorM, type MakrukState, type PecaM, type TipoM } from './makruk-engine';

/** Uma posição montada à mão (linha 0 = 8ª fileira). */
function posicao(pecas: [number, number, CorM, TipoM][], turn: CorM = 'w'): MakrukState {
  const board: (PecaM | null)[] = Array(64).fill(null);
  for (const [r, c, cor, tipo] of pecas) board[ix(r, c)] = { cor, tipo };
  return { ...createInitialState(), board, turn, repeticoes: {} };
}

test('makruk: posição inicial — bia na 3ª fileira, khun em d1 e e8', () => {
  const s = createInitialState();
  assert.deepEqual(s.board[ix(7, 3)], { cor: 'w', tipo: 'k' });
  assert.deepEqual(s.board[ix(7, 4)], { cor: 'w', tipo: 'm' });
  assert.deepEqual(s.board[ix(0, 4)], { cor: 'b', tipo: 'k' });
  assert.deepEqual(s.board[ix(5, 0)], { cor: 'w', tipo: 'p' });
  assert.deepEqual(s.board[ix(2, 7)], { cor: 'b', tipo: 'p' });
});

test('makruk: perft igual ao do Fairy-Stockfish (23, 529, 12012, 273026)', () => {
  const s = createInitialState();
  assert.equal(perft(s.board, 'w', 1), 23);
  assert.equal(perft(s.board, 'w', 2), 529);
  assert.equal(perft(s.board, 'w', 3), 12012);
  assert.equal(perft(s.board, 'w', 4), 273026);
});

test('makruk: met anda 1 na diagonal; khon, 1 na diagonal ou 1 para a frente', () => {
  const s = posicao([
    [4, 4, 'w', 'm'],
    [4, 1, 'w', 's'],
  ]);
  assert.equal(destinos(s.board, ix(4, 4)).length, 4);
  const khon = destinos(s.board, ix(4, 1)).sort((a, b) => a - b);
  assert.deepEqual(khon, [ix(3, 0), ix(3, 1), ix(3, 2), ix(5, 0), ix(5, 2)]);
});

test('makruk: o bia anda uma casa só e vira bia ngai na 6ª fileira', () => {
  const s = posicao([
    [3, 0, 'w', 'p'],
    [7, 3, 'w', 'k'],
    [0, 4, 'b', 'k'],
  ]);
  const t = jogar(s, ix(3, 0), ix(2, 0));
  assert.deepEqual(t.board[ix(2, 0)], { cor: 'w', tipo: 'f' });
  assert.ok(t.ultimo?.promove);
  // da posição inicial, o bia não anda duas
  assert.deepEqual(destinos(createInitialState().board, ix(5, 0)), [ix(4, 0)]);
});

test('makruk: xeque-mate vence e afogamento empata', () => {
  // khun preto em a8; ruea branco dá mate na 8ª com o khun branco em b6
  const mate = jogar(
    posicao([
      [0, 0, 'b', 'k'],
      [2, 1, 'w', 'k'],
      [7, 7, 'w', 'r'],
    ]),
    ix(7, 7),
    ix(0, 7),
  );
  assert.equal(mate.fim, 'mate');
  assert.equal(mate.winner, 'w');
  // khun preto em a8, khun branco em b6; o met branco vai de d6 a c7 e cobre b8: o preto não tem lance
  const afogado = jogar(
    posicao([
      [0, 0, 'b', 'k'],
      [2, 1, 'w', 'k'],
      [2, 3, 'w', 'm'],
    ]),
    ix(2, 3),
    ix(1, 2),
  );
  assert.equal(afogado.fim, 'afogado');
  assert.equal(afogado.winner, 'empate');
});

test('makruk: a contagem das peças — 2 ruea + 1 ma contra o khun só têm 3 lances (8 − 5)', () => {
  assert.equal(
    limitePecas(
      posicao([
        [7, 0, 'w', 'r'],
        [7, 7, 'w', 'r'],
      ]).board,
      'w',
    ),
    8,
  );
  // as brancas capturam a última peça das pretas: começa a contagem das peças
  let s = posicao([
    [7, 0, 'w', 'r'],
    [6, 7, 'w', 'r'],
    [5, 5, 'w', 'n'],
    [5, 3, 'w', 'k'],
    [3, 4, 'b', 'k'],
    [1, 7, 'b', 'm'],
  ]);
  s = jogar(s, ix(6, 7), ix(1, 7));
  assert.equal(s.contagem?.tipo, 'pecas');
  assert.equal(s.contagem?.quem, 'b');
  assert.equal(s.contagem?.limite, 8);
  // o preto conta 6, 7, 8; no lance seguinte dele (9) passa do limite: empate
  const fuga: [number, number][] = [
    [3, 4],
    [3, 3],
    [3, 2],
    [3, 3],
    [3, 2],
  ];
  const ida: [number, number][] = [
    [7, 0],
    [7, 1],
    [7, 0],
  ];
  for (let k = 0; k < 4 && s.winner === null; k++) {
    const [r0, c0] = fuga[k]!;
    const [r1, c1] = fuga[k + 1]!;
    const m = { de: ix(r0, c0), para: ix(r1, c1) };
    s = aplicar(s, m);
    if (k < 3) {
      assert.equal(s.contagem?.numero, 6 + k);
      assert.equal(s.winner, null);
      const [a, b] = ida[k]!;
      s = aplicar(s, { de: ix(a, b), para: ix(a, b === 0 ? 1 : 0) });
    }
  }
  assert.equal(s.fim, 'contagem');
  assert.equal(s.winner, 'empate');
});

test('makruk: sem bia por promover, começa a contagem do tabuleiro (até 64) para quem tem menos', () => {
  const s = jogar(
    posicao([
      [7, 3, 'w', 'k'],
      [7, 0, 'w', 'r'],
      [0, 4, 'b', 'k'],
      [0, 0, 'b', 'n'],
      [3, 7, 'b', 'p'],
    ]),
    ix(7, 0),
    ix(6, 0),
  );
  assert.equal(s.contagem, null, 'ainda há um bia');
  const t = posicao([
    [7, 3, 'w', 'k'],
    [6, 0, 'w', 'r'],
    [0, 4, 'b', 'k'],
    [0, 0, 'b', 'n'],
    [5, 7, 'b', 'f'],
  ]);
  const u = jogar(t, ix(6, 0), ix(6, 1));
  assert.equal(u.contagem?.tipo, 'tabuleiro');
  assert.equal(u.contagem?.quem, 'b');
  assert.equal(u.contagem?.limite, 64);
});
