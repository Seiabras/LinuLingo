import { test } from 'node:test';
import assert from 'node:assert/strict';
import { casasDoComeco, createInitialState, jogar, lancesLegais, type KonaneState } from './konane-engine';
import { lanceKonane } from './konane-ia';

const vazio = (n: number): KonaneState => ({ n, board: Array(n * n).fill(null), turn: 0, fase: 'saltar', winner: null, ultimo: null });

test('kōnane: tabuleiro cheio, pretas e brancas alternadas, nos tamanhos 6, 8 e 10', () => {
  for (const n of [6, 8, 10]) {
    const s = createInitialState(n);
    assert.equal(s.board.length, n * n);
    assert.equal(s.board.filter((v) => v === 0).length, (n * n) / 2);
    for (let i = 0; i < n * n - 1; i++) if ((i + 1) % n !== 0) assert.notEqual(s.board[i], s.board[i + 1]);
  }
});

test('kōnane: as pretas começam tirando uma preta do meio ou de um canto; as brancas, uma vizinha', () => {
  const s = createInitialState(8);
  const tiradas = lancesLegais(s).map((l) => (l.tipo === 'tirar' ? l.casa : -1)).sort((a, b) => a - b);
  // os dois cantos pretos (0 e 63) e as duas pretas do meio (27 e 36)
  assert.deepEqual(tiradas, [0, 27, 36, 63]);
  assert.ok(tiradas.every((c) => casasDoComeco(8).includes(c)));
  const a = jogar(s, { tipo: 'tirar', casa: 27 });
  assert.equal(a.fase, 'tirar-branca');
  assert.equal(a.turn, 1);
  const vizinhas = lancesLegais(a).map((l) => (l.tipo === 'tirar' ? l.casa : -1)).sort((x, y) => x - y);
  assert.deepEqual(vizinhas, [19, 26, 28, 35]);
  // canto: só duas vizinhas
  const b = jogar(s, { tipo: 'tirar', casa: 0 });
  assert.deepEqual(lancesLegais(b).map((l) => (l.tipo === 'tirar' ? l.casa : -1)).sort((x, y) => x - y), [1, 8]);
  const c = jogar(a, { tipo: 'tirar', casa: 28 });
  assert.equal(c.fase, 'saltar');
  assert.equal(c.turn, 0);
  // agora toda jogada é captura
  assert.ok(lancesLegais(c).length > 0 && lancesLegais(c).every((l) => l.tipo === 'saltar'));
});

test('kōnane: salta em linha reta sobre a adversária, nunca na diagonal, e pode seguir na mesma direção', () => {
  const s = vazio(6);
  // preta em (0,0), brancas em (0,1) e (0,3), casas (0,2) e (0,4) vazias
  s.board[0] = 0;
  s.board[1] = 1;
  s.board[3] = 1;
  s.board[7] = 1; // diagonal: não se captura
  const ls = lancesLegais(s);
  assert.deepEqual(
    ls.map((l) => (l.tipo === 'saltar' ? `${l.de}>${l.para}:${l.capturadas.join(',')}` : '')),
    ['0>2:1', '0>4:1,3'],
  );
  const f = jogar(s, { tipo: 'saltar', de: 0, para: 4, capturadas: [1, 3] });
  assert.equal(f.board[4], 0);
  assert.equal(f.board[1], null);
  assert.equal(f.board[3], null);
  // as brancas só têm a da diagonal e não podem capturar nada: perderam
  assert.equal(f.winner, 0);
});

test('kōnane: o Linu sempre faz um lance legal e a partida termina com um vencedor', () => {
  for (const n of [6, 8]) {
    let s = createInitialState(n);
    let passos = 0;
    while (s.winner === null) {
      const l = lanceKonane(s, s.turn === 0 ? 'medio' : 'facil')!;
      const f = jogar(s, l);
      assert.notEqual(f, s, 'lance ilegal');
      s = f;
      assert.ok(++passos < 200);
    }
    assert.ok(s.winner === 0 || s.winner === 1);
  }
});

test('kōnane: no difícil, o Linu acha a captura que deixa o adversário sem lance', () => {
  const s = vazio(6);
  s.board[0] = 0;
  s.board[1] = 1;
  s.board[3] = 1;
  // saltar só uma deixa a branca de (0,3) capturar de volta; a captura dupla vence
  for (const nivel of ['medio', 'dificil'] as const) {
    const l = lanceKonane(s, nivel)!;
    assert.equal(jogar(s, l).winner, 0, nivel);
  }
});
