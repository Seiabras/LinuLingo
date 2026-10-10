import type { LanguageVariant } from '../types';
import { ACCENTS_MN } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_MN: LanguageVariant[] = [
  dialetoPadrao('mn-MN', 'MNG', 'Mongol da Mongólia', '🇲🇳', 'O padrão do curso: o mongol khalkha da Mongólia, escrito em cirílico.'),
  dialetoDe(ACCENTS_MN, 'mn-chakhar', 'mn-CN', 'Mongol da Mongólia Interior (China)', '🇨🇳'),
  // a escrita tradicional é variante de escrita e tem curso próprio no app (`mvf`): a primeira variante
  // com curso próprio, o modelo para todas (decisão do dono, 10/10/2026)
  {
    code: 'mn-Mong',
    country: 'CHN',
    kind: 'variante',
    name: 'Mongol na escrita tradicional',
    flag: '📜',
    summary:
      'A mesma língua na escrita mongol tradicional, vertical, de cima para baixo, usada no dia a dia da Mongólia Interior, na China. Na Mongólia, o governo anunciou em 2020 o uso das duas escritas nos documentos oficiais a partir de 2025. Ela tem curso próprio no app.',
    curso: 'mvf',
  },
];
