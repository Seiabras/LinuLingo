import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, destinos, ix, jogar, perft, type ChaturangaState, type CorC, type Elefante, type PecaC, type TipoC } from './chaturanga-engine';

function posicao(pecas: [number, number, CorC, TipoC][], turn: CorC = 'w', elefante: Elefante = 'alfil'): ChaturangaState {
  const board: (PecaC | null)[] = Array(64).fill(null);
  for (const [r, c, cor, tipo] of pecas) board[ix(r, c)] = { cor, tipo };
  return { ...createInitialState(elefante), board, turn, repeticoes: {} };
}

test('chaturanga: posição inicial — raja branco em e1, preto em d8, mantri ao lado', () => {
  const s = createInitialState();
  assert.deepEqual(s.board[ix(7, 4)], { cor: 'w', tipo: 'k' });
  assert.deepEqual(s.board[ix(7, 3)], { cor: 'w', tipo: 'm' });
  assert.deepEqual(s.board[ix(0, 3)], { cor: 'b', tipo: 'k' });
  assert.deepEqual(s.board[ix(0, 4)], { cor: 'b', tipo: 'm' });
});

test('chaturanga: perft igual ao do Fairy-Stockfish (variante chaturanga, com os rajas em e1 e d8)', () => {
  // valores calculados com o ffish (Fairy-Stockfish), FEN rnbkqbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR
  const b = createInitialState().board;
  assert.equal(perft(b, 'w', 1), 16);
  assert.equal(perft(b, 'w', 2), 256);
  assert.equal(perft(b, 'w', 3), 4176);
  assert.equal(perft(b, 'w', 4), 68122);
});

test('chaturanga: as três reconstruções do gaja', () => {
  const alfil = destinos(posicao([[4, 4, 'w', 'g']]).board, ix(4, 4), 'alfil').sort((a, b) => a - b);
  assert.deepEqual(alfil, [ix(2, 2), ix(2, 6), ix(6, 2), ix(6, 6)]);
  const biruni = destinos(posicao([[4, 4, 'w', 'g']]).board, ix(4, 4), 'biruni').sort((a, b) => a - b);
  assert.deepEqual(biruni, [ix(3, 3), ix(3, 4), ix(3, 5), ix(5, 3), ix(5, 5)]);
  const adli = destinos(posicao([[4, 4, 'w', 'g']]).board, ix(4, 4), 'adli').sort((a, b) => a - b);
  assert.deepEqual(adli, [ix(2, 4), ix(4, 2), ix(4, 6), ix(6, 4)]);
  // o alfil pula a casa do meio
  const pulo = destinos(posicao([[4, 4, 'w', 'g'], [3, 3, 'b', 'p']]).board, ix(4, 4), 'alfil');
  assert.ok(pulo.includes(ix(2, 2)));
});

test('chaturanga: o padati anda uma casa e vira mantri na última fileira', () => {
  assert.deepEqual(destinos(createInitialState().board, ix(6, 0), 'alfil'), [ix(5, 0)]);
  const s = jogar(posicao([[1, 0, 'w', 'p'], [7, 4, 'w', 'k'], [0, 7, 'b', 'k'], [5, 7, 'b', 'p']]), ix(1, 0), ix(0, 0));
  assert.deepEqual(s.board[ix(0, 0)], { cor: 'w', tipo: 'm' });
});

test('chaturanga: xeque-mate vence; afogado vence quem ficou afogado (al-Adli)', () => {
  const mate = jogar(posicao([[0, 0, 'b', 'k'], [2, 1, 'w', 'k'], [7, 7, 'w', 'r'], [5, 5, 'b', 'p']]), ix(7, 7), ix(0, 7));
  assert.equal(mate.fim, 'mate');
  assert.equal(mate.winner, 'w');
  // o preto em a8, o raja branco em b6; o mantri branco vai a c7 e cobre b8: o preto fica sem lance
  const afogado = jogar(posicao([[0, 0, 'b', 'k'], [2, 1, 'w', 'k'], [2, 3, 'w', 'm'], [6, 6, 'w', 'p'], [1, 7, 'b', 'p'], [2, 7, 'w', 'p']]), ix(2, 3), ix(1, 2));
  assert.equal(afogado.fim, 'afogado');
  assert.equal(afogado.winner, 'b');
});

test('chaturanga: rei nu — vence quem deixa o raja do outro sozinho, ou empata se o outro devolve', () => {
  const s = posicao([[0, 3, 'b', 'k'], [7, 4, 'w', 'k'], [4, 0, 'w', 'r'], [4, 7, 'b', 'n'], [6, 6, 'w', 'p']], 'w');
  const t = jogar(s, ix(4, 0), ix(4, 7));
  assert.equal(t.fim, 'nu');
  assert.equal(t.winner, 'w');
  // agora o raja preto pode devolver: o ratha branco, a única peça, para ao lado dele, sem proteção
  const u = posicao([[0, 3, 'b', 'k'], [7, 4, 'w', 'k'], [1, 0, 'w', 'r'], [1, 2, 'b', 'p']], 'w');
  const v = jogar(u, ix(1, 0), ix(1, 2));
  assert.equal(v.fim, 'empate-nu');
});
