import type { Accent } from '../types';

/**
 * Os falares do alto-alemão médio (10/10/2026). Fontes: Wikipédia em português, inglês e alemão («Middle High
 * German», «Mittelhochdeutsch», «Neuhochdeutsche Diphthongierung», consultadas em 10/10/2026). O curso segue a
 * língua literária dos poetas do século XIII.
 */
export const ACCENTS_GMH: Accent[] = [
  {
    id: 'gmh-alemanico',
    name: 'Alemânico (Suábia, Suíça)',
    kind: 'sotaque',
    region: 'A Suábia, a Alsácia e a Suíça',
    country: 'DEU',
    subdivisions: ['DE-BW'],
    emoji: '🏔️',
    summary: 'O alto-alemão médio do sudoeste, que guardou as vogais longas “î”, “û”: “hûs” (casa), que o suíço-alemão diz até hoje.',
    features: ['Guarda as vogais longas: “hûs” (casa), “mîn” (meu).', 'A base do suíço-alemão e do alsaciano de hoje.'],
    examples: [['hûs', 'casa']],
  },
  {
    id: 'gmh-bavaro',
    name: 'Bávaro (Baviera, Áustria)',
    kind: 'sotaque',
    region: 'A Baviera e a Áustria',
    country: 'AUT',
    subdivisions: ['AT-9'],
    emoji: '🍺',
    summary: 'O alto-alemão médio do sudeste, o primeiro a transformar as vogais longas em ditongos, já no século XII: “hûs” virou “haus”. A região do “Nibelungenlied”.',
    features: ['As vogais longas viram ditongos: “hûs” vira “haus”.', 'O “Nibelungenlied” (por volta de 1200) foi escrito na região do Danúbio.'],
    examples: [['haus', 'casa', 'no alemânico, “hûs”']],
  },
  {
    id: 'gmh-central',
    name: 'Alemão central (Turíngia, Hesse)',
    kind: 'sotaque',
    region: 'A Turíngia, Hesse e a Francônia',
    country: 'DEU',
    subdivisions: ['DE-TH', 'DE-HE'],
    emoji: '🌲',
    summary: 'O alemão central médio, que transformou os ditongos “ie”, “uo” em vogais simples: “guot” virou “gût” (bom). Junto com o bávaro, deu a base do alemão de hoje.',
    features: ['Os ditongos viram vogais longas: “guot” vira “gût” (bom).', 'Junto com o bávaro, a base do alemão padrão moderno.'],
    examples: [['gût', 'bom', 'no alemão superior, “guot”']],
  },
];
