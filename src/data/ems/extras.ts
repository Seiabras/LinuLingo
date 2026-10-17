import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção. Gabaritos pelas frases do [ANLC] e do [WIKT]. */
export const COMMUNITY_EMS: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Responder a “Quyanaa!”.', content: 'Quyanaa!', reference: 'Canaituq.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Dizer “não sei”.', content: 'Ai?', reference: 'Ca.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Dizer “está frio” (o tempo).', content: 'Maqarluni.', reference: 'Pat’snarluni.' },
  // A2 (17/10/2026): gabaritos do livro-texto de Kodiak (2023), p. 35 e 56, e do guia de conversação (2006), p. 5
  { author_name: 'Thiago 🇧🇷', prompt: 'Dizer “os dois homens estão comendo”.', content: 'Nukallpiak ner’uq.', reference: 'Nukallpiak ner’uk.' },
  { author_name: 'Larissa 🇧🇷', prompt: 'Dizer “eu nasci em Kodiak”.', content: 'Sun’amen sullrianga.', reference: 'Sun’ami sullrianga.' },
];

/** Cenário de conversa, com as falas do [ANLC] e do [WIKT]. O alutiiq não tem um “você” formal à parte. */
export const SCENARIOS_EMS: ScenarioSeed[] = [
  {
    id: 'ems-s1',
    title: 'Chegada a Kodiak',
    emoji: '🛬',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma moradora de Kodiak que recebe o Linu',
    description: 'O alutiiq não tem um pronome de respeito separado. A cortesia está no “Quyanaa” e no “Canaituq”.',
    turns: [
      { bot: 'Cama’i!', botTranslation: 'Olá!', keywords: ['Cama’i', "cama'i", 'camai'], suggestions: ['Cama’i!'] },
      { bot: 'Cayuq?', botTranslation: 'Chá?', keywords: ['Quyanaa', 'quyanaa'], suggestions: ['Quyanaa!'] },
      { bot: 'Canaituq. Awa ai?', botTranslation: 'De nada. É só isso?', keywords: ['Quyanaa', 'quyanaa'], suggestions: ['Quyanaa!'] },
    ],
  },
  // A2 (17/10/2026): falas do guia de conversação de Kodiak (2006), p. 7, 8 e 30, e do livro-texto (2023), p. 20
  {
    id: 'ems-s2',
    title: 'Visita a uma anciã',
    emoji: '🫖',
    cefr: 'A2',
    register: 'informal',
    persona: 'Uma anciã de Kodiak que ensina alutiiq ao Linu',
    description: 'Visitar é uma tradição forte em Kodiak, e aprender com um ancião é o melhor jeito de aprender a língua, segundo o guia de conversação.',
    turns: [
      { bot: 'Cama’i, asirtuten-qaa?', botTranslation: 'Olá, você está bem?', keywords: ['Asirtua', 'asirtua'], suggestions: ['Asirtua.'] },
      { bot: 'Ima-mi ilaten?', botTranslation: 'E a sua família, como vai?', keywords: ['Ilanka', 'ilanka', 'asirtut'], suggestions: ['Ilanka asirtut.'] },
      { bot: 'Kangircuuten?', botTranslation: 'Você entende?', keywords: ['Kangirciyamken', 'kangirciyamken', 'Kangircinitua', 'kangircinitua'], suggestions: ['Kangirciyamken.', 'Kangircinitua.'] },
      { bot: 'Unuaqu tang’rciqamken.', botTranslation: 'Até amanhã.', keywords: ['Quyanaa', 'quyanaa', 'litnaurlua'], suggestions: ['Quyanaa litnaurlua.'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKT] s.v. “kelipaq” (do russo хлеб), “laugka” (do russo лавка), “masla” (do
 * russo масло); [ANLC] (Sugpiaq = suk “pessoa” + -piaq “de verdade”). Cognatos dos pacotes esu e ale.
 */
export const ETYMOLOGY_EMS: EtymologySeed[] = [
  {
    word: 'suk',
    root_word: 'suk (pessoa), a raiz de Sugpiaq: suk + -piaq (de verdade)',
    origin_language: 'Alutiiq',
    cognates: c(['esu', 'yuk (pessoa), Yup’ik'], ['ik', 'iñuk (pessoa), Iñupiaq']),
    evolution_note: 'Os três povos vizinhos deram o mesmo nome a si mesmos: “a pessoa de verdade”. Sugpiaq (suk + -piaq), Yup’ik (yuk + -pik) e Iñupiaq (iñuk + -piaq).',
    transparent: true,
  },
  {
    word: 'kelipaq',
    root_word: 'do russo хлеб (khleb), pão',
    origin_language: 'Russo',
    cognates: c(['ru', 'хлеб'], ['esu', 'kelipaq']),
    evolution_note: 'O pão chegou com os russos, e a palavra também. O iúpique central tem a mesma palavra, “kelipaq”, vinda do mesmo “khleb”.',
    transparent: false,
  },
  {
    word: 'laugka',
    root_word: 'do russo лавка (lavka), loja',
    origin_language: 'Russo',
    cognates: c(['ru', 'лавка']),
    evolution_note: 'A loja do alutiiq é a “lavka” russa, a vendinha dos tempos da América Russa.',
    transparent: false,
  },
];

export const JOURNAL_PROMPTS_EMS: [string, string][] = [
  ['Cama’i!', 'Olá!'],
  ['Sun’ami enerpak pat’snarluni macartuq.', 'Hoje de manhã está frio, mas faz sol em Kodiak.'],
  ['Awa ai?', 'É só isso?'],
  // A2: livro-texto de Kodiak (2023), p. 61; guia de conversação (2006), p. 5
  ['Ernerpak gui silugtuanga.', 'Hoje eu estou feliz.'],
  ['Sun’ami etaartua.', 'Eu moro em Kodiak.'],
];

export const SHADOWING_EMS: [string, string][] = [
  ['Cama’i!', 'Olá!'],
  ['Quyanaa!', 'Obrigado!'],
  ['Canaituq.', 'De nada.'],
  ['Asikaqa angli.', 'Eu gosto muito dele.'],
  // A2: guia de conversação de Kodiak (2006), p. 2, 7 e 31
  ['Cestun ec’it?', 'Como você está?'],
  ['Ilanka asirtut.', 'A minha família está bem.'],
  ['Quyanaa litnaurlua.', 'Obrigado por me ensinar.'],
];
