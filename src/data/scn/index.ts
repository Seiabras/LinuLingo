import type { LanguagePack } from '../types';
import { VOCAB_SCN } from './vocabulario';
import { UNITS_SCN } from './curriculo';
import { GRAMMAR_SCN } from './gramatica';
import { STORIES_SCN } from './historias';
import { COMMUNITY_SCN, ETYMOLOGY_SCN, JOURNAL_PROMPTS_SCN, SCENARIOS_SCN, SHADOWING_SCN } from './extras';

export const SICILIANO: LanguagePack = {
  code: 'scn',
  name: 'Siciliano',
  nativeName: 'Sicilianu',
  flag: '🇮🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ítalo-dálmata'],
    region: 'Sicília e partes do sul da Calábria (Itália)',
    writing: 'Alfabeto latino (sem norma oficial única; convenção tradicional usada aqui, incluindo o dígrafo ḍḍ)',
  },
  speechLocale: 'scn-IT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~85 palavras, 4 tópicos de gramática, 2 histórias), na convenção ortográfica tradicional, ainda sem transcrição fonética. O dispositivo provavelmente não terá uma voz nativa para o siciliano. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SCN,
  units: UNITS_SCN,
  etymology: ETYMOLOGY_SCN,
  community: COMMUNITY_SCN,
  scenarios: SCENARIOS_SCN,
  stories: STORIES_SCN,
  grammar: GRAMMAR_SCN,
  journalPrompts: JOURNAL_PROMPTS_SCN,
  shadowing: SHADOWING_SCN,
  specialChars: ['ḍ', 'à', 'è', 'ì', 'ò', 'ù'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Bongiornu',
  sampleSentence: 'Bongiornu! Mi chiamu Linu. Mparamu sicilianu!',
  phrases: { hi: 'Bongiornu!', thanks: 'Grazzi!', letsStart: ['Accuminciamu!', 'Vamos começar!'] },
  formalMarkers: 'vuàtri (com o verbo no plural), pi favuri, scusati',
  cognateNote:
    'O siciliano é uma língua românica, parente do italiano e do português: os três vêm do latim. Por isso “pani” lembra “pão” e “acqua” lembra “água”. Mas séculos sob domínio grego e árabe deixaram palavras que o italiano padrão não tem, como “giuggiulena” (gergelim), do árabe. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
