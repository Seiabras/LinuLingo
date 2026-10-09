import type { LanguagePack } from '../types';
import { VOCAB_FY } from './vocabulario';
import { UNITS_FY } from './curriculo';
import { GRAMMAR_FY } from './gramatica';
import { STORIES_FY } from './historias';
import { COMMUNITY_FY, ETYMOLOGY_FY, JOURNAL_PROMPTS_FY, SCENARIOS_FY, SHADOWING_FY } from './extras';

export const FRISIO: LanguagePack = {
  code: 'fy',
  name: 'Frísio ocidental',
  nativeName: 'Frysk',
  flag: '🇳🇱',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Anglo-frísio'],
    region: 'Frísia (Fryslân, norte dos Países Baixos)',
    writing: 'Alfabeto latino, norma oficial da Afûk e da Fryske Akademy',
  },
  speechLocale: 'fy-NL',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Níveis A1 e A2 completos por enquanto (unidades 1 a 4, ~112 palavras, 8 tópicos de gramática, 4 histórias), na norma oficial da Afûk. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_FY,
  units: UNITS_FY,
  etymology: ETYMOLOGY_FY,
  community: COMMUNITY_FY,
  scenarios: SCENARIOS_FY,
  stories: STORIES_FY,
  grammar: GRAMMAR_FY,
  journalPrompts: JOURNAL_PROMPTS_FY,
  shadowing: SHADOWING_FY,
  specialChars: ['û', 'ê', 'â', 'ú', 'é', 'ô'],
  // masculino, feminino e neutro, mas sem muita marcação visível no adjetivo
  genders: ['m', 'f', 'n'],
  greeting: 'Goeie',
  sampleSentence: 'Goeie! Ik hjit Linu. Litte wy Frysk leare!',
  phrases: { hi: 'Goeie!', thanks: 'Tige tank!', letsStart: ['Litte wy begjinne!', 'Vamos começar!'] },
  formalMarkers: 'jimme (plural), asjeblyft, pardon',
  cognateNote:
    'O frísio ocidental é a língua viva mais parecida com o inglês: as duas vêm do mesmo ramo anglo-frísio e se separaram do resto do germânico juntas. Por isso “hûs” lembra “house”, “tsiis” lembra “cheese” e “brea” lembra “bread”. Cada palavra mostra a raiz germânica e os parentes nas línguas irmãs.',
};
