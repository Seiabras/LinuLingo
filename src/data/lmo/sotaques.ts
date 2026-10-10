import type { Accent } from '../types';

/**
 * Os falares do lombardo (10/10/2026): o ocidental e o oriental, separados mais ou menos pelo rio
 * Adda. Fontes: Wikipédia em lombardo e em italiano («Lengua lumbarda», «Dialetto milanese»,
 * «Dialetto bergamasco», «Dialetto ticinese», consultadas em 10/10/2026). Se os dois grupos viram
 * dialetos é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_LMO: Accent[] = [
  {
    id: 'lmo-milanes',
    name: 'Milanês',
    kind: 'sotaque',
    region: 'Milão e a Brianza',
    country: 'ITA',
    subdivisions: ['IT-25', 'IT-MI', 'IT-MB'],
    emoji: '🏙️',
    summary: 'O lombardo de Milão, o mais conhecido do grupo ocidental, a língua da poesia de Carlo Porta.',
    features: [
      'As vogais “ö” e “ü”, como no francês.',
      'Os nomes masculinos perdem a vogal final: “el pan”, “el gatt”.',
    ],
    examples: [['Ghe pensi mi!', 'Deixa que eu cuido disso!']],
  },
  {
    id: 'lmo-ticino',
    name: 'Ticinês',
    kind: 'sotaque',
    region: 'O cantão do Ticino e os vales do sul dos Grisões, na Suíça',
    country: 'CHE',
    subdivisions: ['CH-TI', 'CH-GR'],
    emoji: '🇨🇭',
    summary: 'O lombardo da Suíça italiana, do Ticino, onde muitos ainda falam o dialeto em casa, ao lado do italiano oficial.',
    features: ['Cada vale tem o seu falar, e há uma “koiné” ticinesa comum.', 'Palavras emprestadas do alemão suíço.'],
    examples: [['Ciao!', 'Oi!']],
  },
  {
    id: 'lmo-como',
    name: 'Como e Lecco',
    kind: 'sotaque',
    region: 'O lago de Como, Como e Lecco',
    country: 'ITA',
    subdivisions: ['IT-25', 'IT-CO', 'IT-LC'],
    emoji: '🏞️',
    summary: 'O lombardo do lago de Como, também do grupo ocidental, próximo do milanês e do ticinês.',
    features: ['Próximo do ticinês, do outro lado da fronteira.', 'Vogais “ö” e “ü”, como no milanês.'],
    examples: [['Ciao!', 'Oi!']],
  },
  {
    id: 'lmo-bergamasco',
    name: 'Bergamasco',
    kind: 'sotaque',
    region: 'Bérgamo e os vales do norte',
    country: 'ITA',
    subdivisions: ['IT-25', 'IT-BG'],
    emoji: '🎭',
    summary: 'O lombardo de Bérgamo, do grupo oriental, a terra do Arlequim, onde o “s” muitas vezes vira um “h” aspirado.',
    features: [
      'O “s” vira “h” aspirado em muitas palavras.',
      'O artigo masculino é “ol”, onde o milanês diz “el”.',
      'Não distingue vogais longas e curtas, ao contrário do milanês.',
    ],
    examples: [['ol', 'o (artigo masculino)', 'no milanês, “el”']],
  },
  {
    id: 'lmo-bresciano',
    name: 'Bresciano',
    kind: 'sotaque',
    region: 'Bréscia e o lago de Garda',
    country: 'ITA',
    subdivisions: ['IT-25', 'IT-BS'],
    emoji: '⛵',
    summary: 'O lombardo de Bréscia, do grupo oriental, irmão do bergamasco, com traços de transição para o vêneto.',
    features: ['O artigo masculino “ol”, como em Bérgamo.', 'Perto do lago de Garda, se aproxima do vêneto de Verona.'],
    examples: [['ol', 'o (artigo masculino)', 'no milanês, “el”']],
  },
];
