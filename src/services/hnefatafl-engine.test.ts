import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  BOARD_SIZE,
  createInitialState,
  legalMovesFrom,
  makeMove,
  type HnefataflState,
  type TaflBoard,
  type TaflPiece,
} from './hnefatafl-engine';

function emptyBoard(): TaflBoard {
  return Array.from({ length: BOARD_SIZE }, () => Array<TaflPiece | null>(BOARD_SIZE).fill(null));
}

function customState(board: TaflBoard, turn: 'a' | 'd' = 'a'): HnefataflState {
  return { board, turn, result: { status: 'playing' } };
}

test('hnefatafl: estado inicial tem 24 atacantes, 12 defensores comuns, 1 rei no trono, e atacantes começam', () => {
  const s = createInitialState();
  const flat = s.board.flat().filter((p) => p !== null) as TaflPiece[];
  assert.equal(flat.filter((p) => p.side === 'a').length, 24);
  assert.equal(flat.filter((p) => p.side === 'd' && !p.king).length, 12);
  assert.equal(flat.filter((p) => p.king).length, 1);
  assert.equal(s.board[5][5]?.king, true);
  assert.equal(s.turn, 'a');
  assert.equal(s.result.status, 'playing');
});

test('hnefatafl: peça anda reto qualquer distância, até travar numa peça ou no canto (peça comum não entra no canto)', () => {
  const s = createInitialState();
  const moves = legalMovesFrom(s, { row: 0, col: 3 }).sort((a, b) => a.row - b.row || a.col - b.col);
  // esquerda: (0,2) e (0,1) — não (0,0), que é canto; direita: nenhuma, (0,4) ocupado; baixo: até travar no defensor de (5,3)
  assert.deepEqual(moves, [
    { row: 0, col: 1 }, { row: 0, col: 2 },
    { row: 1, col: 3 }, { row: 2, col: 3 }, { row: 3, col: 3 }, { row: 4, col: 3 },
  ]);
});

test('hnefatafl: lance pra uma casa ilegal não faz nada (mesma referência)', () => {
  const s = createInitialState();
  const s2 = makeMove(s, { row: 0, col: 3 }, { row: 0, col: 0 }); // canto, peça comum não pode entrar
  assert.equal(s2, s);
});

test('hnefatafl: só o rei pode entrar ou passar pelo trono e pelos cantos', () => {
  const board = emptyBoard();
  board[5][2] = { side: 'd', king: true };
  const sRei = customState(board, 'd');
  const movesRei = legalMovesFrom(sRei, { row: 5, col: 2 }).filter((m) => m.row === 5);
  assert.ok(movesRei.some((m) => m.col === 5)); // o rei pode pousar no trono
  assert.ok(movesRei.some((m) => m.col === 8)); // e passar por ele, indo além

  const board2 = emptyBoard();
  board2[5][2] = { side: 'a' };
  const sComum = customState(board2, 'a');
  const movesComum = legalMovesFrom(sComum, { row: 5, col: 2 }).filter((m) => m.row === 5 && m.col > 2); // só o lado direito, rumo ao trono
  assert.ok(!movesComum.some((m) => m.col >= 5)); // trava antes do trono: só (5,3) e (5,4)
  assert.deepEqual(movesComum.sort((a, b) => a.col - b.col), [{ row: 5, col: 3 }, { row: 5, col: 4 }]);
});

test('hnefatafl: captura por cerco — peça comum entre 2 peças inimigas é capturada', () => {
  const board = emptyBoard();
  board[3][2] = { side: 'a' };
  board[3][3] = { side: 'd' };
  board[6][4] = { side: 'a' }; // vai se mover pra (3,4), fechando o cerco
  const s = customState(board, 'a');
  const s2 = makeMove(s, { row: 6, col: 4 }, { row: 3, col: 4 });
  assert.equal(s2.board[3][3], null); // defensor capturado
  assert.equal(s2.board[3][4]?.side, 'a');
});

test('hnefatafl: captura usando o canto como parede hostil', () => {
  const board = emptyBoard();
  board[0][1] = { side: 'd' }; // peça comum encostada no canto (0,0)
  board[2][2] = { side: 'a' }; // vai se mover pra (0,2), fechando contra o canto
  const s = customState(board, 'a');
  const s2 = makeMove(s, { row: 2, col: 2 }, { row: 0, col: 2 });
  assert.equal(s2.board[0][1], null);
});

test('hnefatafl: captura usando o trono vazio como parede hostil', () => {
  const board = emptyBoard();
  board[5][4] = { side: 'd' };
  board[8][3] = { side: 'a' }; // vai se mover pra (5,3), fechando contra o trono (5,5) vazio
  const s = customState(board, 'a');
  const s2 = makeMove(s, { row: 8, col: 3 }, { row: 5, col: 3 });
  assert.equal(s2.board[5][4], null);
});

test('hnefatafl: o rei NUNCA é capturado por cerco simples de 2 peças (precisa das 4 casas)', () => {
  const board = emptyBoard();
  board[3][3] = { side: 'd', king: true };
  board[3][2] = { side: 'a' };
  board[6][4] = { side: 'a' };
  const s = customState(board, 'a');
  const s2 = makeMove(s, { row: 6, col: 4 }, { row: 3, col: 4 }); // sanduíche só nos 2 lados
  assert.equal(s2.board[3][3]?.king, true); // o rei continua lá, não foi capturado
  assert.equal(s2.result.status, 'playing');
});

test('hnefatafl: rei capturado ao ser cercado nas 4 casas ortogonais (longe da borda)', () => {
  const board = emptyBoard();
  board[5][5] = { side: 'd', king: true };
  board[4][5] = { side: 'a' };
  board[5][4] = { side: 'a' };
  board[5][6] = { side: 'a' };
  board[9][5] = { side: 'a' }; // vai subir até (6,5), fechando o 4º lado
  const s = customState(board, 'a');
  const s2 = makeMove(s, { row: 9, col: 5 }, { row: 6, col: 5 });
  assert.equal(s2.result.status, 'vitoria');
  assert.deepEqual(s2.result, { status: 'vitoria', lado: 'a', motivo: 'rei_capturado' });
});

test('hnefatafl: simplificação documentada — rei encostado na borda NÃO pode ser capturado (falta o 4º lado)', () => {
  const board = emptyBoard();
  board[0][5] = { side: 'd', king: true }; // na borda de cima: só 3 vizinhos dentro do tabuleiro
  board[0][4] = { side: 'a' };
  board[0][6] = { side: 'a' };
  board[1][5] = { side: 'a' };
  board[10][5] = { side: 'd' }; // peça extra do defensor, só pra garantir que os defensores têm lance legal
  board[8][8] = { side: 'a' }; // peça que vai fazer um lance trivial, só pra disparar a checagem do rei
  const s = customState(board, 'a');
  const s2 = makeMove(s, { row: 8, col: 8 }, { row: 8, col: 7 });
  assert.equal(s2.result.status, 'playing'); // 3 lados cercados não bastam: a borda não conta como 4º lado
});

test('hnefatafl: rei fugiu — chegar em qualquer canto vence os defensores', () => {
  const board = emptyBoard();
  board[0][1] = { side: 'd', king: true };
  const s = customState(board, 'd');
  const s2 = makeMove(s, { row: 0, col: 1 }, { row: 0, col: 0 });
  assert.deepEqual(s2.result, { status: 'vitoria', lado: 'd', motivo: 'rei_fugiu' });
});

test('hnefatafl: sem lance legal nenhum perde (regra de desempate, não é das regras de Copenhague)', () => {
  const board = emptyBoard();
  board[2][2] = { side: 'a' }; // único atacante, cercado nos 4 lados por defensores — zero lances
  board[1][2] = { side: 'd' };
  board[3][2] = { side: 'd' };
  board[2][1] = { side: 'd' };
  board[2][3] = { side: 'd' };
  board[8][8] = { side: 'd', king: true }; // rei livre, só pra fazer um lance trivial
  const s = customState(board, 'd');
  const s2 = makeMove(s, { row: 8, col: 8 }, { row: 8, col: 7 });
  assert.deepEqual(s2.result, { status: 'vitoria', lado: 'd', motivo: 'sem_lance' });
});
