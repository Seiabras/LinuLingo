/**
 * Motor do Space Invaders (Taito, 1978), puro e sem React. O que vem do original (Wikipédia em inglês,
 * verbete “Space Invaders”, consultada em 15/10/2026):
 *
 *   - o jogador move um canhão laser na parte de baixo da tela e atira nos alienígenas que descem;
 *   - eles começam em 5 fileiras de 11; há abrigos que protegem em parte, e de vez em quando passa uma
 *     nave misteriosa de bônus;
 *   - quanto menos alienígenas sobram, mais rápido eles andam (no original foi sem querer: o
 *     processador desenhava mais depressa com menos alienígenas na tela, e Nishikado manteve isso);
 *   - as ondas se repetem sem fim, cada uma começando mais baixo; se eles chegam embaixo, o jogo acaba.
 *
 * O resto é do app: os números (pontos de cada fileira, velocidades, quantas bombas, vidas) e a
 * forma dos desenhos. Campo lógico de CAMPO_L × CAMPO_A (o tamanho da tela da máquina, 224 × 256); a
 * física roda com passo fixo (PASSO, 1/120 s).
 */

export const CAMPO_L = 224;
export const CAMPO_A = 256;
export const PASSO = 1 / 120;

export const FILEIRAS = 5;
export const COLUNAS = 11;
export const ESPACO_X = 16;
export const ESPACO_Y = 16;
export const INVASOR_L = 12;
export const INVASOR_A = 8;
export const PASSO_MARCHA = 2;
export const DESCIDA = 8;
export const TOPO_INICIAL = 48;
/** pontos de cada fileira, de cima para baixo (aqui) */
export const PONTOS_FILEIRA = [30, 20, 20, 10, 10];
export const PONTOS_NAVE = [50, 100, 150, 300];

export const CANHAO_Y = CAMPO_A - 24;
export const CANHAO_L = 13;
export const CANHAO_A = 8;
export const CANHAO_VEL = 100;
export const TIRO_VEL = 260;
export const BOMBA_VEL = 75;
export const MAX_BOMBAS = 3;
export const VIDAS = 3;

export const ABRIGOS = 4;
export const ABRIGO_Y = CAMPO_A - 60;
export const CELULA = 3;
export const ABRIGO_COLS = 8;
export const ABRIGO_LINS = 6;

export const NAVE_Y = 30;
export const NAVE_L = 16;
export const NAVE_VEL = 45;

export type NivelInvasores = 'devagar' | 'normal' | 'rapido';
export const NIVEIS_INVASORES: Record<NivelInvasores, { nome: string; marcha: number; bombas: number }> = {
  devagar: { nome: 'Devagar', marcha: 0.75, bombas: 1.4 },
  normal: { nome: 'Normal', marcha: 1, bombas: 1 },
  rapido: { nome: 'Rápido', marcha: 1.4, bombas: 0.7 },
};

export interface Ponto {
  x: number;
  y: number;
}

export interface InvasoresState {
  nivel: NivelInvasores;
  /** quem ainda está vivo (fileira × COLUNAS + coluna) */
  vivos: boolean[];
  /** canto de cima, à esquerda, da formação */
  ox: number;
  oy: number;
  dir: 1 | -1;
  /** segundos até o próximo passo da marcha */
  relogioMarcha: number;
  /** pose da animação (alterna a cada passo) */
  pose: 0 | 1;
  canhao: number;
  tiro: Ponto | null;
  bombas: Ponto[];
  relogioBomba: number;
  /** as células de cada abrigo (ABRIGOS × ABRIGO_LINS × ABRIGO_COLS) */
  abrigos: boolean[];
  nave: { x: number; dir: 1 | -1 } | null;
  relogioNave: number;
  pontos: number;
  vidas: number;
  onda: number;
  /** segundos de pausa depois de o canhão ser atingido (ou entre ondas) */
  espera: number;
  /** onde houve explosão (para desenhar) e por quanto tempo */
  explosoes: { x: number; y: number; t: number }[];
  fim: boolean;
}

export type EventoInvasores = 'tiro' | 'acerto' | 'nave' | 'acertou-nave' | 'atingido' | 'marcha' | 'onda' | 'fim';
export interface Comando {
  dir: -1 | 0 | 1;
  /** posição pedida pelo dedo ou mouse (x), em vez de `dir` */
  alvo?: number | null;
  atirar: boolean;
}
export type Rng = () => number;

const clamp = (v: number, a: number, b: number) => Math.max(a, Math.min(b, v));

/** Os abrigos inteiros, com o arco de baixo aberto. */
export function abrigosNovos(): boolean[] {
  const c: boolean[] = [];
  for (let a = 0; a < ABRIGOS; a++)
    for (let l = 0; l < ABRIGO_LINS; l++)
      for (let k = 0; k < ABRIGO_COLS; k++) {
        const canto = l === 0 && (k === 0 || k === ABRIGO_COLS - 1);
        const arco = l >= ABRIGO_LINS - 2 && k >= 2 && k <= ABRIGO_COLS - 3;
        c.push(!canto && !arco);
      }
  return c;
}

/** O x da esquerda de cada abrigo. */
export const abrigoX = (a: number) => Math.round((CAMPO_L / ABRIGOS) * (a + 0.5) - (ABRIGO_COLS * CELULA) / 2);

export function estadoInicial(nivel: NivelInvasores = 'normal'): InvasoresState {
  return {
    nivel,
    vivos: Array(FILEIRAS * COLUNAS).fill(true),
    ox: 24,
    oy: TOPO_INICIAL,
    dir: 1,
    relogioMarcha: 0,
    pose: 0,
    canhao: CAMPO_L / 2,
    tiro: null,
    bombas: [],
    relogioBomba: 1.5,
    abrigos: abrigosNovos(),
    nave: null,
    relogioNave: 18,
    pontos: 0,
    vidas: VIDAS,
    onda: 1,
    espera: 1,
    explosoes: [],
    fim: false,
  };
}

export const quantosVivos = (s: Pick<InvasoresState, 'vivos'>) => s.vivos.filter(Boolean).length;
/** Onde está o alienígena (canto de cima, à esquerda). */
export const posInvasor = (s: Pick<InvasoresState, 'ox' | 'oy'>, i: number): Ponto => ({ x: s.ox + (i % COLUNAS) * ESPACO_X, y: s.oy + Math.floor(i / COLUNAS) * ESPACO_Y });

/** Quanto tempo entre dois passos da marcha: quanto menos vivos, mais rápido. */
export function intervaloMarcha(vivos: number, nivel: NivelInvasores): number {
  return Math.max(1 / 60, (vivos / 60) * 0.9) / NIVEIS_INVASORES[nivel].marcha;
}

/** A célula de abrigo que contém o ponto, ou -1. */
export function celulaEm(abrigos: boolean[], x: number, y: number): number {
  if (y < ABRIGO_Y || y >= ABRIGO_Y + ABRIGO_LINS * CELULA) return -1;
  for (let a = 0; a < ABRIGOS; a++) {
    const x0 = abrigoX(a);
    if (x < x0 || x >= x0 + ABRIGO_COLS * CELULA) continue;
    const k = Math.floor((x - x0) / CELULA);
    const l = Math.floor((y - ABRIGO_Y) / CELULA);
    const i = (a * ABRIGO_LINS + l) * ABRIGO_COLS + k;
    return abrigos[i] ? i : -1;
  }
  return -1;
}

/** Um passo. Devolve o estado novo (o antigo não muda) e os eventos, para os bipes. */
export function avancar(s: InvasoresState, cmd: Comando, dt: number = PASSO, rng: Rng = Math.random): { s: InvasoresState; eventos: EventoInvasores[] } {
  if (s.fim) return { s, eventos: [] };
  const eventos: EventoInvasores[] = [];
  const explosoes = s.explosoes.map((e) => ({ ...e, t: e.t - dt })).filter((e) => e.t > 0);
  if (s.espera > 0) return { s: { ...s, espera: Math.max(0, s.espera - dt), explosoes }, eventos };

  let { ox, oy, dir, relogioMarcha, pose, relogioBomba, relogioNave, pontos, vidas, onda } = s;
  let vivos = s.vivos;
  let abrigos = s.abrigos;
  let nave = s.nave;
  let espera = 0;
  let fim = false;

  // o canhão
  const meio = CANHAO_L / 2;
  let canhao = s.canhao;
  if (cmd.dir !== 0) canhao += cmd.dir * CANHAO_VEL * dt;
  else if (cmd.alvo != null) {
    const max = CANHAO_VEL * 1.6 * dt;
    canhao += clamp(cmd.alvo - canhao, -max, max);
  }
  canhao = clamp(canhao, meio + 2, CAMPO_L - meio - 2);

  // o tiro: um de cada vez
  let tiro = s.tiro ? { ...s.tiro, y: s.tiro.y - TIRO_VEL * dt } : null;
  if (!tiro && cmd.atirar) {
    tiro = { x: canhao, y: CANHAO_Y - CANHAO_A };
    eventos.push('tiro');
  }
  if (tiro) {
    let acabou = tiro.y < 0;
    // acertou um alienígena?
    for (let i = 0; i < vivos.length && !acabou; i++) {
      if (!vivos[i]) continue;
      const p = posInvasor({ ox, oy }, i);
      if (tiro.x >= p.x && tiro.x <= p.x + INVASOR_L && tiro.y >= p.y && tiro.y <= p.y + INVASOR_A) {
        vivos = vivos.slice();
        vivos[i] = false;
        pontos += PONTOS_FILEIRA[Math.floor(i / COLUNAS)]!;
        explosoes.push({ x: p.x + INVASOR_L / 2, y: p.y + INVASOR_A / 2, t: 0.25 });
        eventos.push('acerto');
        acabou = true;
      }
    }
    // a nave misteriosa
    if (!acabou && nave && tiro.y <= NAVE_Y + 7 && tiro.y >= NAVE_Y && tiro.x >= nave.x && tiro.x <= nave.x + NAVE_L) {
      pontos += PONTOS_NAVE[Math.floor(rng() * PONTOS_NAVE.length)]!;
      explosoes.push({ x: nave.x + NAVE_L / 2, y: NAVE_Y + 3, t: 0.5 });
      nave = null;
      eventos.push('acertou-nave');
      acabou = true;
    }
    // um abrigo
    if (!acabou) {
      const c = celulaEm(abrigos, tiro.x, tiro.y);
      if (c >= 0) {
        abrigos = abrigos.slice();
        abrigos[c] = false;
        acabou = true;
      }
    }
    if (acabou) tiro = null;
  }

  // a marcha
  relogioMarcha -= dt;
  const n = vivos.filter(Boolean).length;
  if (relogioMarcha <= 0 && n > 0) {
    relogioMarcha = intervaloMarcha(n, s.nivel);
    pose = pose === 0 ? 1 : 0;
    let minX = Infinity;
    let maxX = -Infinity;
    for (let i = 0; i < vivos.length; i++)
      if (vivos[i]) {
        const x = posInvasor({ ox, oy }, i).x;
        minX = Math.min(minX, x);
        maxX = Math.max(maxX, x + INVASOR_L);
      }
    if ((dir === 1 && maxX + PASSO_MARCHA > CAMPO_L - 6) || (dir === -1 && minX - PASSO_MARCHA < 6)) {
      oy += DESCIDA;
      dir = dir === 1 ? -1 : 1;
    } else ox += dir * PASSO_MARCHA;
    eventos.push('marcha');
  }

  // os alienígenas comem os abrigos e, se chegam embaixo, acabou
  let maisBaixo = 0;
  for (let i = 0; i < vivos.length; i++) {
    if (!vivos[i]) continue;
    const p = posInvasor({ ox, oy }, i);
    maisBaixo = Math.max(maisBaixo, p.y + INVASOR_A);
    if (p.y + INVASOR_A >= ABRIGO_Y)
      for (let y = p.y; y < p.y + INVASOR_A; y += CELULA)
        for (let x = p.x; x < p.x + INVASOR_L; x += CELULA) {
          const c = celulaEm(abrigos, x, y);
          if (c >= 0) {
            if (abrigos === s.abrigos) abrigos = abrigos.slice();
            abrigos[c] = false;
          }
        }
  }
  if (n > 0 && maisBaixo >= CANHAO_Y - CANHAO_A) {
    fim = true;
    eventos.push('fim');
  }

  // as bombas: de vez em quando, do alienígena mais baixo de uma coluna sorteada
  let bombas = s.bombas.map((b) => ({ ...b, y: b.y + BOMBA_VEL * dt }));
  relogioBomba -= dt;
  if (relogioBomba <= 0 && n > 0) {
    relogioBomba = (0.5 + rng() * 0.9) * NIVEIS_INVASORES[s.nivel].bombas;
    if (bombas.length < MAX_BOMBAS) {
      const colunas = [...new Set(vivos.map((v, i) => (v ? i % COLUNAS : -1)).filter((c) => c >= 0))];
      const col = colunas[Math.floor(rng() * colunas.length)]!;
      let baixo = -1;
      for (let f = FILEIRAS - 1; f >= 0; f--)
        if (vivos[f * COLUNAS + col]) {
          baixo = f * COLUNAS + col;
          break;
        }
      const p = posInvasor({ ox, oy }, baixo);
      bombas.push({ x: p.x + INVASOR_L / 2, y: p.y + INVASOR_A });
    }
  }
  let atingido = false;
  bombas = bombas.filter((b) => {
    if (b.y > CANHAO_Y + 2) return false; // a bomba some no chão
    const c = celulaEm(abrigos, b.x, b.y);
    if (c >= 0) {
      if (abrigos === s.abrigos) abrigos = abrigos.slice();
      abrigos[c] = false;
      return false;
    }
    if (tiro && Math.abs(tiro.x - b.x) < 2 && Math.abs(tiro.y - b.y) < 4) {
      tiro = null;
      return false;
    }
    if (!atingido && b.y >= CANHAO_Y - CANHAO_A && b.y <= CANHAO_Y && Math.abs(b.x - canhao) <= meio) {
      atingido = true;
      return false;
    }
    return true;
  });
  if (atingido) {
    vidas -= 1;
    explosoes.push({ x: canhao, y: CANHAO_Y - CANHAO_A / 2, t: 1 });
    eventos.push('atingido');
    bombas = [];
    tiro = null;
    if (vidas <= 0) {
      fim = true;
      eventos.push('fim');
    } else espera = 1;
  }

  // a nave misteriosa
  relogioNave -= dt;
  if (!nave && relogioNave <= 0 && n > 7) {
    const d: 1 | -1 = rng() < 0.5 ? 1 : -1;
    nave = { x: d === 1 ? -NAVE_L : CAMPO_L, dir: d };
    relogioNave = 18 + rng() * 10;
    eventos.push('nave');
  }
  if (nave) {
    const x = nave.x + nave.dir * NAVE_VEL * dt;
    nave = x < -NAVE_L - 1 || x > CAMPO_L + 1 ? null : { ...nave, x };
  }

  // limpou a onda: vem outra, começando mais baixo
  if (!fim && n === 0) {
    onda += 1;
    vivos = Array(FILEIRAS * COLUNAS).fill(true);
    ox = 24;
    oy = Math.min(TOPO_INICIAL + DESCIDA * (onda - 1), TOPO_INICIAL + DESCIDA * 5);
    dir = 1;
    bombas = [];
    tiro = null;
    nave = null;
    espera = 1.2;
    eventos.push('onda');
  }

  return {
    s: { ...s, vivos, ox, oy, dir, relogioMarcha, pose, canhao, tiro, bombas, relogioBomba, abrigos, nave, relogioNave, pontos, vidas, onda, espera, explosoes, fim },
    eventos,
  };
}
