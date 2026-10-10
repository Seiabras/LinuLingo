import type { LanguagePack } from '../types';
import { VOCAB_OC } from './vocabulario';
import { UNITS_OC } from './curriculo';
import { GRAMMAR_OC } from './gramatica';
import { STORIES_OC } from './historias';
import { COMMUNITY_OC, ETYMOLOGY_OC, JOURNAL_PROMPTS_OC, SCENARIOS_OC, SHADOWING_OC } from './extras';
import { ACCENTS_OC } from './sotaques';
import { VARIANTS_OC } from './variantes';

export const OCCITANO: LanguagePack = {
  code: 'oc',
  name: 'Occitano',
  nativeName: 'Occitan',
  flag: '🇫🇷',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Occitano-românico'],
    region: "Sul da França (Occitânia), além de vales do Piemonte (Itália) e do Val d'Aran (Espanha)",
    writing: 'Alfabeto latino (norma clássica occitana)',
  },
  speechLocale: 'oc-FR',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos por enquanto (4 unidades, mais de 120 palavras, 7 tópicos de gramática, 4 histórias). Do B1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_OC,
  units: UNITS_OC,
  etymology: ETYMOLOGY_OC,
  community: COMMUNITY_OC,
  scenarios: SCENARIOS_OC,
  stories: [...STORIES_OC, ...VARIANTS_OC.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_OC,
  accents: ACCENTS_OC,
  grammar: GRAMMAR_OC,
  journalPrompts: JOURNAL_PROMPTS_OC,
  shadowing: SHADOWING_OC,
  specialChars: ['à', 'è', 'é', 'í', 'ò', 'ó', 'ú', 'ï', 'ç'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Adieu',
  sampleSentence: "Adieu! M'apèli Linu. Anèm aprendre occitan!",
  phrases: { hi: 'Adieu!', thanks: 'Mercé!', letsStart: ['Anèm!', 'Vamos começar!'] },
  formalMarkers: 'vòstre, se vos plai, seriatz plan amable de…',
  cognateNote:
    'O occitano nasceu do mesmo latim que o português, e ainda soa surpreendentemente perto do catalão, seu parente mais próximo dentro do ramo occitano-românico (os dois foram vistos, até há pouco mais de um século, quase como a mesma língua). Foi também a língua dos trobadors medievais, cuja poesia amorosa influenciou os trovadores galego-portugueses. Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
