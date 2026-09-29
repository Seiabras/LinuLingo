import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no friulano). */
export const COMMUNITY_FUR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Il to non, la tô citât e la tô famee.',
    content: 'Mandi! Jo mi clami Bruno e jo soi di Curitiba. O ai un fratel.',
    reference: 'Mandi! O mi clami Bruno e o soi di Curitiba. O ai un fradi.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ce ti plasial mangjâ?',
    content: 'O plasê il pan e il formaggio.',
    reference: 'Mi plasin il pan e il formadi.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Cemût ise la tô cjase?',
    content: 'La mê cjase è piçul.',
    reference: 'La mê cjase e je piçule.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_FUR: ScenarioSeed[] = [
  {
    id: 'fur-s1',
    title: 'Un cafè a Udin',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Marie, une compagne dal cors di furlan',
    description: 'Marie convida você para um café no centro de Udine. É uma conversa entre colegas: use «tu».',
    turns: [
      {
        bot: 'Mandi! Ce vuelistu bevi?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafè', 'aghe', 'lat'],
        suggestions: ['Un cafè, par plasê.', 'Un bicjer di aghe, par plasê.'],
      },
      {
        bot: 'Di dulà sêstu?',
        botTranslation: 'De onde você é?',
        keywords: ['o soi di'],
        suggestions: ['O soi di São Paulo.', 'O soi di Salvador.'],
      },
    ],
  },
];

/** Palavras do friulano com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_FUR: EtymologySeed[] = [
  {
    word: 'cjase',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['fr', 'chez']),
    evolution_note: 'O c latino diante de a ficou «molhado» (cj), como no romanche «chasa»: um traço comum das línguas reto-românicas.',
    transparent: true,
  },
  {
    word: 'formadi',
    root_word: 'formaticum',
    origin_language: 'Latim',
    cognates: c(['it', 'formaggio'], ['fr', 'fromage'], ['ca', 'formatge']),
    evolution_note: 'Do latim tardio «(caseus) formaticus», o queijo feito na fôrma. O português e o espanhol preferiram o outro nome latino, «caseus» (queijo, queso).',
    transparent: false,
  },
  {
    word: 'fradi',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['ro', 'frate']),
    evolution_note: 'O friulano guardou o latim «frater» para irmão; o português usa «germanus» (irmão) e deixou «frater» só em «frade» e «fraterno».',
    transparent: false,
  },
  {
    word: 'aghe',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['es', 'agua'], ['fr', 'eau']),
    evolution_note: 'Do latim «aqua»; o -a final dos femininos virou -e no friulano central (aghe, cjase, famee).',
    transparent: true,
  },
  {
    word: 'lat',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['it', 'latte'], ['fr', 'lait'], ['es', 'leche']),
    evolution_note: 'Do latim «lacte», que perdeu a vogal final, como o francês «lait»: o friulano corta muitas vogais finais que o italiano mantém.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_FUR: [string, string][] = [
  ['Cemût stâstu vuê?', 'Como você está hoje?'],
  ['Contimi de tô famee.', 'Me conte da sua família.'],
  ['Ce ti plasial mangjâ e bevi?', 'O que você gosta de comer e de beber?'],
  ['Cemût ise la tô cjase?', 'Como é a sua casa?'],
];

export const SHADOWING_FUR: [string, string][] = [
  ['Mandi! O mi clami Ane.', 'Oi! Eu me chamo Ana.'],
  ['Ben, graciis! E tu?', 'Bem, obrigado! E você?'],
  ['O ai un fradi e une sûr.', 'Tenho um irmão e uma irmã.'],
  ['Mi plâs une vore il formadi.', 'Eu gosto muito de queijo.'],
];
