import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

const c = (...pairs: [string, string][]) => pairs.map(([lang, word]) => ({ lang, word }));

/** Textos de outros alunos esperando correção. Gabaritos pelas frases e pela conjugação do [KN]. */
export const COMMUNITY_COLO1257: CommunitySeed[] = [
  { author_name: 'Juliana 🇧🇷', prompt: 'Dizer “eu como”.', content: 'Ñuka mikun.', reference: 'Ñuka mikuni.' },
  { author_name: 'Rafael 🇧🇷', prompt: 'Dizer “quero um dólar de pão”.', content: 'Shuk dólar tanta munani.', reference: 'Shuk dólar tantata munani.' },
  { author_name: 'Beatriz 🇧🇷', prompt: 'Uma mulher fala do irmão dela.', content: 'Ñuka wawkika Luis shutimi.', reference: 'Ñuka turika Luis shutimi.' },
];

/** Cenário de conversa, com as falas do [KN] (o diálogo “Rimanakuy”). */
export const SCENARIOS_COLO1257: ScenarioSeed[] = [
  {
    id: 'colo1257-s1',
    title: 'Encontro em Otavalo',
    emoji: '🏔️',
    cefr: 'A1',
    register: 'formal',
    persona: 'A Sisa, uma moradora de Otavalo, que trata o Linu por “kikin”, o senhor',
    description: 'O kichwa tem um pronome de respeito, “kikin” (o senhor, a senhora), usado com quem não se tem intimidade.',
    turns: [
      { bot: 'Alli puncha! Kikinka imanallatak kanki?', botTranslation: 'Bom dia! Como o senhor está?', keywords: ['Allimi', 'allimi'], suggestions: ['Allimi kani.'] },
      { bot: 'Kikinka imashutitak kanki?', botTranslation: 'Como o senhor se chama?', keywords: ['shutika', 'Ñukapak'], suggestions: ['Ñukapak shutika Linumi kan.'] },
      { bot: 'Kikinka maymantatak kanki?', botTranslation: 'De onde o senhor é?', keywords: ['llaktamantami', 'kani'], suggestions: ['Brasil llaktamantami kani.'] },
    ],
  },
];

/**
 * Etimologias. Fontes: [WIKI] Wikipédia em espanhol, «Kichwa» (ñuka × ñuqa: a perda das consoantes do
 * fundo da garganta; o -pak da posse, vindo de *-paq “para”; “Apunchik”, “nosso senhor”, um resto dos
 * possessivos antigos); [KN] “Llika” (as três vogais).
 */
export const ETYMOLOGY_COLO1257: EtymologySeed[] = [
  {
    word: 'ñuka',
    root_word: 'ñuqa (eu, no quéchua do sul)',
    origin_language: 'Quéchua',
    cognates: c(['qu', 'ñuqa']),
    evolution_note: 'No quéchua do sul, “eu” é “ñuqa”, com um “q” do fundo da garganta que puxa o “u” para um som de “o”: [ño.ka]. O kichwa perdeu esse “q”, e a palavra virou simplesmente “ñuka”.',
    transparent: true,
  },
  {
    word: 'mama',
    root_word: 'mama (mãe)',
    origin_language: 'Quéchua',
    cognates: c(['qu', 'mama']),
    evolution_note: 'A mesma palavra em todo o quéchua. No kichwa, a família se diz com o -pak (de) ou com o pronome antes: “ñuka mama”, minha mãe, porque o kichwa perdeu os finais possessivos do quéchua do sul.',
    transparent: true,
  },
];

export const JOURNAL_PROMPTS_COLO1257: [string, string][] = [
  ['Imanallatak kanki?', 'Como você está?'],
  ['Ima shutitak kanki?', 'Qual é o seu nome?'],
  ['Maymantatak kanki?', 'De onde você é?'],
];

export const SHADOWING_COLO1257: [string, string][] = [
  ['Allimi kani.', 'Estou bem.'],
  ['Otavalo llaktamantami kani.', 'Sou de Otavalo.'],
  ['Mikunata munani.', 'Quero comer.'],
  ['Haku mikushun!', 'Vamos comer!'],
];
