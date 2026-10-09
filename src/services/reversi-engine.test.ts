import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, legalMoves, makeMove, type Color, type ReversiBoard } from './reversi-engine';

function emptyBoard(): ReversiBoard {
  return Array.from({ length: 8 }, () => Array<Color | null>(8).fill(null));
}

test('reversi: estado inicial tem as 4 peças centrais em diagonal e preto começa', () => {
  const s = createInitialState();
  assert.equal(s.board[3][3], 'w');
  assert.equal(s.board[3][4], 'b');
  assert.equal(s.board[4][3], 'b');
  assert.equal(s.board[4][4], 'w');
  assert.equal(s.turn, 'b');
  assert.equal(s.winner, null);
});

test('reversi: preto tem exatamente os 4 lances clássicos de abertura', () => {
  const s = createInitialState();
  const moves = legalMoves(s.board, 'b').sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  assert.deepEqual(moves, [[2, 3], [3, 2], [4, 5], [5, 4]]);
});

test('reversi: jogar vira a(s) peça(s) encurraladas na linha, e passa a vez', () => {
  const s = createInitialState();
  const s2 = makeMove(s, 2, 3);
  assert.equal(s2.board[2][3], 'b'); // a peça nova
  assert.equal(s2.board[3][3], 'b'); // virou de branco pra preto
  assert.equal(s2.turn, 'w');
  assert.equal(s2.winner, null);
});

test('reversi: jogar numa casa que não vira peça nenhuma é ilegal (mesma referência)', () => {
  const s = createInitialState();
  const s2 = makeMove(s, 0, 0);
  assert.equal(s2, s);
});

test('reversi: jogar numa casa ocupada é ilegal (mesma referência)', () => {
  const s = createInitialState();
  const s2 = makeMove(s, 3, 3);
  assert.equal(s2, s);
});

test('reversi: quando o adversário fica sem lance, a vez volta automaticamente pro mesmo jogador (passe automático)', () => {
  // Branco com uma única peça em (0,6); preto em (0,7) — o único jeito de "flanquear" essa dupla
  // seria pousar em (0,8), que não existe (fora do tabuleiro): branco não tem lance ali.
  // Preto em (7,0) e branco em (7,1): preto joga em (7,2), capturando (7,1) — depois disso, branco
  // continua sem NENHUM lance em todo o tabuleiro (a única peça branca restante, em (0,6), segue
  // sem flanco possível), mas preto ainda tem lance (em (0,5), capturando (0,6)) — então a vez
  // volta pro preto, sem o jogo terminar.
  const board = emptyBoard();
  board[0][6] = 'w';
  board[0][7] = 'b';
  board[7][0] = 'b';
  board[7][1] = 'w';
  const s = { board, turn: 'b' as const, winner: null };
  assert.deepEqual(legalMoves(board, 'w'), []); // confirma: branco já não tem lance nenhum nesta posição
  const s2 = makeMove(s, 7, 2);
  assert.equal(s2.board[7][1], 'b'); // capturada
  assert.deepEqual(legalMoves(s2.board, 'w'), []); // branco continua sem lance depois do lance de preto
  assert.equal(s2.turn, 'b'); // passou a vez de volta: branco não tem o que jogar
  assert.equal(s2.winner, null); // o jogo não acabou — preto ainda tem lance (em (0,5))
});

test('reversi: quando os dois ficam sem lance, o jogo acaba e vence quem tem mais peças', () => {
  // Tabuleiro quase todo preto, com 1 peça branca em (0,1) e uma única casa vazia em (0,0). Preto
  // joga ali, captura a única peça branca (virando o tabuleiro 100% preto) — ninguém mais tem lance.
  const board = emptyBoard();
  for (let row = 0; row < 8; row++) for (let col = 0; col < 8; col++) board[row][col] = 'b';
  board[0][0] = null;
  board[0][1] = 'w';
  const s = { board, turn: 'b' as const, winner: null };
  const s2 = makeMove(s, 0, 0);
  assert.equal(s2.board[0][1], 'b'); // a única peça branca foi capturada
  assert.equal(s2.winner, 'b'); // 64×0: preto vence
});
