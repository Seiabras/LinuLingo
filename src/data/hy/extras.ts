import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no armênio). */
export const COMMUNITY_HY: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ասա քո անունը, քաղաքը և ընտանիքը:',
    content: 'Բարև, ես եմ Բրունո և ես Կուրիտիբա եմ: Ես ունեմ մեկ եղբայր:',
    reference: 'Բարև, իմ անունը Բրունո է, և ես Կուրիտիբայից եմ: Ես մեկ եղբայր ունեմ:',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ի՞նչ ես ուտում առավոտյան:',
    content: 'Ես ուտում հաց և պանիր:',
    reference: 'Ես հաց և պանիր եմ ուտում:',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ինչպիսի՞ն է քո տունը:',
    content: 'Իմ տուն փոքր է:',
    reference: 'Իմ տունը փոքր է:',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HY: ScenarioSeed[] = [
  {
    id: 'hy-s1',
    title: 'Սուրճարանում Երևանում',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Աննա, դասընկեր հայերենի դասընթացից',
    description: 'Anna convida você para tomar um café no centro de Erevan. É uma conversa entre colegas: use “դու”.',
    turns: [
      {
        bot: 'Բարև: Ի՞նչ ես ուզում խմել:',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['սուրճ', 'ջուր', 'թեյ'],
        suggestions: ['Մեկ սուրճ, խնդրեմ:', 'Մի բաժակ ջուր, խնդրեմ:'],
      },
      {
        bot: 'Որտեղի՞ց ես դու:',
        botTranslation: 'De onde você é?',
        keywords: ['ես … եմ'],
        suggestions: ['Ես Սան Պաուլուից եմ:', 'Ես Սալվադորից եմ:'],
      },
    ],
  },
];

/** Palavras do armênio com a raiz indo-europeia e os parentes nas línguas irmãs. */
export const ETYMOLOGY_HY: EtymologySeed[] = [
  {
    word: 'մայր',
    root_word: '*méh₂tēr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'mãe, matriz'], ['en', 'mother'], ['ru', 'мать']),
    evolution_note: 'A mesma raiz indo-europeia para “mãe” aparece no armênio “մայր” (mayr), no português “mãe” (e em “matriz”, “maternidade”) e no russo “мать” (mat’): todas vêm de uma palavra muito antiga, provavelmente ligada ao balbucio infantil “ma”.',
    transparent: false,
  },
  {
    word: 'հայր',
    root_word: '*ph₂tḗr',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'pai, pátrio'], ['en', 'father'], ['la', 'pater']),
    evolution_note: 'O armênio trocou o “p” indo-europeu original por “h” no início da palavra — um som que marca várias palavras armênias (compare o latim “pater” com o armênio “հայր”, hayr). O português “pai” vem da mesma raiz, sem essa troca.',
    transparent: false,
  },
  {
    word: 'երկու',
    root_word: '*dwóh₁',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'dois, duplo'], ['en', 'two'], ['ru', 'два']),
    evolution_note: 'O “d” indo-europeu virou “erk” no armênio por um caminho sonoro bem diferente do das línguas europeias mais conhecidas, mas a raiz é a mesma de “dois” em português e “two” em inglês.',
    transparent: false,
  },
  {
    word: 'անուն',
    root_word: '*h₁nómn̥',
    origin_language: 'Proto-indo-europeu',
    cognates: c(['pt', 'nome'], ['en', 'name'], ['la', 'nomen']),
    evolution_note: 'A raiz indo-europeia de “nome” é bem reconhecível no armênio “անուն” (anun), no latim “nomen” e no português “nome”: o som inicial mudou, mas o miolo da palavra se manteve.',
    transparent: true,
  },
  {
    word: 'սիրել',
    root_word: 'armênio clássico',
    origin_language: 'Armênio antigo',
    cognates: c(['pt', 'sem cognato direto'], ['en', 'sem cognato direto']),
    evolution_note: '“Սիրել” (sirel, amar/gostar) não tem um parente claro em português ou inglês: é uma raiz própria do armênio, um lembrete de que nem toda palavra indo-europeia chegou igual a todas as línguas da família.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HY: [string, string][] = [
  ['Ինչպե՞ս ես այսօր:', 'Como você está hoje?'],
  ['Պատմիր քո ընտանիքի մասին:', 'Conte sobre a sua família.'],
  ['Ի՞նչ ես սիրում ուտել և խմել:', 'O que você gosta de comer e beber?'],
  ['Ինչպիսի՞ն է քո տունը:', 'Como é a sua casa?'],
];

export const SHADOWING_HY: [string, string][] = [
  ['Բարև, ես Աննա եմ:', 'Oi, eu sou a Anna.'],
  ['Լավ եմ, շնորհակալություն: Իսկ դու՞:', 'Vou bem, obrigado(a)! E você?'],
  ['Ես մեկ եղբայր ունեմ:', 'Eu tenho um irmão.'],
  ['Ես չգիտեմ:', 'Eu não sei.'],
];
