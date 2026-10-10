import type { LanguageVariant } from '../types';
import { ACCENTS_HA } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_HA: LanguageVariant[] = [
  dialetoPadrao('ha-NG', 'NGA', 'Hauçá da Nigéria', '🇳🇬', 'O padrão do curso: o hauçá da Nigéria, com a fala de Kano como referência.'),
  dialetoDe(ACCENTS_HA, 'ha-niger', 'ha-NE', 'Hauçá do Níger', '🇳🇪'),
];
