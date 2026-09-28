import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';

/** As lições de mini-curso feitas (Meta, entra na cópia do progresso): «curso/lição» → acertos. */
const KEY = 'minicursos';
export const MINI_XP = { lesson: 10, perfect: 5 } as const;

export type MiniProgress = Record<string, { at: string; hits: number; total: number }>;

export const lessonKey = (course: string, lesson: string) => `${course}/${lesson}`;

export async function loadMiniProgress(db: SQLiteDatabase): Promise<MiniProgress> {
  try {
    return JSON.parse((await getMeta(db, KEY)) ?? '{}') as MiniProgress;
  } catch {
    return {};
  }
}

export async function markMiniLesson(db: SQLiteDatabase, course: string, lesson: string, hits: number, total: number): Promise<{ first: boolean }> {
  const done = await loadMiniProgress(db);
  const k = lessonKey(course, lesson);
  const first = !done[k];
  done[k] = { at: new Date().toISOString(), hits, total };
  await setMeta(db, KEY, JSON.stringify(done));
  return { first };
}

/** Como nos artigos: a primeira vez vale os pontos cheios; acertar tudo dá um bônus. */
export function miniXp(first: boolean, hits: number, total: number): number {
  return (first ? MINI_XP.lesson : 2) + (hits === total && total > 0 ? MINI_XP.perfect : 0);
}
