import type { Accent } from '../types';

/**
 * Os falares do bretão (10/10/2026): os três do grupo KLT (Kernev, Leon, Treger) e o gwenedeg
 * (vannetais). Fontes: Wikipédia em bretão e em francês («Brezhoneg», «Vannetais», «Peurunvan»,
 * consultadas em 10/10/2026). A grafia unificada (peurunvan, 1941) escreve “zh” para juntar o “z” do
 * KLT e o “h” do vannetais: “Breizh”. Se o vannetais vira dialeto é dúvida para o dono
 * (docs/duvidas-variedades.md).
 */
export const ACCENTS_BR: Accent[] = [
  {
    id: 'br-leon',
    name: 'Leonês (Leon)',
    kind: 'sotaque',
    region: 'O Léon, no noroeste da Bretanha (Brest, Morlaix)',
    country: 'FRA',
    subdivisions: ['FR-29'],
    emoji: '⛪',
    summary: 'O bretão do Léon, conservador, a base da língua literária do século XIX.',
    features: ['Pronuncia o “zh” como “z”: “Breizh” soa “Breiz”.', 'O acento fica na penúltima sílaba, como em quase todo o bretão.'],
    examples: [['Demat!', 'Bom dia!']],
  },
  {
    id: 'br-treger',
    name: 'Tregorrois (Treger)',
    kind: 'sotaque',
    region: 'O Trégor, no norte (Lannion, Tréguier)',
    country: 'FRA',
    subdivisions: ['FR-22'],
    emoji: '🌊',
    summary: 'O bretão do Trégor, no norte, que encurta muitas palavras na fala.',
    features: ['Formas curtas, com sílabas que caem na fala rápida.', 'O “zh” também soa “z”.'],
    examples: [['Demat!', 'Bom dia!']],
  },
  {
    id: 'br-kernev',
    name: 'Cornualhês (Kernev)',
    kind: 'sotaque',
    region: 'A Cornouaille, no sudoeste (Quimper, Douarnenez)',
    country: 'FRA',
    subdivisions: ['FR-29', 'FR-56'],
    emoji: '🥞',
    summary: 'O bretão da Cornouaille, a maior região bretã, a terra da festa de Quimper.',
    features: ['A região com mais falantes do grupo KLT.', 'O “zh” soa “z”, como no Léon.'],
    examples: [['Demat!', 'Bom dia!']],
  },
  {
    id: 'br-gwenedeg',
    name: 'Vannetais (gwenedeg)',
    kind: 'sotaque',
    region: 'O Vannetais, no sudeste (Vannes, Pontivy, Lorient)',
    country: 'FRA',
    subdivisions: ['FR-56'],
    emoji: '⚓',
    summary: 'O bretão de Vannes, o mais diferente, com grafia própria até 1941: o “zh” da grafia comum soa “h” aqui, e o acento cai na última sílaba.',
    features: ['O “zh” soa “h”: “Breizh” soa “Breih”.', 'O acento cai na última sílaba, e não na penúltima.', 'Teve escrita própria até a grafia unificada de 1941.'],
    examples: [['Breizh', 'Bretanha', 'pronunciado “Breih”']],
  },
];
