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
];
