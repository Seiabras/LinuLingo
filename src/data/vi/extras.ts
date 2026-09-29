import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no vietnamita). */
export const COMMUNITY_VI: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Giới thiệu bản thân: tên, quê quán và gia đình.',
    content: 'Xin chào! Tôi là tên Bruno và tôi là đến từ Brazil, từ São Paulo. Tôi có một anh trai.',
    reference: 'Xin chào! Tôi tên là Bruno và tôi đến từ Brazil, từ São Paulo. Tôi có một anh trai.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Miêu tả nhà của bạn.',
    content: 'Nhà của tôi là nhỏ, có hai phòng và một con mèo rất dễ thương.',
    reference: 'Nhà tôi nhỏ, có hai phòng và một con mèo rất dễ thương.',
  },
];

/** Cenários de conversa (registro informal/neutro). */
export const SCENARIOS_VI: ScenarioSeed[] = [
  {
    id: 'vi-s1',
    title: 'Cà phê với một người bạn mới ở Hà Nội',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Lan, colega do curso de vietnamita',
    description: 'Lan te convida para um café perto do centro de Hanói. É informal, entre amigos.',
    turns: [
      {
        bot: 'Xin chào! Bạn muốn uống gì?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['cà phê', 'nước', 'sữa', 'trà'],
        suggestions: ['Cà phê sữa, làm ơn.', 'Chỉ nước thôi, làm ơn.'],
      },
      {
        bot: 'Bạn đến từ đâu?',
        botTranslation: 'De onde você é?',
        keywords: ['tôi đến từ', 'brazil'],
        suggestions: ['Tôi đến từ Brazil.', 'Tôi đến từ São Paulo, ở Brazil.'],
      },
    ],
  },
];

/** Palavras do vietnamita que chegaram até o português por outros caminhos. */
export const ETYMOLOGY_VI: EtymologySeed[] = [
  {
    word: 'cà phê',
    root_word: 'café (francês) ← qahwa (árabe)',
    origin_language: 'Francês, via árabe',
    cognates: c(['pt', 'café'], ['fr', 'café'], ['en', 'coffee']),
    evolution_note: 'O Vietnã foi colônia francesa até 1954, e «cà phê» veio direto do francês «café» — que, como o português «café», remonta à mesma raiz árabe «qahwa». Hoje o Vietnã é um dos maiores produtores de café do mundo.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_VI: [string, string][] = [
  ['Hôm nay bạn thế nào?', 'Como você está hoje?'],
  ['Kể cho tôi nghe về gia đình bạn.', 'Me conte sobre a sua família.'],
  ['Bạn thích ăn và uống gì?', 'O que você gosta de comer e beber?'],
  ['Nhà bạn thế nào?', 'Como é a sua casa?'],
];

export const SHADOWING_VI: [string, string][] = [
  ['Xin chào! Tôi tên là Ana, và tôi đến từ Brazil.', 'Oi! Meu nome é Ana, e eu sou do Brasil.'],
  ['Tôi khỏe, cảm ơn! Còn bạn?', 'Estou bem, obrigado! E você?'],
  ['Tôi có một anh trai và một em gái.', 'Tenho um irmão mais velho e uma irmã mais nova.'],
  ['Tôi rất thích cà phê sữa.', 'Eu gosto muito de café com leite.'],
];
