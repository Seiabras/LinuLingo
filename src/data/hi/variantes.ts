import type { LanguageVariant } from '../types';
import { ACCENTS_HI } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_HI: LanguageVariant[] = [
  dialetoPadrao('hi-IN', 'IND', 'Híndi da Índia', '🇮🇳', 'O padrão do curso: o híndi padrão da Índia, com base na fala de Délhi.'),
  dialetoDe(ACCENTS_HI, 'hi-fiji', 'hi-FJ', 'Híndi de Fiji', '🇫🇯'),
];
