import type { LanguageVariant } from '../types';
import { ACCENTS_GD } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_GD: LanguageVariant[] = [
  dialetoPadrao('gd-SC', 'GBR', 'Gaélico da Escócia', '🏴󠁧󠁢󠁳󠁣󠁴󠁿', 'O padrão do curso: o gaélico da Escócia, das Hébridas e das Terras Altas.'),
  dialetoDe(ACCENTS_GD, 'gd-albanuadh', 'gd-CA', 'Gaélico do Canadá (Nova Escócia)', '🇨🇦'),
];
