import type { LanguagePack } from '../types';
import { VOCAB_SK } from './vocabulario';
import { UNITS_SK } from './curriculo';
import { GRAMMAR_SK } from './gramatica';
import { STORIES_SK } from './historias';
import { COMMUNITY_SK, ETYMOLOGY_SK, JOURNAL_PROMPTS_SK, SCENARIOS_SK, SHADOWING_SK } from './extras';

export const ESLOVACO: LanguagePack = {
  code: 'sk',
  name: 'Eslovaco',
  nativeName: 'Slovenčina',
  flag: '🇸🇰',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo ocidental'],
    region: 'Eslováquia (vales dos Cárpatos ocidentais e bacia do Danúbio)',
    writing: 'Alfabeto latino com mäkčeň e dĺžeň (eslovaco padrão, spisovná slovenčina)',
  },
  speechLocale: 'sk-SK',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~87 palavras, 4 tópicos de gramática, 2 histórias), no eslovaco padrão. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_SK,
  units: UNITS_SK,
  etymology: ETYMOLOGY_SK,
  community: COMMUNITY_SK,
  scenarios: SCENARIOS_SK,
  stories: STORIES_SK,
  grammar: GRAMMAR_SK,
  journalPrompts: JOURNAL_PROMPTS_SK,
  shadowing: SHADOWING_SK,
  specialChars: ['á', 'ä', 'č', 'ď', 'é', 'í', 'ĺ', 'ľ', 'ň', 'ó', 'ô', 'ŕ', 'š', 'ť', 'ú', 'ý', 'ž'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Dobrý deň',
  sampleSentence: 'Dobrý deň! Volám sa Linu. Poďme sa učiť po slovensky!',
  phrases: { hi: 'Ahoj!', thanks: 'Ďakujem!', letsStart: ['Začíname!', 'Vamos começar!'] },
  formalMarkers: 'vy (com o verbo no plural, para uma pessoa só), prosím, prepáčte',
  cognateNote:
    'O eslovaco é uma língua eslava ocidental, prima distante do português: os dois vêm do indo-europeu. Por isso «tri» lembra «três» e «dom» lembra «doméstico». Cada palavra mostra a raiz e os parentes em outras línguas.',
};
