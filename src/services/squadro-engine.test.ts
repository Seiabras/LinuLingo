import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as S from './squadro-engine';
import { lanceSquadro } from './squadro-ia';

type P = Partial<S.PecaS>;
/** Monta uma posição: as peças que não forem dadas ficam na partida. */
function posicao(claras: Record<number, P>, escuras: Record<number, P>, turn: S.JogadorS = 0): S.SquadroState {
  const s = S.createInitialState(turn);
  const mk = (m: Record<number, P>) => s.pecas[0].map((p, t) => ({ ...p, ...(m[t] ?? {}) }));
  return { ...s, pecas: [mk(claras), mk(escuras)] };
}

test('Squadro: 5 peças de cada lado, todas na partida, 5 lances possíveis', () => {
  const s = S.createInitialState();
  assert.equal(s.pecas[0].length, 5);
  assert.equal(s.pecas[1].length, 5);
  assert.deepEqual(S.lancesLegais(s), [0, 1, 2, 3, 4]);
});

test('Squadro: velocidades 1-3-2-3-1 e 3-1-2-1-3, e na volta 1 vira 3, 2 fica 2, 3 vira 1', () => {
  for (const j of [0, 1] as const) {
    const { ida, volta } = S.VELOCIDADES[j];
    ida.forEach((v, t) => assert.equal(volta[t], 4 - v));
  }
  assert.deepEqual(S.VELOCIDADES[0].ida, S.VELOCIDADES[1].volta);
});

test('Squadro: a peça de velocidade 3 chega à beira em dois lances, vira e passa a andar 1 (fig. 3 da regra)', () => {
  let s = S.createInitialState(0);
  s = S.mover(s, 1); // claras, trilho 1: ida 3
  assert.equal(s.pecas[0][1]!.pos, 3);
  s = S.mover(s, 0); // escuras, trilho 0
  s = S.mover(s, 1);
  assert.equal(s.pecas[0][1]!.pos, 6);
  assert.equal(s.pecas[0][1]!.volta, true);
  assert.ok(s.ultimo?.virou);
  assert.equal(S.velocidade(0, 1, s.pecas[0][1]!), 1);
});

test('Squadro: ao chegar à beira, a peça para mesmo com pontos sobrando', () => {
  const s = S.mover(posicao({ 1: { pos: 5 } }, {}), 1); // velocidade 3, só cabe 1 casa
  assert.equal(s.pecas[0][1]!.pos, 6);
  assert.equal(s.pecas[0][1]!.volta, true);
});

test('Squadro: passar por cima de uma adversária manda ela de volta e a peça para logo depois', () => {
  // escura do trilho 0 (coluna 1) na posição 5 = linha 1, no caminho da clara do trilho 0
  const s = S.mover(posicao({}, { 0: { pos: 5 } }), 0);
  assert.equal(s.pecas[0][0]!.pos, 2, 'velocidade 1, mas salta e para depois');
  assert.equal(s.pecas[1][0]!.pos, 0, 'a saltada volta para a partida');
  assert.deepEqual(s.ultimo?.saltadas, [{ trilho: 0, de: 5, para: 0 }]);
});

test('Squadro: salta várias adversárias seguidas de uma vez', () => {
  const s = S.mover(posicao({}, { 0: { pos: 5 }, 1: { pos: 5 } }), 0);
  assert.equal(s.pecas[0][0]!.pos, 3);
  assert.equal(s.pecas[1][0]!.pos, 0);
  assert.equal(s.pecas[1][1]!.pos, 0);
});

test('Squadro: a saltada que já estava voltando volta para a casa de meia-volta', () => {
  const s = S.mover(posicao({}, { 0: { pos: 5, volta: true } }), 0);
  assert.equal(s.pecas[1][0]!.pos, 6);
  assert.equal(s.pecas[1][0]!.volta, true);
});

test('Squadro: o salto para mesmo sobrando pontos (escuras saltando uma clara)', () => {
  // clara do trilho 4 (linha 5) na posição 1 = coluna 1, no caminho da escura do trilho 0
  const s = S.mover(posicao({ 4: { pos: 1 } }, {}, 1), 0); // velocidade 3
  assert.equal(s.pecas[1][0]!.pos, 2);
  assert.equal(s.pecas[0][4]!.pos, 0);
});

test('Squadro: peça que não está no caminho não é saltada', () => {
  const s = S.mover(posicao({}, { 0: { pos: 4 } }), 0); // escura na linha 2, clara anda na linha 1
  assert.equal(s.pecas[0][0]!.pos, 1);
  assert.equal(s.pecas[1][0]!.pos, 4);
  assert.deepEqual(s.ultimo?.saltadas, []);
});

test('Squadro: quem volta à partida sai; com 4 fora, vence', () => {
  const fora = { pos: 0, volta: true, fora: true };
  const s0 = posicao({ 0: fora, 1: fora, 2: fora, 3: { pos: 1, volta: true } }, {});
  assert.deepEqual(S.lancesLegais(s0), [3, 4]);
  const s = S.mover(s0, 3); // volta 1: chega
  assert.equal(s.pecas[0][3]!.fora, true);
  assert.equal(S.prontas(s, 0), 4);
  assert.equal(s.winner, 0);
  assert.deepEqual(S.lancesLegais(s), []);
  assert.equal(S.mover(s, 4), s);
});

test('Squadro: não move peça que já saiu nem fora da vez', () => {
  const s = posicao({ 2: { pos: 0, volta: true, fora: true } }, {});
  assert.equal(S.mover(s, 2), s);
  assert.equal(S.podeMover(s, 9), false);
});

test('Squadro: o Linu pega a vitória quando ela está à mão', () => {
  const fora = { pos: 0, volta: true, fora: true };
  const s = posicao({}, { 0: fora, 1: fora, 2: fora, 4: { pos: 2, volta: true } }, 1); // volta 3: chega
  for (const n of ['facil', 'medio', 'dificil'] as const) assert.equal(lanceSquadro(s, n), 4);
});

test('Squadro: o Linu difícil decide em menos de 1 s e as partidas terminam', () => {
  const t0 = Date.now();
  lanceSquadro(S.createInitialState(1), 'dificil');
  assert.ok(Date.now() - t0 < 1000);
  // Linu médio × Linu fácil: a partida acaba com um vencedor
  let s = S.createInitialState(0);
  let r = 0.3;
  const sem = () => (r = (r * 9301 + 49297) % 233280) / 233280;
  for (let i = 0; i < 400 && s.winner === null; i++) s = S.mover(s, lanceSquadro(s, s.turn === 0 ? 'medio' : 'facil', sem)!);
  assert.notEqual(s.winner, null);
});
