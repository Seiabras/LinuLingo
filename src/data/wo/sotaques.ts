import type { Accent } from '../types';

/**
 * Os falares do uolofe (10/10/2026). Fontes: Wikipédia em português, inglês e francês («Wolof
 * language», «Urban Wolof», consultadas em 10/10/2026). A lista aprovou Senegal e Gâmbia como dialetos;
 * por falta de fonte para as histórias, a Gâmbia entrou como sotaque (dúvida em
 * docs/duvidas-variedades.md).
 */
export const ACCENTS_WO: Accent[] = [
  {
    id: 'wo-dakar',
    name: 'Dakar (urbano)',
    kind: 'sotaque',
    region: 'Dakar',
    country: 'SEN',
    subdivisions: ['SN-DK'],
    emoji: '🏙️',
    summary: 'O uolofe urbano de Dakar, que mistura muito francês, a língua do mbalax e do rap senegalês.',
    features: ['Muitas palavras e frases do francês.', 'A língua comum do Senegal, falada por quase todos.'],
    examples: [['Nanga def?', 'Como vai?']],
  },
  {
    id: 'wo-lebu',
    name: 'Lebu (Cabo Verde senegalês)',
    kind: 'sotaque',
    region: 'A península do Cabo Verde (Dakar, Yoff, Rufisque)',
    country: 'SEN',
    subdivisions: ['SN-DK'],
    emoji: '🎣',
    summary: 'O uolofe dos lebu, os pescadores da península de Dakar, com formas próprias.',
    features: ['Formas próprias dos lebu.', 'Os lebu são os moradores tradicionais da península.'],
    examples: [['Jërejëf!', 'Obrigado!']],
  },
  {
    id: 'wo-kajoor',
    name: 'Kajoor (Cayor)',
    kind: 'sotaque',
    region: 'O antigo reino de Kajoor (Thiès, Louga)',
    country: 'SEN',
    subdivisions: ['SN-TH', 'SN-LG'],
    emoji: '🌾',
    summary: 'O uolofe do antigo reino de Kajoor, no interior, considerado um uolofe mais “puro”, com menos francês.',
    features: ['Menos palavras do francês.', 'Considerado pelos senegaleses o uolofe mais tradicional.'],
    examples: [['Jërejëf!', 'Obrigado!']],
  },
  {
    id: 'wo-gambia',
    name: 'Gâmbia',
    kind: 'sotaque',
    region: 'Banjul e a Gâmbia',
    country: 'GMB',
    subdivisions: ['GM-B', 'GM-W'],
    emoji: '🇬🇲',
    summary: 'O uolofe da Gâmbia, com palavras do inglês, onde o Senegal usa as do francês.',
    features: ['Palavras do inglês, onde o Senegal usa as do francês.', 'Grafia um pouco diferente da do Senegal.'],
    examples: [['Nanga def?', 'Como vai?']],
  },
];
