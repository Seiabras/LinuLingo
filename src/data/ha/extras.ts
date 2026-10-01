import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no hauçá). */
export const COMMUNITY_HA: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Mi sunanka? Kana da ɗan’uwa ko ’yar’uwa?',
    content: 'Sunana Bruno. Ina ɗan’uwa.',
    reference: 'Sunana Bruno. Ina da ɗan’uwa.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Kai malami ne, ko ke malama ce?',
    content: 'Ni malami ne.',
    reference: 'Ni malama ce.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Mota: na Audu.',
    content: 'Motan Audu.',
    reference: 'Motar Audu.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_HA: ScenarioSeed[] = [
  {
    id: 'ha-s1',
    title: 'Shayi da Amina',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Amina, aboki daga ajin Hausa',
    description: 'Amina te convida para tomar chá. É uma conversa entre amigos: registro informal.',
    turns: [
      {
        bot: 'Sannu! Ruwa ko shayi?',
        botTranslation: 'Olá! Água ou chá?',
        keywords: ['ruwa', 'shayi'],
        suggestions: ['Shayi, don Allah.', 'Ruwa, don Allah.'],
      },
      {
        bot: 'Kana da ɗan’uwa ko ’yar’uwa?',
        botTranslation: 'Você tem irmão ou irmã?',
        keywords: ['ina da'],
        suggestions: ['Ina da ɗan’uwa.', 'Ina da ’yar’uwa.'],
      },
    ],
  },
];

/**
 * Palavras do hauçá que vieram do árabe — muitas chegaram com o islã, a partir do século XI.
 * Fontes: Wiktionary (etimologia de littafi, shayi, Lahadi, duniya e malami).
 */
export const ETYMOLOGY_HA: EtymologySeed[] = [
  {
    word: 'littafi',
    root_word: 'اَلْكِتَاب (al-kitāb)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'كِتَاب (kitāb, livro)'], ['sw', 'kitabu (livro, mesmo empréstimo árabe)']),
    evolution_note: '“Littafi” é um empréstimo muito antigo do árabe “al-kitāb” (o livro) — o mesmo que deu “kitabu” em suaíli. Curiosamente, embora não termine em “-a”, “littafi” é gramaticalmente feminino em hauçá, uma das irregularidades de gênero da língua.',
    transparent: false,
  },
  {
    word: 'shayi',
    root_word: 'شَاي (šāy)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'شَاي (šāy)'], ['pt', 'chá'], ['ru', 'чай (tchai)']),
    evolution_note: 'O árabe “šāy” e o português “chá” vêm, por rotas bem diferentes, da mesma palavra chinesa para a bebida: o árabe (e o hauçá, que pegou emprestado dele) seguiu a rota do norte da China e da Pérsia, enquanto o português pegou a forma cantonesa, no comércio de Macau. Dois caminhos distintos chegando quase ao mesmo som.',
    transparent: true,
  },
  {
    word: 'Lahadi',
    root_word: 'اَلْأَحَد (al-ʔaḥad)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'الْأَحَد (al-ʔaḥad, domingo)'], ['ms', 'Ahad (domingo, também do árabe)']),
    evolution_note: 'Com o islã, o hauçá importou do árabe os nomes dos dias da semana muçulmana inteiros — “Lahadi” é domingo, o “primeiro dia”. O português também tem um sistema de dias de origem religiosa (segunda-feira vem do latim eclesiástico “feria secunda”), só que por um caminho bem diferente.',
    transparent: false,
  },
  {
    word: 'duniya',
    root_word: 'دُنْيَا (dunyā)',
    origin_language: 'Árabe',
    cognates: c(['ar', 'دُنْيَا (dunyā, mundo)'], ['sw', 'dunia (mundo, mesmo empréstimo árabe)']),
    evolution_note: '“Duniya” (mundo) é outro empréstimo árabe antigo, espalhado por línguas africanas bem distantes entre si: o suaíli, do outro lado do continente, tem a mesmíssima palavra, “dunia”, também vinda do árabe.',
    transparent: false,
  },
  {
    word: 'malami',
    root_word: 'مُعَلِّم (muʕallim)',
    origin_language: 'Árabe (via canúri)',
    cognates: c(['ar', 'مُعَلِّم (muʕallim, professor)'], ['kr', 'málə̀m (erudito, canúri)']),
    evolution_note: '“Malami” fez um caminho mais longo: veio do árabe “muʕallim” (professor) através do canúri, língua vizinha do hauçá no Lago Chade, antes de virar “malami”. O mesmo título, “mallam”, se espalhou pela África Ocidental como forma de respeito a qualquer pessoa letrada no Alcorão.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_HA: [string, string][] = [
  ['Mi sunanka?', 'Qual é o seu nome?'],
  ['Kana da ɗan’uwa ko ’yar’uwa?', 'Você tem irmão ou irmã?'],
  ['Ruwa ko shayi?', 'Água ou chá?'],
  ['Kana lahiya yau?', 'Você está bem hoje?'],
];

export const SHADOWING_HA: [string, string][] = [
  ['Sannu! Sannu da zuwa!', 'Olá! Bem-vindo(a)!'],
  ['Sunana Linu.', 'Meu nome é Linu.'],
  ['Lafiya lau, na gode!', 'Tudo bem, obrigado!'],
  ['Ina da ɗan’uwa da ’yar’uwa.', 'Eu tenho um irmão e uma irmã.'],
];
