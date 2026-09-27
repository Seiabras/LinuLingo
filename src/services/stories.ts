import type { StorySeed } from '@/data/types';
import { SUBLEVELS, type SubLevel } from '@/types';

/** Ids dos nós que são finais. */
export function endingIds(story: StorySeed): string[] {
  return Object.entries(story.nodes)
    .filter(([, n]) => n.ending)
    .map(([id]) => id);
}

/** Nós alcançáveis a partir do início (para validar o conteúdo). */
export function reachable(story: StorySeed): Set<string> {
  const seen = new Set<string>();
  const stack = [story.start];
  while (stack.length) {
    const id = stack.pop()!;
    if (seen.has(id) || !story.nodes[id]) continue;
    seen.add(id);
    for (const c of story.nodes[id].choices ?? []) if (c.next) stack.push(c.next);
  }
  return seen;
}

export const STORY_XP = { finish: 15, firstEnding: 10, noMistakes: 5 } as const;

export function storyXp(firstTime: boolean, mistakes: number, tone: 'bom' | 'neutro'): number {
  return STORY_XP.finish + (firstTime ? STORY_XP.firstEnding : 0) + (mistakes === 0 && tone === 'bom' ? STORY_XP.noMistakes : 0);
}

/**
 * Onde a leitura fica em relação ao nível do aluno (o subnível da trilha): abaixo ou no nível, lê à
 * vontade; o subnível seguinte fica aberto como desafio; dali para cima, só depois de chegar na trilha
 * (o vocabulário e a gramática ainda não foram vistos).
 */
export type ReadingFit = 'revisao' | 'no-nivel' | 'desafio' | 'acima';

export function readingFit(readingLevel: SubLevel, studentLevel: SubLevel): ReadingFit {
  const d = SUBLEVELS.indexOf(readingLevel) - SUBLEVELS.indexOf(studentLevel);
  return d < 0 ? 'revisao' : d === 0 ? 'no-nivel' : d === 1 ? 'desafio' : 'acima';
}

export const canRead = (fit: ReadingFit) => fit !== 'acima';
