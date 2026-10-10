import type { Accent } from '../types';

/**
 * Os falares do tcheco (10/10/2026). Fontes: Wikipédia em tcheco e em português («Nářečí českého
 * jazyka», «Obecná čeština», «Středomoravská nářečí», «Lašská nářečí», consultadas em 10/10/2026).
 */
export const ACCENTS_CS: Accent[] = [
  {
    id: 'cs-praga',
    name: 'Boêmia e Praga (obecná čeština)',
    kind: 'sotaque',
    region: 'Praga e a Boêmia',
    country: 'CZE',
    subdivisions: ['CZ-10', 'CZ-20'],
    emoji: '🏰',
    summary: 'O tcheco falado da Boêmia, a “obecná čeština” (tcheco comum), que se usa no dia a dia em vez do padrão escrito: “dobrej” no lugar de “dobrý”.',
    features: ['O “ý” vira “ej”: “dobrej den”, onde o padrão diz “dobrý den”.', 'Um “v” na frente de palavras com “o”: “vokno” (janela), “vokurka”.'],
    examples: [['dobrej den', 'bom dia', 'no padrão, “dobrý den”']],
  },
  {
    id: 'cs-hana',
    name: 'Haná (Morávia central)',
    kind: 'sotaque',
    region: 'A planície da Haná, em volta de Olomouc e Prostějov',
    country: 'CZE',
    subdivisions: ['CZ-71'],
    emoji: '🌾',
    summary: 'O tcheco da Haná, no centro da Morávia, onde o “ou” vira “ó” e o “ý” vira “é”: “móka” (farinha), onde o padrão diz “mouka”.',
    features: ['O “ou” vira “ó”: “móka” (farinha).', 'O “ý” vira “é”: “dobré”, onde o padrão diz “dobrý”.'],
    examples: [['móka', 'farinha', 'no padrão, “mouka”']],
  },
  {
    id: 'cs-moravia-leste',
    name: 'Morávia oriental (Valáquia, Slovácko)',
    kind: 'sotaque',
    region: 'A Valáquia morávia e o Slovácko, na fronteira com a Eslováquia',
    country: 'CZE',
    subdivisions: ['CZ-72', 'CZ-64'],
    emoji: '🍷',
    summary: 'O tcheco do leste da Morávia, a região do vinho e das canções populares, que não ditonga as vogais: “mouka” fica “muka”.',
    features: ['Não forma os ditongos da Boêmia: “muka” (farinha), “dobrý”.', 'Próximo do eslovaco ocidental, do outro lado da fronteira.'],
    examples: [['muka', 'farinha']],
  },
  {
    id: 'cs-lasko',
    name: 'Silésia (laško)',
    kind: 'sotaque',
    region: 'Ostrava e a Silésia tcheca',
    country: 'CZE',
    subdivisions: ['CZ-80'],
    emoji: '⚒️',
    summary: 'O tcheco de Ostrava e da Silésia, com o acento na penúltima sílaba, como no polonês, e sem vogais longas.',
    features: ['O acento na penúltima sílaba, como no polonês.', 'Não tem vogais longas.'],
    examples: [['Ostrava', 'Ostrava']],
  },
];
