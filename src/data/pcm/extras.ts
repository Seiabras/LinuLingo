import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no pidgin nigeriano). */
export const COMMUNITY_PCM: CommunitySeed[] = [
  {
    author_name: 'Thiago 🇧🇷',
    prompt: 'Wetin be yor name, and wia you dey go?',
    content: 'My name na Thiago. I dey go not di maket today.',
    reference: 'My name na Thiago. I no dey go di maket today.',
  },
  {
    author_name: 'Larissa 🇧🇷',
    prompt: 'You get pikin?',
    content: 'Yes, I get two pikin.',
    reference: 'Yes, I get tu pikin.',
  },
  {
    author_name: 'Eduardo 🇧🇷',
    prompt: 'Wetin you wan chop?',
    content: 'I wan to chop rais and fish.',
    reference: 'I wan chop rais and fish.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_PCM: ScenarioSeed[] = [
  {
    id: 'pcm-s1',
    title: 'For di buka',
    emoji: '🍲',
    cefr: 'A1',
    register: 'informal',
    persona: 'Madam Ngozi, wey dey sell chop for her buka (restaurante local)',
    description: 'Madam Ngozi vende comida numa “buka”, um restaurante simples e barato muito comum na Nigéria. A conversa é informal, entre vendedora e cliente.',
    turns: [
      {
        bot: 'Oga/Madam, wetin you wan chop?',
        botTranslation: 'Chefe/Madame, o que você quer comer?',
        keywords: ['rais', 'fish', 'wata', 'wan chop'],
        suggestions: ['I wan chop rais and fish.', 'Giv mi rais, abeg.'],
      },
      {
        bot: 'You wan drink wata abi mineral?',
        botTranslation: 'Você quer beber água ou refrigerante?',
        keywords: ['wata', 'abeg'],
        suggestions: ['Wata, abeg.', 'Giv mi smol wata.'],
      },
    ],
  },
];

/**
 * Palavras do pidgin nigeriano com a origem real de cada uma. O pidgin nigeriano mistura inglês (a
 * maior parte do léxico), iorubá, igbo, hauçá e até português — a marca dos navios portugueses que
 * chegaram à costa da África Ocidental antes dos ingleses. Fontes: Wikipédia (inglês), artigo “Nigerian
 * Pidgin” (tabela de vocabulário com origem); Wiktionary, entradas individuais em pidgin nigeriano
 * (sabi, pikin, wahala, una, oga, dem, waka, wetin) e em inglês (door, mouth).
 */
export const ETYMOLOGY_PCM: EtymologySeed[] = [
  {
    word: 'sabi',
    root_word: 'saber',
    origin_language: 'Português',
    cognates: c(['pt', 'saber'], ['en', 'savvy (via o francês, da mesma raiz latina)']),
    evolution_note: 'Veio do português “saber”, levado pelos navios portugueses que negociavam na costa da África Ocidental já no século XV — bem antes dos ingleses chegarem. É um dos poucos verbos realmente básicos do pidgin nigeriano que não vem do inglês.',
    transparent: true,
  },
  {
    word: 'pikin',
    root_word: 'pequenino',
    origin_language: 'Português',
    cognates: c(['pt', 'pequenino, pequeno'], ['kri', 'pikin (crioulo de Serra Leoa)']),
    evolution_note: 'Também veio do português, como “sabi”. “Pequenino” virou “pikin” e passou a significar “criança” ou “filho(a)”, não só “pequeno”.',
    transparent: false,
  },
  {
    word: 'wahala',
    root_word: 'وَهْلَة (wahla)',
    origin_language: 'Árabe',
    cognates: c(['ha', 'wàhalā̀'], ['yo', 'wàhálà']),
    evolution_note: 'Do árabe “wahla” (susto, pavor), a palavra passou para o hauçá (“wàhalā̀”) e depois para o iorubá (“wàhálà”), chegando ao pidgin nigeriano com o sentido de “problema, encrenca”.',
    transparent: false,
  },
  {
    word: 'abeg',
    root_word: 'I beg',
    origin_language: 'Inglês',
    cognates: c(['en', 'I beg (eu peço, eu imploro)']),
    evolution_note: '“I beg” (eu peço) foi encurtado e virou a interjeição “abeg”, usada como “por favor” ou “com licença” — inclusive para suavizar uma reclamação, como em “e too cost, abeg” (está caro demais, por favor).',
    transparent: false,
  },
  {
    word: 'una',
    root_word: 'ụnụ',
    origin_language: 'Igbo',
    cognates: c(['ig', 'ụnụ']),
    evolution_note: 'Veio direto do igbo “ụnụ” (vocês) para preencher um espaço que o inglês não cobre bem: um pronome de 2ª pessoa do plural bem diferente do singular.',
    transparent: false,
  },
  {
    word: 'oga',
    root_word: 'ọ̀gá',
    origin_language: 'Iorubá',
    cognates: c(['yo', 'ọ̀gá']),
    evolution_note: 'Do iorubá “ọ̀gá” (chefe, pessoa de autoridade), usado no pidgin nigeriano para tratar com respeito quem manda ou quem atende — de um porteiro a um patrão.',
    transparent: false,
  },
  {
    word: 'dem',
    root_word: 'them',
    origin_language: 'Inglês',
    cognates: c(['en', 'them'], ['nl', 'hen/hun (mesma raiz germânica)']),
    evolution_note: 'Do inglês “them” (eles, via o nórdico antigo “þeim”), mas ganhou um segundo trabalho que o inglês não tem: posto depois de um substantivo, também marca o plural, como em “pikin-dem” (as crianças).',
    transparent: false,
  },
  {
    word: 'waka',
    root_word: 'walk',
    origin_language: 'Inglês',
    cognates: c(['en', 'walk']),
    evolution_note: 'Do inglês “walk” (andar), com a pronúncia adaptada. O Wiktionary também registra um segundo “waka”, vindo do hauçá “uwarka” (sua mãe), usado como xingamento — palavra diferente, mesma grafia.',
    transparent: false,
  },
  {
    word: 'domot',
    root_word: 'door + mouth',
    origin_language: 'Inglês',
    cognates: c(['en', 'doorway (porta, entrada)']),
    evolution_note: 'Uma das muitas palavras compostas do pidgin nigeriano: “door” (porta) + “mouth” (boca) viraram “domot”, a entrada de uma casa — a “boca da porta”.',
    transparent: false,
  },
  {
    word: 'wetin',
    root_word: 'what thing',
    origin_language: 'Inglês',
    cognates: c(['en', 'what thing']),
    evolution_note: '“What thing” (que coisa) virou uma palavra só, “wetin”, o jeito do pidgin nigeriano de perguntar “o quê”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_PCM: [string, string][] = [
  ['How di body today?', 'Como você está hoje?'],
  ['Wetin you chop today?', 'O que você comeu hoje?'],
  ['Wia you dey go dis week?', 'Para onde você vai esta semana?'],
  ['Wetin you fit do wey you no sabi before?', 'O que você consegue fazer hoje que não sabia antes?'],
];

export const SHADOWING_PCM: [string, string][] = [
  ['Welkom to Naijá!', 'Bem-vindo(a) à Nigéria!'],
  ['I dey fine.', 'Eu estou bem.'],
  ['I no get moni.', 'Eu não tenho dinheiro.'],
  ['E too cost, abeg!', 'Está caro demais, por favor!'],
  ['I don chop.', 'Eu já comi.'],
];
