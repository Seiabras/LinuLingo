import type { Accent } from '../types';
import { noDialeto } from '../dialeto-de-sotaque';

/**
 * Os falares do iorubá (10/10/2026). Fontes: Wikipédia em português, inglês e iorubá («Yoruba
 * language», «Yoruba dialects», consultadas em 10/10/2026). O padrão parte do falar de Oyo e Ibadan. O
 * iorubá do Benim entra como sotaque; se vira dialeto, e se o iorubá do candomblé e o lucumí entram,
 * são dúvidas para o dono (docs/duvidas-variedades.md).
 */
const BASE_YO: Accent[] = [
  {
    id: 'yo-oyo',
    name: 'Oyo e Ibadan (padrão)',
    kind: 'sotaque',
    region: 'Oyo, Ibadan e o noroeste da terra iorubá',
    country: 'NGA',
    subdivisions: ['NG-OY'],
    emoji: '👑',
    summary: 'O iorubá de Oyo e Ibadan, a base do iorubá padrão desde a Bíblia de Samuel Ajayi Crowther, no século XIX.',
    features: ['A base do padrão.', 'Três tons: alto, médio e baixo.'],
    examples: [['Ẹ káàárọ̀!', 'Bom dia!']],
  },
  {
    id: 'yo-ijebu',
    name: 'Ijebu',
    kind: 'sotaque',
    region: 'Ijebu-Ode e o estado de Ogun',
    country: 'NGA',
    subdivisions: ['NG-OG'],
    emoji: '🛍️',
    summary: 'O iorubá de Ijebu, terra de comerciantes, com vogais e palavras próprias.',
    features: ['Vogais e palavras próprias.', 'Os ijebu são conhecidos como comerciantes.'],
    examples: [['Ìjẹ̀bú', 'Ijebu']],
  },
  {
    id: 'yo-ekiti',
    name: 'Ekiti',
    kind: 'sotaque',
    region: 'O estado de Ekiti',
    country: 'NGA',
    subdivisions: ['NG-EK'],
    emoji: '⛰️',
    summary: 'O iorubá de Ekiti, das colinas do leste, um dos falares mais diferentes do padrão.',
    features: ['Um dos falares mais diferentes do padrão.', 'Palavras próprias que o resto da terra iorubá não usa.'],
    examples: [['Èkìtì', 'Ekiti']],
  },
  {
    id: 'yo-ife',
    name: 'Ife',
    kind: 'sotaque',
    region: 'Ilé-Ifẹ̀, no estado de Osun',
    country: 'NGA',
    subdivisions: ['NG-OS'],
    emoji: '🗿',
    summary: 'O iorubá de Ilé-Ifẹ̀, a cidade sagrada onde, segundo a tradição, o mundo foi criado, terra das cabeças de bronze de Ife.',
    features: ['Formas próprias do centro da terra iorubá.', 'As cabeças de bronze de Ife são do século XII ao XV.'],
    examples: [['Ilé-Ifẹ̀', 'Ife']],
  },
  {
    id: 'yo-ondo',
    name: 'Ondo',
    kind: 'sotaque',
    region: 'O estado de Ondo',
    country: 'NGA',
    subdivisions: ['NG-ON'],
    emoji: '🌿',
    summary: 'O iorubá de Ondo, no sudeste, com vogais e formas próprias do iorubá do leste.',
    features: ['Vogais e formas próprias do leste.', 'Diferente do falar de Oyo em palavras do dia a dia.'],
    examples: [['Ondó', 'Ondo']],
  },
  {
    id: 'yo-benim',
    name: 'Benim (nagô, ketu)',
    kind: 'sotaque',
    region: 'O sudeste do Benim: Kétou, Savè, Porto-Novo',
    country: 'BEN',
    subdivisions: ['BJ-PL', 'BJ-OU', 'BJ-CO'],
    emoji: '🇧🇯',
    summary: 'O iorubá do Benim, dos nagô e dos ketu, com palavras do francês e do fon. Foi de Ketu que veio boa parte dos iorubás levados para a Bahia.',
    features: ['Palavras do francês e do fon.', 'O nome “nagô”, usado no Brasil, vem daqui.'],
    examples: [['Kétu', 'Ketu']],
  },
  {
    id: 'yo-candomble',
    name: 'Iorubá do candomblé (nagô)',
    kind: 'língua',
    region: 'Os terreiros de candomblé da Bahia e de todo o Brasil',
    country: 'BRA',
    subdivisions: ['BR-BA', 'BR-RJ', 'BR-SP'],
    emoji: '🥁',
    summary: 'A língua das rezas e cantigas do candomblé de nação ketu (nagô), guardada nos terreiros desde o século XIX, com palavras que o português do Brasil também recebeu, como “axé” e “orixá”.',
    features: ['Uma língua de reza e de canto, aprendida no terreiro.', 'Palavras que passaram para o português: “axé”, “orixá”, “ialorixá”.'],
    examples: [['àṣẹ', 'axé, a força vital']],
  },
  {
    id: 'yo-lucumi',
    name: 'Lucumí (Cuba)',
    kind: 'língua',
    region: 'A Regla de Ocha (santeria), em Cuba e na diáspora cubana',
    country: 'CUB',
    emoji: '🇨🇺',
    summary: 'A língua litúrgica da santeria cubana, vinda do iorubá dos escravizados levados para Cuba, usada nas rezas e nos cantos aos orixás.',
    features: ['Uma língua de reza, sem falantes do dia a dia.', 'Escrita com a grafia do espanhol: “aché”, “orisha”.'],
    examples: [['aché', 'axé, a força vital']],
  },
];

// os dialetos (decisão do dono, 10/10/2026): cada sotaque fica dentro do seu dialeto
export const ACCENTS_YO: Accent[] = noDialeto(BASE_YO, 'yo-NG', { iguais: {'yo-benim': 'yo-BJ'} });
