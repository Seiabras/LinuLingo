import type { LanguagePack } from '../types';
import { VOCAB_SR } from './vocabulario';
import { UNITS_SR } from './curriculo';
import { GRAMMAR_SR } from './gramatica';
import { STORIES_SR } from './historias';
import { COMMUNITY_SR, ETYMOLOGY_SR, JOURNAL_PROMPTS_SR, SCENARIOS_SR, SHADOWING_SR } from './extras';

export const SERVIO: LanguagePack = {
  code: 'sr',
  name: 'Sérvio',
  nativeName: 'Српски',
  flag: '🇷🇸',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo meridional'],
    region: 'Península Balcânica (Sérvia e regiões vizinhas)',
    writing: 'Alfabeto cirílico sérvio de Vuk Karadžić (30 letras, pronúncia ekaviana); o alfabeto latino sérvio (Gaj), de correspondência letra a letra, também é de uso corrente',
  },
  speechLocale: 'sr-RS',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~87 palavras, 4 tópicos de gramática, 2 histórias), no sérvio padrão ekaviano em cirílico, ainda sem a versão em alfabeto latino, sem marcação do acento tonal e sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SR,
  units: UNITS_SR,
  etymology: ETYMOLOGY_SR,
  community: COMMUNITY_SR,
  scenarios: SCENARIOS_SR,
  stories: STORIES_SR,
  grammar: GRAMMAR_SR,
  journalPrompts: JOURNAL_PROMPTS_SR,
  shadowing: SHADOWING_SR,
  specialChars: ['ђ', 'ј', 'љ', 'њ', 'ћ', 'џ', 'ж', 'ч', 'ш'],
  // o alfabeto cirílico sérvio em ordem (азбука), em fileiras
  keyboardRows: [
    ['а', 'б', 'в', 'г', 'д', 'ђ', 'е', 'ж', 'з', 'и'],
    ['ј', 'к', 'л', 'љ', 'м', 'н', 'њ', 'о', 'п', 'р'],
    ['с', 'т', 'ћ', 'у', 'ф', 'х', 'ц', 'ч', 'џ', 'ш'],
  ],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Добар дан',
  sampleSentence: 'Добар дан! Зовем се Лину. Хајде да учимо српски!',
  phrases: { hi: 'Здраво!', thanks: 'Хвала!', letsStart: ['Хајде да почнемо!', 'Vamos começar!'] },
  formalMarkers: 'ви (com o verbo no plural, para uma pessoa só), молим, извините',
  cognateNote:
    'O sérvio é uma língua eslava meridional, prima distante do português: os dois vêm do indo-europeu. Por isso «три» lembra «três». Dos séculos de convivência com o turco vieram palavras como «кафа». Cada palavra mostra a raiz e os parentes em outras línguas.',
};
