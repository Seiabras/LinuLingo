import type { LanguageVariant } from '../types';
import { ACCENTS_GN } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_GN: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_GN, 'gn-paraguai', 'gn-PY', 'Guarani do Paraguai', '🇵🇾'), summary: 'O padrão do curso: o guarani do Paraguai, língua oficial do país ao lado do espanhol.' },
  dialetoDe(ACCENTS_GN, 'gn-bolivia', 'gn-BO', 'Guarani da Bolívia', '🇧🇴'),
  dialetoDe(ACCENTS_GN, 'gn-corrientes', 'gn-AR', 'Guarani da Argentina (Corrientes)', '🇦🇷'),
];
