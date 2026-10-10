import type { LanguagePack } from '../types';
import { VOCAB_MWL } from './vocabulario';
import { UNITS_MWL } from './curriculo';
import { GRAMMAR_MWL } from './gramatica';
import { STORIES_MWL } from './historias';
import { COMMUNITY_MWL, ETYMOLOGY_MWL, JOURNAL_PROMPTS_MWL, SCENARIOS_MWL, SHADOWING_MWL } from './extras';
import { ACCENTS_MWL } from './sotaques';

export const MIRANDES: LanguagePack = {
  code: 'mwl',
  name: 'Mirandês',
  nativeName: 'Mirandés',
  flag: '🇵🇹',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Itálico', 'Românico', 'Ibero-românico', 'Astur-leonês'],
    region: 'Miranda de l Douro e região (nordeste de Portugal, Trás-os-Montes)',
    writing: 'Alfabeto latino, Convenção Ortográfica da Língua Mirandesa (1999)',
  },
  speechLocale: 'mwl-PT',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, ~66 palavras — menos que o normal, porque o mirandês tem pouca documentação online confiável e preferimos não inventar vocabulário —, 4 tópicos de gramática, 2 histórias), na ortografia oficial de 1999. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MWL,
  units: UNITS_MWL,
  etymology: ETYMOLOGY_MWL,
  community: COMMUNITY_MWL,
  scenarios: SCENARIOS_MWL,
  stories: STORIES_MWL,
  accents: ACCENTS_MWL,
  grammar: GRAMMAR_MWL,
  journalPrompts: JOURNAL_PROMPTS_MWL,
  shadowing: SHADOWING_MWL,
  specialChars: ['ç', 'á', 'é', 'í', 'ó', 'ú'],
  // masculino e feminino
  genders: ['m', 'f'],
  greeting: 'Buonos dies',
  sampleSentence: 'Buonos dies! Eu sou l Linu. Bamos deprender mirandés?',
  phrases: { hi: 'Buonos dies!', thanks: 'Oubrigado!', letsStart: ['Bamos cumeçar!', 'Vamos começar!'] },
  formalMarkers: 'bós (com o verbo no plural, para uma pessoa só), por fabor, çculpe',
  cognateNote:
    'O mirandês é a segunda língua oficial de Portugal, reconhecida desde 1999 — um caso único no país. É parente próximo do asturiano e do leonês, falados na Espanha vizinha: os três vêm do mesmo tronco astur-leonês, diferente do galego-português que deu origem ao português. Por isso “pan” (pão), “auga” (água) e “lheite” (leite) ficam fáceis de reconhecer para quem fala português, enquanto outras, como “armano” (irmão), seguem um caminho diferente.',
};
