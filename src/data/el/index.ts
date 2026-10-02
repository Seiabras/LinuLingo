import type { LanguagePack } from '../types';
import { VOCAB_EL } from './vocabulario';
import { UNITS_EL } from './curriculo';
import { GRAMMAR_EL } from './gramatica';
import { STORIES_EL } from './historias';
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
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~80 palavras, 4 tópicos de gramática, 2 histórias); ainda sem treino do alfabeto grego nem transliteração em cada palavra. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_EL,
  units: UNITS_EL,
  etymology: ETYMOLOGY_EL,
  community: COMMUNITY_EL,
  scenarios: SCENARIOS_EL,
  stories: STORIES_EL,
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
