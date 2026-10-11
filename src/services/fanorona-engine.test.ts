import { test } from 'node:test';
import assert from 'node:assert/strict';
import { combinarEmpate, contar, createInitialState, encerrarVez, forte, idx, jogar, lancesLegais, type Cor, type FanoronaState } from './fanorona-engine';

const vazio = (): (Cor | null)[] => Array(45).fill(null);
const estado = (pecas: [number, number, Cor][], turn: Cor = 'w'): FanoronaState => {
  const board = vazio();
  for (const [r, c, x] of pecas) board[idx(r, c)] = x;
  return { board, turn, seq: null, winner: null, ultimo: null, repeticoes: {} };
};

test('fanorona: 22 peças de cada cor, o meio vazio, e as brancas começam', () => {
  const s = createInitialState();
  assert.equal(contar(s, 'w'), 22);
  assert.equal(contar(s, 'b'), 22);
  assert.equal(s.board[idx(2, 4)], null);
  assert.equal(s.turn, 'w');
  assert.deepEqual(
    [0, 1, 2, 3, 4, 5, 6, 7, 8].map((c) => s.board[idx(2, c)] ?? '.').join(''),
    'bwbw.bwbw',
  );
});

test('fanorona: na abertura só há 4 lances de peça (dois na diagonal, um vertical e um horizontal), todos de captura', () => {
  const ls = lancesLegais(createInitialState());
  const pares = new Set(ls.map((l) => `${l.de}>${l.para}`));
  assert.equal(pares.size, 4);
  assert.ok(ls.every((l) => l.tipo !== null && l.para === idx(2, 4)));
});

test('fanorona: só os pontos fortes têm diagonais', () => {
  assert.ok(forte(idx(0, 0)));
  assert.ok(forte(idx(2, 4)));
  assert.ok(!forte(idx(0, 1)));
});

test('fanorona: aproximação leva a fila inteira de adversárias, até um vazio', () => {
  const s = estado([
    [4, 0, 'w'],
    [4, 2, 'b'],
    [4, 3, 'b'],
    [4, 5, 'b'],
    [0, 8, 'b'],
  ]);
  const depois = jogar(s, { de: idx(4, 0), para: idx(4, 1), tipo: 'aproximacao' });
  assert.equal(depois.board[idx(4, 2)], null);
  assert.equal(depois.board[idx(4, 3)], null);
  assert.equal(depois.board[idx(4, 5)], 'b', 'depois do vazio, não captura');
});

test('fanorona: afastamento captura para trás, e não dá para fazer os dois no mesmo lance', () => {
  const s = estado([
    [4, 3, 'b'],
    [4, 4, 'w'],
    [4, 6, 'b'],
    [0, 0, 'b'],
  ]);
  const ls = lancesLegais(s).filter((l) => l.de === idx(4, 4) && l.para === idx(4, 5));
  assert.deepEqual(ls.map((l) => l.tipo).sort(), ['afastamento', 'aproximacao']);
  const afast = jogar(s, { de: idx(4, 4), para: idx(4, 5), tipo: 'afastamento' });
  assert.equal(afast.board[idx(4, 3)], null);
  assert.equal(afast.board[idx(4, 6)], 'b', 'escolheu afastamento: a da frente fica');
});

test('fanorona: captura é obrigatória', () => {
  const s = estado([
    [4, 0, 'w'],
    [4, 2, 'b'],
    [0, 8, 'w'],
    [0, 0, 'b'],
  ]);
  assert.ok(lancesLegais(s).every((l) => l.tipo !== null));
});

test('fanorona: a sequência segue com a mesma peça, sem repetir ponto nem direção, e pode parar', () => {
  // branca em (2,0) captura (2,2) indo para (2,1); depois pode descer e capturar (4,1) por aproximação
  const s = estado([
    [2, 0, 'w'],
    [2, 2, 'b'],
    [4, 1, 'b'],
    [0, 8, 'b'],
  ]);
  const a = jogar(s, { de: idx(2, 0), para: idx(2, 1), tipo: 'aproximacao' });
  assert.ok(a.seq, 'a vez continua');
  assert.equal(a.turn, 'w');
  const cont = lancesLegais(a);
  assert.ok(cont.every((l) => l.de === idx(2, 1) && l.tipo !== null));
  assert.ok(!cont.some((l) => l.para === idx(2, 0)), 'não volta ao ponto de onde saiu');
  assert.ok(!cont.some((l) => l.dir === a.seq!.ultimaDir), 'não repete a direção');
  const parou = encerrarVez(a);
  assert.equal(parou.turn, 'b');
  assert.equal(parou.seq, null);
});

test('fanorona: vence quem captura todas as peças do outro; empate combinado', () => {
  const s = estado([
    [4, 0, 'w'],
    [4, 2, 'b'],
  ]);
  const fim = jogar(s, { de: idx(4, 0), para: idx(4, 1), tipo: 'aproximacao' });
  assert.equal(fim.winner, 'w');
  assert.equal(combinarEmpate(createInitialState()).winner, 'empate');
});

test('fanorona: a mesma posição pela terceira vez empata', () => {
  let s = estado([
    [0, 0, 'w'],
    [4, 8, 'b'],
  ]);
  const ida = (x: FanoronaState, de: [number, number], para: [number, number]) => jogar(x, { de: idx(...de), para: idx(...para), tipo: null });
  // a posição do começo não foi contada aqui (estado montado à mão): ela aparece de novo depois de cada volta
  for (let k = 0; k < 3; k++) {
    s = ida(s, [0, 0], [0, 1]);
    s = ida(s, [4, 8], [4, 7]);
    s = ida(s, [0, 1], [0, 0]);
    s = ida(s, [4, 7], [4, 8]);
  }
  assert.equal(s.winner, 'empate');
});
