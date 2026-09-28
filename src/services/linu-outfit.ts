import { useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { krillBalance, ROUPAS_LINU, withOutfit } from '@/data/roupas-linu';

/**
 * O visual do Linu — uma peça em cada lugar (cabeça, corpo, mão, rosto) —, lido por todos os Linus da
 * tela (fica guardado em Meta, ids separados por vírgula; o formato antigo, com uma peça só, continua
 * valendo). Um armazenamento pequeno fora do React, como o do tema: o Linu aparece em lugares sem o
 * contexto do app.
 */
const KEY = 'roupa_linu';
let current: string[] = [];
const listeners = new Set<() => void>();

export function setCurrentOutfit(ids: readonly string[]) {
  // só as que existem, uma por lugar (a última de cada lugar vale)
  let look: string[] = [];
  for (const id of ids) if (ROUPAS_LINU.some((o) => o.id === id)) look = withOutfit(look, id);
  current = look;
  listeners.forEach((l) => l());
}

export function useLinuOutfit(): string[] {
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
  setCurrentOutfit((r?.value ?? '').split(',').filter(Boolean));
}

export async function saveOutfit(db: SQLiteDatabase, ids: readonly string[]): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [KEY, ids.join(',')]);
  setCurrentOutfit(ids);
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

/** Roupinhas compradas na loja (ids separados por vírgula em Meta). */
const SHOP = 'loja_linu';

export async function loadBought(db: SQLiteDatabase): Promise<string[]> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [SHOP]);
  return (r?.value ?? '').split(',').filter(Boolean);
}

/** Compra uma roupinha da loja se o krill der; devolve a lista nova, ou null se não deu. */
export async function buyOutfit(db: SQLiteDatabase, id: string, totalXp: number): Promise<string[] | null> {
  const o = ROUPAS_LINU.find((x) => x.id === id);
  const bought = await loadBought(db);
  if (!o?.price || bought.includes(id) || krillBalance(totalXp, bought) < o.price) return null;
  const next = [...bought, id];
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [SHOP, next.join(',')]);
  return next;
}
