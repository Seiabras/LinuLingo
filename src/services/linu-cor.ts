import { useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { CORES_LINU } from '@/data/cores-linu';

/**
 * A cor do Linu (estilo Club Penguin), lida por todos os Linus da tela — mesmo esquema do visual
 * (src/services/linu-outfit.ts): guardada em Meta, um armazenamento pequeno fora do React.
 */
const KEY = 'cor_linu';
let current = CORES_LINU[0].id;
const listeners = new Set<() => void>();

export function setCurrentCor(id: string) {
  current = CORES_LINU.some((c) => c.id === id) ? id : CORES_LINU[0].id;
  listeners.forEach((l) => l());
}

export function useLinuCor(): string {
  return useSyncExternalStore(
    (l) => {
      listeners.add(l);
      return () => listeners.delete(l);
    },
    () => current,
    () => current,
  );
}

export async function loadCor(db: SQLiteDatabase): Promise<void> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [KEY]);
  setCurrentCor(r?.value ?? CORES_LINU[0].id);
}

export async function saveCor(db: SQLiteDatabase, id: string): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [KEY, id]);
  setCurrentCor(id);
}
