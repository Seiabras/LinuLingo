import type { Accent } from '../types';

/**
 * Os falares do dhivehi (10/10/2026). Fontes: Wikipédia em português e em inglês («Dhivehi language»,
 * «Addu dialect», «Huvadhu dialect», «Mulaku dialect», consultadas em 10/10/2026). Os atóis do sul
 * falam variedades tão diferentes que o povo de Malé tem dificuldade de entendê-las.
 */
export const ACCENTS_DV: Accent[] = [
  {
    id: 'dv-male',
    name: 'Malé (padrão)',
    kind: 'sotaque',
    region: 'Malé e os atóis do norte e do centro',
    country: 'MDV',
    subdivisions: ['MV-MLE', 'MV-26'],
    emoji: '🏝️',
    summary: 'O dhivehi de Malé, a capital, a base do padrão da escola, da TV e do governo.',
    features: ['A base do padrão.', 'Escrito no alfabeto thaana, da direita para a esquerda.'],
    examples: [['މަރުޙަބާ!', 'Bem-vindo!']],
  },
  {
    id: 'dv-huvadhu',
    name: 'Huvadhu',
    kind: 'sotaque',
    region: 'O grande atol de Huvadhu, no sul',
    country: 'MDV',
    subdivisions: ['MV-27', 'MV-28'],
    emoji: '🐠',
    summary: 'O dhivehi do atol de Huvadhu, um dos maiores do mundo, muito diferente do de Malé, com formas antigas da língua.',
    features: ['Guarda formas antigas que o padrão perdeu.', 'Difícil de entender para quem só fala o de Malé.'],
    examples: [['ދިވެހި', 'dhivehi, o nome da língua']],
  },
  {
    id: 'dv-mulaku',
    name: 'Mulaku (Fuvahmulah)',
    kind: 'sotaque',
    region: 'A ilha de Fuvahmulah, isolada no sul',
    country: 'MDV',
    subdivisions: ['MV-29'],
    emoji: '🦈',
    summary: 'O dhivehi de Fuvahmulah, uma ilha sozinha no meio do oceano, com vogais e palavras próprias.',
    features: ['Vogais e palavras próprias da ilha.', 'Fica entre o falar de Huvadhu e o de Addu.'],
    examples: [['ދިވެހި', 'dhivehi, o nome da língua']],
  },
  {
    id: 'dv-addu',
    name: 'Addu',
    kind: 'sotaque',
    region: 'O atol de Addu, o mais ao sul',
    country: 'MDV',
    subdivisions: ['MV-01'],
    emoji: '⚓',
    summary: 'O dhivehi de Addu, no extremo sul, o mais diferente de todos, com gramática e palavras próprias.',
    features: ['O falar mais diferente do padrão.', 'Teve uma base militar britânica até 1976, e com ela palavras do inglês.'],
    examples: [['ދިވެހި', 'dhivehi, o nome da língua']],
  },
];
