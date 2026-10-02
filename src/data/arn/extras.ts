import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo mapudungún). */
export const COMMUNITY_ARN: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: '¿Chumleymi?',
    content: 'Bien, kafey.',
    reference: 'Kümelen, kafey.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Mari mari!',
    content: 'Mari mari, amigo!',
    reference: 'Mari mari, lamngen!',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Iñche nien kiñe ruka. ¿Eymi?',
    content: 'Iñche nien una ruka.',
    reference: 'Iñche nien kiñe ruka.',
  },
];

/**
 * Cenário de conversa. As fontes consultadas não confirmam uma forma de tratamento “formal” separada
 * de “eymi” (você) — por isso o cenário fica como informal, como os outros pacotes indígenas deste
 * app (tpj, tca).
 */
export const SCENARIOS_ARN: ScenarioSeed[] = [
  {
    id: 'arn-s1',
    title: 'Mari mari ta Temuko mew',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Lamngen, colega de curso de mapudungún',
    description: 'Você encontra Lamngen num curso de mapudungún e troca as primeiras palavras.',
    turns: [
      {
        bot: '¡Mari mari! ¿Chumleymi?',
        botTranslation: 'Olá! Como você está?',
        keywords: ['kümelen'],
        suggestions: ['Kümelen, kafey.'],
      },
      {
        bot: 'Iñche nien kiñe ruka. ¿Eymi kafey?',
        botTranslation: 'Eu tenho uma casa. Você também?',
        keywords: ['kafey', 'nien'],
        suggestions: ['Iñche kafey nien kiñe ruka.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras mapudungún. Como a língua é tratada aqui como isolada (ver a nota em
 * `incomplete.note`, em index.ts), não há cognatos com o português: as notas abaixo olham para dentro
 * da própria língua (a composição de palavras) ou para o sentido inverso, de palavras mapudungún que
 * entraram no espanhol.
 */
export const ETYMOLOGY_ARN: EtymologySeed[] = [
  {
    word: 'domo pichiche',
    root_word: 'domo + pichi + che',
    origin_language: 'Mapudungún',
    cognates: c(['pt', 'sem cognatos: o mapudungún é tratado aqui como língua isolada']),
    evolution_note:
      '“Domo pichiche” (menina) é literalmente “mulher” (domo) + “pequeno-pessoa” (pichiche, que por sua vez já é “pichi”, pequeno, + “che”, pessoa). A Wikipédia em português usa exatamente este par (“wentru pichiche”/“domo pichiche”) para explicar que o mapudungún não marca gênero gramaticalmente: o gênero aparece no léxico, numa palavra separada, não numa terminação.',
    transparent: false,
  },
  {
    word: 'wentru pichiche',
    root_word: 'wentru + pichi + che',
    origin_language: 'Mapudungún',
    cognates: c(['pt', 'sem cognatos: o mapudungún é tratado aqui como língua isolada']),
    evolution_note:
      'O par de “domo pichiche”: “wentru pichiche” (menino) é “homem” (wentru) + “pequeno-pessoa” (pichiche). O mesmo “che” (pessoa) reaparece em “mapuche” (mapu + che, “gente da terra”), o próprio nome do povo.',
    transparent: false,
  },
  {
    word: 'che',
    root_word: 'che',
    origin_language: 'Mapudungún',
    cognates: c(['pt', 'sem cognatos: o mapudungún é tratado aqui como língua isolada']),
    evolution_note:
      '“Che” (pessoa, gente) é uma das raízes mais produtivas da língua: além de “pichiche” (criança) e “mapuche” (o nome do próprio povo, “gente da terra”), ela também aparece em nomes de grupos regionais como “pewenche” e “lafkenche” — sempre no sentido de “a gente de um lugar”.',
    transparent: false,
  },
  {
    word: 'pewen',
    root_word: 'pewen',
    origin_language: 'Mapudungún',
    cognates: c(['es', 'pehuén (empréstimo do mapudungún, confirmado pelo Wiktionary)']),
    evolution_note:
      '“Pewen” é a araucária (o pinheiro-do-chile), árvore sagrada para o povo pewenche (“a gente do pewen”). O espanhol do Chile e da Argentina emprestou a palavra quase sem mudança, como “pehuén” — um empréstimo na direção contrária da maioria das palavras deste curso, do mapudungún para o espanhol, não o caminho inverso.',
    transparent: false,
  },
  {
    word: 'lafken',
    root_word: 'lafken',
    origin_language: 'Mapudungún',
    cognates: c(['pt', 'sem cognatos: o mapudungún é tratado aqui como língua isolada']),
    evolution_note:
      '“Lafken” (mar, lago) é a raiz de “lafkenche”, “a gente da terra do mar” — um dos grandes grupos regionais mapuches, que vivia (e vive) perto da costa do Pacífico, em contraste com os “pewenche” das montanhas e os “williche” do sul.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_ARN: [string, string][] = [
  ['¿Chumleymi?', 'Como você está? Responda em mapudungún com “Kümelen” (estou bem).'],
  ['Iñche nien kiñe ruka.', 'E você: o que você tem? Complete com “Iñche nien kiñe…”.'],
  ['Kiñe, epu, küla, meli, kechu…', 'Conte até cinco em mapudungún: e você, até onde consegue contar?'],
  ['Kelü, karü, lig, kallfü, chod.', 'Essas são as cores da bandeira mapuche (Wenufoye): qual delas é a sua cor favorita?'],
];

export const SHADOWING_ARN: [string, string][] = [
  ['¡Mari mari, lamngen!', 'Olá, amigo(a)!'],
  ['Kümelen, kafey. ¿Eymi?', 'Estou bem, também. E você?'],
  ['Iñche nien kiñe ruka.', 'Eu tenho uma casa.'],
  ['Kiñe, epu, küla, meli, kechu.', 'Um, dois, três, quatro, cinco.'],
];
