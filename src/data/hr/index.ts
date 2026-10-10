import type { LanguagePack } from '../types';
import { VOCAB_HR } from './vocabulario';
import { UNITS_HR } from './curriculo';
import { GRAMMAR_HR } from './gramatica';
import { STORIES_HR } from './historias';
import { COMMUNITY_HR, ETYMOLOGY_HR, JOURNAL_PROMPTS_HR, SCENARIOS_HR, SHADOWING_HR } from './extras';
import { ACCENTS_HR } from './sotaques';
import { VARIANTS_HR } from './variantes';

export const CROATA: LanguagePack = {
  code: 'hr',
  name: 'Croata',
  nativeName: 'Hrvatski',
  flag: '🇭🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo meridional'],
    region: 'Península Balcânica e litoral do Adriático (Croácia e regiões vizinhas)',
    writing: 'Alfabeto latino de Gaj (30 letras, com č, ć, dž, đ, lj, nj, š, ž; croata padrão ijekaviano)',
  },
  speechLocale: 'hr-HR',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos (unidades 1 a 4, ~130 palavras, 7 tópicos de gramática, 4 histórias), no croata padrão, sem marcação do acento tonal e ainda sem transcrição fonética. O B1 em diante chega nas próximas atualizações.',
  },
  vocab: VOCAB_HR,
  units: UNITS_HR,
  etymology: ETYMOLOGY_HR,
  community: COMMUNITY_HR,
  scenarios: SCENARIOS_HR,
  stories: [...STORIES_HR, ...VARIANTS_HR.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_HR,
  accents: ACCENTS_HR,
  grammar: GRAMMAR_HR,
  journalPrompts: JOURNAL_PROMPTS_HR,
  shadowing: SHADOWING_HR,
  specialChars: ['č', 'ć', 'đ', 'š', 'ž'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Dobar dan',
  sampleSentence: 'Dobar dan! Zovem se Linu. Učimo hrvatski!',
  phrases: { hi: 'Bok!', thanks: 'Hvala!', letsStart: ['Počnimo!', 'Vamos começar!'] },
  formalMarkers: 'vi (com o verbo no plural, para uma pessoa só), molim, oprostite',
  cognateNote:
    'O croata é uma língua eslava meridional, prima distante do português: os dois vêm do indo-europeu. Por isso “tri” lembra “três”. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
