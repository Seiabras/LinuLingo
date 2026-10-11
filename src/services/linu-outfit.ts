import { useSyncExternalStore } from 'react';
import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { MAX_CONGELAMENTOS } from './progress';
import { krillBalance, ROUPAS_LINU, withOutfit, type LinuOutfit } from '@/data/roupas-linu';
import { grantStickerNow, type StickerEvent } from './album';
import { ITENS_LOJA, PACOTES, possuidos, precoAgora } from '@/data/loja-jogos';

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

async function loadSoPacote(db: SQLiteDatabase): Promise<number> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [PACOTE_KEY]);
  return Number(r?.value ?? 0);
}

/** Krill gasto fora das roupinhas: os pacotes de chance, a loja dos jogos e os congelamentos (menos o krill de teste). */
async function loadPacoteGasto(db: SQLiteDatabase): Promise<number> {
  const [pacotes, jogos, congelamentos, extra] = await Promise.all([loadSoPacote(db), loadComprasJogos(db), loadGastoCongelamentos(db), loadKrillExtra(db)]);
  return pacotes + jogos.reduce((s, c) => s + c.preco, 0) + congelamentos - extra;
}

// ---------- congelamento da ofensiva: dá para comprar com krill (pedido do dono, 11/10/2026) ----------

/** Preço em krill de um congelamento (o mesmo que 100 XP de estudo). */
export const PRECO_CONGELAMENTO = 10;
const CONGELAMENTOS_KEY = 'congelamentos_gasto';

async function loadGastoCongelamentos(db: SQLiteDatabase): Promise<number> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [CONGELAMENTOS_KEY]);
  return Number(r?.value ?? 0) || 0;
}

/**
 * Compra um congelamento se o krill der e ainda couber (no máximo `MAX_CONGELAMENTOS` guardados).
 * Devolve o motivo quando não deu.
 */
export async function comprarCongelamento(db: SQLiteDatabase, totalXp: number): Promise<'ok' | 'cheio' | 'sem-krill'> {
  const u = await db.getFirstAsync<{ streak_freezes: number }>('SELECT streak_freezes FROM Users WHERE id = ?', [LOCAL_USER_ID]);
  if ((u?.streak_freezes ?? 0) >= MAX_CONGELAMENTOS) return 'cheio';
  if ((await krillForPacote(db, totalXp)) < PRECO_CONGELAMENTO) return 'sem-krill';
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [
    CONGELAMENTOS_KEY,
    String((await loadGastoCongelamentos(db)) + PRECO_CONGELAMENTO),
  ]);
  await db.runAsync('UPDATE Users SET streak_freezes = streak_freezes + 1 WHERE id = ?', [LOCAL_USER_ID]);
  return 'ok';
}

// ---------- modo desenvolvedor: krill de teste e a loja toda liberada (pedido do dono, 11/10/2026) ----------

const KRILL_EXTRA_KEY = 'krill_extra';

async function loadKrillExtra(db: SQLiteDatabase): Promise<number> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [KRILL_EXTRA_KEY]);
  return Number(r?.value ?? 0) || 0;
}

/** Soma krill de teste (sem XP): entra como um desconto no que já foi gasto. */
export async function darKrillDeTeste(db: SQLiteDatabase, n: number): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [KRILL_EXTRA_KEY, String((await loadKrillExtra(db)) + n)]);
}

/**
 * Libera de graça tudo o que a loja vende: as roupinhas do mundo (como brinde, igual às do pacote de
 * chance) e todos os itens da loja dos jogos (com preço 0). Devolve quantos itens foram liberados.
 */
export async function liberarTodaALoja(db: SQLiteDatabase): Promise<number> {
  const [bought, won, compras] = await Promise.all([loadBought(db), loadPacoteWon(db), loadComprasJogos(db)]);
  const roupas = ROUPAS_LINU.filter((o) => o.price && !bought.includes(o.id) && !won.includes(o.id)).map((o) => o.id);
  if (roupas.length) await savePacoteWon(db, [...won, ...roupas]);
  const tem = possuidos(compras.map((c) => c.id));
  const itens = ITENS_LOJA.filter((i) => !tem.has(i.id)).map((i) => ({ id: i.id, preco: 0 }));
  if (itens.length) await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [JOGOS_KEY, JSON.stringify([...compras, ...itens])]);
  return roupas.length + itens.length;
}

// ---------- loja dos jogos do conhecimento (tabuleiros, jogadores, peças de jogo, coleções) ----------

const JOGOS_KEY = 'compras_jogos';

/** As compras da loja dos jogos, com o preço pago em cada uma (o pacote cobra só o que faltava). */
export async function loadComprasJogos(db: SQLiteDatabase): Promise<{ id: string; preco: number }[]> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [JOGOS_KEY]);
  try {
    const v = JSON.parse(r?.value ?? '[]') as { id: string; preco: number }[];
    return Array.isArray(v) ? v.filter((c) => typeof c?.id === 'string' && typeof c?.preco === 'number') : [];
  } catch {
    return [];
  }
}

/** Compra um item ou um pacote da loja dos jogos se o krill der; devolve as compras novas, ou null. */
export async function comprarItemJogo(db: SQLiteDatabase, id: string, totalXp: number): Promise<{ id: string; preco: number }[] | null> {
  const [compras, bought, gasto] = await Promise.all([loadComprasJogos(db), loadBought(db), loadPacoteGasto(db)]);
  const ids = compras.map((c) => c.id);
  const existe = ITENS_LOJA.some((i) => i.id === id) || PACOTES.some((c) => c.id === id);
  if (!existe || possuidos(ids).has(id)) return null;
  const preco = precoAgora(id, ids);
  if (krillBalance(totalXp, bought, gasto) < preco) return null;
  const next = [...compras, { id, preco }];
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [JOGOS_KEY, JSON.stringify(next)]);
  return next;
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
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [PACOTE_KEY, String((await loadSoPacote(db)) + PACOTE_PRICE)]);
  const missing = ROUPAS_LINU.filter((o) => o.price && !bought.includes(o.id) && !won.includes(o.id));
  if (missing.length && rnd() < PACOTE_CHANCE_ROUPA) {
    const outfit = missing[Math.floor(rnd() * missing.length) % missing.length];
    await savePacoteWon(db, [...won, outfit.id]);
    return { kind: 'roupa', outfit };
  }
  const sticker = await grantStickerNow(db, lang, rnd);
  return { kind: 'figurinha', sticker };
}
