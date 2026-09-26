import type { LanguagePack, LessonSeed, UnitSeed } from '@/data/types';
import { shuffle } from './answers';

export type NodeState = 'feita' | 'atual' | 'bloqueada';

export interface PathLesson {
  lesson: LessonSeed;
  unit: UnitSeed;
  state: NodeState;
  score: number | null;
}

/** Lições em ordem, com estado: a primeira não concluída é a atual; o resto fica bloqueado. */
export function buildPath(pack: LanguagePack, done: Map<string, number>): PathLesson[] {
  let currentFound = false;
  const out: PathLesson[] = [];
  for (const unit of pack.units) {
    for (const lesson of unit.lessons) {
      const score = done.get(lesson.id) ?? null;
      let state: NodeState;
      if (score !== null) state = 'feita';
      else if (!currentFound) {
        state = 'atual';
        currentFound = true;
      } else state = 'bloqueada';
      out.push({ lesson, unit, state, score });
    }
  }
  return out;
}

/** Unidade em que o aluno está (a da lição atual, ou a última se tudo foi concluído). */
export function currentUnit(path: PathLesson[]): UnitSeed | null {
  return (path.find((p) => p.state === 'atual') ?? path.at(-1))?.unit ?? null;
}

export function findLesson(pack: LanguagePack, id: string): { unit: UnitSeed; lesson: LessonSeed } | null {
  for (const unit of pack.units) {
    const lesson = unit.lessons.find((l) => l.id === id);
    if (lesson) return { unit, lesson };
  }
  return null;
}

/** A prova reúne palavras e lacunas das outras lições da unidade. */
export function resolveLesson(unit: UnitSeed, lesson: LessonSeed, rnd: () => number = Math.random): LessonSeed {
  if (lesson.kind !== 'prova') return lesson;
  const others = unit.lessons.filter((l) => l.kind !== 'prova');
  return {
    ...lesson,
    words: shuffle(
      others.flatMap((l) => l.words),
      rnd,
    ).slice(0, 6),
    cloze: shuffle(
      others.flatMap((l) => l.cloze),
      rnd,
    ).slice(0, 5),
  };
}

/** Nota mínima na prova para pular até uma unidade (teste de nivelamento). */
export const JUMP_PASS = 0.8;

/** Lições marcadas como feitas ao passar no teste para pular: todas até a unidade, inclusive. */
export function jumpLessons(pack: LanguagePack, unitId: string): string[] {
  const i = pack.units.findIndex((u) => u.id === unitId);
  return i < 0 ? [] : pack.units.slice(0, i + 1).flatMap((u) => u.lessons.map((l) => l.id));
}
