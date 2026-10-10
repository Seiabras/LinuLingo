import type { LanguageVariant } from '../types';
import { ACCENTS_YRL } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_YRL: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_YRL, 'yrl-rio-negro', 'yrl-BR', 'Nheengatu do Brasil', '🇧🇷'), summary: 'O padrão do curso: o nheengatu do alto rio Negro, no Brasil.' },
  dialetoDe(ACCENTS_YRL, 'yrl-venezuela', 'yrl-VE', 'Nheengatu da Venezuela', '🇻🇪'),
  dialetoDe(ACCENTS_YRL, 'yrl-colombia', 'yrl-CO', 'Nheengatu da Colômbia', '🇨🇴'),
];
