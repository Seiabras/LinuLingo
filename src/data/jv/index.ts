import type { LanguagePack } from '../types';
import { VOCAB_JV } from './vocabulario';
import { UNITS_JV } from './curriculo';
import { GRAMMAR_JV } from './gramatica';
import { STORIES_JV } from './historias';
import { COMMUNITY_JV, ETYMOLOGY_JV, JOURNAL_PROMPTS_JV, SCENARIOS_JV, SHADOWING_JV } from './extras';
import { ACCENTS_JV } from './sotaques';
import { VARIANTS_JV } from './variantes';

export const JAVANES: LanguagePack = {
  code: 'jv',
  name: 'Javanês',
  nativeName: 'Jawa',
  flag: '🇮🇩',
  lineage: {
    family: 'Austronésio',
    branches: ['Malaio-polinésio'],
    region: 'Indonésia (ilha de Java)',
    writing: 'Alfabeto latino hoje (antigamente a escrita javanesa, Hanacaraka/Carakan)',
  },
  speechLocale: 'jv-ID',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'Por enquanto, até o nível A2 (unidades 1 a 4, registro ngoko/informal, com algumas palavras krama só pra reconhecimento). De B1 até o C2, e o vocabulário krama completo, chegam nas próximas atualizações.',
  },
  vocab: VOCAB_JV,
  units: UNITS_JV,
  etymology: ETYMOLOGY_JV,
  community: COMMUNITY_JV,
  scenarios: SCENARIOS_JV,
  stories: [...STORIES_JV, ...VARIANTS_JV.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_JV,
  accents: ACCENTS_JV,
  grammar: GRAMMAR_JV,
  journalPrompts: JOURNAL_PROMPTS_JV,
  shadowing: SHADOWING_JV,
  specialChars: ['dh', 'th', 'å', 'è', 'é'],
  // o javanês não marca gênero gramatical: os substantivos não se dividem por gênero
  genders: [],
  greeting: 'Halo',
  sampleSentence: 'Halo! Jenengku Linu. Ayo, kita sinau basa Jawa!',
  phrases: { hi: 'Halo!', thanks: 'Matur nuwun!', letsStart: ['Ayo!', 'Vamos começar!'] },
  formalMarkers: 'o registro krama (por enquanto só em pares de reconhecimento, como ngendi/pundi e pira/pinten) — o ngoko, ensinado aqui em vocabulário completo, já é o informal',
  cognateNote:
    'O javanês é uma língua austronésia, parente distante do malaio e do indonésio, sem parentesco com o português. Palavras como “kucing” (gato) são quase idênticas ao indonésio “kucing” — as duas línguas compartilham boa parte do vocabulário cotidiano, mesmo sendo línguas diferentes, com gramáticas e, sobretudo, níveis de formalidade (ngoko/krama) próprios do javanês.',
};
