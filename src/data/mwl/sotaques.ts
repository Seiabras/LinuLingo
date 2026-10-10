import type { Accent } from '../types';

/**
 * Os falares do mirandês (10/10/2026). Fontes: Wikipédia em mirandês e em português («Lhéngua
 * mirandesa», «Língua mirandesa», consultadas em 10/10/2026) e a Convenção Ortográfica da Língua
 * Mirandesa (1999). A Lei 7/99 reconheceu o mirandês como língua oficial de Portugal para a região.
 */
export const ACCENTS_MWL: Accent[] = [
  {
    id: 'mwl-central',
    name: 'Mirandês central',
    kind: 'sotaque',
    region: 'A maior parte do concelho de Miranda do Douro',
    country: 'PRT',
    subdivisions: ['PT-04'],
    emoji: '🐂',
    summary: 'O mirandês da maior parte do concelho de Miranda do Douro, a base da Convenção Ortográfica de 1999.',
    features: ['É a base da grafia oficial.', 'Ditongos “ie” e “uo” onde o português tem “e” e “o” abertos: “tierra”, “puorta”.'],
    examples: [['Miranda de l Douro', 'Miranda do Douro']],
  },
  {
    id: 'mwl-raiano',
    name: 'Mirandês raiano',
    kind: 'sotaque',
    region: 'As aldeias do norte do concelho, na fronteira (a raia) com a Espanha',
    country: 'PRT',
    subdivisions: ['PT-04'],
    emoji: '🚧',
    summary: 'O mirandês das aldeias da raia, junto à fronteira com Zamora, mais próximo dos falares leoneses do outro lado.',
    features: ['Mais perto dos falares leoneses da Espanha.', 'Conserva formas que o centro perdeu.'],
    examples: [['la raia', 'a fronteira']],
  },
  {
    id: 'mwl-sendines',
    name: 'Sendinês',
    kind: 'sotaque',
    region: 'Sendim, no sul do concelho',
    country: 'PRT',
    subdivisions: ['PT-04'],
    emoji: '🏡',
    summary: 'O mirandês de Sendim, o mais diferente de todos, com vogais próprias; a Convenção Ortográfica abre espaço para as suas formas.',
    features: ['O falar mais diferente dentro do mirandês.', 'A Convenção Ortográfica de 1999 aceita as suas formas próprias.'],
    examples: [['Sendin', 'Sendim']],
  },
];
