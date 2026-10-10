import type { Accent } from '../types';

/**
 * As formas vivas do manchu (10/10/2026). O curso ensina o manchu escrito da dinastia Qing. Fontes:
 * Wikipédia em português, inglês e chinês («Manchu language», «Xibe language», «Sanjiazi»,
 * consultadas em 10/10/2026). Se o xibe vira dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_MNC: Accent[] = [
  {
    id: 'mnc-sanjiazi',
    name: 'Sanjiazi (Heilongjiang)',
    kind: 'sotaque',
    region: 'A vila de Sanjiazi, perto de Qiqihar, em Heilongjiang',
    country: 'CHN',
    subdivisions: ['CN-HL'],
    emoji: '🏘️',
    summary: 'O manchu falado de Sanjiazi, uma das últimas vilas onde ainda havia falantes nativos, todos muito idosos.',
    features: ['Uma das últimas comunidades com falantes nativos.', 'Muito diferente do manchu escrito da corte Qing.'],
    examples: [['ᠮᠠᠨᠵᡠ', 'manchu']],
  },
  {
    id: 'mnc-xibe',
    name: 'Xibe (Xinjiang)',
    kind: 'sotaque',
    region: 'O condado de Qapqal, em Xinjiang',
    country: 'CHN',
    subdivisions: ['CN-XJ'],
    emoji: '🏹',
    summary: 'A fala dos xibe, levados para Xinjiang como guarnição em 1764, a forma viva mais falada do manchu, com escrita própria a partir da manchu.',
    features: ['A forma viva do manchu com mais falantes.', 'Escrita própria, uma adaptação da escrita manchu.'],
    examples: [['ᠮᠠᠨᠵᡠ', 'manchu']],
  },
];
