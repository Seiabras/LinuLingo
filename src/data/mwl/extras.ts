import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no mirandês). */
export const COMMUNITY_MWL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Qual ye l sou nome i adonde stá?',
    content: 'Eu ye Bruno i sou de Curitiba.',
    reference: 'Eu sou Bruno i sou de Curitiba.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Tenes armanos?',
    content: 'Si, tengo un armana.',
    reference: 'Si, tengo ua armana.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Cumo ye la tua casa?',
    content: 'La mie casa ye pequeinho.',
    reference: 'La mie casa ye pequeinha.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_MWL: ScenarioSeed[] = [
  {
    id: 'mwl-s1',
    title: 'Ne la praça de Miranda',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ana, ua amiga de Miranda',
    description: 'Ana encontra você na praça de Miranda de l Douro. É uma conversa entre amigos: use “tu”.',
    turns: [
      {
        bot: 'Oulá! Qual ye l sou nome?',
        botTranslation: 'Oi! Qual é o seu nome?',
        keywords: ['eu sou'],
        suggestions: ['Eu sou Ana.', 'Eu sou Lucia.'],
      },
      {
        bot: 'Adonde stá?',
        botTranslation: 'De onde você é?',
        keywords: ['eu sou de'],
        suggestions: ['Eu sou de San Paulo.', 'Eu sou de Salvador.'],
      },
    ],
  },
];

/** Palavras do mirandês com a raiz latina e os parentes nas línguas irmãs. */
export const ETYMOLOGY_MWL: EtymologySeed[] = [
  {
    word: 'lheite',
    root_word: 'lacte(m)',
    origin_language: 'Latim',
    cognates: c(['pt', 'leite'], ['es', 'leche'], ['ast', 'lleche'], ['fr', 'lait']),
    evolution_note: 'Do latim “lacte(m)”, com o grupo “-ct-” virando “it” no português (leite), “ch” no espanhol (leche) e “lh” no mirandês (lheite) — cada língua ibérica resolveu esse som de um jeito.',
    transparent: true,
  },
  {
    word: 'pan',
    root_word: 'panis',
    origin_language: 'Latim',
    cognates: c(['pt', 'pão'], ['es', 'pan'], ['ast', 'pan'], ['fr', 'pain']),
    evolution_note: 'Do latim “panis”, quase sem mudança no mirandês, no espanhol e no asturiano; o português nasalizou a vogal final até virar “pão”.',
    transparent: true,
  },
  {
    word: 'auga',
    root_word: 'aqua',
    origin_language: 'Latim',
    cognates: c(['pt', 'água'], ['es', 'agua'], ['ast', 'agua'], ['fr', 'eau']),
    evolution_note: 'Do latim “aqua”, com o “-qu-” enfraquecido, como em quase todas as línguas românicas vizinhas.',
    transparent: true,
  },
  {
    word: 'armano',
    root_word: 'germanus',
    origin_language: 'Latim',
    cognates: c(['es', 'hermano'], ['ast', 'hermanu'], ['pt', 'irmão (de germanus pela via diferente)']),
    evolution_note: 'Do latim “germanus” (irmão de sangue), como o espanhol “hermano” e o asturiano “hermanu” — mas o mirandês perdeu o “h” inicial, enquanto o português preferiu a forma “irmão”, de outra raiz latina (“frater” misturado a “germanus” por caminhos distintos).',
    transparent: false,
  },
  {
    word: 'ser',
    root_word: 'sedere / esse',
    origin_language: 'Latim',
    cognates: c(['pt', 'ser'], ['es', 'ser'], ['ast', 'ser']),
    evolution_note: 'O verbo ser do mirandês, do espanhol e do asturiano vem da mistura de dois verbos latinos, “esse” (ser) e “sedere” (estar sentado) — a mesma mistura que deu o português “ser”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_MWL: [string, string][] = [
  ['Cumo stá hoije?', 'Como você está hoje?'],
  ['Fale de la sue família.', 'Fale da sua família.'],
  ['Qual ye la sue cidade?', 'Qual é a sua cidade?'],
  ['Cumo ye la sue casa?', 'Como é a sua casa?'],
];

export const SHADOWING_MWL: [string, string][] = [
  ['Buonos dies! Eu sou Ana.', 'Bom dia! Eu sou Ana.'],
  ['Bien, oubrigado! I tu?', 'Bem, obrigado! E você?'],
  ['Tengo un armano i ua armana.', 'Tenho um irmão e uma irmã.'],
  ['La mie casa ye pequeinha.', 'A minha casa é pequena.'],
];
