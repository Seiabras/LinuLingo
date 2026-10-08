/**
 * «Qual é o falar da sua Romênia?»: a versão romena do quiz «Qual é o seu sotaque?» (motor genérico
 * em `src/services/sotaque-quiz.ts`). As perguntas vêm das próprias palavras e traços de
 * pronúncia documentados em `src/data/ro/sotaques.ts` (ACCENTS_RO) — nada inventado aqui, só
 * reaproveitado em formato de pergunta de múltipla escolha.
 */
import type { GuessQuestion, GuessRegion } from '@/services/sotaque-quiz';

export type RegionIdRo = 'ro-muntenesc' | 'ro-moldovenesc' | 'ro-ardelenesc' | 'ro-banatean' | 'ro-oltenesc';

export const GUESS_REGIONS_RO: GuessRegion<RegionIdRo>[] = [
  { id: 'ro-muntenesc', accent: 'muntênio (padrão)', where: 'Bucareste e a Muntênia', emoji: '🏙️' },
  { id: 'ro-moldovenesc', accent: 'moldavo', where: 'a Moldávia romena e a República da Moldávia', emoji: '🍇' },
  { id: 'ro-ardelenesc', accent: 'transilvano', where: 'a Transilvânia', emoji: '🏔️' },
  { id: 'ro-banatean', accent: 'banatense', where: 'o Banat', emoji: '🍅' },
  { id: 'ro-oltenesc', accent: 'oltênio', where: 'a Oltênia', emoji: '🗣️' },
];

export const GUESS_QUESTIONS_RO: GuessQuestion<RegionIdRo>[] = [
  {
    id: 'legal',
    emoji: '😎',
    question: 'Uma coisa muito boa, maneira. Como se diz?',
    options: [
      { label: 'mișto (gíria de Bucareste, de origem romani)', weights: { 'ro-muntenesc': 3 } },
      { label: 'fain (do alemão “fein”)', weights: { 'ro-ardelenesc': 3 } },
      { label: 'bun, frumos (o jeito comum, em qualquer lugar)', weights: {} },
    ],
  },
  {
    id: 'milho',
    emoji: '🌽',
    question: 'O milho, a espiga amarela:',
    options: [
      { label: 'porumb (o padrão)', weights: { 'ro-muntenesc': 2, 'ro-ardelenesc': 1, 'ro-oltenesc': 1 } },
      { label: 'păpușoi', weights: { 'ro-moldovenesc': 3 } },
      { label: 'cucuruz (do sérvio)', weights: { 'ro-banatean': 3 } },
    ],
  },
  {
    id: 'batata',
    emoji: '🥔',
    question: 'A batata:',
    options: [
      { label: 'cartofi (o padrão)', weights: { 'ro-muntenesc': 2, 'ro-ardelenesc': 1, 'ro-oltenesc': 1 } },
      { label: 'barabule', weights: { 'ro-moldovenesc': 3 } },
      { label: 'crumpi (do alemão)', weights: { 'ro-banatean': 3 } },
    ],
  },
  {
    id: 'tomate',
    emoji: '🍅',
    question: 'O tomate:',
    options: [
      { label: 'roșie (o padrão, “vermelha”)', weights: { 'ro-muntenesc': 2, 'ro-moldovenesc': 1, 'ro-ardelenesc': 1, 'ro-oltenesc': 1 } },
      { label: 'paradaisă (do alemão austríaco “Paradeiser”)', weights: { 'ro-banatean': 3 } },
    ],
  },
  {
    id: 'melancia',
    emoji: '🍉',
    question: 'A melancia:',
    options: [
      { label: 'pepene verde (o padrão)', weights: { 'ro-muntenesc': 2, 'ro-ardelenesc': 1, 'ro-banatean': 1, 'ro-oltenesc': 1 } },
      { label: 'harbuz', weights: { 'ro-moldovenesc': 3 } },
    ],
  },
  {
    id: 'repolho',
    emoji: '🥬',
    question: 'O repolho:',
    options: [
      { label: 'varză (o padrão)', weights: { 'ro-muntenesc': 2, 'ro-moldovenesc': 1, 'ro-banatean': 1, 'ro-oltenesc': 1 } },
      { label: 'curechi', weights: { 'ro-ardelenesc': 3 } },
    ],
  },
  {
    id: 'ce',
    emoji: '👂',
    question: 'Como soa o “ce” de “cinci” (cinco) e o “ge” de “ger” (gelo)?',
    options: [
      { label: 'normal, como em “tchau”: “cinci”, “ger”', weights: { 'ro-muntenesc': 2, 'ro-ardelenesc': 1, 'ro-banatean': 1, 'ro-oltenesc': 1 } },
      { label: 'mais chiado: “șinși”, “jer”', weights: { 'ro-moldovenesc': 3 } },
    ],
  },
  {
    id: 'bine',
    emoji: '🗣️',
    question: 'Como fica “está bem” — “E bine” no padrão?',
    options: [
      { label: 'E bine', weights: { 'ro-muntenesc': 2, 'ro-moldovenesc': 1, 'ro-banatean': 1, 'ro-oltenesc': 1 } },
      { label: 'Îi bine', weights: { 'ro-ardelenesc': 3 } },
    ],
  },
  {
    id: 'fiz',
    emoji: '⏱️',
    question: 'Para dizer que você fez algo agora há pouco (“fiz”, “am făcut” no padrão):',
    options: [
      { label: 'am făcut (perfeito composto, o padrão)', weights: { 'ro-muntenesc': 2, 'ro-moldovenesc': 1, 'ro-ardelenesc': 1, 'ro-banatean': 1 } },
      { label: 'făcui (perfeito simples, ainda vivo na fala)', weights: { 'ro-oltenesc': 3 } },
    ],
  },
];
