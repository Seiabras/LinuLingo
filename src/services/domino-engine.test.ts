import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  comAlvo,
  comprar,
  createInitialState,
  jogar,
  jogoCompleto,
  lancesLegais,
  ladosPossiveis,
  passar,
  podeComprar,
  podePassar,
  pontas,
  proximaRodada,
  somaMao,
  visaoDe,
  type DominoState,
  type Pedra,
} from './domino-engine';

// sorteio repetível, para o teste dar sempre o mesmo resultado
const semente = (x0 = 7) => {
  let x = x0;
  return () => (x = (x * 9301 + 49297) % 233280) / 233280;
};

/** Monta uma mesa à mão, a partir de uma linha já jogada (pedras orientadas da esquerda para a direita). */
const mesa = (maos: [Pedra[], Pedra[]], linha: [number, number][], monte: Pedra[] = [], turn: 0 | 1 = 0): DominoState => ({
  maos,
  monte,
  linha: linha.map(([a, b], ordem) => ({ a, b, por: 0, ordem })),
  origem: 0,
  turn,
  placar: [0, 0],
  alvo: 100,
  rodada: 2,
  comecou: 0,
  saidaObrigatoria: null,
  fimRodada: null,
  winner: null,
  ultimo: null,
  semNumero: [[], []],
});

test('dominó: 28 pedras diferentes, de 0-0 a 6-6, 168 pontos ao todo', () => {
  const todas = jogoCompleto();
  assert.equal(todas.length, 28);
  assert.equal(new Set(todas.map((p) => p.join('-'))).size, 28);
  assert.equal(somaMao(todas), 168);
  assert.equal(todas.filter((p) => p[0] === p[1]).length, 7);
});

test('dominó: 7 pedras para cada um, 14 no monte, e sai a carroça mais alta', () => {
  for (const x0 of [1, 7, 42, 99, 2026]) {
    const s = createInitialState(100, semente(x0));
    assert.equal(s.maos[0].length, 7);
    assert.equal(s.maos[1].length, 7);
    assert.equal(s.monte.length, 14);
    assert.equal(new Set([...s.maos[0], ...s.maos[1], ...s.monte].map((p) => p.join('-'))).size, 28);
    const carrocas = [...s.maos[0], ...s.maos[1]].filter((p) => p[0] === p[1]).map((p) => p[0]);
    if (carrocas.length) {
      const maior = Math.max(...carrocas);
      assert.deepEqual(s.saidaObrigatoria, [maior, maior]);
      assert.ok(s.maos[s.turn].some((p) => p[0] === maior && p[1] === maior), 'quem sai tem a carroça');
      // o primeiro lance só pode ser essa carroça
      const lances = lancesLegais(s);
      assert.equal(lances.length, 1);
      assert.deepEqual(s.maos[s.turn][lances[0]!.i], [maior, maior]);
    }
  }
});

test('dominó: o mesmo sorteio dá a mesma distribuição (aleatoriedade injetável)', () => {
  assert.deepEqual(createInitialState(100, semente(5)).maos, createInitialState(100, semente(5)).maos);
  assert.notDeepEqual(createInitialState(100, semente(5)).maos, createInitialState(100, semente(6)).maos);
});

test('dominó: a pedra encosta pelo número igual e vira para ficar certa na linha', () => {
  const s = mesa([[[2, 5], [1, 3], [4, 6]], [[0, 0]]], [[3, 5]]);
  assert.deepEqual(pontas(s), [3, 5]);
  assert.deepEqual(ladosPossiveis(s, [2, 5]), ['dir']);
  assert.deepEqual(ladosPossiveis(s, [1, 3]), ['esq']);
  assert.deepEqual(ladosPossiveis(s, [4, 6]), []);
  const a = jogar(s, 0, 'dir');
  assert.deepEqual(pontas(a), [3, 2]);
  assert.deepEqual(a.linha.at(-1), { a: 5, b: 2, por: 0, ordem: 1 });
  assert.equal(a.turn, 1);
  const b = jogar({ ...a, turn: 0 }, 0, 'esq');
  assert.deepEqual(pontas(b), [1, 2]);
  assert.equal(b.origem, 1, 'a primeira pedra andou uma casa para a direita');
  // lance que não vale não muda nada
  assert.equal(jogar(s, 2, 'dir'), s);
  assert.equal(jogar(s, 0, 'esq'), s);
});

test('dominó: pontas iguais contam como uma só', () => {
  const s = mesa([[[4, 1]], [[0, 0]]], [[4, 2], [2, 4]]);
  assert.deepEqual(ladosPossiveis(s, [4, 1]), ['dir']);
});

test('dominó: sem pedra que sirva, compra do monte até poder jogar; a vez não passa', () => {
  const s = mesa([[[0, 1]], [[6, 6]]], [[5, 5]], [[2, 2], [5, 3], [4, 4]]);
  assert.equal(lancesLegais(s).length, 0);
  assert.ok(podeComprar(s));
  assert.ok(!podePassar(s));
  const a = comprar(s);
  assert.equal(a.turn, 0);
  assert.equal(a.maos[0].length, 2);
  assert.equal(a.monte.length, 2);
  assert.deepEqual(a.semNumero[0], [5], 'mostrou que não tem 5');
  assert.equal(lancesLegais(a).length, 0, 'a 2-2 não serve');
  const b = comprar(a);
  assert.deepEqual(b.maos[0].at(-1), [5, 3]);
  assert.ok(lancesLegais(b).length > 0);
  assert.equal(comprar(b), b, 'com pedra que serve, não pode comprar');
});

test('dominó: monte vazio e nada que sirva, passa a vez', () => {
  const s = mesa([[[0, 1], [0, 2]], [[6, 3], [1, 1]]], [[6, 5]]);
  assert.ok(podePassar(s));
  const a = passar(s);
  assert.equal(a.turn, 1);
  assert.equal(a.fimRodada, null);
  assert.equal(passar(a), a, 'quem tem pedra que serve não passa');
});

test('dominó: bater dá os pontos da mão do outro', () => {
  const s = mesa([[[5, 2]], [[6, 6], [1, 0]]], [[3, 5]]);
  const a = jogar(s, 0, 'dir');
  assert.equal(a.fimRodada?.tipo, 'batida');
  assert.equal(a.fimRodada?.vencedor, 0);
  assert.equal(a.fimRodada?.pontos, 13);
  assert.deepEqual(a.placar, [13, 0]);
  assert.equal(a.winner, null);
  assert.deepEqual(lancesLegais(a), [], 'rodada acabou: ninguém joga');
});

test('dominó: jogo trancado, ganha quem tem menos pontos e leva os do outro; empate não marca', () => {
  // pontas 6 e 6 depois do lance; ninguém tem 6 e o monte está vazio
  const s = mesa([[[6, 4], [0, 1]], [[2, 3], [5, 5]]], [[6, 4]]);
  const a = jogar(s, 0, 'dir');
  assert.deepEqual(pontas(a), [6, 6]);
  assert.equal(a.fimRodada?.tipo, 'trancado');
  assert.deepEqual(a.fimRodada?.somas, [1, 15]);
  assert.equal(a.fimRodada?.vencedor, 0);
  assert.equal(a.fimRodada?.pontos, 15);
  const e = jogar(mesa([[[6, 4], [2, 3]], [[0, 5]]], [[6, 4]]), 0, 'dir');
  assert.equal(e.fimRodada?.tipo, 'trancado');
  assert.equal(e.fimRodada?.vencedor, null);
  assert.equal(e.fimRodada?.pontos, 0);
  assert.deepEqual(e.placar, [0, 0]);
});

test('dominó: a partida acaba quando alguém chega ao alvo; senão vem a próxima rodada', () => {
  const s = { ...mesa([[[5, 2]], [[6, 6], [1, 0]]], [[3, 5]]), placar: [90, 40] as [number, number] };
  const fim = jogar(s, 0, 'dir');
  assert.equal(fim.winner, 0);
  assert.equal(proximaRodada(fim), fim, 'partida acabou: sem nova rodada');
  const meio = jogar(mesa([[[5, 2]], [[1, 0]]], [[3, 5]]), 0, 'dir');
  assert.equal(meio.winner, null);
  const r = proximaRodada(meio, semente(3));
  assert.equal(r.rodada, 3);
  assert.equal(r.turn, 0, 'quem ganhou começa');
  assert.equal(r.saidaObrigatoria, null, 'com qualquer pedra');
  assert.equal(r.linha.length, 0);
  assert.equal(r.maos[0].length + r.maos[1].length + r.monte.length, 28);
  assert.equal(lancesLegais(r).length, 7);
});

test('dominó: alvo só muda antes do primeiro lance', () => {
  const s = createInitialState(100, semente(1));
  assert.equal(comAlvo(s, 50).alvo, 50);
  const l = lancesLegais(s)[0]!;
  const a = jogar(s, l.i, l.lado);
  assert.equal(comAlvo(a, 50), a);
});

test('dominó: a visão de um jogador não mostra a mão do outro nem o monte', () => {
  const s = createInitialState(100, semente(11));
  const v = visaoDe(s, 1);
  assert.deepEqual(v.mao, s.maos[1]);
  assert.equal(v.pedrasDoOutro, 7);
  assert.equal(v.noMonte, 14);
  assert.ok(!JSON.stringify(v).includes(JSON.stringify(s.maos[0])));
});

test('dominó: partidas inteiras ao acaso sempre terminam e os pontos batem', () => {
  for (const x0 of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) {
    const r = semente(x0);
    let s = createInitialState(100, r);
    for (let k = 0; k < 2000 && s.winner === null; k++) {
      if (s.fimRodada) {
        const f = s.fimRodada;
        if (f.tipo === 'batida') assert.equal(s.maos[f.vencedor!].length, 0);
        s = proximaRodada(s, r);
        continue;
      }
      const ls = lancesLegais(s);
      const antes = s;
      if (ls.length) {
        const l = ls[Math.floor(r() * ls.length)]!;
        s = jogar(s, l.i, l.lado);
      } else if (podeComprar(s)) s = comprar(s);
      else s = passar(s);
      assert.notEqual(s, antes, 'toda vez acontece alguma coisa');
      // as 28 pedras estão sempre em algum lugar, sem repetir
      assert.equal(s.maos[0].length + s.maos[1].length + s.monte.length + s.linha.length, 28);
    }
    assert.notEqual(s.winner, null, 'a partida termina');
    assert.ok(s.placar[s.winner!] >= 100);
  }
});
