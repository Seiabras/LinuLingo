import type { UnitSeed } from '@/data/types';

/**
 * Nós de reparo: a revisão espaçada (SM-2) aparecendo na própria trilha. Uma parada já vencida cujas
 * palavras estão no ponto de esquecer (revisão vencida no SRS) ganha uma chave inglesa no mapa — a
 * “ponte precisa de manutenção”. O reparo é uma revisão só com essas palavras, com XP em dobro.
 */

/** Quantas palavras vencidas de uma parada pedem reparo. */
export const REPARO_MIN = 3;
/** O reparo vale o dobro da revisão comum. */
export const REPARO_XP_MULT = 2;

/** As palavras (word_target) ensinadas nas lições de uma unidade (a prova só repete as outras). */
export function palavrasDaUnidade(unit: UnitSeed): Set<string> {
  return new Set(unit.lessons.filter((l) => l.kind !== 'prova').flatMap((l) => l.words));
}

/**
 * Para cada parada da rota, quantas palavras dela estão vencidas — 0 quando não precisa de reparo
 * (parada ainda não concluída, ou menos de `REPARO_MIN` palavras vencidas).
 */
export function reparoDasParadas(paradas: { unit: UnitSeed | null }[], concluidas: boolean[], vencidas: ReadonlySet<string>): number[] {
  return paradas.map((p, i) => {
    if (!p.unit || !concluidas[i]) return 0;
    let n = 0;
    for (const w of palavrasDaUnidade(p.unit)) if (vencidas.has(w)) n++;
    return n >= REPARO_MIN ? n : 0;
  });
}
