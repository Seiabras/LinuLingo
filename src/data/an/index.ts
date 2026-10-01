import type { LanguagePack } from '../types';
import { VOCAB_AN } from './vocabulario';
import { UNITS_AN } from './curriculo';
import { GRAMMAR_AN } from './gramatica';
import { STORIES_AN } from './historias';
import { COMMUNITY_AN, ETYMOLOGY_AN, JOURNAL_PROMPTS_AN, SCENARIOS_AN, SHADOWING_AN } from './extras';

export const ARAGONES: LanguagePack = {
  code: 'an',
  name: 'Aragonês',
  nativeName: 'Aragonés',
  flag: '🇪🇸',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico'],
    region: 'Pirenéus aragoneses (norte de Aragão, Espanha)',
    writing: "Alfabeto latino, norma ortográfica EFA (Academia de l'Aragonés, 2010)",
  },
  speechLocale: 'an-ES',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~85 palavras, 4 tópicos de gramática, 2 histórias), na norma EFA, ainda sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_AN,
  units: UNITS_AN,
  etymology: ETYMOLOGY_AN,
  community: COMMUNITY_AN,
  scenarios: SCENARIOS_AN,
  stories: STORIES_AN,
  grammar: GRAMMAR_AN,
  journalPrompts: JOURNAL_PROMPTS_AN,
  shadowing: SHADOWING_AN,
  specialChars: ['á', 'é', 'í', 'ó', 'ú'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Ola',
  sampleSentence: 'Ola! Me clamo Linu. Aprendemos aragonés!',
  phrases: { hi: 'Ola!', thanks: 'Grazias!', letsStart: ['Prenzipiemos!', 'Vamos começar!'] },
  formalMarkers: 'vusatros (com o verbo no plural), por favor, perdón',
  cognateNote:
    'O aragonês nasceu do latim falado nos Pirineus e é parente próximo do espanhol, mas guardou sons que o espanhol perdeu: o F do começo da palavra (farina, fierro, onde o espanhol diz harina, hierro) e os grupos pl-, cl-, fl- (plorar, clau, onde o espanhol diz llorar, llave). Os artigos “o” e “a” — iguais aos do português — e a palavra “pai”, quase idêntica à nossa, são coincidências que ajudam bastante quem fala português.',
};
