import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chave, createInitialState, ix, jogar, lancesDaPeca, lancesDeDrop, lancesLegais, perft, T, type ShogiState } from './shogi-engine';

/** Uma posição montada à mão: peças positivas são do sente, negativas do gote. */
function posicao(pecas: [number, number, number][], turn: 's' | 'g' = 's', maoS: Partial<Record<number, number>> = {}, maoG: Partial<Record<number, number>> = {}): ShogiState {
  const board = Array(81).fill(0) as number[];
  for (const [r, c, p] of pecas) board[ix(r, c)] = p;
  const mao = (m: Partial<Record<number, number>>) => Array.from({ length: 8 }, (_, t) => m[t] ?? 0);
  const s: ShogiState = { board, maos: { s: mao(maoS), g: mao(maoG) }, turn, winner: null, fim: null, emXeque: false, ultimo: null, historico: [], xeques: [] };
  return { ...s, historico: [chave(s)], xeques: [false] };
}

test('shogi: posição inicial com 40 peças e 30 lances (perft 1 a 4: 30, 900, 25.470, 719.731)', () => {
  const s = createInitialState();
  assert.equal(s.board.filter((p) => p !== 0).length, 40);
  assert.equal(s.board[ix(8, 4)], T.K);
  assert.equal(s.board[ix(0, 4)], -T.K);
  assert.equal(s.board[ix(7, 1)], T.B, 'o bispo do sente fica à esquerda, na frente do cavalo');
  assert.equal(s.board[ix(7, 7)], T.R, 'a torre do sente fica à direita');
  // números de Patrice Duhamel, “Perft for Xiangqi & Shogi”, TalkChess, 2013 (perft 6 conferido por outro motor)
  assert.equal(perft(s, 1), 30);
  assert.equal(perft(s, 2), 900);
  assert.equal(perft(s, 3), 25470);
  assert.equal(perft(s, 4), 719731);
});

test('shogi: promoção opcional na zona e obrigatória quando a peça ficaria sem lance', () => {
  const s = posicao([
    [8, 0, T.K],
    [0, 8, -T.K],
    [3, 2, T.P],
    [1, 4, T.P],
    [2, 6, T.N],
    [3, 7, T.S],
  ]);
  const peao3 = lancesDaPeca(s, ix(3, 2));
  assert.deepEqual(peao3.map((l) => l.promove).sort(), [false, true], 'peão entrando na zona: pode escolher');
  const peao1 = lancesDaPeca(s, ix(1, 4));
  assert.deepEqual(peao1.map((l) => l.promove), [true], 'peão na última fileira: promove sempre');
  const cavalo = lancesDaPeca(s, ix(2, 6));
  assert.ok(cavalo.length > 0 && cavalo.every((l) => l.promove), 'cavalo indo para a 2ª fileira: promove sempre');
  const prata = lancesDaPeca(s, ix(3, 7)).filter((l) => l.para === ix(2, 7));
  assert.equal(prata.length, 2, 'a prata pode entrar na zona promovendo ou não');
  const depois = jogar(s, ix(3, 2), ix(2, 2), true);
  assert.equal(depois.board[ix(2, 2)], T.TP, 'o peão vira tokin');
});

test('shogi: a peça capturada vai para a mão desvirada e volta como drop', () => {
  const s = posicao([
    [8, 0, T.K],
    [0, 8, -T.K],
    [4, 4, T.R],
    [2, 4, -T.H],
  ]);
  const t = jogar(s, ix(4, 4), ix(2, 4), false);
  assert.equal(t.maos.s[T.B], 1, 'o cavalo-dragão capturado vira bispo na mão');
  const u = jogar(t, ix(0, 8), ix(0, 7));
  const drops = lancesDeDrop(u, T.B);
  assert.equal(drops.length, 81 - 3, 'o bispo pode ser largado em qualquer casa vazia');
  const v = jogar(u, -1, ix(5, 5), false, T.B);
  assert.equal(v.board[ix(5, 5)], T.B, 'o bispo largado entra desvirado');
  assert.equal(v.maos.s[T.B], 0);
});

test('shogi: nifu — sem peão largado em coluna que já tem peão do mesmo dono', () => {
  const s = createInitialState();
  const comPeao = { ...s, maos: { ...s.maos, s: [0, 1, 0, 0, 0, 0, 0, 0] } };
  assert.equal(lancesDeDrop(comPeao, T.P).length, 0, 'todas as colunas já têm peão');
  const t = posicao([
    [8, 0, T.K],
    [0, 8, -T.K],
    [6, 3, T.P],
    [4, 5, T.TP],
  ], 's', { [T.P]: 1 });
  const cols = new Set(lancesDeDrop(t, T.P).map((l) => l.para % 9));
  assert.ok(!cols.has(3), 'na coluna do peão, não');
  assert.ok(cols.has(5), 'o tokin (peão promovido) não conta');
});

test('shogi: sem peão, lança ou cavalo largados onde não teriam lance', () => {
  const s = posicao([
    [8, 0, T.K],
    [0, 8, -T.K],
  ], 's', { [T.P]: 1, [T.L]: 1, [T.N]: 1 });
  const linhas = (t: number) => new Set(lancesDeDrop(s, t).map((l) => Math.floor(l.para / 9)));
  assert.ok(!linhas(T.P).has(0) && linhas(T.P).has(1));
  assert.ok(!linhas(T.L).has(0) && linhas(T.L).has(1));
  assert.ok(!linhas(T.N).has(0) && !linhas(T.N).has(1) && linhas(T.N).has(2));
});

test('shogi: uchifuzume — o peão largado não pode dar mate, mas o ouro largado pode', () => {
  // o rei do gote no canto de cima, preso pelas próprias lanças; o ouro do sente cobre a fuga
  const s = posicao(
    [
      [8, 0, T.K],
      [0, 4, -T.K],
      [0, 3, -T.L],
      [0, 5, -T.L],
      [2, 4, T.G],
    ],
    's',
    { [T.P]: 1, [T.G]: 1 },
  );
  assert.ok(!lancesDeDrop(s, T.P).some((l) => l.para === ix(1, 4)), 'o peão em 1,4 seria mate: proibido');
  assert.ok(lancesDeDrop(s, T.P).some((l) => l.para === ix(3, 4)), 'em outras casas, pode');
  const mate = jogar(s, -1, ix(1, 4), false, T.G);
  assert.equal(mate.winner, 's');
  assert.equal(mate.fim, 'mate');
  assert.equal(lancesLegais(mate).length, 0);
});

test('shogi: o rei não pode ficar em xeque; a peça cravada não sai da frente', () => {
  const s = posicao([
    [8, 4, T.K],
    [6, 4, T.G],
    [0, 4, -T.R],
    [0, 0, -T.K],
  ]);
  const ouro = lancesDaPeca(s, ix(6, 4));
  assert.ok(ouro.every((l) => l.para % 9 === 4), 'o ouro só anda na coluna da torre');
});

test('shogi: sennichite — a mesma posição pela quarta vez é empate', () => {
  let s = posicao([
    [8, 0, T.K],
    [0, 4, -T.K],
    [5, 8, T.R],
  ]);
  const ciclo: [number, number][] = [
    [ix(5, 8), ix(5, 7)],
    [ix(0, 4), ix(0, 3)],
    [ix(5, 7), ix(5, 8)],
    [ix(0, 3), ix(0, 4)],
  ];
  for (let k = 0; k < 3; k++)
    for (const [de, para] of ciclo) {
      assert.equal(s.winner, null);
      s = jogar(s, de, para);
    }
  assert.equal(s.winner, 'empate');
  assert.equal(s.fim, 'repeticao');
});

test('shogi: xeque perpétuo — quem repete a posição dando xeque perde', () => {
  let s = posicao([
    [8, 0, T.K],
    [0, 4, -T.K],
    [5, 5, T.R],
  ]);
  const ciclo: [number, number][] = [
    [ix(5, 5), ix(5, 4)],
    [ix(0, 4), ix(0, 5)],
    [ix(5, 4), ix(5, 5)],
    [ix(0, 5), ix(0, 4)],
  ];
  for (let k = 0; k < 3; k++) for (const [de, para] of ciclo) s = jogar(s, de, para);
  assert.equal(s.winner, 'g');
  assert.equal(s.fim, 'xeque-perpetuo');
});

test('shogi: lance que não vale devolve a mesma posição', () => {
  const s = createInitialState();
  assert.equal(jogar(s, ix(6, 0), ix(4, 0)), s);
  assert.equal(jogar(s, ix(2, 0), ix(3, 0)), s, 'não é a vez do gote');
});
