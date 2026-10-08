/**
 * Registro de qual idioma (além do português, que tem sua própria tela em `quiz-sotaque.ts` +
 * `AccentGuessScreen`) tem um quiz «qual é o seu sotaque» pronto. Novo idioma = construir
 * `src/data/<lang>/quiz-sotaque.ts` (ver o do romeno, do russo ou do espanhol como modelo) e
 * registrar aqui.
 */
import type { GuessQuestion, GuessRegion } from '@/services/sotaque-quiz';
import { GUESS_REGIONS_ES, GUESS_QUESTIONS_ES } from './es/quiz-sotaque';
import { GUESS_REGIONS_RO, GUESS_QUESTIONS_RO } from './ro/quiz-sotaque';
import { GUESS_REGIONS_RU, GUESS_QUESTIONS_RU } from './ru/quiz-sotaque';

export interface LanguageQuizSotaque {
  regions: GuessRegion[];
  questions: GuessQuestion[];
  /** nome do idioma como aparece no título, ex.: «espanhol» */
  idioma: string;
}

export const QUIZ_SOTAQUE_IDIOMAS: Partial<Record<string, LanguageQuizSotaque>> = {
  es: { regions: GUESS_REGIONS_ES, questions: GUESS_QUESTIONS_ES, idioma: 'espanhol' },
  ro: { regions: GUESS_REGIONS_RO, questions: GUESS_QUESTIONS_RO, idioma: 'romeno' },
  ru: { regions: GUESS_REGIONS_RU, questions: GUESS_QUESTIONS_RU, idioma: 'russo' },
};
