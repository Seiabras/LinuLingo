/**
 * Motor da raposa e os gansos. Fontes em `data/jogos-conhecimento.ts`. As versões divergem; aqui há
 * duas:
 *
 * - “1870” (a regra do “Boy's Own”, 1870, no tabuleiro do museu Victoria and Albert): 13 gansos, que
 *   andam só nas linhas retas (não nas diagonais) e nunca para trás;
 * - “moderna” (Masters Traditional Games e outras): 15 gansos, que andam para a frente, para o lado e
 *   na diagonal para a frente, mas nunca para trás.
 *
 * Nas duas: tabuleiro em cruz de 33 pontos, com diagonais nos pontos de linha + coluna par; a raposa
 * começa no centro e anda um ponto em qualquer direção ao longo das linhas; ela captura saltando por
 * cima de um ganso vizinho até o ponto vazio logo depois, e pode continuar saltando ou parar;
 * capturar não é obrigatório. Os gansos vencem quando a raposa não pode mexer. Quando sobram 6
 * gansos ou menos, eles não conseguem mais prender a raposa (diz a regra de 1870): aqui, a raposa
 * vence aí. Se os gansos ficam sem lance (eles não voltam), a regra não diz: aqui, a raposa vence.
 * Quem começa também não é dito: aqui, os gansos.
 */
export type Lado = 'raposa' | 'gansos';
export type VersaoRG = '1870' | 'moderna';

export const LADO_T = 7;
export const idx = (r: number, c: number) => r * LADO_T + c;
export const rc = (i: number): [number, number] => [Math.floor(i / LADO_T), i % LADO_T];
export const valido = (r: number, c: number) => r >= 0 && r < LADO_T && c >= 0 && c < LADO_T && ((r >= 2 && r <= 4) || (c >= 2 && c <= 4));
export const PONTOS: number[] = Array.from({ length: LADO_T * LADO_T }, (_, i) => i).filter((i) => valido(...rc(i)));
export const CENTRO = idx(3, 3);
export const temDiagonal = (i: number) => (rc(i)[0] + rc(i)[1]) % 2 === 0;
export const MINIMO_GANSOS = 7;

export const DIRS: [number, number][] = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
  [-1, -1],
  [-1, 1],
  [1, -1],
  [1, 1],
];

/** o ponto vizinho na direção `d` ao longo de uma linha, ou null */
export function vizinho(i: number, d: number): number | null {
  const [dr, dc] = DIRS[d]!;
  if (dr !== 0 && dc !== 0 && !temDiagonal(i)) return null;
  const [r, c] = rc(i);
  return valido(r + dr, c + dc) ? idx(r + dr, c + dc) : null;
}

export const ARESTAS: [number, number][] = PONTOS.flatMap((i) =>
  DIRS.map((_, d) => vizinho(i, d))
    .filter((j): j is number => j !== null && j > i)
    .map((j) => [i, j] as [number, number]),
);

export type LanceRG = { tipo: 'mover'; de: number; para: number; capturado: number | null } | { tipo: 'parar' };

export interface RGState {
  versao: VersaoRG;
  raposa: number;
  gansos: number[];
  vez: Lado;
  /** a raposa no meio de uma sequência de saltos */
  seq: boolean;
  vencedor: Lado | null;
  ultimo: Extract<LanceRG, { tipo: 'mover' }> | null;
  capturados: number;
}

export function createInitialState(versao: VersaoRG = '1870'): RGState {
  const gansos: number[] = [];
  for (const r of [0, 1]) for (const c of [2, 3, 4]) gansos.push(idx(r, c));
  for (let c = 0; c < 7; c++) gansos.push(idx(2, c));
  if (versao === 'moderna') gansos.push(idx(3, 0), idx(3, 6));
  return { versao, raposa: CENTRO, gansos, vez: 'gansos', seq: false, vencedor: null, ultimo: null, capturados: 0 };
}

const ocupado = (s: RGState, i: number) => i === s.raposa || s.gansos.includes(i);

function saltosDaRaposa(s: RGState): LanceRG[] {
  const out: LanceRG[] = [];
  for (let d = 0; d < 8; d++) {
    const meio = vizinho(s.raposa, d);
    if (meio === null || !s.gansos.includes(meio)) continue;
    const para = vizinho(meio, d);
    if (para === null || ocupado(s, para)) continue;
    out.push({ tipo: 'mover', de: s.raposa, para, capturado: meio });
  }
  return out;
}

/** direções permitidas a um ganso: nunca para trás (os gansos começam em cima e descem) */
function dirsDoGanso(versao: VersaoRG): number[] {
  return DIRS.map((_, d) => d).filter((d) => {
    const [dr, dc] = DIRS[d]!;
    if (dr < 0) return false;
    if (versao === '1870' && dr !== 0 && dc !== 0) return false;
    return true;
  });
}

export function lancesLegais(s: RGState): LanceRG[] {
  if (s.vencedor !== null) return [];
  if (s.vez === 'raposa') {
    if (s.seq) return [...saltosDaRaposa(s), { tipo: 'parar' }];
    const out = saltosDaRaposa(s);
    for (let d = 0; d < 8; d++) {
      const para = vizinho(s.raposa, d);
      if (para !== null && !ocupado(s, para)) out.push({ tipo: 'mover', de: s.raposa, para, capturado: null });
    }
    return out;
  }
  const out: LanceRG[] = [];
  const dirs = dirsDoGanso(s.versao);
  for (const g of s.gansos)
    for (const d of dirs) {
      const para = vizinho(g, d);
      if (para !== null && !ocupado(s, para)) out.push({ tipo: 'mover', de: g, para, capturado: null });
    }
  return out;
}

const fim = (s: RGState): RGState => {
  if (s.gansos.length < MINIMO_GANSOS) return { ...s, vencedor: 'raposa' };
  if (lancesLegais(s).length === 0) return { ...s, vencedor: s.vez === 'raposa' ? 'gansos' : 'raposa' };
  return s;
};

export function jogar(s: RGState, l: LanceRG): RGState {
  const legal = lancesLegais(s).find((x) => (l.tipo === 'parar' ? x.tipo === 'parar' : x.tipo === 'mover' && x.de === l.de && x.para === l.para));
  if (!legal) return s;
  if (legal.tipo === 'parar') return fim({ ...s, seq: false, vez: 'gansos' });
  if (s.vez === 'gansos') {
    const gansos = s.gansos.map((g) => (g === legal.de ? legal.para : g));
    return fim({ ...s, gansos, vez: 'raposa', ultimo: legal });
  }
  const gansos = legal.capturado === null ? s.gansos : s.gansos.filter((g) => g !== legal.capturado);
  const t: RGState = { ...s, raposa: legal.para, gansos, ultimo: legal, capturados: s.capturados + (legal.capturado !== null ? 1 : 0) };
  if (legal.capturado !== null && gansos.length >= MINIMO_GANSOS && saltosDaRaposa(t).length > 0) return { ...t, seq: true };
  return fim({ ...t, seq: false, vez: 'gansos' });
}

/** quantos pontos a raposa alcança (andando ou saltando) — a nota dos dois lados */
export const liberdadeDaRaposa = (s: RGState) => {
  let n = 0;
  for (let d = 0; d < 8; d++) {
    const p = vizinho(s.raposa, d);
    if (p !== null && !ocupado(s, p)) n++;
  }
  return n + saltosDaRaposa(s).length * 2;
};
