import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no cassubiano). */
export const COMMUNITY_CSB: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Jak sã nazéwôsz ë skądka jes?',
    content: 'Witôj! Jô sã chamam Bruno ë jem z Curitiba.',
    reference: 'Witôj! Jô sã nazéwóm Bruno ë jem z Kuritibë.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Môsz brata czë sostrã?',
    content: 'Jo, jô jem un brat.',
    reference: 'Jo, jô móm brata.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Jakô je twòja chëcz?',
    content: 'Mòja chëcz je môłi.',
    reference: 'Mòja chëcz je môłô.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_CSB: ScenarioSeed[] = [
  {
    id: 'csb-s1',
    title: 'Kawa w Gduńskù',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, drëszka z kùrsu kaszëbsczégò',
    description: 'Anna convida você para um café no centro histórico de Gdańsk. É uma conversa entre amigos: use “të”.',
    turns: [
      {
        bot: 'Witôj! Co chcesz pic?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kawa', 'wòda', 'mlékò'],
        suggestions: ['Jednã kawã, proszã.', 'Jednã wòdã, proszã.'],
      },
      {
        bot: 'Skądka jes?',
        botTranslation: 'De onde você é?',
        keywords: ['jô jem z'],
        suggestions: ['Jô jem z São Paulo.', 'Jô jem z Salvador.'],
      },
    ],
  },
];

/** Palavras do cassubiano com cognatos eslavos (sobretudo poloneses). */
export const ETYMOLOGY_CSB: EtymologySeed[] = [
  {
    word: 'wòda',
    root_word: 'voda',
    origin_language: 'Proto-eslavo',
    cognates: c(['pl', 'woda'], ['ru', 'вода (vodá)'], ['pt', 'água']),
    evolution_note: 'Do protoeslavo “voda”, a mesma raiz do russo “вода” (de onde vem “vodca”, literalmente “aguinha”). O português “água” vem do latim, de uma raiz indo-europeia diferente, então não é cognato direto.',
    transparent: false,
  },
  {
    word: 'chléb',
    root_word: 'xlěbъ',
    origin_language: 'Proto-eslavo',
    cognates: c(['pl', 'chleb'], ['ru', 'хлеб (khleb)'], ['de', 'Laib']),
    evolution_note: 'O protoeslavo “xlěbъ” pode ter sido emprestado de uma língua germânica antiga, parente do alemão “Laib” (um pão, uma forma de pão) — por isso o cassubiano e o alemão ficaram parecidos nessa palavra, mesmo vindo de famílias diferentes.',
    transparent: true,
  },
  {
    word: 'brat',
    root_word: 'bràtrъ',
    origin_language: 'Proto-eslavo',
    cognates: c(['pl', 'brat'], ['ru', 'брат (brat)'], ['pt', 'frade, fraterno'], ['ro', 'frate']),
    evolution_note: 'Do protoeslavo “bràtrъ”, da mesma raiz indo-europeia que o latim “frater” — o português preferiu “irmão” (de germanus) no dia a dia e deixou “frater” só em palavras como “frade” e “fraterno”.',
    transparent: false,
  },
  {
    word: 'bëc',
    root_word: 'byti',
    origin_language: 'Proto-eslavo',
    cognates: c(['pl', 'być'], ['ru', 'быть (byt\')'], ['pt', 'ser']),
    evolution_note: 'Do protoeslavo “byti” (ser, existir), da mesma raiz indo-europeia do latim “fui” e do inglês “be”. O polonês “być” e o cassubiano “bëc” são praticamente a mesma palavra, só com a grafia própria do cassubiano.',
    transparent: false,
  },
  {
    word: 'mac',
    root_word: 'màti',
    origin_language: 'Proto-eslavo',
    cognates: c(['pl', 'matka'], ['ru', 'мать (mat\')'], ['pt', 'mãe, matriz']),
    evolution_note: 'Do protoeslavo “màti”, da mesma raiz indo-europeia do latim “mater” — a mesma família de palavras que deu “mãe” e “matriz” em português.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_CSB: [string, string][] = [
  ['Jak sã môsz dzysô?', 'Como você está hoje?'],
  ['Gôdôj ò swòjã familëją.', 'Fale sobre a sua família.'],
  ['Co lubisz jesc ë pic?', 'O que você gosta de comer e de beber?'],
  ['Jakô je twòja chëcz?', 'Como é a sua casa?'],
];

export const SHADOWING_CSB: [string, string][] = [
  ['Witôj! Jô sã nazéwóm Ana.', 'Oi! Eu me chamo Ana.'],
  ['Dobrze, dzãkùjã! A të?', 'Bem, obrigado! E você?'],
  ['Jô móm brata ë sostrã.', 'Tenho um irmão e uma irmã.'],
  ['Jô nié wiém.', 'Eu não sei.'],
];
