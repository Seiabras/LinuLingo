import type { LanguageVariant } from '../types';
import { ACCENTS_MG } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_MG: LanguageVariant[] = [
  dialetoPadrao('mg-MG', 'MDG', 'Malgaxe de Madagascar', '🇲🇬', 'O padrão do curso: o malgaxe de Madagascar, com o merina, de Antananarivo, como base.'),
  dialetoDe(ACCENTS_MG, 'mg-kibushi', 'mg-YT', 'Malgaxe de Mayotte (kibushi)', '🇾🇹'),
];
