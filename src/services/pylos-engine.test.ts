import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as P from './pylos-engine';
import { lancePylos } from './pylos-ia';

/** Monta uma posição com as bolas dadas ({posição: cor}), descontando da reserva. */
function posicao(bolas: Record<number, P.Cor>, turn: P.Cor = 0, regra: P.RegraPylos = 'normal'): P.PylosState {
  const s = P.createInitialState(regra);
  const board = s.board.slice();
  const reserva: [number, number] = [P.BOLAS, P.BOLAS];
  for (const [p, c] of Object.entries(bolas)) {
    board[Number(p)] = c;
    reserva[c]--;
  }
  return { ...s, board, reserva, turn };
}

test('Pylos: 30 posições (16 + 9 + 4 + 1) e 15 bolas de cada cor; a clara começa', () => {
  assert.equal(P.POSICOES.length, 30);
  const s = P.createInitialState();
  assert.deepEqual(s.reserva, [15, 15]);
  assert.equal(s.turn, 0);
  assert.deepEqual(P.APOIOS[P.indice(1, 0, 0)], [0, 1, 4, 5]);
  assert.deepEqual(P.APOIOS[29], [25, 26, 27, 28]);
});

test('Pylos: no começo só as 16 covas estão livres; o nível de cima só sobre um quadrado', () => {
  const s = P.createInitialState();
  assert.equal(s.board.filter((_, p) => P.livre(s.board, p)).length, 16);
  const t = posicao({ 0: 0, 1: 1, 4: 1, 5: 0 });
  assert.ok(P.livre(t.board, P.indice(1, 0, 0)), 'quadrado de cores misturadas também segura');
  assert.equal(P.por(P.createInitialState(), P.indice(1, 0, 0)).board[16], null, 'sem quadrado não dá');
});

test('Pylos: pôr uma bola gasta da reserva e passa a vez', () => {
  const s = P.por(P.createInitialState(), 5);
  assert.equal(s.board[5], 0);
  assert.deepEqual(s.reserva, [14, 15]);
  assert.equal(s.turn, 1);
});

test('Pylos: subir uma bola solta para um quadrado mais alto poupa a reserva', () => {
  const s = posicao({ 0: 0, 1: 1, 4: 1, 5: 0, 15: 0 }, 0);
  const d = P.destinosSubir(s, 15);
  assert.deepEqual(d, [P.indice(1, 0, 0)]);
  const t = P.subir(s, 15, P.indice(1, 0, 0));
  assert.equal(t.board[15], null);
  assert.equal(t.board[16], 0);
  assert.equal(t.reserva[0], s.reserva[0], 'a reserva não mudou');
  // não pode subir uma bola que faz parte do apoio
  assert.deepEqual(P.destinosSubir(s, 0), []);
  // nem uma que segura outra
  assert.deepEqual(P.destinosSubir({ ...t, turn: 0 }, 0), []);
});

test('Pylos: quadrado da sua cor deixa tirar 1 ou 2 bolas suas soltas', () => {
  const s = posicao({ 0: 0, 1: 0, 4: 0, 10: 1 }, 0);
  const t = P.por(s, 5);
  assert.equal(t.fase, 'retirar');
  assert.equal(t.turn, 0);
  assert.deepEqual(t.figura, [0, 1, 4, 5]);
  assert.ok(P.retiraveis(t).includes(5), 'inclusive a que acabou de pôr');
  assert.ok(!P.retiraveis(t).includes(10), 'nunca a do adversário');
  const u = P.retirar(t, 5);
  assert.equal(u.fase, 'retirar', 'ainda pode tirar mais uma');
  const v = P.parar(u);
  assert.equal(v.turn, 1);
  assert.equal(v.reserva[0], 15 - 4 + 1);
  const w = P.retirar(P.retirar(t, 5), 0);
  assert.equal(w.turn, 1, 'depois da segunda, a vez passa');
  assert.equal(w.reserva[0], 15 - 4 + 2);
});

test('Pylos: na versão para crianças, o quadrado não dá nada; na de experientes, a linha também vale', () => {
  assert.equal(P.por(posicao({ 0: 0, 1: 0, 4: 0 }, 0, 'criancas'), 5).turn, 1);
  assert.equal(P.por(posicao({ 0: 0, 1: 0, 2: 0 }, 0, 'normal'), 3).turn, 1, 'linha no normal não vale');
  assert.equal(P.por(posicao({ 0: 0, 1: 0, 2: 0 }, 0, 'experientes'), 3).fase, 'retirar', 'linha de 4 no nível 0');
  assert.equal(P.por(posicao({ 0: 0, 5: 0, 10: 0 }, 0, 'experientes'), 15).turn, 1, 'diagonal não vale');
});

test('Pylos: quem põe a bola do topo vence; quem fica sem reserva perde', () => {
  const cheio: Record<number, P.Cor> = {};
  for (let p = 0; p < 29; p++) cheio[p] = (p % 2) as P.Cor;
  const s = { ...posicao(cheio, 0), reserva: [1, 1] as [number, number] };
  const t = P.por(s, 29);
  assert.equal(t.winner, 0);
  assert.equal(t.motivo, 'topo');
  // a clara põe a última bola dela; a escura ainda tem bola, então segue; e quando a escura fica sem…
  const u = P.por({ ...P.createInitialState(), reserva: [5, 0] as [number, number] }, 0);
  assert.equal(u.winner, 0);
  assert.equal(u.motivo, 'sem-bolas');
});

test('Linu no Pylos: fecha o quadrado da cor dele e tira bolas', () => {
  const s = posicao({ 0: 1, 1: 1, 4: 1, 10: 0, 11: 0 }, 1);
  for (const nivel of ['medio', 'dificil'] as const) {
    const l = lancePylos(s, nivel)!;
    const e = P.aplicarLance(s, l);
    assert.ok(e.reserva[1] >= s.reserva[1], `${nivel}: não gastou bola (fechou o quadrado e recuperou)`);
  }
});

test('Linu no Pylos: partida Linu contra Linu só tem lances válidos, termina e é rápida', () => {
  let semente = 3;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = P.createInitialState();
  let maior = 0;
  for (let k = 0; k < 80 && s.winner === null; k++) {
    const t0 = Date.now();
    const l = lancePylos(s, k % 2 ? 'dificil' : 'facil', sorteio)!;
    maior = Math.max(maior, Date.now() - t0);
    const e = P.aplicarLance(s, l);
    assert.notEqual(e, s);
    assert.equal(e.fase, 'jogar');
    s = e;
  }
  assert.notEqual(s.winner, null);
  assert.ok(maior < 2500, `lance mais lento: ${maior} ms`);
});
