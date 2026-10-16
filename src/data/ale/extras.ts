import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de quem começa o aleúte). Gabaritos pelas
 * frases do [OMNI] e do [WIKI].
 */
export const COMMUNITY_ALE: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Dizer “o pai do homem”.', content: 'Adax̂ tayaĝux̂.', reference: 'Tayaĝum adaa.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Dizer “o homem está trabalhando”.', content: 'Awakux̂ tayaĝux̂.', reference: 'Tayaĝux̂ awakux̂.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Dizer “meu nome é Beatriz”.', content: 'Kiin Beatriz.', reference: 'Beatriz asax̂takuq.' },
];

/** Cenário de conversa, com as falas do [OMNI]. O aleúte não tem um “você” formal à parte. */
export const SCENARIOS_ALE: ScenarioSeed[] = [
  {
    id: 'ale-s1',
    title: 'Chegada a Atka',
    emoji: '🛬',
    cefr: 'A1',
    register: 'informal',
    persona: 'Um morador de Atka, nas ilhas Aleutas, que recebe o Linu',
    description: 'O aleúte não tem um pronome de respeito separado: o mesmo “txin” (você) serve para qualquer pessoa.',
    turns: [
      { bot: 'Aang! Alqutaxt?', botTranslation: 'Olá! Como vai?', keywords: ['Aang', 'Qaĝaasakung', 'qagaasakung'], suggestions: ['Aang! Qaĝaasakung!'] },
      { bot: 'Kiin asax̂tax̂t?', botTranslation: 'Qual é o seu nome?', keywords: ['asax̂takuq', 'asaxtakuq'], suggestions: ['Linu asax̂takuq.'] },
      { bot: 'Qaatunaxt!', botTranslation: 'Bom apetite!', keywords: ['Qaĝaasakung', 'qagaasakung'], suggestions: ['Qaĝaasakung!'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKT] s.v. “sabaakax̂” (do russo собака), “chaasxix̂” (чашка), “chiirkax̂”
 * (церковь); [WIKI] «Aleut language» (Alaxsxa, a península do Alasca, a origem do nome do estado).
 */
export const ETYMOLOGY_ALE: EtymologySeed[] = [
  {
    word: 'sabaakax̂',
    root_word: 'do russo собака (sobaka), cachorro',
    origin_language: 'Russo',
    cognates: c(['ru', 'собака']),
    evolution_note: 'O cachorro do aleúte veio com os russos, que chegaram às ilhas em 1741: “sobaka” virou “sabaakax̂”, com o final -x̂ das palavras aleútes.',
    transparent: false,
  },
  {
    word: 'chaasxix̂',
    root_word: 'do russo чашка (tchachka), xícara',
    origin_language: 'Russo',
    cognates: c(['ru', 'чашка']),
    evolution_note: 'A xícara de chá chegou com os russos, e a palavra também. No aleúte oriental, a mesma palavra é “chaaskax̂”, mais perto ainda do russo.',
    transparent: false,
  },
  {
    word: 'chiirkax̂',
    root_word: 'do russo церковь (tsérkov), igreja',
    origin_language: 'Russo',
    cognates: c(['ru', 'церковь']),
    evolution_note: 'A igreja ortodoxa russa chegou às ilhas no século XVIII, e foi um padre ortodoxo, Ioann Veniaminov, que criou a primeira escrita do aleúte, em letras cirílicas, a partir de 1824.',
    transparent: false,
  },
  // [BERG94] p. 278 (“muka-x̂ A 1952- n. flour […] [from Russian muká flour]”), p. 161 (“duuxtura-x̂ Eu 1984,
  // A 1973- n. doctor […] [from Russian dóktor doctor]”); [BERG97] p. 63 e 65 (tiisichax̂ “from Russian”,
  // A 1950 “hatidim sisax̂ ‘ten times hundred’ (1950 beside tiisichax̂ from Russian)”).
  {
    word: 'mukax̂',
    root_word: 'do russo мука (muká), farinha',
    origin_language: 'Russo',
    cognates: c(['ru', 'мука']),
    evolution_note: 'A farinha chegou com os russos, e a palavra também: “muká” virou “mukax̂”, com o final -x̂ das palavras aleútes. É a palavra de Atka; o leste diz “alugax̂”.',
    transparent: false,
  },
  {
    word: 'duuxturax̂',
    root_word: 'do russo доктор (dóktor), médico',
    origin_language: 'Russo',
    cognates: c(['ru', 'доктор'], ['pt', 'doutor']),
    evolution_note: 'O médico de Atka tem nome russo: “dóktor” virou “duuxturax̂”, registrado em Atka a partir de 1973.',
    transparent: true,
  },
  {
    word: 'tiisichax̂',
    root_word: 'do russo тысяча (týsyacha), mil',
    origin_language: 'Russo',
    cognates: c(['ru', 'тысяча']),
    evolution_note: 'Para mil, o aleúte podia multiplicar: “hatidim sisax̂”, dez vezes cem. Em 1950, Atka já usava ao lado dela a palavra russa, “tiisichax̂”.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_ALE: [string, string][] = [
  ['Alqutaxt?', 'Como vai?'],
  ['Kiin asax̂tax̂t?', 'Qual é o seu nome?'],
  ['Qaataax̂t?', 'De onde você é?'],
  // A2 ([BERG97] p. 90)
  ['Qanayiim haqanax̂t?', 'Quando você veio?'],
];

export const SHADOWING_ALE: [string, string][] = [
  ['Aang! Qaĝaasakung!', 'Olá! Obrigado!'],
  ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
  ['Ukuĝaan ix̂amnakux̂!', 'Que bom te ver!'],
  ['Slachxizax̂ malgakux̂!', 'Tenha um bom dia!'],
  // A2 ([BERG94] p. 86 e p. 322; [BERG97] p. 64)
  ['Chix̂tal angalikux̂.', 'Está chovendo hoje.'],
  ['Qilagan haqal saĝanax̂.', 'Ele veio ontem.'],
  ['Isuĝix̂ qankul saĝanaq.', 'Peguei três focas ontem.'],
];
