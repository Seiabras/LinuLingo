import type { LanguagePack } from '../types';
import { VOCAB_COLO1257 } from './vocabulario';
import { UNITS_COLO1257 } from './curriculo';
import { GRAMMAR_COLO1257 } from './gramatica';
import { STORIES_COLO1257 } from './historias';
import { COMMUNITY_COLO1257, ETYMOLOGY_COLO1257, JOURNAL_PROMPTS_COLO1257, SCENARIOS_COLO1257, SHADOWING_COLO1257 } from './extras';
import { ACCENTS_COLO1257 } from './sotaques';
import { VARIANTS_COLO1257 } from './variantes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [KN] Kichwa.net, as aulas de kichwa básico (Mushuk Muyu);
 * [OMNI] Omniglot, «Useful phrases in Kichwa» e «Numbers in Kichwa»; [WIKI] Wikipédia em espanhol,
 * «Kichwa», e em inglês, «Kichwa language» (todas consultadas em 10/10/2026). Curso criado a pedido do
 * dono (10/10/2026) para completar a família quéchua. Código: o glottocode colo1257 (ver vocabulario.ts).
 */
export const KICHWA: LanguagePack = {
  code: 'colo1257',
  name: 'Kichwa',
  nativeName: 'Kichwa shimi',
  flag: '🇪🇨',
  lineage: {
    family: 'Quéchua',
    branches: ['Quéchua II (periférico)', 'Quéchua II-B', 'Kichwa (Equador)'],
    region: 'A serra e a Amazônia do Equador (e o Peru vizinho)',
    writing: 'Alfabeto latino do kichwa unificado (DINEIB e CONAIE), com só três vogais: a, i, u',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o kichwa
  speechLocale: 'qu-EC',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 130 palavras, 4 tópicos de gramática e 2 histórias), no kichwa unificado. As palavras e as frases vêm das aulas do kichwa.net e do Omniglot, e a gramática, das aulas do kichwa.net e da Wikipédia: nenhuma frase com gramática nova foi montada por nós. Nenhuma voz sintética conhecida fala o kichwa, então o áudio pode ficar mudo. Da A2.1 até o B1 chega nas próximas atualizações.',
  },
  vocab: VOCAB_COLO1257,
  units: UNITS_COLO1257,
  etymology: ETYMOLOGY_COLO1257,
  community: COMMUNITY_COLO1257,
  scenarios: SCENARIOS_COLO1257,
  stories: STORIES_COLO1257,
  variants: VARIANTS_COLO1257,
  accents: ACCENTS_COLO1257,
  grammar: GRAMMAR_COLO1257,
  journalPrompts: JOURNAL_PROMPTS_COLO1257,
  shadowing: SHADOWING_COLO1257,
  specialChars: ['ñ'],
  genders: [],
  greeting: 'Imanalla',
  sampleSentence: 'Imanalla, mashi! Imanallatak kanki? Allimi kani, yupaychani!',
  phrases: { hi: 'Imanalla!', thanks: 'Yupaychani!', letsStart: ['Haku!', 'Vamos!'] },
  formalMarkers:
    'O kichwa tem um pronome de respeito: “kikin” (o senhor, a senhora), no plural “kikinkuna”, usado com quem não se tem intimidade. Com os amigos, “kan” (você): “Kikinka imanallatak kanki?” (como o senhor está?) × “Imanallatak kanki?” (como você está?).',
  cognateNote:
    'O kichwa não é parente do português, mas o português do Brasil e o espanhol pegaram palavras do quéchua: “lhama” (llama), “condor” (kuntur), “puma”, “quinoa” (kinuwa). E muitas palavras são quase iguais às do quéchua do sul: “mama” (mãe), “wasi” (casa), “inti” (sol).',
};
