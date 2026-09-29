import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no esloveno). */
export const COMMUNITY_SL: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Tvoje ime, tvoje mesto in tvoja družina.',
    content: 'Živjo! Jaz sem se imenujem Bruno in jaz sem od Curitiba. Jaz imam en brat.',
    reference: 'Živjo! Ime mi je Bruno in sem iz Curitibe. Imam brata.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kaj ješ za zajtrk?',
    content: 'Jaz jem kruh in sir in pijem kava.',
    reference: 'Jem kruh in sir in pijem kavo.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Kakšna je tvoja hiša?',
    content: 'Moj hiša je majhen.',
    reference: 'Moja hiša je majhna.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_SL: ScenarioSeed[] = [
  {
    id: 'sl-s1',
    title: 'Na kavi v Ljubljani',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Nina, sošolka s tečaja slovenščine',
    description: 'Nina convida você para um café à beira do rio, em Liubliana. É uma conversa entre colegas: use «ti».',
    turns: [
      {
        bot: 'Živjo! Kaj boš pil?',
        botTranslation: 'Oi! O que você vai beber?',
        keywords: ['kavo', 'vodo', 'čaj'],
        suggestions: ['Kavo, prosim.', 'Vodo, prosim.'],
      },
      {
        bot: 'Od kod si?',
        botTranslation: 'De onde você é?',
        keywords: ['iz'],
        suggestions: ['Sem iz São Paula.', 'Sem iz Curitibe.'],
      },
    ],
  },
];

/** Palavras do esloveno com a raiz e os parentes em outras línguas. */
export const ETYMOLOGY_SL: EtymologySeed[] = [
  {
    word: 'brat',
    root_word: '*bratrъ',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'frater'], ['en', 'brother'], ['ru', 'брат'], ['pt', 'frade, fraterno']),
    evolution_note: 'A mesma palavra indo-europeia deu «frater» em latim (daí «fraterno» e «frade») e «brother» em inglês.',
    transparent: false,
  },
  {
    word: 'sestra',
    root_word: '*sestra',
    origin_language: 'Protoeslavo',
    cognates: c(['la', 'soror'], ['en', 'sister'], ['de', 'Schwester'], ['pt', 'sororidade']),
    evolution_note: 'Vem da palavra indo-europeia para «irmã», a mesma do latim «soror» e do inglês «sister». O português a guardou em palavras cultas, como «sororidade».',
    transparent: false,
  },
  {
    word: 'voda',
    root_word: '*voda',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'вода'], ['en', 'water'], ['de', 'Wasser'], ['pt', 'hidro- (do grego hýdōr)']),
    evolution_note: 'Vem da mesma raiz indo-europeia do inglês «water» e do grego «hýdōr», que o português conhece em «hidráulica» e «hidratar».',
    transparent: false,
  },
  {
    word: 'tri',
    root_word: '*tri',
    origin_language: 'Protoeslavo',
    cognates: c(['pt', 'três'], ['la', 'tres'], ['ru', 'три'], ['en', 'three']),
    evolution_note: 'Os números baixos são dos parentescos mais fáceis de ver: «tri», «três» e «three» vêm todos do indo-europeu.',
    transparent: true,
  },
  {
    word: 'mleko',
    root_word: '*melko',
    origin_language: 'Protoeslavo',
    cognates: c(['ru', 'молоко'], ['pl', 'mleko'], ['cs', 'mléko']),
    evolution_note: 'Nas línguas eslavas do sul e do oeste, o grupo antigo «el» entre consoantes virou «le» (mleko); nas do leste, virou «olo» (молоко́). É um dos jeitos mais fáceis de reconhecer de que ramo vem uma palavra eslava.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_SL: [string, string][] = [
  ['Kako si danes?', 'Como você está hoje?'],
  ['Povej mi o svoji družini.', 'Me conte da sua família.'],
  ['Kaj rad ješ in piješ?', 'O que você gosta de comer e de beber?'],
  ['Kakšna je tvoja hiša?', 'Como é a sua casa?'],
];

export const SHADOWING_SL: [string, string][] = [
  ['Živjo! Ime mi je Ana.', 'Oi! Eu me chamo Ana.'],
  ['Dobro, hvala! Pa ti?', 'Bem, obrigado! E você?'],
  ['Imam brata in sestro.', 'Tenho um irmão e uma irmã.'],
  ['Ne vem.', 'Eu não sei.'],
];
