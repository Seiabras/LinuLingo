import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as S from './senet-engine';
import { lanceSenet } from './senet-ia';
import { lotesCom } from './lotes';

/** varetas com `k` lados claros (0 = vale 5) */
const varetas = (k: number) => lotesCom(4, k);

function posicao(a: number[], b: number[], turn: S.LadoS = 0): S.SenetState {
  const base = S.createInitialState();
  const encher = (x: number[]) => [...x, ...Array(S.PEOES - x.length).fill(S.FORA)];
  return { ...base, pos: [encher(a), encher(b)], turn };
}

test('Senet: o caminho em zigue-zague e o valor das varetas (nenhum claro vale 5)', () => {
  assert.deepEqual(S.lugarDa(1), { linha: 0, coluna: 0 });
  assert.deepEqual(S.lugarDa(11), { linha: 1, coluna: 9 });
  assert.deepEqual(S.lugarDa(30), { linha: 2, coluna: 9 });
  assert.equal(S.valorVaretas(varetas(0)), 5);
  assert.equal(S.valorVaretas(varetas(3)), 3);
});

test('Senet: entrar põe o peão na casa 1 e anda o número', () => {
  const s = S.mover(S.lancarCom(S.createInitialState(), varetas(2)), S.FORA);
  assert.equal(s.pos[0][0], 3);
  assert.equal(s.turn, 1);
});

test('Senet: captura manda o peão do adversário para a primeira casa vazia', () => {
  const s = S.lancarCom(posicao([5], [8]), varetas(3));
  const t = S.mover(s, 5);
  assert.equal(t.pos[0][0], 8);
  assert.equal(t.pos[1][0], 1);
  assert.equal(t.ultimo!.capturado, 8);
});

test('Senet: a barreira de 3 não se passa', () => {
  const s = S.lancarCom(posicao([4], [6, 7, 8]), varetas(0));
  // 4 + 5 = 9 passaria pela barreira 6-7-8
  assert.ok(!S.origensLegais(s).includes(4));
});

test('Senet: a casa 26 não se pula, e a 27 manda de volta para a 15', () => {
  const s = S.lancarCom(posicao([24], []), varetas(3));
  assert.ok(!S.origensLegais(s).includes(24), '24 + 3 = 27 pularia a 26');
  const t = S.mover(S.lancarCom(posicao([26], []), varetas(1)), 26);
  assert.equal(t.pos[0][0], 15, 'caiu na água e voltou para a 15');
});

test('Senet: 28 sai com 3, 29 com 2, 30 com 1; da 26, o 5 tira do tabuleiro', () => {
  assert.equal(S.destino(posicao([28], []), 28, 3), S.SAIU);
  assert.equal(S.destino(posicao([28], []), 28, 2), null);
  assert.equal(S.destino(posicao([29], []), 29, 2), S.SAIU);
  assert.equal(S.destino(posicao([30], [5]), 30, 1), S.SAIU);
  assert.equal(S.destino(posicao([30], [5]), 30, 4), null);
  assert.equal(S.destino(posicao([30], []), 30, 4), S.SAIU, 'com as casas 1 a 10 vazias, qualquer número tira');
  assert.equal(S.destino(posicao([26], []), 26, 5), S.SAIU);
});

test('Senet: nas casas 28 e 29 o peão não é capturado', () => {
  const s = S.lancarCom(posicao([26], [28]), varetas(2));
  assert.ok(!S.origensLegais(s).includes(26));
});

test('Senet: tirando os 5 peões, vence', () => {
  const s = S.mover(S.lancarCom(posicao([31, 31, 31, 31, 29], [3]), varetas(2)), 29);
  assert.equal(s.winner, 0);
});

test('Linu no senet: partida Linu × Linu termina, só com lances válidos', () => {
  let semente = 5;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = S.createInitialState();
  for (let k = 0; k < 4000 && s.winner === null; k++) {
    if (s.fase === 'lancar') s = S.lancar(s, sorteio);
    else {
      const o = lanceSenet(s, s.turn === 0 ? 'dificil' : 'medio', sorteio);
      assert.notEqual(o, null);
      s = S.mover(s, o!);
    }
  }
  assert.notEqual(s.winner, null);
});
