import type { LanguagePack } from '../types';
import { VOCAB_TDT } from './vocabulario';
import { UNITS_TDT } from './curriculo';
import { GRAMMAR_TDT } from './gramatica';
import { STORIES_TDT } from './historias';
import { COMMUNITY_TDT, ETYMOLOGY_TDT, JOURNAL_PROMPTS_TDT, SCENARIOS_TDT, SHADOWING_TDT } from './extras';
import { ACCENTS_TDT } from './sotaques';
import { VARIANTS_TDT } from './variantes';

export const TETUM: LanguagePack = {
  code: 'tdt',
  name: 'Tétum',
  nativeName: 'Tetun',
  flag: '🇹🇱',
  lineage: {
    family: 'Austronésio',
    branches: ['Malaio-polinésio', 'Malaio-polinésio Central-Oriental', 'Timor-Babar', 'Tetárico (Tetunic)'],
    region: 'Ilha de Timor (Timor-Leste e a parte indonésia de Timor Ocidental)',
    writing: 'Alfabeto latino (ortografia oficial fixada em 2004 pelo Instituto Nacional de Linguística de Timor-Leste)',
  },
  // ISO 639-3 na melhor tentativa: nenhum serviço de síntese de voz consultado tem voz para o tétum —
  // os áudios usam a voz do aparelho, se houver.
  speechLocale: 'tdt',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, 65 palavras, 4 tópicos de gramática, 2 histórias), na variedade tetun-díli (tétum de Díli/de mercado), a mais falada hoje e a que mistura mais empréstimos do português. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TDT,
  units: UNITS_TDT,
  etymology: ETYMOLOGY_TDT,
  community: COMMUNITY_TDT,
  scenarios: SCENARIOS_TDT,
  stories: [...STORIES_TDT, ...VARIANTS_TDT.flatMap((v) => v.stories ?? [])],
  variants: VARIANTS_TDT,
  accents: ACCENTS_TDT,
  grammar: GRAMMAR_TDT,
  journalPrompts: JOURNAL_PROMPTS_TDT,
  shadowing: SHADOWING_TDT,
  specialChars: ["'", 'ó', 'é'],
  // o tétum não tem gênero gramatical nem artigos — confirmado contra o próprio vocabulário do pacote
  // e a gramática da Wikipédia («Tetum language»), nenhum dos dois registra concordância de gênero.
  genders: [],
  greeting: 'Bondia',
  sampleSentence: "Bondia! Ha'u nia naran Linu. Ita bele ko'alia Tetun?",
  phrases: { hi: 'Bondia!', thanks: 'Obrigadu!', letsStart: ['Mai!', 'Vamos!'] },
  formalMarkers: '“ita” em vez de “ó” para o tratamento respeitoso, “favor ida” (por favor)',
  cognateNote:
    'O tétum é uma língua austronésia, aparentada de longe do malaio, do indonésio e do havaiano — não do português. Mas, depois de séculos de contato colonial, absorveu uma quantidade enorme de palavras portuguesas (eskola, kafé, paun, livru, governu…), e hoje é co-oficial com o português em Timor-Leste. Cada palavra do vocabulário mostra se vem do fundo austronésio antigo (muitas vezes aparentado do malaio) ou do empréstimo português mais recente.',
};
