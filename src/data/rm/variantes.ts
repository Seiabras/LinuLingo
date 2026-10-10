import type { LanguageVariant } from '../types';
import { ACCENTS_RM } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * O romanche e os seus cinco dialetos, cada um com escrita própria (decisão do dono, 10/10/2026). O
 * padrão do curso é o Rumantsch Grischun, a escrita comum de 1982. Os dialetos entram com a pronúncia
 * documentada nos sotaques (fontes em sotaques.ts), sem histórias por falta de fonte.
 */
export const VARIANTS_RM: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_RM, 'rm-grischun', 'rm-grischun', 'Rumantsch Grischun (escrita comum)', '🇨🇭'), summary: 'O padrão do curso: o Rumantsch Grischun, a escrita comum criada em 1982 por Heinrich Schmid a partir dos cinco dialetos, usada pelo cantão dos Grisões e pela Confederação.' },
  dialetoDe(ACCENTS_RM, 'rm-sursilvan', 'rm-sursilvan', 'Sursilvano', '🇨🇭'),
  dialetoDe(ACCENTS_RM, 'rm-sutsilvan', 'rm-sutsilvan', 'Sutsilvano', '🇨🇭'),
  dialetoDe(ACCENTS_RM, 'rm-surmiran', 'rm-surmiran', 'Surmirano', '🇨🇭'),
  dialetoDe(ACCENTS_RM, 'rm-puter', 'rm-puter', 'Puter', '🇨🇭'),
  dialetoDe(ACCENTS_RM, 'rm-vallader', 'rm-vallader', 'Vallader', '🇨🇭'),
];
