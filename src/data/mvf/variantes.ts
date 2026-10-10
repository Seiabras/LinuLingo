import type { LanguageVariant } from '../types';

/**
 * As escritas do mongol (decisão do dono, 10/10/2026): este curso é o da escrita tradicional, e a
 * escrita cirílica, a da Mongólia, é a outra variante, com curso próprio no app (`mn`). O mongol
 * tradicional é a primeira variante de escrita com curso próprio; o modelo vale para todas.
 */
export const VARIANTS_MVF: LanguageVariant[] = [
  {
    code: 'mvf-Mong',
    country: 'CHN',
    kind: 'variante',
    name: 'Mongol na escrita tradicional',
    flag: '📜',
    summary: 'O padrão deste curso: a escrita mongol tradicional, vertical, de cima para baixo, usada no dia a dia da Mongólia Interior, na China.',
  },
  {
    code: 'mvf-Cyrl',
    country: 'MNG',
    kind: 'variante',
    name: 'Mongol em cirílico',
    flag: '🇲🇳',
    summary: 'A mesma língua no alfabeto cirílico, a escrita oficial da Mongólia desde os anos 1940, com o khalkha como padrão. Ela tem curso próprio no app.',
    curso: 'mn',
  },
];
