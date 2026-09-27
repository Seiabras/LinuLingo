import type { MinimalPair, MinimalPairs } from '@/data/types';
import { normalize, shuffle } from './answers';

/**
 * Pares mínimos: ouvir uma de duas palavras que só mudam por um som e dizer qual foi. Os
 * contrastes em que você mais erra aparecem mais.
 */

/** nativo: as duas palavras têm gravação; aparelho: as duas na voz do aparelho (nunca uma de cada) */
export type PairSource = 'nativo' | 'aparelho';
export interface PlayablePair extends MinimalPair {
  source: PairSource;
}

/** acertos e tentativas por contraste */
export type PairProgress = Record<string, [number, number]>;

export interface PairQuestion {
  pair: PlayablePair;
  target: 'a' | 'b';
}

const soundOf = (w: string, ipa?: (t: string) => string) => {
  if (ipa) {
    try {
      const s = ipa(w).replace(/[ˈˌ.\s/[\]]/g, '');
      if (s) return s;
    } catch {}
  }
  return normalize(w);
};

/**
 * Os pares que dá para ouvir na variante estudada: os que soam igual nela (casa × caza no espanhol
 * da América) ficam de fora e voltam como «soam igual aqui».
 */
export function playablePairs(mp: MinimalPairs, ipa: ((t: string) => string) | undefined, hasClip: (w: string) => boolean): { pairs: PlayablePair[]; same: MinimalPair[] } {
  const device = new Set(mp.contrasts.filter((c) => c.deviceVoice).map((c) => c.id));
  const pairs: PlayablePair[] = [];
  const same: MinimalPair[] = [];
  for (const p of mp.pairs) {
    if (soundOf(p.a[0], ipa) === soundOf(p.b[0], ipa)) {
      same.push(p);
      continue;
    }
    const source: PairSource = !device.has(p.contrast) && hasClip(p.a[0]) && hasClip(p.b[0]) ? 'nativo' : 'aparelho';
    pairs.push({ ...p, source });
  }
  return { pairs, same };
}

/** Acerto (0 a 1) num contraste, ou null se ainda não treinou. */
export function contrastAccuracy(progress: PairProgress, id: string): number | null {
  const [hits, total] = progress[id] ?? [0, 0];
  return total ? hits / total : null;
}

/**
 * Uma rodada: sorteia os contrastes com peso maior para os que você erra (e os que nunca treinou),
 * cada par no máximo uma vez, e qual das duas palavras toca.
 */
export function buildPairRound(pairs: PlayablePair[], progress: PairProgress, size = 10, rnd: () => number = Math.random): PairQuestion[] {
  if (!pairs.length) return [];
  const byContrast = new Map<string, PlayablePair[]>();
  for (const p of pairs) byContrast.set(p.contrast, [...(byContrast.get(p.contrast) ?? []), p]);
  const pools = new Map([...byContrast].map(([k, v]) => [k, shuffle(v, rnd)]));
  const weight = (id: string) => {
    const acc = contrastAccuracy(progress, id);
    return acc === null ? 1.5 : 0.4 + (1 - acc) * 2;
  };
  const out: PairQuestion[] = [];
  while (out.length < size) {
    const live = [...pools].filter(([, v]) => v.length);
    // todos os pares já saíram: recomeça (rodadas maiores que a lista)
    if (!live.length) {
      for (const [k, v] of byContrast) pools.set(k, shuffle(v, rnd));
      continue;
    }
    const total = live.reduce((s, [id]) => s + weight(id), 0);
    let r = rnd() * total;
    let pick = live[live.length - 1];
    for (const c of live) {
      r -= weight(c[0]);
      if (r <= 0) {
        pick = c;
        break;
      }
    }
    const pair = pick[1].pop()!;
    out.push({ pair, target: rnd() < 0.5 ? 'a' : 'b' });
  }
  return out;
}

export function recordPair(progress: PairProgress, contrast: string, ok: boolean): PairProgress {
  const [hits, total] = progress[contrast] ?? [0, 0];
  return { ...progress, [contrast]: [hits + (ok ? 1 : 0), total + 1] };
}
