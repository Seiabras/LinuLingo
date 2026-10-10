import type { LanguageVariant } from '../types';
import { ACCENTS_OM } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_OM: LanguageVariant[] = [
  dialetoPadrao('om-ET', 'ETH', 'Oromo da Etiópia', '🇪🇹', 'O padrão do curso: o oromo da Etiópia, escrito no alfabeto latino “qubee”.'),
  dialetoDe(ACCENTS_OM, 'om-borana', 'om-KE', 'Oromo do Quênia (borana)', '🇰🇪'),
];
