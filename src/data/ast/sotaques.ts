import type { Accent } from '../types';

/**
 * Os falares do asturiano (10/10/2026): os três blocos tradicionais (ocidental, central e oriental).
 * Fontes: Wikipédia em asturiano e em espanhol («Dialeutos del asturianu», «Asturiano central»,
 * consultadas em 10/10/2026), com a norma da Academia de la Llingua Asturiana.
 */
export const ACCENTS_AST: Accent[] = [
  {
    id: 'ast-central',
    name: 'Asturiano central',
    kind: 'sotaque',
    region: 'O centro das Astúrias: Oviedo, Gijón e Avilés',
    country: 'ESP',
    subdivisions: ['ES-AS', 'ES-O'],
    emoji: '🍎',
    summary: 'O asturiano do centro, o mais falado e a base da norma escrita da Academia de la Llingua Asturiana, com o feminino plural em “-es”: “les cases”.',
    features: [
      'O feminino plural termina em “-es”: “les cases” (as casas), “les vaques”.',
      'É a base da norma da Academia de la Llingua Asturiana, criada em 1980.',
    ],
    examples: [['Bonos díes! ¿Cómo tas?', 'Bom dia! Como você está?']],
  },
  {
    id: 'ast-ocidental',
    name: 'Asturiano ocidental',
    kind: 'sotaque',
    region: 'O oeste das Astúrias e o norte de Leão',
    country: 'ESP',
    subdivisions: ['ES-AS', 'ES-O', 'ES-LE'],
    emoji: '⛰️',
    summary: 'O asturiano do oeste, com o feminino plural em “-as” (“las casas”) e os ditongos “ou” e “ei”, que lembram o galego e o português.',
    features: [
      'O feminino plural termina em “-as”: “las casas”.',
      'Ditongos decrescentes, como no galego: “cousa”, “feito”.',
    ],
    examples: [['Bonos días!', 'Bom dia!']],
  },
  {
    id: 'ast-oriental',
    name: 'Asturiano oriental',
    kind: 'sotaque',
    region: 'O leste das Astúrias, até a Cantábria',
    country: 'ESP',
    subdivisions: ['ES-AS', 'ES-O'],
    emoji: '🐄',
    summary: 'O asturiano do leste, onde o “f” do começo da palavra virou um “h” aspirado, como no espanhol antigo: “facer” soa “hacer”, com o “h” soprado.',
    features: [
      'O “f-” do latim vira um “h” aspirado: “fame” (fome) soa perto de “hame”.',
      'O feminino plural em “-es”, como no centro.',
    ],
    examples: [['¿Qué tal tas?', 'Como você está?']],
  },
];
