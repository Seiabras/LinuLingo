import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as P from './pontinhos-engine';
import { lancePontinhos, seguro } from './pontinhos-ia';

/** Traça os traços dados sem passar pelas vezes (todos do jogador 0), sem fechar nada de propósito. */
function com(s: P.PontinhosState, tracos: number[], turn: P.JogadorP = 0): P.PontinhosState {
  const t = s.tracos.slice();
  for (const x of tracos) t[x] = 0;
  return { ...s, tracos: t, turn };
}

test('Pontinhos: grade 3×3 tem 24 traços e 9 quadradinhos; 2×2, 12 e 4', () => {
  const s = P.createInitialState(3);
  assert.equal(s.tracos.length, 24);
  assert.equal(s.caixas.length, 9);
  assert.equal(P.totalTracos(2, 2), 12);
  assert.equal(P.lancesLegais(P.createInitialState(2)).length, 12);
});

test('Pontinhos: os 4 lados de cada quadradinho e as caixas de cada traço batem', () => {
  const l = 3;
  const a = 2;
  for (let b = 0; b < l * a; b++) for (const t of P.ladosDaCaixa(l, a, b)) assert.ok(P.caixasDoTraco(l, a, t).includes(b), `caixa ${b}, traço ${t}`);
  // traço da borda: 1 caixa; traço de dentro: 2
  assert.equal(P.caixasDoTraco(l, a, P.horizontal(l, 0, 0)).length, 1);
  assert.equal(P.caixasDoTraco(l, a, P.horizontal(l, 1, 0)).length, 2);
  assert.equal(P.caixasDoTraco(l, a, P.vertical(l, a, 0, 1)).length, 2);
});

test('Pontinhos: traço sem fechar passa a vez; não traça duas vezes o mesmo', () => {
  const s = P.tracar(P.createInitialState(2), 0);
  assert.equal(s.turn, 1);
  assert.equal(P.tracar(s, 0), s);
});

test('Pontinhos: quem fecha o quadradinho marca o ponto e joga de novo', () => {
  const l = 2;
  const [c, b, e, d] = P.ladosDaCaixa(l, 2, 0);
  const s = com(P.createInitialState(2), [c, b, e], 1);
  const f = P.tracar(s, d);
  assert.equal(f.caixas[0], 1);
  assert.deepEqual(f.placar, [0, 1]);
  assert.equal(f.turn, 1, 'joga de novo');
  assert.deepEqual(f.ultimo?.fechou, [0]);
});

test('Pontinhos: um traço pode fechar dois quadradinhos de uma vez', () => {
  const l = 2;
  const meio = P.vertical(l, 2, 0, 1); // entre as caixas 0 e 1
  const outros = [...P.ladosDaCaixa(l, 2, 0), ...P.ladosDaCaixa(l, 2, 1)].filter((t) => t !== meio);
  const f = P.tracar(com(P.createInitialState(2), outros), meio);
  assert.deepEqual(f.ultimo?.fechou.sort(), [0, 1]);
  assert.equal(f.placar[0], 2);
});

test('Pontinhos: no fim vence quem tem mais; com placar igual, empata', () => {
  let s = P.createInitialState(1, 1, 0);
  s = P.tracar(s, 0);
  s = P.tracar(s, 1);
  s = P.tracar(s, 2);
  s = P.tracar(s, 3); // o jogador 1 traça o quarto lado
  assert.equal(s.winner, 1);
  // 2×1: a caixa 0 já é do jogador 0; o jogador 1 fecha a última e empata 1 a 1
  const ultimo = P.ladosDaCaixa(2, 1, 1)[3]!;
  let e = P.createInitialState(2, 1, 1);
  e = com(e, e.tracos.map((_, t) => t).filter((t) => t !== ultimo), 1);
  e = { ...e, caixas: [0, null], placar: [1, 0] };
  const f = P.tracar(e, ultimo);
  assert.deepEqual(f.placar, [1, 1]);
  assert.equal(f.winner, 'empate');
});

test('Pontinhos: traço seguro não dá o terceiro lado', () => {
  const l = 2;
  const [c, b] = P.ladosDaCaixa(l, 2, 0);
  const s = com(P.createInitialState(2), [c, b]);
  const [, , e, d] = P.ladosDaCaixa(l, 2, 0);
  assert.equal(seguro(s, e), false);
  assert.equal(seguro(s, d), false);
  assert.equal(seguro(s, P.horizontal(l, 2, 1)), true);
});

test('Pontinhos: o Linu fecha o quadradinho que está à mão e evita dar o terceiro lado', () => {
  const l = 3;
  const [c, b, e, d] = P.ladosDaCaixa(l, 3, 4);
  const s = com(P.createInitialState(3), [c, b, e], 1);
  for (const nv of ['facil', 'medio', 'dificil'] as const) assert.equal(lancePontinhos(s, nv), d, nv);
  const s2 = com(P.createInitialState(3), [c, b], 1);
  for (const nv of ['medio', 'dificil'] as const) {
    const t = lancePontinhos(s2, nv)!;
    assert.ok(seguro(s2, t), `${nv}: ${t}`);
  }
});

test('Pontinhos: no fim, o difícil calcula o jogo até o último traço (e não perde para o fácil)', () => {
  let ganhos = 0;
  for (let p = 0; p < 6; p++) {
    let semente = 11 + p;
    const rng = () => (semente = (semente * 16807) % 2147483647) / 2147483647;
    let s = P.createInitialState(3, 3, (p % 2) as P.JogadorP);
    const t0 = Date.now();
    let maior = 0;
    for (let k = 0; k < 100 && s.winner === null; k++) {
      const a = Date.now();
      s = P.tracar(s, lancePontinhos(s, s.turn === 1 ? 'dificil' : 'facil', rng)!);
      maior = Math.max(maior, Date.now() - a);
    }
    assert.notEqual(s.winner, null);
    // o alvo é < 1 s por lance no aparelho; aqui o limite é folgado porque a suíte roda com a máquina
    // carregada (falhou duas vezes só por carga, 15/10/2026)
    assert.ok(maior < 4000, `lance mais lento: ${maior} ms`);
    if (s.winner !== 1) console.log('placar', s.placar);
    if (s.winner === 1) ganhos++;
    assert.ok(Date.now() - t0 < 20000);
  }
  assert.ok(ganhos >= 5, `o difícil venceu ${ganhos} de 6`);
});

test('Pontinhos: double-cross — no fim de uma corrente, sem traço seguro, o difícil recusa os dois últimos', () => {
  // grade 4×4 com todos os traços deitados: cada fileira é uma corrente de 4. A fileira de cima já foi
  // aberta e o Linu comeu as caixas 0 e 1; sobram A (caixa 2, com 3 lados) e B (caixa 3, com 2).
  // As outras fileiras não têm traço seguro. O difícil traça a ponta de B (a borda da direita).
  const l = 4;
  const a = 4;
  const tr: number[] = [];
  for (let r = 0; r <= a; r++) for (let c = 0; c < l; c++) tr.push(P.horizontal(l, r, c));
  tr.push(P.vertical(l, a, 0, 0), P.vertical(l, a, 0, 1), P.vertical(l, a, 0, 2));
  let s = com(P.createInitialState(l, a, 1), tr, 1);
  s = { ...s, caixas: s.caixas.map((x, i) => (i < 2 ? 1 : x)), placar: [0, 2] };
  assert.ok(P.lancesLegais(s).length > 15, 'longe do fim: vale a estratégia, não o cálculo');
  const ponta = P.vertical(l, a, 0, l);
  assert.equal(lancePontinhos(s, 'dificil'), ponta, 'traça a ponta e deixa os dois para o adversário');
  assert.equal(lancePontinhos(s, 'medio'), P.vertical(l, a, 0, 3), 'o médio come tudo');
  // o adversário pega os dois com um traço só e tem de abrir outra corrente
  const f = P.tracar(P.tracar(s, ponta), P.vertical(l, a, 0, 3));
  assert.deepEqual(f.placar, [2, 2]);
  assert.equal(f.turn, 0);
});
