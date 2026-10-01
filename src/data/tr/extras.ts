import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no turco). */
export const COMMUNITY_TR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Adın ne? Nerelisin?',
    content: "Merhaba! Benim ad Bruno. Ben Curitiba'lıyım.",
    reference: "Merhaba! Benim adım Bruno. Ben Curitiba'lıyım.",
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kahvaltıda ne yiyorsun?',
    content: 'Ben ekmek yemek.',
    reference: 'Ekmek yiyorum.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Evin nasıl?',
    content: 'Benim ev küçük.',
    reference: 'Evim küçük.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_TR: ScenarioSeed[] = [
  {
    id: 'tr-s1',
    title: 'Bir kafede',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Elif, uma colega do curso de turco',
    description: 'Elif chama você para um café em Istambul. É uma conversa entre colegas: use “sen”.',
    turns: [
      {
        bot: 'Merhaba! Ne içmek istersin?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['çay', 'kahve', 'su'],
        suggestions: ['Bir çay, lütfen.', 'Bir kahve, lütfen.'],
      },
      {
        bot: 'Nerelisin?',
        botTranslation: 'De onde você é?',
        keywords: ['luyum', 'lıyım', 'liyim', 'lüyüm'],
        suggestions: ["São Paulo'luyum.", "Recife'liyim."],
      },
    ],
  },
];

/** Palavras do turco que vieram de outras línguas, ou que foram parar em outras. */
export const ETYMOLOGY_TR: EtymologySeed[] = [
  {
    word: 'kahve',
    root_word: 'qahwa',
    origin_language: 'Árabe',
    cognates: c(['pt', 'café'], ['it', 'caffè'], ['fr', 'café']),
    evolution_note: 'O árabe “qahwa” virou “kahve” em turco, e do turco a palavra passou ao italiano “caffè”, de onde se espalhou pela Europa e chegou ao português “café”.',
    transparent: false,
  },
  {
    word: 'şarap',
    root_word: 'sharāb',
    origin_language: 'Árabe',
    cognates: c(['pt', 'xarope'], ['es', 'jarabe']),
    evolution_note: 'O árabe “sharāb” (bebida) deu “şarap” (vinho) em turco. A mesma palavra árabe chegou ao português como “xarope”.',
    transparent: false,
  },
  {
    word: 'merhaba',
    root_word: 'marḥaban',
    origin_language: 'Árabe',
    cognates: c(['ar', 'مرحبا (marḥaban)']),
    evolution_note: 'O cumprimento árabe “marḥaban” (bem-vindo) virou o “oi” de todo dia em turco.',
    transparent: false,
  },
  {
    word: 'şehir',
    root_word: 'shahr',
    origin_language: 'Persa',
    cognates: c(['hi', 'शहर (shahar)'], ['ur', 'شہر (shahr)']),
    evolution_note: 'Do persa “shahr” (cidade), que também passou ao híndi e ao urdu. O turco tem muitas palavras persas, da época em que o persa era a língua de cultura da corte otomana.',
    transparent: false,
  },
  {
    word: 'aile',
    root_word: 'ʿāʾila',
    origin_language: 'Árabe',
    cognates: c(['ar', 'عائلة (ʿāʾila)']),
    evolution_note: 'Do árabe “ʿāʾila” (família). Muitas palavras árabes entraram no turco pela religião, pelo comércio e pela escrita árabe, usada até 1928.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_TR: [string, string][] = [
  ['Bugün nasılsın?', 'Como você está hoje?'],
  ['Aileni anlat.', 'Fale da sua família.'],
  ['Ne yemeyi ve ne içmeyi seversin?', 'O que você gosta de comer e de beber?'],
  ['Evin nasıl?', 'Como é a sua casa?'],
];

export const SHADOWING_TR: [string, string][] = [
  ['Merhaba! Benim adım Ana.', 'Oi! Meu nome é Ana.'],
  ['İyiyim, teşekkürler! Ya sen?', 'Estou bem, obrigado! E você?'],
  ['Bir erkek kardeşim ve bir kız kardeşim var.', 'Tenho um irmão e uma irmã.'],
  ['Bilmiyorum.', 'Eu não sei.'],
];
