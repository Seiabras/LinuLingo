import type { LanguageVariant } from '../types';
import { ACCENTS_EE } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_EE: LanguageVariant[] = [
  dialetoPadrao('ee-GH', 'GHA', 'Eʋe de Gana', '🇬🇭', 'O padrão do curso: o eʋe de Gana, da região do Volta.'),
  dialetoDe(ACCENTS_EE, 'ee-togo', 'ee-TG', 'Eʋe do Togo', '🇹🇬'),
];
