import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do uzbeque (10/10/2026). Fontes: Wikipédia em português, inglês e uzbeque («Uzbek language»,
 * «Uzbek dialects», «Southern Uzbek», consultadas em 10/10/2026). O padrão segue a fala de Tashkent e do
 * vale de Fergana. O uzbeque do Afeganistão entra como sotaque; se vira dialeto é dúvida para o dono
 * (docs/duvidas-variedades.md).
 */
const BASE_UZ: Accent[] = [
  {
    id: 'uz-tashkent',
    name: 'Tashkent (padrão)',
    kind: 'sotaque',
    region: 'Tashkent, a capital',
    country: 'UZB',
    subdivisions: ['UZ-TK', 'UZ-TO'],
    emoji: '🏙️',
    summary: 'O uzbeque de Tashkent, a base do padrão, com muitas palavras do russo na fala da cidade.',
    features: ['A base do padrão.', 'Sem a harmonia vocálica das outras línguas turcomanas.'],
    examples: [['Salom!', 'Olá!']],
  },
  {
    id: 'uz-fergana',
    name: 'Vale de Fergana',
    kind: 'sotaque',
    region: 'O vale de Fergana: Fergana, Andijan, Namangan',
    country: 'UZB',
    subdivisions: ['UZ-FA', 'UZ-AN', 'UZ-NG'],
    emoji: '🍈',
    summary: 'O uzbeque do vale de Fergana, a região mais povoada do país, que também é base do padrão.',
    features: ['Uma das bases do padrão.', 'A região mais povoada da Ásia Central.'],
    examples: [['Fargʻona', 'Fergana']],
  },
  {
    id: 'uz-samarcanda',
    name: 'Samarcanda e Bukhara',
    kind: 'sotaque',
    region: 'Samarcanda e Bukhara, as cidades da Rota da Seda',
    country: 'UZB',
    subdivisions: ['UZ-SA', 'UZ-BU'],
    emoji: '🕌',
    summary: 'O uzbeque de Samarcanda e Bukhara, cidades onde também se fala tadjique, com muitas palavras do persa.',
    features: ['Muitas palavras do persa e do tadjique.', 'Muita gente é bilíngue em uzbeque e tadjique.'],
    examples: [['Samarqand', 'Samarcanda']],
  },
  {
    id: 'uz-khorezm',
    name: 'Khorezm',
    kind: 'sotaque',
    region: 'Khorezm (Urgench, Khiva), no oeste',
    country: 'UZB',
    subdivisions: ['UZ-XO'],
    emoji: '🏰',
    summary: 'O uzbeque de Khorezm, do grupo oghuz, mais próximo do turcomeno e do turco que do uzbeque padrão.',
    features: ['Do grupo oghuz, próximo do turcomeno.', 'Khiva, a cidade murada, fica aqui.'],
    examples: [['Xorazm', 'Khorezm']],
  },
  {
    id: 'uz-afeganistao',
    name: 'Afeganistão',
    kind: 'sotaque',
    region: 'O norte do Afeganistão: Mazar-i-Sharif, Faryab, Jowzjan',
    country: 'AFG',
    subdivisions: ['AF-BAL', 'AF-FYB', 'AF-JOW'],
    emoji: '🇦🇫',
    summary: 'O uzbeque do norte do Afeganistão, escrito em alfabeto árabe, com palavras do persa, e língua oficial nas regiões onde é maioria.',
    features: ['Escrito em alfabeto árabe.', 'Muitas palavras do persa (dari).'],
    examples: [['Mozori Sharif', 'Mazar-i-Sharif']],
  },
];

// os dialetos (decisão do dono, 10/10/2026)
export const ACCENTS_UZ: Accent[] = noDialeto(BASE_UZ, 'uz-UZ', { iguais: { 'uz-afeganistao': 'uz-AF' } });
