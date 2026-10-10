import type { Accent } from '../types';

/**
 * Os falares do valão (10/10/2026): os quatro grandes grupos da Valônia. Fontes: Wikipédia em valão e
 * em francês («Walon», «Rifondou walon», consultadas em 10/10/2026); a grafia de referência é a de
 * Feller, e há uma grafia comum, o rifondou walon.
 */
export const ACCENTS_WA: Accent[] = [
  {
    id: 'wa-leste',
    name: 'Valão do leste (Liège)',
    kind: 'sotaque',
    region: 'Liège e o leste da Valônia',
    country: 'BEL',
    subdivisions: ['BE-WLG'],
    emoji: '🎭',
    summary: 'O valão de Liège, com a tradição do teatro de marionetes, o Tchantchès, herói popular da cidade.',
    features: [
      'Tchantchès, a marionete de Liège, é o símbolo do humor valão.',
      'Vogais e ditongos próprios, diferentes dos de Namur e de Charleroi.',
    ],
    examples: [['Bondjoû!', 'Bom dia!']],
  },
  {
    id: 'wa-central',
    name: 'Valão central (Namur)',
    kind: 'sotaque',
    region: 'Namur e o centro da Valônia',
    country: 'BEL',
    subdivisions: ['BE-WNA', 'BE-WBR'],
    emoji: '🏰',
    summary: 'O valão de Namur, a capital da Valônia, com uma literatura dialetal rica.',
    features: ['Fica no meio do caminho entre o valão de Liège e o de Charleroi.', 'Namur tem uma associação de escritores em valão ativa desde o século XIX.'],
    examples: [['Bondjoû!', 'Bom dia!']],
  },
  {
    id: 'wa-oeste',
    name: 'Valão do oeste (Charleroi)',
    kind: 'sotaque',
    region: 'Charleroi e o oeste da Valônia',
    country: 'BEL',
    subdivisions: ['BE-WHT'],
    emoji: '⛏️',
    summary: 'O valão de Charleroi, a antiga região das minas de carvão, com traços de transição para o picardo.',
    features: ['Perto da fronteira com o picardo, ao oeste.', 'O “tchålerwès” tem músicas e peças de teatro conhecidas na região.'],
    examples: [['Bondjoû!', 'Bom dia!']],
  },
];
