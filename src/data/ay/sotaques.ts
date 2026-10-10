import type { Accent } from '../types';

/**
 * As variedades do aimará (10/10/2026). Fontes: Wikipédia em português, inglês e espanhol («Aymara
 * language», «Idioma aimara», consultadas em 10/10/2026). A lista propôs Bolívia, Peru e Chile como
 * dialetos; por falta de fonte para as histórias, entraram como sotaques (dúvida em
 * docs/duvidas-variedades.md).
 */
export const ACCENTS_AY: Accent[] = [
  {
    id: 'ay-la-paz',
    name: 'La Paz e El Alto (Bolívia)',
    kind: 'sotaque',
    region: 'La Paz, El Alto e o altiplano boliviano',
    country: 'BOL',
    subdivisions: ['BO-L', 'BO-O'],
    emoji: '🚡',
    summary: 'O aimará de La Paz e de El Alto, a maior cidade aimará do mundo, com muitas palavras do espanhol.',
    features: ['Muitas palavras do espanhol.', 'Língua oficial da Bolívia desde a Constituição de 2009.'],
    examples: [['Kamisaki!', 'Olá! Como vai?']],
  },
  {
    id: 'ay-puno',
    name: 'Puno (Peru)',
    kind: 'sotaque',
    region: 'Puno e as margens peruanas do lago Titicaca',
    country: 'PER',
    subdivisions: ['PE-PUN'],
    emoji: '🛶',
    summary: 'O aimará de Puno, nas margens do lago Titicaca, no Peru, com formas próprias.',
    features: ['Formas e palavras próprias do lado peruano.', 'Convive com o quéchua na região.'],
    examples: [['Kamisaki!', 'Olá! Como vai?']],
  },
  {
    id: 'ay-chile',
    name: 'Chile (Arica)',
    kind: 'sotaque',
    region: 'O altiplano do norte do Chile (Arica e Parinacota)',
    country: 'CHL',
    subdivisions: ['CL-AP', 'CL-TA'],
    emoji: '🦙',
    summary: 'O aimará do norte do Chile, falado por poucas famílias do altiplano, hoje ensinado nas escolas da região.',
    features: ['Poucos falantes, a maioria idosa.', 'Ensinado como língua indígena nas escolas da região.'],
    examples: [['Kamisaki!', 'Olá! Como vai?']],
  },
];
