import type { Accent } from '../types';

/**
 * Os falares do pidgin nigeriano (naijá) e os pidgins vizinhos (10/10/2026). Fontes: Wikipédia em
 * português, inglês e pidgin («Nigerian Pidgin», «Cameroonian Pidgin English», «Ghanaian Pidgin
 * English», consultadas em 10/10/2026).
 */
export const ACCENTS_PCM: Accent[] = [
  {
    id: 'pcm-lagos',
    name: 'Lagos',
    kind: 'sotaque',
    region: 'Lagos e o sudoeste',
    country: 'NGA',
    subdivisions: ['NG-LA'],
    emoji: '🏙️',
    summary: 'O pidgin de Lagos, a maior cidade da Nigéria, a língua da música afrobeats e das comédias, com palavras do iorubá.',
    features: ['Palavras do iorubá.', 'A língua da música afrobeats.'],
    examples: [['How far?', 'E aí? Tudo certo?']],
  },
  {
    id: 'pcm-warri',
    name: 'Warri',
    kind: 'sotaque',
    region: 'Warri e o Delta do Níger',
    country: 'NGA',
    subdivisions: ['NG-DE'],
    emoji: '😂',
    summary: 'O pidgin de Warri, onde é a língua de casa de muita gente, considerado o pidgin mais “fundo” e famoso pelo humor.',
    features: ['Língua materna de muita gente, e não só segunda língua.', 'A terra dos comediantes mais conhecidos do país.'],
    examples: [['Wetin dey happen?', 'O que está acontecendo?']],
  },
  {
    id: 'pcm-port-harcourt',
    name: 'Port Harcourt',
    kind: 'sotaque',
    region: 'Port Harcourt e o estado de Rivers',
    country: 'NGA',
    subdivisions: ['NG-RI'],
    emoji: '🛢️',
    summary: 'O pidgin de Port Harcourt, a cidade do petróleo, com palavras do igbo e das línguas do Delta.',
    features: ['Palavras do igbo e das línguas do Delta.', 'Língua comum de uma cidade de muitos povos.'],
    examples: [['How far?', 'E aí? Tudo certo?']],
  },
  {
    id: 'pcm-camaroes',
    name: 'Pidgin de Camarões (kamtok)',
    kind: 'língua',
    region: 'O oeste dos Camarões (Bamenda, Buea, Douala)',
    country: 'CMR',
    emoji: '🇨🇲',
    summary: 'O pidgin dos Camarões, a língua comum do oeste do país, parente próximo do pidgin nigeriano, com palavras do francês.',
    features: ['Parente próximo do pidgin nigeriano.', '“Wuna” para “vocês”.'],
    examples: [['wuna', 'vocês']],
  },
  {
    id: 'pcm-gana',
    name: 'Pidgin de Gana',
    kind: 'língua',
    region: 'Acra e as cidades de Gana',
    country: 'GHA',
    subdivisions: ['GH-AA'],
    emoji: '🇬🇭',
    summary: 'O pidgin de Gana, falado sobretudo por homens jovens e estudantes, com palavras do twi e do gá.',
    features: ['Palavras do twi e do gá.', '“Chale” para “amigo, cara”.'],
    examples: [['Chale!', 'Ei, cara!']],
  },
];
