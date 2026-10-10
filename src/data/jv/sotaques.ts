import type { Accent } from '../types';

/**
 * Os falares do javanês (10/10/2026). Fontes: Wikipédia em português, inglês e javanês («Javanese
 * dialects», «Banyumasan dialect», «Surinamese Javanese», consultadas em 10/10/2026). O javanês do
 * Suriname entra como sotaque; se vira dialeto é dúvida para o dono (docs/duvidas-variedades.md).
 */
export const ACCENTS_JV: Accent[] = [
  {
    id: 'jv-solo',
    name: 'Yogyakarta e Solo (padrão)',
    kind: 'sotaque',
    region: 'Yogyakarta e Surakarta (Solo), em Java Central',
    country: 'IDN',
    subdivisions: ['ID-YO', 'ID-JT'],
    emoji: '👑',
    summary: 'O javanês das cortes de Yogyakarta e Solo, a base do padrão, com os níveis de cortesia (ngoko e krama) mais cuidados.',
    features: ['Os níveis de cortesia: ngoko (íntimo) e krama (respeitoso).', 'O “a” do fim da palavra soa “o”: “apa” soa “opo”.'],
    examples: [['Sugeng enjing!', 'Bom dia! (krama)']],
  },
  {
    id: 'jv-banyumas',
    name: 'Banyumasan (ngapak)',
    kind: 'sotaque',
    region: 'Banyumas e o oeste de Java Central',
    country: 'IDN',
    subdivisions: ['ID-JT'],
    emoji: '🗣️',
    summary: 'O javanês de Banyumas, o “ngapak”, que mantém o “a” no fim das palavras, onde Solo diz “o”: “apa” (o quê), e não “opo”.',
    features: ['O “a” final continua “a”: “apa”, onde Solo diz “opo”.', 'Consoantes finais bem fortes.'],
    examples: [['apa', 'o quê', 'em Solo, “opo”']],
  },
  {
    id: 'jv-oriental',
    name: 'Java Oriental (Surabaya)',
    kind: 'sotaque',
    region: 'Surabaya, Malang e o leste de Java',
    country: 'IDN',
    subdivisions: ['ID-JI'],
    emoji: '🦈',
    summary: 'O javanês do leste, de Surabaya, mais direto e com menos krama, o “arek”.',
    features: ['Usa menos os níveis de cortesia.', '“Arek” para “criança, gente”.'],
    examples: [['arek', 'criança, gente']],
  },
  {
    id: 'jv-suriname',
    name: 'Javanês do Suriname',
    kind: 'sotaque',
    region: 'O Suriname, na América do Sul',
    country: 'SUR',
    subdivisions: ['SR-CM', 'SR-WA', 'SR-PM'],
    emoji: '🇸🇷',
    summary: 'O javanês dos descendentes dos trabalhadores levados para o Suriname a partir de 1890, com palavras do neerlandês e do sranan e escrito com a grafia neerlandesa.',
    features: ['Palavras do neerlandês e do sranan.', 'Escrito com a grafia neerlandesa: “oe” para o som de “u”.'],
    examples: [['Jawa Suriname', 'os javaneses do Suriname']],
  },
];
