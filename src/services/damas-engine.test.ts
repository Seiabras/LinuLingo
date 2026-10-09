import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialState,
  legalMovesFrom,
  makeMove,
  playerLegalMoves,
  type DamasBoardGrid,
  type DamasState,
  type DamasPiece,
} from './damas-engine';

function emptyBoard(): DamasBoardGrid {
  return Array.from({ length: 8 }, () => Array<DamasPiece | null>(8).fill(null));
}

test('damas: estado inicial tem 12 peças por jogador, nas casas escuras, começa o jogador 0', () => {
  const s = createInitialState();
  const flat = s.board.flat().filter((p) => p !== null) as DamasPiece[];
  assert.equal(flat.length, 24);
  assert.equal(flat.filter((p) => p.player === 0).length, 12);
  assert.equal(flat.filter((p) => p.player === 1).length, 12);
  assert.ok(flat.every((p) => !p.dama));
  assert.equal(s.turn, 0);
  assert.equal(s.winner, null);
});

test('damas: peça comum só anda na diagonal pra frente, uma casa, se estiver vazia', () => {
  const s = createInitialState();
  // jogador 0 (topo) tem peça em (2,1); fileira 3 está livre no início
  const moves = legalMovesFrom(s, { row: 2, col: 1 }).map((m) => m.to).sort((a, b) => a.col - b.col);
  assert.deepEqual(moves, [{ row: 3, col: 0 }, { row: 3, col: 2 }]);
});

test('damas: peça comum não pode andar pra trás sem capturar', () => {
  const board = emptyBoard();
  board[4][4] = { player: 0, dama: false }; // jogador 0 avança pra row maior; (3,3)/(3,5) seriam "pra trás"
  const s: DamasState = { board, turn: 0, winner: null };
  const moves = legalMovesFrom(s, { row: 4, col: 4 }).map((m) => m.to);
  assert.ok(!moves.some((m) => m.row === 3));
  assert.ok(moves.some((m) => m.row === 5 && m.col === 3));
  assert.ok(moves.some((m) => m.row === 5 && m.col === 5));
});

test('damas: captura é obrigatória — se há salto possível, lance simples não é opção', () => {
  const board = emptyBoard();
  board[4][4] = { player: 0, dama: false };
  board[5][5] = { player: 1, dama: false }; // peça adversária logo na diagonal de avanço
  const s: DamasState = { board, turn: 0, winner: null };
  const moves = legalMovesFrom(s, { row: 4, col: 4 });
  assert.deepEqual(moves, [{ from: { row: 4, col: 4 }, to: { row: 6, col: 6 }, captured: [{ row: 5, col: 5 }] }]);
});

test('damas: peça comum captura pra frente E pra trás', () => {
  const board = emptyBoard();
  board[4][4] = { player: 0, dama: false };
  board[3][3] = { player: 1, dama: false }; // peça adversária "atrás" (fileira menor, já que o jogador 0 avança pra fileira maior)
  const s: DamasState = { board, turn: 0, winner: null };
  const moves = legalMovesFrom(s, { row: 4, col: 4 });
  assert.deepEqual(moves, [{ from: { row: 4, col: 4 }, to: { row: 2, col: 2 }, captured: [{ row: 3, col: 3 }] }]);
});

test('damas: lei da maioria — com 2 sequências de captura possíveis, só a que captura mais peças é legal', () => {
  const board = emptyBoard();
  // peça A: só consegue capturar 1 peça (em (1,1)), e nenhuma outra peça está nas diagonais de (2,2)
  board[0][0] = { player: 0, dama: false };
  board[1][1] = { player: 1, dama: false };
  // peça B: encadeia 2 capturas, numa região totalmente separada do tabuleiro (sem compartilhar
  // nenhuma casa com a peça A, pra não misturar as duas sequências)
  board[0][6] = { player: 0, dama: false };
  board[1][5] = { player: 1, dama: false };
  board[3][5] = { player: 1, dama: false };
  const s: DamasState = { board, turn: 0, winner: null };
  const all = playerLegalMoves(s, 0);
  // peça A: (0,0)->(2,2) capturando (1,1) só — máximo 1 captura.
  // peça B: (0,6)->(2,4) capturando (1,5), depois (2,4)->(4,6) capturando (3,5) — total 2 capturas.
  assert.ok(all.every((m) => m.captured.length === 2));
  assert.ok(all.every((m) => m.from.row === 0 && m.from.col === 6));
  assert.equal(legalMovesFrom(s, { row: 0, col: 0 }).length, 0); // essa peça não pode jogar: não atinge o máximo
});

test('damas: dama voa — anda e captura à distância, escolhendo onde pousar', () => {
  const board = emptyBoard();
  board[7][0] = { player: 1, dama: true }; // dama do jogador 1 no canto
  const s: DamasState = { board, turn: 1, winner: null };
  const moves = legalMovesFrom(s, { row: 7, col: 0 }).map((m) => m.to).sort((a, b) => a.row - b.row);
  assert.deepEqual(moves, [
    { row: 0, col: 7 }, { row: 1, col: 6 }, { row: 2, col: 5 }, { row: 3, col: 4 }, { row: 4, col: 3 }, { row: 5, col: 2 }, { row: 6, col: 1 },
  ]);
});

test('damas: dama captura à distância e pode escolher em qual casa vazia cair depois da peça', () => {
  const board = emptyBoard();
  board[7][0] = { player: 1, dama: true };
  board[5][2] = { player: 0, dama: false }; // peça adversária no caminho da diagonal
  const s: DamasState = { board, turn: 1, winner: null };
  const moves = legalMovesFrom(s, { row: 7, col: 0 });
  const destinos = moves.map((m) => m.to).sort((a, b) => a.row - b.row);
  assert.deepEqual(destinos, [{ row: 0, col: 7 }, { row: 1, col: 6 }, { row: 2, col: 5 }, { row: 3, col: 4 }, { row: 4, col: 3 }]);
  assert.ok(moves.every((m) => m.captured.length === 1 && m.captured[0].row === 5 && m.captured[0].col === 2));
});

test('damas: peça comum promove a dama ao terminar o lance na última fileira', () => {
  const board = emptyBoard();
  board[6][2] = { player: 0, dama: false };
  const s: DamasState = { board, turn: 0, winner: null };
  const s2 = makeMove(s, { row: 6, col: 2 }, { row: 7, col: 1 });
  assert.equal(s2.board[7][1]?.dama, true);
});

test('damas: peça que só passa pela última fileira numa captura em cadeia não promove', () => {
  const board = emptyBoard();
  board[5][1] = { player: 0, dama: false };
  board[6][2] = { player: 1, dama: false }; // capturada no caminho pra última fileira (7,3)
  board[6][4] = { player: 1, dama: false }; // obriga continuar a cadeia a partir de (7,3)
  const s: DamasState = { board, turn: 0, winner: null };
  const s2 = makeMove(s, { row: 5, col: 1 }, { row: 5, col: 5 }); // (5,1)->(7,3)->(5,5), capturando as 2
  assert.equal(s2.board[5][5]?.dama, false); // passou por (7,3) no meio da cadeia, mas não terminou ali
  assert.equal(s2.board[6][2], null);
  assert.equal(s2.board[6][4], null);
});

test('damas: lance pra uma casa ilegal não faz nada (mesma referência)', () => {
  const s = createInitialState();
  const s2 = makeMove(s, { row: 2, col: 1 }, { row: 4, col: 4 });
  assert.equal(s2, s);
});

test('damas: jogador sem lance legal perde', () => {
  const board = emptyBoard();
  board[7][7] = { player: 1, dama: false }; // única peça do jogador 1, encurralada no canto
  board[6][6] = { player: 0, dama: false }; // bloqueia o único avanço possível de (7,7) — e a captura
  board[5][5] = { player: 0, dama: false }; // ...também bloqueia o pouso logo depois, então nem captura dá
  board[0][0] = { player: 0, dama: false }; // peça "neutra", só pra ter um lance legal que não toque o canto
  const s: DamasState = { board, turn: 0, winner: null };
  assert.equal(legalMovesFrom(s, { row: 7, col: 7 }).length, 0); // confirma que o jogador 1 já está sem saída nesta posição

  const s2 = makeMove(s, { row: 0, col: 0 }, { row: 3, col: 3 }); // destino errado: não é lance legal, nada muda
  assert.equal(s2, s);

  const s3 = makeMove(s, { row: 0, col: 0 }, { row: 1, col: 1 });
  assert.equal(s3.turn, 1);
  assert.equal(s3.winner, 0); // jogador 1 não tem nenhum lance legal: jogador 0 vence
});
