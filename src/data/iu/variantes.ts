import type { LanguageVariant } from '../types';
import { ACCENTS_IU } from './sotaques';
import { ROWS } from './vocabulario';
import { dialetoDe, dialetoPadrao } from '../dialeto-de-sotaque';
import { toReadingIu } from '@/services/reading-inuktitut';

/**
 * Os dialetos do inuktitut (Nunavut, padrão; Nunavik; Labrador) e as duas escritas: o silabário,
 * padrão do curso, e as letras latinas, usadas no Labrador, no inuinnaqtun e em muitos textos. Sem
 * histórias nos dialetos, por falta de fonte. A amostra em letras latinas vem da correspondência
 * padrão do ICI (src/services/reading-inuktitut.ts).
 */
const amostraLatina: [string, string, string, string?][] = ROWS.slice(0, 30).map(([palavra, traducao]) => [palavra, toReadingIu(palavra), traducao]);

export const VARIANTS_IU: LanguageVariant[] = [
  dialetoPadrao('iu-NU', 'CAN', 'Inuktitut de Nunavut', '🇨🇦', 'O padrão do curso: o inuktitut de Nunavut, da ilha de Baffin e de Iqaluit, escrito no silabário.'),
  dialetoDe(ACCENTS_IU, 'iu-nunavik', 'iu-NK', 'Inuttitut de Nunavik (Quebec)', '🇨🇦'),
  dialetoDe(ACCENTS_IU, 'iu-labrador', 'iu-LB', 'Inuttut do Labrador', '🇨🇦'),
  {
    code: 'iu-Latn',
    country: 'CAN',
    kind: 'variante',
    name: 'Inuktitut em letras latinas',
    flag: '🔤',
    summary: 'A mesma língua em letras latinas, na ortografia do Inuit Cultural Institute: a do Labrador, a do inuinnaqtun e a de muitos textos e mensagens. O silabário e as letras latinas se correspondem sílaba a sílaba. Amostra das primeiras palavras do vocabulário.',
    vocab: amostraLatina,
  },
];
