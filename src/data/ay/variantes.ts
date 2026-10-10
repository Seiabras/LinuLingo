import type { LanguageVariant } from '../types';
import { ACCENTS_AY } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_AY: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_AY, 'ay-la-paz', 'ay-BO', 'Aimará da Bolívia', '🇧🇴'), summary: 'O padrão do curso: o aimará da Bolívia, de La Paz e do altiplano.' },
  dialetoDe(ACCENTS_AY, 'ay-puno', 'ay-PE', 'Aimará do Peru', '🇵🇪'),
  dialetoDe(ACCENTS_AY, 'ay-chile', 'ay-CL', 'Aimará do Chile', '🇨🇱'),
];
