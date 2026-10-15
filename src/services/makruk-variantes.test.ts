import { test } from 'node:test';
import assert from 'node:assert/strict';
import { aplicar, createInitialState, ix, jogar, lancesDaPeca, lancesLegais, type MakrukState, type PecaM } from './makruk-engine';
import { lanceMakruk } from './makruk-ia';

// brancas embaixo: khun em d1 (linha 7, coluna 3), met em e1 (7, 4), bia na 3ª fileira (linha 5)
const D1 = ix(7, 3);
const E1 = ix(7, 4);

test('ouk: no primeiro lance, o khun pula como o cavalo para a fileira da frente e o met anda duas', () => {
  const s = createInitialState('ouk');
  const doKhun = lancesDaPeca(s, D1).map((l) => l.para);
  assert.ok(doKhun.includes(ix(6, 1)) && doKhun.includes(ix(6, 5)), 'b2 e f2');
  // no makruk, não
  assert.ok(!lancesDaPeca(createInitialState(), D1).some((l) => l.para === ix(6, 1)));
  // o met: e3 tem o bia; depois que ele sai, o met pula de e1 para e3
  let t = jogar(s, ix(5, 4), ix(4, 4));
  t = jogar(t, ix(2, 0), ix(3, 0));
  assert.ok(lancesDaPeca(t, E1).some((l) => l.para === ix(5, 4)));
  t = jogar(t, E1, ix(5, 4));
  assert.deepEqual(t.board[ix(5, 4)], { cor: 'w', tipo: 'm' });
  assert.ok(t.mexeram!.includes('wm'));
});

test('ouk: os pulos só valem uma vez e acabam com a primeira captura', () => {
  let s = createInitialState('ouk');
  s = jogar(s, D1, ix(6, 1)); // khun pula para b2
  s = jogar(s, ix(2, 0), ix(3, 0));
  // o khun já se mexeu: de b2, nada de pulo
  assert.ok(!lancesDaPeca(s, ix(6, 1)).some((l) => Math.abs(l.para % 8 - 1) === 2));
  // uma captura apaga o pulo do met das pretas
  const base = createInitialState('ouk');
  const board: (PecaM | null)[] = base.board.slice();
  board[ix(4, 4)] = { cor: 'b', tipo: 'p' };
  const comCaptura: MakrukState = { ...base, board, turn: 'w' };
  const depois = jogar(comCaptura, ix(5, 3), ix(4, 4)); // bia branco captura em e4
  assert.equal(depois.houveCaptura, true);
  assert.ok(!lancesLegais(depois).some((l) => l.de === ix(0, 3) && l.para === ix(2, 3)));
});

test('kar ouk: o primeiro xeque vence', () => {
  const base = createInitialState('karouk');
  // um ruea branco solto na coluna e, com o caminho até o khun preto (e8) aberto
  const board: (PecaM | null)[] = Array(64).fill(null);
  board[ix(7, 3)] = { cor: 'w', tipo: 'k' };
  board[ix(0, 4)] = { cor: 'b', tipo: 'k' };
  board[ix(4, 0)] = { cor: 'w', tipo: 'r' };
  board[ix(0, 0)] = { cor: 'b', tipo: 'r' };
  const s: MakrukState = { ...base, board };
  const f = jogar(s, ix(4, 0), ix(4, 4));
  assert.equal(f.winner, 'w');
  assert.equal(f.fim, 'xeque');
  // o Linu acha o xeque que vence
  const l = lanceMakruk(s, 'medio', () => 0.5)!;
  assert.equal(aplicar(s, l).winner, 'w');
});
