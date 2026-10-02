import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Extras do kalaallisut: textos da comunidade, cenário, etimologias, temas do diário e shadowing.
 * Fontes: ver cabeçalhos de vocabulario.ts e gramatica.ts. As etimologias cruzadas com outras línguas
 * vêm do English Wiktionary (verbetes qajaq, illu/igloo, ateq/ateqarpoq, aalisagaq, tuttu/caribou).
 */

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo kalaallisut). */
export const COMMUNITY_KL: CommunitySeed[] = [
  {
    author_name: 'Rafael 🇧🇷',
    prompt: 'O que você bebe de manhã?',
    content: 'Imaq!',
    reference: 'Imeq!',
  },
  {
    author_name: 'Juliana 🇧🇷',
    prompt: 'Qanoq ippit?',
    content: 'Ajunngilaq, qujanaq.',
    reference: 'Ajunngilanga, qujanaq.',
  },
  {
    author_name: 'Thiago 🇧🇷',
    prompt: 'Que bicho é esse (apontando pra um cachorro de trenó)?',
    content: 'Nanoq!',
    reference: 'Qimmeq!',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_KL: ScenarioSeed[] = [
  {
    id: 'kl-s1',
    title: 'Naapineq Nuummi',
    emoji: '🏔️',
    cefr: 'A1',
    register: 'informal',
    persona: 'Anda, uma colega da Groenlândia',
    description: 'Anda encontra você em Nuuk e puxa conversa. É uma conversa informal entre colegas.',
    turns: [
      {
        bot: 'Aluu! Qanoq ippit?',
        botTranslation: 'Oi! Como vai?',
        keywords: ['ajunngilanga', 'qujanaq'],
        suggestions: ['Ajunngilanga, qujanaq! Illimmi qanoq ippit?'],
      },
      {
        bot: "Takuss'!",
        botTranslation: 'Até mais!',
        keywords: ['takuss', 'baj', 'qujanaq'],
        suggestions: ["Takuss'!", 'Qujanaq, baj!'],
      },
    ],
  },
];

/** Palavras do kalaallisut com a raiz/formação e os parentes noutras línguas (quando existem). */
export const ETYMOLOGY_KL: EtymologySeed[] = [
  {
    word: 'qajaq',
    root_word: '*qayaq',
    origin_language: 'Proto-inuíte',
    cognates: c(['pt', 'caiaque'], ['en', 'kayak'], ['da', 'kajak']),
    evolution_note: 'Do proto-inuíte “*qayaq” (barco, caiaque), vindo do proto-esquimó “*qayaʀ”. Foi pro dinamarquês como “kajak” e dali se espalhou pra quase toda língua europeia — inclusive o português “caiaque” e o inglês “kayak” vêm, no fim das contas, desta palavra groenlandesa/inuíte.',
    transparent: true,
  },
  {
    word: 'illu',
    root_word: '*əɣlu',
    origin_language: 'Proto-inuíte',
    cognates: c(['pt', 'iglu'], ['en', 'igloo']),
    evolution_note: 'Do proto-inuíte “*əɣlu” (casa, construção de qualquer tipo), do proto-esquimó “*əŋlu”. O inglês “igloo” não vem direto do “illu” groenlandês: veio do inuktitut canadense “iglu” (mesma raiz, “casa”) — as duas palavras são primas, descendentes do mesmo ancestral comum.',
    transparent: true,
  },
  {
    word: 'ateq',
    root_word: '*atəʁ',
    origin_language: 'Proto-esquimó',
    cognates: [],
    evolution_note: 'Do proto-esquimó “*atəʁ” (nome). Dentro do próprio kalaallisut, “ateq” mais o sufixo “-qar-” (ter) forma “ateqarpoq” (tem nome, chama-se) — o mesmo tipo de sufixo “ter” que aparece em “nunaqarpunga” (tenho terra = moro).',
    transparent: false,
  },
  {
    word: 'aalisagaq',
    root_word: 'aalisarpoq + -gaq',
    origin_language: 'Formação interna do kalaallisut',
    cognates: [],
    evolution_note: 'Não vem de fora: nasce dentro do próprio kalaallisut, do verbo “aalisarpoq” (pescar) mais o sufixo “-gaq” (particípio passivo, “o que foi feito”). “Aalisagaq” é literalmente “o que foi pescado” — ou seja, peixe.',
    transparent: false,
  },
  {
    word: 'tuttu',
    root_word: '*tuktu',
    origin_language: 'Proto-inuíte',
    cognates: [],
    evolution_note: 'Do proto-inuíte “*tuktu” (rena, caribu), do proto-esquimó “*tuŋtu” — uma raiz comum a todas as línguas inuítes. Curiosamente, a palavra portuguesa e inglesa “caribu/caribou” não vem daqui: veio do francês canadense, que pegou emprestado do mi’kmaq “qalipu”, uma língua algonquina sem parentesco com o kalaallisut.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_KL: [string, string][] = [
  ['Qanoq ippit?', 'Como você está?'],
  ['Qanoq ateqarpit?', 'Qual é o seu nome?'],
  ['Suminngaaneerpit?', 'De onde você é?'],
  ['Ajunngilanga, qujanaq. Illimmi qanoq ippit?', 'Estou bem, obrigado(a). E você, como vai?'],
];

export const SHADOWING_KL: [string, string][] = [
  ['Aluu! Qanoq ippit?', 'Oi! Como vai?'],
  ['Ajunngilanga, qujanaq.', 'Estou bem, obrigado(a).'],
  ['Qujanarujussuaq!', 'Muito obrigado(a) mesmo!'],
  ['Kalaallit Nunaanni nunaqarpunga.', 'Eu moro na Groenlândia.'],
];
