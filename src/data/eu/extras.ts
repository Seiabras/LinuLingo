import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção (erros típicos de brasileiros no basco). */
export const COMMUNITY_EU: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: 'Aurkeztu zeure burua: izena eta hiria.',
    content: 'Kaixo! Ni naiz Bruno eta ni naiz Curitibatik.',
    reference: 'Kaixo! Bruno naiz eta Curitibakoa naiz.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: 'Zer edaten duzu goizean?',
    content: 'Ni kafea edaten dut.',
    reference: 'Nik kafea edaten dut.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: 'Nolakoa da zure etxea?',
    content: 'Nire txiki etxea da.',
    reference: 'Nire etxea txikia da.',
  },
];

/** Cenários de conversa. */
export const SCENARIOS_EU: ScenarioSeed[] = [
  {
    id: 'eu-s1',
    title: 'Kafe bat Donostian',
    emoji: '☕',
    cefr: 'A1',
    register: 'informal',
    persona: 'Ane, euskara ikastaroko ikaskidea',
    description: 'Ane, uma colega do curso de basco, convida você para um café na parte velha de San Sebastián. É uma conversa entre colegas: use “zu”.',
    turns: [
      {
        bot: 'Kaixo! Zer edan nahi duzu?',
        botTranslation: 'Oi! O que você quer beber?',
        keywords: ['kafe', 'ur', 'esne'],
        suggestions: ['Kafe bat, mesedez.', 'Ur botila bat, mesedez.'],
      },
      {
        bot: 'Nongoa zara?',
        botTranslation: 'De onde você é?',
        keywords: ['naiz'],
        suggestions: ['São Paulokoa naiz.', 'Salvadorkoa naiz.'],
      },
    ],
  },
];

/** Palavras do basco: as nativas (sem parentes em outras línguas) e as que foram e vieram do latim. */
export const ETYMOLOGY_EU: EtymologySeed[] = [
  {
    word: 'etxe',
    root_word: 'etxe',
    origin_language: 'Basco',
    cognates: c(['pt', 'Xavier (nome)'], ['es', 'Javier, Echeverría (sobrenome)']),
    evolution_note: 'Palavra nativa do basco, sem parentes em outras línguas. Com “berri” (novo), formou nomes de lugar como “Etxeberri” (casa nova); daí vêm o sobrenome Echeverría e, pelo castelo de Xavier, em Navarra, o nome Xavier (Javier, em espanhol).',
    transparent: false,
  },
  {
    word: 'ezker',
    root_word: 'ezker',
    origin_language: 'Basco',
    cognates: c(['pt', 'esquerdo'], ['es', 'izquierdo']),
    evolution_note: 'Aqui o empréstimo foi do basco para as línguas vizinhas: o espanhol antigo “esquierdo”, de onde vem “izquierdo”, saiu do basco “ezker”. O português “esquerdo” tem a mesma origem.',
    transparent: false,
  },
  {
    word: 'katu',
    root_word: 'cattus',
    origin_language: 'Latim',
    cognates: c(['pt', 'gato'], ['es', 'gato'], ['it', 'gatto'], ['fr', 'chat']),
    evolution_note: 'Empréstimo do latim “cattus”. O basco trocou o c por k, a letra que usa para esse som.',
    transparent: true,
  },
  {
    word: 'liburu',
    root_word: 'librum',
    origin_language: 'Latim',
    cognates: c(['pt', 'livro'], ['es', 'libro'], ['it', 'libro']),
    evolution_note: 'Do latim “librum” (livro). O basco antigo evitava grupos de consoantes como “br” e, nas palavras que tomava emprestadas, punha uma vogal no meio: libr- → libur-.',
    transparent: true,
  },
  {
    word: 'berde',
    root_word: 'viridis',
    origin_language: 'Latim (pelas línguas românicas)',
    cognates: c(['pt', 'verde'], ['es', 'verde'], ['it', 'verde']),
    evolution_note: 'Veio das línguas românicas vizinhas, herdeiras do latim “viridis”. O basco não tem o som de “v”, e por isso a palavra entrou com “b”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_EU: [string, string][] = [
  ['Zer moduz zaude gaur?', 'Como você está hoje?'],
  ['Nolakoa da zure familia?', 'Como é a sua família?'],
  ['Zer jaten eta zer edaten duzu goizean?', 'O que você come e bebe de manhã?'],
  ['Nolakoa da zure etxea?', 'Como é a sua casa?'],
];

export const SHADOWING_EU: [string, string][] = [
  ['Kaixo! Ane naiz.', 'Oi! Eu sou a Ane.'],
  ['Ondo, eskerrik asko! Eta zu?', 'Bem, obrigado! E você?'],
  ['Nik ura edaten dut.', 'Eu bebo água.'],
  ['Ez dakit.', 'Eu não sei.'],
];
