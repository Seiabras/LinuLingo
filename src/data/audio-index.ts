import type { AccentVoice, AudioClip } from './types';
import { COMPARAR_SOTAQUES_ES, VOZES_SOTAQUES_ES } from './es/vozes-sotaques';
import { COMPARAR_SOTAQUES_IT, VOZES_SOTAQUES_IT } from './it/vozes-sotaques';
import { COMPARAR_SOTAQUES_RO, VOZES_SOTAQUES_RO } from './ro/vozes-sotaques';
import { COMPARAR_SOTAQUES_RU, VOZES_SOTAQUES_RU } from './ru/vozes-sotaques';

/**
 * Gravações de nativos por idioma e palavra: as do Lingua Libre (scripts/baixar-audios.mjs) primeiro,
 * completadas pelas de outras coleções livres do Commons (scripts/baixar-vozes-extras.mjs) nas
 * palavras que ainda faltavam — um arquivo à parte por idioma, para os dois scripts nunca colidirem.
 *
 * Carregadas por idioma, só quando precisa (item 10 do PENDENTES.md, 16/10/2026): antes, as tabelas
 * de todos os idiomas iam no pacote de abertura do app (vários MB). `carregarClips` traz as de um
 * idioma; `CLIPS` guarda as que já chegaram, e `clipFor` só procura nelas.
 */
const CLIP_LOADERS: Record<string, () => Promise<Record<string, AudioClip>>> = {
  ro: () => Promise.all([import('./ro/audios-extra'), import('./ro/audios')]).then(([e, m]) => ({ ...e.AUDIO_RO_EXTRA, ...m.AUDIO_RO })),
  ru: () => Promise.all([import('./ru/audios-extra'), import('./ru/audios')]).then(([e, m]) => ({ ...e.AUDIO_RU_EXTRA, ...m.AUDIO_RU })),
  es: () => Promise.all([import('./es/audios-extra'), import('./es/audios')]).then(([e, m]) => ({ ...e.AUDIO_ES_EXTRA, ...m.AUDIO_ES })),
  it: () => Promise.all([import('./it/audios-extra'), import('./it/audios')]).then(([e, m]) => ({ ...e.AUDIO_IT_EXTRA, ...m.AUDIO_IT })),
  pt: () => Promise.all([import('./pt/audios-extra'), import('./pt/audios')]).then(([e, m]) => ({ ...e.AUDIO_PT_EXTRA, ...m.AUDIO_PT })),
  sv: () => Promise.all([import('./sv/audios-extra'), import('./sv/audios')]).then(([e, m]) => ({ ...e.AUDIO_SV_EXTRA, ...m.AUDIO_SV })),
  nb: () => import('./nb/audios').then((m) => m.AUDIO_NB),
  da: () => import('./da/audios').then((m) => m.AUDIO_DA),
  is: () => import('./is/audios').then((m) => m.AUDIO_IS),
  fi: () => import('./fi/audios').then((m) => m.AUDIO_FI),
  et: () => import('./et/audios').then((m) => m.AUDIO_ET),
  fr: () => import('./fr/audios').then((m) => m.AUDIO_FR),
  lt: () => Promise.all([import('./lt/audios-extra'), import('./lt/audios')]).then(([e, m]) => ({ ...e.AUDIO_LT_EXTRA, ...m.AUDIO_LT })),
  ja: () => import('./ja/audios').then((m) => m.AUDIO_JA),
  ko: () => import('./ko/audios').then((m) => m.AUDIO_KO),
  fo: () => import('./fo/audios-extra').then((m) => m.AUDIO_FO_EXTRA),
};

/** As tabelas de gravações já carregadas, por idioma. */
export const CLIPS: Record<string, Record<string, AudioClip>> = {};
const carregandoClips = new Map<string, Promise<Record<string, AudioClip> | undefined>>();

/** Se o idioma tem gravações de nativos (carregadas ou não). */
export const temGravacoes = (lang: string) => lang in CLIP_LOADERS;

/** Carrega (ou devolve do cache) as gravações de um idioma. `undefined` se ele não tem nenhuma. */
export function carregarClips(lang: string): Promise<Record<string, AudioClip> | undefined> {
  if (CLIPS[lang]) return Promise.resolve(CLIPS[lang]);
  const loader = CLIP_LOADERS[lang];
  if (!loader) return Promise.resolve(undefined);
  let p = carregandoClips.get(lang);
  if (!p) {
    p = loader().then((t) => (CLIPS[lang] = t));
    p.catch(() => carregandoClips.delete(lang));
    carregandoClips.set(lang, p);
  }
  return p;
}

export function clipFor(locale: string, text: string): AudioClip | null {
  const lang = locale.split('-')[0];
  const table = CLIPS[lang];
  // ainda não carregou: pede agora (a próxima vez já acha) e, desta vez, fica sem gravação
  if (!table) {
    carregarClips(lang);
    return null;
  }
  const t = text.trim();
  const bare = t.replace(/[.!?¿¡,;:“”"]/g, '').trim();
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

/** Todas as gravações de todos os idiomas (carrega as que faltam). */
export async function allClips(): Promise<{ lang: string; word: string; clip: AudioClip }[]> {
  await Promise.all(Object.keys(CLIP_LOADERS).map(carregarClips));
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
