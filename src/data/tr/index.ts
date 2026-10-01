import type { LanguagePack } from '../types';
import { VOCAB_TR } from './vocabulario';
import { UNITS_TR } from './curriculo';
import { GRAMMAR_TR } from './gramatica';
import { STORIES_TR } from './historias';
import { COMMUNITY_TR, ETYMOLOGY_TR, JOURNAL_PROMPTS_TR, SCENARIOS_TR, SHADOWING_TR } from './extras';

export const TURCO: LanguagePack = {
  code: 'tr',
  name: 'Turco',
  nativeName: 'Türkçe',
  flag: '🇹🇷',
  lineage: {
    family: 'Túrquico',
    branches: ['Oghuz'],
    region: 'Anatólia (Ásia Ocidental) e Trácia oriental',
    writing: 'Alfabeto latino (ç, ğ, ı, ö, ş, ü), na norma da Associação da Língua Turca (TDK)',
  },
  speechLocale: 'tr-TR',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~80 palavras, 4 tópicos de gramática, 2 histórias), no turco-padrão de Istambul. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TR,
  units: UNITS_TR,
  etymology: ETYMOLOGY_TR,
  community: COMMUNITY_TR,
  scenarios: SCENARIOS_TR,
  stories: STORIES_TR,
  grammar: GRAMMAR_TR,
  journalPrompts: JOURNAL_PROMPTS_TR,
  shadowing: SHADOWING_TR,
  specialChars: ['ç', 'ğ', 'ı', 'İ', 'ö', 'ş', 'ü'],
  greeting: 'Merhaba',
  sampleSentence: 'Merhaba! Benim adım Linu. Haydi Türkçe öğrenelim!',
  phrases: { hi: 'Merhaba!', thanks: 'Teşekkürler!', letsStart: ['Haydi başlayalım!', 'Vamos começar!'] },
  formalMarkers: 'siz (o tratamento formal, com o verbo no plural), lütfen, teşekkür ederim',
  cognateNote:
    'O turco não é parente do português: é da família túrquica, com o azeri, o cazaque e o uzbeque. Mas pegou muitas palavras do árabe e do persa e, mais tarde, do francês (otobüs, istasyon), e deu ao mundo palavras como “iogurte” (yoğurt). Cada palavra mostra de onde veio.',
};
