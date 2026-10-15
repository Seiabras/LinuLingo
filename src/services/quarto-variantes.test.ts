import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ALTA, CARACS_INICIANTES, ESCURA, QUADRADA, colocar, createInitialState, escolher, type QuartoState } from './quarto-engine';
import { lanceQuarto } from './quarto-ia';

/** Monta a primeira fileira com 3 peças e dá a quarta para o jogador 0 colocar na casa 3. */
function quaseQuarto(pecas: number[], quarta: number, caracs?: number): QuartoState {
  let s = createInitialState({ caracs, comeca: 0 });
  const board = s.board.slice();
  pecas.forEach((p, i) => (board[i] = p));
  let livres = s.livres;
  for (const p of pecas) livres &= ~(1 << p);
  s = { ...s, board, livres };
  return escolher({ ...s, turn: 1 }, quarta);
}

test('Quarto para iniciantes: só a cor vale', () => {
  // quatro peças claras (bit ESCURA desligado) mas de alturas diferentes: vale
  const claras = colocar(quaseQuarto([0, ALTA, QUADRADA], ALTA | QUADRADA, CARACS_INICIANTES[1]), 3);
  assert.equal(claras.winner, 0);
  // todas altas, mas de cores diferentes: no jogo normal vale, só com a cor não
  const altas = [ALTA, ALTA | ESCURA, ALTA | QUADRADA];
  assert.equal(colocar(quaseQuarto(altas, ALTA | ESCURA | QUADRADA), 3).winner, 0);
  const so = colocar(quaseQuarto(altas, ALTA | ESCURA | QUADRADA, CARACS_INICIANTES[1]), 3);
  assert.equal(so.winner, null);
});

test('Quarto para iniciantes: com 2 características, a altura entra; a forma não', () => {
  const altas = [ALTA, ALTA | ESCURA, ALTA | QUADRADA];
  assert.equal(colocar(quaseQuarto(altas, ALTA | ESCURA | QUADRADA, CARACS_INICIANTES[2]), 3).winner, 0);
  const quadradas = [QUADRADA, QUADRADA | ESCURA, QUADRADA | ALTA];
  assert.equal(colocar(quaseQuarto(quadradas, QUADRADA | ESCURA | ALTA, CARACS_INICIANTES[2]), 3).winner, null);
  assert.equal(colocar(quaseQuarto(quadradas, QUADRADA | ESCURA | ALTA, CARACS_INICIANTES[3]), 3).winner, 0);
});

test('Quarto para iniciantes: o Linu fecha o Quarto que vale', () => {
  const s = quaseQuarto([0, ALTA, QUADRADA], ALTA | QUADRADA, CARACS_INICIANTES[1]);
  const l = lanceQuarto({ ...s, turn: 0 }, 'medio', () => 0.5)!;
  assert.equal(l.casa, 3);
});
