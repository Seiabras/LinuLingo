import type { AudioClip, LanguagePack } from '@/data/types';
import { levenshtein, normalize, shuffle, stripDiacritics } from './answers';

/**
 * Treino de escuta: ouvir a gravação de um nativo e escolher (entre palavras parecidas no som e na
 * escrita) ou escrever o que ouviu (ditado). As palavras erradas voltam mais vezes.
 */

export interface ListenItem {
  word: string;
  meaning: string;
  rank: number;
  /** gravação de nativo; sem ela, a voz do aparelho */
  clip?: AudioClip;
}

export type ListenMode = 'escolher' | 'escrever';
export interface ListenQuestion {
  mode: ListenMode;
  item: ListenItem;
  /** no modo escolher: a certa e 3 parecidas, embaralhadas */
  options?: string[];
}

/** Pontos por palavra: sobe ao acertar (mais no ditado), desce ao errar. Dominada a partir de MASTERED. */
export type ListenProgress = Record<string, number>;
export const MASTERED = 4;

const sounds = new WeakMap<(t: string) => string, Map<string, string>>();
const plain = (t: string) => t;

/** Som da palavra para comparar: a IPA sem tônica nem pausas, ou a escrita sem acentos (guardado: a rodada compara milhares). */
function soundOf(word: string, ipa?: (t: string) => string): string {
  const fn = ipa ?? plain;
  let memo = sounds.get(fn);
  if (!memo) sounds.set(fn, (memo = new Map()));
  let s = memo.get(word);
  if (s === undefined) {
    s = '';
    if (ipa) {
      try {
        s = ipa(word).replace(/[ˈˌ.\s/[\]ː]/g, '');
      } catch {}
    }
    if (!s) s = normalize(word);
    memo.set(word, s);
  }
  return s;
}

/**
 * As palavras do vocabulário para ouvir, das mais frequentes às menos: com gravação de nativo quando
 * há (e só elas, se houver bastante); sem gravações, as mais frequentes, com a voz do aparelho.
 */
export function listenPool(pack: Pick<LanguagePack, 'vocab'>, clips: Record<string, AudioClip> | undefined, max = Infinity): ListenItem[] {
  const seen = new Set<string>();
  const items: ListenItem[] = [];
  const sorted = [...pack.vocab].sort((a, b) => a.frequency_rank - b.frequency_rank);
  for (const v of sorted) {
    const word = v.word_target.trim();
    const key = word.toLowerCase();
    // palavras soltas e sem variantes na escrita («el/la», «a fi (a merge)»): dá para escrever o que ouviu
    if (seen.has(key) || /[/()]/.test(word) || word.split(' ').length > 2) continue;
    const clip = clips?.[word] ?? clips?.[key];
    seen.add(key);
    items.push({ word, meaning: v.word_native, rank: v.frequency_rank, clip });
  }
  const native = items.filter((i) => i.clip);
  return (native.length >= 40 ? native : items).slice(0, max);
}

/**
 * Uma rodada: primeiro as que você errou, depois palavras novas na ordem de frequência, e o resto
 * com revisões das que já sabe. As opções do modo escolher soam ou se escrevem parecido com a certa,
 * mas nunca igual (homófonos não dá para distinguir de ouvido).
 */
export function buildListenRound(
  pool: ListenItem[],
  progress: ListenProgress,
  mode: ListenMode,
  size = 10,
  rnd: () => number = Math.random,
  ipa?: (t: string) => string,
): ListenQuestion[] {
  if (!pool.length) return [];
  const score = (w: string) => progress[w] ?? 0;
  const missed = shuffle(pool.filter((i) => score(i.word) < 0), rnd);
  const fresh = pool.filter((i) => progress[i.word] === undefined);
  const learning = shuffle(pool.filter((i) => score(i.word) >= 0 && score(i.word) < MASTERED && progress[i.word] !== undefined), rnd);
  const known = shuffle(pool.filter((i) => score(i.word) >= MASTERED), rnd);
  const picked: ListenItem[] = [];
  const take = (list: ListenItem[], n: number) => {
    for (const i of list) {
      if (picked.length >= size || n <= 0) break;
      if (!picked.includes(i)) {
        picked.push(i);
        n--;
      }
    }
  };
  take(missed, Math.ceil(size * 0.4));
  take(learning, Math.ceil(size * 0.3));
  take(fresh, size);
  take(known, size);
  take(learning, size);
  take(missed, size);

  return shuffle(picked, rnd).map((item) => ({
    mode,
    item,
    options: mode === 'escolher' ? shuffle([item.word, ...distractors(item, pool, 3, rnd, ipa)], rnd) : undefined,
  }));
}

/** Palavras que soam ou se escrevem parecido (distância pequena), mas não igual. */
export function distractors(item: ListenItem, pool: ListenItem[], n: number, rnd: () => number = Math.random, ipa?: (t: string) => string): string[] {
  const target = soundOf(item.word, ipa);
  const written = normalize(item.word);
  const differs = pool.filter((o) => o.word !== item.word && normalize(o.word) !== written && soundOf(o.word, ipa) !== target);
  // só as de tamanho parecido entram na conta (a distância das outras é grande de qualquer jeito)
  const near = differs.filter((o) => Math.abs(soundOf(o.word, ipa).length - target.length) <= 2);
  const candidates = (near.length >= n ? near : differs)
    .map((o) => ({ w: o.word, d: levenshtein(soundOf(o.word, ipa), target) + levenshtein(normalize(o.word), written) + rnd() * 0.5 }))
    .sort((a, b) => a.d - b.d);
  const out: string[] = [];
  for (const c of candidates) {
    if (out.length >= n) break;
    if (!out.some((w) => normalize(w) === normalize(c.w))) out.push(c.w);
  }
  return out;
}

export type DictationResult =
  | { kind: 'certo' }
  /** as letras certas, faltaram acentos (conta como acerto, com aviso) */
  | { kind: 'acentos' }
  /** outra palavra que soa igual (homófono): conta como acerto, com aviso */
  | { kind: 'homofono'; other: string }
  /** uma letra de diferença */
  | { kind: 'quase' }
  | { kind: 'errado' };

/** Confere o ditado. */
export function checkDictation(typed: string, item: ListenItem, pool: ListenItem[], ipa?: (t: string) => string): DictationResult {
  const t = normalize(typed, { keepDiacritics: true });
  const w = normalize(item.word, { keepDiacritics: true });
  if (!t) return { kind: 'errado' };
  if (t === w) return { kind: 'certo' };
  if (stripDiacritics(t) === stripDiacritics(w)) return { kind: 'acentos' };
  const same = pool.find((o) => normalize(o.word, { keepDiacritics: true }) === t);
  if (same && soundOf(same.word, ipa) === soundOf(item.word, ipa)) return { kind: 'homofono', other: same.word };
  if (levenshtein(stripDiacritics(t), stripDiacritics(w)) === 1) return { kind: 'quase' };
  return { kind: 'errado' };
}

export function recordListen(progress: ListenProgress, q: ListenQuestion, ok: boolean): ListenProgress {
  const cur = progress[q.item.word] ?? 0;
  const next = ok ? Math.max(cur, 0) + (q.mode === 'escrever' ? 2 : 1) : Math.min(cur, 0) - 2;
  return { ...progress, [q.item.word]: next };
}

export function listenMastery(pool: ListenItem[], progress: ListenProgress) {
  return { done: pool.filter((i) => (progress[i.word] ?? 0) >= MASTERED).length, total: pool.length };
}

/** «Speaker: Fulano\nRecorder: …» → Fulano */
export function speakerOf(clip: AudioClip): string {
  return /Speaker:\s*([^\n]+)/.exec(clip.author)?.[1]?.trim() ?? clip.author.split('\n')[0];
}
