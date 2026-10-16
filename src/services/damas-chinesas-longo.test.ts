import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, indice, jogar, lancesDaPeca, N_CELULAS, type EstrelaState } from './damas-chinesas-engine';
import { BUSCA_DAMAS_CHINESAS, escolherLance } from './jogos-ia';

/** Um tabuleiro vazio com as peças dadas ([q, r, dono]). */
const montar = (pecas: [number, number, number][], longo: boolean): EstrelaState => {
  const board = Array<number>(N_CELULAS).fill(-1);
  for (const [q, r, d] of pecas) board[indice(q, r)] = d;
  return { board, jogadores: [0, 3], vez: 0, winner: null, ultimo: null, lances: 0, ...(longo ? { longo } : {}) };
};
const destinos = (s: EstrelaState, q: number, r: number) => new Set(lancesDaPeca(s, indice(q, r)).map((l) => l.para));

test('damas chinesas rápidas: salta a peça distante e cai à mesma distância do outro lado', () => {
  // a peça em (−3, 0), uma peça em (0, 0): duas casas vazias antes, cai em (3, 0)
  const pecas: [number, number, number][] = [
    [-3, 0, 0],
    [0, 0, 3],
  ];
  assert.ok(destinos(montar(pecas, true), -3, 0).has(indice(3, 0)));
  assert.ok(!destinos(montar(pecas, false), -3, 0).has(indice(3, 0)), 'no jogo normal, não');
  // uma peça no caminho do outro lado estraga o salto
  const tapado = montar([...pecas, [2, 0, 3]], true);
  assert.ok(!destinos(tapado, -3, 0).has(indice(3, 0)));
});

test('damas chinesas rápidas: o salto longo encadeia e a regra segue no estado', () => {
  // (−4,0) → salta (−2,0) → cai em (0,0) → salta (1,0) → cai em (2,0)
  const s = montar(
    [
      [-4, 0, 0],
      [-2, 0, 3],
      [1, 0, 3],
    ],
    true,
  );
  const l = lancesDaPeca(s, indice(-4, 0)).find((x) => x.para === indice(2, 0));
  assert.ok(l, 'chega em (2, 0) numa cadeia');
  const f = jogar(s, l!);
  assert.equal(f.longo, true);
  assert.equal(createInitialState(2, true).longo, true);
  assert.equal(createInitialState(2).longo, undefined);
  // o Linu joga com a regra
  const ini = createInitialState(2, true);
  assert.ok(escolherLance(ini, 1, BUSCA_DAMAS_CHINESAS, 0, () => 0.5));
});
