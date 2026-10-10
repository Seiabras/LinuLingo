import type { Accent } from '../types';

/**
 * Os falares do kaingang (10/10/2026). Fontes: Wikipédia em português («Língua kaingang», consultada em
 * 10/10/2026), que segue a divisão de Wiesemann (1971) por regiões.
 */
export const ACCENTS_KGP: Accent[] = [
  {
    id: 'kgp-parana',
    name: 'Paraná',
    kind: 'sotaque',
    region: 'As terras indígenas do Paraná (Rio das Cobras, Mangueirinha)',
    country: 'BRA',
    subdivisions: ['BR-PR'],
    emoji: '🌲',
    summary: 'O kaingang do Paraná, com formas próprias, falado em várias terras indígenas do estado.',
    features: ['Formas e palavras próprias.', 'Muitas escolas bilíngues nas terras indígenas.'],
    examples: [['Inh kanhgág.', 'Eu sou kaingang.']],
  },
  {
    id: 'kgp-sao-paulo',
    name: 'São Paulo',
    kind: 'sotaque',
    region: 'As terras indígenas do oeste paulista (Icatu, Vanuíre)',
    country: 'BRA',
    subdivisions: ['BR-SP'],
    emoji: '🌾',
    summary: 'O kaingang de São Paulo, falado em poucas aldeias do oeste do estado, hoje com poucos falantes.',
    features: ['Poucos falantes.', 'A forma mais ao norte da língua.'],
    examples: [['Inh kanhgág.', 'Eu sou kaingang.']],
  },
  {
    id: 'kgp-sul',
    name: 'Rio Grande do Sul e Santa Catarina',
    kind: 'sotaque',
    region: 'As terras de Nonoai, Votouro e Xapecó',
    country: 'BRA',
    subdivisions: ['BR-RS', 'BR-SC'],
    emoji: '🧉',
    summary: 'O kaingang do sul, de Nonoai e Xapecó, onde fica a maior parte dos falantes, base da maioria dos materiais escritos.',
    features: ['A região com mais falantes.', 'A base da maior parte dos materiais escritos.'],
    examples: [['Inh kanhgág.', 'Eu sou kaingang.']],
  },
];
