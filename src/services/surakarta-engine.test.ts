import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CIRCUITOS, LADO, LIMITE_SEM_CAPTURA, capturasDe, createInitialState, idx, jogar, lancesLegais, passosDe, type JogadorS, type SurakartaState } from './surakarta-engine';
import { lanceSurakarta } from './surakarta-ia';

const pos = (pecas: [number, number, JogadorS][], vez: JogadorS = 0): SurakartaState => {
  const s = createInitialState(vez);
  const casas: (JogadorS | null)[] = Array(LADO * LADO).fill(null);
  for (const [r, c, j] of pecas) casas[idx(r, c)] = j;
  return { ...s, casas };
};

test('dois circuitos de 24 posições; 12 peças de cada lado', () => {
  assert.equal(CIRCUITOS.length, 2);
  assert.ok(CIRCUITOS.every((c) => c.length === 24));
  const s = createInitialState();
  assert.equal(s.casas.filter((c) => c === 0).length, 12);
  // no começo ninguém captura: os circuitos estão bloqueados pelas próprias peças
  assert.ok(lancesLegais(s).every((l) => l.corrida === null));
});

test('passo em 8 direções, só para ponto vazio', () => {
  const s = pos([[2, 2, 0], [2, 3, 1]]);
  assert.equal(passosDe(s.casas, idx(2, 2)).length, 7);
});

test('captura só depois de passar por um laço', () => {
  // na mesma linha, sem laço: não captura (o caminho do outro lado está fechado por uma peça sua)
  const reta = pos([[1, 0, 0], [1, 3, 1], [0, 1, 0]]);
  assert.equal(capturasDe(reta.casas, idx(1, 0)).length, 0);
  // pela linha 2 (índice 1) até o fim, laço de cima à direita, desce a coluna 5 (índice 4): captura
  const laco = pos([[1, 0, 0], [3, 4, 1]]);
  const c = capturasDe(laco.casas, idx(1, 0));
  assert.ok(c.some((l) => l.para === idx(3, 4)));
  // e dá a volta inteira pelo outro lado, se o caminho estiver livre
  assert.ok(capturasDe(pos([[1, 0, 0], [1, 3, 1]]).casas, idx(1, 0)).length > 0);
  const t = jogar(laco, c.find((l) => l.para === idx(3, 4))!);
  assert.equal(t.casas[idx(3, 4)], 0);
  assert.equal(t.vencedor, 0);
});

test('o caminho tem de estar vazio, e o ponto de saída conta como vazio', () => {
  const bloqueado = pos([[1, 0, 0], [1, 2, 0], [0, 1, 0], [3, 4, 1]]);
  assert.ok(!capturasDe(bloqueado.casas, idx(1, 0)).some((l) => l.para === idx(3, 4)));
  // a peça na esquina (1,1) passa pela própria casa ao dar a volta
  const volta = pos([[1, 1, 0], [4, 1, 1]]);
  const caps = capturasDe(volta.casas, idx(1, 1));
  assert.ok(caps.length > 0);
});

test('partida parada: depois de 50 lances sem captura, vence quem tem mais peças', () => {
  const s = { ...pos([[0, 0, 0], [0, 5, 0], [5, 5, 1]]), semCaptura: LIMITE_SEM_CAPTURA - 1 };
  const l = lancesLegais(s).find((x) => x.corrida === null)!;
  assert.equal(jogar(s, l).vencedor, 0);
});

test('o Linu captura quando pode e joga rápido', () => {
  const s = pos([[1, 0, 1], [3, 4, 0], [5, 5, 0]], 1);
  for (const n of ['medio', 'dificil'] as const) assert.equal(lanceSurakarta(s, n)?.para, idx(3, 4));
  let e = createInitialState();
  for (let k = 0; k < 40 && e.vencedor === null; k++) {
    const t0 = Date.now();
    const l = lanceSurakarta(e, e.vez === 0 ? 'facil' : 'dificil')!;
    assert.ok(Date.now() - t0 < 2000);
    e = jogar(e, l);
  }
});
