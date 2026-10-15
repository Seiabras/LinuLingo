import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as Y from './yut-engine';
import { lanceYut } from './yut-ia';
import { lotesCom } from './lotes';

/** varetas com `k` lados chatos para cima (0 = mo) */
const varetas = (k: number) => lotesCom(4, k);

function comPecas(a: Y.Mal[], b: Y.Mal[], turn: Y.LadoY = 0): Y.YutState {
  const base = Y.createInitialState();
  const encher = (x: Y.Mal[]) => [...x, ...Array.from({ length: Y.PECAS - x.length }, () => ({ casa: Y.FORA, rota: 'fora' as Y.Rota }))];
  return { ...base, mal: [encher(a), encher(b)], turn };
}

test('Yut: 29 casas, e os resultados do, gae, geol, yut e mo', () => {
  assert.equal(new Set(Y.COORD.map((c) => `${c.x.toFixed(2)},${c.y.toFixed(2)}`)).size, 29);
  assert.equal(Y.resultadoDas(varetas(1)), 1);
  assert.equal(Y.resultadoDas(varetas(4)), 4);
  assert.equal(Y.resultadoDas(varetas(0)), 5, 'nenhuma chata: mo');
});

test('Yut: yut e mo dão outro lançamento; os resultados se acumulam', () => {
  let s = Y.lancarCom(Y.createInitialState(), varetas(4));
  assert.equal(s.fase, 'lancar');
  s = Y.lancarCom(s, varetas(2));
  assert.equal(s.fase, 'mover');
  assert.deepEqual(s.pendentes, [4, 2]);
});

test('Yut: parar no canto abre o atalho pela diagonal', () => {
  // mo (5, lança de novo) e do (1): a peça nova anda 5 e cai no canto
  let s = Y.lancarCom(Y.lancarCom(Y.createInitialState(), varetas(0)), varetas(1));
  s = Y.jogar(s, { de: Y.FORA, valor: 5, rota: 'fora' });
  assert.equal(s.mal[0][0]!.casa, 5);
  s = Y.lancarCom({ ...s, turn: 0, fase: 'lancar', pendentes: [] }, varetas(3));
  const lances = Y.lancesLegais(s).filter((l) => l.de === 5);
  assert.deepEqual(lances.map((l) => l.rota).sort(), ['A', 'fora']);
  const pelaDiagonal = Y.jogar(s, lances.find((l) => l.rota === 'A')!);
  assert.equal(pelaDiagonal.mal[0][0]!.casa, Y.MEIO, '3 pela diagonal: o meio');
});

test('Yut: juntar peças (업기) e capturar (com outro lançamento)', () => {
  const s = Y.lancarCom(comPecas([{ casa: 2, rota: 'fora' }, { casa: 4, rota: 'fora' }], [{ casa: 6, rota: 'fora' }]), varetas(2));
  const juntas = Y.jogar(s, { de: 2, valor: 2, rota: 'fora' });
  assert.equal(juntas.mal[0].filter((m) => m.casa === 4).length, 2);
  assert.ok(juntas.ultimo!.juntou);
  // as duas juntas andam 2 e capturam a do adversário na casa 6
  const t = Y.lancarCom({ ...juntas, turn: 0, fase: 'lancar' }, varetas(2));
  const u = Y.jogar(t, { de: 4, valor: 2, rota: 'fora' });
  assert.equal(u.mal[0].filter((m) => m.casa === 6).length, 2);
  assert.equal(u.mal[1][0]!.casa, Y.FORA);
  assert.equal(u.fase, 'lancar');
  assert.equal(u.turn, 0, 'capturou: lança de novo');
});

test('Yut: no 참먹이 a peça ainda não saiu; passando dele, sai', () => {
  const s = Y.lancarCom(comPecas([{ casa: 18, rota: 'fora' }], []), varetas(2));
  assert.equal(Y.jogar(s, { de: 18, valor: 2, rota: 'fora' }).mal[0][0]!.casa, 0, 'parou no 참먹이');
  const t = Y.lancarCom(comPecas([{ casa: 18, rota: 'fora' }], []), varetas(3));
  assert.equal(Y.jogar(t, { de: 18, valor: 3, rota: 'fora' }).mal[0][0]!.casa, Y.SAIU);
});

test('Yut: do meio, o atalho leva direto ao 참먹이', () => {
  const s = Y.lancarCom(comPecas([{ casa: Y.MEIO, rota: 'A' }], []), varetas(3));
  const l = Y.lancesLegais(s).find((x) => x.rota === 'B')!;
  assert.equal(Y.jogar(s, l).mal[0][0]!.casa, 0);
});

test('Linu no yut nori: partida Linu × Linu termina', () => {
  let semente = 3;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = Y.createInitialState();
  for (let k = 0; k < 5000 && s.winner === null; k++) {
    if (s.fase === 'lancar') s = Y.lancar(s, sorteio);
    else s = Y.jogar(s, lanceYut(s, s.turn === 0 ? 'dificil' : 'facil', sorteio)!);
  }
  assert.notEqual(s.winner, null);
});
