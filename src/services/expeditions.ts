import type { SQLiteDatabase } from 'expo-sqlite';
import { STOPS_PER_EXPEDITION } from '@/data/expedicoes';

/**
 * Progresso da expedição da semana (Meta «expedicao:<idioma>:<semana>»): em cada parada, se chegou,
 * quantas tentativas e quantas dicas usou. As estrelas saem daí; ao terminar, a figurinha rara.
 */
export interface StopProgress {
  done: boolean;
  /** toques errados no mapa */
  misses: number;
  /** dicas usadas (a pista escrita, a tradução) */
  hints: number;
}

export interface ExpeditionProgress {
  lang: string;
  week: string;
  stops: StopProgress[];
  /** a figurinha rara ganha ao terminar (id do álbum) */
  reward: string | null;
}

export const EXPEDITION_XP = { stop: 5, finish: 15 } as const;
/** Depois de tantos erros numa parada, o mapa mostra onde era. */
export const MAX_MISSES = 3;

const key = (lang: string, week: string) => `expedicao:${lang}:${week}`;
const fresh = (lang: string, week: string): ExpeditionProgress => ({
  lang,
  week,
  stops: Array.from({ length: STOPS_PER_EXPEDITION }, () => ({ done: false, misses: 0, hints: 0 })),
  reward: null,
});

export async function loadExpedition(db: SQLiteDatabase, lang: string, week: string): Promise<ExpeditionProgress> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [key(lang, week)]);
  if (!r?.value) return fresh(lang, week);
  try {
    const p = JSON.parse(r.value) as ExpeditionProgress;
    return p.stops?.length === STOPS_PER_EXPEDITION ? p : fresh(lang, week);
  } catch {
    return fresh(lang, week);
  }
}

export async function saveExpedition(db: SQLiteDatabase, p: ExpeditionProgress): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [key(p.lang, p.week), JSON.stringify(p)]);
}

/** 3 estrelas sem dica e sem erro; cada dica ou erro tira uma (mínimo 1 se chegou sozinho; 0 se o mapa revelou). */
export function stopStars(s: StopProgress): number {
  if (!s.done) return 0;
  if (s.misses >= MAX_MISSES) return 0;
  return Math.max(1, 3 - s.hints - s.misses);
}

export const currentStop = (p: ExpeditionProgress) => p.stops.findIndex((s) => !s.done);
export const finished = (p: ExpeditionProgress) => p.stops.every((s) => s.done);
/** as 3 paradas acertadas de verdade (nenhuma revelada pelo mapa) — exigido pra ganhar a figurinha rara. */
export const allCorrect = (p: ExpeditionProgress) => p.stops.every((s) => stopStars(s) > 0);
