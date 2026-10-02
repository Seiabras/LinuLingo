import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no curmanji). */
export const COMMUNITY_KMR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tu çawa yî? Navê te çi ye?',
    content: 'Ez bas im. Navê min Bruno e.',
    reference: 'Ez baş im. Navê min Bruno e.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Dayika te çawa ye?',
    content: 'Dayikê min baş e.',
    reference: 'Dayika min baş e.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Tu çi dixwazî?',
    content: 'Ez dixwazim av.',
    reference: 'Ez av dixwazim.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_KMR: ScenarioSeed[] = [
  {
    id: 'kmr-s1',
    title: 'Li dukanê: nan û çay',
    emoji: '🏪',
    cefr: 'A1',
    register: 'informal',
    persona: 'Dono de uma pequena loja',
    description: 'Você entra numa pequena loja e pede pão e chá. A conversa é informal: use “tu”.',
    turns: [
      {
        bot: 'Silav! Tu çi dixwazî?',
        botTranslation: 'Oi! O que você quer?',
        keywords: ['nan', 'çay', 'av'],
        suggestions: ['Nan, ji kerema xwe.', 'Çay, ji kerema xwe.'],
      },
      {
        bot: 'Spas! Tu çawa yî?',
        botTranslation: 'Obrigado! Como você está?',
        keywords: ['baş'],
        suggestions: ['Ez baş im, spas!'],
      },
    ],
  },
];

/**
 * Palavras do curmanji com a raiz iraniana e os parentes noutras línguas indo-europeias. Fontes:
 * páginas do Wiktionary de cada palavra (derî, xanî, mêr, dayik, stêr), consultadas em 02/10/2026.
 */
export const ETYMOLOGY_KMR: EtymologySeed[] = [
  {
    word: 'derî',
    root_word: '*dwer-',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['en', 'door'], ['de', 'Tür'], ['ru', 'дверь']),
    evolution_note: 'A raiz indo-europeia *dwer- (porta, portal) deu “derî” no curmanji, “door” no inglês, “Tür” no alemão e “дверь” (dver) no russo — todas vêm do mesmo ponto de partida, sem uma ter copiado a outra.',
    transparent: true,
  },
  {
    word: 'xanî',
    root_word: 'xāne',
    origin_language: 'Persa',
    cognates: c(['fa', 'خانه (xâne)']),
    evolution_note: '“Xanî” (casa) vem do persa “xâne” (casa), aparentado também com o mazandarani “xene” (quarto) — uma palavra iraniana comum na região, sem parente parecido em português.',
    transparent: false,
  },
  {
    word: 'mêr',
    root_word: '*mr̥tós',
    origin_language: 'Proto-indo-europeu (via proto-iraniano *mêrd)',
    cognates: c(['fa', 'مرد (mard)']),
    evolution_note: '“Mêr” (homem, marido) e o persa “mard” (homem) vêm da mesma raiz proto-iraniana “*mêrd”, que remonta ao indo-europeu “*mr̥tós” — a mesma família, bem distante do português.',
    transparent: false,
  },
  {
    word: 'dayik',
    root_word: '*daHyaka-',
    origin_language: 'Proto-iraniano',
    cognates: c(['fa', 'دایه (dâye)'], ['hy', 'դայեակ (dayeak)']),
    evolution_note: '“Dayik” (mãe) vem do proto-iraniano “*daHyaka-”, de uma raiz indo-europeia ligada a “amamentar”; o persa “dâye” (ama de leite) e o armênio antigo “dayeak” (babá) são parentes da mesma origem.',
    transparent: false,
  },
  {
    word: 'stêr',
    root_word: '*h₂stḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['en', 'star'], ['la', 'stella'], ['pt', 'estrela']),
    evolution_note: '“Stêr” (estrela) vem direto da raiz indo-europeia “*h₂stḗr”, a mesma que deu o latim “stella” e, por ele, o português “estrela”, além do inglês “star”: dá para ouvir o parentesco.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_KMR: [string, string][] = [
  ['Tu çawa yî?', 'Como você está?'],
  ['Navê te çi ye?', 'Qual é o seu nome?'],
  ['Dayika te çawa ye?', 'Como está a sua mãe?'],
  ['Tu çi dixwazî?', 'O que você quer?'],
];

export const SHADOWING_KMR: [string, string][] = [
  ['Silav! Tu çawa yî?', 'Oi! Como você está?'],
  ['Ez baş im, spas.', 'Eu estou bem, obrigado.'],
  ['Navê min Linu e.', 'Meu nome é Linu.'],
  ['Ez av dixwazim.', 'Eu quero água.'],
];
