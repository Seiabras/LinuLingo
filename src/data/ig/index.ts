import type { LanguagePack } from '../types';
import { VOCAB_IG } from './vocabulario';
import { UNITS_IG } from './curriculo';
import { GRAMMAR_IG } from './gramatica';
import { STORIES_IG } from './historias';
import { COMMUNITY_IG, ETYMOLOGY_IG, JOURNAL_PROMPTS_IG, SCENARIOS_IG, SHADOWING_IG } from './extras';
import { toIpaIg } from '@/services/ipa-africa';

export const IGBO: LanguagePack = {
  code: 'ig',
  name: 'Igbo',
  nativeName: 'Asụsụ Igbo',
  flag: '🇳🇬',
  lineage: {
    family: 'Níger-Congo',
    branches: ['Atlântico-congolês', 'Volta-Níger', 'Igboide'],
    region: 'Sudeste da Nigéria (Onitsha, Enugu, Owerri, Aba, Nnewi)',
    writing: 'Alfabeto latino (ortografia Ọnwụ/Igbo izugbe: ị, ọ, ụ, ṅ)',
  },
  // código BCP-47 na melhor tentativa (ig-NG): a cobertura de voz nativa para o igbo ainda é rara e
  // inconsistente entre aparelhos, diferente de outras línguas nigerianas do app.
  speechLocale: 'ig-NG',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, pouco mais de 80 palavras, 4 tópicos de gramática — incluindo os tons — e 2 histórias), na ortografia padrão Igbo izugbe. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_IG,
  units: UNITS_IG,
  etymology: ETYMOLOGY_IG,
  community: COMMUNITY_IG,
  scenarios: SCENARIOS_IG,
  stories: STORIES_IG,
  grammar: GRAMMAR_IG,
  journalPrompts: JOURNAL_PROMPTS_IG,
  shadowing: SHADOWING_IG,
  ipa: toIpaIg,
  specialChars: ['ị', 'ọ', 'ụ', 'ṅ'],
  // sem gênero gramatical: os pronomes do igbo (como «ọ») não marcam masculino, feminino nem neutro
  genders: [],
  greeting: 'Ndewo',
  sampleSentence: 'Ndewo! Aha m bụ Linu. Ka anyị bido!',
  phrases: { hi: 'Ndewo!', thanks: 'Daalụ!', letsStart: ['Ka anyị bido!', 'Vamos começar!'] },
  formalMarkers: 'mazi (senhor), daa (senhora), biko, ndewonụ (saudação no plural/a quem merece respeito)',
  cognateNote:
    'O igbo é uma língua Níger-Congo, do ramo Volta-Níger, falada no sudeste da Nigéria — sem parentesco com o português. É também uma língua tonal: a mesma sequência de letras, como “akwa”, pode significar “choro”, “cama”, “ovo” ou “pano”, dependendo só do tom da voz, e a escrita do dia a dia quase nunca marca esse tom. Cada palavra do vocabulário mostra, quando possível, de que raiz do igbo ou do proto-igboide (a língua-mãe reconstruída do grupo igboide) ela vem — nunca um parentesco forçado com o português.',
};
