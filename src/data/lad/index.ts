import type { LanguagePack } from '../types';
import { VOCAB_LAD } from './vocabulario';
import { UNITS_LAD } from './curriculo';
import { GRAMMAR_LAD } from './gramatica';
import { STORIES_LAD } from './historias';
import { COMMUNITY_LAD, ETYMOLOGY_LAD, JOURNAL_PROMPTS_LAD, SCENARIOS_LAD, SHADOWING_LAD } from './extras';
import { ACCENTS_LAD } from './sotaques';
import { VARIANTS_LAD } from './variantes';

export const JUDEU_ESPANHOL: LanguagePack = {
  code: 'lad',
  name: 'Judeu-espanhol (ladino)',
  nativeName: 'Djudeo-espanyol',
  // língua sem território próprio (diáspora sefardita): um emoji simbólico em vez de uma bandeira.
  flag: '📜',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico', 'Castelhano'],
    region: 'Diáspora sefardita (Israel, Turquia, Bálcãs, Américas)',
    writing: 'Alfabeto latino (grafia da Aki Yerushalayim); também letras hebraicas',
  },
  speechLocale: 'lad',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~95 palavras, 4 tópicos de gramática, 2 histórias), na grafia latina da Aki Yerushalayim. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_LAD,
  units: UNITS_LAD,
  etymology: ETYMOLOGY_LAD,
  community: COMMUNITY_LAD,
  scenarios: SCENARIOS_LAD,
  stories: [...STORIES_LAD, ...VARIANTS_LAD.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_LAD,
  accents: ACCENTS_LAD,
  grammar: GRAMMAR_LAD,
  journalPrompts: JOURNAL_PROMPTS_LAD,
  shadowing: SHADOWING_LAD,
  specialChars: [],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Ke haber',
  sampleSentence: 'Ke haber? Me yamo Linu. Vamos ambezar ladino!',
  phrases: { hi: 'Ke haber?', thanks: 'Grasias!', letsStart: ['Vamos!', 'Vamos começar!'] },
  formalMarkers: 'vos (com o verbo no plural, para uma pessoa só), por favor',
  cognateNote:
    'O judeu-espanhol é o castelhano que os sefarditas levaram em 1492, com palavras do hebraico, do turco, do árabe, do francês e do português. Cada palavra mostra a origem e os parentes nas línguas irmãs.',
};
