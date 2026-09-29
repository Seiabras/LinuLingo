import type { LanguagePack } from '../types';
import { VOCAB_PL } from './vocabulario';
import { UNITS_PL } from './curriculo';
import { GRAMMAR_PL } from './gramatica';
import { STORIES_PL } from './historias';
import { COMMUNITY_PL, ETYMOLOGY_PL, JOURNAL_PROMPTS_PL, SCENARIOS_PL, SHADOWING_PL } from './extras';

export const POLONES: LanguagePack = {
  code: 'pl',
  name: 'Polonês',
  nativeName: 'Polski',
  flag: '🇵🇱',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo ocidental'],
    region: 'Polônia (bacias do Vístula e do Oder)',
    writing: 'Alfabeto latino (32 letras, com ą, ć, ę, ł, ń, ó, ś, ź, ż; ortografia padrão)',
  },
  speechLocale: 'pl-PL',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~89 palavras, 4 tópicos de gramática, 2 histórias), no polonês padrão e ainda sem transcrição fonética. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_PL,
  units: UNITS_PL,
  etymology: ETYMOLOGY_PL,
  community: COMMUNITY_PL,
  scenarios: SCENARIOS_PL,
  stories: STORIES_PL,
  grammar: GRAMMAR_PL,
  journalPrompts: JOURNAL_PROMPTS_PL,
  shadowing: SHADOWING_PL,
  specialChars: ['ą', 'ć', 'ę', 'ł', 'ń', 'ó', 'ś', 'ź', 'ż'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Dzień dobry',
  sampleSentence: 'Dzień dobry! Mam na imię Linu. Uczmy się polskiego!',
  phrases: { hi: 'Cześć!', thanks: 'Dziękuję!', letsStart: ['Zaczynamy!', 'Vamos começar!'] },
  formalMarkers: 'pan / pani (com o verbo na 3ª pessoa), proszę, przepraszam',
  cognateNote:
    'O polonês é uma língua eslava ocidental, prima distante do português: os dois vêm do indo-europeu. Por isso «trzy» lembra «três» e «dom» lembra «doméstico». Cada palavra mostra a raiz e os parentes em outras línguas.',
};
