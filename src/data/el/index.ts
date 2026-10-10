import type { LanguagePack } from '../types';
import { VOCAB_EL } from './vocabulario';
import { UNITS_EL } from './curriculo';
import { GRAMMAR_EL } from './gramatica';
import { STORIES_EL } from './historias';
import { ACCENTS_EL } from './sotaques';
import { VARIANTS_EL } from './variantes';
import { COMMUNITY_EL, ETYMOLOGY_EL, JOURNAL_PROMPTS_EL, SCENARIOS_EL, SHADOWING_EL } from './extras';
import { toReadingEl } from '@/services/reading-greek';

export const GREGO: LanguagePack = {
  code: 'el',
  name: 'Grego',
  nativeName: 'Ελληνικά',
  flag: '🇬🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Helênico'],
    region: 'Grécia e Chipre',
    writing: 'Alfabeto grego (24 letras)',
  },
  speechLocale: 'el-GR',
  available: true,
  incomplete: {
    until: 'A2.2',
    note:
      'A1 e A2 por enquanto (unidades 1 a 4, ~141 palavras, 8 tópicos de gramática, 4 histórias); ainda sem treino do alfabeto grego nem transliteração em cada palavra. O A2 trouxe o clima e a roupa, o corpo, as profissões e os sentimentos, o futuro com “θα”, o comparativo/superlativo, o genitivo de posse e “πρέπει να” + subjuntivo. Da B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_EL,
  units: UNITS_EL,
  etymology: ETYMOLOGY_EL,
  community: COMMUNITY_EL,
  scenarios: SCENARIOS_EL,
  stories: [...STORIES_EL, ...VARIANTS_EL.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_EL,
  accents: ACCENTS_EL,
  grammar: GRAMMAR_EL,
  journalPrompts: JOURNAL_PROMPTS_EL,
  shadowing: SHADOWING_EL,
  reading: (t) => (/[Ͱ-Ͽἀ-῿]/.test(t) ? toReadingEl(t) : ''),
  specialChars: ['θ', 'χ', 'ψ', 'ξ', 'ς'],
  // teclado grego padrão
  keyboardRows: [
    ['ς', 'ε', 'ρ', 'τ', 'υ', 'θ', 'ι', 'ο', 'π'],
    ['α', 'σ', 'δ', 'φ', 'γ', 'η', 'ξ', 'κ', 'λ'],
    ['ζ', 'χ', 'ψ', 'ω', 'β', 'ν', 'μ'],
  ],
  // masculino, feminino e neutro
  genders: ['m', 'f', 'n'],
  greeting: 'Καλημέρα',
  sampleSentence: 'Καλημέρα! Με λένε Λίνα. Ας μάθουμε ελληνικά!',
  phrases: { hi: 'Γεια σου!', thanks: 'Ευχαριστώ!', letsStart: ['Ας ξεκινήσουμε!', 'Vamos começar!'] },
  formalMarkers: 'εσείς (com o verbo no plural, para uma pessoa só), παρακαλώ, συγγνώμη',
  cognateNote:
    'O grego é um ramo só seu dentro do indo-europeu — não tem “primos” próximos como o latim tem o português. Mas muitas raízes gregas moram escondidas no português culto: “τρία” lembra “três”, “πατέρας” lembra “pai” e “paternal”, e palavras inteiras como “democracia”, “filosofia” e “telefone” vieram do grego. Cada palavra mostra a raiz e os parentes em outras línguas.',
};
