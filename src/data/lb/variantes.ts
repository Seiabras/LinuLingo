import type { LanguageVariant } from '../types';
import { ACCENTS_LB } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_LB: LanguageVariant[] = [
  dialetoPadrao('lb-LU', 'LUX', 'Luxemburguês do Luxemburgo', '🇱🇺', 'O padrão do curso: o luxemburguês do Grão-Ducado, com base na fala do centro.'),
  dialetoDe(ACCENTS_LB, 'lb-arlon', 'lb-BE', 'Luxemburguês da Bélgica (Arlon)', '🇧🇪'),
];
