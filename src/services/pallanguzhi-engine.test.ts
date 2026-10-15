import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as P from './pallanguzhi-engine';
import { deposito, quadrosDosEventos, type EstadoMancala } from './mancala-familia';
import { lanceMancala } from './mancala-familia-ia';

const n = P.N_PALLANGUZHI;
const total = (s: EstadoMancala) => s.covas.reduce((a, b) => a + b, 0);
/** Um tabuleiro com as covas dadas (o resto vazio). */
function posicao(m: Record<number, number>, turn: 0 | 1 = 0): EstadoMancala {
  const s = P.createInitialState(turn);
  return { ...s, covas: s.covas.map((_, i) => m[i] ?? 0) };
}

test('Pallanguzhi: 14 covas com 6 sementes, depósitos vazios, 84 sementes', () => {
  const s = P.createInitialState();
  assert.equal(s.covas.length, 16);
  assert.equal(total(s), 84);
  assert.equal(s.covas[deposito(n, 0)], 0);
  assert.deepEqual(P.lancesLegais(s), [0, 1, 2, 3, 4, 5, 6]);
});

test('Pallanguzhi: semeia uma por cova e, no fim, pega a cova seguinte e continua', () => {
  // cova 0 com 2: cai em 1 e 2; a 3 tem 1 semente → pega e cai na 4; a 5 está vazia, a 6 também: acaba
  const s = posicao({ 0: 2, 3: 1, 10: 5 });
  const f = P.jogar(s, 0);
  assert.deepEqual(f.ultimo!.eventos, [
    { t: 'pega', i: 0 },
    { t: 'semeia', i: 1 },
    { t: 'semeia', i: 2 },
    { t: 'pega', i: 3 },
    { t: 'semeia', i: 4 },
  ]);
  assert.equal(f.turn, 1);
  assert.equal(total(f), total(s));
});

test('Pallanguzhi: cova seguinte vazia — captura a de depois; duas vazias, a vez acaba', () => {
  // cova 0 com 1: cai na 1; a 2 está vazia; a 3 tem 5: captura as 5
  const s = posicao({ 0: 1, 3: 5, 10: 2 });
  const f = P.jogar(s, 0);
  assert.equal(f.covas[deposito(n, 0)], 5);
  assert.equal(f.covas[3], 0);
  // depois da captura, a cova 4 está vazia: acaba
  assert.equal(f.turn, 1);
});

test('Pallanguzhi: depois da captura, continua se a cova seguinte tiver sementes', () => {
  const s = posicao({ 0: 1, 3: 5, 4: 1, 10: 2 });
  const f = P.jogar(s, 0);
  // captura a 3, pega a 4 (1 semente) e deixa na 5; a 6 está vazia e a 8 (pulando o depósito) também
  assert.ok(f.ultimo!.eventos.some((e) => e.t === 'pega' && e.i === 4));
  assert.equal(f.covas[5], 1);
});

test('Pallanguzhi: a semeadura pula os dois depósitos', () => {
  const s = posicao({ 6: 1, 12: 3 });
  const f = P.jogar(s, 6);
  assert.equal(f.covas[deposito(n, 0)], 0);
  assert.equal(f.covas[8], 1, 'a semente da cova 6 vai para a 8, do outro lado');
});

test('Pallanguzhi: “pasu” — a cova que chega a 4 é de quem deixou a semente', () => {
  const s = posicao({ 0: 1, 1: 3, 12: 2 });
  const f = P.jogar(s, 0);
  assert.equal(f.covas[1], 0);
  assert.equal(f.covas[deposito(n, 0)], 4);
});

test('Pallanguzhi: quem fica sem sementes termina a rodada e o outro leva o resto', () => {
  // o jogador 1 não tem nada: depois do lance do 0, a rodada acaba
  const s = posicao({ 0: 1, 4: 3 });
  const f = P.jogar(s, 0);
  assert.notEqual(f.winner, null);
  assert.equal(f.covas[deposito(n, 0)], total(s));
  assert.equal(f.winner, 0);
});

test('Pallanguzhi: as sementes nunca somem nem aparecem', () => {
  let s = P.createInitialState(0);
  for (let k = 0; k < 200 && s.winner === null; k++) {
    const l = P.lancesLegais(s);
    s = P.jogar(s, l[(k * 3) % l.length]!);
    assert.equal(total(s), 84);
  }
});

test('Pallanguzhi: os quadros da animação terminam na posição do motor', () => {
  const s = P.createInitialState(0);
  const f = P.jogar(s, 3);
  const q = quadrosDosEventos(s.covas, f.ultimo!.eventos, f.covas);
  assert.deepEqual(q[q.length - 1]!.covas, f.covas);
});

test('Pallanguzhi: o Linu difícil joga em menos de 1 s e vence o fácil', () => {
  let ganhos = 0;
  let maior = 0;
  for (let p = 0; p < 4; p++) {
    let semente = 5 + p;
    const rng = () => (semente = (semente * 16807) % 2147483647) / 2147483647;
    let s = P.createInitialState((p % 2) as 0 | 1);
    for (let k = 0; k < 300 && s.winner === null; k++) {
      const t0 = Date.now();
      const l = lanceMancala(s, P, s.turn === 1 ? 'dificil' : 'facil', undefined, rng)!;
      maior = Math.max(maior, Date.now() - t0);
      s = P.jogar(s, l);
    }
    if (s.winner === 1) ganhos++;
  }
  assert.ok(maior < 1000, `lance mais lento: ${maior} ms`);
  assert.ok(ganhos >= 3, `o difícil venceu ${ganhos} de 4`);
});
