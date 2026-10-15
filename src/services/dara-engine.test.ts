import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capturaveis, createInitialState, ix, jogar, lancesLegais, type DaraState, type JogadorD } from './dara-engine';

/** Uma posição na fase de mover, montada à mão. */
function posicao(pecas: [number, number, JogadorD][], turn: JogadorD = 'a'): DaraState {
  const board: (JogadorD | null)[] = Array(30).fill(null);
  for (const [r, c, j] of pecas) board[ix(r, c)] = j;
  return { ...createInitialState(), board, turn, fase: 'mover', mao: { a: 0, b: 0 } };
}

test('dara: tabuleiro 5×6, 12 peças na mão de cada um, começa colocando', () => {
  const s = createInitialState();
  assert.equal(s.board.length, 30);
  assert.deepEqual(s.mao, { a: 12, b: 12 });
  assert.equal(s.fase, 'colocar');
  assert.equal(lancesLegais(s).length, 30);
});

test('dara: na colocação não vale fazer linha de três', () => {
  let s = createInitialState();
  s = jogar(s, { tipo: 'colocar', para: ix(0, 0) });
  s = jogar(s, { tipo: 'colocar', para: ix(4, 5) });
  s = jogar(s, { tipo: 'colocar', para: ix(0, 1) });
  s = jogar(s, { tipo: 'colocar', para: ix(4, 4) });
  assert.equal(jogar(s, { tipo: 'colocar', para: ix(0, 2) }), s, 'a terceira em linha não entra');
  assert.notEqual(jogar(s, { tipo: 'colocar', para: ix(1, 2) }), s);
});

test('dara: depois das 24 peças, começa a fase de mover', () => {
  let s = createInitialState();
  let k = 0;
  while (s.fase === 'colocar' && s.winner === null && k++ < 40) s = jogar(s, lancesLegais(s)[0]!);
  assert.equal(s.mao.a + s.mao.b, 0);
  assert.equal(s.fase, 'mover');
  assert.equal(s.board.filter((p) => p).length, 24);
});

test('dara: fazer exatamente três em linha captura uma peça que não está em linha', () => {
  const s = posicao([
    [0, 0, 'a'],
    [0, 1, 'a'],
    [1, 2, 'a'],
    [3, 0, 'b'],
    [3, 1, 'b'],
    [3, 2, 'b'],
    [4, 5, 'b'],
  ]);
  const t = jogar(s, { tipo: 'mover', de: ix(1, 2), para: ix(0, 2) });
  assert.equal(t.fase, 'capturar');
  assert.equal(t.turn, 'a');
  // as três pretas da fileira 3 estão em linha: só a de f5 pode sair
  assert.deepEqual(capturaveis(t), [ix(4, 5)]);
  const u = jogar(t, { tipo: 'capturar', alvo: ix(4, 5) });
  assert.equal(u.board[ix(4, 5)], null);
  assert.equal(u.turn, 'b');
});

test('dara: quatro em linha não vale, e na diagonal não conta', () => {
  const s = posicao([
    [0, 0, 'a'],
    [0, 1, 'a'],
    [0, 2, 'a'],
    [1, 3, 'a'],
    [4, 0, 'b'],
    [4, 2, 'b'],
    [4, 4, 'b'],
  ]);
  assert.equal(jogar(s, { tipo: 'mover', de: ix(1, 3), para: ix(0, 3) }), s);
  const d = posicao([
    [0, 0, 'a'],
    [1, 1, 'a'],
    [3, 2, 'a'],
    [4, 0, 'b'],
    [4, 2, 'b'],
    [4, 4, 'b'],
  ]);
  const t = jogar(d, { tipo: 'mover', de: ix(3, 2), para: ix(2, 2) });
  assert.notEqual(t.fase, 'capturar');
});

test('dara: com menos de três peças, perde', () => {
  const s = posicao([
    [0, 0, 'a'],
    [0, 1, 'a'],
    [1, 2, 'a'],
    [4, 0, 'b'],
    [4, 2, 'b'],
    [4, 4, 'b'],
  ]);
  const t = jogar(jogar(s, { tipo: 'mover', de: ix(1, 2), para: ix(0, 2) }), { tipo: 'capturar', alvo: ix(4, 4) });
  assert.equal(t.winner, 'a');
});
