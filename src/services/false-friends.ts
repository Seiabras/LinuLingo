import type { FalseFriend } from '@/data/types';
import { shuffle } from './answers';

export type FFQuestion =
  | { kind: 'significa'; ff: FalseFriend; options: string[]; answer: string; trap: string }
  | { kind: 'como-se-diz'; ff: FalseFriend; options: string[]; answer: string; trap: string };

/** Progresso salvo: palavra → acertos. */
export type FFProgress = Record<string, number>;

const first = (s: string) => s.split(/[/;,(]/)[0].trim();

/**
 * Rodada do treino: «o que quer dizer X?» (a armadilha é o sentido em português) e
 * «como se diz Y?» (a armadilha é a própria palavra parecida). As menos acertadas vêm primeiro.
 */
export function buildFFRound(list: FalseFriend[], progress: FFProgress, size = 10, rnd: () => number = Math.random): FFQuestion[] {
  const ordered = [...list].sort((a, b) => (progress[a.word] ?? 0) + rnd() * 0.9 - ((progress[b.word] ?? 0) + rnd() * 0.9));
  return ordered.slice(0, size).map((ff, i) => {
    const others = shuffle(
      list.filter((x) => x !== ff),
      rnd,
    ).slice(0, 2);
    if (i % 2 === 0) {
      const answer = first(ff.means);
      const trap = first(ff.looksLike);
      const opts = [...new Set([answer, trap, ...others.map((o) => first(o.means))])];
      return { kind: 'significa', ff, options: shuffle(opts, rnd), answer, trap };
    }
    const answer = first(ff.forThat);
    const trap = ff.word;
    const opts = [...new Set([answer, trap, ...others.map((o) => first(o.forThat))])];
    return { kind: 'como-se-diz', ff, options: shuffle(opts, rnd), answer, trap };
  });
}

export function recordFF(progress: FFProgress, q: FFQuestion, ok: boolean): FFProgress {
  const k = q.ff.word;
  return { ...progress, [k]: Math.max(0, (progress[k] ?? 0) + (ok ? 1 : -1)) };
}
