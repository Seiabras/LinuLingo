import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, jogar, passar, type GoState, type Ponto } from './go-engine';
import { lanceGo } from './go-ia';

const comPedras = (n: number, pretas: number[], brancas: number[], turn: 'b' | 'w'): GoState => {
  const s = createInitialState(n);
  const board: Ponto[] = s.board.slice();
  for (const i of pretas) board[i] = 'b';
  for (const i of brancas) board[i] = 'w';
  return { ...s, board, turn, vistas: [board.map((p) => p ?? '.').join('')] };
};

test('Linu no go: captura a pedra em atari', () => {
  // branca em (4,4) cercada por pretas em 3 lados; a última liberdade é (4,5) = 41
  const s = comPedras(9, [31, 39, 49, 20, 60], [40, 70], 'b');
  assert.equal(lanceGo(s, 'medio'), 41);
});

test('Linu no go: tira o próprio grupo do atari', () => {
  // preta em (4,4) com brancas em cima, embaixo e à esquerda: a única liberdade é (4,5) = 41
  const s = comPedras(9, [40, 10, 70], [31, 49, 39], 'b');
  assert.equal(lanceGo(s, 'medio'), 41);
});

test('Linu no go: uma partida inteira Linu contra Linu acaba na contagem, com jogadas que valem e rápidas', () => {
  for (const n of [9, 13]) {
    let s = createInitialState(n);
    let pior = 0;
    for (let k = 0; k < n * n * 2 && s.fase === 'jogando'; k++) {
      const t0 = Date.now();
      const m = lanceGo(s, s.turn === 'b' ? 'dificil' : 'facil', () => 0.37);
      pior = Math.max(pior, Date.now() - t0);
      const nx = m === 'passe' ? passar(s) : jogar(s, m);
      assert.notEqual(nx, s, `${n}: jogada que não vale (${m})`);
      s = nx;
    }
    console.log(`go ${n}x${n}, pior jogada:`, pior, 'ms; fase:', s.fase, '; pedras:', s.board.filter(Boolean).length);
    assert.equal(s.fase, 'contagem', `${n}: a partida não chegou à contagem`);
    assert.ok(pior < 4000, `${n}: demorou ${pior} ms`);
  }
});
