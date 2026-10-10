import type { LanguageVariant } from '../types';
import { ACCENTS_UK } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_UK: LanguageVariant[] = [
  dialetoPadrao('uk-UA', 'UKR', 'Ucraniano da Ucrânia', '🇺🇦', 'O padrão do curso: o ucraniano da Ucrânia, com base na fala do centro (Kyiv e Poltava).'),
  dialetoDe(ACCENTS_UK, 'uk-parana', 'uk-BR', 'Ucraniano do Paraná', '🇧🇷'),
  dialetoDe(ACCENTS_UK, 'uk-canada', 'uk-CA', 'Ucraniano do Canadá', '🇨🇦'),
];
