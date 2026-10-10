import type { LanguageVariant } from '../types';
import { ACCENTS_AF } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_AF: LanguageVariant[] = [
  dialetoPadrao('af-ZA', 'ZAF', 'Africâner da África do Sul', '🇿🇦', 'O padrão do curso: o africâner da África do Sul, o da escola, dos jornais e da literatura.'),
  dialetoDe(ACCENTS_AF, 'af-namibia', 'af-NA', 'Africâner da Namíbia', '🇳🇦'),
];
