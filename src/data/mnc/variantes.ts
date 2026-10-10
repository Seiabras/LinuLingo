import type { LanguageVariant } from '../types';
import { ACCENTS_MNC } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_MNC: LanguageVariant[] = [
  dialetoPadrao('mnc-qing', 'CHN', 'Manchu escrito (Qing)', '📜', 'O padrão do curso: o manchu escrito da dinastia Qing, a língua dos documentos da corte.'),
  dialetoDe(ACCENTS_MNC, 'mnc-xibe', 'mnc-xibe', 'Xibe (Xinjiang)', '🏹'),
];
