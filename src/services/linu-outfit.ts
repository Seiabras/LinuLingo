import { useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { krillBalance, ROUPAS_LINU, withOutfit, type LinuOutfit } from '@/data/roupas-linu';
import { grantStickerNow, type StickerEvent } from './album';

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

async function saveBought(db: SQLiteDatabase, ids: string[]): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [SHOP, ids.join(',')]);
}

/** Compra uma roupinha da loja se o krill der; devolve a lista nova, ou null se não deu. */
export async function buyOutfit(db: SQLiteDatabase, id: string, totalXp: number): Promise<string[] | null> {
  const o = ROUPAS_LINU.find((x) => x.id === id);
  const bought = await loadBought(db);
  const [gasto, won] = await Promise.all([loadPacoteGasto(db), loadPacoteWon(db)]);
  if (!o?.price || bought.includes(id) || won.includes(id) || krillBalance(totalXp, bought, gasto) < o.price) return null;
  const next = [...bought, id];
  await saveBought(db, next);
  return next;
}

// ---------- pacote de chance (sorteia entre uma figurinha e uma roupinha do mundo) ----------

const PACOTE_KEY = 'pacote_gasto';
/** Preço em krill de cada pacote de chance. */
export const PACOTE_PRICE = 20;
/** Chance de o pacote dar uma roupinha do mundo em vez de uma figurinha (se ainda faltar alguma). */
const PACOTE_CHANCE_ROUPA = 0.3;

async function loadPacoteGasto(db: SQLiteDatabase): Promise<number> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [PACOTE_KEY]);
  return Number(r?.value ?? 0);
}

/** Roupinhas do mundo ganhas de brinde no pacote de chance (não entram no preço da loja: já foram pagas no pacote). */
const PACOTE_WON_KEY = 'pacote_roupas';

export async function loadPacoteWon(db: SQLiteDatabase): Promise<string[]> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [PACOTE_WON_KEY]);
  return (r?.value ?? '').split(',').filter(Boolean);
}

async function savePacoteWon(db: SQLiteDatabase, ids: string[]): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [PACOTE_WON_KEY, ids.join(',')]);
}

/** Quanto krill dá pra gastar agora, já descontando o que foi gasto em pacotes de chance. */
export async function krillForPacote(db: SQLiteDatabase, totalXp: number): Promise<number> {
  const [bought, gasto] = await Promise.all([loadBought(db), loadPacoteGasto(db)]);
  return krillBalance(totalXp, bought, gasto);
}

export type PacotePrize = { kind: 'figurinha'; sticker: StickerEvent } | { kind: 'roupa'; outfit: LinuOutfit };

/**
 * Abre um pacote de chance: custa `PACOTE_PRICE` krill (sem dinheiro real) e sorteia entre uma
 * figurinha (como as das atividades) e, com menos chance, uma roupinha do mundo que ainda falta.
 * Null se não tiver krill suficiente. A roupinha ganha não cobra o preço dela de novo: já foi paga
 * no preço do pacote.
 */
export async function openPacote(db: SQLiteDatabase, lang: string, totalXp: number, rnd: () => number = Math.random): Promise<PacotePrize | null> {
  const [bought, won, gasto] = await Promise.all([loadBought(db), loadPacoteWon(db), loadPacoteGasto(db)]);
  if (krillBalance(totalXp, bought, gasto) < PACOTE_PRICE) return null;
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [PACOTE_KEY, String(gasto + PACOTE_PRICE)]);
  const missing = ROUPAS_LINU.filter((o) => o.price && !bought.includes(o.id) && !won.includes(o.id));
  if (missing.length && rnd() < PACOTE_CHANCE_ROUPA) {
    const outfit = missing[Math.floor(rnd() * missing.length) % missing.length];
    await savePacoteWon(db, [...won, outfit.id]);
    return { kind: 'roupa', outfit };
  }
  const sticker = await grantStickerNow(db, lang, rnd);
  return { kind: 'figurinha', sticker };
}
