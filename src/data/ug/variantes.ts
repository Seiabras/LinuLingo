import type { LanguageVariant } from '../types';
import { ACCENTS_UG } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_UG: LanguageVariant[] = [
  dialetoPadrao('ug-CN', 'CHN', 'Uigur de Xinjiang', '🇨🇳', 'O padrão do curso: o uigur de Xinjiang, na China, escrito em alfabeto árabe.'),
  dialetoDe(ACCENTS_UG, 'ug-cazaquistao', 'ug-KZ', 'Uigur do Cazaquistão', '🇰🇿'),
];
