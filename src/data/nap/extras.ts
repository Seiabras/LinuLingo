import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no napolitano). */
export const COMMUNITY_NAP: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tiene frate o sora?',
    content: 'Ij’ aggio un frate e una sora.',
    reference: 'Ij’ aggio nu frate e ’na sora.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Che magne la matina?',
    content: 'Ij’ magno pane e formaggio.',
    reference: 'Ij’ magno pane e caso.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Comme è ’a casa toja?',
    content: '’A casa mia è piccerillo.',
    reference: '’A casa mia è piccerella.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_NAP: ScenarioSeed[] = [
  {
    id: 'nap-s1',
    title: 'Nu cafè a Napule',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Rosa, ’na amica napulitana',
    description: 'Rosa convida você para um café numa rua de Nápoles. É uma conversa entre amigos: use “tu”.',
    turns: [
      {
        bot: 'Ué! Che vuò vevere?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cafè', 'acqua', 'latte'],
        suggestions: ['Nu cafè, pe’ piacere.', 'Ll’acqua, pe’ piacere.'],
      },
      {
        bot: 'Tu sî ’e addò?',
        botTranslation: 'Você é de onde?',
        keywords: ['so’ ’e'],
        suggestions: ['So’ ’e Sàn Paulo.', 'So’ ’e Salvador.'],
      },
    ],
  },
];

/** Palavras do napolitano com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_NAP: EtymologySeed[] = [
  {
    word: '’o caso',
    root_word: 'caseus',
    origin_language: 'Latim',
    cognates: c(['pt', 'queijo'], ['es', 'queso'], ['it', 'formaggio (outra raiz: formaticum)']),
    evolution_note: 'O napolitano guardou o latim “caseus” quase intacto, como o espanhol “queso” e o português “queijo” — diferente do italiano padrão, que trocou pra “formaggio” (de “formaticum”, queijo moldado em forma).',
    transparent: false,
  },
  {
    word: '’o pane',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['it', 'pane'], ['es', 'pan'], ['fr', 'pain']),
    evolution_note: 'Do latim “panis”, quase sem mudança — assim como no italiano e no espanhol.',
    transparent: true,
  },
  {
    word: 'quanno',
    root_word: 'quando',
    origin_language: 'Latim',
    cognates: c(['pt', 'quando'], ['it', 'quando'], ['es', 'cuando']),
    evolution_note: 'O grupo latino “-nd-” assimilou pra “-nn-” no napolitano: “quando” → “quanno”. A mesma mudança aparece em “munno” (mundo, de “mundus”).',
    transparent: true,
  },
  {
    word: 'ammore',
    root_word: 'amor(em)',
    origin_language: 'Latim',
    cognates: c(['pt', 'amor'], ['it', 'amore'], ['es', 'amor']),
    evolution_note: 'Do latim “amorem”, com a consoante dobrada típica do napolitano depois da vogal tônica.',
    transparent: true,
  },
  {
    word: '’a casa',
    root_word: 'casa',
    origin_language: 'Latim',
    cognates: c(['pt', 'casa'], ['it', 'casa'], ['es', 'casa']),
    evolution_note: 'A mesma palavra latina “casa” (choupana, casa simples) que o português e o espanhol guardaram sem grandes mudanças.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_NAP: [string, string][] = [
  ['Comme staje ogge?', 'Como você está hoje?'],
  ['Parlame d’ ’a famiglia toja.', 'Fale da sua família.'],
  ['Che te piace magnà e vevere?', 'O que você gosta de comer e beber?'],
  ['Comme è ’a casa toja?', 'Como é a sua casa?'],
];

export const SHADOWING_NAP: [string, string][] = [
  ['Ué! Ij’ songo Ana.', 'Oi! Eu sou a Ana.'],
  ['Buono, grazie! E tu?', 'Bem, obrigado! E você?'],
  ['Aggio nu frate e ’na sora.', 'Tenho um irmão e uma irmã.'],
  ['Nun saccio.', 'Não sei.'],
];
