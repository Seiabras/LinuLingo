import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no francoprovençal). */
export const COMMUNITY_FRP: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Has-tu on frâre?',
    content: 'Ouè, je hai un frâre.',
    reference: 'Ouè, je hai on frâre.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Qué mengiês?',
    content: 'Je mangio pan.',
    reference: 'Je mengio pan.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Coment est ta mêson?',
    content: 'Ma mêson est petit.',
    reference: 'Ma mêson est petita.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_FRP: ScenarioSeed[] = [
  {
    id: 'frp-s1',
    title: 'On veiro a Genèva',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, ina amia',
    description: 'Ana convida você para beber algo no centro de Genebra. É uma conversa entre amigos: use “te”.',
    turns: [
      {
        bot: 'Bonjorn! Qué bêvês?',
        botTranslation: 'Oi! O que você bebe?',
        keywords: ['édye', 'vin'],
        suggestions: ['Je bêvo édye, se vos plai.', 'Je bêvo vin, se vos plai.'],
      },
      {
        bot: 'Te és de yô?',
        botTranslation: 'Você é de onde?',
        keywords: ['je su de'],
        suggestions: ['Je su de Sant-Pâblo.', 'Je su de Salvador.'],
      },
    ],
  },
];

/** Palavras do francoprovençal com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_FRP: EtymologySeed[] = [
  {
    word: 'mêson',
    root_word: 'mansio(nem)',
    origin_language: 'Latim',
    cognates: c(['pt', 'mansão'], ['fr', 'maison'], ['it', 'magione']),
    evolution_note: 'Do latim “mansio” (lugar onde se para), a mesma raiz do francês “maison” e do português “mansão” — o francoprovençal e o francês seguiram o mesmo caminho de som, diferente do português, que guardou a palavra só num sentido mais formal.',
    transparent: false,
  },
  {
    word: 'pan',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['fr', 'pain'], ['it', 'pane'], ['es', 'pan']),
    evolution_note: 'Do latim “panis”, praticamente igual em espanhol e muito parecido em todas as línguas românicas vizinhas.',
    transparent: true,
  },
  {
    word: 'édye',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['fr', 'eau'], ['it', 'acqua'], ['es', 'agua']),
    evolution_note: 'Do latim “aqua”, com o “-qu-” quase sumindo, parecido com o que aconteceu no francês “eau” — o francoprovençal ficou por um caminho sonoro bem diferente do português, que guardou mais do som original.',
    transparent: false,
  },
  {
    word: 'frâre',
    root_word: 'frater',
    origin_language: 'Latim',
    cognates: c(['pt', 'frade, fraterno'], ['fr', 'frère'], ['it', 'fratello'], ['ro', 'frate']),
    evolution_note: 'O francoprovençal guardou o latim “frater” para “irmão”, como o francês e o romeno; o português e o espanhol preferiram “germanus” (irmão, hermano) e deixaram “frater” só em “frade” e “fraterno”.',
    transparent: false,
  },
  {
    word: 'vin',
    root_word: 'vinum',
    origin_language: 'Latim',
    cognates: c(['pt', 'vinho'], ['fr', 'vin'], ['it', 'vino'], ['es', 'vino']),
    evolution_note: 'Do latim “vinum”, quase idêntico em francês; o português acrescentou o “h” na escrita, mas a raiz é a mesma em toda a família românica.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_FRP: [string, string][] = [
  ['Coment vas houé?', 'Como você está hoje?'],
  ['Qui est ta famelye?', 'Quem é a sua família?'],
  ['Qué mengiês et qué bêvês?', 'O que você come e bebe?'],
  ['Coment est ta mêson?', 'Como é a sua casa?'],
];

export const SHADOWING_FRP: [string, string][] = [
  ['Bonjorn! Je m’apèlo Ana.', 'Oi! Eu me chamo Ana.'],
  ['Bien, grant-marci! E tè?', 'Bem, obrigado! E você?'],
  ['Je hai on frâre.', 'Tenho um irmão.'],
  ['Je mengio pan et je bêvo édye.', 'Eu como pão e bebo água.'],
];
