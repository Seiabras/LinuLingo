import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as B from './breakout-engine';

const meio = () => 0.5;
function emJogo(bola: B.BreakoutState['bola'], extra: Partial<B.BreakoutState> = {}): B.BreakoutState {
  return { ...B.estadoInicial(), espera: 0, bola, ...extra };
}
/** Avança até um evento (ou n passos). */
function ate(s: B.BreakoutState, ev: B.EventoBreakout, cmd: B.Comando = null, n = 600) {
  let r = { s, eventos: [] as B.EventoBreakout[] };
  for (let k = 0; k < n && !r.eventos.includes(ev); k++) r = B.avancar(r.s, cmd, B.PASSO, meio);
  return r;
}

test('Breakout: 8 fileiras de 14 tijolos, 3 bolas, placar zerado', () => {
  const s = B.estadoInicial();
  assert.equal(s.tijolos.length, 112);
  assert.ok(s.tijolos.every(Boolean));
  assert.equal(s.bolas, 3);
  assert.equal(s.pontos, 0);
});

test('Breakout: cores de cima para baixo vermelho, laranja, verde, amarelo (duas fileiras cada); 7, 5, 3 e 1 ponto', () => {
  assert.deepEqual(B.COR_FILEIRA, ['vermelho', 'vermelho', 'laranja', 'laranja', 'verde', 'verde', 'amarelo', 'amarelo']);
  assert.deepEqual(B.PONTOS, { amarelo: 1, verde: 3, laranja: 5, vermelho: 7 });
  // o total de duas telas
  const umaTela = B.COLUNAS * 2 * (1 + 3 + 5 + 7);
  assert.equal(umaTela, 448);
});

test('Breakout: depois da espera, a bola sai descendo', () => {
  const r = ate(B.estadoInicial(), 'parede', null, 200);
  assert.ok(r.s.bola.vy > 0 || r.eventos.length > 0);
});

test('Breakout: a bola quebra o tijolo amarelo de baixo, marca 1 ponto e volta', () => {
  const yBaixo = B.TOPO_TIJOLOS + B.FILEIRAS * B.TIJOLO_A + 4;
  const r = ate(emJogo({ x: 100, y: yBaixo, vx: 0, vy: -200 }), 'tijolo');
  assert.equal(r.s.pontos, 1);
  assert.equal(r.s.tijolos.filter((t) => !t).length, 1);
  assert.ok(r.s.bola.vy > 0);
});

test('Breakout: a raquete devolve a bola, com o ângulo pelo ponto onde bateu', () => {
  const s = emJogo({ x: 168, y: B.RAQUETE_Y - 20, vx: 0, vy: 200 }, { raquete: 168 });
  const r = ate(s, 'raquete');
  assert.ok(r.s.bola.vy < 0);
  assert.equal(B.parteDaRaquete(168 - 21, 168, 44), 0);
  assert.equal(B.parteDaRaquete(168 + 21, 168, 44), 7);
  const ponta = ate(emJogo({ x: 150, y: B.RAQUETE_Y - 20, vx: 0, vy: 200 }, { raquete: 168 }), 'raquete');
  assert.ok(ponta.s.bola.vx < 0, 'bateu na ponta da esquerda, sai para a esquerda');
});

test('Breakout: acelera depois de 4 e de 12 rebatidas e ao chegar no laranja e no vermelho', () => {
  const s = B.estadoInicial('normal');
  const v0 = B.velocidade(s);
  assert.ok(B.velocidade({ ...s, acelerou: { ...s.acelerou, quatro: true } }) > v0);
  const r = ate(emJogo({ x: 168, y: B.RAQUETE_Y - 20, vx: 0, vy: 200 }, { raquete: 168, rebatidas: 3 }), 'raquete');
  assert.ok(r.s.acelerou.quatro);
  // tijolo laranja (fileira 2)
  const y = B.TOPO_TIJOLOS + 3 * B.TIJOLO_A + 3;
  const tij = s.tijolos.map((_, i) => B.fileiraDe(i) <= 3);
  const l = ate(emJogo({ x: 30, y, vx: 0, vy: -200 }, { tijolos: tij }), 'tijolo');
  assert.ok(l.s.acelerou.laranja);
});

test('Breakout: rompeu o vermelho e bateu em cima, a raquete encolhe pela metade', () => {
  const vazio = Array(112).fill(false);
  vazio[111] = true; // um tijolo sobrando, longe
  const r = ate(emJogo({ x: 30, y: 20, vx: 0, vy: -200 }, { tijolos: vazio }), 'parede');
  assert.ok(r.s.encolheu);
  assert.equal(r.s.largura, B.RAQUETE_L / 2);
});

test('Breakout: perdeu a bola, gasta uma; sem bolas, fim', () => {
  const r = ate(emJogo({ x: 10, y: B.CAMPO_A - 5, vx: 0, vy: 300 }, { raquete: 300 }), 'perdeu-bola');
  assert.equal(r.s.bolas, 2);
  assert.equal(r.s.espera, B.ESPERA);
  const f = ate(emJogo({ x: 10, y: B.CAMPO_A - 5, vx: 0, vy: 300 }, { raquete: 300, bolas: 1 }), 'fim');
  assert.equal(f.s.fim, 'perdeu');
  assert.equal(B.avancar(f.s, null).s, f.s);
});

test('Breakout: limpou a primeira tela, vem a segunda; limpou a segunda, venceu', () => {
  const um = Array(112).fill(false);
  um[13 * 1 + 7 * 14] = true; // um amarelo
  const i = um.indexOf(true);
  const x = (i % 14) * B.TIJOLO_L + B.TIJOLO_L / 2;
  const y = B.TOPO_TIJOLOS + B.FILEIRAS * B.TIJOLO_A + 4;
  const r = ate(emJogo({ x, y, vx: 0, vy: -200 }, { tijolos: um }), 'tela');
  assert.equal(r.s.tela, 2);
  assert.ok(r.s.tijolos.every(Boolean));
  const v = ate(emJogo({ x, y, vx: 0, vy: -200 }, { tijolos: um, tela: 2 }), 'fim');
  assert.equal(v.s.fim, 'venceu');
});

test('Breakout: teclado e ponteiro movem a raquete, sem sair do campo', () => {
  let s = emJogo({ x: 168, y: 200, vx: 0, vy: 0 });
  for (let k = 0; k < 300; k++) s = B.avancar(s, { dir: -1 }).s;
  assert.equal(s.raquete, s.largura / 2);
  s = B.avancar(s, { alvo: 9999 }).s;
  assert.equal(s.raquete, B.CAMPO_L - s.largura / 2);
});

test('Breakout: os níveis mudam a velocidade da bola', () => {
  assert.ok(B.velocidade(B.estadoInicial('devagar')) < B.velocidade(B.estadoInicial('normal')));
  assert.ok(B.velocidade(B.estadoInicial('normal')) < B.velocidade(B.estadoInicial('rapido')));
});
