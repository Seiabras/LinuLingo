import type { LanguageVariant } from '../types';
import { ACCENTS_SCO } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_SCO: LanguageVariant[] = [
  dialetoPadrao('sco-SC', 'GBR', 'Scots da Escócia', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'O padrão do curso: o scots da Escócia, com a fala do centro como referência.'),
  dialetoDe(ACCENTS_SCO, 'sco-ulster', 'sco-ulster', 'Scots do Ulster', '🇬🇧'),
];
