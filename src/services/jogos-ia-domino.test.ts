import { test } from 'node:test';
import assert from 'node:assert/strict';
import { lanceDomino } from './jogos-ia';
import * as D from './domino-engine';
import type { NivelLinu } from './jogos-prefs';

// sorteio repetível, para o teste dar sempre o mesmo resultado
const semente = (x0 = 7) => {
  let x = x0;
  return () => (x = (x * 9301 + 49297) % 233280) / 233280;
};

/** Uma partida inteira: o jogador 0 num nível, o 1 em outro. Devolve quem venceu. */
function partida(n0: NivelLinu, n1: NivelLinu, x0: number): D.Jogador {
  const r = semente(x0);
  let s = D.createInitialState(100, r);
  for (let k = 0; k < 3000 && s.winner === null; k++) {
    if (s.fimRodada) {
      s = D.proximaRodada(s, r);
      continue;
    }
    const l = lanceDomino(D.visaoDe(s, s.turn), s.turn === 0 ? n0 : n1, r);
    if (l) {
      assert.ok(D.lancesLegais(s).some((m) => m.i === l.i && m.lado === l.lado), 'o Linu só faz lance que vale');
      s = D.jogar(s, l.i, l.lado);
    } else s = D.podeComprar(s) ? D.comprar(s) : D.passar(s);
  }
  assert.notEqual(s.winner, null);
  return s.winner!;
}

test('Linu no dominó: sem lance, devolve null (aí compra ou passa)', () => {
  const s = D.createInitialState(100, semente(3));
  assert.equal(lanceDomino(D.visaoDe(s, D.outro(s.turn)), 'dificil'), null);
});

test('Linu no dominó: no médio, livra-se da pedra mais pesada', () => {
  const s: D.DominoState = {
    ...D.createInitialState(100, semente(1)),
    maos: [[[1, 2], [6, 5], [0, 5]], [[3, 3]]],
    linha: [{ a: 5, b: 4, por: 1, ordem: 0 }],
    origem: 0,
    turn: 0,
    saidaObrigatoria: null,
  };
  const l = lanceDomino(D.visaoDe(s, 0), 'medio', () => 0)!;
  assert.equal(l.i, 1);
});

test('Linu no dominó: no difícil, deixa nas pontas o número que você mostrou que não tem', () => {
  const s: D.DominoState = {
    ...D.createInitialState(100, semente(1)),
    maos: [[[4, 1], [4, 2]], [[3, 3], [0, 0]]],
    linha: [{ a: 4, b: 4, por: 1, ordem: 0 }],
    origem: 0,
    turn: 0,
    saidaObrigatoria: null,
    semNumero: [[], [1]],
  };
  const l = lanceDomino(D.visaoDe(s, 0), 'dificil', () => 0)!;
  assert.equal(l.i, 0, 'joga a 4-1, que deixa o 1 na ponta');
});

test('Linu no dominó: o difícil vence o fácil na maioria das partidas, e decide na hora', () => {
  let vitorias = 0;
  const t0 = Date.now();
  for (let x0 = 1; x0 <= 40; x0++) if (partida('dificil', 'facil', x0) === 0) vitorias++;
  assert.ok(Date.now() - t0 < 5000, `demorou ${Date.now() - t0} ms`);
  assert.ok(vitorias >= 24, `o difícil venceu só ${vitorias} de 40`);
});
