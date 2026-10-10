import type { LanguagePack } from '../types';
import { VOCAB_ALE } from './vocabulario';
import { UNITS_ALE } from './curriculo';
import { GRAMMAR_ALE } from './gramatica';
import { STORIES_ALE } from './historias';
import { COMMUNITY_ALE, ETYMOLOGY_ALE, JOURNAL_PROMPTS_ALE, SCENARIOS_ALE, SHADOWING_ALE } from './extras';
import { ACCENTS_ALE } from './sotaques';
import { VARIANTS_ALE } from './variantes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [OMNI] Omniglot, «Useful phrases in Unangam Tunuu
 * (Aleut)»; [WIKT] Wikcionário em inglês, verbetes do aleúte; [WIKI] Wikipédia em inglês, «Aleut
 * language»; [ANLC] Alaska Native Language Center, «Unangam Tunuu / Aleut» (todas consultadas em
 * 10/10/2026). Curso criado a pedido do dono (10/10/2026) para completar a família esquimó-aleúte.
 */
export const ALEUTE: LanguagePack = {
  code: 'ale',
  name: 'Aleúte',
  nativeName: 'Unangam Tunuu',
  flag: '🇺🇸',
  lineage: {
    family: 'Esquimó-aleúte',
    branches: ['Aleúte'],
    region: 'As ilhas Aleutas, as ilhas Pribilof e a ponta da península do Alasca (e, até 2021, a ilha de Bering, na Rússia); menos de 150 falantes ativos',
    writing: 'Alfabeto latino escolar de 1972, com x̂ e ĝ; antes, e na ilha de Bering, alfabeto cirílico (Veniaminov, 1824)',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o aleúte
  speechLocale: 'ale',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 100 palavras, 4 tópicos de gramática e 2 histórias), no aleúte de Atka. As frases do dia a dia vêm do Omniglot; as palavras, do Wikcionário; e os exemplos de gramática, da Wikipédia: nenhuma frase com gramática nova foi montada por nós. Nenhuma voz sintética conhecida fala o aleúte, então o áudio pode ficar mudo. Da A2.1 até o A2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_ALE,
  units: UNITS_ALE,
  etymology: ETYMOLOGY_ALE,
  community: COMMUNITY_ALE,
  scenarios: SCENARIOS_ALE,
  stories: STORIES_ALE,
  variants: VARIANTS_ALE,
  accents: ACCENTS_ALE,
  grammar: GRAMMAR_ALE,
  journalPrompts: JOURNAL_PROMPTS_ALE,
  shadowing: SHADOWING_ALE,
  specialChars: ['x̂', 'ĝ', 'á'],
  // sem gênero gramatical ([WIKI], Morphology: número, caso relacional e pessoa, sem gênero)
  genders: [],
  greeting: 'Aang',
  sampleSentence: 'Aang! Alqutaxt? Qaĝaasakung!',
  phrases: { hi: 'Aang!', thanks: 'Qaĝaasakung!', letsStart: ['Qaĝaasakung huzuu haqakux̂!', 'Obrigado a todos por virem! Vamos começar!'] },
  formalMarkers:
    'O aleúte não tem um pronome formal separado: “txin” (você) serve para qualquer pessoa. A cortesia está em fórmulas como “Qaĝaasakung huzuu haqakux̂” (obrigado a todos por virem) e “Ukuĝaan ix̂amnakux̂” (que bom te ver).',
  cognateNote:
    'O aleúte não é parente do português, e é só um primo distante das línguas esquimós: os dois ramos se separaram há uns quatro mil anos. O que o português reconhece são as palavras que vieram do russo — “sabaakax̂” (cachorro, de “sobaka”), “chaasxix̂” (xícara, de “tchachka”), “yaavlukax̂” (maçã, de “iábloko”) — e o próprio nome do Alasca, que vem de “Alaxsxa”, a península, em aleúte.',
};
