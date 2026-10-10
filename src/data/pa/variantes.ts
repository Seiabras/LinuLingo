import type { LanguageVariant } from '../types';
import { dialetoPadrao } from '../dialeto-de-sotaque';

/**
 * Os dialetos do panjabi (decisão do dono, 10/10/2026): Índia, em gurmukhi, padrão do curso, e
 * Paquistão, em shahmukhi (alfabeto árabe). Fontes: Wikipédia em português, inglês e panjabi («Punjabi
 * language», «Shahmukhi alphabet», consultadas em 10/10/2026). Sem histórias por falta de fonte.
 */
export const VARIANTS_PA: LanguageVariant[] = [
  dialetoPadrao('pa-IN', 'IND', 'Panjabi da Índia (gurmukhi)', '🇮🇳', 'O padrão do curso: o panjabi do Punjab indiano, escrito em gurmukhi, a escrita dos sikhs.'),
  {
    code: 'pa-PK',
    country: 'PAK',
    kind: 'dialeto',
    name: 'Panjabi do Paquistão (shahmukhi)',
    flag: '🇵🇰',
    summary:
      'O panjabi do Paquistão, a língua materna de quase metade do país, escrita no alfabeto árabe (shahmukhi), com Lahore como centro. O Paquistão tem mais falantes de panjabi que a Índia.',
    pronunciation: [
      'Escrito no alfabeto árabe (shahmukhi), da direita para a esquerda, e não no gurmukhi.',
      'Mais palavras do urdu, do persa e do árabe; na Índia, mais palavras do híndi e do sânscrito.',
      'O majhi de Lahore é a mesma base do padrão indiano, de Amritsar.',
    ],
  },
];
