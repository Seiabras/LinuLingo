import type { Accent } from '../types';

/**
 * Os falares do alto-sorábio e o baixo-sorábio (10/10/2026). Fontes: Wikipédia em português, inglês e
 * alemão («Upper Sorbian», «Lower Sorbian», «Obersorbische Sprache», consultadas em 10/10/2026).
 */
export const ACCENTS_HSB: Accent[] = [
  {
    id: 'hsb-catolico',
    name: 'Região católica (Kamenz)',
    kind: 'sotaque',
    region: 'As vilas católicas entre Kamenz e Bautzen (Crostwitz, Ralbitz)',
    country: 'DEU',
    subdivisions: ['DE-SN'],
    emoji: '⛪',
    summary: 'O alto-sorábio das vilas católicas da Lusácia, onde a língua ainda passa de pais para filhos e é falada no dia a dia.',
    features: ['A região onde o sorábio é mais falado no dia a dia.', 'As festas católicas, como a cavalgada da Páscoa, são feitas em sorábio.'],
    examples: [['Witaj!', 'Olá!']],
  },
  {
    id: 'hsb-evangelico',
    name: 'Região evangélica',
    kind: 'sotaque',
    region: 'As antigas vilas protestantes da Alta Lusácia',
    country: 'DEU',
    subdivisions: ['DE-SN'],
    emoji: '📖',
    summary: 'O alto-sorábio das vilas protestantes, que deu a base da língua escrita, mas onde hoje quase não se fala mais.',
    features: ['Base de parte da língua escrita.', 'Hoje com poucos falantes.'],
    examples: [['Witaj!', 'Olá!']],
  },
  {
    id: 'hsb-baixo-sorabio',
    name: 'Baixo-sorábio',
    kind: 'língua',
    region: 'A Baixa Lusácia, em volta de Cottbus, no Brandemburgo',
    country: 'DEU',
    subdivisions: ['DE-BB'],
    emoji: '🦢',
    summary: 'A língua irmã do alto-sorábio, da região de Cottbus, mais próxima do polonês, com poucos falantes nativos e escolas de imersão.',
    features: ['Mais próxima do polonês; o alto-sorábio é mais próximo do tcheco.', 'Escolas de imersão (Witaj) tentam trazer a língua de volta.'],
    examples: [['Dobry źeń!', 'Bom dia!']],
  },
];
