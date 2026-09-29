import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no sardo). */
export const COMMUNITY_SC: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Nomen, de inue ses e sa familia tua.',
    content: 'Bona die! Mi naro Bruno e sono de su Brasile. Apo un fratello.',
    reference: 'Bona die! Mi naro Bruno e so de su Brasile. Apo unu frade.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ite ti praghet de manigare?',
    content: 'Mi piace il pane e su casu.',
    reference: 'Mi praghet su pane e su casu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Comente est sa domo tua?',
    content: 'Mea domo est minore.',
    reference: 'Sa domo mea est minore.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SC: ScenarioSeed[] = [
  {
    id: 'sc-s1',
    title: 'Unu cafè in Casteddu',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Maria, una cumpagna de su cursu de sardu',
    description: 'Maria convida você para um café no centro de Cagliari. É uma conversa informal, entre amigos: use «tue».',
    turns: [
      {
        bot: 'Salude! Ite cheres?',
        botTranslation: 'Oi! O que você quer?',
        keywords: ['cafè', 'abba', 'late'],
        suggestions: ['Unu cafè, pro praghere.', 'Abba, pro praghere.'],
      },
      {
        bot: 'E de inue ses?',
        botTranslation: 'E de onde você é?',
        keywords: ['so de', 'brasile'],
        suggestions: ['So de su Brasile.', 'So de São Paulo, in su Brasile.'],
      },
    ],
  },
];

/** Palavras do sardo com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_SC: EtymologySeed[] = [
  {
    word: 'domo',
    root_word: 'domus',
    origin_language: 'Latim',
    cognates: c(['pt', 'doméstico'], ['it', 'duomo'], ['es', 'doméstico']),
    evolution_note: 'O sardo manteve «domus» (casa) como a palavra comum para casa, enquanto o português, o espanhol e o italiano usam «casa», do latim «casa» (cabana). Em português, «domus» só sobrevive em palavras cultas como «doméstico».',
    transparent: false,
  },
  {
    word: 'abba',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['es', 'agua'], ['ro', 'apă']),
    evolution_note: 'O grupo latino -qu- virou -bb- no sardo, assim como virou -p- no romeno (apă): as duas pontas da România chegaram a um som de lábios.',
    transparent: false,
  },
  {
    word: 'casu',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['pt', 'queijo'], ['es', 'queso'], ['it', 'cacio'], ['ro', 'caș']),
    evolution_note: 'Do latim «caseus», como o português «queijo» e o espanhol «queso»; o italiano usa mais «formaggio», mas guarda «cacio» na mesma raiz.',
    transparent: false,
  },
  {
    word: 'binu',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['it', 'vino'], ['es', 'vino'], ['fr', 'vin']),
    evolution_note: 'O v- latino virou b- no sardo, e o -o final virou -u, como em muitas palavras sardas (binu, bonu, fizu).',
    transparent: true,
  },
  {
    word: 'eja',
    root_word: 'etiam',
    origin_language: 'Latim',
    cognates: c(['it', 'già'], ['pt', 'já']),
    evolution_note: 'O «sim» sardo vem, segundo a explicação mais aceita, do latim «etiam» (também, ainda), da mesma raiz de «già» e «já».',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SC: [string, string][] = [
  ['Comente istas oe?', 'Como você está hoje?'],
  ['Ite mi contas de sa familia tua?', 'O que você me conta da sua família?'],
  ['Ite ti praghet de manigare e de buffare?', 'O que você gosta de comer e de beber?'],
  ['Comente est sa domo tua?', 'Como é a sua casa?'],
];

export const SHADOWING_SC: [string, string][] = [
  ['Bona die! Mi naro Ana e so de su Brasile.', 'Bom dia! Eu me chamo Ana e sou do Brasil.'],
  ['Isto bene, gràtzias! E tue?', 'Estou bem, obrigado! E você?'],
  ['Apo unu frade e una sorre.', 'Tenho um irmão e uma irmã.'],
  ['Mi praghet meda su casu sardu.', 'Eu gosto muito do queijo sardo.'],
];
