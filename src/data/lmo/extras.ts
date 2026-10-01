import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no lombardo). */
export const COMMUNITY_LMO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ti te gh’hee fradej?',
    content: 'Mi hoo un fradell e una sorella.',
    reference: 'Mi gh’hoo on fradell e ona sorella.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Cumè l’è la toa cà?',
    content: 'La me cà è grande.',
    reference: 'La me cà l’è granda.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ti te seet de Milan?',
    content: 'Si, mi sono de Sampaulo.',
    reference: 'Nò, mi sont de Sampaulo.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LMO: ScenarioSeed[] = [
  {
    id: 'lmo-s1',
    title: 'On cafè a Milan',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, ona amisa',
    description: 'Anna convida você para um café no centro de Milão. É uma conversa entre amigos: use “ti”.',
    turns: [
      {
        bot: 'Ciau! Ti gh’hee set de cafè o latt?',
        botTranslation: 'Oi! Você tem vontade de café ou leite?',
        keywords: ['cafè', 'latt', 'acqua'],
        suggestions: ['On cafè, pre piasè.', 'On poo de latt, pre piasè.'],
      },
      {
        bot: 'Ti te seet de Milan?',
        botTranslation: 'Você é de Milão?',
        keywords: ['mi sont de'],
        suggestions: ['Nò, mi sont de Sampaulo.', 'Nò, mi sont de Salvador.'],
      },
    ],
  },
];

/** Palavras do lombardo com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_LMO: EtymologySeed[] = [
  {
    word: 'cà',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['fr', 'chez']),
    evolution_note: 'O lombardo perdeu quase toda a palavra latina “casa”, guardando só o “cà” — uma redução bem mais forte do que o italiano, que manteve a palavra quase inteira.',
    transparent: true,
  },
  {
    word: 'can',
    root_word: 'canis',
    origin_language: 'Latim',
    cognates: c(['pt', 'cão'], ['it', 'cane'], ['fr', 'chien']),
    evolution_note: 'Do latim “canis”, com a vogal final caindo — traço muito comum no lombardo, que o italiano (“cane”) não tem.',
    transparent: true,
  },
  {
    word: 'pan',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['it', 'pane'], ['fr', 'pain']),
    evolution_note: 'Do latim “panis”, com a mesma queda da vogal final: “pane” (italiano) virou “pan” (lombardo).',
    transparent: true,
  },
  {
    word: 'fiœu',
    root_word: 'filius',
    origin_language: 'Latim',
    cognates: c(['pt', 'filho'], ['it', 'figlio'], ['fr', 'fils']),
    evolution_note: 'O grupo latino “-li-” de “filius” seguiu um caminho só do lombardo: virou o som “ö”, escrito “oeu”. O português foi por outro caminho (o “lh”), e o italiano por outro ainda (o “gli”).',
    transparent: false,
  },
  {
    word: 'nòmm',
    root_word: 'nomen',
    origin_language: 'Latim',
    cognates: c(['pt', 'nome'], ['it', 'nome'], ['fr', 'nom']),
    evolution_note: 'Do latim “nomen”, com a consoante dobrada no lombardo (nòmm) marcando a vogal tônica curta, um traço comum nessa família de dialetos.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_LMO: [string, string][] = [
  ['Cumè va incoeu?', 'Como vai hoje?'],
  ['Cuntom de la toa famiglia.', 'Conte da sua família.'],
  ['La toa cà, cumè l’è?', 'Como é a sua casa?'],
  ['Indova te seet?', 'Onde você está?'],
];

export const SHADOWING_LMO: [string, string][] = [
  ['Ciau! Mi sont Anna.', 'Oi! Eu sou a Anna.'],
  ['Tüt ben, grassie! E ti?', 'Tudo bem, obrigado! E você?'],
  ['Mi gh’hoo on fradell e ona sorella.', 'Tenho um irmão e uma irmã.'],
  ['Mi soo nò.', 'Eu não sei.'],
];
