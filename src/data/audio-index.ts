import type { AudioClip } from './types';
import { AUDIO_RO } from './ro/audios';
import { AUDIO_RU } from './ru/audios';

/** Gravações de nativos por idioma e palavra. */
export const CLIPS: Record<string, Record<string, AudioClip>> = { ro: AUDIO_RO, ru: AUDIO_RU };

export function clipFor(locale: string, text: string): AudioClip | null {
  const table = CLIPS[locale.split('-')[0]];
  if (!table) return null;
  const t = text.trim();
  const bare = t.replace(/[.!?¿¡,;:«»"]/g, '').trim();
  // a marca de tônica do russo (U+0301) é opcional na busca
  return table[t] ?? table[t.toLowerCase()] ?? table[bare.toLowerCase()] ?? byBare(table)[bare.toLowerCase().replace(/\u0301/g, '')] ?? null;
}

const bareCache = new WeakMap<object, Record<string, AudioClip>>();
/** Mesma tabela com as chaves sem a marca de tônica. */
function byBare(table: Record<string, AudioClip>): Record<string, AudioClip> {
  let t = bareCache.get(table);
  if (!t) {
    t = Object.fromEntries(Object.entries(table).map(([k, v]) => [k.toLowerCase().replace(/\u0301/g, ''), v]));
    bareCache.set(table, t);
  }
  return t;
}

export function allClips(): { lang: string; word: string; clip: AudioClip }[] {
  return Object.entries(CLIPS).flatMap(([lang, t]) => Object.entries(t).map(([word, clip]) => ({ lang, word, clip })));
}
