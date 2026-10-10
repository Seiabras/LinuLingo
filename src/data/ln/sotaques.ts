import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do lingala (10/10/2026). Fontes: Wikipédia em português, inglês e francês («Lingala»,
 * «Lingala classique», consultadas em 10/10/2026). A lista aprovou RD Congo e Congo-Brazzaville como
 * dialetos; por falta de fonte para as histórias, entraram como sotaques (dúvida em
 * docs/duvidas-variedades.md).
 */
const BASE_LN: Accent[] = [
  {
    id: 'ln-kinshasa',
    name: 'Kinshasa (lingala de rua)',
    kind: 'sotaque',
    region: 'Kinshasa',
    country: 'COD',
    subdivisions: ['CD-KN'],
    emoji: '🎸',
    summary: 'O lingala de Kinshasa, a língua da rumba congolesa, cheio de palavras do francês e de gírias que mudam rápido.',
    features: ['Muitas palavras do francês.', 'Menos classes de substantivos que o lingala clássico.'],
    examples: [['Mbote!', 'Olá!']],
  },
  {
    id: 'ln-classico',
    name: 'Lingala clássico (Équateur)',
    kind: 'sotaque',
    region: 'A província do Équateur (Mbandaka) e o lingala dos livros e da igreja',
    country: 'COD',
    subdivisions: ['CD-EQ'],
    emoji: '📖',
    summary: 'O lingala clássico, fixado pelos missionários no começo do século XX, com todas as classes de substantivos, ainda usado nos livros, na igreja e no rádio.',
    features: ['Todas as classes de substantivos, com os seus prefixos.', 'Usado na Bíblia, nos livros e no noticiário.'],
    examples: [['Mbote!', 'Olá!']],
  },
  {
    id: 'ln-brazzaville',
    name: 'Brazzaville',
    kind: 'sotaque',
    region: 'Brazzaville e o norte do Congo',
    country: 'COG',
    subdivisions: ['CG-BZV'],
    emoji: '🇨🇬',
    summary: 'O lingala de Brazzaville, do outro lado do rio Congo, uma das duas línguas nacionais do país, ao lado do kituba.',
    features: ['Uma das duas línguas nacionais do Congo.', 'Palavras do francês, como em Kinshasa.'],
    examples: [['Mbote!', 'Olá!']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_LN: Accent[] = noDialeto(BASE_LN, 'ln-CD', { iguais: {'ln-brazzaville': 'ln-CG'} });
