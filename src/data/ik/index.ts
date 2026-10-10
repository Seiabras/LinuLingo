import type { LanguagePack } from '../types';
import { VOCAB_IK } from './vocabulario';
import { UNITS_IK } from './curriculo';
import { GRAMMAR_IK } from './gramatica';
import { STORIES_IK } from './historias';
import { COMMUNITY_IK, ETYMOLOGY_IK, JOURNAL_PROMPTS_IK, SCENARIOS_IK, SHADOWING_IK } from './extras';
import { ACCENTS_IK } from './sotaques';
import { VARIANTS_IK } from './variantes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [WIKT] Wikcionário em inglês, verbetes do inupiaque e os
 * exemplos deles; [OMNI] Omniglot, «Useful phrases in Iñupiaq»; [WIKI] Wikipédia em inglês, «Iñupiaq
 * language» (todas consultadas em 10/10/2026). Curso criado a pedido do dono (10/10/2026) para
 * completar a família esquimó-aleúte.
 */
export const INUPIAQUE: LanguagePack = {
  code: 'ik',
  name: 'Inupiaque',
  nativeName: 'Iñupiatun',
  flag: '🇺🇸',
  lineage: {
    family: 'Esquimó-aleúte',
    branches: ['Esquimó', 'Inuíte', 'Inupiaque'],
    region: 'O norte e o noroeste do Alasca (e o delta do Mackenzie, no Canadá); língua oficial do Alasca desde 2014, com cerca de 2.000 falantes',
    writing: 'Alfabeto latino de Roy Ahmaogak e Eugene Nida (1946), com ġ, ł, ḷ, ñ e ŋ',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o inupiaque
  speechLocale: 'ik',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 100 palavras, 4 tópicos de gramática e 2 histórias), no inupiaque da Encosta Norte, o de Utqiaġvik. Cada palavra vem do Wikcionário ou da tabela de dialetos da Wikipédia, e cada frase, dos exemplos do Wikcionário ou do Omniglot, com a tradução deles: nenhuma frase com gramática nova foi montada por nós. Nenhuma voz sintética conhecida fala o inupiaque, então o áudio pode ficar mudo. Da A2.1 até o B1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_IK,
  units: UNITS_IK,
  etymology: ETYMOLOGY_IK,
  community: COMMUNITY_IK,
  scenarios: SCENARIOS_IK,
  stories: STORIES_IK,
  variants: VARIANTS_IK,
  accents: ACCENTS_IK,
  grammar: GRAMMAR_IK,
  journalPrompts: JOURNAL_PROMPTS_IK,
  shadowing: SHADOWING_IK,
  specialChars: ['ġ', 'ł', 'ḷ', 'ñ', 'ŋ'],
  // sem gênero gramatical nem artigo ([WIKI], Nominal morphology)
  genders: [],
  greeting: 'Haluu',
  sampleSentence: 'Haluu! Qanuq itpich? Nakuuruŋa, quyanaq!',
  phrases: { hi: 'Haluu!', thanks: 'Quyanaq!', letsStart: ['Paġlagikpiñ!', 'Bem-vindo! Vamos começar!'] },
  formalMarkers:
    'O inupiaque não tem um pronome formal separado: “ilviñ” (você) serve para qualquer pessoa. Mas o verbo muda quando se fala com uma, duas ou mais pessoas: “Paġlagikpiñ” (bem-vindo, a uma pessoa), “Paġlagivsik” (a duas) e “Paġlagivsi” (a três ou mais).',
  cognateNote:
    'O inupiaque não é parente do português: é da família esquimó-aleúte, primo próximo do inuktitut do Canadá e do groenlandês. O parentesco vai na direção contrária: “caiaque” veio do “qayaq” das línguas inuítes. E muitas palavras são quase iguais às do inuktitut: “iglu” (casa), “nanuq” (urso-polar), “tallimat” (cinco).',
};
