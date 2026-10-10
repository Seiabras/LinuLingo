import type { LanguageVariant } from '../types';
import { ACCENTS_HU } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_HU: LanguageVariant[] = [
  dialetoPadrao('hu-HU', 'HUN', 'Húngaro da Hungria', '🇭🇺', 'O padrão do curso: o húngaro da Hungria, com a fala de Budapeste como referência.'),
  dialetoDe(ACCENTS_HU, 'hu-transilvania', 'hu-RO', 'Húngaro da Transilvânia (Romênia)', '🇷🇴'),
];
