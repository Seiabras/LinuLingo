import type { AudioClip } from './types';
import { AUDIO_RO } from './ro/audios';

/** Gravações de nativos por idioma e palavra. */
export const CLIPS: Record<string, Record<string, AudioClip>> = { ro: AUDIO_RO };

export function clipFor(locale: string, text: string): AudioClip | null {
  const table = CLIPS[locale.split('-')[0]];
  if (!table) return null;
  const t = text.trim();
  return table[t] ?? table[t.toLowerCase()] ?? table[t.replace(/[.!?¿¡,;:«»"]/g, '').trim().toLowerCase()] ?? null;
}

export function allClips(): { lang: string; word: string; clip: AudioClip }[] {
  return Object.entries(CLIPS).flatMap(([lang, t]) => Object.entries(t).map(([word, clip]) => ({ lang, word, clip })));
}
