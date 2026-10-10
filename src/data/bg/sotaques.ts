import type { Accent } from '../types';

/**
 * Os falares do búlgaro (10/10/2026), divididos pela “fronteira do iat” (a pronúncia da antiga vogal
 * ѣ). Fontes: Wikipédia em búlgaro e em português («Български диалекти», «Ятова граница»,
 * «Родопски говори», «Банатски български език», consultadas em 10/10/2026). O padrão segue o leste,
 * embora Sófia fique no oeste. O búlgaro do Banato entra como sotaque; se vira língua própria é
 * dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_BG: Accent[] = [
  {
    id: 'bg-oriental',
    name: 'Búlgaro oriental',
    kind: 'sotaque',
    region: 'O leste: Veliko Tarnovo, Varna, Ruse, Plovdiv',
    country: 'BGR',
    subdivisions: ['BG-04', 'BG-03', 'BG-18', 'BG-16'],
    emoji: '🏰',
    summary: 'O búlgaro do leste, a base do padrão desde o século XIX, onde a antiga vogal “iat” soa “ia” quando tônica: “мляко” (leite).',
    features: ['O “iat” vira “я” quando tônico: “мляко”, “бял” (branco).', 'As vogais átonas se reduzem: o “о” átono soa perto de “u”.'],
    examples: [['мляко', 'leite']],
  },
  {
    id: 'bg-ocidental',
    name: 'Búlgaro ocidental (Sófia)',
    kind: 'sotaque',
    region: 'O oeste: Sófia, Pernik, Vidin, Kyustendil',
    country: 'BGR',
    subdivisions: ['BG-22', 'BG-23', 'BG-14', 'BG-05', 'BG-10'],
    emoji: '🏛️',
    summary: 'O búlgaro do oeste, de Sófia, a capital, onde o “iat” é sempre “е”: “млеко”, onde o padrão diz “мляко”.',
    features: ['O “iat” é sempre “е”: “млеко”, “бел”.', 'As vogais átonas se reduzem menos que no leste.'],
    examples: [['млеко', 'leite', 'no padrão, “мляко”']],
  },
  {
    id: 'bg-rodopes',
    name: 'Ródopes',
    kind: 'sotaque',
    region: 'As montanhas Ródopes: Smolyan, Kardzhali',
    country: 'BGR',
    subdivisions: ['BG-21', 'BG-09'],
    emoji: '🎶',
    summary: 'Os falares arcaicos das montanhas Ródopes, com três artigos definidos (perto, longe e neutro), onde o padrão só tem um.',
    features: ['Três artigos definidos, conforme a distância: “-с”, “-н” e “-т”.', 'A gaita de foles dos Ródopes (каба гайда) acompanha o canto da região.'],
    examples: [['Смолян', 'Smolyan']],
  },
  {
    id: 'bg-banato',
    name: 'Búlgaro do Banato',
    kind: 'sotaque',
    region: 'As vilas búlgaras do Banato, na Romênia e na Sérvia (Vinga, Dudeştii Vechi)',
    country: 'ROU',
    subdivisions: ['RO-TM', 'RO-AR'],
    emoji: '✝️',
    summary: 'O búlgaro dos católicos que fugiram para o Banato no século XVIII, escrito em alfabeto latino, com palavras do húngaro, do alemão e do romeno.',
    features: ['Escrito em alfabeto latino, com norma própria desde o século XIX.', 'Palavras do húngaro, do alemão e do romeno.'],
    examples: [['Vinga', 'Vinga, uma das vilas do Banato romeno']],
  },
];
