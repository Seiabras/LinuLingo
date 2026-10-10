import type { Accent } from '../types';

/**
 * Os falares do piemontês (10/10/2026). Fontes: Wikipédia em piemontês e em italiano («Lenga
 * piemontèisa», «Dialetti piemontesi», consultadas em 10/10/2026); o padrão literário (koiné) é o de
 * Turim, com a grafia de Pacòt.
 */
export const ACCENTS_PMS: Accent[] = [
  {
    id: 'pms-turim',
    name: 'Turinês',
    kind: 'sotaque',
    region: 'Turim e arredores',
    country: 'ITA',
    subdivisions: ['IT-21', 'IT-TO'],
    emoji: '🏛️',
    summary: 'O piemontês de Turim, a base da língua literária (a “koiné”), com as vogais “ë” (um “ə”) e “eu” (como no francês “peu”).',
    features: [
      'A vogal “ë”, um “ə” neutro, e o “eu”, que soa como o “eu” do francês.',
      '“Cerea!” é o cumprimento educado, de chegada e de despedida.',
    ],
    examples: [['Cerea!', 'Bom dia! (cumprimento educado)']],
  },
  {
    id: 'pms-langhe',
    name: 'Langhe, Roero e Monferrato',
    kind: 'sotaque',
    region: 'As colinas de Cuneo, Asti e Alessandria',
    country: 'ITA',
    subdivisions: ['IT-21', 'IT-CN', 'IT-AT', 'IT-AL'],
    emoji: '🍇',
    summary: 'O piemontês das colinas do vinho, das Langhe e do Monferrato, a terra do escritor Beppe Fenoglio.',
    features: ['Vogais e terminações próprias de cada vale.', 'No Monferrato, traços de transição para o lígure e o lombardo.'],
    examples: [['Cerea!', 'Bom dia!']],
  },
  {
    id: 'pms-biella',
    name: 'Biellese',
    kind: 'sotaque',
    region: 'Biella e os vales do norte',
    country: 'ITA',
    subdivisions: ['IT-21', 'IT-BI'],
    emoji: '🧶',
    summary: 'O piemontês de Biella, a cidade da lã, no norte da região, com traços próprios que o separam do turinês.',
    features: ['Traços próprios de pronúncia e vocabulário.', 'Mais perto do lombardo nas palavras do dia a dia.'],
    examples: [['Cerea!', 'Bom dia!']],
  },
  {
    id: 'pms-canavese',
    name: 'Canavese',
    kind: 'sotaque',
    region: 'O Canavese, ao norte de Turim (Ivrea)',
    country: 'ITA',
    subdivisions: ['IT-21', 'IT-TO'],
    emoji: '🍊',
    summary: 'O piemontês do Canavese, a região de Ivrea, entre Turim e o Vale de Aosta.',
    features: ['Transição para o francoprovençal dos vales alpinos.', 'Ivrea é famosa pela Batalha das Laranjas do carnaval.'],
    examples: [['Cerea!', 'Bom dia!']],
  },
];
