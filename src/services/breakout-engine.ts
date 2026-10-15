/**
 * Motor do Breakout (Atari, 1976), puro e sem React. O que vem do original (Wikipédia em inglês,
 * verbete “Breakout (video game)”, consultada em 15/10/2026):
 *
 *   - 8 fileiras de tijolos, duas de cada cor, de baixo para cima: amarelo, verde, laranja e vermelho;
 *     o amarelo vale 1 ponto, o verde 3, o laranja 5 e o vermelho 7;
 *   - o jogador tem 3 bolas para limpar duas telas de tijolos;
 *   - a bola acelera depois de 4 rebatidas, depois de 12, e quando chega às fileiras laranja e vermelha;
 *   - a raquete encolhe pela metade quando a bola rompe a fileira vermelha e bate na parede de cima.
 *
 * O resto é do app: 14 tijolos por fileira (a fonte não dá o número), o ângulo de saída pelo ponto da
 * raquete (como no Pong, em 8 partes) e os níveis de velocidade. Campo lógico de CAMPO_L × CAMPO_A; a
 * física roda com passo fixo (PASSO, 1/120 s).
 */

export const CAMPO_L = 336;
export const CAMPO_A = 400;
export const PASSO = 1 / 120;

export const COLUNAS = 14;
export const FILEIRAS = 8;
export const TIJOLO_L = CAMPO_L / COLUNAS;
export const TIJOLO_A = 10;
/** onde começa a parede de tijolos (de cima) */
export const TOPO_TIJOLOS = 60;
export const RAQUETE_Y = CAMPO_A - 26;
export const RAQUETE_A = 6;
export const RAQUETE_L = 44;
export const BOLA = 6;
export const BOLAS = 3;
export const ESPERA = 1;
export const RAQUETE_VEL = 360;

/** a cor de cada fileira, de cima (0) para baixo (7), e quanto vale */
export const COR_FILEIRA = ['vermelho', 'vermelho', 'laranja', 'laranja', 'verde', 'verde', 'amarelo', 'amarelo'] as const;
export const PONTOS: Record<(typeof COR_FILEIRA)[number], number> = { amarelo: 1, verde: 3, laranja: 5, vermelho: 7 };

export type NivelBreakout = 'devagar' | 'normal' | 'rapido';
/** velocidade da bola (unidades por segundo) no começo e quanto ela ganha a cada aceleração */
export const NIVEIS_BREAKOUT: Record<NivelBreakout, { nome: string; base: number; ganho: number }> = {
  devagar: { nome: 'Devagar', base: 150, ganho: 30 },
  normal: { nome: 'Normal', base: 190, ganho: 40 },
  rapido: { nome: 'Rápido', base: 240, ganho: 50 },
};

/** inclinação (graus a partir da vertical) para cada uma das 8 partes da raquete */
export const ANGULOS = [-60, -45, -30, -15, 15, 30, 45, 60] as const;

export interface BreakoutState {
  nivel: NivelBreakout;
  tijolos: boolean[];
  bola: { x: number; y: number; vx: number; vy: number };
  raquete: number; // centro x
  largura: number;
  pontos: number;
  /** bolas que ainda faltam jogar (contando a que está em jogo) */
  bolas: number;
  /** rebatidas na raquete desde o saque */
  rebatidas: number;
  /** acelerações já feitas: depois de 4, depois de 12, na laranja, na vermelha */
  acelerou: { quatro: boolean; doze: boolean; laranja: boolean; vermelha: boolean };
  encolheu: boolean;
  tela: 1 | 2;
  espera: number;
  fim: 'venceu' | 'perdeu' | null;
}

export type EventoBreakout = 'raquete' | 'parede' | 'tijolo' | 'perdeu-bola' | 'tela' | 'fim';
export type Comando = { dir: -1 | 0 | 1 } | { alvo: number } | null;
export type Rng = () => number;

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));
const RAD = Math.PI / 180;

const paredeCheia = () => Array<boolean>(COLUNAS * FILEIRAS).fill(true);

export function estadoInicial(nivel: NivelBreakout = 'normal'): BreakoutState {
  return {
    nivel,
    tijolos: paredeCheia(),
    bola: { x: CAMPO_L / 2, y: RAQUETE_Y - 40, vx: 0, vy: 0 },
    raquete: CAMPO_L / 2,
    largura: RAQUETE_L,
    pontos: 0,
    bolas: BOLAS,
    rebatidas: 0,
    acelerou: { quatro: false, doze: false, laranja: false, vermelha: false },
    encolheu: false,
    tela: 1,
    espera: ESPERA,
    fim: null,
  };
}

/** A velocidade da bola agora, pelo número de acelerações já feitas. */
export function velocidade(s: Pick<BreakoutState, 'nivel' | 'acelerou'>): number {
  const n = Object.values(s.acelerou).filter(Boolean).length;
  const { base, ganho } = NIVEIS_BREAKOUT[s.nivel];
  return base + ganho * n;
}

/** Saque: a bola sai do meio do campo, descendo, inclinada ao acaso. */
export function sacar(s: BreakoutState, rng: Rng): BreakoutState['bola'] {
  const ang = (rng() < 0.5 ? -1 : 1) * (25 + rng() * 20) * RAD;
  const v = velocidade(s);
  return { x: CAMPO_L / 2 + (rng() - 0.5) * 80, y: TOPO_TIJOLOS + FILEIRAS * TIJOLO_A + 30, vx: Math.sin(ang) * v, vy: Math.cos(ang) * v };
}

/** A parte da raquete (0 a 7) onde a bola tocou. */
export function parteDaRaquete(bolaX: number, raquete: number, largura: number): number {
  return clamp(Math.floor(((bolaX - (raquete - largura / 2)) / largura) * 8), 0, 7);
}

/** O tijolo (índice) que ocupa o ponto, ou -1. */
export function tijoloEm(tijolos: boolean[], x: number, y: number): number {
  if (y < TOPO_TIJOLOS || y >= TOPO_TIJOLOS + FILEIRAS * TIJOLO_A || x < 0 || x >= CAMPO_L) return -1;
  const f = Math.floor((y - TOPO_TIJOLOS) / TIJOLO_A);
  const c = Math.floor(x / TIJOLO_L);
  const i = f * COLUNAS + c;
  return tijolos[i] ? i : -1;
}

export const fileiraDe = (i: number) => Math.floor(i / COLUNAS);

function moverRaquete(x: number, largura: number, cmd: Comando, dt: number): number {
  if (!cmd) return x;
  const nx = 'dir' in cmd ? x + cmd.dir * RAQUETE_VEL * dt : cmd.alvo;
  return clamp(nx, largura / 2, CAMPO_L - largura / 2);
}

/** Um passo de física. Devolve o estado novo (o antigo não muda) e os eventos, para os bipes. */
export function avancar(s: BreakoutState, cmd: Comando, dt: number = PASSO, rng: Rng = Math.random): { s: BreakoutState; eventos: EventoBreakout[] } {
  if (s.fim) return { s, eventos: [] };
  const eventos: EventoBreakout[] = [];
  const raquete = moverRaquete(s.raquete, s.largura, cmd, dt);
  if (s.espera > 0) {
    const espera = Math.max(0, s.espera - dt);
    return { s: { ...s, raquete, espera, bola: espera === 0 ? sacar(s, rng) : s.bola }, eventos };
  }
  let { pontos, rebatidas, encolheu, largura, tela, bolas } = s;
  let tijolos = s.tijolos;
  const acelerou = { ...s.acelerou };
  const r = BOLA / 2;
  const b = { ...s.bola };
  const antesY = b.y;
  b.x += b.vx * dt;
  b.y += b.vy * dt;

  // paredes
  if (b.x < r) {
    b.x = 2 * r - b.x;
    b.vx = Math.abs(b.vx);
    eventos.push('parede');
  } else if (b.x > CAMPO_L - r) {
    b.x = 2 * (CAMPO_L - r) - b.x;
    b.vx = -Math.abs(b.vx);
    eventos.push('parede');
  }
  if (b.y < r) {
    b.y = 2 * r - b.y;
    b.vy = Math.abs(b.vy);
    eventos.push('parede');
    // rompeu a fileira vermelha e bateu em cima: a raquete encolhe (uma vez)
    if (!encolheu) {
      encolheu = true;
      largura = RAQUETE_L / 2;
    }
  }

  // tijolos: olha o ponto da frente da bola nos dois eixos
  const fx = b.x + Math.sign(b.vx) * r;
  const fy = b.y + Math.sign(b.vy) * r;
  let bateu = tijoloEm(tijolos, b.x, fy);
  let eixo: 'x' | 'y' = 'y';
  if (bateu < 0) {
    bateu = tijoloEm(tijolos, fx, b.y);
    eixo = 'x';
  }
  if (bateu >= 0) {
    tijolos = tijolos.slice();
    tijolos[bateu] = false;
    const cor = COR_FILEIRA[fileiraDe(bateu)];
    pontos += PONTOS[cor];
    if (eixo === 'y') b.vy = -b.vy;
    else b.vx = -b.vx;
    eventos.push('tijolo');
    if (cor === 'laranja') acelerou.laranja = true;
    if (cor === 'vermelho') acelerou.vermelha = true;
  }

  // raquete
  const topoRaquete = RAQUETE_Y - RAQUETE_A / 2 - r;
  if (b.vy > 0 && antesY <= topoRaquete && b.y >= topoRaquete && Math.abs(b.x - raquete) <= largura / 2 + r) {
    rebatidas += 1;
    if (rebatidas >= 4) acelerou.quatro = true;
    if (rebatidas >= 12) acelerou.doze = true;
    const v = velocidade({ nivel: s.nivel, acelerou });
    const ang = ANGULOS[parteDaRaquete(b.x, raquete, largura)] * RAD;
    b.vx = Math.sin(ang) * v;
    b.vy = -Math.cos(ang) * v;
    b.y = topoRaquete;
    eventos.push('raquete');
  } else if (bateu >= 0) {
    // a velocidade muda na hora de bater na laranja ou na vermelha
    const v = velocidade({ nivel: s.nivel, acelerou });
    const k = v / Math.hypot(b.vx, b.vy);
    b.vx *= k;
    b.vy *= k;
  }

  let espera = 0;
  let fim: BreakoutState['fim'] = null;
  // perdeu a bola
  if (b.y > CAMPO_A + BOLA) {
    bolas -= 1;
    eventos.push('perdeu-bola');
    if (bolas <= 0) {
      fim = 'perdeu';
      eventos.push('fim');
    } else {
      espera = ESPERA;
      rebatidas = 0;
    }
  }
  // limpou a tela: vem a segunda parede (aqui, o resto continua como estava)
  if (!fim && tijolos.every((t) => !t)) {
    if (tela === 1) {
      tela = 2;
      tijolos = paredeCheia();
      espera = ESPERA;
      eventos.push('tela');
    } else {
      fim = 'venceu';
      eventos.push('fim');
    }
  }
  const zerou = espera > 0;
  return {
    s: {
      ...s,
      tijolos,
      bola: zerou ? { x: CAMPO_L / 2, y: RAQUETE_Y - 40, vx: 0, vy: 0 } : b,
      raquete,
      largura,
      pontos,
      bolas,
      rebatidas,
      acelerou,
      encolheu,
      tela,
      espera,
      fim,
    },
    eventos,
  };
}
