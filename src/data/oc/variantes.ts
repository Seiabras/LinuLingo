import type { LanguageVariant } from '../types';
import { ACCENTS_OC } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * Os seis grandes dialetos do occitano (decisão do dono, 10/10/2026), cada um com norma escrita própria.
 * O padrão do curso é o languedociano, o mais próximo da língua clássica. Entram com a pronúncia
 * documentada nos sotaques (fontes em sotaques.ts), sem histórias por falta de fonte.
 */
export const VARIANTS_OC: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_OC, 'oc-lengadocian', 'oc-lengadocian', 'Languedociano', '🇫🇷'), summary: 'O padrão do curso: o occitano do Languedoc, o mais próximo da língua clássica dos trovadores.' },
  dialetoDe(ACCENTS_OC, 'oc-provencau', 'oc-provencau', 'Provençal', '🌻'),
  dialetoDe(ACCENTS_OC, 'oc-gascon', 'oc-gascon', 'Gascão (e aranês)', '🦆'),
  dialetoDe(ACCENTS_OC, 'oc-lemosin', 'oc-lemosin', 'Limosino', '🐄'),
  dialetoDe(ACCENTS_OC, 'oc-auvernhat', 'oc-auvernhat', 'Auvernhês', '🌋'),
  dialetoDe(ACCENTS_OC, 'oc-vivaroaupenc', 'oc-vivaroaupenc', 'Vivaro-alpino', '🏔️'),
];
