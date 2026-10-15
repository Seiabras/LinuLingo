import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as G from './gamao-engine';
import { avaliarGamao, lanceGamao } from './jogos-ia';

test('Linu no gamão: na abertura 3-1 faz o ponto 5 (8/5 6/5)', () => {
  const s = G.rolarCom(G.createInitialState(), 3, 1);
  for (const nivel of ['medio', 'dificil'] as const) {
    let e = s;
    for (const p of lanceGamao(s, nivel)) e = G.jogarPasso(e, p.de, p.dado);
    assert.equal(e.pts[4], 2, `${nivel}: fez o ponto 5`);
  }
});

test('Linu no gamão: bate a peça sozinha quando pode', () => {
  // escuras (Linu) com uma peça no índice 10 e duas no 20; uma clara sozinha no índice 13
  const pts = Array(24).fill(0) as number[];
  pts[13] = 1;
  pts[2] = 14;
  pts[10] = -1;
  pts[20] = -14;
  const s = G.rolarCom({ ...G.createInitialState(), pts, fase: 'rolar', turn: 'p' }, 3, 6);
  const passos = lanceGamao(s, 'medio');
  assert.ok(passos.some((p) => p.bateu), 'bateu a clara');
});

test('Linu no gamão: partida Linu contra Linu só tem lances que valem, e o difícil pensa rápido', () => {
  let semente = 3;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = G.createInitialState();
  let pior = 0;
  for (let k = 0; k < 2000 && s.winner === null; k++) {
    if (s.fase === 'abrir' || s.fase === 'rolar') {
      s = G.rolar(s, sorteio);
      continue;
    }
    const t0 = Date.now();
    const passos = lanceGamao(s, s.turn === 'w' ? 'dificil' : 'facil', sorteio);
    pior = Math.max(pior, Date.now() - t0);
    for (const p of passos) {
      const e = G.jogarPasso(s, p.de, p.dado);
      assert.notEqual(e, s, 'o passo do Linu vale');
      s = e;
    }
    if (s.winner === null) s = G.passarVez(s);
  }
  assert.ok(s.winner !== null, 'a partida terminou');
  console.log('gamão difícil, pior lance:', pior, 'ms; venceu', s.winner, s.vitoria);
  assert.ok(pior < 3000, `demorou ${pior} ms`);
  assert.ok(avaliarGamao(s, s.winner!) > 0);
});
