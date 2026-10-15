import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as Q from './qawale-engine';
import { lanceQawale } from './qawale-ia';

/** Um estado com as pilhas dadas (casa → pilha de baixo para cima). */
function posicao(pilhas: Record<number, Q.Pedra[]>, turn: Q.JogadorQ = 0, mao: [number, number] = [8, 8]): Q.QawaleState {
  const s = Q.createInitialState(turn);
  const p: Q.Pedra[][] = Array.from({ length: 16 }, (_, i) => pilhas[i] ?? []);
  return { ...s, pilhas: p, mao };
}

test('Qawale: começa com 2 pedras neutras em cada canto e 8 na mão de cada um', () => {
  const s = Q.createInitialState();
  assert.deepEqual(s.pilhas[0], [2, 2]);
  assert.deepEqual(s.pilhas[3], [2, 2]);
  assert.deepEqual(s.pilhas[12], [2, 2]);
  assert.deepEqual(s.pilhas[15], [2, 2]);
  assert.equal(s.pilhas.flat().length, 8);
  assert.deepEqual(s.mao, [8, 8]);
  assert.equal(Q.LINHAS.length, 10);
});

test('Qawale: não vale começar numa casa vazia', () => {
  const s = Q.createInitialState();
  assert.equal(Q.podeEscolher(s, 5), false);
  assert.equal(Q.podeEscolher(s, 0), true);
  assert.equal(Q.jogar(s, { origem: 5, caminho: [6] }), s);
});

test('Qawale: a pilha recebe a pedra nova por cima e é espalhada a partir de baixo', () => {
  const s = Q.createInitialState(0);
  // canto 0: neutra, neutra + clara = 3 pedras, caminho 1 → 2 → 6
  const f = Q.jogar(s, { origem: 0, caminho: [1, 2, 6] });
  assert.notEqual(f, s);
  assert.deepEqual(f.pilhas[0], []);
  assert.deepEqual(f.pilhas[1], [2]);
  assert.deepEqual(f.pilhas[2], [2]);
  assert.deepEqual(f.pilhas[6], [0], 'a pedra nova, que estava em cima, é a última a cair');
  assert.deepEqual(f.mao, [7, 8]);
  assert.equal(f.turn, 1);
});

test('Qawale: o caminho tem de ter uma pedra por casa, sem diagonal e sem ir e voltar', () => {
  const s = Q.createInitialState(0);
  assert.equal(Q.jogar(s, { origem: 0, caminho: [1, 2] }), s, 'faltou uma casa');
  assert.equal(Q.jogar(s, { origem: 0, caminho: [5, 6, 7] }), s, 'diagonal');
  assert.equal(Q.jogar(s, { origem: 0, caminho: [1, 0, 1] }), s, 'voltou para a casa de onde saiu');
  assert.equal(Q.jogar(s, { origem: 0, caminho: [1, 2, 1] }), s, 'ir e voltar');
  assert.deepEqual(Q.proximasCasas(0, []).sort(), [1, 4]);
  assert.deepEqual(Q.proximasCasas(0, [1]).sort(), [2, 5]);
});

test('Qawale: dá para voltar a uma casa dando a volta', () => {
  // pilha de 4 + a nova = 5 pedras: 1 → 5 → 4 → 0 → 1 volta à casa 1 pela volta
  const s = posicao({ 0: [2, 2, 2, 2] });
  const f = Q.jogar(s, { origem: 0, caminho: [1, 5, 4, 0, 1] });
  assert.notEqual(f, s);
  assert.deepEqual(f.pilhas[1], [2, 0]);
  assert.deepEqual(f.pilhas[0], [2]);
});

test('Qawale: vence quem deixa 4 pedras suas visíveis em linha (só conta a de cima)', () => {
  // claras por cima em 4, 5 e 6; a pilha neutra da casa 2 vai: a neutra cai na 3, a clara na 7
  const s = posicao({ 4: [0], 5: [2, 0], 6: [1, 0], 2: [2] }, 0);
  const f = Q.jogar(s, { origem: 2, caminho: [3, 7] });
  assert.deepEqual(f.pilhas[7], [0]);
  assert.equal(f.winner, 0);
  assert.deepEqual(f.linha, [4, 5, 6, 7]);
  assert.deepEqual(Q.lancesQawale(f), []);
});

test('Qawale: pedra coberta não conta', () => {
  const s = posicao({ 4: [0], 5: [0, 1], 6: [0], 7: [0] });
  assert.equal(Q.alinhamento(s.pilhas, 0), null);
});

test('Qawale: uma pilha de 4 da mesma cor não é alinhamento', () => {
  const s = posicao({ 5: [0, 0, 0, 0] });
  assert.equal(Q.alinhamento(s.pilhas, 0), null);
});

test('Qawale: alinhar só para o adversário dá a vitória a ele', () => {
  // as escuras têm 3, 6 e 9 (diagonal) visíveis; a clara espalha a escura da casa 8: ela cai na 12
  const s = posicao({ 3: [1], 6: [1], 9: [1], 8: [1] }, 0);
  const f = Q.jogar(s, { origem: 8, caminho: [12, 13] });
  assert.equal(f.winner, 1);
});

test('Qawale: sem pedras na mão e sem alinhamento, empata', () => {
  const s = posicao({ 0: [2] }, 1, [0, 1]);
  const f = Q.jogar(s, { origem: 0, caminho: [1, 2] });
  assert.equal(f.winner, 'empate');
});

test('Qawale: os lances do começo são todos diferentes e válidos', () => {
  const s = Q.createInitialState(0);
  const ls = Q.lancesQawale(s);
  assert.ok(ls.length > 20);
  for (const l of ls) assert.ok(Q.caminhoValido(s, l));
});

test('Qawale: pilha alta demais é sorteada, com limite', () => {
  const s = posicao({ 0: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2] });
  const ls = Q.lancesQawale(s, 200, () => 0.5);
  assert.ok(ls.length <= 200 && ls.length > 0);
});

test('Qawale: o Linu fecha a linha quando pode e decide em menos de 1 s', () => {
  const s = posicao({ 4: [1], 5: [2, 1], 6: [0, 1], 2: [2] }, 1);
  for (const n of ['facil', 'medio', 'dificil'] as const) {
    const l = lanceQawale(s, n)!;
    assert.equal(Q.jogar(s, l).winner, 1, n);
  }
  const t0 = Date.now();
  let p = Q.createInitialState(0);
  for (let k = 0; k < 6; k++) p = Q.jogar(p, lanceQawale(p, 'dificil')!);
  assert.ok((Date.now() - t0) / 6 < 1000);
});

test('Qawale: o Linu médio não entrega a vitória num lance só', () => {
  // as claras ameaçam fechar 0-1-2-3 se a casa 3 ficar com uma clara por cima
  const s = posicao({ 0: [0], 1: [0], 2: [0], 7: [2], 15: [2, 2] }, 1);
  const l = lanceQawale(s, 'dificil', () => 0.1)!;
  const f = Q.jogar(s, l);
  const resposta = Q.lancesQawale(f).find((x) => Q.jogar(f, x).winner === 0);
  assert.equal(resposta, undefined);
});

test('Qawale: partida Linu × Linu termina', () => {
  let s = Q.createInitialState(0);
  for (let k = 0; k < 16 && s.winner === null; k++) s = Q.jogar(s, lanceQawale(s, k % 2 ? 'facil' : 'medio')!);
  assert.notEqual(s.winner, null);
});
