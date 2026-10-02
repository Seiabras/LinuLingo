import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo navajo). */
export const COMMUNITY_NV: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Yáʼátʼééh!',
    content: 'Yaatahey!',
    reference: 'Yáʼátʼééh!',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Tʼááłáʼí, naaki, tááʼ, ___?',
    content: 'Tʼááłáʼí, naaki, tááʼ, ashdlaʼ.',
    reference: 'Tʼááłáʼí, naaki, tááʼ, dį́į́ʼ.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Haash yinilyé?',
    content: 'Shí yinishyé.',
    reference: 'Shí éí … yinishyé.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não confirmam uma distinção simples entre tratamento
 * formal e informal (como “tu”/“você”) em navajo — a formalidade aparece sobretudo no respeito ao
 * idoso e na escolha de verbos inteiros, não num pronome à parte — por isso o cenário fica como
 * informal, sem inventar um contraste que nenhuma fonte confirmou.
 */
export const SCENARIOS_NV: ScenarioSeed[] = [
  {
    id: 'nv-s1',
    title: 'Encontro na Nação Navajo',
    emoji: '🏜️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador diné da Nação Navajo',
    description: 'Você encontra um morador da Nação Navajo e troca as primeiras palavras em navajo.',
    turns: [
      {
        bot: 'Yáʼátʼééh!',
        botTranslation: 'Oi!',
        keywords: ['yáʼátʼééh'],
        suggestions: ['Yáʼátʼééh!'],
      },
      {
        bot: 'Łééchąąʼí. Łį́į́ʼ.',
        botTranslation: 'Um cachorro. Um cavalo.',
        keywords: ['ahéheeʼ'],
        suggestions: ['Ahéheeʼ!'],
      },
    ],
  },
];

/**
 * O navajo pertence à família na-dené, sem parentesco com o português: não há cognatos léxicos
 * (palavras de origem comum) entre as duas línguas. Por isso estas notas de etimologia olham para
 * dentro da própria língua, usando as análises morfema a morfema do próprio Wiktionary — em vez de
 * inventar um parentesco que não existe.
 */
export const ETYMOLOGY_NV: EtymologySeed[] = [
  {
    word: 'Diné',
    root_word: 'diné',
    origin_language: 'Navajo (proto-atabascano *dəneˑ)',
    cognates: c(['pt', 'sem cognatos: o navajo não é uma língua indo-europeia']),
    evolution_note:
      'Segundo o Wiktionary, “diné” vem do proto-atabascano *dəneˑ, de *di- (prefixo temático ligado a ações feitas com braços e pernas) mais *-né (“homem, pessoa”). A mesma raiz aparece em outras línguas atabascanas — “dëné” no chipewyan, “done” no dogrib, “dìná” no tsuutʼina — povos que, como os navajo, também se autodesignam simplesmente “o povo”.',
    transparent: false,
  },
  {
    word: 'Yáʼátʼééh',
    root_word: 'yáʼátʼééh',
    origin_language: 'Navajo',
    cognates: c(['pt', 'sem cognatos']),
    evolution_note:
      'O Wiktionary decompõe “yáʼátʼééh” em “yá-” (tema) mais “ʼá-” (comparativo) mais prefixos de modo e pessoa mais “-tʼééh” (tema verbal neutro, “ser bom”): a saudação navajo significa literalmente algo como “está bem”, mais perto de um “tudo bem?” do que de um “oi” sem conteúdo como no português.',
    transparent: false,
  },
  {
    word: 'Łį́į́ʼ',
    root_word: 'łį́į́ʼ',
    origin_language: 'Navajo',
    cognates: c(['pt', 'sem cognatos']),
    evolution_note:
      'Segundo o Wiktionary, “łį́į́ʼ” significava originalmente apenas “bicho de estimação” ou “cão”; quando o cavalo foi reintroduzido na América do Norte pelos colonizadores espanhóis, os navajo transferiram essa palavra para o novo animal favorito, que passou a significar especificamente “cavalo”.',
    transparent: false,
  },
  {
    word: 'Jóhonaaʼéí',
    root_word: 'jóhonaaʼéí',
    origin_language: 'Navajo',
    cognates: c(['pt', 'sem cognatos']),
    evolution_note:
      'O Wiktionary registra a etimologia de “jóhonaaʼéí” (sol) como “jį́įgo” (“durante o dia”) mais “naaʼá” (“um objeto sólido e arredondado se move em um espaço”) mais o nominalizador “-í” — literalmente algo como “o que se move pelo dia”, uma imagem bem diferente da palavra “sol”, que em português vem do latim “sol”.',
    transparent: false,
  },
  {
    word: 'Hooghan',
    root_word: 'hooghan',
    origin_language: 'Navajo',
    cognates: c(['pt', 'sem cognatos: o navajo não é uma língua indo-europeia'], ['en', 'hogan (empréstimo do navajo para o inglês)']),
    evolution_note:
      'O Wiktionary mostra aqui o caminho inverso de um empréstimo: a palavra inglesa “hogan” (a casa tradicional navajo, redonda ou poligonal, de madeira e terra) vem do navajo “hooghan”, de “ho-” (pronome dêitico de espaço) mais “-ghan” (tema verbal “morar, residir”) — um dos poucos casos documentados de uma palavra navajo que entrou no vocabulário de outra língua.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_NV: [string, string][] = [
  ['Haash yinilyé?', 'Qual é o seu nome? Como você se apresentaria usando “Shí éí … yinishyé”?'],
  ['Tʼááłáʼí, naaki, tááʼ, dį́į́ʼ, ashdlaʼ — ní?', 'Um, dois, três, quatro, cinco — e você, até quanto consegue contar em navajo?'],
  ['Łééchąąʼí, łį́į́ʼ, mósí — ní?', 'Cachorro, cavalo, gato — de qual bicho você mais gosta?'],
  ['Diné bizaad.', 'A língua do povo diné — e a sua própria língua materna, qual é a história dela?'],
];

export const SHADOWING_NV: [string, string][] = [
  ['Yáʼátʼééh! Ahéheeʼ!', 'Oi! Obrigado(a)!'],
  ['Tʼááłáʼí, naaki, tááʼ, dį́į́ʼ, ashdlaʼ.', 'Um, dois, três, quatro, cinco.'],
  ['Haash yinilyé? Shí éí … yinishyé.', 'Qual é o seu nome? Eu me chamo…'],
  ['Hágoóneeʼ!', 'Até logo!'],
];
