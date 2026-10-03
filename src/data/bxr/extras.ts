import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros aprendendo buriato). */
export const COMMUNITY_BXR: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Ши хэн? Эндэ хэн байна?',
    content: 'Би эндэ байна. Сайн байна!',
    reference: 'Би эндэ байнаб. Һайн байна!',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Эндэ юун байна?',
    content: 'Эндэ загас байна.',
    reference: 'Эндэ загаһан байна.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Ши хэн?',
    content: 'Та Диего байна.',
    reference: 'Би Диего байнаб.',
  },
];

/**
 * Cenário informal: encontro com Сэсэг (nome que também é a palavra atestada para “flor”) perto de um
 * guer, só com saudação e apresentação, as únicas trocas de fala atestáveis com as fontes consultadas.
 */
export const SCENARIOS_BXR: ScenarioSeed[] = [
  {
    id: 'bxr-s1',
    title: 'Сэсэгтэй уулзалга',
    emoji: '👋',
    cefr: 'A1',
    register: 'informal',
    persona: 'Сэсэг, uma nova amiga perto de um guer, ao redor do lago Baikal',
    description: 'Um primeiro encontro informal: use “ши” (tu/você informal), não “та” (formal).',
    turns: [
      {
        bot: 'Һайн байна!',
        botTranslation: 'Olá! (lit. “está bem!”)',
        keywords: ['һайн', 'байна'],
        suggestions: ['Һайн байна!'],
      },
      {
        bot: 'Би Сэсэг байнаб. Ши хэн?',
        botTranslation: 'Eu sou a Сэсэг. Quem é você?',
        keywords: ['би', 'байнаб'],
        suggestions: ['Би ... байнаб.'],
      },
    ],
  },
];

/**
 * Etimologia de palavras buriatas. Diferente do pacote de mongol (mn), que mostra o parentesco do
 * mongol COM o buriato, aqui as cinco notas mostram o outro lado da mesma moeda: mudanças sonoras
 * regulares, documentadas nos verbetes do Wiktionary, que separam o buriato do mongol khalkha dentro
 * da própria família mongólica (ver também gramatica.ts, tópico “bxr-g4”).
 */
export const ETYMOLOGY_BXR: EtymologySeed[] = [
  {
    word: 'һайн',
    root_word: '*sayin (proto-mongólico)',
    origin_language: 'Proto-mongólico',
    cognates: c(['mn', 'сайн']),
    evolution_note:
      'O Wiktionary classifica “һайн” como doublet (par histórico) do cirílico “сайн”, a forma do mongol khalkha: as duas vêm do mesmo “*sayin” proto-mongólico, mas o *s inicial virou һ (um “h” aspirado) no buriato, enquanto o khalkha manteve o с.',
    transparent: false,
  },
  {
    word: 'загаһан',
    root_word: 'raiz proto-mongólica de “peixe”',
    origin_language: 'Proto-mongólico',
    cognates: c(['mn', 'загас']),
    evolution_note:
      'O buriato “загаһан” e o khalkha “загас” vêm da mesma raiz: o с do meio da palavra virou һ no buriato, a mesma mudança *s→һ que aparece em “һайн”/“сайн”.',
    transparent: false,
  },
  {
    word: 'һара',
    root_word: '*sara (proto-mongólico)',
    origin_language: 'Proto-mongólico',
    cognates: c(['mn', 'сар']),
    evolution_note:
      'O Wiktionary deriva “һара” (lua) do proto-mongólico “*sara”, cognato do khalkha “сар” — mais um caso do *s inicial que virou һ só no buriato.',
    transparent: false,
  },
  {
    word: 'сагаан',
    root_word: '*cagaxan (proto-mongólico)',
    origin_language: 'Proto-mongólico',
    cognates: c(['mn', 'цагаан']),
    evolution_note:
      'Já “сагаан” (branco) mostra uma mudança DIFERENTE da anterior: o proto-mongólico “*cagaxan” tinha uma africada (*c), que virou с no buriato e ц no khalkha “цагаан” — por isso o buriato tem с onde se esperaria o mesmo som do khalkha.',
    transparent: false,
  },
  {
    word: 'морин',
    root_word: '*morïn (proto-mongólico)',
    origin_language: 'Proto-mongólico',
    cognates: c(['mn', 'морь']),
    evolution_note:
      'O buriato “морин” conserva o -н final do proto-mongólico “*morïn”, que o khalkha “морь” apagou — a mesma conservação aparece no numeral “нэгэн” (um), cognato do khalkha “нэг”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_BXR: [string, string][] = [
  ['Ши хэн?', 'Quem é você? (apresente-se com “Би ... байнаб.”)'],
  ['Эндэ юун байна?', 'O que há aqui? (descreva o que você vê ao redor)'],
  ['Ши һайн байна?', 'Você está bem? (responda com “һайн” ou “муу”)'],
  ['Эндэ хэн байна?', 'Quem está aqui? (fale da família: аба, эжы, басаган, нүхэр)'],
];

export const SHADOWING_BXR: [string, string][] = [
  ['Һайн байна!', 'Olá! (lit. “está bem!”)'],
  ['Би ... байнаб.', 'Eu sou/estou ... (modelo para se apresentar)'],
  ['Баярлаа.', 'Obrigado(a). (forma verbal atestada de “баярлаха”, alegrar-se)'],
  ['Эндэ гэр байна.', 'Há uma casa/guer aqui.'],
];
