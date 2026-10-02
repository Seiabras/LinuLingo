import type { LanguagePack } from '../types';
import { VOCAB_AST } from './vocabulario';
import { UNITS_AST } from './curriculo';
import { GRAMMAR_AST } from './gramatica';
import { STORIES_AST } from './historias';
import { COMMUNITY_AST, ETYMOLOGY_AST, JOURNAL_PROMPTS_AST, SCENARIOS_AST, SHADOWING_AST } from './extras';

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
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~90 palavras, 4 tópicos de gramática, 2 histórias). Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_AST,
  units: UNITS_AST,
  etymology: ETYMOLOGY_AST,
  community: COMMUNITY_AST,
  scenarios: SCENARIOS_AST,
  stories: STORIES_AST,
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
