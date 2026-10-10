import type { LanguageVariant } from '../types';
import { ACCENTS_BR } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_BR: LanguageVariant[] = [
  dialetoPadrao('br-KLT', 'FRA', 'Bretão KLT', '🇫🇷', 'O padrão do curso: o bretão do grupo KLT (Léon, Trégor e Cornouaille), na grafia unificada (peurunvan).'),
  dialetoDe(ACCENTS_BR, 'br-gwenedeg', 'br-gwenedeg', 'Bretão vannetais (gwenedeg)', '🇫🇷'),
];
