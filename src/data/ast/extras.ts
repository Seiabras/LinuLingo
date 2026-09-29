import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no asturiano). */
export const COMMUNITY_AST: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Preséntate: nome, orixe y la to familia.',
    content: 'Hola! Eu me llamo Bruno y sou de Brasil. Tenho un hermanu.',
    reference: 'Hola! Llámome Bruno y soi de Brasil. Tengo un hermanu.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Qué te presta beber pela mañana?',
    content: 'Eu gosto de café con leite pela mañana.',
    reference: 'Préstame’l café con lleche pela mañana.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Cómo ye la to casa?',
    content: 'La mio casa es pequeña y tengo un gato.',
    reference: 'La mio casa ye pequeña y tengo un gatu.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_AST: ScenarioSeed[] = [
  {
    id: 'ast-s1',
    title: 'Un café con una amiga en Xixón',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uxía, una compañera del cursu d’asturianu',
    description: 'Uxía convida você para um café perto da praia de San Lorenzo. É uma conversa informal, entre amigas: use «tu».',
    turns: [
      {
        bot: 'Hola! Qué quies tomar?',
        botTranslation: 'Oi! O que você quer tomar?',
        keywords: ['café', 'quiero', 'agua', 'lleche'],
        suggestions: ['Un café con lleche, por favor.', 'Quiero agua, por favor.'],
      },
      {
        bot: 'Y cuéntame, de ónde yes?',
        botTranslation: 'E me conte, de onde você é?',
        keywords: ['soi de', 'brasil'],
        suggestions: ['Soi de Brasil.', 'Soi de São Paulo, en Brasil.'],
      },
    ],
  },
];

/** Palavras do asturiano com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_AST: EtymologySeed[] = [
  {
    word: 'lleche',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['es', 'leche'], ['it', 'latte'], ['fr', 'lait']),
    evolution_note: 'O l- do começo virou ll- (som de lh): é um dos traços mais típicos do asturiano, que faz também «llingua» (língua) e «llunes» (segunda-feira).',
    transparent: true,
  },
  {
    word: 'fíu',
    root_word: 'filiu(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'filho'], ['es', 'hijo'], ['it', 'figlio'], ['fr', 'fils']),
    evolution_note: 'O asturiano manteve o f- inicial do latim, como o português e o galego, enquanto o castelhano o trocou por h- (hijo).',
    transparent: true,
  },
  {
    word: 'güei',
    root_word: 'hodie',
    origin_language: 'Latim',
    cognates: c(['pt', 'hoje'], ['es', 'hoy'], ['it', 'oggi'], ['fr', 'aujourd’hui']),
    evolution_note: 'Do latim «hodie», com o o tônico ditongado em «üe», como acontece em muitas palavras asturianas.',
    transparent: false,
  },
  {
    word: 'agua',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['es', 'agua'], ['it', 'acqua'], ['fr', 'eau']),
    evolution_note: 'Do latim «aqua», com o -qu- amolecido em -gu-, igual ao português e ao castelhano.',
    transparent: true,
  },
  {
    word: 'vinu',
    root_word: 'vinu(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['es', 'vino'], ['it', 'vino'], ['fr', 'vin']),
    evolution_note: 'O -u final dos masculinos (vinu, perru, gatu) é uma marca do asturiano central: onde o castelhano tem -o, o asturiano tem -u.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_AST: [string, string][] = [
  ['Cómo tas güei?', 'Como você está hoje?'],
  ['Cuéntame daqué de la to familia.', 'Me conte algo da sua família.'],
  ['Qué te presta comer y beber?', 'O que você gosta de comer e beber?'],
  ['Cómo ye la to casa?', 'Como é a sua casa?'],
];

export const SHADOWING_AST: [string, string][] = [
  ['Hola! Llámome Ana y soi de Brasil.', 'Oi! Eu me chamo Ana e sou do Brasil.'],
  ['Toi mui bien, gracies! Y tu?', 'Estou muito bem, obrigado! E você?'],
  ['Tengo un hermanu y una hermana.', 'Tenho um irmão e uma irmã.'],
  ['Préstame muncho’l café con lleche.', 'Eu gosto muito de café com leite.'],
];
