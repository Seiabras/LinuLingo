import type { LanguageVariant } from '../types';
import { ACCENTS_YUE } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_YUE: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_YUE, 'yue-hongkong', 'yue-HK', 'Cantonês de Hong Kong', '🇭🇰'), summary: 'O padrão do curso: o cantonês de Hong Kong, o mais ouvido no mundo pelos filmes e pela música.' },
  dialetoDe(ACCENTS_YUE, 'yue-macau', 'yue-MO', 'Cantonês de Macau', '🇲🇴'),
  dialetoDe(ACCENTS_YUE, 'yue-cantao', 'yue-CN', 'Cantonês de Cantão (Guangzhou)', '🇨🇳'),
];
