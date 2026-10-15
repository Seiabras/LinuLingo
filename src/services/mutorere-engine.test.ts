import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CENTRO, createInitialState, jogar, lancesDe, lancesLegais, type MuTorereState } from './mutorere-engine';
import { lanceMuTorere, tabelaMT, valorMT } from './mutorere-ia';

const estado = (board: (0 | 1 | null)[], turn: 0 | 1, regra: 'primeiras' | 'sempre' = 'primeiras', lances = 10): MuTorereState => ({
  board,
  turn,
  regra,
  lances,
  winner: null,
  empate: false,
  vistas: {},
  ultimo: null,
});

test('mū tōrere: começo com 4 peças de cada lado nas pontas e o centro vazio', () => {
  const s = createInitialState();
  assert.deepEqual(s.board, [0, 0, 0, 0, 1, 1, 1, 1, null]);
  assert.equal(s.turn, 0);
  // só as peças das pontas do grupo, ao lado do adversário, podem ir para o centro
  assert.deepEqual(lancesLegais(s), [
    { de: 0, para: CENTRO },
    { de: 3, para: CENTRO },
  ]);
});

test('mū tōrere: sem a restrição, quem começa venceria no primeiro lance; com ela, não pode', () => {
  // a peça do meio (1) no centro deixaria o adversário sem lance: é proibido nas duas regras
  const s = createInitialState();
  assert.equal(jogar(s, 1, CENTRO), s);
  const e = createInitialState('sempre');
  assert.equal(jogar(e, 1, CENTRO), e);
});

test('mū tōrere: na regra das primeiras jogadas, a restrição do centro acaba depois de dois lances de cada um', () => {
  const board: (0 | 1 | null)[] = [0, 0, 0, 0, 1, 1, 1, 1, null];
  assert.ok(!lancesDe(board, 0, 'primeiras', 3).some((l) => l.de === 1));
  assert.ok(lancesDe(board, 0, 'primeiras', 4).some((l) => l.de === 1));
  assert.ok(!lancesDe(board, 0, 'sempre', 40).some((l) => l.de === 1));
});

test('mū tōrere: anda para a ponta vizinha vazia ou sai do centro; perde quem não pode mover', () => {
  // vazio na ponta 2: podem ir para lá as peças das pontas 1 e 3 e a do centro
  const s = estado([0, 0, null, 1, 1, 1, 0, 1, 0], 0);
  assert.deepEqual(
    lancesLegais(s).map((l) => l.de).sort(),
    [1, 8],
  );
  const t = estado([0, 0, null, 1, 1, 1, 0, 1, 0], 1);
  assert.deepEqual(lancesLegais(t).map((l) => `${l.de}>${l.para}`), ['3>2']);
  // o 0 leva a peça do meio para o centro e o 1 fica sem lance
  const fim = jogar(estado([0, 0, 0, 0, 1, 1, 1, 1, null], 0, 'primeiras', 4), 1, CENTRO);
  assert.equal(fim.winner, 0);
  assert.deepEqual(lancesLegais(fim), []);
});

test('mū tōrere: a mesma posição pela terceira vez é empate', () => {
  let s = createInitialState('sempre');
  // vai e volta: 0→centro, 4... repete o ciclo até a terceira vez
  for (let k = 0; k < 12 && !s.empate && s.winner === null; k++) {
    const l = lancesLegais(s)[0]!;
    s = jogar(s, l.de, l.para);
  }
  assert.ok(s.empate || s.winner !== null);
});

test('mū tōrere: a análise do Linu cobre o jogo; vence quando pode e, no difícil, nunca entrega', () => {
  for (const regra of ['primeiras', 'sempre'] as const) {
    const t = tabelaMT(regra);
    assert.ok(t.size > 50 && t.size < 5000, `${regra}: ${t.size} posições`);
  }
  // vitória em um lance: o Linu acha
  const s = estado([0, 0, 0, 0, 1, 1, 1, 1, null], 0, 'primeiras', 4);
  for (let k = 0; k < 20; k++) {
    const l = lanceMuTorere(s, 'dificil')!;
    assert.equal(jogar(s, l.de, l.para).winner, 0);
  }
  // partidas Linu × Linu no difícil: ninguém perde (o jogo perfeito empata) e sempre terminam
  for (const regra of ['primeiras', 'sempre'] as const) {
    let p = createInitialState(regra);
    let n = 0;
    while (p.winner === null && !p.empate) {
      const l = lanceMuTorere(p, 'dificil')!;
      p = jogar(p, l.de, l.para);
      assert.ok(++n < 200);
    }
    assert.equal(valorMT(createInitialState(regra)).r, 'empata', `${regra}: começo empatado`);
    assert.ok(p.empate, `${regra}: dois jogando perfeito empatam`);
  }
});
