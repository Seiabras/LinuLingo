import type { LanguageVariant } from '../types';

/**
 * A escrita deste curso (decisão do dono, 10/10/2026): o mongol na escrita tradicional é a variante de
 * escrita do mongol (`mn`) com curso próprio, a primeira, o modelo para todas. A ligação de volta para
 * o curso de mongol aparece sozinha, a partir do `curso` da variante `mn-Mong` (ver `ligacoesDeVolta`).
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
];
