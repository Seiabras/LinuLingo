import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de brasileiros no gaélico escocês):
 * usar “tha” para apresentar o nome (em vez de “is”), pôr o pronome antes do verbo (ordem SVO em
 * vez de VSO) e esquecer a lenição depois de “mo”.
 */
export const COMMUNITY_GD: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: "Dè an t-ainm a th' ort agus cò às a tha thu?",
    content: 'Tha mi Bruno agus tha mi à Curitiba.',
    reference: 'Is mise Bruno agus tha mi à Curitiba.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Dè tha thu ag iarraidh?',
    content: 'Mi tha ag iarraidh cofaidh.',
    reference: 'Tha mi ag iarraidh cofaidh.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Tha gaol agam air mo mhàthair. Agus thusa?',
    content: 'Tha gaol agam air mo màthair.',
    reference: 'Tha gaol agam air mo mhàthair.',
  },
];

/** Cenário de conversa. */
export const SCENARIOS_GD: ScenarioSeed[] = [
  {
    id: 'gd-s1',
    title: 'Cofaidh ann an Dùn Èideann',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Mòrag, caraid',
    description: 'Mòrag convida você para um café no centro de Edimburgo. É uma conversa entre amigos: use “thu”.',
    turns: [
      {
        bot: 'Dè tha thu ag iarraidh?',
        botTranslation: 'O que você quer?',
        keywords: ['cofaidh', 'uisge'],
        suggestions: ['Cofaidh, mas e do thoil e.', 'Uisge, mas e do thoil e.'],
      },
      {
        bot: 'Cò às a tha thu?',
        botTranslation: 'De onde você é?',
        keywords: ['tha mi à'],
        suggestions: ['Tha mi à São Paulo.', 'Tha mi à Salvador.'],
      },
    ],
  },
];

/**
 * Palavras do gaélico escocês com a raiz protoindo-europeia (via proto-celta e irlandês antigo) e
 * os parentes nas línguas irmãs e no português. Fontes: Wiktionary, seção de etimologia de cada
 * verbete (en.wiktionary.org/wiki/<palavra>#Scottish_Gaelic).
 */
export const ETYMOLOGY_GD: EtymologySeed[] = [
  {
    word: 'màthair',
    root_word: '*méh₂tēr',
    origin_language: 'Protoindo-europeu',
    cognates: c(['ga', 'máthair'], ['gv', 'moir'], ['pt', 'mãe'], ['en', 'mother']),
    evolution_note: 'Vem do protoindo-europeu “méh₂tēr”, pelo proto-celta “mātīr” e o irlandês antigo “máthir”. É a mesma raiz do latim “mater”, que deu “mãe” em português e “mother” em inglês — por isso o “m” inicial continua reconhecível depois de milênios.',
    transparent: true,
  },
  {
    word: 'athair',
    root_word: '*ph₂tḗr',
    origin_language: 'Protoindo-europeu',
    cognates: c(['ga', 'athair'], ['gv', 'ayr'], ['la', 'pater'], ['pt', 'pai']),
    evolution_note: 'Vem do protoindo-europeu “ph₂tḗr” (pai), a mesma raiz do latim “pater” e do português “pai” — mas o proto-celta perdeu o “p” inicial do indo-europeu, um som que as línguas célticas simplesmente deixaram cair. Por isso “athair” não guardou nenhum “p” ou “f” para lembrar o parentesco.',
    transparent: false,
  },
  {
    word: 'trì',
    root_word: '*tréyes',
    origin_language: 'Protoindo-europeu',
    cognates: c(['ga', 'trí'], ['la', 'tres'], ['pt', 'três'], ['en', 'three']),
    evolution_note: 'Vem do protoindo-europeu “tréyes”, a mesma raiz do latim “tres” e do português “três” — um dos poucos casos em que o gaélico soa parecido com uma palavra portuguesa, mesmo as duas línguas não sendo parentes próximas.',
    transparent: true,
  },
  {
    word: 'cù',
    root_word: '*ḱwṓ',
    origin_language: 'Protoindo-europeu',
    cognates: c(['ga', 'cú'], ['gv', 'coo'], ['pt', 'cão'], ['en', 'hound']),
    evolution_note: 'O irlandês antigo “cú” vem da mesma raiz indo-europeia “ḱwṓ” que deu o latim “canis” (e o português “cão”) e o inglês “hound”. As formas mudaram tanto ao longo de milênios que “cù” e “cão” não parecem parentes, mas são.',
    transparent: false,
  },
  {
    word: 'uisge',
    root_word: '*wódr̥',
    origin_language: 'Protoindo-europeu',
    cognates: c(['ga', 'uisce'], ['gv', 'ushtey'], ['en', 'water']),
    evolution_note: 'Vem do protoindo-europeu “wódr̥” (água), a mesma raiz do inglês “water” — mas não do português “água”, que vem do latim “aqua”, de uma raiz indo-europeia diferente. O composto “uisge-beatha” (água da vida) foi emprestado pelo inglês e virou “whisky”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_GD: [string, string][] = [
  ['Ciamar a tha thu?', 'Como você está?'],
  ['Cò às a tha thu?', 'De onde você é?'],
  ['A bheil teaghlach agad?', 'Você tem família?'],
  ['Dè tha agad: cofaidh no uisge?', 'O que você tem: café ou água?'],
];

export const SHADOWING_GD: [string, string][] = [
  ['Halò! Is mise Ana.', 'Oi! Eu sou a Ana.'],
  ['Tha mi gu math, tapadh leat!', 'Eu vou bem, obrigado!'],
  ['Chan eil fios agam.', 'Eu não sei.'],
  ['Tha cù agam.', 'Eu tenho um cachorro.'],
];
