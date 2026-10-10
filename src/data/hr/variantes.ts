import type { LanguageVariant } from '../types';
import { ACCENTS_HR } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_HR: LanguageVariant[] = [
  dialetoPadrao('hr-HR', 'HRV', 'Croata da Croácia', '🇭🇷', 'O padrão do curso: o croata padrão, de base štokavska.'),
  dialetoDe(ACCENTS_HR, 'hr-burgenland', 'hr-AT', 'Croata do Burgenland (Áustria)', '🇦🇹'),
];
