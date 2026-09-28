import type { AccentVoice, AudioClip } from './types';
import { AUDIO_RO } from './ro/audios';
import { AUDIO_RU } from './ru/audios';
import { AUDIO_RU_EXTRA } from './ru/audios-extra';
import { AUDIO_RO_EXTRA } from './ro/audios-extra';
import { AUDIO_ES } from './es/audios';
import { AUDIO_ES_EXTRA } from './es/audios-extra';
import { AUDIO_IT } from './it/audios';
import { AUDIO_IT_EXTRA } from './it/audios-extra';
import { AUDIO_PT } from './pt/audios';
import { AUDIO_PT_EXTRA } from './pt/audios-extra';
import { AUDIO_SV } from './sv/audios';
import { AUDIO_SV_EXTRA } from './sv/audios-extra';
import { AUDIO_NB } from './nb/audios';
import { AUDIO_DA } from './da/audios';
import { COMPARAR_SOTAQUES_ES, VOZES_SOTAQUES_ES } from './es/vozes-sotaques';
import { COMPARAR_SOTAQUES_IT, VOZES_SOTAQUES_IT } from './it/vozes-sotaques';
import { COMPARAR_SOTAQUES_RO, VOZES_SOTAQUES_RO } from './ro/vozes-sotaques';
import { COMPARAR_SOTAQUES_RU, VOZES_SOTAQUES_RU } from './ru/vozes-sotaques';

/**
 * Gravações de nativos por idioma e palavra: as do Lingua Libre (scripts/baixar-audios.mjs) primeiro,
 * completadas pelas de outras coleções livres do Commons (scripts/baixar-vozes-extras.mjs) nas
 * palavras que ainda faltavam — um arquivo à parte por idioma, para os dois scripts nunca colidirem.
 */
export const CLIPS: Record<string, Record<string, AudioClip>> = {
  ro: { ...AUDIO_RO_EXTRA, ...AUDIO_RO },
  ru: { ...AUDIO_RU_EXTRA, ...AUDIO_RU },
  es: { ...AUDIO_ES_EXTRA, ...AUDIO_ES },
  it: { ...AUDIO_IT_EXTRA, ...AUDIO_IT },
  pt: { ...AUDIO_PT_EXTRA, ...AUDIO_PT },
  sv: { ...AUDIO_SV_EXTRA, ...AUDIO_SV },
  nb: AUDIO_NB,
  da: AUDIO_DA,
};

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

/** Gravações de nativos de cada região (sotaques), por idioma e sotaque. Ficam aqui, e não nos
 * pacotes, como as das palavras: os testes (node) leem os pacotes e não sabem abrir áudio. */
export const ACCENT_VOICES: Record<string, Record<string, AccentVoice[]>> = { es: VOZES_SOTAQUES_ES, it: VOZES_SOTAQUES_IT, ro: VOZES_SOTAQUES_RO, ru: VOZES_SOTAQUES_RU };

/** Palavras gravadas em mais de um sotaque, para ouvir lado a lado. */
export const ACCENT_COMPARE: Record<string, string[]> = { es: COMPARAR_SOTAQUES_ES, it: COMPARAR_SOTAQUES_IT, ro: COMPARAR_SOTAQUES_RO, ru: COMPARAR_SOTAQUES_RU };

export function allAccentVoices(): { lang: string; accent: string; voice: AccentVoice }[] {
  return Object.entries(ACCENT_VOICES).flatMap(([lang, byAccent]) => Object.entries(byAccent).flatMap(([accent, list]) => list.map((voice) => ({ lang, accent, voice }))));
}
