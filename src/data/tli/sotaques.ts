import type { Accent } from '../types';

/**
 * O tlingit, no Alasca e no Canadá (10/10/2026). Fontes: Wikipédia em português e em inglês («Tlingit
 * language», «Inland Tlingit», consultadas em 10/10/2026).
 */
export const ACCENTS_TLI: Accent[] = [
  {
    id: 'tli-norte',
    name: 'Norte (Juneau, Sitka)',
    kind: 'sotaque',
    region: 'O sudeste do Alasca: Juneau, Sitka, Hoonah',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🐋',
    summary: 'O tlingit do norte do sudeste do Alasca, a variedade com mais falantes e materiais.',
    features: ['A variedade com mais falantes e materiais de ensino.', 'Muitas consoantes, inclusive várias “l” surdas.'],
    examples: [['Gunalchéesh!', 'Obrigado!']],
  },
  {
    id: 'tli-sul',
    name: 'Sul (Ketchikan)',
    kind: 'sotaque',
    region: 'O sul do sudeste do Alasca: Ketchikan, Saxman',
    country: 'USA',
    subdivisions: ['US-AK'],
    emoji: '🌲',
    summary: 'O tlingit do sul do Alasca, com tons e formas próprias, hoje com muito poucos falantes.',
    features: ['Tons próprios, diferentes dos do norte.', 'Muito poucos falantes.'],
    examples: [['Gunalchéesh!', 'Obrigado!']],
  },
  {
    id: 'tli-canada',
    name: 'Interior (Canadá)',
    kind: 'sotaque',
    region: 'Teslin, no Yukon, e Atlin, na Colúmbia Britânica',
    country: 'CAN',
    subdivisions: ['CA-YT', 'CA-BC'],
    emoji: '🍁',
    summary: 'O tlingit do interior, no Canadá, dos que subiram os rios para o interior, com formas próprias.',
    features: ['Formas próprias do interior.', 'Falado longe do mar, nos lagos do Yukon.'],
    examples: [['Gunalchéesh!', 'Obrigado!']],
  },
];
