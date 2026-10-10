import type { Accent } from '../types';

/**
 * Os falares do crioulo haitiano (10/10/2026). Fontes: Wikipédia em português, inglês e crioulo
 * («Haitian Creole», «Kreyòl ayisyen», consultadas em 10/10/2026). O padrão segue a fala de Porto
 * Príncipe, com a grafia oficial de 1979.
 */
export const ACCENTS_HT: Accent[] = [
  {
    id: 'ht-porto-principe',
    name: 'Porto Príncipe (padrão)',
    kind: 'sotaque',
    region: 'Porto Príncipe e o oeste',
    country: 'HTI',
    subdivisions: ['HT-OU'],
    emoji: '🏙️',
    summary: 'O crioulo de Porto Príncipe, a capital, a base da língua escrita e da rádio.',
    features: ['A base do padrão escrito.', 'O “r” antes de “o” e “ou” vira “w”: “wouj” (vermelho), do francês “rouge”.'],
    examples: [['Bonjou!', 'Bom dia!']],
  },
  {
    id: 'ht-norte',
    name: 'Norte (Cap-Haïtien)',
    kind: 'sotaque',
    region: 'Cap-Haïtien e o norte',
    country: 'HTI',
    subdivisions: ['HT-ND', 'HT-NE', 'HT-NO'],
    emoji: '🏰',
    summary: 'O crioulo do norte, de Cap-Haïtien, a antiga capital colonial, com formas próprias, como o possessivo “a”: “liv a mwen” (o meu livro).',
    features: ['O possessivo com “a”: “liv a mwen” (o meu livro), onde o padrão diz “liv mwen”.', 'Palavras e formas próprias do norte.'],
    examples: [['Okap', 'Cap-Haïtien']],
  },
  {
    id: 'ht-sul',
    name: 'Sul (Les Cayes)',
    kind: 'sotaque',
    region: 'Les Cayes, Jérémie e a península do sul',
    country: 'HTI',
    subdivisions: ['HT-SD', 'HT-GA', 'HT-NI'],
    emoji: '🌴',
    summary: 'O crioulo do sul, de Les Cayes e Jérémie, com melodia própria e palavras do campo.',
    features: ['Melodia e palavras próprias.', 'Jérémie é a “cidade dos poetas” do Haiti.'],
    examples: [['Okay', 'Les Cayes']],
  },
];
