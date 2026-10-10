import type { LanguageVariant } from '../types';
import { ACCENTS_ARN } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_ARN: LanguageVariant[] = [
  dialetoPadrao('arn-CL', 'CHL', 'Mapudungun do Chile', '🇨🇱', 'O padrão do curso: o mapudungun do Chile, onde vive a maior parte dos falantes, da Araucanía à cordilheira.'),
  dialetoDe(ACCENTS_ARN, 'arn-argentina', 'arn-AR', 'Mapudungun da Argentina', '🇦🇷'),
];
