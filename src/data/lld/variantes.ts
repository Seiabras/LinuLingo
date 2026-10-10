import type { LanguageVariant } from '../types';
import { ACCENTS_LLD } from './sotaques';
import { dialetoDe } from '../dialeto-de-sotaque';

/**
 * O ladino das Dolomitas e os seus cinco dialetos, um por vale, cada um com escrita própria (decisão
 * do dono, 10/10/2026). O padrão do curso é o badiot, na grafia do Istitut Ladin Micurá de Rü. Os
 * dialetos entram com a pronúncia documentada nos sotaques (fontes em sotaques.ts), sem histórias.
 */
export const VARIANTS_LLD: LanguageVariant[] = [
  { ...dialetoDe(ACCENTS_LLD, 'lld-badiot', 'lld-badiot', 'Badiot (Val Badia)', '🇮🇹'), summary: 'O padrão do curso: o badiot, da Val Badia, na grafia do Istitut Ladin Micurá de Rü.' },
  dialetoDe(ACCENTS_LLD, 'lld-gherdeina', 'lld-gherdeina', 'Gherdëina (Val Gardena)', '🇮🇹'),
  dialetoDe(ACCENTS_LLD, 'lld-fascian', 'lld-fascian', 'Fascian (Val di Fassa)', '🇮🇹'),
  dialetoDe(ACCENTS_LLD, 'lld-fodom', 'lld-fodom', 'Fodom (Livinallongo)', '🇮🇹'),
  dialetoDe(ACCENTS_LLD, 'lld-anpezan', 'lld-anpezan', 'Anpezan (Cortina d’Ampezzo)', '🇮🇹'),
];
