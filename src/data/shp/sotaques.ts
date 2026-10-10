import type { Accent } from '../types';

/**
 * O shipibo-konibo, no Peru (10/10/2026). Fontes: Wikipédia em português e em espanhol («Língua shipibo»,
 * «Idioma shipibo-konibo», «Cantagallo», consultadas em 10/10/2026).
 */
export const ACCENTS_SHP: Accent[] = [
  {
    id: 'shp-ucayali',
    name: 'Ucayali (Pucallpa)',
    kind: 'sotaque',
    region: 'As comunidades do rio Ucayali, em volta de Pucallpa',
    country: 'PER',
    subdivisions: ['PE-UCA', 'PE-LOR'],
    emoji: '🛶',
    summary: 'O shipibo-konibo do rio Ucayali, onde vive a maioria do povo, famoso pelos desenhos kené.',
    features: ['A maior parte dos falantes.', 'Os desenhos kené são patrimônio cultural do Peru.'],
    examples: [['Jakon!', 'Tudo bem!']],
  },
  {
    id: 'shp-lima',
    name: 'Lima (Cantagallo)',
    kind: 'sotaque',
    region: 'A comunidade urbana de Cantagallo, em Lima',
    country: 'PER',
    subdivisions: ['PE-LMA'],
    emoji: '🏙️',
    summary: 'O shipibo de Cantagallo, a comunidade de famílias shipibo que vive em Lima desde os anos 2000, com palavras do espanhol da cidade.',
    features: ['Uma comunidade urbana, longe da floresta.', 'Palavras do espanhol de Lima.'],
    examples: [['Jakon!', 'Tudo bem!']],
  },
];
