import type { AlphabetData, AlphabetLetter } from '@/data/types';
import { shuffle } from './answers';

/** Acertos para uma letra contar como dominada. */
export const MASTERED = 3;

export type AlphabetQuestion =
  | { kind: 'som'; letter: AlphabetLetter; options: string[]; answer: string }
  | { kind: 'letra'; letter: AlphabetLetter; options: string[]; answer: string }
  | { kind: 'leitura'; word: [string, string, string]; options: string[]; answer: string };

/** Progresso salvo: letra → acertos. */
export type AlphabetProgress = Record<string, number>;

/** Só a minúscula («б» de «Б б»). */
export const lower = (l: AlphabetLetter) => l.letter.split(' ')[1] ?? l.letter;

function pickOthers<T>(all: T[], not: T, n: number, rnd: () => number): T[] {
  return shuffle(
    all.filter((x) => x !== not),
    rnd,
  ).slice(0, n);
}

/**
 * Rodada do treino: letra → som, som → letra e leitura de palavras emprestadas.
 * As letras menos acertadas aparecem primeiro (as «falsas amigas» valem em dobro no começo).
 * A leitura só entra depois que algumas letras já foram vistas.
 */
export function buildRound(data: AlphabetData, progress: AlphabetProgress, size = 12, rnd: () => number = Math.random): AlphabetQuestion[] {
  const score = (l: AlphabetLetter) => (progress[l.letter] ?? 0) - (l.group === 'falsa' ? 0.5 : 0) + rnd() * 0.9;
  const ordered = [...data.letters].sort((a, b) => score(a) - score(b));
  const seen = data.letters.filter((l) => (progress[l.letter] ?? 0) > 0).length;
  const reading = seen >= 8 ? Math.min(3, Math.floor(size / 4)) : 0;
  const letterQs = size - reading;
  const out: AlphabetQuestion[] = [];
  for (let i = 0; i < letterQs; i++) {
    const l = ordered[i % ordered.length];
    if (i % 3 === 2) {
      const others = pickOthers(data.letters, l, 3, rnd).map(lower);
      out.push({ kind: 'letra', letter: l, options: shuffle([lower(l), ...others], rnd), answer: lower(l) });
    } else {
      const others = pickOthers(
        data.letters.filter((x) => x.short !== l.short),
        l,
        3,
        rnd,
      ).map((x) => x.short);
      out.push({ kind: 'som', letter: l, options: shuffle([l.short, ...others], rnd), answer: l.short });
    }
  }
  for (const w of shuffle(data.readingWords, rnd).slice(0, reading)) {
    const others = pickOthers(data.readingWords, w, 3, rnd).map((x) => x[1]);
    out.push({ kind: 'leitura', word: w, options: shuffle([w[1], ...others], rnd), answer: w[1] });
  }
  return shuffle(out, rnd);
}

/** Atualiza o progresso com o resultado de uma pergunta (erro tira um acerto, sem ficar negativo). */
export function recordAnswer(progress: AlphabetProgress, q: AlphabetQuestion, ok: boolean): AlphabetProgress {
  if (q.kind === 'leitura') return progress;
  const k = q.letter.letter;
  return { ...progress, [k]: Math.max(0, (progress[k] ?? 0) + (ok ? 1 : -1)) };
}

export function masteredCount(data: AlphabetData, progress: AlphabetProgress): number {
  return data.letters.filter((l) => (progress[l.letter] ?? 0) >= MASTERED).length;
}
