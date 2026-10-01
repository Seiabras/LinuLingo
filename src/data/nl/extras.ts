import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no neerlandês). */
export const COMMUNITY_NL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Hoe heet je, waar kom je vandaan en heb je broers of zussen?',
    content: 'Hallo! Ik heet Bruno en ik kom van Curitiba. Ik heb een broer.',
    reference: 'Hallo! Ik heet Bruno en ik kom uit Curitiba. Ik heb een broer.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Wat eet je bij het ontbijt?',
    content: 'Ik eet brood met kaas en ik drinkt koffie.',
    reference: 'Ik eet brood met kaas en ik drink koffie.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Hoe is je huis?',
    content: 'Mijn huis is klein. Ik niet heb een kat.',
    reference: 'Mijn huis is klein. Ik heb geen kat.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_NL: ScenarioSeed[] = [
  {
    id: 'nl-s1',
    title: 'Koffie in Utrecht',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, een klasgenoot van de cursus Nederlands',
    description: 'Anna, colega do curso de neerlandês, convida você para um café perto dos canais de Utrecht. É uma conversa entre colegas: use “jij”.',
    turns: [
      {
        bot: 'Hoi! Wat wil je drinken?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['koffie', 'water', 'melk'],
        suggestions: ['Een koffie, alsjeblieft.', 'Een glas water, alsjeblieft.'],
      },
      {
        bot: 'Waar kom je vandaan?',
        botTranslation: 'De onde você é?',
        keywords: ['ik kom uit'],
        suggestions: ['Ik kom uit São Paulo.', 'Ik kom uit Salvador.'],
      },
    ],
  },
];

/** Palavras do neerlandês com a origem e os parentes nas línguas irmãs. */
export const ETYMOLOGY_NL: EtymologySeed[] = [
  {
    word: 'water',
    root_word: '*watōr',
    origin_language: 'Protogermânico',
    cognates: c(['en', 'water'], ['de', 'Wasser'], ['sv', 'vatten']),
    evolution_note: 'O neerlandês e o inglês guardaram o t germânico (“water”); o alemão o transformou em “ss” (“Wasser”). É um bom exemplo de como o neerlandês fica no meio do caminho entre os dois.',
    transparent: false,
  },
  {
    word: 'huis',
    root_word: '*hūsą',
    origin_language: 'Protogermânico',
    cognates: c(['en', 'house'], ['de', 'Haus'], ['sv', 'hus']),
    evolution_note: 'O u longo antigo virou o ditongo “ui” no neerlandês, “au” no alemão e “ou” no inglês: huis, Haus, house.',
    transparent: false,
  },
  {
    word: 'melk',
    root_word: '*meluks',
    origin_language: 'Protogermânico',
    cognates: c(['en', 'milk'], ['de', 'Milch'], ['sv', 'mjölk']),
    evolution_note: 'Palavra herdada do germânico comum. O português “leite” vem de outra raiz, o latim “lac, lactis”.',
    transparent: false,
  },
  {
    word: 'kaas',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['pt', 'queijo'], ['es', 'queso'], ['de', 'Käse'], ['en', 'cheese']),
    evolution_note: 'Os povos germânicos tomaram emprestada a palavra latina “caseus” (queijo) ainda na Antiguidade. O mesmo “caseus” deu “queijo” em português.',
    transparent: false,
  },
  {
    word: 'wijn',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['it', 'vino'], ['de', 'Wein'], ['en', 'wine']),
    evolution_note: 'O vinho chegou às terras germânicas com os romanos, e a palavra latina “vinum” veio junto; o i longo depois virou o ditongo escrito “ij”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_NL: [string, string][] = [
  ['Hoe gaat het vandaag?', 'Como vai hoje?'],
  ['Vertel over je familie.', 'Conte da sua família.'],
  ['Wat eet en drink je graag?', 'O que você gosta de comer e de beber?'],
  ['Hoe is je huis?', 'Como é a sua casa?'],
];

export const SHADOWING_NL: [string, string][] = [
  ['Hallo! Ik heet Ana.', 'Oi! Eu me chamo Ana.'],
  ['Goed, dank je! En met jou?', 'Bem, obrigado! E você?'],
  ['Ik heb een broer en een zus.', 'Tenho um irmão e uma irmã.'],
  ['Ik weet het niet.', 'Eu não sei.'],
];
