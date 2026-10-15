/**
 * O Linu no jogo da velha 4×4 (quatro em linha), que entrou com a escolha de tamanho (item 21). No
 * 3×3 continua a busca até o fim de `BUSCA_VELHA` (`jogos-ia.ts`); no 4×4 a árvore é grande demais
 * para isso, então a busca para numa profundidade e dá nota às linhas: uma linha só com marcas de um
 * lado vale mais quanto mais marcas ele tem nela.
 */
import { BUSCA_VELHA, escolherLance, NIVEIS, type JogoBusca } from './jogos-ia';
import type { NivelLinu } from './jogos-prefs';
import { jogar, lancesLegais, type LinhaState, type Marca } from './linha-engine';

const VITORIA = 1_000_000;
const PESO = [0, 1, 8, 60, 0];

/** As linhas de n casas num tabuleiro n×n: linhas, colunas e as duas diagonais. */
function linhasDe(n: number): number[][] {
  const out: number[][] = [];
  for (let r = 0; r < n; r++) out.push(Array.from({ length: n }, (_, c) => r * n + c));
  for (let c = 0; c < n; c++) out.push(Array.from({ length: n }, (_, r) => r * n + c));
  out.push(Array.from({ length: n }, (_, k) => k * n + k));
  out.push(Array.from({ length: n }, (_, k) => k * n + (n - 1 - k)));
  return out;
}
const LINHAS4 = linhasDe(4);

/** Nota da posição 4×4 para quem tem a vez. */
export function avaliarVelha4(s: LinhaState): number {
  const eu: Marca = s.turn;
  let nota = 0;
  for (const l of LINHAS4) {
    let m = 0;
    let o = 0;
    for (const i of l) {
      const v = s.board[i];
      if (v === eu) m++;
      else if (v !== null) o++;
    }
    if (o === 0) nota += PESO[m]!;
    if (m === 0) nota -= PESO[o]!;
  }
  return nota;
}

/** as quatro casas do meio primeiro: elas estão em mais linhas */
const MEIO4 = new Set([5, 6, 9, 10]);
export const BUSCA_VELHA4: JogoBusca<LinhaState, number> = {
  lances: (s) => lancesLegais(s).sort((a, b) => (MEIO4.has(b) ? 1 : 0) - (MEIO4.has(a) ? 1 : 0)),
  aplicar: (s, i) => jogar(s, i),
  avaliar: avaliarVelha4,
  fim: (s) => (s.winner === null ? null : s.winner === 'empate' ? 0 : s.winner === s.turn ? VITORIA : -VITORIA),
};

export const NIVEIS_VELHA4: Record<NivelLinu, { prof: number; ruido: number }> = {
  facil: { prof: 1, ruido: 6 },
  medio: { prof: 3, ruido: 0 },
  dificil: { prof: 6, ruido: 0 },
};

/** A casa que o Linu marca, no 3×3 ou no 4×4. */
export function lanceVelha(s: LinhaState, nivel: NivelLinu, semente = Math.random): number | null {
  if (s.n === 3) {
    const { prof, ruido } = NIVEIS.velha[nivel];
    return escolherLance(s, prof, BUSCA_VELHA, ruido, semente);
  }
  const { prof, ruido } = NIVEIS_VELHA4[nivel];
  return escolherLance(s, prof, BUSCA_VELHA4, ruido, semente);
}
