import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * As duas formas do tétum (10/10/2026). Fontes: Wikipédia em português, inglês e tétum («Língua
 * tétum», «Tetun Terik», consultadas em 10/10/2026) e o Instituto Nacional de Linguística de Timor-Leste.
 * Se o tétum-terik vira dialeto ou língua própria é dúvida para o dono (docs/duvidas-variedades.md).
 */
const BASE_TDT: Accent[] = [
  {
    id: 'tdt-praca',
    name: 'Tétum-praça (Díli)',
    kind: 'sotaque',
    region: 'Díli e todo o país, como língua comum',
    country: 'TLS',
    subdivisions: ['TL-DI'],
    emoji: '🇹🇱',
    summary: 'O tétum de Díli, língua oficial de Timor-Leste ao lado do português, com muitas palavras do português.',
    features: ['Muitas palavras do português: “bondia”, “obrigadu”, “eskola”.', 'A língua comum entre os povos de Timor-Leste.'],
    examples: [['Bondia!', 'Bom dia!']],
  },
  {
    id: 'tdt-terik',
    name: 'Tétum-terik',
    kind: 'sotaque',
    region: 'A costa sul (Viqueque, Suai) e o Timor Ocidental, na Indonésia',
    country: 'TLS',
    subdivisions: ['TL-VI', 'TL-CO'],
    emoji: '🌾',
    summary: 'O tétum tradicional da costa sul, sem a influência do português, com uma gramática mais rica e a fala de cerimônia.',
    features: ['Quase sem palavras do português.', 'Gramática mais rica que a do tétum-praça.'],
    examples: [['Tetun Terik', 'tétum-terik']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_TDT: Accent[] = noDialeto(BASE_TDT, 'tdt-praca', { iguais: {'tdt-terik': 'tdt-terik', 'tdt-praca': 'tdt-praca'} });
