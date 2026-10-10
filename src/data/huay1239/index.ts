import type { LanguagePack } from '../types';
import { VOCAB_HUAY1239 } from './vocabulario';
import { UNITS_HUAY1239 } from './curriculo';
import { GRAMMAR_HUAY1239 } from './gramatica';
import { STORIES_HUAY1239 } from './historias';
import { COMMUNITY_HUAY1239, ETYMOLOGY_HUAY1239, JOURNAL_PROMPTS_HUAY1239, SCENARIOS_HUAY1239, SHADOWING_HUAY1239 } from './extras';
import { ACCENTS_HUAY1239 } from './sotaques';
import { VARIANTS_HUAY1239 } from './variantes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [WIKI] Wikipédia em espanhol, «Quechua ancashino»,
 * «Gramática del quechua ancashino», «Quechua de Huaylas», «Clasificación del quechua ancashino»; [OMNI]
 * Omniglot, «Ancash Quechua numbers» (consultados em 10/10/2026). Curso criado a pedido do dono
 * (10/10/2026) para completar a família quéchua. Código: o glottocode huay1239 (ver vocabulario.ts).
 */
export const QUECHUA_ANCASH: LanguagePack = {
  code: 'huay1239',
  name: 'Quéchua de Áncash',
  nativeName: 'Anqash Kichwa',
  flag: '🇵🇪',
  lineage: {
    family: 'Quéchua',
    branches: ['Quéchua I (central)', 'Áncash-Huánuco'],
    region: 'A serra de Áncash e o oeste de Huánuco, no norte do Peru; cerca de um milhão de falantes; oficial onde predomina, ao lado do espanhol',
    writing: 'Alfabeto latino oficial do Ministério da Educação do Peru (1975; três vogais desde 1985), com as vogais longas dobradas',
  },
  // nenhum serviço de síntese de voz consultado tem voz para o quéchua de Áncash
  speechLocale: 'qu-PE',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 60 palavras, 4 tópicos de gramática e 2 histórias), no quéchua de Huaylas. As palavras e as frases vêm dos artigos da Wikipédia sobre o quéchua de Áncash, e os números, do Omniglot: nenhuma frase com gramática nova foi montada por nós. Por isso o curso é menor do que os outros da família. Nenhuma voz sintética conhecida fala o quéchua de Áncash, então o áudio pode ficar mudo. Da A2.1 até o A2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_HUAY1239,
  units: UNITS_HUAY1239,
  etymology: ETYMOLOGY_HUAY1239,
  community: COMMUNITY_HUAY1239,
  scenarios: SCENARIOS_HUAY1239,
  stories: STORIES_HUAY1239,
  variants: VARIANTS_HUAY1239,
  accents: ACCENTS_HUAY1239,
  grammar: GRAMMAR_HUAY1239,
  journalPrompts: JOURNAL_PROMPTS_HUAY1239,
  shadowing: SHADOWING_HUAY1239,
  specialChars: ['ñ'],
  genders: [],
  greeting: 'Yaw',
  sampleSentence: 'Yaw! Imanawllataq kaykanki? Yamayllam kaykaa.',
  // sem fonte para “obrigado”: a meta cumprida comemora com “Awmi!” (sim!)
  phrases: { hi: 'Yaw!', thanks: 'Awmi!', letsStart: ['Yaw!', 'Ei! Vamos começar!'] },
  formalMarkers:
    'O quéchua de Áncash não tem um “você” de respeito separado, mas tem respostas mais respeitosas: “Nuqallaa” (sou eu, aqui estou), no lugar de “Nuqam”, ao responder a quem pergunta “Pitaq?”.',
  cognateNote:
    'O quéchua de Áncash não é parente do português. É primo do quéchua do sul e do kichwa, de outro ramo da família: muitas palavras são as mesmas (“yaku”, água; “rumi”, pedra; “ñawi”, olho), mas os números e os sons mudam — três é “kima”, e não “kimsa”.',
};
