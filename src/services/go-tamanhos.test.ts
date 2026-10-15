import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contarArea, createInitialState, encerrar, jogar, passar, type GoState } from './go-engine';

/** Joga uma sequência de pontos (linha, coluna), alternando as cores, num tabuleiro n×n. */
function partida(n: number, lances: [number, number][]): GoState {
  let s = createInitialState(n);
  for (const [l, c] of lances) {
    const s2 = jogar(s, l * n + c);
    assert.notEqual(s2, s, `lance (${l},${c}) devia valer no ${n}×${n}`);
    s = s2;
  }
  return s;
}

for (const n of [9, 13, 19]) {
  test(`go ${n}×${n}: tabuleiro vazio do tamanho certo`, () => {
    const s = createInitialState(n);
    assert.equal(s.tamanho, n);
    assert.equal(s.board.length, n * n);
  });

  test(`go ${n}×${n}: captura no canto do outro lado (a última linha e coluna existem)`, () => {
    const u = n - 1;
    // brancas no canto (u,u), pretas em (u-1,u) e (u,u-1)
    const s = partida(n, [
      [u - 1, u],
      [u, u],
      [u, u - 1],
    ]);
    assert.equal(s.board[u * n + u], null);
    assert.equal(s.capturas.b, 1);
  });

  test(`go ${n}×${n}: a contagem de área cobre o tabuleiro todo`, () => {
    // uma pedra preta só: todo o território é das pretas
    let s = partida(n, [[0, 0]]);
    s = passar(passar(s));
    const area = contarArea(s.board, n);
    assert.equal(area.b, n * n);
    assert.equal(area.w, 0);
    const fim = encerrar(s);
    assert.equal(fim.fase, 'fim');
  });
}
