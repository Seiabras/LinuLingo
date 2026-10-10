import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/**
 * Textos de outros alunos esperando correção (erros típicos de quem começa o iúpique). Gabaritos pelas
 * frases do [ANLC], do [WIKT] e do [WIKI].
 */
export const COMMUNITY_ESU: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Responder a “Cangacit?”.', content: 'Cangacit.', reference: 'Assirtua.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Dizer “tenho vinte anos”.', content: 'Yuinaqek assirtua.', reference: 'Yuinaqek allrakungqertua.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Dizer “alce” (o caribu grande).', content: 'Tuntuvik.', reference: 'Tuntuvak.' },
];

/** Cenário de conversa, com as falas do [ANLC] e do [WIKT]. O iúpique não tem um “você” formal à parte. */
export const SCENARIOS_ESU: ScenarioSeed[] = [
  {
    id: 'esu-s1',
    title: 'Chegada a Bethel',
    emoji: '🛬',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma moradora de Bethel, no rio Kuskokwim, que recebe o Linu',
    description: 'O iúpique não tem um pronome de respeito separado. A acolhida se faz com “Quyana tailuci!”, obrigado por virem.',
    turns: [
      { bot: 'Waqaa! Cangacit?', botTranslation: 'Oi! Como vai?', keywords: ['Assirtua', 'assirtua'], suggestions: ['Assirtua. Quyana.'] },
      { bot: 'Qavcinek allrakungqercit?', botTranslation: 'Quantos anos você tem?', keywords: ['allrakungqertua'], suggestions: ['Yuinaqek allrakungqertua.'] },
      { bot: 'Quyana tailuci!', botTranslation: 'Bem-vindo! (obrigado por vir)', keywords: ['Quyana', 'quyana'], suggestions: ['Quyana!'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKT] s.v. “caayuq” (do russo чай), “kelipaq” (do russo хлеб), “luuskaaq” (do
 * russo ложка); [ANLC] (Yup'ik = yuk “pessoa” + pik “de verdade”; qimugta, literalmente “o que puxa”).
 * Cognatos do inupiaque (ik: iñuk + -piaq, a “pessoa de verdade” de Iñupiaq, segundo o ANLC) e do
 * português (chá, do chinês, como o russo “tchai”).
 */
export const ETYMOLOGY_ESU: EtymologySeed[] = [
  {
    word: 'yuk',
    root_word: 'yuk (pessoa), a raiz de Yup\'ik: yuk + -pik (de verdade)',
    origin_language: 'Iúpique',
    cognates: c(['ik', 'iñuk (pessoa), Iñupiaq (iñuk + -piaq)'], ['esu', 'Yup\'ik (yuk + -pik)']),
    evolution_note: 'O nome da língua e do povo quer dizer “a pessoa de verdade”. O inupiaque, a língua vizinha do norte, fez o seu nome do mesmo jeito: “Iñupiaq”, de “iñuk” (pessoa) e “-piaq” (de verdade).',
    transparent: true,
  },
  {
    word: 'caayuq',
    root_word: 'do russo чай (tchai), chá',
    origin_language: 'Russo',
    cognates: c(['ru', 'чай'], ['pt', 'chá']),
    evolution_note: 'O chá chegou ao Alasca com os russos, antes de 1867, e a palavra veio junto. O português “chá” e o russo “tchai” vêm, os dois, do chinês.',
    transparent: false,
  },
  {
    word: 'qimugta',
    root_word: 'qimug- (puxar): “o que puxa”',
    origin_language: 'Iúpique',
    cognates: c(['esu', 'qimugtuq (puxa com força)']),
    evolution_note: 'O cachorro é “o que puxa”: o nome vem do trabalho dos cães de trenó. O verbo da mesma raiz, “qimugtuq”, quer dizer “puxa com força”.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_ESU: [string, string][] = [
  ['Cangacit?', 'Como vai?'],
  ['Qavcinek allrakungqercit?', 'Quantos anos você tem?'],
  ['Qavcinun kaugta cass\'aq?', 'Que horas são?'],
];

export const SHADOWING_ESU: [string, string][] = [
  ['Assirtua. Quyana.', 'Estou bem. Obrigado.'],
  ['Quyana tailuci!', 'Bem-vindos! (obrigado por virem)'],
  ['Neqengqertua.', 'Eu tenho peixe.'],
  ['Yugcetun qanerciigataqa.', 'Não falo iúpique.'],
];
