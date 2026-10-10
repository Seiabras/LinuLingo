import type { LanguagePack } from '../types';
import { VOCAB_HSB } from './vocabulario';
import { UNITS_HSB } from './curriculo';
import { GRAMMAR_HSB } from './gramatica';
import { STORIES_HSB } from './historias';
import { COMMUNITY_HSB, ETYMOLOGY_HSB, JOURNAL_PROMPTS_HSB, SCENARIOS_HSB, SHADOWING_HSB } from './extras';
import { ACCENTS_HSB } from './sotaques';

export const ALTO_SORABIO: LanguagePack = {
  code: 'hsb',
  name: 'Alto-sorábio',
  nativeName: 'Hornjoserbšćina',
  flag: '🇩🇪',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo ocidental', 'Lusácio'],
    region: 'Alta Lusácia, leste da Alemanha (Saxônia), ao redor de Budyšin/Bautzen',
    writing: 'Alfabeto latino (ć, dź, ě, ł, ń, ó, ř, š, ž), norma oficial',
  },
  speechLocale: 'hsb-DE',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Nível A1 e A2 completos por enquanto (unidades 1 a 4, 106 palavras, 6 tópicos de gramática incluindo o caso acusativo e o pretérito composto, 4 histórias), ainda sem transcrição fonética. O alto-sorábio é uma língua minoritária reconhecida oficialmente na Alemanha, com alguns milhares de falantes na região de Budyšin (Bautzen); o vocabulário e a gramática foram conferidos em dicionários e gramáticas (Wiktionary, a Wikipédia em inglês e o Verbix), mas uma revisão por um falante nativo ainda é recomendada. Da B1.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HSB,
  units: UNITS_HSB,
  etymology: ETYMOLOGY_HSB,
  community: COMMUNITY_HSB,
  scenarios: SCENARIOS_HSB,
  stories: STORIES_HSB,
  accents: ACCENTS_HSB,
  grammar: GRAMMAR_HSB,
  journalPrompts: JOURNAL_PROMPTS_HSB,
  shadowing: SHADOWING_HSB,
  specialChars: ['ć', 'dź', 'ě', 'ł', 'ń', 'ó', 'ř', 'š', 'ž'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Witaj',
  sampleSentence: 'Witaj! Ja sym Linu. Wuknimoj hornjoserbsce!',
  phrases: { hi: 'Witaj!', thanks: 'Dźakuju so!', letsStart: ['Započnimy!', 'Vamos começar!'] },
  formalMarkers: 'wy (com o verbo no plural, para uma pessoa só), prošu, wodaj',
  cognateNote:
    'O alto-sorábio é uma língua eslava ocidental, prima do polonês e do tcheco: os três vêm do mesmo protoeslavo. Por isso “dom” lembra “dom” do russo e do polonês, e “woda” lembra “água” em quase todas as línguas eslavas. É também, com o esloveno, uma das duas línguas eslavas vivas que ainda têm o número dual, um traço raro que o protoeslavo tinha e quase todas as outras perderam.',
};
