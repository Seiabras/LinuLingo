import type { LanguagePack } from '../types';
import { VOCAB_CS } from './vocabulario';
import { UNITS_CS } from './curriculo';
import { GRAMMAR_CS } from './gramatica';
import { STORIES_CS } from './historias';
import { COMMUNITY_CS, ETYMOLOGY_CS, JOURNAL_PROMPTS_CS, SCENARIOS_CS, SHADOWING_CS } from './extras';

export const TCHECO: LanguagePack = {
  code: 'cs',
  name: 'Tcheco',
  nativeName: 'Čeština',
  flag: '🇨🇿',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo ocidental'],
    region: 'República Tcheca (Boêmia, Morávia e parte da Silésia)',
    writing: 'Alfabeto latino com háček e čárka (tcheco padrão, spisovná čeština)',
  },
  speechLocale: 'cs-CZ',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, quase 150 palavras, 7 tópicos de gramática, 4 histórias), no tcheco padrão. Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_CS,
  units: UNITS_CS,
  etymology: ETYMOLOGY_CS,
  community: COMMUNITY_CS,
  scenarios: SCENARIOS_CS,
  stories: STORIES_CS,
  grammar: GRAMMAR_CS,
  journalPrompts: JOURNAL_PROMPTS_CS,
  shadowing: SHADOWING_CS,
  specialChars: ['á', 'č', 'ď', 'é', 'ě', 'í', 'ň', 'ó', 'ř', 'š', 'ť', 'ú', 'ů', 'ý', 'ž'],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Dobrý den',
  sampleSentence: 'Dobrý den! Jmenuji se Linu. Pojďme se učit česky!',
  phrases: { hi: 'Ahoj!', thanks: 'Děkuji!', letsStart: ['Začínáme!', 'Vamos começar!'] },
  formalMarkers: 'vy (com o verbo no plural, para uma pessoa só), prosím, promiňte',
  cognateNote:
    'O tcheco é uma língua eslava ocidental, prima distante do português: os dois vêm do indo-europeu. Por isso “tři” lembra “três” e “dům” lembra “doméstico”. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
