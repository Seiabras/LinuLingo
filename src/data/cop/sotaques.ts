import type { Accent } from '../types';

/**
 * Os dialetos do copta (10/10/2026). Fontes: Wikipédia em português e em inglês («Coptic language»,
 * «Sahidic Coptic», «Bohairic», consultadas em 10/10/2026). O curso ensina o saídico. Se o saídico e o
 * bohaírico viram dialetos é dúvida para o dono (docs/duvidas-variedades.md); por enquanto, sotaques.
 */
export const ACCENTS_COP: Accent[] = [
  {
    id: 'cop-saidico',
    name: 'Saídico (Alto Egito)',
    kind: 'sotaque',
    region: 'O Alto Egito, de Tebas a Assiut',
    country: 'EGY',
    subdivisions: ['EG-LX', 'EG-AST', 'EG-SHG'],
    emoji: '📜',
    summary: 'O copta do Alto Egito, a língua clássica da literatura copta dos séculos IV a X, a dos textos de Nag Hammadi e de Shenute.',
    features: ['A língua clássica da literatura copta.', 'A língua dos códices de Nag Hammadi.'],
    examples: [['Ⲭⲉⲣⲉ!', 'Olá!']],
  },
  {
    id: 'cop-bohairico',
    name: 'Bohaírico (Baixo Egito)',
    kind: 'sotaque',
    region: 'O Delta do Nilo e Alexandria; hoje, a liturgia da Igreja Copta',
    country: 'EGY',
    subdivisions: ['EG-ALX', 'EG-C'],
    emoji: '⛪',
    summary: 'O copta do Delta do Nilo, que virou a língua da liturgia da Igreja Copta a partir do século XI e ainda é rezado nas igrejas.',
    features: ['A língua da liturgia da Igreja Copta.', 'O “ϧ” (khei), que o saídico não tem.'],
    examples: [['Ⲭⲉⲣⲉ!', 'Olá!']],
  },
];
