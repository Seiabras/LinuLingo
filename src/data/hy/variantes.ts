import type { LanguageVariant } from '../types';
import { ACCENTS_HY } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_HY: LanguageVariant[] = [
  dialetoPadrao('hy-AM', 'ARM', 'Armênio da Armênia', '🇦🇲', 'O padrão do curso: o armênio oriental da Armênia, com a fala de Ierevã como referência.'),
  dialetoDe(ACCENTS_HY, 'hy-ira', 'hy-IR', 'Armênio do Irã', '🇮🇷'),
];
