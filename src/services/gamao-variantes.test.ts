import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as G from './gamao-engine';
import { lanceGamao } from './jogos-ia';

/** Uma posição montada à mão na regra dada, já na fase de mover. */
function posicao(regra: G.RegraG, pecas: Record<number, number>, extra: Partial<G.GamaoState> = {}, dados: [number, number] = [1, 2]): G.GamaoState {
  const pts = Array(24).fill(0) as number[];
  for (const [i, n] of Object.entries(pecas)) pts[Number(i)] = n;
  return G.rolarCom({ ...G.createInitialState(regra), pts, fase: 'rolar', turn: 'w', ...extra }, dados[0], dados[1]);
}

test('hypergammon: 3 peças de cada lado nos pontos 24, 23 e 22', () => {
  const s = G.createInitialState('hypergammon');
  assert.deepEqual([s.pts[23], s.pts[22], s.pts[21]], [1, 1, 1]);
  assert.deepEqual([s.pts[0], s.pts[1], s.pts[2]], [-1, -1, -1]);
  assert.equal(s.pts.filter((n) => n !== 0).length, 6);
  assert.equal(G.pecasDa(s), 3);
  assert.equal(G.pips(s, 'w'), 24 + 23 + 22);
});

test('hypergammon: vence quem tira as 3 peças', () => {
  // a última clara no ponto 1, as outras duas já fora
  const s = posicao('hypergammon', { 0: 1, 20: -1, 21: -1, 22: -1 }, { fora: { w: 2, p: 0 } }, [1, 3]);
  const f = G.jogarPasso(s, 0, 3);
  assert.equal(f.winner, 'w');
  // as escuras não tiraram nenhuma e não estão na casa das claras: gamão (2)
  assert.equal(f.pontos, 2);
});

test('tavla: quem ganha a abertura rola de novo (a primeira jogada pode ser dupla)', () => {
  let s = G.createInitialState('tavla');
  s = G.rolarCom(s, 5, 2);
  assert.equal(s.fase, 'rolar');
  assert.equal(s.turn, 'w');
  s = G.rolarCom(s, 4, 4);
  assert.deepEqual(s.restam, [4, 4, 4, 4]);
  // no gamão, a abertura já é a jogada
  assert.equal(G.rolarCom(G.createInitialState(), 5, 2).fase, 'mover');
});

test('tavla: dentro da própria casa, a peça que bate não segue em frente na mesma vez', () => {
  // clara no ponto 6 (índice 5) bate a escura sozinha no ponto 4 (índice 3) com o 2; depois tem o 1
  const s = posicao('tavla', { 5: 1, 3: -1, 12: 2, 20: -14 }, {}, [2, 1]);
  const f = G.jogarPasso(s, 5, 2);
  assert.equal(f.bar.p, 1);
  assert.ok(!G.passosLegais(f).some((p) => p.de === 3), 'a peça que bateu (índice 3) não anda mais');
  assert.ok(G.passosLegais(f).some((p) => p.de === 12), 'outra peça pode usar o 1');
  // no gamão, a mesma peça pode seguir
  const g = G.jogarPasso(posicao('', { 5: 1, 3: -1, 12: 2, 20: -14 }, {}, [2, 1]), 5, 2);
  assert.ok(G.passosLegais(g).some((p) => p.de === 3));
});

test('tavla: não existe o backgammon (a vitória vale no máximo 2)', () => {
  // claras tiram a última peça; uma escura ainda na casa das claras
  const s = posicao('tavla', { 0: 1, 2: -1, 20: -14 }, { fora: { w: 14, p: 0 } }, [1, 2]);
  const f = G.jogarPasso(s, 0, 2);
  assert.equal(f.winner, 'w');
  assert.equal(f.vitoria, 'gamao');
  assert.equal(f.pontos, 2);
  const g = G.jogarPasso(posicao('', { 0: 1, 2: -1, 20: -14 }, { fora: { w: 14, p: 0 } }, [1, 2]), 0, 2);
  assert.equal(g.vitoria, 'backgammon');
});

test('hypergammon e tavla: o Linu só joga lances que valem', () => {
  let semente = 9;
  const sorteio = () => (semente = (semente * 16807) % 2147483647) / 2147483647;
  for (const regra of ['hypergammon', 'tavla'] as const) {
    let s = G.createInitialState(regra);
    for (let k = 0; k < 3000 && s.winner === null; k++) {
      if (s.fase === 'abrir' || s.fase === 'rolar') {
        s = G.rolar(s, sorteio);
        continue;
      }
      const passos = lanceGamao(s, 'medio', sorteio);
      for (const p of passos) {
        const e = G.jogarPasso(s, p.de, p.dado);
        assert.notEqual(e, s, `${regra}: o passo do Linu vale`);
        s = e;
      }
      if (s.winner === null) s = G.passarVez(s);
    }
    assert.notEqual(s.winner, null, `${regra}: a partida acabou`);
  }
});
