import type { LanguagePack } from '../types';
import { VOCAB_PMS } from './vocabulario';
import { UNITS_PMS } from './curriculo';
import { GRAMMAR_PMS } from './gramatica';
import { STORIES_PMS } from './historias';
import { COMMUNITY_PMS, ETYMOLOGY_PMS, JOURNAL_PROMPTS_PMS, SCENARIOS_PMS, SHADOWING_PMS } from './extras';

export const PIEMONTES: LanguagePack = {
  code: 'pms',
  name: 'Piemontês',
  nativeName: 'Piemontèis',
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Galo-itálico'],
    region: 'Piemonte (noroeste da Itália, ao redor de Turim)',
    writing: 'Alfabeto latino, Grafia Piemontese Moderna (norma literária padrão)',
  },
  speechLocale: 'pms-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~86 palavras, 4 tópicos de gramática, 2 histórias), na variedade de Turim. O dispositivo provavelmente não terá uma voz nativa para o piemontês. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_PMS,
  units: UNITS_PMS,
  etymology: ETYMOLOGY_PMS,
  community: COMMUNITY_PMS,
  scenarios: SCENARIOS_PMS,
  stories: STORIES_PMS,
  grammar: GRAMMAR_PMS,
  journalPrompts: JOURNAL_PROMPTS_PMS,
  shadowing: SHADOWING_PMS,
  specialChars: ['ë', 'ò', 'ù', 'à', 'è', 'ì'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Cerea',
  sampleSentence: 'Cerea! Mi i son Linu. Amprendoma piemontèis ansema!',
  phrases: { hi: 'Cerea!', thanks: 'Mersi!', letsStart: ['Ancaminoma!', 'Vamos começar!'] },
  formalMarkers: 'voiàutri (com o verbo no plural), për piasì, scusa',
  cognateNote:
    'O piemontês é uma língua românica, parente do português e do italiano: os três vêm do latim. Por isso “eva” lembra “água” e “pan” lembra “pão”. Mas é uma língua galo-itálica, mais próxima do francês e do occitano do que o italiano padrão em vários traços — como o pronome verbal obrigatório (“mi i son”) e vogais como o “ë”. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
