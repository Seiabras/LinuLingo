import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ACAMPAMENTO, LADO, PECAS, chegou, createInitialState, idx, jogar, lancesDaPeca, lancesLegais, type HalmaState, type JogadorH } from './halma-engine';
import { lanceHalma } from './halma-ia';

const vazio = (vez: JogadorH = 0): HalmaState => ({ ...createInitialState(vez), casas: Array(LADO * LADO).fill(null) });

test('16×16, acampamentos de 19 casas em cantos opostos', () => {
  assert.equal(ACAMPAMENTO[0].length, 19);
  assert.equal(ACAMPAMENTO[1].length, 19);
  assert.ok(ACAMPAMENTO[1].includes(idx(0, 0)) && ACAMPAMENTO[0].includes(idx(15, 15)));
  const s = createInitialState();
  assert.equal(s.casas.filter((c) => c === 0).length, PECAS);
  assert.ok(lancesLegais(s).length > 0);
});

test('passo em 8 direções; saltos em cadeia sobre qualquer cor; nada é capturado', () => {
  const s = vazio();
  s.casas[idx(8, 8)] = 0;
  assert.equal(lancesDaPeca(s.casas, idx(8, 8)).length, 8);
  s.casas[idx(8, 9)] = 1;
  s.casas[idx(8, 11)] = 0;
  const l = lancesDaPeca(s.casas, idx(8, 8));
  const duplo = l.find((x) => x.para === idx(8, 12));
  assert.ok(duplo, 'devia saltar duas vezes');
  assert.deepEqual(duplo!.caminho, [idx(8, 10), idx(8, 12)]);
  const t = jogar(s, duplo!);
  assert.equal(t.casas[idx(8, 9)], 1);
  assert.equal(t.casas[idx(8, 12)], 0);
});

test('vence quem leva as 19 ao canto oposto, ou enche o canto tendo pelo menos uma lá', () => {
  const s = vazio();
  const vaga = idx(4, 1);
  ACAMPAMENTO[1].forEach((i) => (s.casas[i] = i === vaga ? null : 0));
  s.casas[idx(5, 1)] = 0;
  assert.ok(!chegou(s.casas, 0));
  const lance = lancesDaPeca(s.casas, idx(5, 1)).find((x) => x.para === vaga);
  assert.ok(lance);
  assert.equal(jogar(s, lance!).vencedor, 0);
  const b = vazio();
  ACAMPAMENTO[1].forEach((i, k) => (b.casas[i] = k < 3 ? 0 : 1));
  assert.ok(chegou(b.casas, 0));
});

test('o Linu avança, nos três níveis, rápido', () => {
  for (const n of ['facil', 'medio', 'dificil'] as const) {
    let s = createInitialState(1);
    for (let k = 0; k < 6; k++) {
      const t0 = Date.now();
      const l = lanceHalma(s, n)!;
      assert.ok(Date.now() - t0 < 2000);
      s = jogar(s, l);
      const r = lancesLegais(s)[0]!;
      s = jogar(s, r);
    }
  }
  // o médio sempre leva uma peça para mais perto
  const s = createInitialState(1);
  const l = lanceHalma(s, 'medio')!;
  const [r0, c0] = [Math.floor(l.de / 16), l.de % 16];
  const [r1, c1] = [Math.floor(l.para / 16), l.para % 16];
  assert.ok(r1 + c1 > r0 + c0);
});
