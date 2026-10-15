import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  BOLA,
  CAMPO_A,
  CAMPO_L,
  ESPERA_SAQUE,
  PASSO,
  PONTOS_PARA_VENCER,
  RAQUETE_A,
  RAQUETE_L,
  RAQUETE_X,
  VEL_INICIAL,
  VEL_MAX,
  avancar,
  estadoInicial,
  iaInicial,
  iaPasso,
  preverY,
  rebote,
  segmento,
  velocidade,
  type Comando,
  type PongState,
} from './pong-engine';

const parado: [Comando, Comando] = [null, null];
const meio = () => 0.5; // saque reto (ângulo 0)

/** Um estado com a bola já em jogo. */
function emJogo(bola: PongState['bola'], extra: Partial<PongState> = {}): PongState {
  return { ...estadoInicial(), espera: 0, bola, ...extra };
}

test('pong: começa 0 a 0, com a bola parada no meio esperando o saque', () => {
  const s = estadoInicial();
  assert.deepEqual(s.placar, [0, 0]);
  assert.equal(s.bola.x, CAMPO_L / 2);
  assert.equal(s.espera, ESPERA_SAQUE);
  assert.equal(s.vencedor, null);
});

test('pong: depois da espera, a bola sai rumo a quem recebe, na velocidade inicial', () => {
  let s = estadoInicial(0);
  for (let i = 0; i < Math.ceil(ESPERA_SAQUE / PASSO) + 1; i++) s = avancar(s, parado, PASSO, meio).s;
  assert.equal(s.espera, 0);
  assert.ok(s.bola.vx < 0, 'vai para a esquerda');
  assert.ok(Math.abs(Math.hypot(s.bola.vx, s.bola.vy) - VEL_INICIAL) < 1e-6);
});

test('pong: avancar não muda o estado antigo', () => {
  const s = emJogo({ x: 200, y: 150, vx: 100, vy: 50 });
  const copia = structuredClone(s);
  avancar(s, [{ dir: 1 }, { dir: -1 }]);
  assert.deepEqual(s, copia);
});

test('pong: a bola tabela nas paredes de cima e de baixo', () => {
  const r = avancar(emJogo({ x: 200, y: BOLA / 2 + 0.1, vx: 0, vy: -120 }), parado);
  assert.ok(r.s.bola.vy > 0);
  assert.ok(r.s.bola.y >= BOLA / 2);
  assert.deepEqual(r.eventos, ['parede']);
  const r2 = avancar(emJogo({ x: 200, y: CAMPO_A - BOLA / 2 - 0.1, vx: 0, vy: 120 }), parado);
  assert.ok(r2.s.bola.vy < 0);
});

test('pong: os 8 segmentos da raquete — o meio devolve reto, as pontas inclinado', () => {
  assert.equal(segmento(100 - RAQUETE_A / 2, 100), 0);
  assert.equal(segmento(100 + RAQUETE_A / 2 - 0.01, 100), 7);
  assert.equal(segmento(99, 100), 3);
  assert.equal(segmento(101, 100), 4);
  for (const seg of [3, 4]) assert.equal(rebote(0, seg, 200).vy, 0);
  const topo = rebote(0, 0, 200);
  const ponta = rebote(0, 7, 200);
  assert.ok(topo.vy < 0 && ponta.vy > 0, 'a ponta de cima manda para cima, a de baixo para baixo');
  assert.ok(Math.abs(rebote(0, 1, 200).vy) < Math.abs(topo.vy), 'quanto mais na ponta, mais inclinado');
  assert.ok(rebote(0, 3, 200).vx > 0 && rebote(1, 3, 200).vx < 0, 'volta para o outro lado');
});

test('pong: a raquete devolve a bola e ela fica mais rápida', () => {
  const face = RAQUETE_X + RAQUETE_L / 2 + BOLA / 2;
  const s = emJogo({ x: face + 0.5, y: 150, vx: -VEL_INICIAL, vy: 0 }, { raquetes: [150, 150] });
  const r = avancar(s, parado);
  assert.deepEqual(r.eventos, ['raquete']);
  assert.ok(r.s.bola.vx > 0);
  assert.equal(r.s.rebatidas, 1);
  assert.ok(Math.hypot(r.s.bola.vx, r.s.bola.vy) > VEL_INICIAL);
});

test('pong: a bola rápida não atravessa a raquete (colisão varrida)', () => {
  const face = CAMPO_L - RAQUETE_X - RAQUETE_L / 2 - BOLA / 2;
  // num passo, a bola anda bem mais que a largura da raquete
  const s = emJogo({ x: face - 3, y: 80, vx: 2000, vy: 0 }, { raquetes: [150, 80] });
  const r = avancar(s, parado);
  assert.ok(r.eventos.includes('raquete'));
  assert.ok(r.s.bola.vx < 0);
});

test('pong: a velocidade cresce com as rebatidas, até um teto', () => {
  assert.equal(velocidade(0), VEL_INICIAL);
  assert.ok(velocidade(5) > velocidade(1));
  assert.equal(velocidade(1000), VEL_MAX);
});

test('pong: errou, ponto do outro lado, a velocidade volta ao início e o saque vai para quem perdeu', () => {
  const s = emJogo({ x: 2, y: 20, vx: -300, vy: 0 }, { raquetes: [250, 150], rebatidas: 9 });
  let r = { s, eventos: [] as string[] };
  for (let i = 0; i < 10 && !r.eventos.includes('ponto'); i++) r = avancar(r.s, parado);
  assert.deepEqual(r.s.placar, [0, 1]);
  assert.equal(r.s.rebatidas, 0);
  assert.equal(r.s.sacarPara, 0);
  assert.equal(r.s.espera, ESPERA_SAQUE);
});

test('pong: quem faz 11 pontos vence e o jogo para', () => {
  const s = emJogo({ x: CAMPO_L - 2, y: 20, vx: 300, vy: 0 }, { raquetes: [150, 250], placar: [PONTOS_PARA_VENCER - 1, 7] });
  let r = { s, eventos: [] as string[] };
  for (let i = 0; i < 10 && !r.eventos.includes('fim'); i++) r = avancar(r.s, parado);
  assert.equal(r.s.vencedor, 0);
  assert.deepEqual(r.s.placar, [11, 7]);
  const depois = avancar(r.s, [{ dir: 1 }, null]);
  assert.equal(depois.s, r.s);
});

test('pong: teclado move a raquete e ela não sai do campo', () => {
  let s = emJogo({ x: 200, y: 150, vx: 0, vy: 0 });
  for (let i = 0; i < 600; i++) s = avancar(s, [{ dir: -1 }, { dir: 1 }]).s;
  assert.equal(s.raquetes[0], RAQUETE_A / 2);
  assert.equal(s.raquetes[1], CAMPO_A - RAQUETE_A / 2);
});

test('pong: a raquete segue o dedo sem passar do ponto', () => {
  let s = emJogo({ x: 200, y: 150, vx: 0, vy: 0 });
  for (let i = 0; i < 120; i++) s = avancar(s, [{ alvo: 60 }, null]).s;
  assert.equal(s.raquetes[0], 60);
});

test('pong: passo fixo dá o mesmo resultado, sem depender do quadro', () => {
  const s0 = emJogo({ x: 200, y: 100, vx: 230, vy: 170 });
  let a = s0;
  for (let i = 0; i < 240; i++) a = avancar(a, parado, PASSO, meio).s;
  let b = s0;
  for (let i = 0; i < 240; i++) b = avancar(b, parado, PASSO, meio).s;
  assert.deepEqual(a, b);
});

test('pong: preverY acha onde a bola cruza, contando as tabelas', () => {
  // reta: sem tabela
  assert.equal(preverY({ x: 100, y: 150, vx: 100, vy: 0 }, 300), 150);
  // sobe 200 em 200 de distância: bate em cima e volta
  const y = preverY({ x: 100, y: 150, vx: 100, vy: -100 }, 300);
  assert.ok(Math.abs(y - (2 * (BOLA / 2) - (150 - 200))) < 1e-9, `y=${y}`);
  assert.ok(y >= BOLA / 2 && y <= CAMPO_A - BOLA / 2);
});

test('pong: o Linu reage com atraso e erro limitado — e dá para ganhar dele', () => {
  const s = emJogo({ x: 200, y: 150, vx: 200, vy: 0 });
  // no nível fácil, com o pior sorteio, o erro passa da meia raquete: às vezes ele erra
  const ruim = iaPasso(iaInicial(), s, 1, 'facil', PASSO, () => 1);
  assert.ok(ruim.cmd && 'alvo' in ruim.cmd);
  assert.ok(Math.abs(ruim.cmd.alvo - 150) > RAQUETE_A / 2 - BOLA);
  // entre uma olhada e outra, o alvo não muda (atraso de reação)
  const prox = iaPasso(ruim.ia, { ...s, bola: { ...s.bola, y: 30 } }, 1, 'facil', PASSO, () => 0);
  assert.equal(prox.cmd && 'alvo' in prox.cmd && prox.cmd.alvo, ruim.cmd.alvo);
  // a raquete do Linu é sempre mais lenta que a do jogador no dedo
  assert.ok(ruim.cmd.vel !== undefined && ruim.cmd.vel < 900);
});

test('pong: partida inteira Linu fácil × Linu difícil termina com um vencedor', () => {
  let s = estadoInicial();
  let ia0 = iaInicial();
  let ia1 = iaInicial();
  let seed = 7;
  const rng = () => ((seed = (seed * 1103515245 + 12345) % 2147483648) / 2147483648);
  for (let i = 0; i < 120 * 60 * 20 && s.vencedor === null; i++) {
    const a = iaPasso(ia0, s, 0, 'facil', PASSO, rng);
    const b = iaPasso(ia1, s, 1, 'dificil', PASSO, rng);
    ia0 = a.ia;
    ia1 = b.ia;
    s = avancar(s, [a.cmd, b.cmd], PASSO, rng).s;
  }
  assert.notEqual(s.vencedor, null);
  assert.equal(Math.max(...s.placar), PONTOS_PARA_VENCER);
});
