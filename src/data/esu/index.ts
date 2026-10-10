import type { LanguagePack } from '../types';
import { VOCAB_ESU } from './vocabulario';
import { UNITS_ESU } from './curriculo';
import { GRAMMAR_ESU } from './gramatica';
import { STORIES_ESU } from './historias';
import { COMMUNITY_ESU, ETYMOLOGY_ESU, JOURNAL_PROMPTS_ESU, SCENARIOS_ESU, SHADOWING_ESU } from './extras';
import { ACCENTS_ESU } from './sotaques';
import { VARIANTS_ESU } from './variantes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [ANLC] Alaska Native Language Center, «Central Yup'ik»;
 * [WIKT] Wikcionário em inglês, verbetes do iúpique e os exemplos deles; [WIKI] Wikipédia em inglês,
 * «Central Alaskan Yupʼik» (todas consultadas em 10/10/2026). Curso criado a pedido do dono
 * (10/10/2026) para completar a família esquimó-aleúte.
 */
export const IUPIQUE: LanguagePack = {
  code: 'esu',
  name: 'Iúpique do Alasca',
  nativeName: 'Yugtun',
  flag: '🇺🇸',
  lineage: {
    family: 'Esquimó-aleúte',
    branches: ['Esquimó', 'Iúpique'],
    region: 'O sudoeste do Alasca: os deltas do Yukon e do Kuskokwim, a baía de Bristol e a costa do mar de Bering; a maior língua indígena do Alasca, oficial no estado desde 2014',
    writing: 'Alfabeto latino do Alaska Native Language Center (anos 1960); por volta de 1900, o silabário de Uyaquq',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o iúpique
  speechLocale: 'esu',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 100 palavras, 4 tópicos de gramática e 2 histórias), no iúpique central geral, o Yugtun do Yukon e do Kuskokwim. As frases do dia a dia vêm do Alaska Native Language Center, da Universidade do Alasca; as palavras, do Wikcionário; e os exemplos de gramática, da Wikipédia: nenhuma frase com gramática nova foi montada por nós. Nenhuma voz sintética conhecida fala o iúpique, então o áudio pode ficar mudo. Da A2.1 até o B1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_ESU,
  units: UNITS_ESU,
  etymology: ETYMOLOGY_ESU,
  community: COMMUNITY_ESU,
  scenarios: SCENARIOS_ESU,
  stories: STORIES_ESU,
  variants: VARIANTS_ESU,
  accents: ACCENTS_ESU,
  grammar: GRAMMAR_ESU,
  journalPrompts: JOURNAL_PROMPTS_ESU,
  shadowing: SHADOWING_ESU,
  specialChars: ['\'', 'ḿ', 'ń'],
  // sem gênero gramatical nem artigo ([WIKI], introdução)
  genders: [],
  greeting: 'Waqaa',
  sampleSentence: 'Waqaa! Cangacit? Assirtua, quyana!',
  phrases: { hi: 'Waqaa!', thanks: 'Quyana!', letsStart: ['Quyana tailuci!', 'Bem-vindos! (obrigado por virem) Vamos começar!'] },
  formalMarkers:
    'O iúpique não tem um pronome formal separado: a cortesia está em fórmulas como “Quyana tailuci!” (obrigado por virem), com que se recebe quem chega, e “Cama-i!” (que bom te ver).',
  cognateNote:
    'O iúpique não é parente do português: é da família esquimó-aleúte, primo do inupiaque e das línguas inuítes. Mas tem palavras que o português reconhece por outro caminho: as que vieram do russo, do tempo da América Russa — “caayuq” (chá, do russo “tchai”), “kelipaq” (pão, de “khleb”), “luuskaaq” (colher, de “lojka”).',
};
