import type { LanguagePack } from '../types';
import { VOCAB_UK } from './vocabulario';
import { UNITS_UK } from './curriculo';
import { GRAMMAR_UK } from './gramatica';
import { STORIES_UK } from './historias';
import { COMMUNITY_UK, ETYMOLOGY_UK, JOURNAL_PROMPTS_UK, SCENARIOS_UK, SHADOWING_UK } from './extras';

export const UCRANIANO: LanguagePack = {
  code: 'uk',
  name: 'Ucraniano',
  nativeName: 'Українська',
  flag: '🇺🇦',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo oriental'],
    region: 'Europa Oriental (bacia do Dniepre e costa norte do mar Negro)',
    writing: 'Alfabeto cirílico (33 letras, ortografia ucraniana de 2019)',
  },
  speechLocale: 'uk-UA',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~87 palavras, 4 tópicos de gramática, 2 histórias), no ucraniano padrão, com a sílaba tônica marcada; ainda sem treino do alfabeto. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_UK,
  units: UNITS_UK,
  etymology: ETYMOLOGY_UK,
  community: COMMUNITY_UK,
  scenarios: SCENARIOS_UK,
  stories: STORIES_UK,
  grammar: GRAMMAR_UK,
  journalPrompts: JOURNAL_PROMPTS_UK,
  shadowing: SHADOWING_UK,
  specialChars: ['ґ', 'є', 'і', 'ї', 'й', 'ь', '’'],
  // teclado ucraniano padrão (ЙЦУКЕН)
  keyboardRows: [
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ї'],
    ['ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'є'],
    ['ґ', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '’'],
  ],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'До́брий день',
  sampleSentence: 'До́брий день! Мене́ зву́ть Лі́ну. Дава́йте вчи́ти украї́нську!',
  phrases: { hi: 'Приві́т!', thanks: 'Дя́кую!', letsStart: ['Почина́ймо!', 'Vamos começar!'] },
  formalMarkers: 'ви (com o verbo no plural, para uma pessoa só), будь ла́ска, ви́бачте',
  cognateNote:
    'O ucraniano é uma língua eslava oriental, prima distante do português: os dois vêm do indo-europeu. Por isso «три» lembra «três» e «дім» lembra «doméstico». Cada palavra mostra a raiz e os parentes em outras línguas.',
};
