import type { Accent } from '../types';

/**
 * O tikuna nos três países (10/10/2026). Fontes: Wikipédia em português e em espanhol («Língua ticuna»,
 * «Idioma ticuna», consultadas em 10/10/2026). Povo de um só falar: um sotaque por país.
 */
export const ACCENTS_TCA: Accent[] = [
  {
    id: 'tca-brasil',
    name: 'Brasil (Alto Solimões)',
    kind: 'sotaque',
    region: 'O Alto Solimões: Tabatinga, Benjamin Constant, Santo Antônio do Içá',
    country: 'BRA',
    subdivisions: ['BR-AM'],
    emoji: '🇧🇷',
    summary: 'O tikuna do Brasil, onde vive a maioria do povo, um dos maiores povos indígenas do país.',
    features: ['A maior parte dos falantes.', 'Uma língua de tons, com até cinco níveis.'],
    examples: [['Nuxmae!', 'Olá!']],
  },
  {
    id: 'tca-colombia',
    name: 'Colômbia (Letícia)',
    kind: 'sotaque',
    region: 'O Trapézio Amazônico, em volta de Letícia',
    country: 'COL',
    subdivisions: ['CO-AMA'],
    emoji: '🇨🇴',
    summary: 'O tikuna da Colômbia, das comunidades do rio Amazonas em volta de Letícia, com palavras do espanhol.',
    features: ['Palavras do espanhol.', 'Comunidades na margem colombiana do Amazonas.'],
    examples: [['Nuxmae!', 'Olá!']],
  },
  {
    id: 'tca-peru',
    name: 'Peru (Loreto)',
    kind: 'sotaque',
    region: 'As comunidades do rio Amazonas em Loreto',
    country: 'PER',
    subdivisions: ['PE-LOR'],
    emoji: '🇵🇪',
    summary: 'O tikuna do Peru, das comunidades do baixo Amazonas peruano.',
    features: ['Palavras do espanhol.', 'Menos falantes que no Brasil e na Colômbia.'],
    examples: [['Nuxmae!', 'Olá!']],
  },
];
