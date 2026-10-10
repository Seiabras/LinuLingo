import type { LanguageVariant } from '../types';
import { ACCENTS_TR } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_TR: LanguageVariant[] = [
  dialetoPadrao('tr-TR', 'TUR', 'Turco da Turquia', '🇹🇷', 'O padrão do curso: o turco da Turquia, com a fala de Istambul como referência.'),
  dialetoDe(ACCENTS_TR, 'tr-chipre', 'tr-CY', 'Turco de Chipre', '🇨🇾'),
];
