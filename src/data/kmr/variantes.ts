import type { LanguageVariant } from '../types';
import { ACCENTS_KMR } from './sotaques';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos (decisão do dono, 10/10/2026). Sem fonte para as duas histórias, cada dialeto entra com o
 * resumo e os traços de pronúncia já documentados nos sotaques (as fontes estão em sotaques.ts). No
 * mundo ideal, cada dialeto ganha um curso próprio até o teto (ver PENDENTES.md).
 */
export const VARIANTS_KMR: LanguageVariant[] = [
  dialetoPadrao('kmr-TR', 'TUR', 'Curmanji da Turquia', '🇹🇷', 'O padrão do curso: o curmanji da Turquia, escrito em alfabeto latino, onde vive a maior parte dos falantes.'),
  dialetoDe(ACCENTS_KMR, 'kmr-badini', 'kmr-IQ', 'Curmanji do Iraque (badini)', '🇮🇶'),
  dialetoDe(ACCENTS_KMR, 'kmr-siria', 'kmr-SY', 'Curmanji da Síria', '🇸🇾'),
  dialetoDe(ACCENTS_KMR, 'kmr-armenia', 'kmr-AM', 'Curmanji da Armênia e da Geórgia', '🇦🇲'),
];
