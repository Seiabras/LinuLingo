/**
 * Repetição espaçada — SuperMemo-2 (SM-2).
 * quality: 0 (esqueceu completamente) a 5 (lembrança perfeita).
 */
export interface SRSCard {
  wordId: string;
  interval: number; // dias até a próxima revisão
  repetition: number; // revisões consecutivas corretas
  easeFactor: number; // fator de facilidade (inicia em 2.5)
  nextReviewDate: string; // ISO
}

export const INITIAL_EASE = 2.5;
export const MIN_EASE = 1.3;
const DAY_MS = 24 * 60 * 60 * 1000;

export function newCard(wordId: string, now: Date = new Date()): SRSCard {
  return { wordId, interval: 0, repetition: 0, easeFactor: INITIAL_EASE, nextReviewDate: now.toISOString() };
}

export function calculateNextReview(card: SRSCard, quality: number, now: Date = new Date()): SRSCard {
  const q = Math.max(0, Math.min(5, Math.round(quality)));
  let { interval, repetition, easeFactor } = card;

  if (q >= 3) {
    if (repetition === 0) interval = 1;
    else if (repetition === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetition += 1;
  } else {
    repetition = 0;
    interval = 1;
  }

  easeFactor = easeFactor + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));
  if (easeFactor < MIN_EASE) easeFactor = MIN_EASE;
  easeFactor = Math.round(easeFactor * 100) / 100;

  return {
    ...card,
    interval,
    repetition,
    easeFactor,
    nextReviewDate: new Date(now.getTime() + interval * DAY_MS).toISOString(),
  };
}

/** Converte a resposta de um exercício (acertou? de primeira? rápido?) em qualidade SM-2. */
export function qualityFromAnswer(correct: boolean, opts: { firstTry?: boolean; knewAlready?: boolean } = {}): number {
  if (opts.knewAlready) return 5;
  if (!correct) return 1;
  return opts.firstTry === false ? 3 : 4;
}

export function isDue(nextReviewDate: string | null, now: Date = new Date()): boolean {
  return nextReviewDate !== null && new Date(nextReviewDate).getTime() <= now.getTime();
}

/** Retenção estimada 0–1, usada para o gráfico/barra de fixação. */
export function retentionLevel(repetition: number | null, easeFactor: number | null): number {
  if (!repetition) return 0;
  const byReps = Math.min(1, repetition / 5);
  const byEase = Math.min(1, Math.max(0, ((easeFactor ?? INITIAL_EASE) - MIN_EASE) / (INITIAL_EASE - MIN_EASE)));
  return Math.round((byReps * 0.75 + byEase * 0.25) * 100) / 100;
}
