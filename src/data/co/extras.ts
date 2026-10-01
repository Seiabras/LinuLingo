import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no corso). */
export const COMMUNITY_CO: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'U to nome, a to cità è a to famiglia.',
    content: 'Bonghjornu! Eiu mi chamo Bruno è sò di Curitiba. Aghju un fratello.',
    reference: 'Bonghjornu! Mi chjamu Bruno è sò di Curitiba. Aghju un fratellu.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Chì manghji a mattina?',
    content: 'Manghju pane è formaggio.',
    reference: 'Manghju pane è casgiu.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Cumu hè a to casa?',
    content: 'A mio casa hè chjucu.',
    reference: 'A mio casa hè chjuca.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_CO: ScenarioSeed[] = [
  {
    id: 'co-s1',
    title: 'Un caffè in Bastia',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anna, una amica di u corsu',
    description: 'Anna convida você para um café no porto de Bastia. É uma conversa entre amigos: use «tù».',
    turns: [
      {
        bot: 'Bonghjornu! Chì voli bìa?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['caffè', 'acqua', 'latte'],
        suggestions: ['Un caffè, per piacè.', 'Un bichjeru d’acqua, per piacè.'],
      },
      {
        bot: 'Di induve sì?',
        botTranslation: 'De onde você é?',
        keywords: ['sò di'],
        suggestions: ['Sò di San Paulu.', 'Sò di Salvador.'],
      },
    ],
  },
];

/** Palavras do corso com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_CO: EtymologySeed[] = [
  {
    word: 'casa',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['es', 'casa']),
    evolution_note: 'Veio direto do latim «casa», sem mudanças de som: o corso, como o italiano e o espanhol, conservou a palavra quase intacta.',
    transparent: true,
  },
  {
    word: 'latte',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['it', 'latte'], ['fr', 'lait'], ['es', 'leche']),
    evolution_note: 'O grupo latino -ct- virou -tt- no corso, como no italiano (latte), diferente do português (leite) e do espanhol (leche).',
    transparent: true,
  },
  {
    word: 'pane',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['it', 'pane'], ['fr', 'pain'], ['es', 'pan']),
    evolution_note: 'Do latim «panis», com a terminação -e mantida como no italiano, diferente do português, que perdeu a vogal final e nasalizou.',
    transparent: true,
  },
  {
    word: 'acqua',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['it', 'acqua'], ['fr', 'eau'], ['es', 'agua']),
    evolution_note: 'Do latim «aqua», praticamente sem mudança — o corso e o italiano mantiveram o grupo -qu- que o francês quase apagou (eau).',
    transparent: true,
  },
  {
    word: 'fratellu',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['it', 'fratello'], ['fr', 'frère'], ['ro', 'frate']),
    evolution_note: 'O corso guardou o latim «frater» para «irmão», como o italiano e o romeno; o português e o espanhol preferiram «germanus» (irmão, hermano) e deixaram «frater» só em palavras como «frade» e «fraterno».',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_CO: [string, string][] = [
  ['Cumu va oghje?', 'Como vai hoje?'],
  ['Parlami di a to famiglia.', 'Conte da sua família.'],
  ['Chì ti piace manghjà è bìa?', 'O que você gosta de comer e de beber?'],
  ['Cumu hè a to casa?', 'Como é a sua casa?'],
];

export const SHADOWING_CO: [string, string][] = [
  ['Bonghjornu! Mi chjamu Ana.', 'Bom dia! Eu me chamo Ana.'],
  ['Bè, grazie! È tù?', 'Bem, obrigado! E você?'],
  ['Aghju un fratellu è una surella.', 'Tenho um irmão e uma irmã.'],
  ['Ùn socu micca.', 'Eu não sei.'],
];
