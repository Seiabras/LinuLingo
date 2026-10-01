import type { LanguagePack } from '../types';
import { VOCAB_SL } from './vocabulario';
import { UNITS_SL } from './curriculo';
import { GRAMMAR_SL } from './gramatica';
import { STORIES_SL } from './historias';
import { COMMUNITY_SL, ETYMOLOGY_SL, JOURNAL_PROMPTS_SL, SCENARIOS_SL, SHADOWING_SL } from './extras';

export const ESLOVENO: LanguagePack = {
  code: 'sl',
  name: 'Esloveno',
  nativeName: 'Slovenščina',
  flag: '🇸🇮',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo meridional'],
    region: 'Eslovênia (entre os Alpes, o Adriático e a planície da Panônia)',
    writing: 'Alfabeto latino (25 letras, com č, š, ž; esloveno padrão, knjižna slovenščina)',
  },
  speechLocale: 'sl-SI',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~87 palavras, 4 tópicos de gramática, 2 histórias), no esloveno padrão, sem marcação do acento e ainda sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SL,
  units: UNITS_SL,
  etymology: ETYMOLOGY_SL,
  community: COMMUNITY_SL,
  scenarios: SCENARIOS_SL,
  stories: STORIES_SL,
  grammar: GRAMMAR_SL,
  journalPrompts: JOURNAL_PROMPTS_SL,
  shadowing: SHADOWING_SL,
  specialChars: ['č', 'š', 'ž'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Dober dan',
  sampleSentence: 'Dober dan! Ime mi je Linu. Učimo se slovenščino!',
  phrases: { hi: 'Živjo!', thanks: 'Hvala!', letsStart: ['Začnimo!', 'Vamos começar!'] },
  formalMarkers: 'vi (com o verbo no plural, para uma pessoa só), prosim, oprostite',
  cognateNote:
    'O esloveno é uma língua eslava meridional, prima distante do português: os dois vêm do indo-europeu. Por isso “tri” lembra “três”. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
