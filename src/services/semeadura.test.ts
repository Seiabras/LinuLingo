import { test } from 'node:test';
import assert from 'node:assert/strict';
import { duracaoDoQuadro, quadrosDaSemeadura } from './semeadura';
import { createInitialState as owareInicial, detalharSemeadura, sow, type OwareState } from './oware-engine';
import { casasDe, DEPOSITO, frente, jogar as kalahJogar, type KalahState } from './kalah-engine';

const soma = (v: readonly number[]) => v.reduce((a, b) => a + b, 0);

test('semeadura: pega, uma semente por cova e termina na posição do motor (oware)', () => {
  const s = owareInicial();
  const next = sow(s, 2);
  const { caminho, capturadas } = detalharSemeadura(s, 2);
  assert.deepEqual(caminho, [3, 4, 5, 6]);
  assert.deepEqual(capturadas, []);
  const q = quadrosDaSemeadura({ antes: s.houses, origem: 2, caminho, depois: next.houses });
  assert.equal(q.length, 5);
  assert.equal(q[0]!.tipo, 'pega');
  assert.equal(q[0]!.mao, 4);
  assert.equal(q[0]!.covas[2], 0);
  assert.deepEqual(q.slice(1).map((x) => x.cai), [3, 4, 5, 6]);
  assert.deepEqual(q.at(-1)!.covas, next.houses);
  // a mão mais o tabuleiro sempre somam as 48 sementes
  for (const x of q) assert.equal(soma(x.covas) + x.mao, 48);
});

test('semeadura: a captura do oware voa para quem jogou e o último quadro é o do motor', () => {
  // a última semente cai na casa 7 do adversário, que fica com 2: captura
  const s: OwareState = { houses: [0, 0, 0, 0, 0, 2, 1, 1, 4, 4, 4, 4], scores: [10, 10], turn: 0, winner: null };
  const next = sow(s, 5);
  const { caminho, capturadas } = detalharSemeadura(s, 5);
  assert.deepEqual(caminho, [6, 7]);
  assert.deepEqual(capturadas, [7, 6]);
  assert.equal(next.scores[0], 14);
  const q = quadrosDaSemeadura({ antes: s.houses, origem: 5, caminho, depois: next.houses, grupos: [{ de: capturadas, para: 0 }, { de: [6, 7, 8, 9, 10, 11], para: 1 }] });
  const voo = q.find((x) => x.tipo === 'voa')!;
  assert.deepEqual(
    voo.voam.map((v) => [v.de, v.n, v.para]),
    [
      [7, 2, 0],
      [6, 2, 0],
    ],
  );
  assert.deepEqual(q.at(-1)!.covas, next.houses);
});

test('semeadura: no Kalah a captura chega ao depósito e a recolha do fim vai para cada dono', () => {
  // o jogador 0 cai na casa 5 vazia; a da frente (7) tem sementes: captura; e o lado dele esvazia: fim
  const covas = [0, 0, 0, 0, 1, 0, 10, 3, 2, 0, 0, 0, 0, 12];
  const s: KalahState = { covas, turn: 0, winner: null, ultimo: null };
  const next = kalahJogar(s, 4);
  assert.equal(next.ultimo!.captura, 7);
  assert.notEqual(next.winner, null);
  const grupos = [
    { de: [7, frente(7)], para: DEPOSITO[0] },
    { de: casasDe(0), para: DEPOSITO[0] },
    { de: casasDe(1), para: DEPOSITO[1] },
  ];
  const q = quadrosDaSemeadura({ antes: covas, origem: 4, caminho: next.ultimo!.semeadas, depois: next.covas, grupos, destinoNasCovas: true });
  const voos = q.filter((x) => x.tipo === 'voa');
  assert.equal(voos.length, 2);
  assert.deepEqual(voos[0]!.voam.map((v) => v.para), [6, 6]);
  assert.deepEqual(voos[1]!.voam.map((v) => [v.de, v.para]), [[8, 13]]);
  assert.deepEqual(q.filter((x) => x.tipo === 'chega').map((x) => x.chegou), [[6], [13]]);
  assert.deepEqual(q.at(-1)!.covas, next.covas);
  // as sementes no ar (quadro 'voa') estão fora das covas; em todo o resto, nada some nem aparece
  for (const x of q) assert.equal(soma(x.covas) + x.mao + soma(x.voam.map((v) => v.n)), soma(covas));
});

test('semeadura: cada quadro dura pouco, e a semeadura longa anda mais depressa', () => {
  const q = quadrosDaSemeadura({ antes: [0, 30, 0], origem: 1, caminho: Array.from({ length: 30 }, (_, k) => [2, 0][k % 2]!), depois: [15, 0, 15] });
  assert.equal(duracaoDoQuadro(q[1]!, 30), 90);
  assert.equal(duracaoDoQuadro(q[1]!, 4), 240);
});
