import type { LanguagePack } from '../types';
import { VOCAB_MK } from './vocabulario';
import { UNITS_MK } from './curriculo';
import { GRAMMAR_MK } from './gramatica';
import { STORIES_MK } from './historias';
import { COMMUNITY_MK, ETYMOLOGY_MK, JOURNAL_PROMPTS_MK, SCENARIOS_MK, SHADOWING_MK } from './extras';
import { toReadingMk } from '@/services/reading-cyrillic';

export const MACEDONIO: LanguagePack = {
  code: 'mk',
  name: 'Macedônio',
  nativeName: 'Македонски',
  flag: '🇲🇰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo meridional'],
    region: 'Macedônia do Norte e comunidades vizinhas nos Bálcãs',
    writing: 'Alfabeto cirílico macedônio (31 letras, norma de 1945)',
  },
  speechLocale: 'mk-MK',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~85 palavras, 4 tópicos de gramática, 2 histórias), no macedônio padrão, ainda sem transcrição fonética e sem treino do alfabeto. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MK,
  units: UNITS_MK,
  etymology: ETYMOLOGY_MK,
  community: COMMUNITY_MK,
  scenarios: SCENARIOS_MK,
  stories: STORIES_MK,
  grammar: GRAMMAR_MK,
  journalPrompts: JOURNAL_PROMPTS_MK,
  shadowing: SHADOWING_MK,
  // o cirílico não é latino: embaixo de cada frase vem a romanização oficial (Здраво · Zdravo)
  reading: (t) => (/[Ѐ-ӿ]/.test(t) ? toReadingMk(t) : ''),
  specialChars: ['ѓ', 'ѕ', 'ј', 'љ', 'њ', 'ќ', 'џ'],
  // o alfabeto macedônio em ordem, em fileiras
  keyboardRows: [
    ['а', 'б', 'в', 'г', 'д', 'ѓ', 'е', 'ж', 'з', 'ѕ', 'и'],
    ['ј', 'к', 'л', 'љ', 'м', 'н', 'њ', 'о', 'п', 'р'],
    ['с', 'т', 'ќ', 'у', 'ф', 'х', 'ц', 'ч', 'џ', 'ш'],
  ],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Здраво',
  sampleSentence: 'Здраво! Се викам Лину. Да учиме македонски заедно!',
  phrases: { hi: 'Здраво!', thanks: 'Благодарам!', letsStart: ['Да започнеме!', 'Vamos começar!'] },
  formalMarkers: 'вие (com o verbo no plural, para uma pessoa só), молам, извинете',
  cognateNote:
    'O macedônio é uma língua eslava meridional, prima próxima do búlgaro e prima distante do português: os dois vêm do indo-europeu. Por isso “три” lembra “três” e “ноќ” lembra “noite”. Durante séculos sob domínio otomano, o macedônio também herdou palavras do turco, como “кафе”. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
