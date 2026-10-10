import type { LanguageVariant } from '../types';
import { ACCENTS_COP } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_COP: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_COP, 'cop-saidico', 'cop-saidico', 'Copta saídico', '📜'), summary: 'O padrão do curso: o copta saídico, do Alto Egito, a língua clássica da literatura copta.' },
  dialetoDe(ACCENTS_COP, 'cop-bohairico', 'cop-bohairico', 'Copta bohaírico', '⛪'),
];
