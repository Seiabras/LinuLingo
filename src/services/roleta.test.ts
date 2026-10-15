import { test } from 'node:test';
import assert from 'node:assert/strict';
import { APOSTAS_FORA, CASAS, corDe, esperadoPorFicha, ORDEM_RODA, pleno, retorno, saldoEsperado, sortear, textoChance, tipoDeAposta, VANTAGEM_CASA } from './roleta';

test('roleta: a roda europeia tem 37 casas, de 0 a 36, cada uma uma vez; 18 vermelhas e 18 pretas', () => {
  assert.equal(ORDEM_RODA.length, 37);
  assert.deepEqual([...ORDEM_RODA].sort((a, b) => a - b), Array.from({ length: 37 }, (_, i) => i));
  assert.equal(ORDEM_RODA.filter((n) => corDe(n) === 'vermelho').length, 18);
  assert.equal(ORDEM_RODA.filter((n) => corDe(n) === 'preto').length, 18);
  // na roda, as cores se alternam depois do zero
  for (let i = 1; i < 36; i++) assert.notEqual(corDe(ORDEM_RODA[i]), corDe(ORDEM_RODA[i + 1]));
  // a soma da lenda do François Blanc
  assert.equal(ORDEM_RODA.reduce((s, n) => s + n, 0), 666);
});

test('roleta: toda aposta perde 1/37 por ficha, em média (vantagem da casa de 2,7%)', () => {
  for (const a of [...APOSTAS_FORA, pleno(0), pleno(17)]) {
    assert.ok(Math.abs(esperadoPorFicha(a) + 1 / 37) < 1e-12, a.id);
  }
  assert.equal((VANTAGEM_CASA * 100).toFixed(1), '2.7');
  assert.equal(textoChance(tipoDeAposta('vermelho')!), '18 em 37 (48,6%)');
  assert.equal(textoChance(pleno(7)), '1 em 37 (2,7%)');
});

test('roleta: retorno paga a ficha mais o prêmio; o zero faz as apostas de fora perderem', () => {
  const ap = { vermelho: 10, n7: 2, duzia3: 5 };
  assert.equal(retorno(ap, 7), 10 * 2 + 2 * 36); // 7 é vermelho, 1ª dúzia
  assert.equal(retorno(ap, 30), 10 * 2 + 5 * 3);
  assert.equal(retorno(ap, 0), 0);
  assert.equal(retorno({ n0: 1 }, 0), 36);
  assert.equal(saldoEsperado(100, 37), 99);
});

test('roleta: o sorteio cobre as 37 casas e, em muitas rodadas, o saldo fica perto do esperado', () => {
  let a = 42; // mulberry32, repetível
  const rng = () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const vistos = new Set<number>();
  let saldo = 0;
  const N = 200000;
  for (let i = 0; i < N; i++) {
    const n = sortear(rng);
    vistos.add(n);
    saldo += retorno({ vermelho: 1 }, n) - 1;
  }
  assert.equal(vistos.size, CASAS);
  assert.ok(Math.abs(saldo / N + 1 / 37) < 0.01, `média por rodada ${saldo / N}`);
  assert.equal(sortear(() => 0.999999999), 36);
});
