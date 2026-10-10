import type { Accent } from '../types';

/**
 * Os falares do ainu (10/10/2026). Fontes: Wikipédia em português, inglês e japonês («Ainu language»,
 * «Hokkaido Ainu», «Sakhalin Ainu», «Kuril Ainu», consultadas em 10/10/2026). Os materiais do curso
 * seguem sobretudo o falar de Saru (Biratori), o de Kayano Shigeru.
 */
export const ACCENTS_AIN: Accent[] = [
  {
    id: 'ain-saru',
    name: 'Saru (Biratori)',
    kind: 'sotaque',
    region: 'O vale do rio Saru, em Biratori, no sul de Hokkaido',
    country: 'JPN',
    subdivisions: ['JP-01'],
    emoji: '🏞️',
    summary: 'O ainu do vale do Saru, em Biratori, o mais documentado, terra de Kayano Shigeru, o primeiro ainu no Parlamento japonês (1994).',
    features: ['A base da maior parte dos materiais de ensino.', 'Kayano Shigeru fez um dicionário e um museu do ainu em Nibutani.'],
    examples: [['irankarapte', 'Olá!']],
  },
  {
    id: 'ain-chitose',
    name: 'Chitose',
    kind: 'sotaque',
    region: 'Chitose, perto de Sapporo',
    country: 'JPN',
    subdivisions: ['JP-01'],
    emoji: '✈️',
    summary: 'O ainu de Chitose, muito próximo do de Saru, documentado no dicionário de Nakagawa Hiroshi.',
    features: ['Muito próximo do falar de Saru.', 'Documentado no dicionário de Nakagawa Hiroshi (1995).'],
    examples: [['irankarapte', 'Olá!']],
  },
  {
    id: 'ain-shizunai',
    name: 'Shizunai (Hidaka)',
    kind: 'sotaque',
    region: 'Shizunai e o leste de Hidaka',
    country: 'JPN',
    subdivisions: ['JP-01'],
    emoji: '🐴',
    summary: 'O ainu de Shizunai, no leste de Hidaka, com traços próprios que o separam do de Saru.',
    features: ['Formas e palavras próprias.', 'Uma das falas de Hokkaido documentadas no século XX.'],
    examples: [['aynu', 'ser humano, pessoa']],
  },
  {
    id: 'ain-sacalina',
    name: 'Sacalina (extinto)',
    kind: 'sotaque',
    region: 'A ilha Sacalina, hoje na Rússia',
    country: 'RUS',
    subdivisions: ['RU-SAK'],
    emoji: '🌊',
    summary: 'O ainu de Sacalina, muito diferente do de Hokkaido, com vogais longas. A última falante conhecida, Asai Take, morreu em 1994.',
    features: ['Vogais longas que o ainu de Hokkaido não tem.', 'Consoantes do fim da palavra diferentes das de Hokkaido.'],
    examples: [['aynu', 'ser humano, pessoa']],
  },
  {
    id: 'ain-curilas',
    name: 'Curilas (extinto)',
    kind: 'sotaque',
    region: 'As ilhas Curilas',
    country: 'RUS',
    subdivisions: ['RU-SAK'],
    emoji: '🏝️',
    summary: 'O ainu das ilhas Curilas, conhecido só por listas de palavras dos séculos XVIII e XIX, extinto no começo do século XX.',
    features: ['Conhecido só por listas de palavras.', 'Extinto no começo do século XX.'],
    examples: [['aynu', 'ser humano, pessoa']],
  },
];
