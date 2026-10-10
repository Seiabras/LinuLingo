import type { Accent } from '../types';

/**
 * O groenlandês ocidental e as outras línguas inuítes da Groenlândia (10/10/2026). Fontes: Wikipédia em
 * português, inglês e dinamarquês («Greenlandic language», «Tunumiit oraasiat», «Inuktun»,
 * consultadas em 10/10/2026). Se o inuktun é língua própria ou dialeto é dúvida para o dono
 * (docs/duvidas-variedades.md); por enquanto, língua, como o tunumiisut.
 */
export const ACCENTS_KL: Accent[] = [
  {
    id: 'kl-ocidental',
    name: 'Ocidental (Nuuk)',
    kind: 'sotaque',
    region: 'Nuuk e a costa oeste',
    country: 'GRL',
    subdivisions: ['GL-SM', 'GL-QE'],
    emoji: '🏔️',
    summary: 'O groenlandês ocidental (kalaallisut), de Nuuk, a língua oficial do país desde 2009.',
    features: ['Língua oficial da Groenlândia desde 2009.', 'Palavras muito longas, com muitos sufixos.'],
    examples: [['Aluu!', 'Olá!']],
  },
  {
    id: 'kl-tunumiisut',
    name: 'Tunumiisut (leste)',
    kind: 'língua',
    region: 'A costa leste (Tasiilaq)',
    country: 'GRL',
    subdivisions: ['GL-SM'],
    emoji: '🧊',
    summary: 'A língua da costa leste, de Tasiilaq, muito diferente do groenlandês ocidental, isolada por séculos pelo gelo.',
    features: ['Vogais e consoantes diferentes das do oeste.', 'Muitas palavras trocadas por causa de um antigo tabu de nomes dos mortos.'],
    examples: [['Tunu', 'a costa leste']],
  },
  {
    id: 'kl-inuktun',
    name: 'Inuktun (Thule)',
    kind: 'língua',
    region: 'Qaanaaq e a região de Thule, no extremo norte',
    country: 'GRL',
    subdivisions: ['GL-AV'],
    emoji: '🐻‍❄️',
    summary: 'A língua dos inughuit, do extremo norte da Groenlândia, mais próxima do inuktitut do Canadá que do groenlandês ocidental.',
    features: ['Mais próxima das línguas inuítes do Canadá.', 'Cerca de mil falantes.'],
    examples: [['Avanersuaq', 'a região de Thule']],
  },
];
