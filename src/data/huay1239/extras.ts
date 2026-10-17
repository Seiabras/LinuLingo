import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção. Gabaritos pelas frases e pela gramática do [WIKI]. */
export const COMMUNITY_HUAY1239: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Dizer “três”.', content: 'Kimsa.', reference: 'Kima.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Responder a “Pitaq?”.', content: 'Allqum.', reference: 'Nuqam.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Dizer “nós” (sem incluir quem escuta).', content: 'Nuqantsik.', reference: 'Nuqakuna.' },
  // Gabaritos do [PAR] (Parker, 1976): p. 107 (“wiyarqayki”, oíste), p. 84 (“Wayintsikchaw punun”; o -pi
  // do sul) e p. 164 (“Tushuyta munaa”).
  { author_name: 'Camila 🇧🇷', prompt: 'Dizer “você ouviu”.', content: 'Wiyarqanki.', reference: 'Wiyarqayki.' },
  { author_name: 'Thiago 🇧🇷', prompt: 'Dizer “dorme na nossa casa”.', content: 'Wayintsikpi punun.', reference: 'Wayintsikchaw punun.' },
  { author_name: 'Larissa 🇧🇷', prompt: 'Dizer “quero dançar”.', content: 'Tushuy munaa.', reference: 'Tushuyta munaa.' },
];

/** Cenários de conversa: o primeiro com as falas do [WIKI]; o segundo com as do [PAR] (Parker, 1976). */
export const SCENARIOS_HUAY1239: ScenarioSeed[] = [
  {
    id: 'huay1239-s1',
    title: 'Na porta, em Huaraz',
    emoji: '🚪',
    cefr: 'A1',
    register: 'informal',
    persona: 'Uma moradora de Huaraz que abre a porta para o Linu',
    description: 'Para responder com mais respeito, diz-se “Nuqallaa” no lugar de “Nuqam”.',
    turns: [
      { bot: 'Pitaq?', botTranslation: 'Quem é?', keywords: ['Nuqam', 'Nuqallaa', 'nuqam'], suggestions: ['Nuqallaa.'] },
      { bot: 'Imanawllataq kaykanki?', botTranslation: 'Como você está?', keywords: ['Yamayllam', 'yamayllam'], suggestions: ['Yamayllam kaykaa.'] },
      { bot: 'Alalaw!', botTranslation: 'Que frio!', keywords: ['Aw', 'Awmi', 'aw'], suggestions: ['Awmi!'] },
    ],
  },
  // [PAR]: “Winchis” (p. 72); “¿Ayka watayoqtaq kanki?” (p. 147) e “Ishkay chunka watayoq kaa” (p. 94);
  // “¡Upyarkushun!” (p. 126) e “ichikllapa” (p. 94); “Tushunaykita munaa”, “Tushuyta munaa” (p. 164–165).
  {
    id: 'huay1239-s2',
    title: 'Na festa, em Huaraz',
    emoji: '🎉',
    cefr: 'A2',
    register: 'informal',
    persona: 'Um senhor de Huaraz que puxa conversa com o Linu numa festa',
    description: 'Um brinde, a idade e um convite para dançar. “Ichikllapa” quer dizer “só um pouquinho”.',
    turns: [
      { bot: 'Winchis!', botTranslation: 'Bom dia!', keywords: ['Winchis', 'winchis'], suggestions: ['Winchis, taytay!'] },
      { bot: 'Ayka watayuqtaq kanki?', botTranslation: 'Quantos anos você tem?', keywords: ['watayuq', 'kaa'], suggestions: ['Ishkay chunka watayuq kaa.'] },
      { bot: 'Upyarkushun!', botTranslation: 'Saúde! (Vamos brindar!)', keywords: ['Ichikllapa', 'Upyarkushun', 'ichikllapa'], suggestions: ['Ichikllapa.'] },
      { bot: 'Tushunaykita munaa.', botTranslation: 'Quero que você dance.', keywords: ['Tushuyta', 'munaa', 'tushuyta'], suggestions: ['Tushuyta munaa.'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKI] «Quechua ancashino» (o “s” do começo das sílabas, aspirado em Huaylas:
 * wasi → wahi → wai) e «Clasificación del quechua ancashino» (suqta → huqta → uqta, seis; ñawi → nawi).
 * Cognatos do quéchua do sul (qu) e do kichwa (colo1257).
 */
export const ETYMOLOGY_HUAY1239: EtymologySeed[] = [
  {
    word: 'huqta',
    root_word: 'suqta (seis, no quechua antigo)',
    origin_language: 'Quéchua',
    cognates: c(['qu', 'suqta'], ['colo1257', 'sukta']),
    evolution_note: 'O antigo “s” do começo da palavra virou “h” na maior parte de Áncash: “suqta” virou “huqta”. No norte do Callejón de Huaylas, o “h” também sumiu, e o seis virou “uqta”.',
    transparent: true,
  },
  {
    word: 'ñawi',
    root_word: 'ñawi (olho)',
    origin_language: 'Quéchua',
    cognates: c(['qu', 'ñawi'], ['colo1257', 'ñawi']),
    evolution_note: 'A mesma palavra em todo o quéchua. Mas em Huaylas e no sul de Conchucos o “ñ” perdeu o som de “nh”, e o olho virou “nawi”.',
    transparent: true,
  },
  // [PAR], p. 64: “uusha” ('oveja') e “ashnu” ('burro') são empréstimos do castelhano já assimilados ao
  // quéchua, que nem são mais sentidos como estrangeiros.
  {
    word: 'uusha',
    root_word: 'oveja (castelhano)',
    origin_language: 'Espanhol',
    cognates: c(['es', 'oveja'], ['pt', 'ovelha']),
    evolution_note: 'Veio do castelhano “oveja”, com o som adaptado ao quéchua. Parker conta que é um empréstimo tão bem assimilado ao quéchua que os falantes já não o sentem como palavra estrangeira.',
    transparent: false,
  },
  {
    word: 'ashnu',
    root_word: 'asno (castelhano)',
    origin_language: 'Espanhol',
    cognates: c(['es', 'asno'], ['pt', 'asno']),
    evolution_note: 'Veio do castelhano “asno”, e o “s” virou “sh”. Como “uusha”, é um empréstimo que já soa como palavra de casa.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_HUAY1239: [string, string][] = [
  ['Imanawllataq kaykanki?', 'Como você está?'],
  // [PAR], p. 147 e p. 70
  ['Imataq ruraykanki?', 'O que você está fazendo?'],
  ['Imatam rikarqayki?', 'O que você viu?'],
  ['Pitaq?', 'Quem é?'],
  ['Imatan?', 'O que é?'],
];

export const SHADOWING_HUAY1239: [string, string][] = [
  ['Yamayllam kaykaa.', 'Estou bem.'],
  ['Nuqallaa.', 'Sou eu.'],
  ['Hirkachawmi kaykaa.', 'Estou no morro.'],
  ['Allqupaqmi.', 'É para o cachorro.'],
  // [PAR], p. 83, p. 164 e p. 126
  ['Yakuman aywashaq.', 'Vou buscar água.'],
  ['Tushuyta munaa.', 'Quero dançar.'],
  ['Upyarkushun!', 'Saúde!'],
];
