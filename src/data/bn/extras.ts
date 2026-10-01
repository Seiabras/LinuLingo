import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no bengali). */
export const COMMUNITY_BN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'তোমার নাম, শহর আর পরিবার বলো।',
    content: 'নমস্কার, আমি হয় ব্রুনো, আর আমি কুরিতিবা থেকে। আমার এক ভাই আছে।',
    reference: 'নমস্কার, আমার নাম ব্রুনো, আর আমি কুরিতিবা থেকে। আমার একটা ভাই আছে।',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'তুমি সকালে কী খাও?',
    content: 'আমি খাই রুটি আর পনির।',
    reference: 'আমি রুটি আর পনির খাই।',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'তোমার বাড়ি কেমন?',
    content: 'আমার বাড়ি ছোট আছে।',
    reference: 'আমার বাড়ি ছোট।',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_BN: ScenarioSeed[] = [
  {
    id: 'bn-s1',
    title: 'চায়ের দোকানে',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'মায়া, বাংলা ক্লাসের বন্ধু',
    description: 'মায়া convida você para tomar chá numa barraca de chá (চায়ের দোকান). É uma conversa entre amigos: use “তুমি”.',
    turns: [
      {
        bot: 'নমস্কার! তুমি কী চাও?',
        botTranslation: 'Oi! O que você quer?',
        keywords: ['চা', 'পানি', 'কফি'],
        suggestions: ['এক গ্লাস চা, দয়া করে।', 'এক গ্লাস পানি, দয়া করে।'],
      },
      {
        bot: 'তুমি কোথা থেকে?',
        botTranslation: 'De onde você é?',
        keywords: ['আমি … থেকে'],
        suggestions: ['আমি সাও পাওলো থেকে।', 'আমি সালভাদর থেকে।'],
      },
    ],
  },
];

/** Palavras do bengali com a raiz indo-europeia e os parentes nas línguas irmãs. */
export const ETYMOLOGY_BN: EtymologySeed[] = [
  {
    word: 'মা',
    root_word: '*méh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'mãe, matriz'], ['en', 'mother'], ['ru', 'мать']),
    evolution_note: '“মা” (ma) vem do sânscrito “मा” (mā), herdeiro da mesma raiz indo-europeia reconstruída como “*méh₂tēr” — a mesma de “mãe” em português e “mother” em inglês: uma palavra tão antiga que provavelmente nasceu do balbucio infantil “ma”.',
    transparent: false,
  },
  {
    word: 'পিতা',
    root_word: '*ph₂tḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'pai, pátrio'], ['en', 'father'], ['la', 'pater']),
    evolution_note: '“পিতা” (pita) é um empréstimo erudito do sânscrito “पिता” (pitā), que remonta ao proto-indo-iraniano “*pHtā́” e, mais fundo, ao proto-indo-europeu “*ph₂tḗr” — a mesma raiz do latim “pater” e do português “pai”. No dia a dia, a maioria dos bengalis usa a forma mais informal “বাবা” (baba), de origem diferente (do prácrito antigo, talvez com influência do persa).',
    transparent: false,
  },
  {
    word: 'নাম',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['la', 'nomen']),
    evolution_note: 'A raiz indo-europeia de “nome” é bem reconhecível em “নাম” (naam), herdado do prácrito “ṇāma” e do sânscrito “नामन्” (nā́man), da mesma raiz indo-europeia reconstruída como “*h₁nómn̥” — a mesma do latim “nomen” e do português “nome”.',
    transparent: true,
  },
  {
    word: 'দুই',
    root_word: '*dwóh₁',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'dois, duplo'], ['en', 'two'], ['ru', 'два']),
    evolution_note: '“দুই” (dui) desceu do prácrito de Magadha, do sânscrito “द्व” (dvá), da mesma raiz indo-europeia reconstruída como “*dwóh₁” de “dois” em português e “two” em inglês — um numeral tão básico que mudou pouco em quase toda a família indo-europeia.',
    transparent: false,
  },
  {
    word: 'ভাই',
    root_word: '*bʰréh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['en', 'brother'], ['ru', 'брат'], ['pt', 'sem cognato popular; sobrevive em “frei”, do latim “frater”']),
    evolution_note: '“ভাই” (bhai) vem do sânscrito “भ्रातृ” (bhrātṛ), da mesma raiz indo-europeia reconstruída como “*bʰréh₂tēr” do inglês “brother” e do russo “брат”. Em português, a palavra do dia a dia, “irmão”, tem outra origem latina, mas a mesma raiz de “ভাই” sobrevive em “frei” e “frade”, tomados do latim “frater” bem mais tarde.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_BN: [string, string][] = [
  ['আজ তুমি কেমন আছ?', 'Como você está hoje?'],
  ['তোমার পরিবার কেমন?', 'Como é a sua família?'],
  ['তুমি চা পছন্দ করো?', 'Você gosta de chá?'],
  ['তোমার বাড়ি কেমন?', 'Como é a sua casa?'],
];

export const SHADOWING_BN: [string, string][] = [
  ['নমস্কার, আমার নাম মায়া।', 'Oi, eu sou a Maya.'],
  ['আমি ভালো, ধন্যবাদ। আর তুমি?', 'Eu estou bem, obrigado(a). E você?'],
  ['আমার একটা ভাই আছে।', 'Eu tenho um irmão.'],
  ['আমি চা পছন্দ করি।', 'Eu gosto de chá.'],
];
