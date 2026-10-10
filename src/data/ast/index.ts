import type { LanguagePack } from '../types';
import { VOCAB_AST } from './vocabulario';
import { UNITS_AST } from './curriculo';
import { GRAMMAR_AST } from './gramatica';
import { STORIES_AST } from './historias';
import { COMMUNITY_AST, ETYMOLOGY_AST, JOURNAL_PROMPTS_AST, SCENARIOS_AST, SHADOWING_AST } from './extras';
import { ACCENTS_AST } from './sotaques';
import { VARIANTS_AST } from './variantes';

export const ASTURIANO: LanguagePack = {
  code: 'ast',
  name: 'Asturiano',
  nativeName: 'Asturianu',
  // sem bandeira própria no Unicode: a das Astúrias não é país da ISO 3166-1; vale a da Espanha,
  // como no galego e no catalão.
  flag: '🇪🇸',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico', 'Astur-leonês'],
    region: 'Astúrias (norte da Espanha)',
    writing: 'Alfabeto latino (norma da Academia de la Llingua Asturiana)',
  },
  speechLocale: 'ast-ES',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 por enquanto (unidades 1 a 4, ~143 palavras, 9 tópicos de gramática, 4 histórias). Do B1 até o C1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_AST,
  units: UNITS_AST,
  etymology: ETYMOLOGY_AST,
  community: COMMUNITY_AST,
  scenarios: SCENARIOS_AST,
  stories: [...STORIES_AST, ...VARIANTS_AST.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_AST,
  accents: ACCENTS_AST,
  grammar: GRAMMAR_AST,
  journalPrompts: JOURNAL_PROMPTS_AST,
  shadowing: SHADOWING_AST,
  specialChars: ['á', 'é', 'í', 'ó', 'ú', 'ñ', 'ü'],
  // masculino e feminino, sem neutro
  genders: ['m', 'f'],
  greeting: 'Hola',
  sampleSentence: 'Hola! Llámome Linu. Vamos deprender asturianu!',
  phrases: { hi: 'Hola!', thanks: 'Gracies!', letsStart: ['Entamamos!', 'Vamos começar!'] },
  formalMarkers: 'por favor, usté (o tratamento formal)',
  cognateNote:
    'O asturiano nasceu do latim do antigo Reino de Astúrias e fica entre o galego-português e o castelhano: muitas palavras lembram as duas línguas. Cada palavra mostra a raiz latina e os parentes nas línguas irmãs.',
};
