import type { LanguageVariant } from '../types';
import { ACCENTS_LN } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_LN: LanguageVariant[] = [
  dialetoPadrao('ln-CD', 'COD', 'Lingala da RD Congo', '🇨🇩', 'O padrão do curso: o lingala da República Democrática do Congo, de Kinshasa e do lingala clássico dos livros.'),
  dialetoDe(ACCENTS_LN, 'ln-brazzaville', 'ln-CG', 'Lingala do Congo', '🇨🇬'),
];
