import type { LanguageVariant } from '../types';
import { ROWS } from './vocabulario';
import { uzLatinoParaCirilico } from '@/services/transliteracao';
import { ACCENTS_UZ } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * As duas escritas do uzbeque (10/10/2026): o alfabeto latino, oficial desde 1993 (reformado em 1995)
 * e padrão do app, e o cirílico, usado de 1940 até a troca e ainda comum entre os mais velhos, nos
 * jornais e nas placas. Fonte: Wikipédia, «Uzbek alphabet» (consultada em 10/10/2026). Os
 * empréstimos do russo (com “ц”, “ь”) não se transliteram de volta sozinhos e ficam fora da amostra.
 */
const amostraCirilica: [string, string, string, string?][] = ROWS.filter(([palavra]) => !/ts|sʼ|ʼ/i.test(palavra))
  .slice(0, 30)
  .map(([palavra, traducao]) => [palavra, uzLatinoParaCirilico(palavra), traducao]);

// com os dialetos (decisão do dono, 10/10/2026): Uzbequistão (padrão, em alfabeto latino) e
// Afeganistão (em alfabeto árabe), e a escrita cirílica numa fileira à parte, como no chinês
export const VARIANTS_UZ: LanguageVariant[] = [
  dialetoPadrao('uz-UZ', 'UZB', 'Uzbeque do Uzbequistão', '🇺🇿', 'O padrão do curso: o uzbeque do Uzbequistão, no alfabeto latino oficial desde 1993, com “oʻ”, “gʻ”, “sh” e “ch”.'),
  dialetoDe(ACCENTS_UZ, 'uz-afeganistao', 'uz-AF', 'Uzbeque do Afeganistão', '🇦🇫'),
  {
    code: 'uz-Cyrl',
    country: 'UZB',
    kind: 'variante',
    name: 'Uzbeque em cirílico',
    flag: '✍️',
    summary:
      'A mesma língua no alfabeto cirílico, usado de 1940 até a troca para o latino e ainda muito visto em jornais, livros, placas e entre os mais velhos. “Oʻ” é “ў”, “gʻ” é “ғ”, “q” é “қ”, “h” é “ҳ”. Amostra das primeiras palavras do vocabulário.',
    vocab: amostraCirilica,
  },
];
