import type { CommunitySeed, EtymologySeed, ScenarioSeed } from '../types';

/** Textos de outros alunos esperando correção (erros típicos de quem aprende klingon). */
export const COMMUNITY_TLH: CommunitySeed[] = [
  {
    author_name: 'Bruno 🇧🇷',
    prompt: "tlhIngan SoH'a'?",
    content: 'jIH tlhIngan.',
    reference: 'tlhIngan jIH.',
  },
  {
    author_name: 'Camila 🇧🇷',
    prompt: "Duj Dalegh'a'?",
    content: 'Duj legh.',
    reference: 'Duj vIlegh.',
  },
  {
    author_name: 'Diego 🇧🇷',
    prompt: "puq legh vav'a'?",
    content: 'vav legh puq.',
    reference: 'puq legh vav.',
  },
];

/**
 * Cenário de conversa. O klingon não tem uma distinção gramatical confirmada entre registro formal
 * e informal — "SoH" serve para "você/tu" no singular, "tlhIH" para "vocês" no plural, só marcando
 * número, não formalidade —, por isso o registro aqui é só nominal, como no esperanto.
 */
export const SCENARIOS_TLH: ScenarioSeed[] = [
  {
    id: 'tlh-s1',
    title: 'DujDaq',
    emoji: '🚀',
    cefr: 'A1',
    register: 'informal',
    persona: "SuvwI', guerreiro klingon",
    description: 'Um guerreiro klingon pergunta se você fala a língua e se você come comida klingon. O klingon não marca formal/informal: “SoH” serve para qualquer “você”.',
    turns: [
      {
        bot: "nuqneH! tlhIngan Hol Dajatlh'a'?",
        botTranslation: 'Olá! Você fala klingon?',
        keywords: ['HISlaH', "ghobe'", 'jatlh'],
        suggestions: ['HISlaH, tlhIngan Hol vIjatlh.', "ghobe'."],
      },
      {
        bot: "Soj DaSop'a'?",
        botTranslation: 'Você come comida?',
        keywords: ['Sop', 'HISlaH', "ghobe'"],
        suggestions: ['HISlaH, Soj vISop.', "ghobe'."],
      },
    ],
  },
];

/**
 * Diferente do esperanto (que empresta raízes do latim de propósito, para ficar fácil de
 * reconhecer), o klingon foi desenhado por Marc Okrand justamente para NÃO lembrar nenhuma língua
 * humana — é um idioma a priori, sem raízes emprestadas de verdade. Por isso este pacote não traz
 * etimologia: não existe uma raiz real para rastrear, e inventar uma pareceria cognatos que não
 * existem. Fonte: Wikipedia, "Klingon language" (fonologia e vocabulário desenhados para soarem
 * alienígenas, sem parentesco com línguas terrestres).
 */
export const ETYMOLOGY_TLH: EtymologySeed[] = [];

export const JOURNAL_PROMPTS_TLH: [string, string][] = [
  ["tlhIngan SoH'a'?", 'Você é klingon?'],
  ["qan vav'a'?", 'O pai é velho?'],
  ["Duj Dalegh'a'?", 'Você vê a nave?'],
  ["Soj DaSop'a'?", 'Você come comida?'],
];

export const SHADOWING_TLH: [string, string][] = [
  ['nuqneH! tlhIngan jIH.', 'Olá! Eu sou klingon.'],
  ["Qapla'! qatlho'.", 'Sucesso! Obrigado.'],
  ['Duj vIlegh jIH.', 'Eu vejo a nave.'],
  ["jIyajbe'.", 'Eu não entendo.'],
];
