import type { Accent } from '../types';

/**
 * Os falares do macedônio (10/10/2026). Fontes: Wikipédia em macedônio e em português
 * («Македонски дијалекти», «Западни македонски дијалекти», consultadas em 10/10/2026). O padrão de
 * 1945 partiu dos falares do centro-oeste (Prilep, Bitola, Kičevo, Veles), com o acento fixo na
 * antepenúltima sílaba.
 */
export const ACCENTS_MK: Accent[] = [
  {
    id: 'mk-ocidental',
    name: 'Macedônio ocidental',
    kind: 'sotaque',
    region: 'O centro-oeste: Prilep, Bitola, Kičevo, Veles, Ohrid',
    country: 'MKD',
    subdivisions: ['MK-508', 'MK-501', 'MK-307', 'MK-101', 'MK-310'],
    emoji: '🏞️',
    summary: 'O macedônio do centro-oeste, a base do padrão de 1945, com o acento sempre na antepenúltima sílaba.',
    features: ['O acento cai sempre na antepenúltima sílaba, nas palavras de três sílabas ou mais.', 'Três artigos definidos, por distância: “-от”, “-ов”, “-он”.'],
    examples: [['Добар ден!', 'Bom dia!']],
  },
  {
    id: 'mk-oriental',
    name: 'Macedônio oriental',
    kind: 'sotaque',
    region: 'O leste: Štip, Strumica, Kočani',
    country: 'MKD',
    subdivisions: ['MK-211', 'MK-410', 'MK-206'],
    emoji: '🌶️',
    summary: 'O macedônio do leste, de transição para o búlgaro, onde o acento não é fixo como no oeste.',
    features: ['O acento é mais livre que no padrão.', 'Traços de transição para o búlgaro, a leste.'],
    examples: [['Добар ден!', 'Bom dia!']],
  },
  {
    id: 'mk-norte',
    name: 'Macedônio do norte',
    kind: 'sotaque',
    region: 'O norte: Kumanovo, Kratovo, Kriva Palanka e Skopje',
    country: 'MKD',
    subdivisions: ['MK-703', 'MK-701', 'MK-702'],
    emoji: '🗻',
    summary: 'O macedônio do norte, de Kumanovo, de transição para o sérvio do sul, com traços dos falares torlaki.',
    features: ['Traços de transição para o sérvio do sul.', 'O acento também cai na antepenúltima, como no padrão.'],
    examples: [['Добар ден!', 'Bom dia!']],
  },
];
