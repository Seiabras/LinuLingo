import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no scots). */
export const COMMUNITY_SCO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Yer name, yer toun an yer faimly.',
    content: "Hullo! Ah is cried Bruno an ah is frae Curitiba. Ah hae one brither.",
    reference: "Hullo! Ah'm cried Bruno an ah'm frae Curitiba. Ah hae a brither.",
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Whit dae ye eat in the mornin?',
    content: 'Ah eats breid an cheese.',
    reference: 'Ah eat breid an cheese.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Hou is yer hoose?',
    content: 'Ma hoose is no muckle.',
    reference: 'Ma hoose is wee.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SCO: ScenarioSeed[] = [
  {
    id: 'sco-s1',
    title: 'A cup o tea in Edinburgh',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, a freend frae the Scots cless',
    description: 'Anna convida você para um chá no centro de Edinburgh. É uma conversa entre amigos: use "ye".',
    turns: [
      {
        bot: 'Hullo! Whit dae ye want tae drink?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['tea', 'watter', 'milk'],
        suggestions: ['A cup o tea, please.', 'A cup o watter, please.'],
      },
      {
        bot: 'Whaur frae are ye?',
        botTranslation: 'De onde você é?',
        keywords: ["ah'm frae"],
        suggestions: ["Ah'm frae São Paulo.", "Ah'm frae Salvador."],
      },
    ],
  },
];

/** Palavras do scots com a raiz do inglês antigo e os parentes do inglês moderno. */
export const ETYMOLOGY_SCO: EtymologySeed[] = [
  {
    word: 'guid nicht',
    root_word: 'niht',
    origin_language: 'Inglês antigo',
    cognates: c(['en', 'night'], ['nl', 'nacht']),
    evolution_note: 'O scots guardou o som gutural "ch" do inglês antigo "niht", que o inglês moderno perdeu na fala (só sobrou na escrita, "night"). O mesmo aconteceu com "licht" (luz, "light" em inglês).',
    transparent: true,
  },
  {
    word: 'kirk',
    root_word: 'cirice',
    origin_language: 'Inglês antigo',
    cognates: c(['en', 'church'], ['de', 'Kirche']),
    evolution_note: 'Inglês antigo "cirice" deu duas formas diferentes: no norte (scots), o som "k" ficou como era; no sul (inglês padrão), virou o "ch" de "church". É um dos exemplos mais claros da divisão norte/sul do inglês antigo.',
    transparent: false,
  },
  {
    word: 'hoose',
    root_word: 'hus',
    origin_language: 'Inglês antigo',
    cognates: c(['en', 'house'], ['nl', 'huis'], ['de', 'Haus']),
    evolution_note: 'O scots manteve o som longo "u" do inglês antigo "hus" (escrito "oo"), enquanto o inglês moderno mudou esse som ao longo dos séculos (the Great Vowel Shift) até virar o "ou" de "house".',
    transparent: true,
  },
  {
    word: 'guid',
    root_word: 'gōd',
    origin_language: 'Inglês antigo',
    cognates: c(['en', 'good'], ['nl', 'goed'], ['de', 'gut']),
    evolution_note: 'Mesma raiz do inglês "good" e do alemão "gut": o scots escreve "ui" para o som que mudou um pouco da vogal original do inglês antigo.',
    transparent: true,
  },
  {
    word: 'bairn',
    root_word: 'bearn',
    origin_language: 'Inglês antigo',
    cognates: c(['en', 'born'], ['sv', 'barn'], ['da', 'barn']),
    evolution_note: 'O inglês antigo tinha duas palavras para "criança": "bearn" (ligada a "bear", carregar/dar à luz) e "cild". O scots guardou "bairn"; o inglês moderno ficou só com "child". As línguas nórdicas (sueco, dinamarquês "barn") mostram o mesmo parentesco germânico.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SCO: [string, string][] = [
  ["Hou's it gaun the day?", 'Como você está hoje?'],
  ['Tell me aboot yer faimly.', 'Conte sobre a sua família.'],
  ['Whit dae ye like tae eat an drink?', 'O que você gosta de comer e de beber?'],
  ['Hou is yer hoose?', 'Como é a sua casa?'],
];

export const SHADOWING_SCO: [string, string][] = [
  ["Hullo! Ah'm cried Ana.", 'Oi! Eu me chamo Ana.'],
  ['Fine, thank ye! An you?', 'Bem, obrigado! E você?'],
  ['Ah hae a brither an a sister.', 'Tenho um irmão e uma irmã.'],
  ['Ah dinna ken.', 'Eu não sei.'],
];
