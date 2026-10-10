import type { LanguagePack } from '../types';
import { VOCAB_LMO } from './vocabulario';
import { UNITS_LMO } from './curriculo';
import { GRAMMAR_LMO } from './gramatica';
import { STORIES_LMO } from './historias';
import { COMMUNITY_LMO, ETYMOLOGY_LMO, JOURNAL_PROMPTS_LMO, SCENARIOS_LMO, SHADOWING_LMO } from './extras';
import { ACCENTS_LMO } from './sotaques';
import { VARIANTS_LMO } from './variantes';

export const LOMBARDO: LanguagePack = {
  code: 'lmo',
  name: 'Lombardo',
  nativeName: 'Lombard',
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Galo-itálico'],
    region: 'Lombardia (norte da Itália, ao redor de Milão) e parte da Suíça italiana',
    writing: 'Alfabeto latino, sem norma ortográfica única oficial — convenção tradicional do milanês usada aqui',
  },
  speechLocale: 'lmo-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, 66 palavras, 4 tópicos de gramática, 2 histórias), na variedade milanesa. O dispositivo provavelmente não terá uma voz nativa para o lombardo. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_LMO,
  units: UNITS_LMO,
  etymology: ETYMOLOGY_LMO,
  community: COMMUNITY_LMO,
  scenarios: SCENARIOS_LMO,
  stories: [...STORIES_LMO, ...VARIANTS_LMO.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_LMO,
  accents: ACCENTS_LMO,
  grammar: GRAMMAR_LMO,
  journalPrompts: JOURNAL_PROMPTS_LMO,
  shadowing: SHADOWING_LMO,
  specialChars: ['ö', 'ü', 'à', 'è', 'ì', 'ò', 'ù'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Ciau',
  sampleSentence: 'Ciau! Mi sont Linu. Mparemm lombard insema!',
  phrases: { hi: 'Ciau!', thanks: 'Grassie!', letsStart: ['Cuminciomm!', 'Vamos começar!'] },
  formalMarkers: 'vialter (com o verbo no plural), pre piasè, scüsa',
  cognateNote:
    'O lombardo é uma língua românica, parente do italiano e do português: os três vêm do latim. Por isso “pan” lembra “pão” e “nòmm” lembra “nome”. Mas o lombardo perdeu a vogal final de muitas palavras (can, de “cane”) e ganhou sons que o italiano não tem, como o “ö” de “fiœu” (filho). Cada palavra mostra a raiz e os parentes em outras línguas.',
};
