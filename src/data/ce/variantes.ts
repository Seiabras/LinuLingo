import type { LanguageVariant } from '../types';
import { ACCENTS_CE } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_CE: LanguageVariant[] = [
  dialetoPadrao('ce-RU', 'RUS', 'Checheno da Chechênia', '🇷🇺', 'O padrão do curso: o checheno da Chechênia, com a fala da planície (Grozny) como base da escrita.'),
  dialetoDe(ACCENTS_CE, 'ce-kist', 'ce-GE', 'Checheno da Geórgia (kist)', '🇬🇪'),
];
