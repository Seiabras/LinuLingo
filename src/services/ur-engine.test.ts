import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as U from './ur-engine';
import { lanceUr } from './ur-ia';
import { chanceDeMarcados, lotesCom } from './lotes';

test('Ur: 7 peças fora para cada lado, e os 4 dados dão de 0 a 4 (2 é o mais comum)', () => {
  const s = U.createInitialState();
  assert.deepEqual(s.pos, [Array(7).fill(0), Array(7).fill(0)]);
  assert.equal(chanceDeMarcados(4, 2), 6 / 16);
  assert.equal(chanceDeMarcados(4, 0), 1 / 16);
});

test('Ur: o caminho cobre as 20 casas do tabuleiro, e as rosetas ficam nos cantos e no meio', () => {
  const casas = new Set<string>();
  for (const l of [0, 1] as const) for (let p = 1; p <= 14; p++) casas.add(JSON.stringify(U.casaDe(l, p)));
  assert.equal(casas.size, 20);
  assert.deepEqual(U.casaDe(0, 4), { linha: 2, coluna: 0 });
  assert.deepEqual(U.casaDe(1, 8), { linha: 1, coluna: 3 });
  assert.deepEqual(U.casaDe(0, 14), { linha: 2, coluna: 6 });
});

test('Ur: tirar 0 passa a vez; sem lance também', () => {
  const s = U.lancarCom(U.createInitialState(), lotesCom(4, 0));
  assert.equal(s.turn, 1);
  assert.ok(s.passou);
});

test('Ur: entrar com 4 cai na roseta e joga de novo', () => {
  let s = U.lancarCom(U.createInitialState(), lotesCom(4, 4));
  assert.deepEqual(U.origensLegais(s), [0]);
  s = U.mover(s, 0);
  assert.equal(s.pos[0][0], 4);
  assert.equal(s.turn, 0, 'joga de novo');
});

test('Ur: captura na casa de combate, mas não na roseta do meio', () => {
  const base = U.createInitialState();
  const s: U.UrState = { ...base, pos: [[3, 0, 0, 0, 0, 0, 0], [6, 0, 0, 0, 0, 0, 0]], turn: 0 };
  const t = U.mover(U.lancarCom(s, lotesCom(4, 3)), 3);
  assert.equal(t.pos[1][0], 0, 'voltou para o começo');
  assert.ok(t.ultimo!.capturou);
  const u: U.UrState = { ...base, pos: [[5, 0, 0, 0, 0, 0, 0], [8, 0, 0, 0, 0, 0, 0]], turn: 0 };
  const v = U.lancarCom(u, lotesCom(4, 3));
  assert.ok(!U.origensLegais(v).includes(5), 'não pode parar na roseta do meio ocupada');
});

test('Ur: as casas do seu lado são só suas; uma peça por casa; sair só com o número exato', () => {
  const base = U.createInitialState();
  // o lado 1 na sua casa 2 não atrapalha o lado 0 na casa 2 dele
  const s: U.UrState = { ...base, pos: [[0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 0, 0, 0]], turn: 0 };
  assert.deepEqual(U.origensLegais(U.lancarCom(s, lotesCom(4, 2))), [0]);
  const t: U.UrState = { ...base, pos: [[1, 3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], turn: 0 };
  assert.ok(!U.origensLegais(U.lancarCom(t, lotesCom(4, 2))).includes(1), 'não cai em cima da própria peça');
  const u: U.UrState = { ...base, pos: [[13, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]], turn: 0 };
  assert.ok(U.origensLegais(U.lancarCom(u, lotesCom(4, 2))).includes(13), '13 + 2 = 15, sai');
  assert.ok(!U.origensLegais(U.lancarCom(u, lotesCom(4, 3))).includes(13), '13 + 3 passa da saída');
});

test('Ur: tirando as 7 peças, vence', () => {
  const base = U.createInitialState();
  const s: U.UrState = { ...base, pos: [[15, 15, 15, 15, 15, 15, 13], [0, 0, 0, 0, 0, 0, 0]], turn: 0 };
  const t = U.mover(U.lancarCom(s, lotesCom(4, 2)), 13);
  assert.equal(t.winner, 0);
});

test('Linu no Ur: captura quando pode e a partida Linu × Linu termina', () => {
  const base = U.createInitialState();
  const s: U.UrState = U.lancarCom({ ...base, pos: [[3, 0, 0, 0, 0, 0, 0], [6, 0, 0, 0, 0, 0, 0]], turn: 0 }, lotesCom(4, 3));
  assert.equal(lanceUr(s, 'medio'), 3);
  const fim = lancesCom(9);
  assert.notEqual(fim.winner, null);
});

/** Uma partida inteira, Linu contra Linu, com o sorteio fixo pela semente. */
function lancesCom(semente0: number): U.UrState {
  let semente = semente0;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = U.createInitialState();
  for (let k = 0; k < 2000 && s.winner === null; k++) {
    if (s.fase === 'lancar') s = U.lancar(s, sorteio);
    else {
      const o = lanceUr(s, s.turn === 0 ? 'dificil' : 'medio', sorteio);
      if (o === null) throw new Error('fase mover sem lance');
      s = U.mover(s, o);
    }
  }
  return s;
}
