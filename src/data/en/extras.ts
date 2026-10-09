import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no inglês). */
export const COMMUNITY_EN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Introduce yourself: name, origin and your family.',
    content: 'Hello! My name are Bruno and I is from Brazil, from São Paulo. I have one brother and one sister.',
    reference: 'Hello! My name is Bruno and I am from Brazil, from São Paulo. I have one brother and one sister.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Describe your house.',
    content: 'My house is small, has two rooms and a very cute cat.',
    reference: 'My house is small, it has two rooms and a very cute cat.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'What do you like to drink in the morning?',
    content: 'I like of coffee with milk in the morning.',
    reference: 'I like coffee with milk in the morning.',
  },
];

/** Cenários de conversa (registro formal/informal). */
export const SCENARIOS_EN: ScenarioSeed[] = [
  {
    id: 'en-s1',
    title: 'Coffee with a new friend in London',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Emma, colega do curso de inglês',
    description: 'Emma convida você para um café perto do centro de Londres. É informal, entre amigos.',
    turns: [
      {
        bot: 'Hi! What would you like to drink?',
        botTranslation: 'Oi! O que você gostaria de beber?',
        keywords: ['coffee', 'water', 'milk', 'tea'],
        suggestions: ['A coffee with milk, please.', 'Just water for me, please.'],
      },
      {
        bot: 'And tell me, where are you from?',
        botTranslation: 'E me conte, de onde você é?',
        keywords: ['i\'m from', 'brazil'],
        suggestions: ['I\'m from Brazil.', 'I\'m from São Paulo, in Brazil.'],
      },
    ],
  },
];

/** Palavras cognatas do inglês com o português, mostrando a raiz e os parentes. */
export const ETYMOLOGY_EN: EtymologySeed[] = [
  {
    word: 'family',
    root_word: 'familia',
    origin_language: 'Latim (via francês antigo)',
    cognates: c(['pt', 'família'], ['es', 'familia'], ['fr', 'famille'], ['it', 'famiglia']),
    evolution_note: 'Do latim “familia”, a palavra entrou no inglês pelo francês normando depois de 1066 — quase idêntica ao português, um dos muitos cognatos "eruditos" que vieram junto com a conquista normanda.',
    transparent: true,
  },
  {
    word: 'mother',
    root_word: '*mōdēr (proto-germânico) → mōdor (inglês antigo)',
    origin_language: 'Germânico',
    cognates: c(['de', 'Mutter'], ['nl', 'moeder'], ['sv', 'moder']),
    evolution_note: 'Palavra germânica nativa do inglês — “mōdor”, já no inglês antigo, vem do proto-germânico reconstruído “*mōdēr” — sem relação direta com o português “mãe” (que vem do latim “matre(m)”): mostra a camada germânica original, por baixo do vocabulário latino/francês que o inglês adotou depois.',
    transparent: false,
  },
  {
    word: 'coffee',
    root_word: 'qahwa (árabe) → kahve (turco) → koffie (holandês)',
    origin_language: 'Árabe, via turco e holandês',
    cognates: c(['pt', 'café'], ['fr', 'café'], ['it', 'caffè'], ['de', 'Kaffee']),
    evolution_note: 'A palavra viajou do árabe “qahwa” pelo turco “kahve” até o holandês “koffie”, que deu o inglês “coffee” e, por outro caminho semelhante, o português “café” — quase todas as línguas europeias têm a mesma raiz para essa bebida.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_EN: [string, string][] = [
  ['How are you today?', 'Como você está hoje?'],
  ['Tell me about your family.', 'Me conte sobre a sua família.'],
  ['What do you like to eat and drink?', 'O que você gosta de comer e beber?'],
  ['What is your house like?', 'Como é a sua casa?'],
];

export const SHADOWING_EN: [string, string][] = [
  ['Hello! My name is Ana, and I\'m from Brazil.', 'Oi! Meu nome é Ana, e eu sou do Brasil.'],
  ['I\'m fine, thanks! And you?', 'Estou bem, obrigado! E você?'],
  ['I have one brother and one sister.', 'Tenho um irmão e uma irmã.'],
  ['I like coffee with milk very much.', 'Eu gosto muito de café com leite.'],
];
