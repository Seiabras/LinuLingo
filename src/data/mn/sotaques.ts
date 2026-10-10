import type { Accent } from '../types';

/**
 * Os falares do mongol (10/10/2026). Fontes: Wikipédia em português, inglês e mongol («Mongolian
 * language», «Khalkha Mongolian», «Oirat language», «Chakhar Mongolian», «Buryat language»,
 * consultadas em 10/10/2026). A Mongólia Interior (China) entra como sotaque; se vira dialeto é dúvida
 * para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_MN: Accent[] = [
  {
    id: 'mn-khalkha',
    name: 'Khalkha (Ulaanbaatar)',
    kind: 'sotaque',
    region: 'Ulaanbaatar e o centro da Mongólia',
    country: 'MNG',
    subdivisions: ['MN-1'],
    emoji: '🏙️',
    summary: 'O mongol khalkha, da maioria do país e de Ulaanbaatar, a base do padrão escrito em cirílico.',
    features: ['A base do padrão.', 'Escrito em cirílico desde os anos 1940, com as letras “ө” e “ү”.'],
    examples: [['Сайн байна уу?', 'Olá! Como vai?']],
  },
  {
    id: 'mn-oirat',
    name: 'Oirat (oeste)',
    kind: 'sotaque',
    region: 'O oeste da Mongólia: Khovd, Uvs',
    country: 'MNG',
    subdivisions: ['MN-043'],
    emoji: '🏔️',
    summary: 'O mongol dos oirates, no oeste do país, parente do calmuco da Rússia, com vogais e palavras próprias.',
    features: ['Parente do calmuco, falado na Rússia, às margens do Volga.', 'Vogais e palavras próprias do oeste.'],
    examples: [['Ховд', 'Khovd']],
  },
  {
    id: 'mn-chakhar',
    name: 'Mongólia Interior (chakhar)',
    kind: 'sotaque',
    region: 'A Mongólia Interior, na China',
    country: 'CHN',
    subdivisions: ['CN-NM'],
    emoji: '🇨🇳',
    summary: 'O mongol da Mongólia Interior, na China, com o chakhar como pronúncia de referência, escrito na escrita mongol tradicional, vertical, e com palavras do chinês.',
    features: ['Escrito na escrita tradicional, de cima para baixo.', 'Palavras do chinês, onde a Mongólia usa palavras do russo.'],
    examples: [['ᠮᠣᠩᠭᠣᠯ', 'mongol, na escrita tradicional']],
    estudarMais: { curso: 'mvf' },
  },
  {
    id: 'mn-buriato',
    name: 'Buriato',
    kind: 'língua',
    region: 'A Buriácia (Rússia), o norte da Mongólia e a Mongólia Interior',
    country: 'RUS',
    emoji: '🌊',
    summary: 'A língua dos buriatos, em volta do lago Baikal, parente próxima do mongol, com escrita cirílica própria.',
    features: ['O “s” do mongol vira “h”: “sain” soa “hain”.', 'Escrita cirílica própria, com “һ” e “ү”.'],
    examples: [['һайн', 'bom', 'em mongol, “сайн”']],
    estudarMais: { curso: 'bxr' },
  },
];
