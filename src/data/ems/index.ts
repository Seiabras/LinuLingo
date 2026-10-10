import type { LanguagePack } from '../types';
import { VOCAB_EMS } from './vocabulario';
import { UNITS_EMS } from './curriculo';
import { GRAMMAR_EMS } from './gramatica';
import { STORIES_EMS } from './historias';
import { COMMUNITY_EMS, ETYMOLOGY_EMS, JOURNAL_PROMPTS_EMS, SCENARIOS_EMS, SHADOWING_EMS } from './extras';
import { ACCENTS_EMS } from './sotaques';
import { VARIANTS_EMS } from './variantes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [WIKT] Wikcionário em inglês, verbetes do alutiiq e os
 * exemplos deles; [WIKI] Wikipédia em inglês, «Alutiiq language»; [ANLC] Alaska Native Language Center,
 * «Alutiiq / Sugpiaq» (todas consultadas em 10/10/2026). Curso criado a pedido do dono (10/10/2026) para
 * completar a família esquimó-aleúte.
 */
export const ALUTIIQ: LanguagePack = {
  code: 'ems',
  name: 'Alutiiq (sugpiaq)',
  nativeName: 'Sugcestun',
  flag: '🇺🇸',
  lineage: {
    family: 'Esquimó-aleúte',
    branches: ['Esquimó', 'Iúpique'],
    region: 'A costa do golfo do Alasca: a ilha Kodiak, a península do Alasca, a península Kenai e o estreito do Príncipe Guilherme; cerca de 400 falantes',
    writing: 'Alfabeto latino moderno (trabalhos de Irene Reed, nos anos 1960, e de Jeff Leer, desde 1973)',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o alutiiq
  speechLocale: 'ems',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 80 palavras, 4 tópicos de gramática e 2 histórias), no alutiiq koniag, o de Kodiak. As palavras e as frases vêm do Wikcionário e do Alaska Native Language Center, e os números e os meses, da Wikipédia: nenhuma frase com gramática nova foi montada por nós. Por isso o curso é menor do que os outros da família. Nenhuma voz sintética conhecida fala o alutiiq, então o áudio pode ficar mudo. Da A2.1 até o A2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_EMS,
  units: UNITS_EMS,
  etymology: ETYMOLOGY_EMS,
  community: COMMUNITY_EMS,
  scenarios: SCENARIOS_EMS,
  stories: STORIES_EMS,
  variants: VARIANTS_EMS,
  accents: ACCENTS_EMS,
  grammar: GRAMMAR_EMS,
  journalPrompts: JOURNAL_PROMPTS_EMS,
  shadowing: SHADOWING_EMS,
  specialChars: ['’', 'ʀ'],
  genders: [],
  greeting: 'Cama’i',
  sampleSentence: 'Cama’i! Quyanaa! Canaituq.',
  phrases: { hi: 'Cama’i!', thanks: 'Quyanaa!', letsStart: ['Cama’i!', 'Olá! Vamos começar!'] },
  formalMarkers:
    'O alutiiq não tem um pronome formal separado. A cortesia está em “Quyanaa” (obrigado) e na resposta “Canaituq” (de nada, não tem problema).',
  cognateNote:
    'O alutiiq não é parente do português: é da família esquimó-aleúte, irmão do iúpique central. O que o português reconhece são as palavras que vieram do russo, do tempo da América Russa: “kelipaq” (pão, de “khleb”), “cayuq” (chá, de “tchai”), “laugka” (loja, de “lavka”), “masla” (manteiga, de “máslo”).',
};
