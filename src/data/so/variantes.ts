import type { LanguageVariant } from '../types';
import { ACCENTS_SO } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_SO: LanguageVariant[] = [
  dialetoPadrao('so-SO', 'SOM', 'Somali da Somália', '🇸🇴', 'O padrão do curso: o somali da Somália, com o falar do norte como base do padrão escrito.'),
  dialetoDe(ACCENTS_SO, 'so-djibuti', 'so-DJ', 'Somali de Djibuti', '🇩🇯'),
  dialetoDe(ACCENTS_SO, 'so-etiopia', 'so-ET', 'Somali da Etiópia', '🇪🇹'),
  dialetoDe(ACCENTS_SO, 'so-quenia', 'so-KE', 'Somali do Quênia', '🇰🇪'),
];
