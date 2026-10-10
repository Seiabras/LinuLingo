import type { Accent } from '../types';

/**
 * Os falares do uigur (10/10/2026). Fontes: Wikipédia em português, inglês e uigur («Uyghur language»,
 * «Uyghur alphabets», consultadas em 10/10/2026). O uigur do Cazaquistão (em cirílico) entra como
 * sotaque; se vira dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_UG: Accent[] = [
  {
    id: 'ug-central',
    name: 'Central (Ürümqi, Ili)',
    kind: 'sotaque',
    region: 'Ürümqi, Turpan e o vale do Ili, no norte de Xinjiang',
    country: 'CHN',
    subdivisions: ['CN-XJ'],
    emoji: '🍇',
    summary: 'O uigur do centro e do norte de Xinjiang, a base do padrão escrito em alfabeto árabe.',
    features: ['A base do padrão.', 'Escrito em alfabeto árabe com todas as vogais marcadas.'],
    examples: [['ياخشىمۇسىز؟', 'Como vai?']],
  },
  {
    id: 'ug-kashgar',
    name: 'Kashgar (sul)',
    kind: 'sotaque',
    region: 'Kashgar e os oásis do sul de Xinjiang',
    country: 'CHN',
    subdivisions: ['CN-XJ'],
    emoji: '🕌',
    summary: 'O uigur de Kashgar, a antiga cidade da Rota da Seda, com melodia e vogais próprias.',
    features: ['Melodia própria, reconhecível no resto da região.', 'Kashgar é um dos centros da cultura uigur.'],
    examples: [['قەشقەر', 'Kashgar']],
  },
  {
    id: 'ug-hotan',
    name: 'Hotan (sul)',
    kind: 'sotaque',
    region: 'Hotan e o sul do deserto de Taklamakan',
    country: 'CHN',
    subdivisions: ['CN-XJ'],
    emoji: '💎',
    summary: 'O uigur de Hotan, terra do jade, um dos falares mais diferentes do padrão.',
    features: ['Vogais e palavras próprias.', 'Hotan é famosa pelo jade e pelos tapetes.'],
    examples: [['خوتەن', 'Hotan']],
  },
  {
    id: 'ug-cazaquistao',
    name: 'Cazaquistão (cirílico)',
    kind: 'sotaque',
    region: 'Almaty e o sudeste do Cazaquistão',
    country: 'KAZ',
    emoji: '🇰🇿',
    summary: 'O uigur do Cazaquistão, escrito em alfabeto cirílico, com palavras do russo e do cazaque.',
    features: ['Escrito em cirílico.', 'Palavras do russo e do cazaque.'],
    examples: [['Яхшимусиз?', 'Como vai?']],
  },
];
