import { test } from 'node:test';
import assert from 'node:assert/strict';
import { COLS, ROWS, createInitialState, dropPiece, legalCols, legalPops, popPiece, type Conecta4Board, type Conecta4State, type Color } from './conecta4-engine';
import { BUSCA_POPOUT, escolherLance } from './jogos-ia';

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

// ── Pop Out ─────────────────────────────────────────────────────────────────────────────────────
test('Pop Out: tira a própria peça de baixo e as de cima descem; a do outro não pode', () => {
  let s = createInitialState(COLS, ROWS, 'popout');
  s = dropPiece(s, 0); // r
  s = dropPiece(s, 0); // y, em cima
  assert.deepEqual(legalPops(s), [0]); // vez do r: a de baixo da coluna 0 é dele
  const t = popPiece(s, 0);
  assert.equal(t.board[ROWS - 1][0], 'y');
  assert.equal(t.board[ROWS - 2][0], null);
  assert.equal(t.turn, 'y');
  assert.deepEqual(legalPops(createInitialState()), []); // no clássico não se tira
  assert.equal(popPiece(t, 1), t);
});

test('Pop Out: tirar uma peça pode fazer 4 em linha; se fizer para os dois, ganha quem tirou', () => {
  const b: Conecta4Board = Array.from({ length: ROWS }, () => Array<Color | null>(COLS).fill(null));
  // coluna 0: r embaixo, y em cima; colunas 1–3: y na fileira de baixo, r na de cima
  b[ROWS - 1][0] = 'r';
  b[ROWS - 2][0] = 'y';
  for (const c of [1, 2, 3]) {
    b[ROWS - 1][c] = 'y';
    b[ROWS - 2][c] = 'r';
  }
  // tirar o r da coluna 0: o y desce e completa 4 amarelos embaixo; nenhum vermelho em 4
  const s: Conecta4State = { board: b, turn: 'r', winner: null, regra: 'popout', vistas: {} };
  assert.equal(popPiece(s, 0).winner, 'y');
  // com mais um r em cima na coluna 0, tirar faz 4 amarelos embaixo e 4 vermelhos na 2ª fileira
  const b2 = b.map((l) => l.slice());
  b2[ROWS - 3][0] = 'r'; // depois de tirar: y embaixo (4 amarelos) e r na 2ª fileira (4 vermelhos)
  const s2: Conecta4State = { ...s, board: b2 };
  assert.equal(popPiece(s2, 0).winner, 'r');
});

test('Pop Out: a mesma posição pela terceira vez é empate, e o tabuleiro cheio não empata', () => {
  let s = createInitialState(COLS, ROWS, 'popout');
  s = dropPiece(s, 0); // r
  s = dropPiece(s, 1); // y
  // r tira e solta de novo na coluna 0; y faz o mesmo na 1: a posição volta
  for (let k = 0; k < 3 && s.winner === null; k++) {
    s = popPiece(s, 0);
    s = popPiece(s, 1);
    s = dropPiece(s, 0);
    if (s.winner === null) s = dropPiece(s, 1);
  }
  assert.equal(s.winner, 'empate');
});

test('Pop Out: o Linu não cai na armadilha de tirar a própria peça e dar a vitória ao outro', () => {
  const b: Conecta4Board = Array.from({ length: ROWS }, () => Array<Color | null>(COLS).fill(null));
  b[ROWS - 1][0] = 'y';
  b[ROWS - 2][0] = 'r';
  for (const c of [1, 2, 3]) {
    b[ROWS - 1][c] = 'r';
    b[ROWS - 2][c] = 'y';
  }
  // vez do y: tirar o y da coluna 0 faz o r descer e completar 4 vermelhos embaixo; o Linu não faz isso
  const s: Conecta4State = { board: b, turn: 'y', winner: null, regra: 'popout', vistas: {} };
  const l = escolherLance(s, 4, BUSCA_POPOUT, 0)!;
  const f = l >= 0 ? dropPiece(s, l) : popPiece(s, -l - 1);
  assert.notEqual(f, s);
  assert.notEqual(f.winner, 'r');
});
