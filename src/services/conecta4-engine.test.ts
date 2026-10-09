import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COLS, ROWS, createInitialState, dropPiece, legalCols, type Conecta4Board, type Conecta4State, type Color } from './conecta4-engine';

test('conecta4: tabuleiro 6×7 vazio, vermelho começa', () => {
  const s = createInitialState();
  assert.equal(s.board.length, ROWS);
  assert.equal(s.board[0].length, COLS);
  assert.ok(s.board.flat().every((c) => c === null));
  assert.equal(s.turn, 'r');
  assert.equal(s.winner, null);
});

test('conecta4: a peça cai até a casa mais baixa livre da coluna', () => {
  let s = createInitialState();
  s = dropPiece(s, 3);
  assert.equal(s.board[5][3], 'r'); // cai no fundo
  s = dropPiece(s, 3);
  assert.equal(s.board[4][3], 'y'); // a próxima empilha por cima
});

test('conecta4: coluna cheia não aceita mais peça (mesma referência)', () => {
  let s = createInitialState();
  for (let i = 0; i < ROWS; i++) s = dropPiece(s, 0); // enche a coluna 0 (3 vermelhas, 3 amarelas)
  assert.ok(!legalCols(s).includes(0));
  const s2 = dropPiece(s, 0);
  assert.equal(s2, s);
});

test('conecta4: vitória horizontal — 4 seguidas na mesma fileira', () => {
  let s = createInitialState();
  // vermelho em 0,1,2,3 (fundo da fileira), amarelo sempre numa coluna distante pra não interferir
  s = dropPiece(s, 0); // r
  s = dropPiece(s, 6); // y
  s = dropPiece(s, 1); // r
  s = dropPiece(s, 6); // y
  s = dropPiece(s, 2); // r
  s = dropPiece(s, 6); // y
  s = dropPiece(s, 3); // r — completa 0,1,2,3 na fileira 5
  assert.equal(s.winner, 'r');
});

test('conecta4: vitória vertical — 4 seguidas na mesma coluna', () => {
  let s = createInitialState();
  s = dropPiece(s, 2); // r
  s = dropPiece(s, 3); // y
  s = dropPiece(s, 2); // r
  s = dropPiece(s, 3); // y
  s = dropPiece(s, 2); // r
  s = dropPiece(s, 3); // y
  s = dropPiece(s, 2); // r — 4 vermelhas empilhadas na coluna 2
  assert.equal(s.winner, 'r');
});

test('conecta4: vitória diagonal (de baixo-esquerda pra cima-direita)', () => {
  let s: Conecta4State = createInitialState();
  // monta a diagonal (5,0)-(4,1)-(3,2)-(2,3) pro vermelho, respeitando o rodízio real de turnos
  // (ply ímpar = vermelho, par = amarelo) — cada entrada é só a COLUNA jogada; a cor já está fixada
  // pelo rodízio, não é escolha livre (ver trace completo no comentário do próprio teste, acima).
  const colunas = [0, 1, 1, 2, 2, 6, 2, 3, 3, 3, 3];
  for (let ply = 0; ply < colunas.length; ply++) {
    const corEsperada: Color = ply % 2 === 0 ? 'r' : 'y';
    assert.equal(s.turn, corEsperada);
    s = dropPiece(s, colunas[ply]);
  }
  assert.equal(s.winner, 'r');
  assert.equal(s.board[5][0], 'r');
  assert.equal(s.board[4][1], 'r');
  assert.equal(s.board[3][2], 'r');
  assert.equal(s.board[2][3], 'r');
});

test('conecta4: empate quando o tabuleiro enche sem ninguém fazer 4 em linha', () => {
  // Tabuleiro construído direto (não jogada a jogada — contar ímpares/pares da alternância real
  // daria um total 21×21, enquanto este padrão de listras tem 22×20; o que importa aqui é só
  // testar a detecção de tabuleiro cheio sem vencedor, não reproduzir uma partida real). Padrão
  // verificado à mão: cada coluna par é r,r,y,y,r,r (de cima pra baixo) e cada ímpar é o inverso
  // — nunca alinha 4 iguais na horizontal, vertical ou qualquer diagonal.
  const padraoPar: Color[] = ['r', 'r', 'y', 'y', 'r', 'r'];
  const padraoImpar: Color[] = ['y', 'y', 'r', 'r', 'y', 'y'];
  const board: Conecta4Board = Array.from({ length: ROWS }, (_, row) =>
    Array.from({ length: COLS }, (_, col) => (col % 2 === 0 ? padraoPar : padraoImpar)[row]),
  );
  board[0][6] = null; // deixa só essa casa vazia (coluna 6 é par: a cor certa ali é 'r')
  const s: Conecta4State = { board, turn: 'r', winner: null };
  const s2 = dropPiece(s, 6);
  assert.equal(s2.board[0][6], 'r');
  assert.ok(s2.board.flat().every((c) => c !== null)); // tabuleiro completamente cheio
  assert.equal(s2.winner, 'empate');
});
