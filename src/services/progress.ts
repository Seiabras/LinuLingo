/** Regras puras de gamificação: ofensiva (streak), congelamento e XP. */

export function localDay(d: Date = new Date()): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function daysBetween(a: string, b: string): number {
  const toUtc = (s: string) => {
    const [y, m, d] = s.split('-').map(Number);
    return Date.UTC(y, m - 1, d);
  };
  return Math.round((toUtc(b) - toUtc(a)) / 86_400_000);
}

export interface StreakState {
  streak: number;
  freezes: number;
  lastStudyDate: string | null;
}

export interface StreakResult extends StreakState {
  usedFreeze: boolean;
  increased: boolean;
}

/** Quantos congelamentos dá para guardar de uma vez. */
export const MAX_CONGELAMENTOS = 2;

/**
 * Atualiza a ofensiva ao estudar hoje. Cada dia perdido é coberto por um congelamento: com 2
 * guardados, dá para ficar até 2 dias sem estudar (desde 11/10/2026; antes, só 1 dia contava).
 */
export function registerStudy(state: StreakState, today: string): StreakResult {
  const { lastStudyDate, streak, freezes } = state;
  if (lastStudyDate === today) return { ...state, usedFreeze: false, increased: false };
  const gap = lastStudyDate ? daysBetween(lastStudyDate, today) : Infinity;
  if (gap === 1) return grow(streak + 1, freezes, today, false);
  const perdidos = gap - 1;
  if (perdidos <= freezes) return grow(streak + 1, freezes - perdidos, today, true);
  return grow(1, freezes, today, false);
}

function grow(streak: number, freezes: number, today: string, usedFreeze: boolean): StreakResult {
  // Ganha um congelamento a cada 7 dias de ofensiva (máximo 2 guardados)
  const bonus = streak > 0 && streak % 7 === 0 ? 1 : 0;
  return { streak, freezes: Math.min(MAX_CONGELAMENTOS, freezes + bonus), lastStudyDate: today, usedFreeze, increased: true };
}

/** A ofensiva exibida hoje: zera se o aluno já perdeu mais dias do que os congelamentos cobrem. */
export function visibleStreak(state: StreakState, today: string): number {
  if (!state.lastStudyDate) return 0;
  const gap = daysBetween(state.lastStudyDate, today);
  if (gap <= 1) return state.streak;
  if (gap - 1 <= state.freezes) return state.streak;
  return 0;
}

export const XP = {
  lessonBase: 10,
  perCorrect: 2,
  perfectBonus: 5,
  sprintPerWord: 1,
  // revisar no dia certo vale o dobro do sprint (xp-regras)
  reviewPerCard: 2,
  communityCorrection: 20,
  communitySubmission: 5,
  conversationTurn: 3,
} as const;

export function lessonXp(correct: number, total: number, isExam: boolean): number {
  const perfect = total > 0 && correct === total;
  const base = XP.lessonBase + correct * XP.perCorrect + (perfect ? XP.perfectBonus : 0);
  return isExam ? base * 2 : base;
}

/** Nível CEFR estimado pelo total de palavras dominadas. */
export function cefrFromMastered(mastered: number): 'A1' | 'A2' | 'B1' | 'B2' | 'C1' {
  if (mastered >= 3000) return 'C1';
  if (mastered >= 2000) return 'B2';
  if (mastered >= 1000) return 'B1';
  if (mastered >= 400) return 'A2';
  return 'A1';
}
