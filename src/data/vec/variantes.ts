import type { LanguageVariant } from '../types';
import { ACCENTS_VEC } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_VEC: LanguageVariant[] = [
  dialetoPadrao('vec-IT', 'ITA', 'Vêneto da Itália', '🇮🇹', 'O padrão do curso: o vêneto da região do Vêneto, na Itália.'),
  dialetoDe(ACCENTS_VEC, 'vec-talian', 'vec-BR', 'Talian (Brasil)', '🇧🇷'),
];
