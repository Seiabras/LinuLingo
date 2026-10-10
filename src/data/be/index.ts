import type { LanguagePack } from '../types';
import { VOCAB_BE } from './vocabulario';
import { UNITS_BE } from './curriculo';
import { GRAMMAR_BE } from './gramatica';
import { STORIES_BE } from './historias';
import { COMMUNITY_BE, ETYMOLOGY_BE, JOURNAL_PROMPTS_BE, SCENARIOS_BE, SHADOWING_BE } from './extras';
import { toReadingBe } from '@/services/reading-cyrillic';
import { VARIANTS_BE } from './variantes';
import { ACCENTS_BE } from './sotaques';

export const BIELORRUSSO: LanguagePack = {
  code: 'be',
  name: 'Bielorrusso',
  nativeName: 'Беларуская',
  flag: '🇧🇾',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo oriental'],
    region: 'Belarus',
    writing: 'Alfabeto cirílico bielorrusso (32 letras, com a letra ў); norma narkamaŭka (oficial, de 1933), usada aqui — a outra norma em uso, a taraškievica (clássica, de 1918), fica fora deste pacote',
  },
  speechLocale: 'be-BY',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos (unidades 1 a 4, ~130 palavras, 7 tópicos de gramática, 4 histórias), na norma oficial narkamaŭka, ainda sem transcrição fonética. De B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_BE,
  units: UNITS_BE,
  etymology: ETYMOLOGY_BE,
  community: COMMUNITY_BE,
  scenarios: SCENARIOS_BE,
  stories: [...STORIES_BE, ...VARIANTS_BE.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_BE,
  accents: ACCENTS_BE,
  grammar: GRAMMAR_BE,
  journalPrompts: JOURNAL_PROMPTS_BE,
  shadowing: SHADOWING_BE,
  // o cirílico não é latino: embaixo de cada frase vem a romanização oficial (Прывітанне · Pryvitannie)
  reading: (t) => (/[Ѐ-ӿ]/.test(t) ? toReadingBe(t) : ''),
  specialChars: ['ў', 'і', 'ё', 'ы', 'э', '’'],
  // teclado bielorrusso (variante do ЙЦУКЕН com ў e і)
  keyboardRows: [
    ['й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'ў', 'з', 'х', 'ъ'],
    ['ф', 'і', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э'],
    ['я', 'ч', 'с', 'м', 'і', 'т', 'ь', 'б', 'ю', 'ё'],
  ],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Прывіта́нне',
  sampleSentence: 'Прывіта́нне! Мяне́ зва́ць Лі́ну. Вучы́м белару́скую ра́зам!',
  phrases: { hi: 'Прывіта́нне!', thanks: 'Дзя́куй!', letsStart: ['Пачына́ем!', 'Vamos começar!'] },
  formalMarkers: 'вы (com o verbo no plural, para uma pessoa só), калі́ ла́ска, прабачце',
  cognateNote:
    'O bielorrusso é uma língua eslava oriental, prima próxima do russo e do ucraniano e prima distante do português: todos vêm do indo-europeu. Por isso “брат” lembra “frade/fraterno” e “мора” lembra “mar”. Séculos sob o Grão-Ducado da Lituânia e a Rzeczpospolita polaco-lituana também deixaram palavras do polonês e do lituano no bielorrusso. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
