import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no frísio). */
export const COMMUNITY_FY: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Hoe hjitsto, en wêr komsto wei?',
    content: 'Goeie! Ik hjit Bruno e ik kom út Curitiba.',
    reference: 'Goeie! Ik hjit Bruno en ik kom út Curitiba.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Wat itsto graach?',
    content: 'Ik yt brea en tsiis, is goed.',
    reference: 'Ik yt graach brea mei tsiis.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Hasto bruorren of susters?',
    content: 'Ik ha net bruorren.',
    reference: 'Ik ha gjin bruorren.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_FY: ScenarioSeed[] = [
  {
    id: 'fy-s1',
    title: 'In kofje yn Ljouwert',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Sietse, in freon út de Fryske kursus',
    description: 'Sietse convida você para um café no centro de Ljouwert. É uma conversa entre amigos: use “do”.',
    turns: [
      {
        bot: 'Goeie! Wat wolsto drinke?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kofje', 'wetter', 'molke'],
        suggestions: ['In kofje, asjeblyft.', 'In glês wetter, asjeblyft.'],
      },
      {
        bot: 'Wêr komsto wei?',
        botTranslation: 'De onde você é?',
        keywords: ['ik kom út'],
        suggestions: ['Ik kom út São Paulo.', 'Ik kom út Salvador.'],
      },
    ],
  },
];

/** Palavras do frísio com a raiz germânica e os parentes nas línguas irmãs (sobretudo o inglês). */
export const ETYMOLOGY_FY: EtymologySeed[] = [
  {
    word: 'hûs',
    root_word: '*hūsą',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'house'], ['de', 'Haus'], ['nl', 'huis']),
    evolution_note: 'O frísio é a língua viva mais parecida com o inglês: “hûs” e “house” vêm exatamente da mesma raiz germânica, só com uma mudança de vogal diferente em cada língua.',
    transparent: true,
  },
  {
    word: 'tsiis',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['en', 'cheese'], ['pt', 'queijo'], ['de', 'Käse']),
    evolution_note: 'Uma palavra latina rara que entrou no germânico antigo (provavelmente com o próprio queijo, trazido pelos romanos): deu “tsiis” no frísio, “cheese” no inglês e “Käse” no alemão, todas da mesma fonte que o nosso “queijo”.',
    transparent: false,
  },
  {
    word: 'wetter',
    root_word: '*watar',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'water'], ['de', 'Wasser'], ['nl', 'water']),
    evolution_note: 'A mesma raiz germânica que deu “water” em inglês; o português “água” vem de outra família, o latim “aqua”, então aqui não há parentesco com o português.',
    transparent: false,
  },
  {
    word: 'namme',
    root_word: '*namô',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'name'], ['de', 'Name'], ['la', 'nomen']),
    evolution_note: 'Essa raiz é tão antiga que aparece também no latim “nomen” (de onde vem o nosso “nome”): frísio, inglês, alemão e português guardam a mesma palavra-mãe indo-europeia.',
    transparent: true,
  },
  {
    word: 'frysk',
    root_word: '*frīsa-',
    origin_language: 'Proto-germânico',
    cognates: c(['en', 'Frisian'], ['nl', 'Fries']),
    evolution_note: 'O nome do próprio povo frísio é antiguíssimo: já aparece em registros romanos do século I como “Frisii”, o povo que vivia nas terras baixas junto ao mar do Norte.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_FY: [string, string][] = [
  ['Hoe giet it hjoed?', 'Como vai hoje?'],
  ['Fertel oer dyn famylje.', 'Conte sobre a sua família.'],
  ['Wat itsto en drinksto graach?', 'O que você gosta de comer e beber?'],
  ['Hoe is dyn hûs?', 'Como é a sua casa?'],
];

export const SHADOWING_FY: [string, string][] = [
  ['Goeie! Ik hjit Ana.', 'Oi! Eu me chamo Ana.'],
  ['Goed, tank! En do?', 'Bem, obrigado! E você?'],
  ['Ik ha ien broer en ien suster.', 'Tenho um irmão e uma irmã.'],
  ['Ik wit it net.', 'Eu não sei.'],
];
