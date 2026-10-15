import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as C from './caca-engine';
import { lanceCaca } from './caca-ia';

const idx = (x: number, y: number) => C.ONCA.pontos.findIndex((p) => p.x === x && p.y === y);

/** Uma posição do jogo da onça: a onça num ponto e os cachorros nos outros, com a vez dada. */
function posicao(onca: number, caes: number[], turn: C.Lado = 'h', capturas = 0): C.CacaState {
  const s = C.createInitialState(C.ONCA);
  const board = s.board.map(() => null as C.Lado | null);
  board[onca] = 'h';
  for (const c of caes) board[c] = 'p';
  return { ...s, board, turn, capturas };
}

test('Onça: 31 pontos (o quadrado 5×5 e a toca de 6), uma onça no centro e 14 cachorros', () => {
  assert.equal(C.ONCA.pontos.length, 31);
  const s = C.createInitialState(C.ONCA);
  assert.equal(s.board.filter((v) => v === 'h').length, 1);
  assert.equal(s.board.filter((v) => v === 'p').length, 14);
  assert.equal(s.board[idx(2, 4)], 'h', 'a onça no centro do quadrado');
  assert.equal(s.turn, 'h', 'a onça começa');
});

test('Onça: diagonais só nos pontos de soma par; a toca liga no meio da borda', () => {
  const g = C.grafo(C.ONCA);
  assert.equal(g.vizinhos[idx(2, 4)]!.length, 8, 'o centro tem 8 vizinhos');
  assert.equal(g.vizinhos[idx(1, 4)]!.length, 4, 'ponto ímpar só anda reto');
  assert.deepEqual(g.vizinhos[idx(2, 2)]!.map((i) => C.ONCA.pontos[i]).filter((p) => p!.y < 2).length, 3, 'o vértice da toca liga a 3 pontos dela');
});

test('Onça: a onça salta o cachorro vizinho em linha reta, até o ponto vazio', () => {
  const s = C.createInitialState(C.ONCA);
  const passos = C.passosLegais(s);
  assert.ok(passos.some((p) => p.captura === idx(2, 5) && p.para === idx(2, 6)) === false, 'atrás do cachorro tem outro: não salta');
  // abre um buraco: cachorro em (2,5) e nada em (2,6)
  const t = posicao(idx(2, 4), [idx(2, 5)]);
  const salto = C.passosLegais(t).find((p) => p.captura === idx(2, 5));
  assert.ok(salto);
  assert.equal(salto!.para, idx(2, 6));
  const u = C.jogar(t, salto!);
  assert.equal(u.board[idx(2, 5)], null);
  assert.equal(u.capturas, 1);
});

test('Onça: os cachorros não capturam', () => {
  const s = posicao(idx(2, 4), [idx(2, 5)], 'p');
  assert.ok(C.passosLegais(s).every((p) => p.captura === undefined));
});

test('Onça: saltos em sequência, e pode parar no meio', () => {
  // salta o (2,5) até (2,6) e de lá, para a direita, o (3,6) até (4,6)
  const s = posicao(idx(2, 4), [idx(2, 5), idx(3, 6)]);
  const u = C.jogar(s, { de: idx(2, 4), para: idx(2, 6), captura: idx(2, 5) });
  assert.equal(u.cadeia, idx(2, 6), 'pode continuar saltando');
  assert.equal(u.turn, 'h');
  const v = C.jogar(u, { de: idx(2, 6), para: idx(4, 6), captura: idx(3, 6) });
  assert.equal(v.capturas, 2);
  const w = C.parar(u);
  assert.equal(w.turn, 'p', 'parou: a vez passa');
  assert.ok(C.lancesLegais(s).some((l) => l.length === 2), 'o lance com dois saltos existe');
});

test('Onça: salta pelas linhas da toca (o lado do triângulo continua a diagonal)', () => {
  const t = posicao(idx(3, 3), [idx(2, 2)]);
  assert.ok(C.passosLegais(t).some((p) => p.captura === idx(2, 2) && p.para === idx(1, 1)));
});

test('Onça: 5 capturas, a onça vence; presa sem saída, os cachorros vencem', () => {
  const s = posicao(idx(2, 4), [idx(2, 5)], 'h', 4);
  const u = C.jogar(s, { de: idx(2, 4), para: idx(2, 6), captura: idx(2, 5) });
  assert.equal(u.winner, 'h');
  assert.equal(u.motivo, 'capturas');
  // a onça na base da toca, à esquerda (0,0): os vizinhos dela são (1,1) e (2,0); atrás do (1,1) está o
  // (2,2) ocupado e atrás do (2,0) está o (4,0) ocupado: depois do lance do cachorro, a onça não sai
  const fim = C.jogar(posicao(idx(0, 0), [idx(1, 1), idx(2, 0), idx(2, 2), idx(4, 0), idx(4, 6)], 'p'), { de: idx(4, 6), para: idx(4, 5) });
  assert.equal(fim.winner, 'p');
  assert.equal(fim.motivo, 'preso');
});

test('Linu no jogo da onça: como onça, captura; como cachorros, não deixa cachorro solto na frente', () => {
  const s = posicao(idx(2, 4), [idx(2, 5), idx(0, 6), idx(4, 6)]);
  for (const nivel of ['medio', 'dificil'] as const) {
    const l = lanceCaca(s, nivel)!;
    assert.ok(l.some((p) => p.captura !== undefined), `${nivel}: a onça capturou`);
  }
});

test('Linu no jogo da onça: partida Linu contra Linu só tem lances válidos e é rápida', () => {
  let semente = 9;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = C.createInitialState(C.ONCA);
  let maior = 0;
  for (let k = 0; k < 60 && s.winner === null; k++) {
    const t0 = Date.now();
    const l = lanceCaca(s, k % 2 ? 'dificil' : 'medio', sorteio)!;
    maior = Math.max(maior, Date.now() - t0);
    const e = C.aplicarLance(s, l);
    assert.notEqual(e, s);
    assert.equal(e.cadeia, null);
    s = e;
  }
  assert.ok(maior < 2500, `lance mais lento: ${maior} ms`);
});
