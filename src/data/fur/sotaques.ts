import type { Accent } from '../types';

/**
 * Os falares do friulano (10/10/2026). Fontes: Wikipédia em friulano e em italiano («Lenghe furlane»,
 * «Dialetti friulani», consultadas em 10/10/2026); a norma escrita é cuidada pela ARLeF (Agjenzie
 * regjonâl pe lenghe furlane).
 */
export const ACCENTS_FUR: Accent[] = [
  {
    id: 'fur-central',
    name: 'Friulano central',
    kind: 'sotaque',
    region: 'Udine e o centro do Friul',
    country: 'ITA',
    subdivisions: ['IT-36'],
    emoji: '🏛️',
    summary: 'O friulano do centro, de Udine, a base da norma escrita comum.',
    features: ['É a base da grafia oficial do friulano.', 'O cumprimento de todas as horas é “Mandi!”.'],
    examples: [['Mandi! Cemût stâstu?', 'Oi! Como vai?']],
  },
  {
    id: 'fur-ocidental',
    name: 'Friulano ocidental',
    kind: 'sotaque',
    region: 'A região de Pordenone, no oeste do Friul',
    country: 'ITA',
    subdivisions: ['IT-36'],
    emoji: '🌾',
    summary: 'O friulano do oeste, de Pordenone, com o “-a” no lugar do “-e” do fim de muitas palavras femininas e a influência do vêneto vizinho.',
    features: ['Terminações em “-a” onde o centro tem “-e”: “la cjasa” (a casa), onde o centro diz “la cjase”.', 'Recebeu muito do vêneto, falado nas cidades da região.'],
    examples: [['Mandi!', 'Oi! Tchau!']],
  },
  {
    id: 'fur-carnico',
    name: 'Cárnico (Carnia)',
    kind: 'sotaque',
    region: 'A Carnia, nas montanhas do norte do Friul',
    country: 'ITA',
    subdivisions: ['IT-36'],
    emoji: '🏔️',
    summary: 'O friulano das montanhas da Carnia, conservador, com formas antigas que o centro já perdeu.',
    features: ['Guarda formas antigas do friulano.', 'Os vales isolados mantiveram diferenças de vale para vale.'],
    examples: [['Mandi!', 'Oi! Tchau!']],
  },
];
