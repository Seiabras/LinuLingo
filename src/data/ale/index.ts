import type { LanguagePack } from '../types';
import { VOCAB_ALE } from './vocabulario';
import { UNITS_ALE } from './curriculo';
import { GRAMMAR_ALE } from './gramatica';
import { STORIES_ALE } from './historias';
import { COMMUNITY_ALE, ETYMOLOGY_ALE, JOURNAL_PROMPTS_ALE, SCENARIOS_ALE, SHADOWING_ALE } from './extras';
import { ACCENTS_ALE } from './sotaques';
import { VARIANTS_ALE } from './variantes';
import { FONTES_ALE, METODOS_ALE } from './fontes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [OMNI] Omniglot, «Useful phrases in Unangam Tunuu
 * (Aleut)»; [WIKT] Wikcionário em inglês, verbetes do aleúte; [WIKI] Wikipédia em inglês, «Aleut
 * language»; [ANLC] Alaska Native Language Center, «Unangam Tunuu / Aleut» (todas consultadas em
 * 10/10/2026). Curso criado a pedido do dono (10/10/2026) para completar a família esquimó-aleúte.
 * Unidades A2.1 e A2.2 (16/10/2026): [BERG94] Knut Bergsland, “Aleut Dictionary” (ANLC, 1994) e [BERG97]
 * “Aleut Grammar” (ANLC, 1997), lidos nas páginas escaneadas do ERIC no archive.org; [DIRKS78] Moses e
 * Lydia Dirks, “Atkan Food” (1978). Detalhes em vocabulario.ts e fontes.ts.
 * Unidades B1.1 a B1.4 (16/10/2026, teto B1): as mesmas obras, mais as tradições históricas de Cedor L.
 * Snigaroff (1952), citadas na gramática de Bergsland como “N.M.” ([NM] em vocabulario.ts).
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
  // O teto do aleúte é B1 (tetos.ts, desde 16/10/2026). Com as unidades B1.1 a B1.4 prontas, o curso chega
  // ao teto e fica COMPLETO: o campo continua com until 'B1.4' porque o app (cursoEmConstrucao) e o teste
  // de teto (aventura.test) leem “incomplete.until igual ao último subnível do teto” como curso completo.
  incomplete: {
    until: 'B1.4',
    note:
      'A1.1 até B1.4 completo: oito unidades, 207 palavras, 14 tópicos de gramática e 8 histórias, no aleúte de Atka, o dialeto ocidental. No A1, as frases do dia a dia vêm do Omniglot, as palavras do Wikcionário e os primeiros exemplos de gramática da Wikipédia. Do A2 em diante, tudo vem das obras de Knut Bergsland publicadas pelo Alaska Native Language Center (o dicionário completo, de 1994, e a gramática, de 1997), do livro “Atkan Food”, escrito em aleúte de Atka por Moses Dirks em 1978, e das tradições históricas contadas por Cedor L. Snigaroff em 1952. Só entraram palavras e frases registradas em Atka, com a grafia das fontes e o ano de cada uma, e nenhuma frase foi montada por nós. Quando uma forma é do leste, o curso avisa. Nenhuma voz sintética conhecida fala o aleúte, então o áudio pode ficar mudo.',
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
  fontes: FONTES_ALE,
  metodos: METODOS_ALE,
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
