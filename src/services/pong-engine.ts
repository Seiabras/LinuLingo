/**
 * Motor do Pong (Atari, 1972), puro e sem React: a física da bola, o rebote, o placar e a IA do Linu.
 *
 * O que vem do original (Wikipédia em inglês, verbete “Pong”, seção “Development”, consultada em
 * 14/10/2026): Allan Alcorn dividiu a raquete em oito segmentos — os do meio devolvem a bola reta
 * (a 90° da raquete) e os das pontas, inclinada; a bola acelera quanto mais tempo fica em jogo e volta
 * à velocidade inicial quando alguém erra; ganha quem fizer 11 pontos primeiro.
 *
 * O campo tem medidas lógicas (CAMPO_L × CAMPO_A, 4:3 como a tela da TV da época); quem desenha só
 * multiplica pela escala. A física roda com passo fixo (PASSO, 1/120 s): a tela chama `avancar`
 * quantas vezes precisar por quadro, e o resultado é o mesmo a 30, 60 ou 120 Hz.
 */

export const CAMPO_L = 400;
export const CAMPO_A = 300;
export const PASSO = 1 / 120;

export const RAQUETE_A = 36;
export const RAQUETE_L = 6;
/** distância da raquete até a borda do campo (centro da raquete) */
export const RAQUETE_X = 18;
export const BOLA = 6;

export const VEL_INICIAL = 190;
/** quanto a bola ganha a cada rebatida, até VEL_MAX */
export const VEL_GANHO = 12;
export const VEL_MAX = 420;
/** velocidade da raquete no teclado (unidades por segundo) */
export const RAQUETE_VEL = 260;
/** velocidade máxima da raquete que segue o dedo ou o mouse */
export const RAQUETE_VEL_ALVO = 900;
export const PONTOS_PARA_VENCER = 11;
/** pausa antes do saque, em segundos */
export const ESPERA_SAQUE = 1;

/** inclinação de saída, em graus, para cada um dos 8 segmentos da raquete (de cima para baixo) */
export const ANGULOS_SEGMENTO = [-60, -42, -24, 0, 0, 24, 42, 60] as const;

export type Lado = 0 | 1; // 0 = esquerda, 1 = direita

export interface Bola {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export interface PongState {
  bola: Bola;
  /** centro vertical de cada raquete */
  raquetes: [number, number];
  placar: [number, number];
  /** rebatidas desde o último saque (a velocidade cresce com elas) */
  rebatidas: number;
  /** segundos até o próximo saque (0 = bola em jogo) */
  espera: number;
  /** para quem vai o próximo saque */
  sacarPara: Lado;
  vencedor: Lado | null;
}

/** Comando de uma raquete: direção (teclado) ou um ponto a seguir (dedo, mouse, IA). */
export type Comando = { dir: -1 | 0 | 1 } | { alvo: number; vel?: number } | null;

export type EventoPong = 'raquete' | 'parede' | 'ponto' | 'fim';

export type Rng = () => number;

const clamp = (v: number, min: number, max: number) => Math.max(min, Math.min(max, v));
const RAD = Math.PI / 180;

export function velocidade(rebatidas: number): number {
  return Math.min(VEL_MAX, VEL_INICIAL + VEL_GANHO * rebatidas);
}

export function estadoInicial(sacarPara: Lado = 1): PongState {
  return {
    bola: { x: CAMPO_L / 2, y: CAMPO_A / 2, vx: 0, vy: 0 },
    raquetes: [CAMPO_A / 2, CAMPO_A / 2],
    placar: [0, 0],
    rebatidas: 0,
    espera: ESPERA_SAQUE,
    sacarPara,
    vencedor: null,
  };
}

/** Põe a bola no meio, rumo a `lado`, com uma inclinação sorteada entre −30° e +30°. */
export function sacar(lado: Lado, rng: Rng = Math.random): Bola {
  const ang = (rng() * 60 - 30) * RAD;
  const v = velocidade(0);
  return { x: CAMPO_L / 2, y: CAMPO_A / 2, vx: Math.cos(ang) * v * (lado === 0 ? -1 : 1), vy: Math.sin(ang) * v };
}

/** Em qual dos 8 segmentos (0 a 7) a bola tocou a raquete. */
export function segmento(bolaY: number, raqueteY: number): number {
  const rel = (bolaY - (raqueteY - RAQUETE_A / 2)) / RAQUETE_A; // 0 no topo, 1 embaixo
  return clamp(Math.floor(rel * 8), 0, 7);
}

/** A velocidade de saída depois de bater na raquete do `lado`, no segmento dado. */
export function rebote(lado: Lado, seg: number, vel: number): { vx: number; vy: number } {
  const ang = ANGULOS_SEGMENTO[clamp(seg, 0, 7)] * RAD;
  return { vx: Math.cos(ang) * vel * (lado === 0 ? 1 : -1), vy: Math.sin(ang) * vel };
}

function moverRaquete(y: number, cmd: Comando, dt: number): number {
  if (!cmd) return y;
  let ny = y;
  if ('dir' in cmd) ny = y + cmd.dir * RAQUETE_VEL * dt;
  else {
    const max = (cmd.vel ?? RAQUETE_VEL_ALVO) * dt;
    ny = y + clamp(cmd.alvo - y, -max, max);
  }
  return clamp(ny, RAQUETE_A / 2, CAMPO_A - RAQUETE_A / 2);
}

/**
 * Um passo de física de `dt` segundos (use PASSO). Devolve o estado novo (o antigo não muda) e os
 * eventos do passo, para os bipes.
 */
export function avancar(s: PongState, cmds: [Comando, Comando], dt: number = PASSO, rng: Rng = Math.random): { s: PongState; eventos: EventoPong[] } {
  if (s.vencedor !== null) return { s, eventos: [] };
  const eventos: EventoPong[] = [];
  const raquetes: [number, number] = [moverRaquete(s.raquetes[0], cmds[0], dt), moverRaquete(s.raquetes[1], cmds[1], dt)];
  let { placar, rebatidas, espera, sacarPara } = s;
  let bola = { ...s.bola };

  if (espera > 0) {
    espera = Math.max(0, espera - dt);
    if (espera === 0) bola = sacar(sacarPara, rng);
    return { s: { ...s, raquetes, bola, espera }, eventos };
  }

  const antes = bola.x;
  bola.x += bola.vx * dt;
  bola.y += bola.vy * dt;

  // paredes de cima e de baixo
  const r = BOLA / 2;
  if (bola.y < r) {
    bola.y = 2 * r - bola.y;
    bola.vy = Math.abs(bola.vy);
    eventos.push('parede');
  } else if (bola.y > CAMPO_A - r) {
    bola.y = 2 * (CAMPO_A - r) - bola.y;
    bola.vy = -Math.abs(bola.vy);
    eventos.push('parede');
  }

  // raquetes: a bola “varre” o caminho do passo, então não atravessa nem quando está rápida
  for (const lado of [0, 1] as const) {
    const indo = lado === 0 ? bola.vx < 0 : bola.vx > 0;
    if (!indo) continue;
    const face = lado === 0 ? RAQUETE_X + RAQUETE_L / 2 + r : CAMPO_L - RAQUETE_X - RAQUETE_L / 2 - r;
    const cruzou = lado === 0 ? antes >= face && bola.x <= face : antes <= face && bola.x >= face;
    if (!cruzou) continue;
    const ry = raquetes[lado];
    if (Math.abs(bola.y - ry) <= RAQUETE_A / 2 + r) {
      rebatidas += 1;
      const v = rebote(lado, segmento(bola.y, ry), velocidade(rebatidas));
      bola = { x: face, y: bola.y, ...v };
      eventos.push('raquete');
    }
  }

  // ponto: a bola saiu por um dos lados
  let vencedor: Lado | null = null;
  if (bola.x < -BOLA || bola.x > CAMPO_L + BOLA) {
    const quemFez: Lado = bola.x < 0 ? 1 : 0;
    placar = quemFez === 0 ? [placar[0] + 1, placar[1]] : [placar[0], placar[1] + 1];
    rebatidas = 0;
    espera = ESPERA_SAQUE;
    // o saque vai para quem perdeu o ponto
    sacarPara = quemFez === 0 ? 1 : 0;
    bola = { x: CAMPO_L / 2, y: CAMPO_A / 2, vx: 0, vy: 0 };
    eventos.push('ponto');
    if (placar[quemFez] >= PONTOS_PARA_VENCER) {
      vencedor = quemFez;
      eventos.push('fim');
    }
  }

  return { s: { bola, raquetes, placar, rebatidas, espera, sacarPara, vencedor }, eventos };
}

/* ───────────────────────── IA do Linu ───────────────────────── */

export type NivelPong = 'facil' | 'medio' | 'dificil';

/**
 * Os três níveis do Linu. Ele só “olha” a bola de tempos em tempos (reação), mira com um erro
 * sorteado e tem a raquete mais lenta que a sua: assim sempre dá para ganhar dele.
 */
export const NIVEIS_PONG: Record<NivelPong, { nome: string; reacao: number; erro: number; vel: number; preve: boolean }> = {
  facil: { nome: 'Fácil', reacao: 0.32, erro: 26, vel: 150, preve: false },
  medio: { nome: 'Médio', reacao: 0.2, erro: 16, vel: 200, preve: true },
  dificil: { nome: 'Difícil', reacao: 0.12, erro: 10, vel: 245, preve: true },
};

export interface IAState {
  /** segundos até o Linu olhar a bola de novo */
  relogio: number;
  alvo: number;
}

export const iaInicial = (): IAState => ({ relogio: 0, alvo: CAMPO_A / 2 });

/** Onde a bola vai cruzar a linha `x`, contando as tabelas nas paredes. */
export function preverY(b: Bola, x: number): number {
  if (b.vx === 0 || (x - b.x) / b.vx < 0) return b.y;
  const r = BOLA / 2;
  const alto = CAMPO_A - 2 * r;
  let y = b.y - r + b.vy * ((x - b.x) / b.vx);
  // desdobra as reflexões
  y = ((y % (2 * alto)) + 2 * alto) % (2 * alto);
  if (y > alto) y = 2 * alto - y;
  return y + r;
}

/** Um passo da IA: atualiza o que o Linu “viu” e devolve o comando da raquete dele. */
export function iaPasso(ia: IAState, s: PongState, lado: Lado, nivel: NivelPong, dt: number = PASSO, rng: Rng = Math.random): { ia: IAState; cmd: Comando } {
  const n = NIVEIS_PONG[nivel];
  let { relogio, alvo } = ia;
  relogio -= dt;
  if (relogio <= 0) {
    relogio = n.reacao;
    const vindo = s.espera === 0 && (lado === 0 ? s.bola.vx < 0 : s.bola.vx > 0);
    if (!vindo) alvo = CAMPO_A / 2; // volta para o meio enquanto espera
    else {
      const xLinu = lado === 0 ? RAQUETE_X : CAMPO_L - RAQUETE_X;
      const base = n.preve ? preverY(s.bola, xLinu) : s.bola.y;
      alvo = base + (rng() * 2 - 1) * n.erro;
    }
  }
  return { ia: { relogio, alvo }, cmd: { alvo, vel: n.vel } };
}
