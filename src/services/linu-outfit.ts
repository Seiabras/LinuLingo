import { useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { ROUPAS_LINU } from '@/data/roupas-linu';

/**
 * A roupinha que o Linu está usando, lida por todos os Linus da tela (fica guardada em Meta).
 * Um armazenamento pequeno fora do React, como o do tema: o Linu aparece em lugares sem o contexto do app.
 */
const KEY = 'roupa_linu';
let current: string | null = null;
const listeners = new Set<() => void>();

export function setCurrentOutfit(id: string | null) {
  current = id && ROUPAS_LINU.some((o) => o.id === id) ? id : null;
  listeners.forEach((l) => l());
}

export function useLinuOutfit(): string | null {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => current,
    () => current,
  );
}

export async function loadOutfit(db: SQLiteDatabase): Promise<void> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [KEY]);
  setCurrentOutfit(r?.value || null);
}

export async function saveOutfit(db: SQLiteDatabase, id: string | null): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [KEY, id ?? '']);
  setCurrentOutfit(id);
}

/** Lições concluídas em cada idioma (os ids começam pelo código: «es-u1-l1»). */
export async function lessonsByLanguage(db: SQLiteDatabase): Promise<Record<string, number>> {
  const rows = await db.getAllAsync<{ lesson_id: string }>('SELECT lesson_id FROM Lesson_Progress WHERE user_id = ?', [LOCAL_USER_ID]);
  const out: Record<string, number> = {};
  for (const { lesson_id } of rows) {
    const lang = lesson_id.split('-')[0];
    out[lang] = (out[lang] ?? 0) + 1;
  }
  return out;
}
