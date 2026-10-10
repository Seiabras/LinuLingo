import type { Accent } from '../types';

/**
 * Os falares do mongol da Mongólia Interior, escrito na escrita tradicional (10/10/2026). Fontes:
 * Wikipédia em português, inglês e chinês («Mongolian language in Inner Mongolia», «Chakhar Mongolian»,
 * «Khorchin Mongolian», consultadas em 10/10/2026). A escrita cirílica, a da Mongólia, é a variante
 * de escrita com curso próprio (`mn`), em variantes.ts.
 */
export const ACCENTS_MVF: Accent[] = [
  {
    id: 'mvf-chakhar',
    name: 'Chakhar (padrão)',
    kind: 'sotaque',
    region: 'O centro da Mongólia Interior (Xilinhot)',
    country: 'CHN',
    subdivisions: ['CN-NM'],
    emoji: '🐎',
    summary: 'O mongol chakhar, a pronúncia de referência da Mongólia Interior, próximo do khalkha da Mongólia.',
    features: ['A pronúncia de referência da Mongólia Interior desde 1980.', 'Muito próximo do khalkha.'],
    examples: [['ᠮᠣᠩᠭᠣᠯ', 'mongol']],
  },
  {
    id: 'mvf-khorchin',
    name: 'Khorchin (leste)',
    kind: 'sotaque',
    region: 'O leste da Mongólia Interior (Tongliao) e o oeste da Manchúria',
    country: 'CHN',
    subdivisions: ['CN-NM'],
    emoji: '🌾',
    summary: 'O mongol do leste, o khorchin, com o maior número de falantes na China e muitas palavras do chinês.',
    features: ['O falar mongol com mais falantes na China.', 'Muitas palavras do chinês.'],
    examples: [['ᠮᠣᠩᠭᠣᠯ', 'mongol']],
  },
];
