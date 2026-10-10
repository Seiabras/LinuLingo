import type { Accent } from '../types';

/**
 * Os falares do amárico (10/10/2026). Fontes: Wikipédia em português, inglês e amárico («Amharic»,
 * «Amharic dialects», consultadas em 10/10/2026). O padrão segue a fala de Shewa e de Adis Abeba.
 */
export const ACCENTS_AM: Accent[] = [
  {
    id: 'am-adis',
    name: 'Adis Abeba (padrão)',
    kind: 'sotaque',
    region: 'Adis Abeba e Shewa',
    country: 'ETH',
    subdivisions: ['ET-AA', 'ET-AM'],
    emoji: '🏙️',
    summary: 'O amárico de Adis Abeba e de Shewa, a base do padrão da escola, da TV e do governo federal.',
    features: ['A base do padrão.', 'Na capital, muitas palavras do inglês e do oromo.'],
    examples: [['ሰላም', 'Olá!']],
  },
  {
    id: 'am-gojjam',
    name: 'Gojjam',
    kind: 'sotaque',
    region: 'Gojjam, ao sul do lago Tana (Debre Markos, Bahir Dar)',
    country: 'ETH',
    subdivisions: ['ET-AM'],
    emoji: '🌊',
    summary: 'O amárico de Gojjam, no noroeste, uma das regiões históricas da língua, com formas verbais e palavras próprias.',
    features: ['Formas verbais e palavras próprias.', 'A região das nascentes do Nilo Azul.'],
    examples: [['ጎጃም', 'Gojjam']],
  },
  {
    id: 'am-gondar',
    name: 'Gondar',
    kind: 'sotaque',
    region: 'Gondar, ao norte do lago Tana',
    country: 'ETH',
    subdivisions: ['ET-AM'],
    emoji: '🏰',
    summary: 'O amárico de Gondar, a antiga capital imperial dos castelos, com traços em comum com o de Gojjam.',
    features: ['Próximo do falar de Gojjam.', 'Gondar foi a capital do império nos séculos XVII e XVIII.'],
    examples: [['ጎንደር', 'Gondar']],
  },
  {
    id: 'am-wollo',
    name: 'Wollo',
    kind: 'sotaque',
    region: 'Wollo, no nordeste (Dessie)',
    country: 'ETH',
    subdivisions: ['ET-AM'],
    emoji: '🎶',
    summary: 'O amárico de Wollo, região de cristãos e muçulmanos, com palavras do árabe, do oromo e do afar, e uma tradição musical própria.',
    features: ['Palavras do árabe, do oromo e do afar.', 'A região de muitas canções tradicionais etíopes.'],
    examples: [['ወሎ', 'Wollo']],
  },
];
