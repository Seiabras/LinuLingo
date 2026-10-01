import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no aromeno). */
export const COMMUNITY_RUP: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Cum ti cljamã shi di iu eshti?',
    content: 'Bunã dzua! Io mi chamo Bruno shi io escu dit Curitiba.',
    reference: 'Bunã dzua! Mi cljamã Bruno shi escu dit Curitiba.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Tsi mãts tini?',
    content: 'Io mãc pãni cu queijo.',
    reference: 'Io mãc pãni cu cash.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ai frati i sorã?',
    content: 'Ie, am un frati shi un sorã.',
    reference: 'Ie, am un frati shi unã sorã.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_RUP: ScenarioSeed[] = [
  {
    id: 'rup-s1',
    title: 'Un cafe tu pandiceu',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, unã amiha di la cursu di armãneashti',
    description: 'Ana convida você para um café na feira (pandiceu). É uma conversa entre amigos: use “tini”.',
    turns: [
      {
        bot: 'Bunã! Tsi vrei s-beai?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafe', 'apã', 'yin'],
        suggestions: ['Un cafe, vã plãcãrsescu.', 'Apã, vã plãcãrsescu.'],
      },
      {
        bot: 'Di iu eshti?',
        botTranslation: 'De onde você é?',
        keywords: ['escu dit'],
        suggestions: ['Io escu dit São Paulo.', 'Io escu dit Salvador.'],
      },
    ],
  },
];

/** Palavras do aromeno com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_RUP: EtymologySeed[] = [
  {
    word: 'frati',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['ro', 'frate']),
    evolution_note: 'O aromeno guardou o latim “frater” para “irmão”, como o romeno e o francês; o português e o espanhol preferiram “germanus” (irmão, hermano) e deixaram “frater” só em “frade” e “fraterno”.',
    transparent: false,
  },
  {
    word: 'apã',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['fr', 'eau'], ['ro', 'apă']),
    evolution_note: 'Do latim “aqua”, quase sem mudança — o romeno tem a mesma palavra, “apă”, e os dois guardam o “a” inicial que o francês “eau” perdeu quase todo.',
    transparent: true,
  },
  {
    word: 'casã',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['ro', 'casă']),
    evolution_note: 'Direto do latim “casa”; o aromeno e o romeno guardaram a forma quase igual, enquanto o artigo definido, diferente do português, vem grudado no fim da palavra: “casã” → “casa” (a casa).',
    transparent: true,
  },
  {
    word: 'cash',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['pt', 'queijo'], ['es', 'queso'], ['ro', 'caș']),
    evolution_note: 'Do latim “caseus”: o português “queijo” e o espanhol “queso” vêm da mesma raiz, e o romeno “caș” guardou um som bem parecido com o aromeno “cash” — os dois nomeiam o queijo fresco de leite de ovelha, tradicional na vida pastoril dos dois povos.',
    transparent: false,
  },
  {
    word: 'yin',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['it', 'vino'], ['fr', 'vin'], ['ro', 'vin']),
    evolution_note: 'Do latim “vinum”, com o v inicial enfraquecido até sumir — o mesmo som que, no espanhol e no português antigo, ainda se escreve com v/b.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_RUP: [string, string][] = [
  ['Cum eshti adzã?', 'Como você está hoje?'],
  ['Ai frats i surãri?', 'Você tem irmãos ou irmãs?'],
  ['Tsi mãts?', 'O que você come?'],
  ['Di iu eshti?', 'De onde você é?'],
];

export const SHADOWING_RUP: [string, string][] = [
  ['Bunã dzua! Mi cljamã Ana.', 'Bom dia! Eu me chamo Ana.'],
  ['Ghini escu, efharisto!', 'Estou bem, obrigado!'],
  ['Am un frati shi unã sorã.', 'Tenho um irmão e uma irmã.'],
  ['Nu shtiu.', 'Não sei.'],
];
