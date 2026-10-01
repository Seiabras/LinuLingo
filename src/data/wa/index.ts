import type { LanguagePack } from '../types';
import { VOCAB_WA } from './vocabulario';
import { UNITS_WA } from './curriculo';
import { GRAMMAR_WA } from './gramatica';
import { STORIES_WA } from './historias';
import { COMMUNITY_WA, ETYMOLOGY_WA, JOURNAL_PROMPTS_WA, SCENARIOS_WA, SHADOWING_WA } from './extras';

export const VALAO: LanguagePack = {
  code: 'wa',
  name: 'Valão',
  nativeName: 'Walon',
  flag: '🇧🇪',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Galo-românico', 'Valão'],
    region: 'Valônia (sul da Bélgica)',
    writing: 'Alfabeto latino, grafia Rfondou walon (unificada, anos 1990)',
  },
  speechLocale: 'wa-BE',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~85 palavras, 4 tópicos de gramática, 2 histórias), na grafia Rfondou walon, com formas de referência da região de Liège (as outras três grandes variedades — Namur, Charleroi e o oeste valão — podem pronunciar ou escrever um pouco diferente). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_WA,
  units: UNITS_WA,
  etymology: ETYMOLOGY_WA,
  community: COMMUNITY_WA,
  scenarios: SCENARIOS_WA,
  stories: STORIES_WA,
  grammar: GRAMMAR_WA,
  journalPrompts: JOURNAL_PROMPTS_WA,
  shadowing: SHADOWING_WA,
  specialChars: ['å', 'ô', 'è', 'ê', 'xh'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Bondjoû',
  sampleSentence: 'Bondjoû! Dji m’ lome Linu. Nos aprindans walon eshonne!',
  phrases: { hi: 'Bondjoû!', thanks: 'Merci!', letsStart: ['Comincans!', 'Vamos começar!'] },
  formalMarkers: 'vos (com o verbo no plural), s’i vs plait, escuzez',
  cognateNote:
    'O valão nasceu do latim falado na Gália, como o francês, mas é uma língua d’oïl diferenciada, não um dialeto francês: se separou cedo e guardou sons próprios. Por isso “pan” lembra tanto o francês “pain” quanto o português “pão”, e “êwe” lembra “eau”/“água”, mas soam diferente dos dois. Cada palavra mostra a raiz e os parentes nas línguas irmãs.',
};
