import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no piemontês). */
export const COMMUNITY_PMS: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tò nòm, toa sità e toa famija.',
    content: 'Cerea! Mi me ciamo Bruno e i son ëd Curitiba. I l’hai un fratello.',
    reference: 'Cerea! I l’hai nòm Bruno e i son ëd Curitiba. I l’hai un frel.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Còsa mange-to la matin?',
    content: 'Mi mangio pan e formaggio.',
    reference: 'I mangio pan e formagg.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Coma a l’é toa ca?',
    content: 'Mia ca a l’é cit.',
    reference: 'Mia ca a l’é cita.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_PMS: ScenarioSeed[] = [
  {
    id: 'pms-s1',
    title: 'Un cafè a Turin',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, n’amisa dël cors ëd piemontèis',
    description: 'Ana convida você para um café no centro histórico de Turim. É uma conversa entre amigos: use “ti”.',
    turns: [
      {
        bot: 'Cerea! Còsa veule-to beive?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafè', 'eva', 'làit'],
        suggestions: ['Un cafè, për piasì.', 'N’eva, për piasì.'],
      },
      {
        bot: 'Da andova ses-to?',
        botTranslation: 'De onde você é?',
        keywords: ['i son ëd'],
        suggestions: ['I son ëd San Pàul.', 'I son ëd Salvador.'],
      },
    ],
  },
];

/** Palavras do piemontês com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_PMS: EtymologySeed[] = [
  {
    word: 'eva',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['fr', 'eau'], ['es', 'agua']),
    evolution_note: 'Do latim “aqua”, com o “-qu-” quase sumindo, de um jeito parecido com o francês “eau” — o piemontês ficou só com a vogal.',
    transparent: true,
  },
  {
    word: 'pan',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['it', 'pane'], ['fr', 'pain'], ['es', 'pan']),
    evolution_note: 'Do latim “panis”, com a vogal final átona caindo por completo — traço comum nas línguas galo-itálicas e galo-românicas, diferente do italiano, que guardou o “-e”.',
    transparent: true,
  },
  {
    word: 'formagg',
    root_word: 'formaticum',
    origin_language: 'Latim tardio',
    cognates: c(['pt', 'queijo (via outra rota)'], ['it', 'formaggio'], ['fr', 'fromage'], ['ca', 'formatge']),
    evolution_note: 'Do latim tardio “formaticum” (algo moldado em forma), a mesma raiz do italiano “formaggio” e do francês “fromage”; o português e o espanhol preferiram outra palavra, derivada do latim “caseus”.',
    transparent: false,
  },
  {
    word: 'frel',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['ro', 'frate']),
    evolution_note: 'O piemontês guardou o latim “frater” para “irmão”, como o francês e o romeno; o português e o espanhol preferiram “germanus” e deixaram “frater” só em palavras como “frade” e “fraterno”.',
    transparent: false,
  },
  {
    word: 'ca',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['fr', 'chez']),
    evolution_note: 'Do latim “casa”, com a palavra encurtada a uma sílaba só — um traço comum das línguas galo-itálicas, que tendem a perder as vogais finais átonas e até sílabas inteiras.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_PMS: [string, string][] = [
  ['Coma a va ancheuj?', 'Como vai hoje?'],
  ['Conta-mi ëd toa famija.', 'Conte da sua família.'],
  ['Còsa ëd mangé e ëd beive ti pias-to?', 'O que você gosta de comer e de beber?'],
  ['Coma a l’é toa ca?', 'Como é a sua casa?'],
];

export const SHADOWING_PMS: [string, string][] = [
  ['Cerea! Mi i son Ana.', 'Oi! Eu sou a Ana.'],
  ['Bin, mersi! E ti?', 'Bem, obrigado! E você?'],
  ['I l’hai un frel e na seur.', 'Tenho um irmão e uma irmã.'],
  ['I sai nen.', 'Eu não sei.'],
];
