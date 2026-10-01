import type { SQLiteDatabase } from 'expo-sqlite';
import { FAUNA_MUSICA, HOMELANDS, type NatureItem } from '@/data/fauna-musica';

/**
 * Álbum de figurinhas: os bichos e os instrumentos de cada país (os do mapa). Cada atividade
 * concluída dá uma figurinha, de preferência dos países do idioma estudado; as repetidas contam, e
 * 3 repetidas trocam por uma que falta.
 */

export interface Sticker {
  id: string;
  iso: string;
  kind: 'bicho' | 'instrumento';
  item: NatureItem;
}

const slug = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');

export const STICKERS: Sticker[] = Object.entries(FAUNA_MUSICA).flatMap(([iso, n]) => [
  ...n.animals.map((item) => ({ id: `${iso}:bicho:${slug(item.name)}`, iso, kind: 'bicho' as const, item })),
  ...n.instruments.map((item) => ({ id: `${iso}:instrumento:${slug(item.name)}`, iso, kind: 'instrumento' as const, item })),
]);
const BY_ID = new Map(STICKERS.map((s) => [s.id, s]));
export const stickerById = (id: string) => BY_ID.get(id);

/** Figurinha → quantas você tem. */
export type Album = Record<string, number>;
export const TRADE_COST = 3;
/** Atividades que dão pelo menos este XP concorrem a uma figurinha. */
export const MIN_XP = 3;
/** Chance de uma atividade que já passou do MIN_XP realmente dar a figurinha. */
export const STICKER_CHANCE = 0.5;

export function albumStats(album: Album) {
  const owned = STICKERS.filter((s) => (album[s.id] ?? 0) > 0).length;
  const duplicates = Object.values(album).reduce((sum, n) => sum + Math.max(0, n - 1), 0);
  return { owned, total: STICKERS.length, duplicates };
}

/**
 * Sorteia uma figurinha: 70% de chance de vir dos países do idioma estudado e, dentro do sorteio,
 * 60% de chance de ser uma que falta (o resto pode ser repetida, como num álbum de verdade).
 */
export function pickSticker(album: Album, lang: string, rnd: () => number = Math.random): Sticker {
  const home = new Set(HOMELANDS[lang] ?? []);
  const homePool = STICKERS.filter((s) => home.has(s.iso));
  const pool = homePool.length && rnd() < 0.7 ? homePool : STICKERS;
  const missing = pool.filter((s) => !album[s.id]);
  const from = missing.length && rnd() < 0.6 ? missing : pool;
  return from[Math.floor(rnd() * from.length) % from.length];
}

/** Troca TRADE_COST repetidas (tiradas das mais repetidas) por uma que falta. null se não dá. */
export function tradeDuplicates(album: Album, lang: string, rnd: () => number = Math.random): { album: Album; sticker: Sticker } | null {
  const { duplicates, owned, total } = albumStats(album);
  if (duplicates < TRADE_COST || owned >= total) return null;
  const next = { ...album };
  for (let paid = 0; paid < TRADE_COST; paid++) {
    const [id] = Object.entries(next).sort((a, b) => b[1] - a[1])[0];
    next[id] -= 1;
  }
  const home = new Set(HOMELANDS[lang] ?? []);
  const missing = STICKERS.filter((s) => !next[s.id]);
  const homeMissing = missing.filter((s) => home.has(s.iso));
  const from = homeMissing.length ? homeMissing : missing;
  const sticker = from[Math.floor(rnd() * from.length) % from.length];
  next[sticker.id] = 1;
  return { album: next, sticker };
}

// ---------- no banco (Meta «album»; sem importar queries.ts, que chama este arquivo) ----------

const KEY = 'album';

export async function loadAlbum(db: SQLiteDatabase): Promise<Album> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [KEY]);
  try {
    return r?.value ? (JSON.parse(r.value) as Album) : {};
  } catch {
    return {};
  }
}

export async function saveAlbum(db: SQLiteDatabase, album: Album): Promise<void> {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [KEY, JSON.stringify(album)]);
}

export interface StickerEvent {
  sticker: Sticker;
  /** nova (1ª vez) ou repetida */
  isNew: boolean;
  count: number;
  /** rara (dourada): só as expedições do Linu dão */
  rare?: boolean;
}
const listeners = new Set<(e: StickerEvent) => void>();
export function onSticker(l: (e: StickerEvent) => void): () => void {
  listeners.add(l);
  return () => {
    listeners.delete(l);
  };
}

/**
 * Dá a figurinha de uma atividade concluída e avisa quem estiver ouvindo (o aviso na tela) — só
 * `STICKER_CHANCE` das vezes, pra figurinha não vir em toda atividade e continuar especial.
 */
export async function grantSticker(db: SQLiteDatabase, lang: string, rnd: () => number = Math.random): Promise<StickerEvent | null> {
  if (rnd() >= STICKER_CHANCE) return null;
  const album = await loadAlbum(db);
  const sticker = pickSticker(album, lang, rnd);
  const count = (album[sticker.id] ?? 0) + 1;
  await saveAlbum(db, { ...album, [sticker.id]: count });
  const e = { sticker, isNew: count === 1, count };
  listeners.forEach((l) => l(e));
  return e;
}

// ---------- figurinhas raras (das expedições) ----------

const RARE_KEY = 'album_raras';

/** As figurinhas que você tem na versão rara, dourada (Meta «album_raras»). */
export async function loadRare(db: SQLiteDatabase): Promise<Set<string>> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', [RARE_KEY]);
  try {
    return new Set(r?.value ? (JSON.parse(r.value) as string[]) : []);
  } catch {
    return new Set();
  }
}

/**
 * Escolhe a figurinha rara de uma expedição: um bicho ou instrumento dos países visitados que você
 * ainda não tem na versão rara, de preferência um que falte no álbum. null se todas já forem raras.
 */
export function pickRare(album: Album, rare: Set<string>, countries: string[], rnd: () => number = Math.random): Sticker | null {
  const pool = STICKERS.filter((s) => countries.includes(s.iso) && !rare.has(s.id));
  if (!pool.length) return null;
  const missing = pool.filter((s) => !album[s.id]);
  const from = missing.length ? missing : pool;
  return from[Math.floor(rnd() * from.length) % from.length];
}

/** Dá a figurinha rara (ela entra no álbum e fica dourada) e avisa quem estiver ouvindo. */
export async function grantRareSticker(db: SQLiteDatabase, countries: string[], rnd: () => number = Math.random): Promise<StickerEvent | null> {
  const [album, rare] = await Promise.all([loadAlbum(db), loadRare(db)]);
  const sticker = pickRare(album, rare, countries, rnd);
  if (!sticker) return null;
  const count = (album[sticker.id] ?? 0) + 1;
  await saveAlbum(db, { ...album, [sticker.id]: count });
  rare.add(sticker.id);
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', [RARE_KEY, JSON.stringify([...rare])]);
  const e = { sticker, isNew: count === 1, count, rare: true };
  listeners.forEach((l) => l(e));
  return e;
}
