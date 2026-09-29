import type { LanguagePack } from '../types';
import { VOCAB_RM } from './vocabulario';
import { UNITS_RM } from './curriculo';
import { GRAMMAR_RM } from './gramatica';
import { STORIES_RM } from './historias';
import { COMMUNITY_RM, ETYMOLOGY_RM, JOURNAL_PROMPTS_RM, SCENARIOS_RM, SHADOWING_RM } from './extras';

export const ROMANCHE: LanguagePack = {
  code: 'rm',
  name: 'Romanche',
  nativeName: 'Rumantsch',
  flag: '🇨🇭',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Reto-românico'],
    region: 'Cantão dos Grisões (Suíça)',
    writing: 'Alfabeto latino (norma Rumantsch Grischun)',
  },
  speechLocale: 'rm-CH',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~85 palavras, 4 tópicos de gramática, 2 histórias), na norma comum Rumantsch Grischun. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_RM,
  units: UNITS_RM,
  etymology: ETYMOLOGY_RM,
  community: COMMUNITY_RM,
  scenarios: SCENARIOS_RM,
  stories: STORIES_RM,
  grammar: GRAMMAR_RM,
  journalPrompts: JOURNAL_PROMPTS_RM,
  shadowing: SHADOWING_RM,
  specialChars: ['à', 'è', 'é', 'ì', 'ò', 'ù'],
  greeting: 'Allegra',
  sampleSentence: 'Allegra! Jau hai num Linu. Emprendain rumantsch!',
  phrases: { hi: 'Allegra!', thanks: 'Grazia!', letsStart: ['Nus cumenzain!', 'Vamos começar!'] },
  formalMarkers: 'vus (com o verbo no plural), per plaschair, perstgisai',
  cognateNote:
    'O romanche nasceu do latim falado nos Alpes e ficou parente próximo do ladino e do friulano. Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
