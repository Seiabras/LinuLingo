import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no bósnio). */
export const COMMUNITY_BS: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Imaš li braću ili sestre?',
    content: 'Da, ja imam jedan brat.',
    reference: 'Da, ja imam jednog brata.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Šta piješ ujutru?',
    content: 'Ja piti kafa.',
    reference: 'Ja pijem kahvu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kako je tvoja kuća?',
    content: 'Moja kuća je mali.',
    reference: 'Moja kuća je mala.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_BS: ScenarioSeed[] = [
  {
    id: 'bs-s1',
    title: 'Kahva u Sarajevu',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Amina, kolegica s kursa bosanskog',
    description: 'Amina convida você para uma kahva na Baščaršija, o bazar histórico de Sarajevo. É uma conversa entre colegas: use “ti”.',
    turns: [
      {
        bot: 'Zdravo! Šta želiš popiti?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kahva', 'voda', 'čaj'],
        suggestions: ['Kahvu, molim.', 'Čašu vode, molim.'],
      },
      {
        bot: 'Odakle si?',
        botTranslation: 'De onde você é?',
        keywords: ['ja sam iz'],
        suggestions: ['Ja sam iz São Paula.', 'Ja sam iz Salvadora.'],
      },
    ],
  },
];

/** Palavras do bósnio com a raiz (eslava, turca ou árabe) e os parentes nas línguas vizinhas. */
export const ETYMOLOGY_BS: EtymologySeed[] = [
  {
    word: 'kahva',
    root_word: 'kahve',
    origin_language: 'Turco (do árabe qahwa)',
    cognates: c(['pt', 'café'], ['tr', 'kahve'], ['ar', 'قهوة (qahwa)']),
    evolution_note: 'Chegou ao bósnio direto do turco otomano, com o “h” conservado — por isso “kahva”, diferente do sérvio “kafa” e do croata “kava”, que vieram por outros caminhos e perderam o som. A mesma raiz árabe deu o português “café”, mas por uma rota bem mais longa, via italiano e francês.',
    transparent: false,
  },
  {
    word: 'hljeb',
    root_word: 'xlěbъ',
    origin_language: 'Eslavo antigo',
    cognates: c(['ru', 'хлеб (hleb)'], ['pl', 'chleb'], ['hr', 'kruh (palavra diferente, mesma função)']),
    evolution_note: 'Uma raiz eslava antiga para “pão”, presente também no russo e no polonês — mas o croata trocou por “kruh”, de outra origem, o que faz do par hljeb/kruh um dos sinais lexicais mais citados para diferenciar bósnio/sérvio de croata.',
    transparent: false,
  },
  {
    word: 'komšija',
    root_word: 'komşu',
    origin_language: 'Turco',
    cognates: c(['pt', 'vizinho (sem parentesco; comparação de sentido)'], ['sr', 'komšija']),
    evolution_note: 'Mais uma herança do período otomano, viva no dia a dia bósnio e sérvio; o croata prefere a palavra eslava “susjed”.',
    transparent: false,
  },
  {
    word: 'voda',
    root_word: 'voda',
    origin_language: 'Eslavo antigo (do indo-europeu *wodor)',
    cognates: c(['ru', 'вода (voda)'], ['pl', 'woda'], ['en', 'water']),
    evolution_note: 'A mesma raiz indo-europeia que deu o inglês “water” — o bósnio e o português são primos bem distantes, mas essa palavra mostra o parentesco remoto.',
    transparent: true,
  },
  {
    word: 'majka',
    root_word: 'mati, māter',
    origin_language: 'Indo-europeu',
    cognates: c(['pt', 'mãe, matriz'], ['la', 'mater'], ['ru', 'мать (mat\')']),
    evolution_note: 'Uma das palavras mais estáveis entre as línguas indo-europeias: a raiz “mat-” aparece quase igual do português ao russo.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_BS: [string, string][] = [
  ['Kako si danas?', 'Como você está hoje?'],
  ['Pričaj mi o svojoj porodici.', 'Conte da sua família.'],
  ['Šta voliš jesti i piti?', 'O que você gosta de comer e de beber?'],
  ['Kakva je tvoja kuća?', 'Como é a sua casa?'],
];

export const SHADOWING_BS: [string, string][] = [
  ['Zdravo! Ja sam Ana.', 'Oi! Eu me chamo Ana.'],
  ['Dobro, hvala! A ti?', 'Bem, obrigado! E você?'],
  ['Imam brata i sestru.', 'Tenho um irmão e uma irmã.'],
  ['Ne znam.', 'Eu não sei.'],
];
