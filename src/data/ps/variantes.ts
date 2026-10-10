import type { LanguageVariant } from '../types';
import { ACCENTS_PS } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_PS: LanguageVariant[] = [
  dialetoPadrao('ps-AF', 'AFG', 'Pachto do Afeganistão', '🇦🇫', 'O padrão do curso: o pachto do Afeganistão, língua oficial do país ao lado do dari, com os falares de Kandahar e do centro.'),
  dialetoDe(ACCENTS_PS, 'ps-peshawar', 'ps-PK', 'Pachto do Paquistão', '🇵🇰'),
];
