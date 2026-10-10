import type { LanguageVariant } from '../types';
import { ACCENTS_WO } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_WO: LanguageVariant[] = [
  dialetoPadrao('wo-SN', 'SEN', 'Uolofe do Senegal', '🇸🇳', 'O padrão do curso: o uolofe do Senegal, a língua comum do país.'),
  dialetoDe(ACCENTS_WO, 'wo-gambia', 'wo-GM', 'Uolofe da Gâmbia', '🇬🇲'),
];
