import type { Accent } from '../types';

/**
 * Os três grandes grupos de falares do télugo (10/10/2026). Fontes: Wikipédia em português, inglês e
 * télugo («Telugu dialects», «Telangana Telugu», «Rayalaseema», consultadas em 10/10/2026). O padrão
 * segue a fala da costa (Krishna e Godavari).
 */
export const ACCENTS_TE: Accent[] = [
  {
    id: 'te-costeiro',
    name: 'Andhra costeira',
    kind: 'sotaque',
    region: 'A costa de Andhra Pradesh: os deltas do Krishna e do Godavari (Vijayawada, Rajahmundry)',
    country: 'IND',
    subdivisions: ['IN-AP'],
    emoji: '🌊',
    summary: 'O télugo da costa, dos deltas do Krishna e do Godavari, a base do padrão da escola, dos jornais e do cinema.',
    features: ['A base do télugo padrão.', 'Rajahmundry, no Godavari, é tida como berço da literatura em télugo.'],
    examples: [['నమస్కారం', 'Olá!']],
  },
  {
    id: 'te-telangana',
    name: 'Telangana (Hyderabad)',
    kind: 'sotaque',
    region: 'Telangana e Hyderabad',
    country: 'IND',
    subdivisions: ['IN-TS'],
    emoji: '🕌',
    summary: 'O télugo de Telangana, que foi parte do estado de Hyderabad dos nizams, com muitas palavras do urdu.',
    features: ['Muitas palavras do urdu, do tempo dos nizams.', 'A fala virou símbolo da identidade do estado, criado em 2014.'],
    examples: [['తెలంగాణ', 'Telangana']],
  },
  {
    id: 'te-rayalaseema',
    name: 'Rayalaseema',
    kind: 'sotaque',
    region: 'Rayalaseema, o sul do interior de Andhra Pradesh (Kurnool, Kadapa, Tirupati)',
    country: 'IND',
    subdivisions: ['IN-AP'],
    emoji: '⛰️',
    summary: 'O télugo do interior sul de Andhra Pradesh, de Kurnool a Tirupati, com traços do canarês e do tâmil vizinhos.',
    features: ['Traços do canarês e do tâmil.', 'Uma fala própria, muito usada nos filmes de ação.'],
    examples: [['రాయలసీమ', 'Rayalaseema']],
  },
];
