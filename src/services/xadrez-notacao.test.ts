import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, makeMove, type ChessState } from './xadrez-engine';
import { notacao } from './xadrez-notacao';

/** "e2" → {row, col} */
const sq = (s: string) => ({ row: 8 - Number(s[1]), col: 'abcdefgh'.indexOf(s[0]!) });

function jogarTudo(lances: string[]): string[] {
  let s: ChessState = createInitialState();
  const out: string[] = [];
  for (const l of lances) {
    const [de, para] = l.split('-');
    const depois = makeMove(s, sq(de!), sq(para!));
    assert.notEqual(depois, s, `${l} devia ser legal`);
    out.push(notacao(s, depois.history[depois.history.length - 1]!, depois));
    s = depois;
  }
  return out;
}

test('notação: mate do pastor, com as letras em português', () => {
  assert.deepEqual(jogarTudo(['e2-e4', 'e7-e5', 'f1-c4', 'b8-c6', 'd1-h5', 'g8-f6', 'h5-f7']), ['e4', 'e5', 'Bc4', 'Cc6', 'Dh5', 'Cf6', 'Dxf7#']);
});

test('notação: roque pequeno', () => {
  const l = jogarTudo(['g1-f3', 'g8-f6', 'e2-e3', 'e7-e6', 'f1-e2', 'f8-e7', 'e1-g1']);
  assert.equal(l[6], 'O-O');
});

test('notação: dois cavalos podem ir para a mesma casa, entra a coluna de saída', () => {
  const l = jogarTudo(['g1-h3', 'g8-f6', 'h3-f4', 'b8-c6', 'b1-c3', 'a7-a6', 'c3-d5']);
  assert.deepEqual(l, ['Ch3', 'Cf6', 'Cf4', 'Cc6', 'Cc3', 'a6', 'Ccd5']);
});
