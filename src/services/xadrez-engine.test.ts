import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  canCastle,
  createInitialState,
  isInCheck,
  legalMovesFrom,
  makeMove,
  moveNeedsPromotion,
  type Board,
  type ChessState,
  type Piece,
  type Pos,
} from './xadrez-engine';

/** Tabuleiro vazio, pra montar posições específicas nos testes (igual o costume do quoridor-engine.test.ts). */
function emptyBoard(): Board {
  return Array.from({ length: 8 }, () => Array<Piece | null>(8).fill(null));
}

function customState(partial: Partial<ChessState> & { board: Board }): ChessState {
  return {
    turn: 'w',
    castling: { wK: false, wQ: false, bK: false, bQ: false },
    enPassantTarget: null,
    halfmoveClock: 0,
    positionCounts: {},
    history: [],
    result: { status: 'playing' },
    inCheck: false,
    ...partial,
  };
}

function move(state: ChessState, from: Pos, to: Pos, promotion?: 'q' | 'r' | 'b' | 'n') {
  return makeMove(state, from, to, promotion);
}

// ---------- Estado inicial e movimentos básicos ----------

test('xadrez: estado inicial tem 32 peças e é a vez das brancas', () => {
  const s = createInitialState();
  const count = s.board.flat().filter((p) => p !== null).length;
  assert.equal(count, 32);
  assert.equal(s.turn, 'w');
  assert.equal(s.result.status, 'playing');
});

test('xadrez: peão anda uma casa, ou duas na primeira jogada', () => {
  const s = createInitialState();
  const moves = legalMovesFrom(s, { row: 6, col: 4 }).sort((a, b) => a.row - b.row);
  assert.deepEqual(moves, [{ row: 4, col: 4 }, { row: 5, col: 4 }]);
});

test('xadrez: peão não pode andar duas casas se não for a primeira jogada dele', () => {
  let s = createInitialState();
  s = move(s, { row: 6, col: 4 }, { row: 4, col: 4 }); // e2-e4
  s = move(s, { row: 1, col: 4 }, { row: 3, col: 4 }); // e7-e5
  const moves = legalMovesFrom(s, { row: 4, col: 4 });
  assert.deepEqual(moves, []); // e4 está travado por e5, peão branco não pode avançar
});

test('xadrez: cavalo pula em L a partir da posição inicial', () => {
  const s = createInitialState();
  const moves = legalMovesFrom(s, { row: 7, col: 1 }).sort((a, b) => a.col - b.col); // Nb1
  assert.deepEqual(moves, [{ row: 5, col: 0 }, { row: 5, col: 2 }]);
});

test('xadrez: bispo e torre não atravessam peças (bloqueados na posição inicial)', () => {
  const s = createInitialState();
  assert.deepEqual(legalMovesFrom(s, { row: 7, col: 2 }), []); // bispo c1, peão na frente
  assert.deepEqual(legalMovesFrom(s, { row: 7, col: 0 }), []); // torre a1, peão na frente
});

test('xadrez: captura simples remove a peça adversária', () => {
  let s = createInitialState();
  s = move(s, { row: 6, col: 4 }, { row: 4, col: 4 }); // e4
  s = move(s, { row: 1, col: 3 }, { row: 3, col: 3 }); // d5
  s = move(s, { row: 4, col: 4 }, { row: 3, col: 3 }); // exd5 (captura)
  assert.equal(s.board[3][3]?.type, 'p');
  assert.equal(s.board[3][3]?.color, 'w');
  assert.equal(s.board[4][4], null);
});

test('xadrez: lance pra uma casa ilegal não faz nada (mesma referência)', () => {
  const s = createInitialState();
  const s2 = makeMove(s, { row: 6, col: 4 }, { row: 0, col: 0 });
  assert.equal(s2, s);
});

// ---------- Xeque ----------

test('xadrez: detecta xeque de uma torre na mesma coluna do rei', () => {
  const board = emptyBoard();
  board[7][4] = { type: 'k', color: 'w' };
  board[0][4] = { type: 'r', color: 'b' };
  const s = customState({ board, turn: 'w' });
  assert.equal(isInCheck(s.board, 'w'), true);
});

test('xadrez: rei não pode se mover para uma casa atacada', () => {
  const board = emptyBoard();
  board[7][4] = { type: 'k', color: 'w' };
  board[0][5] = { type: 'r', color: 'b' }; // torre cobre a coluna f
  const s = customState({ board, turn: 'w' });
  const moves = legalMovesFrom(s, { row: 7, col: 4 });
  assert.ok(!moves.some((m) => m.col === 5)); // Kf1 seria ilegal (entra em xeque)
  assert.ok(moves.some((m) => m.col === 3)); // Kd1 é legal
});

// ---------- Xeque-mate: Fool's Mate (mate em 2, o mais rápido possível) ----------

test('xadrez: Fool\'s Mate — 1.f3 e5 2.g4 Qh4# é xeque-mate', () => {
  let s = createInitialState();
  s = move(s, { row: 6, col: 5 }, { row: 5, col: 5 }); // 1. f3
  s = move(s, { row: 1, col: 4 }, { row: 3, col: 4 }); // 1... e5
  s = move(s, { row: 6, col: 6 }, { row: 4, col: 6 }); // 2. g4
  s = move(s, { row: 0, col: 3 }, { row: 4, col: 7 }); // 2... Qh4#
  assert.equal(s.result.status, 'checkmate');
  assert.equal((s.result as { status: 'checkmate'; winner: 'w' | 'b' }).winner, 'b');
});

// ---------- Xeque-mate: Scholar's Mate (mate em 4, armadilha clássica) ----------

test('xadrez: Scholar\'s Mate — 1.e4 e5 2.Bc4 Nc6 3.Qh5 Nf6 4.Qxf7# é xeque-mate', () => {
  let s = createInitialState();
  s = move(s, { row: 6, col: 4 }, { row: 4, col: 4 }); // 1. e4
  s = move(s, { row: 1, col: 4 }, { row: 3, col: 4 }); // 1... e5
  s = move(s, { row: 7, col: 5 }, { row: 4, col: 2 }); // 2. Bc4
  s = move(s, { row: 0, col: 1 }, { row: 2, col: 2 }); // 2... Nc6
  s = move(s, { row: 7, col: 3 }, { row: 3, col: 7 }); // 3. Qh5
  s = move(s, { row: 0, col: 6 }, { row: 2, col: 5 }); // 3... Nf6??
  s = move(s, { row: 3, col: 7 }, { row: 1, col: 5 }); // 4. Qxf7#
  assert.equal(s.result.status, 'checkmate');
  assert.equal((s.result as { status: 'checkmate'; winner: 'w' | 'b' }).winner, 'w');
  assert.equal(s.board[1][5]?.type, 'q'); // a dama capturou o peão f7
});

// ---------- Afogamento (stalemate) ----------

test('xadrez: afogamento clássico — rei preso sem estar em xeque é empate, sem vencedor', () => {
  // Posição final desejada: Ka8 (preto), Qb6 e Kc6 (branco), vez das pretas, sem xeque e sem lance
  // legal. `makeMove` só calcula o `result` no lance que CHEGA a essa posição, então começamos um
  // lance antes (rei branco em c5) e damos o último passo (Kc5-c6) pra o motor detectar o afogamento.
  const before: ChessState = customState({
    board: (() => {
      const b = emptyBoard();
      b[0][0] = { type: 'k', color: 'b' }; // Ka8
      b[2][1] = { type: 'q', color: 'w' }; // Qb6
      b[3][2] = { type: 'k', color: 'w' }; // Kc5 (um lance antes de Kc6)
      return b;
    })(),
    turn: 'w',
  });
  // Confere que a posição-alvo de fato não deixa nenhum lance legal pro rei preto, sem estar em xeque.
  const target = customState({
    board: (() => {
      const b = emptyBoard();
      b[0][0] = { type: 'k', color: 'b' };
      b[2][1] = { type: 'q', color: 'w' };
      b[2][2] = { type: 'k', color: 'w' }; // Kc6
      return b;
    })(),
    turn: 'b',
  });
  assert.equal(isInCheck(target.board, 'b'), false);
  assert.deepEqual(legalMovesFrom(target, { row: 0, col: 0 }), []);

  const after = move(before, { row: 3, col: 2 }, { row: 2, col: 2 }); // Kc5-c6
  assert.equal(after.result.status, 'stalemate');
  assert.equal(after.turn, 'b');
});

// ---------- Roque ----------

function castlingTestBoard(): Board {
  const board = emptyBoard();
  board[7][4] = { type: 'k', color: 'w' };
  board[7][7] = { type: 'r', color: 'w' };
  board[7][0] = { type: 'r', color: 'w' };
  board[0][4] = { type: 'k', color: 'b' };
  board[0][7] = { type: 'r', color: 'b' };
  board[0][0] = { type: 'r', color: 'b' };
  return board;
}

test('xadrez: roque pequeno (lado do rei) é legal quando nada se moveu e o caminho está livre', () => {
  const board = castlingTestBoard();
  const s = customState({ board, turn: 'w', castling: { wK: true, wQ: true, bK: true, bQ: true } });
  assert.equal(canCastle(s, 'w', 'K'), true);
  const s2 = move(s, { row: 7, col: 4 }, { row: 7, col: 6 });
  assert.equal(s2.board[7][6]?.type, 'k');
  assert.equal(s2.board[7][5]?.type, 'r'); // a torre também andou
  assert.equal(s2.board[7][7], null);
});

test('xadrez: roque grande (lado da dama) é legal quando nada se moveu e o caminho está livre', () => {
  const board = castlingTestBoard();
  const s = customState({ board, turn: 'w', castling: { wK: true, wQ: true, bK: true, bQ: true } });
  assert.equal(canCastle(s, 'w', 'Q'), true);
  const s2 = move(s, { row: 7, col: 4 }, { row: 7, col: 2 });
  assert.equal(s2.board[7][2]?.type, 'k');
  assert.equal(s2.board[7][3]?.type, 'r');
  assert.equal(s2.board[7][0], null);
});

test('xadrez: roque é ilegal se o rei já se moveu antes (direito perdido)', () => {
  const board = castlingTestBoard();
  const s = customState({ board, turn: 'w', castling: { wK: false, wQ: false, bK: true, bQ: true } });
  assert.equal(canCastle(s, 'w', 'K'), false);
  assert.equal(canCastle(s, 'w', 'Q'), false);
});

test('xadrez: roque é ilegal se a torre daquele lado já se moveu (mesmo com o rei intacto)', () => {
  const board = castlingTestBoard();
  const s = customState({ board, turn: 'w', castling: { wK: false, wQ: true, bK: true, bQ: true } }); // perdeu só o do lado do rei
  assert.equal(canCastle(s, 'w', 'K'), false);
  assert.equal(canCastle(s, 'w', 'Q'), true);
});

test('xadrez: roque é ilegal se há uma peça entre o rei e a torre', () => {
  const board = castlingTestBoard();
  board[7][5] = { type: 'b', color: 'w' }; // bispo bloqueando f1
  const s = customState({ board, turn: 'w', castling: { wK: true, wQ: true, bK: true, bQ: true } });
  assert.equal(canCastle(s, 'w', 'K'), false);
});

test('xadrez: roque é ilegal se o rei está em xeque', () => {
  const board = castlingTestBoard();
  board[6][4] = { type: 'q', color: 'b' }; // dama dá xeque direto no rei branco
  const s = customState({ board, turn: 'w', castling: { wK: true, wQ: true, bK: true, bQ: true } });
  assert.equal(canCastle(s, 'w', 'K'), false);
  assert.equal(canCastle(s, 'w', 'Q'), false);
});

test('xadrez: roque é ilegal se o rei passaria por uma casa atacada', () => {
  const board = castlingTestBoard();
  board[0][5] = { type: 'r', color: 'b' }; // torre preta ataca a coluna f (f1 é uma das casas do caminho do roque pequeno)
  const s = customState({ board, turn: 'w', castling: { wK: true, wQ: true, bK: true, bQ: true } });
  assert.equal(canCastle(s, 'w', 'K'), false);
  assert.equal(canCastle(s, 'w', 'Q'), true); // a coluna d/c não está sob ataque
});

// ---------- Captura en passant ----------

test('xadrez: captura en passant é legal só na jogada imediatamente depois do avanço duplo', () => {
  // row0=fileira 8 ... row7=fileira 1. e5 = row3,col4; d7 = row1,col3; d6 (destino do en passant) = row2,col3.
  const board = emptyBoard();
  board[7][4] = { type: 'k', color: 'w' };
  board[0][4] = { type: 'k', color: 'b' };
  board[1][3] = { type: 'p', color: 'b' }; // peão preto em d7
  board[3][4] = { type: 'p', color: 'w' }; // peão branco em e5, já avançado, ao lado de onde d7-d5 vai cair
  let s = customState({ board, turn: 'b' });
  s = move(s, { row: 1, col: 3 }, { row: 3, col: 3 }); // d7-d5 (avanço duplo, fica do lado do peão branco em e5)
  assert.deepEqual(s.enPassantTarget, { row: 2, col: 3 }); // d6: a casa que o peão preto "saltou"
  const moves = legalMovesFrom(s, { row: 3, col: 4 });
  assert.ok(moves.some((m) => m.row === 2 && m.col === 3)); // exd6 en passant é uma opção
  const s2 = move(s, { row: 3, col: 4 }, { row: 2, col: 3 });
  assert.equal(s2.board[2][3]?.type, 'p');
  assert.equal(s2.board[2][3]?.color, 'w'); // o peão branco pousou em d6
  assert.equal(s2.board[3][4], null); // peão branco saiu de e5
  assert.equal(s2.board[3][3], null); // peão preto capturado some (não fica em d5)
});

test('xadrez: sem captura en passant se a jogada anterior não foi um avanço duplo', () => {
  const board = emptyBoard();
  board[7][4] = { type: 'k', color: 'w' };
  board[0][4] = { type: 'k', color: 'b' };
  board[3][3] = { type: 'p', color: 'b' }; // peão preto já em d5 (chegou há mais de 1 lance, parado ali)
  board[3][4] = { type: 'p', color: 'w' }; // peão branco em e5, ao lado do peão preto em d5
  const s = customState({ board, turn: 'w', enPassantTarget: null });
  const moves = legalMovesFrom(s, { row: 3, col: 4 });
  assert.ok(!moves.some((m) => m.row === 2 && m.col === 3)); // sem en passant, pois não há enPassantTarget válido
});

// ---------- Promoção ----------

test('xadrez: peão que chega na última fileira precisa promover, e a peça escolhida é a que entra', () => {
  const board = emptyBoard();
  board[7][4] = { type: 'k', color: 'w' };
  board[0][0] = { type: 'k', color: 'b' };
  board[1][4] = { type: 'p', color: 'w' }; // peão branco em e7, uma casa da promoção
  const s = customState({ board, turn: 'w' });
  assert.equal(moveNeedsPromotion(s, { row: 1, col: 4 }, { row: 0, col: 4 }), true);
  const s2 = move(s, { row: 1, col: 4 }, { row: 0, col: 4 }, 'n');
  assert.equal(s2.board[0][4]?.type, 'n');
  assert.equal(s2.board[0][4]?.color, 'w');
});

test('xadrez: promoção sem escolha explícita vira dama por padrão', () => {
  const board = emptyBoard();
  board[7][4] = { type: 'k', color: 'w' };
  board[0][0] = { type: 'k', color: 'b' };
  board[1][4] = { type: 'p', color: 'w' };
  const s = customState({ board, turn: 'w' });
  const s2 = move(s, { row: 1, col: 4 }, { row: 0, col: 4 });
  assert.equal(s2.board[0][4]?.type, 'q');
});
