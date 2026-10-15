import { test } from 'node:test';
import assert from 'node:assert/strict';
import { colunasDe, createInitialState, dropPiece, legalCols, linhasDe } from './conecta4-engine';
import { BUSCA_CONECTA4, escolherLance, NIVEIS } from './jogos-ia';

for (const [cols, rows] of [
  [6, 5],
  [7, 6],
  [8, 7],
  [9, 7],
] as const) {
  test(`ligue 4 ${cols}×${rows}: tamanho, coluna cheia e quatro na última coluna`, () => {
    let s = createInitialState(cols, rows);
    assert.equal(colunasDe(s.board), cols);
    assert.equal(linhasDe(s.board), rows);
    assert.equal(legalCols(s).length, cols);
    // enche a primeira coluna alternando as cores
    for (let k = 0; k < rows; k++) s = dropPiece(s, 0);
    assert.ok(!legalCols(s).includes(0), 'coluna cheia');
    // o vermelho faz quatro na vertical na última coluna (o amarelo joga na penúltima)
    let t = createInitialState(cols, rows);
    for (let k = 0; k < 4; k++) {
      t = dropPiece(t, cols - 1);
      if (k < 3) t = dropPiece(t, cols - 2);
    }
    assert.equal(t.winner, 'r');
  });

  test(`ligue 4 ${cols}×${rows}: o Linu tapa a ameaça e pensa rápido no difícil`, () => {
    let s = createInitialState(cols, rows);
    // o vermelho com três no fundo, nas colunas 0, 1 e 2 (o amarelo por cima de cada uma); depois o
    // vermelho joga longe e é a vez do amarelo, que precisa tapar a coluna 3
    for (const c of [0, 1, 2]) s = dropPiece(dropPiece(s, c), c);
    s = dropPiece(s, cols - 1);
    assert.equal(s.turn, 'y');
    const prof = NIVEIS.conecta4.dificil.prof - Math.max(0, cols - 7);
    const t0 = Date.now();
    const m = escolherLance(s, prof, BUSCA_CONECTA4, 0);
    const ms = Date.now() - t0;
    console.log(`ligue 4 ${cols}×${rows} difícil: ${ms} ms`);
    assert.equal(m, 3, 'tapou a coluna 3');
    assert.ok(ms < 4000, `demorou ${ms} ms`);
  });
}
