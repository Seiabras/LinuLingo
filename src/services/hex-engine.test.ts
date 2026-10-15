import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as H from './hex-engine';
import { lanceHex } from './hex-ia';

/** Põe pedras sem passar pelas vezes: [casa, jogador]. */
function posicao(n: number, pedras: [number, H.JogadorH][], turn: H.JogadorH = 0): H.HexState {
  const s = H.createInitialState(n, false, turn);
  const board = s.board.slice();
  for (const [i, j] of pedras) board[i] = j;
  return { ...s, board, lances: pedras.length };
}

test('Hex: tabuleiro vazio de 11×11 (padrão), 9×9 e 13×13', () => {
  for (const n of [9, 11, 13]) {
    const s = H.createInitialState(n);
    assert.equal(s.board.length, n * n);
    assert.equal(H.lancesLegais(s).length, n * n);
  }
});

test('Hex: cada casa do meio tem 6 vizinhas; os cantos agudos 2 e os obtusos 3', () => {
  const n = 5;
  assert.equal(H.vizinhas(n, 12).length, 6);
  assert.deepEqual(H.vizinhas(n, 0).sort((a, b) => a - b), [1, 5]);
  assert.deepEqual(H.vizinhas(n, 4).sort((a, b) => a - b), [3, 8, 9]);
  assert.deepEqual(H.vizinhas(n, 24).sort((a, b) => a - b), [19, 23]);
});

test('Hex: não joga em casa ocupada', () => {
  const s = H.jogar(H.createInitialState(5), 7);
  assert.equal(H.jogar(s, 7), s);
  assert.equal(s.turn, 1);
});

test('Hex: o vermelho vence ligando cima e baixo, por uma corrente na diagonal', () => {
  // coluna 2 descendo e uma volta pela vizinha (r+1, c−1)
  const n = 5;
  const s = posicao(n, [[2, 0], [7, 0], [11, 0], [16, 0]], 0);
  const f = H.jogar(s, 21);
  assert.equal(f.winner, 0);
  assert.deepEqual(f.caminho, [2, 7, 11, 16, 21]);
});

test('Hex: o azul vence ligando esquerda e direita', () => {
  const n = 4;
  const s = posicao(n, [[4, 1], [5, 1], [6, 1]], 1);
  const f = H.jogar(s, 7);
  assert.equal(f.winner, 1);
  assert.deepEqual(f.caminho, [4, 5, 6, 7]);
});

test('Hex: (r, c) e (r+1, c+1) não são vizinhas: diagonal errada não liga', () => {
  const n = 3;
  const b = Array(9).fill(null) as H.CasaH[];
  b[0] = 0;
  b[4] = 0;
  b[8] = 0;
  assert.deepEqual(H.correnteVencedora(n, b, 0), []);
});

test('Hex: não existe empate — todo tabuleiro cheio tem exatamente um vencedor', () => {
  let semente = 7;
  const rng = () => (semente = (semente * 16807) % 2147483647) / 2147483647;
  for (let t = 0; t < 200; t++) {
    const n = 2 + (t % 6);
    const b: H.CasaH[] = Array.from({ length: n * n }, () => (rng() < 0.5 ? 0 : 1));
    const v0 = H.correnteVencedora(n, b, 0).length > 0;
    const v1 = H.correnteVencedora(n, b, 1).length > 0;
    assert.ok(v0 !== v1, `tabuleiro ${n}×${n}`);
  }
});

test('Hex: regra da troca — só no segundo lance, a pedra muda de dono espelhada e a vez volta', () => {
  let s = H.createInitialState(5, true, 0);
  assert.equal(H.podeTrocar(s), false);
  s = H.jogar(s, 1 * 5 + 3); // (1, 3)
  assert.equal(H.podeTrocar(s), true);
  const t = H.trocar(s);
  assert.equal(t.board[3 * 5 + 1], 1, 'espelhada em (3, 1), agora azul');
  assert.equal(t.board.filter((x) => x !== null).length, 1);
  assert.equal(t.turn, 0);
  assert.equal(H.podeTrocar(t), false);
  const sem = H.jogar(H.createInitialState(5, false), 8);
  assert.equal(H.trocar(sem), sem, 'sem a regra, não troca');
});

test('Hex: distância — quantas casas faltam para ligar', () => {
  const n = 5;
  assert.equal(H.distancia(n, Array(25).fill(null), 0), 5);
  const s = posicao(n, [[2, 0], [7, 0], [12, 0]]);
  assert.equal(H.distancia(n, s.board, 0), 2);
  // muro azul inteiro na linha do meio: o vermelho não liga mais
  const muro = posicao(n, [10, 11, 12, 13, 14].map((i) => [i, 1] as [number, H.JogadorH]));
  assert.equal(H.distancia(n, muro.board, 0), Infinity);
});

test('Hex: o Linu ganha num lance quando pode e tapa o lance que ganharia o adversário', () => {
  const n = 5;
  // o vermelho desce pela coluna 0 e só falta a casa 20 (a única vizinha de baixo da 15)
  const tapa = posicao(n, [[0, 0], [5, 0], [10, 0], [15, 0]], 1);
  for (const nv of ['facil', 'medio', 'dificil'] as const) assert.equal(lanceHex(tapa, nv), 20, nv);
  const vence = posicao(n, [[5, 1], [6, 1], [7, 1], [8, 1]], 1);
  for (const nv of ['facil', 'medio', 'dificil'] as const) assert.equal(H.jogar(vence, lanceHex(vence, nv) as number).winner, 1, nv);
});

test('Hex: o Linu difícil decide em menos de 1 s no 13×13 e troca uma primeira pedra no centro', () => {
  const s = H.jogar(H.createInitialState(13, true, 0), 6 * 13 + 6);
  assert.equal(lanceHex(s, 'dificil'), 'troca');
  const t0 = Date.now();
  const l = lanceHex(H.trocar(H.jogar(H.createInitialState(13, true, 0), 0)), 'dificil');
  assert.ok(Date.now() - t0 < 1000);
  assert.equal(typeof l, 'number');
});

test('Hex: Linu médio × Linu fácil num 7×7 termina com um vencedor', () => {
  let s = H.createInitialState(7);
  for (let k = 0; k < 49 && s.winner === null; k++) {
    const l = lanceHex(s, s.turn === 0 ? 'medio' : 'facil');
    s = l === 'troca' ? H.trocar(s) : H.jogar(s, l as number);
  }
  assert.notEqual(s.winner, null);
});
