import type { LanguagePack } from '../types';
import { VOCAB_ID } from './vocabulario';
import { UNITS_ID } from './curriculo';
import { GRAMMAR_ID } from './gramatica';
import { STORIES_ID } from './historias';
import { COMMUNITY_ID, ETYMOLOGY_ID, JOURNAL_PROMPTS_ID, SCENARIOS_ID, SHADOWING_ID } from './extras';
import { toIpaId } from '@/services/ipa-id';

export const INDONESIO: LanguagePack = {
  code: 'id',
  name: 'Indonésio',
  nativeName: 'Bahasa Indonesia',
  flag: '🇮🇩',
  lineage: {
    family: 'Austronésio',
    branches: ['Malaio-polinésio', 'Malaico'],
    region: 'Arquipélago malaio (Sudeste Asiático)',
    writing: 'Alfabeto latino',
  },
  speechLocale: 'id-ID',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 130 palavras, 7 tópicos de gramática, 4 histórias). Do B1 até o C2 chega nas próximas atualizações.',
  },
  ipa: toIpaId,
  vocab: VOCAB_ID,
  units: UNITS_ID,
  etymology: ETYMOLOGY_ID,
  community: COMMUNITY_ID,
  scenarios: SCENARIOS_ID,
  stories: STORIES_ID,
  grammar: GRAMMAR_ID,
  journalPrompts: JOURNAL_PROMPTS_ID,
  shadowing: SHADOWING_ID,
  specialChars: [],
  // o indonésio não marca gênero gramatical: os substantivos não se dividem por gênero
  genders: [],
  greeting: 'Halo',
  sampleSentence: 'Halo! Nama saya Linu. Ayo belajar bahasa Indonesia!',
  phrases: { hi: 'Halo!', thanks: 'Terima kasih!', letsStart: ['Ayo mulai!', 'Vamos começar!'] },
  formalMarkers: 'Bapak/Ibu, tolong, permisi',
  cognateNote:
    'O indonésio é uma língua austronésia, sem parentesco com o português, mas com uma gramática surpreendentemente simples: sem conjugação verbal, sem gênero gramatical e sem artigos. Palavras como “kopi” (café) chegaram por outra rota até o português, mostrando como as línguas do mundo se cruzam pelo comércio.',
};
