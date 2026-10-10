import type { LanguagePack } from '../types';
import { VOCAB_CO } from './vocabulario';
import { UNITS_CO } from './curriculo';
import { GRAMMAR_CO } from './gramatica';
import { STORIES_CO } from './historias';
import { COMMUNITY_CO, ETYMOLOGY_CO, JOURNAL_PROMPTS_CO, SCENARIOS_CO, SHADOWING_CO } from './extras';
import { ACCENTS_CO } from './sotaques';

export const CORSO: LanguagePack = {
  code: 'co',
  name: 'Corso',
  nativeName: 'Corsu',
  flag: '🇫🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ítalo-dálmata'],
    region: 'Córsega (França)',
    writing: 'Alfabeto latino (norma INFCOR, Università di Corsica)',
  },
  speechLocale: 'co-FR',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~90 palavras, 4 tópicos de gramática, 2 histórias), na variedade cismontana (norte da ilha, a mais próxima do toscano). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_CO,
  units: UNITS_CO,
  etymology: ETYMOLOGY_CO,
  community: COMMUNITY_CO,
  scenarios: SCENARIOS_CO,
  stories: STORIES_CO,
  accents: ACCENTS_CO,
  grammar: GRAMMAR_CO,
  journalPrompts: JOURNAL_PROMPTS_CO,
  shadowing: SHADOWING_CO,
  specialChars: ['à', 'è', 'ì', 'ò', 'ù'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Bonghjornu',
  sampleSentence: 'Bonghjornu! Mi chjamu Linu. Amparemu u corsu inseme!',
  phrases: { hi: 'Bonghjornu!', thanks: 'Grazie!', letsStart: ['Principiemu!', 'Vamos começar!'] },
  formalMarkers: 'voi (com o verbo no plural), per piacè, scusate',
  cognateNote:
    'O corso é uma língua itálico-românica bem próxima do toscano e do italiano antigo — tão próxima que, por muito tempo, foi tratada como um dialeto da Itália, antes de a ilha passar à França em 1768. Palavras como «casa», «pane» e «acqua» ficam quase idênticas ao italiano e fáceis de reconhecer para quem fala português. Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
