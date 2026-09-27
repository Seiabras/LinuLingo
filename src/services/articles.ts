import type { SQLiteDatabase } from 'expo-sqlite';
import { getMeta, setMeta } from '@/database/queries';

/** Os artigos lidos (Meta, entra na cópia do progresso): id → acertos na última leitura. */
const KEY = 'artigos_lidos';
export const ARTICLE_XP = { read: 10, perfect: 5 } as const;

export type ArticlesRead = Record<string, { at: string; hits: number; total: number }>;

export async function loadArticlesRead(db: SQLiteDatabase): Promise<ArticlesRead> {
  try {
    return JSON.parse((await getMeta(db, KEY)) ?? '{}') as ArticlesRead;
  } catch {
    return {};
  }
}

export async function markArticleRead(db: SQLiteDatabase, id: string, hits: number, total: number): Promise<{ first: boolean }> {
  const read = await loadArticlesRead(db);
  const first = !read[id];
  read[id] = { at: new Date().toISOString(), hits, total };
  await setMeta(db, KEY, JSON.stringify(read));
  return { first };
}

/** XP de uma leitura: só a primeira vale os pontos cheios; acertar tudo dá um bônus. */
export function articleXp(first: boolean, hits: number, total: number): number {
  return (first ? ARTICLE_XP.read : 2) + (hits === total && total > 0 ? ARTICLE_XP.perfect : 0);
}
