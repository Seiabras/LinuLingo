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
];

export const JOURNAL_PROMPTS_ALE: [string, string][] = [
  ['Alqutaxt?', 'Como vai?'],
  ['Kiin asax̂tax̂t?', 'Qual é o seu nome?'],
  ['Qaataax̂t?', 'De onde você é?'],
];

export const SHADOWING_ALE: [string, string][] = [
  ['Aang! Qaĝaasakung!', 'Olá! Obrigado!'],
  ['Tayaĝux̂ awakux̂.', 'O homem está trabalhando.'],
  ['Ukuĝaan ix̂amnakux̂!', 'Que bom te ver!'],
  ['Slachxizax̂ malgakux̂!', 'Tenha um bom dia!'],
];
