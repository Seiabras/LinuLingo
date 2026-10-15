import { test } from 'node:test';
import assert from 'node:assert/strict';
import { decidir, decisaoDoLinu, jogarDaMao, novaRodada, podePedirKoi, pontosDe, yakusDe, type EstadoHana } from './hanafuda-engine';

// ids: (mês − 1) × 4 + posição. Cortina 8, lua cheia 28, copo de saquê 32.
const CORTINA = 8;
const LUA = 28;
const SAQUE = 32;

/** gerador repetível (um rng constante faria a distribuição se repetir para sempre) */
function semente(n: number) {
  let a = n >>> 0;
  return () => {
    a = (a * 1664525 + 1013904223) >>> 0;
    return a / 4294967296;
  };
}

/** Uma mesa montada à mão, na vez do jogador 0. */
function mesa(extra: Partial<EstadoHana>): EstadoHana {
  return { ...novaRodada(semente(1), 0), fase: 'jogar', resultado: null, vez: 0, ...extra };
}

test('Koi-Koi de regras curtas: os yaku do saquê não contam', () => {
  const ids = [SAQUE, CORTINA, LUA];
  assert.deepEqual(
    yakusDe(ids).map((y) => y.id),
    ['hanami', 'tsukimi'],
  );
  assert.equal(pontosDe(ids), 10);
  assert.deepEqual(yakusDe(ids, true), []);
  assert.equal(pontosDe(ids, true), 0);
  // os outros yaku seguem valendo: as três fitas de poema
  assert.deepEqual(
    yakusDe([1, 5, 9], true).map((y) => y.id),
    ['akatan'],
  );
});

test('Koi-Koi de regras curtas: a rodada nova guarda a regra', () => {
  assert.equal(novaRodada(semente(2), 0, true).curtas, true);
  assert.equal(novaRodada(semente(2), 0).curtas, false);
});

test('Koi-Koi de regras curtas: quem já pediu koi-koi e forma outro yaku para na hora', () => {
  // fitas de poema (5 pts) já marcadas, com koi-koi pedido; leva a terceira fita azul (37, bordo) com o bordo 38
  const base = {
    maos: [[37, 0], [2, 3]] as [number[], number[]],
    campo: [38],
    monte: [44, 45],
    capturas: [[1, 5, 9, 21, 33], []] as [number[], number[]],
    koi: [1, 0] as [number, number],
    marcados: [5, 0] as [number, number],
  };
  const curta = jogarDaMao(mesa({ ...base, curtas: true }), 37);
  assert.equal(curta.fase, 'fim');
  assert.equal(curta.resultado!.vencedor, 0);
  assert.equal(curta.resultado!.motivo, 'parou');
  // na regra de sempre, pode pedir koi-koi de novo
  const livre = jogarDaMao(mesa(base), 37);
  assert.equal(livre.fase, 'decidir');
});

test('Koi-Koi de regras curtas: o primeiro koi-koi vale; pedir de novo vira parar', () => {
  const primeiro = mesa({ fase: 'decidir', curtas: true, capturas: [[1, 5, 9], []], maos: [[0], [2]] });
  assert.equal(podePedirKoi(primeiro), true);
  const seguiu = decidir(primeiro, 'koikoi');
  assert.equal(seguiu.koi[0], 1);
  assert.equal(seguiu.fase, 'jogar');
  const segundo = { ...primeiro, koi: [1, 0] as [number, number] };
  assert.equal(podePedirKoi(segundo), false);
  assert.equal(decidir(segundo, 'koikoi').fase, 'fim');
  assert.equal(decisaoDoLinu({ ...segundo, vez: 0 }), 'parar');
});
