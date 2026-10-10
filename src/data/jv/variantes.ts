import type { LanguageVariant } from '../types';
import { ACCENTS_JV } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_JV: LanguageVariant[] = [
  dialetoPadrao('jv-ID', 'IDN', 'Javanês da Indonésia', '🇮🇩', 'O padrão do curso: o javanês de Java, com a fala de Yogyakarta e Solo como referência.'),
  dialetoDe(ACCENTS_JV, 'jv-suriname', 'jv-SR', 'Javanês do Suriname', '🇸🇷'),
];
