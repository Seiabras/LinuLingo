import type { Accent } from '../types';

/**
 * Os falares do hauçá (10/10/2026). Fontes: Wikipédia em português, inglês e hauçá («Hausa language»,
 * «Hausa dialects», consultadas em 10/10/2026). O padrão segue a fala de Kano. A lista aprovou Nigéria
 * e Níger como dialetos; por falta de fonte para as histórias, o Níger entrou como sotaque (dúvida em
 * docs/duvidas-variedades.md).
 */
export const ACCENTS_HA: Accent[] = [
  {
    id: 'ha-kano',
    name: 'Kano (padrão)',
    kind: 'sotaque',
    region: 'Kano e o centro-norte da Nigéria',
    country: 'NGA',
    subdivisions: ['NG-KN', 'NG-JI'],
    emoji: '🏰',
    summary: 'O hauçá de Kano, a maior cidade do norte da Nigéria, a base do padrão da escrita, do rádio e do cinema (Kannywood).',
    features: ['A base do padrão.', 'Kano é a sede do cinema em hauçá, o “Kannywood”.'],
    examples: [['Sannu!', 'Olá!']],
  },
  {
    id: 'ha-sokoto',
    name: 'Sokoto (oeste)',
    kind: 'sotaque',
    region: 'Sokoto, Kebbi e o noroeste da Nigéria',
    country: 'NGA',
    subdivisions: ['NG-SO', 'NG-KE', 'NG-ZA'],
    emoji: '🕌',
    summary: 'O hauçá de Sokoto, a antiga capital do califado do século XIX, com formas e palavras próprias do oeste.',
    features: ['Formas e palavras próprias do hauçá ocidental.', 'Sokoto foi a capital do califado fundado por Usman dan Fodio.'],
    examples: [['Sakkwato', 'Sokoto']],
  },
  {
    id: 'ha-katsina',
    name: 'Katsina',
    kind: 'sotaque',
    region: 'Katsina, na fronteira com o Níger',
    country: 'NGA',
    subdivisions: ['NG-KT'],
    emoji: '🐎',
    summary: 'O hauçá de Katsina, uma das antigas cidades-estado hauçás, de transição entre o falar de Kano e o do Níger.',
    features: ['Fica entre o falar de Kano e o do Níger.', 'Uma das sete cidades-estado hauçás históricas.'],
    examples: [['Katsina', 'Katsina']],
  },
  {
    id: 'ha-zaria',
    name: 'Zaria (Zazzau)',
    kind: 'sotaque',
    region: 'Zaria e o sul de Kaduna',
    country: 'NGA',
    subdivisions: ['NG-KD'],
    emoji: '🎓',
    summary: 'O hauçá de Zaria, a antiga Zazzau, cidade universitária, com palavras próprias e a marca das línguas do sul da região.',
    features: ['Palavras próprias do hauçá de Zazzau.', 'Muitas pessoas falam também outras línguas da região.'],
    examples: [['Zazzau', 'Zaria']],
  },
  {
    id: 'ha-niger',
    name: 'Níger',
    kind: 'sotaque',
    region: 'O sul do Níger: Maradi, Zinder, Niamey',
    country: 'NER',
    subdivisions: ['NE-4', 'NE-7', 'NE-8'],
    emoji: '🇳🇪',
    summary: 'O hauçá do Níger, a língua mais falada do país, com palavras do francês, onde a Nigéria usa palavras do inglês.',
    features: ['Palavras do francês, onde a Nigéria usa as do inglês.', 'A língua comum da maior parte do país.'],
    examples: [['Sannu!', 'Olá!']],
  },
];
