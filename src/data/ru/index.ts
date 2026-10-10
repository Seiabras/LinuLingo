import type { LanguagePack } from '../types';
import { LINGUISTICS_RU } from './linguistica';
import { VOCAB_RU } from './vocabulario';
import { UNITS_RU } from './curriculo';
import { GRAMMAR_RU } from './gramatica';
import { STORIES_RU } from './historias';
import { COMMUNITY_RU, ETYMOLOGY_RU, JOURNAL_PROMPTS_RU, SCENARIOS_RU, SHADOWING_RU } from './extras';
import { toIpaRu } from '@/services/ipa-ru';
import { VARIANTS_RU } from './variantes';
import { toReadingRu } from '@/services/reading-cyrillic';
import { ALPHABET_RU } from './alfabeto';
import { ACCENTS_RU } from './sotaques';
import { PARES_RU } from './pares';
import { BICHOS_RU } from './bichos';
import { FALSE_FRIENDS_RU } from './falsos-amigos';

export const RUSSO: LanguagePack = {
  code: 'ru',
  name: 'Russo',
  nativeName: 'Русский',
  flag: '🇷🇺',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo oriental'],
    region: 'Europa Oriental (planície russa, bacias do Dniepre, do Volga e do alto Dvina)',
    writing: 'Alfabeto cirílico (33 letras)',
  },
  speechLocale: 'ru-RU',
  available: true,
  vocab: VOCAB_RU,
  units: UNITS_RU,
  etymology: ETYMOLOGY_RU,
  community: COMMUNITY_RU,
  scenarios: SCENARIOS_RU,
  stories: [...STORIES_RU, ...VARIANTS_RU.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_RU,
  grammar: GRAMMAR_RU,
  linguistics: LINGUISTICS_RU,
  accents: ACCENTS_RU,
  minimalPairs: PARES_RU,
  animalSounds: BICHOS_RU,
  falseFriends: FALSE_FRIENDS_RU,
  journalPrompts: JOURNAL_PROMPTS_RU,
  shadowing: SHADOWING_RU,
  ipa: toIpaRu,
  // o cirílico não é latino: embaixo de cada frase vem a romanização popular (Привет · Privet)
  reading: (t) => (/[Ѐ-ӿ]/.test(t) ? toReadingRu(t) : ''),
  specialChars: ['ё', 'й', 'ы', 'э', 'ю', 'я', 'ъ', 'ь'],
  // teclado russo padrão (ЙЦУКЕН)
  alphabet: ALPHABET_RU,
  keyboardRows: [
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ'],
    ['ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', 'ё'],
  ],
  greeting: 'Здра́вствуйте',
  sampleSentence: 'Здра́вствуйте! Меня́ зову́т Ли́ну. Дава́йте учи́ть ру́сский язы́к!',
  phrases: { hi: 'Приве́т!', thanks: 'Спаси́бо!', letsStart: ['Дава́йте начнём!', 'Vamos começar!'] },
  formalMarkers: 'вы, пожа́луйста, бу́дьте добры́',
  cognateNote:
    'O russo é uma língua eslava, prima distante do português: os dois vêm do indo-europeu. Por isso мать lembra “mãe” e три lembra “três”. Muitas palavras também chegaram do francês, do alemão e do inglês.',
};
