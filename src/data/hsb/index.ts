import type { LanguagePack } from '../types';
import { VOCAB_HSB } from './vocabulario';
import { UNITS_HSB } from './curriculo';
import { GRAMMAR_HSB } from './gramatica';
import { STORIES_HSB } from './historias';
import { COMMUNITY_HSB, ETYMOLOGY_HSB, JOURNAL_PROMPTS_HSB, SCENARIOS_HSB, SHADOWING_HSB } from './extras';

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
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~79 palavras, 4 tópicos de gramática, 2 histórias), ainda sem transcrição fonética. O alto-sorábio é uma língua minoritária reconhecida oficialmente na Alemanha, com alguns milhares de falantes na região de Budyšin (Bautzen); o vocabulário foi conferido por busca em dicionários (Wiktionary, Glosbe, Omniglot), mas uma revisão por um falante nativo ainda é recomendada. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HSB,
  units: UNITS_HSB,
  etymology: ETYMOLOGY_HSB,
  community: COMMUNITY_HSB,
  scenarios: SCENARIOS_HSB,
  stories: STORIES_HSB,
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
