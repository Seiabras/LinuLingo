import type { LanguageVariant } from '../types';
import { ACCENTS_TA } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_TA: LanguageVariant[] = [
  dialetoPadrao('ta-IN', 'IND', 'Tâmil da Índia', '🇮🇳', 'O padrão do curso: o tâmil de Tamil Nadu, na Índia, onde vive a maior parte dos falantes.'),
  { code: 'ta-LK', country: 'LKA', kind: 'dialeto', name: 'Tâmil do Sri Lanka', flag: '🇱🇰', summary: 'O tâmil do Sri Lanka, língua oficial do país ao lado do cingalês, falado no norte e no leste da ilha, mais conservador que o da Índia e com palavras do português e do neerlandês do tempo colonial.', pronunciation: ['Guarda formas antigas que o tâmil da Índia perdeu.', 'Palavras do português e do neerlandês, dos colonizadores.'] },
  dialetoDe(ACCENTS_TA, 'ta-singapura', 'ta-SG', 'Tâmil de Singapura e da Malásia', '🇸🇬'),
];
