import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no africâner). */
export const COMMUNITY_AF: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Wat is jou naam, waar kom jy vandaan en het jy broers of susters?',
    content: 'Hallo! My naam is Bruno en ek kom van Curitiba af. Ek het een broer.',
    reference: "Hallo! My naam is Bruno en ek kom van Curitiba af. Ek het 'n broer.",
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Wat eet jy vir ontbyt?',
    content: 'Ek eet brood met kaas en ek drinks koffie.',
    reference: 'Ek eet brood met kaas en ek drink koffie.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Hoe is jou huis?',
    content: "My huis is klein. Ek het nie 'n kat.",
    reference: "My huis is klein. Ek het nie 'n kat nie.",
  },
];

/** Cenários de conversa. */
export const SCENARIOS_AF: ScenarioSeed[] = [
  {
    id: 'af-s1',
    title: "'n Koppie koffie in Kaapstad",
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, jou klasmaat van die Afrikaanse kursus',
    description: 'Anna, colega do curso de africâner, convida você para um café no centro da Cidade do Cabo. É uma conversa entre colegas: use “jy”.',
    turns: [
      {
        bot: 'Hallo! Wat wil jy drink?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['koffie', 'water', 'melk'],
        suggestions: ["'n Koppie koffie, asseblief.", "'n Glas water, asseblief."],
      },
      {
        bot: 'Waar kom jy vandaan?',
        botTranslation: 'De onde você é?',
        keywords: ['ek kom van'],
        suggestions: ['Ek kom van São Paulo af.', 'Ek kom van Salvador af.'],
      },
    ],
  },
];

/** Palavras do africâner com a origem e os parentes nas línguas irmãs. */
export const ETYMOLOGY_AF: EtymologySeed[] = [
  {
    word: 'mielie',
    root_word: 'milho',
    origin_language: 'Português',
    cognates: c(['pt', 'milho'], ['en', 'mealie (no inglês sul-africano)']),
    evolution_note: 'O milho americano chegou à África pelos portugueses, e o nome veio junto: “milho” virou “mielie” no africâner e “mealie” no inglês da África do Sul.',
    transparent: true,
  },
  {
    word: 'water',
    root_word: '*watōr',
    origin_language: 'Protogermânico',
    cognates: c(['nl', 'water'], ['en', 'water'], ['de', 'Wasser']),
    evolution_note: 'Herdada do neerlandês, que por sua vez a herdou do germânico comum; é a mesma palavra do inglês “water”.',
    transparent: false,
  },
  {
    word: 'huis',
    root_word: 'huis',
    origin_language: 'Neerlandês',
    cognates: c(['nl', 'huis'], ['de', 'Haus'], ['en', 'house']),
    evolution_note: 'Veio sem mudança do neerlandês falado pelos colonos do século XVII, que a herdou do germânico “*hūsą”.',
    transparent: false,
  },
  {
    word: 'kaas',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['pt', 'queijo'], ['nl', 'kaas'], ['de', 'Käse']),
    evolution_note: 'Os povos germânicos tomaram emprestada a palavra latina “caseus” (queijo) ainda na Antiguidade; ela chegou ao africâner pelo neerlandês. O mesmo “caseus” deu “queijo” em português.',
    transparent: false,
  },
  {
    word: 'wyn',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['nl', 'wijn'], ['de', 'Wein']),
    evolution_note: 'Do latim “vinum”, pelo neerlandês “wijn”. O africâner simplificou a grafia: o “ij” neerlandês virou “y”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_AF: [string, string][] = [
  ['Hoe gaan dit vandag?', 'Como vai hoje?'],
  ['Vertel van jou familie.', 'Conte da sua família.'],
  ['Wat eet en drink jy graag?', 'O que você gosta de comer e de beber?'],
  ['Hoe lyk jou huis?', 'Como é a sua casa?'],
];

export const SHADOWING_AF: [string, string][] = [
  ['Hallo! My naam is Ana.', 'Oi! O meu nome é Ana.'],
  ['Goed, dankie! En met jou?', 'Bem, obrigado! E você?'],
  ["Ek het 'n broer en 'n suster.", 'Tenho um irmão e uma irmã.'],
  ['Ek weet nie.', 'Eu não sei.'],
];
