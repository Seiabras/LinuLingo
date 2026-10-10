import type { LanguageVariant } from '../types';
import { ACCENTS_YI } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_YI: LanguageVariant[] = [
  dialetoPadrao('yi-YIVO', 'LTU', 'Iídiche padrão (YIVO)', '📚', 'O padrão do curso: o iídiche padrão do YIVO, com as vogais do litvish e a ortografia de 1936.'),
  dialetoDe(ACCENTS_YI, 'yi-hassidico', 'yi-hasidic', 'Iídiche hassídico', '🎩'),
];
