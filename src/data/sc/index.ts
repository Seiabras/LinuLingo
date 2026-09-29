import type { LanguagePack } from '../types';
import { VOCAB_SC } from './vocabulario';
import { UNITS_SC } from './curriculo';
import { GRAMMAR_SC } from './gramatica';
import { STORIES_SC } from './historias';
import { COMMUNITY_SC, ETYMOLOGY_SC, JOURNAL_PROMPTS_SC, SCENARIOS_SC, SHADOWING_SC } from './extras';

export const SARDO: LanguagePack = {
  code: 'sc',
  name: 'Sardo',
  nativeName: 'Sardu',
  // sem bandeira própria no Unicode (a Sardenha não é país da ISO 3166-1): vale a da Itália.
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Sardo'],
    region: 'Sardenha (Itália)',
    writing: 'Alfabeto latino (norma Limba Sarda Comuna)',
  },
  speechLocale: 'sc-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~95 palavras, 4 tópicos de gramática, 2 histórias), na norma Limba Sarda Comuna. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SC,
  units: UNITS_SC,
  etymology: ETYMOLOGY_SC,
  community: COMMUNITY_SC,
  scenarios: SCENARIOS_SC,
  stories: STORIES_SC,
  grammar: GRAMMAR_SC,
  journalPrompts: JOURNAL_PROMPTS_SC,
  shadowing: SHADOWING_SC,
  specialChars: ['à', 'è', 'ì', 'ò', 'ù'],
  greeting: 'Bona die',
  sampleSentence: 'Bona die! Mi naro Linu. Imparamus su sardu!',
  phrases: { hi: 'Salude!', thanks: 'Gràtzias!', letsStart: ['Ajò!', 'Vamos começar!'] },
  formalMarkers: 'pro praghere, gràtzias meda',
  cognateNote:
    'O sardo guardou do latim sons e palavras que as outras línguas românicas perderam (domo, casa; chelu, céu). Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
