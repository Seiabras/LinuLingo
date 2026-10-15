/**
 * Os quadros da animação da semeadura das mancalas (oware e Kalah): a mão pega as sementes da cova,
 * deixa uma em cada cova do caminho, e as capturadas voam para o depósito (ou para o placar, no
 * oware). Só a animação usa isto: as regras continuam nos motores, e o último quadro é sempre a
 * posição que o motor devolveu.
 */

export interface Voo {
  /** a cova de onde as sementes saem */
  de: number;
  /** quantas sementes */
  n: number;
  /** para onde vão: o índice do depósito (Kalah) ou o jogador que ficou com elas (oware) */
  para: number;
}

export interface Quadro {
  tipo: 'pega' | 'semeia' | 'voa' | 'chega';
  covas: number[];
  /** a cova que acabou de receber uma semente */
  cai: number | null;
  /** as sementes que ainda estão na mão */
  mao: number;
  /** as sementes voando (capturadas, ou recolhidas no fim do jogo) */
  voam: Voo[];
  /** as covas que acabaram de receber as sementes que voaram */
  chegou: number[];
}

export interface Semeadura {
  antes: readonly number[];
  origem: number;
  /** as covas que recebem uma semente, na ordem */
  caminho: readonly number[];
  /** a posição final (a que o motor devolveu) */
  depois: readonly number[];
  /**
   * As covas que podem esvaziar depois da semeadura e para onde as sementes delas vão, em ordem (a
   * captura primeiro, a recolha do fim do jogo depois). Só voam as covas que terminam vazias.
   */
  grupos?: readonly { de: readonly number[]; para: number }[];
  /** se `para` é uma cova do mesmo vetor (o depósito do Kalah): aí as sementes somam lá ao chegar */
  destinoNasCovas?: boolean;
}

export function quadrosDaSemeadura({ antes, origem, caminho, depois, grupos = [], destinoNasCovas = false }: Semeadura): Quadro[] {
  const quadros: Quadro[] = [];
  let covas = antes.slice();
  let mao = covas[origem]!;
  covas[origem] = 0;
  quadros.push({ tipo: 'pega', covas, cai: null, mao, voam: [], chegou: [] });
  for (const i of caminho) {
    covas = covas.slice();
    covas[i]!++;
    mao--;
    quadros.push({ tipo: 'semeia', covas, cai: i, mao, voam: [], chegou: [] });
  }
  for (const g of grupos) {
    const voam: Voo[] = g.de.filter((i) => covas[i]! > 0 && depois[i] === 0).map((i) => ({ de: i, n: covas[i]!, para: g.para }));
    if (voam.length === 0) continue;
    covas = covas.slice();
    for (const v of voam) covas[v.de] = 0;
    quadros.push({ tipo: 'voa', covas, cai: null, mao: 0, voam, chegou: [] });
    if (destinoNasCovas) {
      covas = covas.slice();
      for (const v of voam) covas[v.para]! += v.n;
      quadros.push({ tipo: 'chega', covas, cai: null, mao: 0, voam: [], chegou: [...new Set(voam.map((v) => v.para))] });
    }
  }
  // garantia: o último quadro é exatamente a posição do motor
  if (covas.some((n, i) => n !== depois[i])) quadros.push({ tipo: 'chega', covas: depois.slice(), cai: null, mao: 0, voam: [], chegou: [] });
  return quadros;
}

/** Quanto cada quadro fica na tela (ms): a semeadura toda dura no máximo uns 2,6 s. */
export function duracaoDoQuadro(q: Quadro, sementes: number): number {
  if (q.tipo === 'pega') return 220;
  if (q.tipo === 'voa') return 560;
  if (q.tipo === 'chega') return 260;
  return Math.max(90, Math.min(240, Math.round(2600 / Math.max(1, sementes))));
}
