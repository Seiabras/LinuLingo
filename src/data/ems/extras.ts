import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção. Gabaritos pelas frases do [ANLC] e do [WIKT]. */
export const COMMUNITY_EMS: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Responder a “Quyanaa!”.', content: 'Quyanaa!', reference: 'Canaituq.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Dizer “não sei”.', content: 'Ai?', reference: 'Ca.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Dizer “está frio” (o tempo).', content: 'Maqarluni.', reference: 'Pat’snarluni.' },
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
];

export const SHADOWING_EMS: [string, string][] = [
  ['Cama’i!', 'Olá!'],
  ['Quyanaa!', 'Obrigado!'],
  ['Canaituq.', 'De nada.'],
  ['Asikaqa angli.', 'Eu gosto muito dele.'],
];
