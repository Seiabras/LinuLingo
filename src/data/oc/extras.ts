import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no occitano). */
export const COMMUNITY_OC: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: "Presenta-te: ton nom, d'ont siás, e ta familha.",
    content: "Adieu! Ieu m'apèli Bruno e ieu soi de Brasil, de São Paulo. Ieu ai un fraire e una sòrre.",
    reference: "Adieu! M'apèli Bruno e soi de Brasil, de São Paulo. Ai un fraire e una sòrre.",
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Descriu ton ostal.',
    content: 'Mia ostal es pichon, e ai un gat.',
    reference: 'Mon ostal es pichon, e ai un gat.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Qué aimas beure lo matin?',
    content: 'Aimi de cafè amb lach lo matin.',
    reference: 'Aimi lo cafè amb lach lo matin.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_OC: ScenarioSeed[] = [
  {
    id: 'oc-s1',
    title: 'Cafè amb una amiga novèla a Tolosa',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Sabina, una amiga del cors d\'occitan',
    description: 'Sabina te convida per un cafè a Tolosa. É informal, entre amigas: use «tu», nunca um tratamento formal.',
    turns: [
      {
        bot: 'Adieu! Qué vòles beure?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafè', 'vòli', 'aiga', 'lach'],
        suggestions: ['Un cafè amb lach, se vos plai.', 'Per ieu, aiga.'],
        registerBreakers: ['vòstre', 'madama'],
      },
      {
        bot: "E ara, d'ont siás?",
        botTranslation: 'E agora, de onde você é?',
        keywords: ['soi de', 'brasil'],
        suggestions: ['Soi de Brasil.', 'Soi de São Paulo, en Brasil.'],
      },
    ],
  },
];

/** Palavras cognatas do occitano com o português, mostrando a raiz e os parentes. */
export const ETYMOLOGY_OC: EtymologySeed[] = [
  {
    word: 'aiga',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['es', 'agua'], ['ca', 'aigua'], ['it', 'acqua'], ['fr', 'eau']),
    evolution_note: 'Do latim «aqua», o occitano perdeu o q e manteve o grupo -gu-, quase como o português antigo — e como o catalão «aigua», seu parente mais próximo.',
    transparent: true,
  },
  {
    word: 'maire',
    root_word: 'matrem',
    origin_language: 'Latim',
    cognates: c(['pt', 'mãe'], ['es', 'madre'], ['ca', 'mare'], ['it', 'madre']),
    evolution_note: 'De «matrem», o occitano perdeu o -t- entre vogais, como o português, mas manteve a terminação -e, enquanto o português foi por outro caminho fonético até «mãe».',
    transparent: false,
  },
  {
    word: 'vin',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['es', 'vino'], ['ca', 'vi'], ['it', 'vino'], ['fr', 'vin']),
    evolution_note: 'De «vinum», quase idêntico ao francês «vin»; o português acrescentou o -ho final que o occitano nunca teve.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_OC: [string, string][] = [
  ['Cossí vas uèi?', 'Como você está hoje?'],
  ['Cossí es ta familha?', 'Como é sua família?'],
  ['Qué aimas manjar e beure?', 'O que você gosta de comer e beber?'],
  ['Cossí es ton ostal?', 'Como é sua casa?'],
];

export const SHADOWING_OC: [string, string][] = [
  ["Adieu! M'apèli Ana, e soi de Brasil.", 'Oi! Eu me chamo Ana, e sou do Brasil.'],
  ['Va plan, mercé! E tu?', 'Vou bem, obrigado! E você?'],
  ['Ai un fraire e una sòrre.', 'Tenho um irmão e uma irmã.'],
  ['Aimi fòrça lo cafè amb lach.', 'Eu gosto muito do café com leite.'],
];
