import type { AnimalSound } from '@/data/types';
import { BICHOS_PT } from '@/data/bichos-pt';
import { normalize, shuffle } from './answers';

/**
 * «Como faz o bicho?»: a onomatopeia no idioma (ham-ham, гав-гав), que bicho faz tal som e o verbo
 * do som (Câinele latră). A onomatopeia do português entra como armadilha quando é diferente.
 */
export type AnimalQuestion =
  | { kind: 'que-bicho'; a: AnimalSound; options: string[]; answer: string }
  | { kind: 'como-faz'; a: AnimalSound; options: string[]; answer: string; trap: string | null }
  | { kind: 'verbo'; a: AnimalSound; blank: string; options: string[]; answer: string };

/** Acertos por bicho. */
export type AnimalProgress = Record<string, number>;

/** «Câinele latră.» → [«Câinele ___.», «latră»]: o verbo é a última palavra. */
export function splitVerb(sentence: string): [string, string] {
  const m = /^(.*\s)(\S+?)([.!?…。！]*)$/.exec(sentence.trim());
  return m ? [`${m[1]}___${m[3]}`, m[2]] : [sentence, ''];
}

/** Mesmo som escrito de outro jeito: «muu» = «muuu», «béé» = «beee» (letras repetidas, acentos, hífens). */
const soundKey = (s: string) => normalize(s).replace(/[\s-]/g, '').replace(/(.)\1+/g, '$1');
const same = (a: string, b: string) => soundKey(a) === soundKey(b);

export function buildAnimalRound(list: AnimalSound[], progress: AnimalProgress, size = 10, rnd: () => number = Math.random): AnimalQuestion[] {
  if (list.length < 4) return [];
  // os menos acertados primeiro, com um pouco de sorte no meio
  const order = shuffle(list, rnd).sort((x, y) => (progress[x.id] ?? 0) - (progress[y.id] ?? 0));
  const kinds: AnimalQuestion['kind'][] = ['como-faz', 'que-bicho', 'verbo'];
  const others = (a: AnimalSound) => shuffle(list.filter((o) => o.id !== a.id), rnd);
  const out: AnimalQuestion[] = [];
  for (let i = 0; out.length < size; i++) {
    const a = order[i % order.length];
    const kind = kinds[(i + Math.floor(rnd() * 3)) % 3];
    if (kind === 'que-bicho') {
      out.push({ kind, a, options: shuffle([a.id, ...others(a).slice(0, 3).map((o) => o.id)], rnd), answer: a.id });
    } else if (kind === 'como-faz') {
      const pt = BICHOS_PT[a.id]?.sound;
      const trap = pt && !same(pt, a.sound) ? pt : null;
      const pool = others(a)
        .map((o) => o.sound)
        .filter((s) => !same(s, a.sound) && (!trap || !same(s, trap)));
      const opts = [a.sound, ...(trap ? [trap] : []), ...pool].filter((s, k, arr) => arr.findIndex((x) => same(x, s)) === k).slice(0, 4);
      out.push({ kind, a, options: shuffle(opts, rnd), answer: a.sound, trap });
    } else {
      const [blank, verb] = splitVerb(a.verb);
      const pool = others(a)
        .map((o) => splitVerb(o.verb)[1])
        .filter((v) => v && normalize(v) !== normalize(verb));
      out.push({ kind, a, blank, options: shuffle([verb, ...[...new Set(pool)].slice(0, 3)], rnd), answer: verb });
    }
  }
  return out;
}

export function recordAnimal(progress: AnimalProgress, q: AnimalQuestion, ok: boolean): AnimalProgress {
  const cur = progress[q.a.id] ?? 0;
  return { ...progress, [q.a.id]: ok ? cur + 1 : Math.min(cur, 0) - 1 };
}
