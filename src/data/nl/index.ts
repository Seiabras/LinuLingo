import type { LanguagePack } from '../types';
import { VOCAB_NL } from './vocabulario';
import { UNITS_NL } from './curriculo';
import { GRAMMAR_NL } from './gramatica';
import { STORIES_NL } from './historias';
import { COMMUNITY_NL, ETYMOLOGY_NL, JOURNAL_PROMPTS_NL, SCENARIOS_NL, SHADOWING_NL } from './extras';

export const NEERLANDES: LanguagePack = {
  code: 'nl',
  name: 'Neerlandês',
  nativeName: 'Nederlands',
  flag: '🇳🇱',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Germânico', 'Germânico ocidental', 'Baixo-franconiano'],
    region: 'Países Baixos, Flandres (Bélgica) e Suriname',
    writing: 'Alfabeto latino, na ortografia oficial da Nederlandse Taalunie (Woordenlijst, o «Groene Boekje»)',
  },
  speechLocale: 'nl-NL',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~90 palavras, 4 tópicos de gramática, 2 histórias), no neerlandês-padrão dos Países Baixos. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_NL,
  units: UNITS_NL,
  etymology: ETYMOLOGY_NL,
  community: COMMUNITY_NL,
  scenarios: SCENARIOS_NL,
  stories: STORIES_NL,
  grammar: GRAMMAR_NL,
  journalPrompts: JOURNAL_PROMPTS_NL,
  shadowing: SHADOWING_NL,
  specialChars: ['é', 'ë', 'ï', 'è'],
  // gênero comum (de) e neutro (het), como no sueco: a sala do masculino guarda as de-woorden
  genders: ['m', 'n'],
  genderNames: { m: 'comum (de)', n: 'neutro (het)' },
  greeting: 'Hallo',
  sampleSentence: 'Hallo! Ik heet Linu. We leren Nederlands!',
  phrases: { hi: 'Hallo!', thanks: 'Dank je!', letsStart: ['We beginnen!', 'Vamos começar!'] },
  formalMarkers: 'u (em vez de jij), alstublieft, dank u wel, pardon',
  cognateNote:
    'O neerlandês é uma língua germânica que fica entre o alemão e o inglês: huis (casa) lembra o alemão «Haus» e o inglês «house», water (água) é igual ao inglês. Do latim e do francês vieram muitas palavras que o brasileiro reconhece (familie, station, kaas de «caseus»).',
};
