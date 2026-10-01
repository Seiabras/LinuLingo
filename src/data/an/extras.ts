import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no aragonês). */
export const COMMUNITY_AN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'O mío nombre, a mía ziudá e a mía familia.',
    content: 'Ola! Yo me chamo Bruno e soi de Curitiba. Yo he un chirmán.',
    reference: 'Ola! Me clamo Bruno e soi de Curitiba. He un chirmán.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Qué minchas pola maitinada?',
    content: 'Mincho pan e queijo.',
    reference: 'Mincho pan e queso.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Cómo ye a tuya casa?',
    content: 'A mía casa ye menudo.',
    reference: 'A mía casa ye menuda.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_AN: ScenarioSeed[] = [
  {
    id: 'an-s1',
    title: 'Un café en Uesca',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, una colega d’o curso d’aragonés',
    description: 'Ana convida você para um café no centro de Huesca. É uma conversa entre colegas: use “tu”.',
    turns: [
      {
        bot: 'Ola! Qué quiers beber?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['café', 'augua', 'leit'],
        suggestions: ['Un café, por favor.', 'Un vaso d’augua, por favor.'],
      },
      {
        bot: "D'an yes?",
        botTranslation: 'De onde você é?',
        keywords: ['soi de'],
        suggestions: ['Soi de Sant Paulo.', 'Soi de Salvador.'],
      },
    ],
  },
];

/** Palavras do aragonês com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_AN: EtymologySeed[] = [
  {
    word: 'fillo',
    root_word: 'filiu(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'filho'], ['ca', 'fill'], ['es', 'hijo']),
    evolution_note: 'O aragonês conservou o F inicial do latim, que o espanhol perdeu (hijo). O grupo -li- virou “ll”, como o “lh” do português “filho”.',
    transparent: true,
  },
  {
    word: 'leit',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['ca', 'llet'], ['es', 'leche']),
    evolution_note: 'O grupo latino -ct- virou “it” no aragonês, parecido com o “-eite” do português: lacte → leit, assim como octo → ueito (oito) e nocte → nueit (noite, numa variante).',
    transparent: true,
  },
  {
    word: 'pai',
    root_word: 'patre(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'pai'], ['ca', 'pare'], ['es', 'padre']),
    evolution_note: 'Uma coincidência que ajuda o brasileiro: “pai” em aragonês é quase idêntico ao português, enquanto o espanhol guardou a forma mais cheia “padre”.',
    transparent: true,
  },
  {
    word: 'augua',
    root_word: 'aqua(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['ca', 'aigua'], ['es', 'agua']),
    evolution_note: 'Do latim “aqua”, com o grupo -qu- enfraquecido, como em quase todas as línguas românicas vizinhas.',
    transparent: true,
  },
  {
    word: 'chirmán',
    root_word: 'germanu(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'germano, germânico'], ['es', 'hermano']),
    evolution_note: 'O g inicial do latim “germanus” (irmão de sangue) virou o som “ch” no aragonês, como em “chen” (gente, do latim gente). O português preferiu guardar “germano” só em palavras cultas, e usa “irmão” (de germanus também, mas por outro caminho sonoro).',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_AN: [string, string][] = [
  ['Cómo yes hue?', 'Como você está hoje?'],
  ["Fabla'm d'a tuya familia.", 'Fale da sua família.'],
  ['Qué te quiers minchar e beber?', 'O que você gosta de comer e de beber?'],
  ['Cómo ye a tuya casa?', 'Como é a sua casa?'],
];

export const SHADOWING_AN: [string, string][] = [
  ['Ola! Me clamo Ana.', 'Oi! Eu me chamo Ana.'],
  ['Bien, grazias! E tu?', 'Bem, obrigado! E você?'],
  ['Yo he un chirmán e una chirmana.', 'Tenho um irmão e uma irmã.'],
  ['No sé.', 'Eu não sei.'],
];
