import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no sérvio). */
export const COMMUNITY_SR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Твоје име, твој град и твоја породица.',
    content: 'Здраво! Сам Бруно и сам из Куритиба. Ја имам брат.',
    reference: 'Здраво! Зовем се Бруно и ја сам из Куритибе. Имам брата.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Шта једеш за доручак?',
    content: 'Ја једем хлеб и сир и пијем кафа.',
    reference: 'Једем хлеб и сир и пијем кафу.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Каква је твоја кућа?',
    content: 'Мој кућа је мали.',
    reference: 'Моја кућа је мала.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SR: ScenarioSeed[] = [
  {
    id: 'sr-s1',
    title: 'У кафићу у Београду',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Јелена, другарица са курса српског',
    description: 'Jelena convida você para um café no centro de Belgrado. É uma conversa entre colegas: use “ти”.',
    turns: [
      {
        bot: 'Здраво! Шта ћеш да пијеш?',
        botTranslation: 'Oi! O que você vai beber?',
        keywords: ['кафу', 'воду', 'чај'],
        suggestions: ['Једну кафу, молим.', 'Воду, молим.'],
      },
      {
        bot: 'Одакле си?',
        botTranslation: 'De onde você é?',
        keywords: ['из'],
        suggestions: ['Ја сам из Сао Паула.', 'Ја сам из Куритибе.'],
      },
    ],
  },
];

/** Palavras do sérvio com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_SR: EtymologySeed[] = [
  {
    word: 'брат',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'frater'], ['en', 'brother'], ['ru', 'брат'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu “frater” em latim (daí “fraterno” e “frade”) e “brother” em inglês.',
    transparent: false,
  },
  {
    word: 'сестра',
    root_word: '*sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'soror'], ['en', 'sister'], ['de', 'Schwester'], ['pt', 'sororidade']),
    evolution_note: 'Vem da palavra indo-europeia para “irmã”, a mesma do latim “soror” e do inglês “sister”. O português a guardou em palavras cultas, como “sororidade”.',
    transparent: false,
  },
  {
    word: 'млеко',
    root_word: '*melko',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'молоко'], ['pl', 'mleko'], ['hr', 'mlijeko']),
    evolution_note: 'O antigo “ě” eslavo virou “е” na pronúncia ekaviana da Sérvia (млеко, хлеб) e “ije” / “je” na ijekaviana do oeste (mlijeko, hljeb). É a maior diferença de pronúncia dentro da mesma língua.',
    transparent: false,
  },
  {
    word: 'три',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: “три”, “três” e “three” vêm todos do indo-europeu.',
    transparent: true,
  },
  {
    word: 'кафа',
    root_word: 'kahve',
    origin_language: 'Turco',
    cognates: c(['pt', 'café'], ['tr', 'kahve'], ['ar', 'qahwa']),
    evolution_note: 'O sérvio recebeu muitas palavras do turco durante os séculos de domínio otomano nos Bálcãs, e “кафа” é uma delas. A origem mais antiga é o árabe “qahwa”, a mesma do português “café”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_SR: [string, string][] = [
  ['Како си данас?', 'Como você está hoje?'],
  ['Причај о својој породици.', 'Conte da sua família.'],
  ['Шта волиш да једеш и пијеш?', 'O que você gosta de comer e de beber?'],
  ['Каква је твоја кућа?', 'Como é a sua casa?'],
];

export const SHADOWING_SR: [string, string][] = [
  ['Здраво! Зовем се Ана.', 'Oi! Eu me chamo Ana.'],
  ['Добро, хвала! А ти?', 'Bem, obrigado! E você?'],
  ['Имам брата и сестру.', 'Tenho um irmão e uma irmã.'],
  ['Не знам.', 'Eu não sei.'],
];
