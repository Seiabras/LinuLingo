/**
 * Motor do Halma a dois (George Howard Monks, 1883/84). Fontes em `data/jogos-conhecimento.ts`.
 *
 * Tabuleiro de 16×16. A dois, cada jogador começa com 19 peças no seu canto (o “acampamento”: 5,
 * 5, 4, 3 e 2 casas por fileira) e tenta levar todas para o canto oposto. Na vez, uma peça anda uma
 * casa em qualquer das 8 direções, OU salta por cima de uma peça vizinha (de qualquer cor) até a casa
 * vazia logo depois, quantas vezes quiser no mesmo lance. Nada é capturado e saltar não é
 * obrigatório. Passo e salto não se misturam.
 *
 * A regra original não trata do bloqueio (o adversário que deixa peças paradas no seu canto de
 * chegada). Aqui, como nas damas chinesas do app, vence também quem enche o canto de chegada, desde
 * que tenha pelo menos uma peça sua lá: as casas que faltam estão ocupadas por peças do outro.
 */
export type JogadorH = 0 | 1;

export const LADO = 16;
export const PECAS = 19;
export const idx = (r: number, c: number) => r * LADO + c;
export const rc = (i: number): [number, number] => [Math.floor(i / LADO), i % LADO];

/** o acampamento do canto de cima à esquerda: r + c ≤ 5, dentro do 5×5 */
const cantoSuperior: number[] = (() => {
  const out: number[] = [];
  for (let r = 0; r < 5; r++) for (let c = 0; c < 5; c++) if (r + c <= 5) out.push(idx(r, c));
  return out;
})();
/** acampamento de cada jogador: o 0 começa embaixo à direita, o 1 em cima à esquerda */
export const ACAMPAMENTO: Record<JogadorH, number[]> = {
  1: cantoSuperior,
  0: cantoSuperior.map((i) => idx(LADO - 1 - rc(i)[0], LADO - 1 - rc(i)[1])),
};
export const destinoDe = (j: JogadorH) => ACAMPAMENTO[j === 0 ? 1 : 0];

const DIRS: [number, number][] = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 0],
  [1, 1],
];
const dentro = (r: number, c: number) => r >= 0 && r < LADO && c >= 0 && c < LADO;

export interface LanceH {
  de: number;
  para: number;
  /** as casas por onde passa, sem a de saída (um passo: só [para]) */
  caminho: number[];
}

export interface HalmaState {
  casas: (JogadorH | null)[];
  vez: JogadorH;
  vencedor: JogadorH | null;
  ultimo: LanceH | null;
  lances: number;
}

export function createInitialState(comeca: JogadorH = 0): HalmaState {
  const casas: (JogadorH | null)[] = Array(LADO * LADO).fill(null);
  for (const j of [0, 1] as JogadorH[]) for (const i of ACAMPAMENTO[j]) casas[i] = j;
  return { casas, vez: comeca, vencedor: null, ultimo: null, lances: 0 };
}

/** Todos os destinos de uma peça: os passos e, à parte, os saltos encadeados (busca em largura). */
export function lancesDaPeca(casas: (JogadorH | null)[], de: number): LanceH[] {
  const out: LanceH[] = [];
  const [r0, c0] = rc(de);
  for (const [dr, dc] of DIRS) {
    const r = r0 + dr;
    const c = c0 + dc;
    if (dentro(r, c) && casas[idx(r, c)] === null) out.push({ de, para: idx(r, c), caminho: [idx(r, c)] });
  }
  const visto = new Map<number, number[]>([[de, []]]);
  const fila = [de];
  while (fila.length) {
    const p = fila.shift()!;
    const [r, c] = rc(p);
    for (const [dr, dc] of DIRS) {
      const rm = r + dr;
      const cm = c + dc;
      const r2 = r + 2 * dr;
      const c2 = c + 2 * dc;
      if (!dentro(r2, c2)) continue;
      const meio = idx(rm, cm);
      const alvo = idx(r2, c2);
      if (casas[meio] === null || meio === de) continue;
      if (casas[alvo] !== null && alvo !== de) continue;
      if (visto.has(alvo)) continue;
      const caminho = [...visto.get(p)!, alvo];
      visto.set(alvo, caminho);
      fila.push(alvo);
      if (alvo !== de) out.push({ de, para: alvo, caminho });
    }
  }
  return out;
}

export function lancesLegais(s: HalmaState): LanceH[] {
  if (s.vencedor !== null) return [];
  const out: LanceH[] = [];
  for (let i = 0; i < s.casas.length; i++) if (s.casas[i] === s.vez) out.push(...lancesDaPeca(s.casas, i));
  return out;
}

/** chegou: todas as peças no destino, ou o destino cheio com pelo menos uma sua */
export function chegou(casas: (JogadorH | null)[], j: JogadorH): boolean {
  const d = destinoDe(j);
  const minhas = d.filter((i) => casas[i] === j).length;
  if (minhas === PECAS) return true;
  return minhas > 0 && d.every((i) => casas[i] !== null);
}

export function jogar(s: HalmaState, l: LanceH): HalmaState {
  if (s.vencedor !== null || s.casas[l.de] !== s.vez) return s;
  const legal = lancesDaPeca(s.casas, l.de).find((x) => x.para === l.para);
  if (!legal) return s;
  const casas = [...s.casas];
  casas[legal.para] = s.vez;
  casas[legal.de] = null;
  const vencedor = chegou(casas, s.vez) ? s.vez : null;
  return { casas, vez: s.vez === 0 ? 1 : 0, vencedor, ultimo: legal, lances: s.lances + 1 };
}

/** quanto falta: a soma, peça por peça, de linha + coluna até o canto de destino */
export function falta(casas: (JogadorH | null)[], j: JogadorH): number {
  let t = 0;
  for (let i = 0; i < casas.length; i++) {
    if (casas[i] !== j) continue;
    const [r, c] = rc(i);
    t += j === 0 ? r + c : 2 * (LADO - 1) - r - c;
  }
  return t;
}
export const noDestino = (casas: (JogadorH | null)[], j: JogadorH) => destinoDe(j).filter((i) => casas[i] === j).length;
