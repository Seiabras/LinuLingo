import type { LanguagePack } from '../types';
import { VOCAB_KA } from './vocabulario';
import { UNITS_KA } from './curriculo';
import { GRAMMAR_KA } from './gramatica';
import { STORIES_KA } from './historias';
import { COMMUNITY_KA, ETYMOLOGY_KA, JOURNAL_PROMPTS_KA, SCENARIOS_KA, SHADOWING_KA } from './extras';

export const GEORGIANO: LanguagePack = {
  code: 'ka',
  name: 'Georgiano',
  nativeName: 'ქართული',
  flag: '🇬🇪',
  lineage: {
    family: 'Kartveliano',
    branches: ['Kartveliano'],
    region: 'Geórgia, no Cáucaso Sul',
    writing: 'Alfabeto georgiano (mkhedruli, 33 letras em uso, sem maiúsculas)',
  },
  speechLocale: 'ka-GE',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 90 palavras, 4 tópicos de gramática, 2 histórias), no georgiano padrão (o de Tbilisi). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_KA,
  units: UNITS_KA,
  etymology: ETYMOLOGY_KA,
  community: COMMUNITY_KA,
  scenarios: SCENARIOS_KA,
  stories: STORIES_KA,
  grammar: GRAMMAR_KA,
  journalPrompts: JOURNAL_PROMPTS_KA,
  shadowing: SHADOWING_KA,
  specialChars: ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'],
  // alfabeto mkhedruli inteiro, em fileiras de teclado (ordem tradicional)
  keyboardRows: [
    ['ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ'],
    ['მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ'],
    ['ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ'],
  ],
  // o georgiano não marca gênero gramatical — nem nos substantivos, nem nos pronomes
  genders: [],
  greeting: 'გამარჯობა',
  sampleSentence: 'გამარჯობა! ჩემი სახელია ლინუ. მოდი ვისწავლოთ ქართული!',
  phrases: { hi: 'გამარჯობა!', thanks: 'მადლობა!', letsStart: ['დავიწყოთ!', 'Vamos começar!'] },
  formalMarkers: 'თქვენ (com verbo no plural, para uma pessoa só), ბატონო/ქალბატონო + nome, გმადლობთ',
  cognateNote:
    'O georgiano forma, sozinho, a família kartveliana (ou sul-caucasiana) — sem parentesco comprovado com o indo-europeu, nem com nenhuma outra família de línguas do mundo. Por isso não é parente do armênio nem do grego, que têm seus próprios ramos dentro do indo-europeu. As palavras georgianas não soam como nada do português: ou vêm de uma raiz kartveliana só sua (com parentes no mingreliano, no svan e no laz, as outras línguas da família), ou são empréstimos de línguas vizinhas, como o grego, o persa, o árabe, o turco e o russo. Cada palavra do vocabulário mostra a raiz e, quando existe, o parente ou o empréstimo.',
};
