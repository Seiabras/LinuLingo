import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no abecásio). */
export const COMMUNITY_AB: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Уара иухьӡузеи?',
    content: 'Сара истахуп.',
    reference: 'Сара Лину сыхӡуп.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Ушҧаҟоу?',
    content: 'Ача.',
    reference: 'Итабуп ибзианы.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: '(falando com uma mulher) … ибыхьӡузеи?',
    content: 'Уара ибыхьӡузеи?',
    reference: 'Бара ибыхьӡузеи?',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_AB: ScenarioSeed[] = [
  {
    id: 'ab-s1',
    title: 'Бзиа збаша, на Abecásia',
    emoji: '🏔️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Асида, uma amiga da Abecásia',
    description: 'Асида te recebe e pergunta seu nome e como você está. É uma conversa curta e informal.',
    turns: [
      {
        bot: 'Бзиа збаша! Ушҧаҟоу?',
        botTranslation: 'Oi! Como vai?',
        keywords: ['Бзиа збаша', 'Итабуп'],
        suggestions: ['Бзиа збаша! Итабуп ибзианы.'],
      },
      {
        bot: 'Бара ибыхьӡузеи?',
        botTranslation: 'Qual é o seu nome?',
        keywords: ['Сара', 'сыхӡуп'],
        suggestions: ['Сара Лину сыхӡуп.'],
      },
      {
        bot: 'Абзиараз!',
        botTranslation: 'Tchau!',
        keywords: ['Абзиараз'],
        suggestions: ['Абзиараз!'],
      },
    ],
  },
];

/** Palavras do abecásio com a origem real. */
export const ETYMOLOGY_AB: EtymologySeed[] = [
  {
    word: 'аб',
    root_word: 'аб',
    origin_language: 'Abecásio-adigue (herdada)',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'O Wikcionário em russo marca a etimologia de “аб” (pai) como vinda do vocabulário abecásio-adigue comum — ou seja, uma palavra antiga, compartilhada desde antes de o abecásio e o adigue se separarem como línguas diferentes, não um empréstimo recente de nenhuma das duas.',
    transparent: false,
  },
  {
    word: 'амца',
    root_word: 'амца',
    origin_language: 'Abecásio, palavra nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      '“Амца” (fogo) entra em palavras compostas para conceitos modernos: “eletricidade” é “афымца”, a junção de “афы” (relâmpago) com “амца” (fogo) — “fogo-relâmpago”. É um exemplo direto de como o abecásio prefere compor palavras já existentes a criar uma raiz nova para cada ideia.',
    transparent: false,
  },
  {
    word: 'сара',
    root_word: 'са- + -ара',
    origin_language: 'Abecásio, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'Os pronomes independentes do abecásio compartilham a terminação “-ара”: “сара” (eu), “уара”/“бара” (tu/você) e “ҳара” (nós) são todos “[marca de pessoa] + ара” — a mesma peça se repete em cada pronome, só muda a marca de pessoa no início.',
    transparent: false,
  },
  {
    word: 'сыхӡуп',
    root_word: 'сы- + -хьӡ- (“nome”) + -уп',
    origin_language: 'Abecásio, formação nativa',
    cognates: c(['pt', 'sem cognato']),
    evolution_note:
      'As três formas de perguntar e responder o nome compartilham a mesma peça no meio, “хьӡ” (a raiz de “nome”): “сыхӡуп” (eu me chamo), “иухьӡузеи” (qual é o seu nome, a um homem) e “ибыхьӡузеи” (a uma mulher) — o que muda em cada uma é só o prefixo de pessoa em volta dessa raiz comum.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_AB: [string, string][] = [
  ['Ушҧаҟоу?', 'Como você está hoje?'],
  ['Сара … сыхӡуп.', 'Apresente-se à sua maneira, com “Сара … сыхӡуп”.'],
  ['Сара истахуп…', 'O que você quer hoje? Escreva uma frase com “Сара истахуп”.'],
  ['Аӡы, амца…', 'Escreva sobre água ou fogo — o que eles significam para você hoje?'],
];

export const SHADOWING_AB: [string, string][] = [
  ['Бзиа збаша! Итабуп ибзианы.', 'Oi! Bem, obrigado.'],
  ['Сара Лину сыхӡуп.', 'Eu me chamo Linu.'],
  ['Уара иухьӡузеи?', 'Qual é o seu nome? (a um homem)'],
  ['Абзиараз!', 'Tchau!'],
];
