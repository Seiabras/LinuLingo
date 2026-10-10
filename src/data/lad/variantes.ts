import type { LanguageVariant } from '../types';
import { ACCENTS_LAD } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_LAD: LanguageVariant[] = [
  dialetoPadrao('lad-oriental', 'TUR', 'Judeu-espanhol oriental', '🕍', 'O padrão do curso: o judeu-espanhol oriental, dos Bálcãs, da Turquia e de Israel, na grafia da revista “Aki Yerushalayim”.'),
  dialetoDe(ACCENTS_LAD, 'lad-haketia', 'lad-haketia', 'Haketia (Marrocos)', '🇲🇦'),
];
