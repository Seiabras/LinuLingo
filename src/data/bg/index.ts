import type { LanguagePack } from '../types';
import { VOCAB_BG } from './vocabulario';
import { UNITS_BG } from './curriculo';
import { GRAMMAR_BG } from './gramatica';
import { STORIES_BG } from './historias';
import { COMMUNITY_BG, ETYMOLOGY_BG, JOURNAL_PROMPTS_BG, SCENARIOS_BG, SHADOWING_BG } from './extras';
import { toReadingBg } from '@/services/reading-cyrillic';

export const BULGARO: LanguagePack = {
  code: 'bg',
  name: 'Búlgaro',
  nativeName: 'Български',
  flag: '🇧🇬',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Balto-eslavo', 'Eslavo', 'Eslavo meridional'],
    region: 'Península Balcânica (Bulgária, entre o Danúbio e os montes Ródope)',
    writing: 'Alfabeto cirílico (30 letras, ortografia padrão da Academia Búlgara de Ciências)',
  },
  speechLocale: 'bg-BG',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos (unidades 1 a 4, ~130 palavras, 7 tópicos de gramática, 4 histórias), no búlgaro padrão, com a sílaba tônica marcada, mas ainda sem transcrição fonética e sem treino do alfabeto. O B1 em diante chega nas próximas atualizações.',
  },
  vocab: VOCAB_BG,
  units: UNITS_BG,
  etymology: ETYMOLOGY_BG,
  community: COMMUNITY_BG,
  scenarios: SCENARIOS_BG,
  stories: STORIES_BG,
  grammar: GRAMMAR_BG,
  journalPrompts: JOURNAL_PROMPTS_BG,
  shadowing: SHADOWING_BG,
  // o cirílico não é latino: embaixo de cada frase vem a romanização oficial (Здравей · Zdravey)
  reading: (t) => (/[Ѐ-ӿ]/.test(t) ? toReadingBg(t) : ''),
  specialChars: ['ъ', 'щ', 'ж', 'ч', 'ш', 'ю', 'я', 'й', 'ь'],
  // o alfabeto búlgaro em ordem, em fileiras
  keyboardRows: [
    ['а', 'б', 'в', 'г', 'д', 'е', 'ж', 'з', 'и', 'й'],
    ['к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у'],
    ['ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ь', 'ю', 'я'],
  ],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Здраве́йте',
  sampleSentence: 'Здраве́йте! Ка́звам се Ли́ну. Ха́йде да у́чим бъ́лгарски!',
  phrases: { hi: 'Здраве́й!', thanks: 'Благодаря́!', letsStart: ['Да запо́чваме!', 'Vamos começar!'] },
  formalMarkers: 'ви́е (com o verbo no plural, para uma pessoa só), здраве́йте, мо́ля, извине́те',
  cognateNote:
    'O búlgaro é uma língua eslava meridional, prima distante do português: os dois vêm do indo-europeu. Por isso “три” lembra “três” e “вода́” é prima de “hidro-”. Dos séculos de convivência com o turco vieram palavras como “кафе́”. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
