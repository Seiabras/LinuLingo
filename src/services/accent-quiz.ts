import type { Accent } from '@/data/types';
import { shuffle } from './answers';

export type AccentQuestion =
  /** «O que quer dizer X?» */
  | { kind: 'significa'; key: string; prompt: string; options: string[]; answer: string }
  /** «Como se diz Y aqui?» */
  | { kind: 'como-se-diz'; key: string; prompt: string; options: string[]; answer: string }
  /** «De onde é esta frase?» */
  | { kind: 'de-onde'; key: string; prompt: string; translation: string; options: string[]; answer: string };

/** Progresso salvo: pergunta → acertos. */
export type AccentProgress = Record<string, number>;

const first = (s: string) => s.split(/[/;(]/)[0].trim();

/**
 * Rodada do treino de um sotaque: palavras típicas nos dois sentidos e frases para reconhecer.
 * As alternativas erradas vêm dos outros sotaques do mesmo idioma; as menos acertadas vêm primeiro.
 */
export function buildAccentRound(
  accent: Accent,
  siblings: Accent[],
  progress: AccentProgress,
  size = 8,
  rnd: () => number = Math.random,
): AccentQuestion[] {
  const others = siblings.filter((a) => a.id !== accent.id);
  const otherWords = others.flatMap((a) => a.words ?? []);
  const qs: AccentQuestion[] = [];
  for (const [word, meaning] of accent.words ?? []) {
    const wrongMeanings = shuffle([...new Set(otherWords.map(([, m]) => first(m)).filter((m) => m !== first(meaning)))], rnd).slice(0, 2);
    if (wrongMeanings.length === 2)
      qs.push({ kind: 'significa', key: `s:${word}`, prompt: word, options: shuffle([first(meaning), ...wrongMeanings], rnd), answer: first(meaning) });
    const wrongWords = shuffle([...new Set(otherWords.map(([w]) => w).filter((w) => w !== word))], rnd).slice(0, 2);
    if (wrongWords.length === 2)
      qs.push({ kind: 'como-se-diz', key: `c:${word}`, prompt: first(meaning), options: shuffle([word, ...wrongWords], rnd), answer: word });
  }
  for (const [text, translation] of accent.examples) {
    const wrong = shuffle(others, rnd)
      .slice(0, 2)
      .map((a) => a.name);
    if (wrong.length === 2) qs.push({ kind: 'de-onde', key: `o:${text}`, prompt: text, translation, options: shuffle([accent.name, ...wrong], rnd), answer: accent.name });
  }
  return [...qs]
    .sort((a, b) => (progress[a.key] ?? 0) + rnd() * 0.9 - ((progress[b.key] ?? 0) + rnd() * 0.9))
    .slice(0, size);
}

export function recordAccent(progress: AccentProgress, q: AccentQuestion, ok: boolean): AccentProgress {
  return { ...progress, [q.key]: Math.max(0, (progress[q.key] ?? 0) + (ok ? 1 : -1)) };
}

/** Quantas perguntas do sotaque já foram acertadas pelo menos duas vezes (domínio). */
export function accentMastery(accent: Accent, progress: AccentProgress): { done: number; total: number } {
  const keys = [...(accent.words ?? []).flatMap(([w]) => [`s:${w}`, `c:${w}`]), ...accent.examples.map(([t]) => `o:${t}`)];
  return { done: keys.filter((k) => (progress[k] ?? 0) >= 2).length, total: keys.length };
}
