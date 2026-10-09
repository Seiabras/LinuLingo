import type { LanguagePack } from '../types';
import { VOCAB_EN } from './vocabulario';
import { UNITS_EN } from './curriculo';
import { GRAMMAR_EN } from './gramatica';
import { STORIES_EN } from './historias';
import { COMMUNITY_EN, ETYMOLOGY_EN, JOURNAL_PROMPTS_EN, SCENARIOS_EN, SHADOWING_EN } from './extras';
import { toIpaEn } from '@/services/ipa-en';

export const INGLES: LanguagePack = {
  code: 'en',
  name: 'Inglês',
  nativeName: 'English',
  flag: '🇬🇧',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Anglo-frísio'],
    region: 'Ilhas Britânicas',
    writing: 'Alfabeto latino',
  },
  speechLocale: 'en-US',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1.1 até A2.2 completo (4 unidades, ~123 palavras, 8 tópicos de gramática — incluindo passado simples, presente contínuo, comparativo/superlativo e "there is/there are" —, 4 histórias). Do B1 até o C2 chega nas próximas atualizações. Pronúncia de referência: inglês internacional, próximo do americano.',
  },
  ipa: toIpaEn,
  vocab: VOCAB_EN,
  units: UNITS_EN,
  etymology: ETYMOLOGY_EN,
  community: COMMUNITY_EN,
  scenarios: SCENARIOS_EN,
  stories: STORIES_EN,
  grammar: GRAMMAR_EN,
  journalPrompts: JOURNAL_PROMPTS_EN,
  shadowing: SHADOWING_EN,
  specialChars: [],
  // o inglês não marca gênero gramatical: os substantivos não se dividem por gênero
  genders: [],
  greeting: 'Hello',
  sampleSentence: 'Hello! My name is Linu. Let\'s learn English!',
  phrases: { hi: 'Hi!', thanks: 'Thanks!', letsStart: ['Let\'s start!', 'Vamos começar!'] },
  formalMarkers: 'please, would you mind…?, excuse me',
  cognateNote:
    'O inglês é uma língua germânica, mas depois da conquista normanda de 1066 recebeu uma enxurrada de palavras do francês e do latim — por isso boa parte do vocabulário "de estudo" (family, nation, important) é bem parecida com o português, enquanto as palavras do dia a dia (house, water, eat) vêm da base germânica original.',
};
