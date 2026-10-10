import type { LanguagePack } from '../types';
import { VOCAB_DE } from './vocabulario';
import { UNITS_DE } from './curriculo';
import { GRAMMAR_DE } from './gramatica';
import { STORIES_DE } from './historias';
import { COMMUNITY_DE, ETYMOLOGY_DE, JOURNAL_PROMPTS_DE, SCENARIOS_DE, SHADOWING_DE } from './extras';
import { ACCENTS_DE } from './sotaques';
import { VARIANTS_DE } from './variantes';

export const ALEMAO: LanguagePack = {
  code: 'de',
  name: 'Alemão',
  nativeName: 'Deutsch',
  flag: '🇩🇪',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Alto-alemão'],
    region: 'Europa central (Alemanha, Áustria, Suíça, Liechtenstein, Luxemburgo)',
    writing: 'Alfabeto latino (ä, ö, ü, ß), na ortografia reformada em vigor desde 2006',
  },
  speechLocale: 'de-DE',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 140 palavras, 8 tópicos de gramática, 4 histórias), no alemão-padrão da Alemanha. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_DE,
  units: UNITS_DE,
  etymology: ETYMOLOGY_DE,
  community: COMMUNITY_DE,
  scenarios: SCENARIOS_DE,
  stories: [...STORIES_DE, ...VARIANTS_DE.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_DE,
  grammar: GRAMMAR_DE,
  journalPrompts: JOURNAL_PROMPTS_DE,
  shadowing: SHADOWING_DE,
  accents: ACCENTS_DE,
  specialChars: ['ä', 'ö', 'ü', 'ß', 'Ä', 'Ö', 'Ü'],
  // masculino (der), feminino (die) e neutro (das)
  genders: ['m', 'f', 'n'],
  greeting: 'Guten Tag',
  sampleSentence: 'Hallo! Ich heiße Linu. Wir lernen Deutsch!',
  phrases: { hi: 'Hallo!', thanks: 'Danke!', letsStart: ["Los geht's!", 'Vamos começar!'] },
  formalMarkers: 'Sie (com maiúscula e o verbo no plural), bitte, Entschuldigung, Könnten Sie…?',
  cognateNote:
    'O alemão é uma língua germânica, irmã do neerlandês e do inglês: muitas palavras do dia a dia são parentes das inglesas (Haus = house, Wasser = water, Brot = bread). Do latim vieram palavras antigas como Wein (vinho) e Käse (queijo), e muitas palavras cultas (Familie, Musik, Universität) são fáceis para quem fala português.',
};
