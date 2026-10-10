import type { Accent } from '../types';

/**
 * O hãtxa kuin (kaxinawá) nos dois países (10/10/2026). Fontes: Wikipédia em português e em espanhol
 * («Língua kaxinawá», «Idioma cashinahua», consultadas em 10/10/2026). Um sotaque por país.
 */
export const ACCENTS_CBS: Accent[] = [
  {
    id: 'cbs-brasil',
    name: 'Brasil (Acre)',
    kind: 'sotaque',
    region: 'Os rios Jordão, Tarauacá e Envira, no Acre',
    country: 'BRA',
    subdivisions: ['BR-AC'],
    emoji: '🇧🇷',
    summary: 'O hãtxa kuin dos huni kuin do Acre, onde vive a maior parte do povo, com escolas e livros na língua.',
    features: ['A maior parte dos falantes.', 'Livros e escolas na língua, feitos com os professores huni kuin.'],
    examples: [['Huni kuin', 'gente verdadeira (o nome do povo)']],
  },
  {
    id: 'cbs-peru',
    name: 'Peru (Purús)',
    kind: 'sotaque',
    region: 'O rio Purús, em Ucayali, no Peru',
    country: 'PER',
    subdivisions: ['PE-UCA'],
    emoji: '🇵🇪',
    summary: 'O cashinahua do Peru, das comunidades do alto Purús, com palavras do espanhol.',
    features: ['Palavras do espanhol.', 'Comunidades isoladas, perto da fronteira com o Acre.'],
    examples: [['Huni kuin', 'gente verdadeira (o nome do povo)']],
  },
];
