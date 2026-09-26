import type { LanguagePack } from '../types';
import { VOCAB_RO } from './vocabulario';
import { UNITS_RO } from './curriculo';
import { ETYMOLOGY_RO } from './etimologia';
import { COMMUNITY_RO, SCENARIOS_RO } from './conversas';
import { STORIES_RO } from './historias';
import { JOURNAL_PROMPTS_RO, SHADOWING_RO } from './praticas';
import { toIpa } from '@/services/ipa-ro';
import { GRAMMAR_RO } from './gramatica';

export const ROMENO: LanguagePack = {
  code: 'ro',
  name: 'Romeno',
  nativeName: 'Română',
  flag: '🇷🇴',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Românico oriental'],
    region: 'Europa Oriental (bacia do baixo Danúbio e Cárpatos)',
    writing: 'Alfabeto latino (ă, â, î, ș, ț)',
  },
  speechLocale: 'ro-RO',
  available: true,
  vocab: VOCAB_RO,
  units: UNITS_RO,
  etymology: ETYMOLOGY_RO,
  community: COMMUNITY_RO,
  scenarios: SCENARIOS_RO,
  stories: STORIES_RO,
  grammar: GRAMMAR_RO,
  journalPrompts: JOURNAL_PROMPTS_RO,
  shadowing: SHADOWING_RO,
  ipa: toIpa,
  specialChars: ['ă', 'â', 'î', 'ș', 'ț'],
  greeting: 'Bună ziua',
  sampleSentence: 'Bună ziua! Mă numesc Linu. Hai să învățăm română!',
};
