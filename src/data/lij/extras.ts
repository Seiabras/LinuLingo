import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no lígure). */
export const COMMUNITY_LIJ: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ti t’æ fræ ò seu?',
    content: 'Mi ho un fræ e üña seu.',
    reference: 'Mi ò un fræ e üña seu.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Cöse ti mangi a-a mattin-a?',
    content: 'Mi mangio fugassa e beivo cafè.',
    reference: 'Mi mangio fugassa e bevo cafè.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Comme a l’é a tò cà?',
    content: 'A mia cà a l’é piccino.',
    reference: 'Mia cà a l’é piccin-a.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_LIJ: ScenarioSeed[] = [
  {
    id: 'lij-s1',
    title: 'Un cafè a Zena',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, üña amiga do corso de lìgure',
    description: 'Ana convida você para um café no centro histórico de Gênova. É uma conversa entre amigos: use “ti”.',
    turns: [
      {
        bot: 'Ciao! Cöse ti veu beive?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafè', 'ægua', 'læte'],
        suggestions: ['Un cafè, per piaxei.', 'Üña ægua, per piaxei.'],
      },
      {
        bot: 'Ti ê de Zena?',
        botTranslation: 'Você é de Gênova?',
        keywords: ['mi son de'],
        suggestions: ['No, mi son de San Paolo.', 'No, mi son de Salvador.'],
      },
    ],
  },
];

/** Palavras do lígure com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_LIJ: EtymologySeed[] = [
  {
    word: 'cà',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['fr', 'chez']),
    evolution_note: 'Do latim “casa”, com a queda da consoante do meio e da vogal final, bem comum no lígure — por isso “casa” virou só “cà”, bem mais curto que no italiano.',
    transparent: true,
  },
  {
    word: 'ægua',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['fr', 'eau'], ['es', 'agua']),
    evolution_note: 'Do latim “aqua”, com o “-qu-” enfraquecido, parecido com o caminho do francês “eau”.',
    transparent: true,
  },
  {
    word: 'fugassa',
    root_word: 'focacia (de focus)',
    origin_language: 'Latim',
    cognates: c(['it', 'focaccia'], ['fr', 'fougasse'], ['pt', 'fogaça (doce tradicional português)']),
    evolution_note: 'Do latim “focus” (fogo, fogão): o pão assado perto do fogo deu “focacia” e depois “fugassa” em lígure, “focaccia” em italiano e “fougasse” em francês — todos parentes.',
    transparent: false,
  },
  {
    word: 'fræ',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['ro', 'frate']),
    evolution_note: 'O lígure guardou o latim “frater” para “irmão”, como o francês e o romeno; o português e o espanhol preferiram “germanus” (irmão, hermano) e deixaram “frater” só em “frade” e “fraterno”.',
    transparent: false,
  },
  {
    word: 'moæ',
    root_word: 'mater',
    origin_language: 'Latim',
    cognates: c(['pt', 'mãe, maternal'], ['it', 'madre'], ['fr', 'mère']),
    evolution_note: 'Do latim “mater”, com a consoante do meio caindo (um traço comum do lígure e do francês, que fez “mater” virar “mère”): o som ficou bem mais curto que o italiano “madre”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_LIJ: [string, string][] = [
  ['Comme ti stæ ancheu?', 'Como você está hoje?'],
  ['Parla de tò famiggia.', 'Conte da sua família.'],
  ['Cöse ti ammiri mangiâ e beive?', 'O que você gosta de comer e de beber?'],
  ['Comme a l’é tò cà?', 'Como é a sua casa?'],
];

export const SHADOWING_LIJ: [string, string][] = [
  ['Ciao! Mi acciammo Ana.', 'Oi! Eu me chamo Ana.'],
  ['Mi staggo ben, graçie! E ti?', 'Estou bem, obrigado! E você?'],
  ['Mi ò un fræ e üña seu.', 'Tenho um irmão e uma irmã.'],
  ['No sò ninte.', 'Não sei nada.'],
];
