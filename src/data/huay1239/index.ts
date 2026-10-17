import type { LanguagePack } from '../types';
import { VOCAB_HUAY1239 } from './vocabulario';
import { UNITS_HUAY1239 } from './curriculo';
import { GRAMMAR_HUAY1239 } from './gramatica';
import { STORIES_HUAY1239 } from './historias';
import { COMMUNITY_HUAY1239, ETYMOLOGY_HUAY1239, JOURNAL_PROMPTS_HUAY1239, SCENARIOS_HUAY1239, SHADOWING_HUAY1239 } from './extras';
import { ACCENTS_HUAY1239 } from './sotaques';
import { VARIANTS_HUAY1239 } from './variantes';
import { FONTES_HUAY1239, METODOS_HUAY1239 } from './fontes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [WIKI] Wikipédia em espanhol, «Quechua ancashino»,
 * «Gramática del quechua ancashino», «Quechua de Huaylas», «Clasificación del quechua ancashino»; [OMNI]
 * Omniglot, «Ancash Quechua numbers» (consultados em 10/10/2026); [PAR] Gary J. Parker, «Gramática
 * quechua: Ancash-Huailas» (MINEDU e IEP, 1976), lida em 17/10/2026, base das lições extras do A1.1 e de
 * todo o A2. Curso criado a pedido do dono (10/10/2026) para completar a família quéchua e levado ao teto
 * (A2) em 17/10/2026. Código: o glottocode huay1239 (ver vocabulario.ts).
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
  // Curso completo até o teto (A2, em tetos): os testes de teto leem “incomplete.until igual ao último
  // subnível do teto” como curso completo.
  incomplete: {
    until: 'A2.2',
    note:
      'Curso completo até o teto do quéchua de Áncash (A2): quatro unidades, 108 palavras, 8 tópicos de gramática e 4 histórias, no quéchua de Huaylas. O A1 vem dos artigos da Wikipédia sobre o quéchua de Áncash e do Omniglot. O A2 vem da gramática de Gary Parker (1976), a da série oficial do Ministério da Educação do Peru: todas as frases do A2 são frases do livro, nenhuma foi criada pelo curso. Parker escreve “e” e “o” ao lado do “q” (“noqa”, “qoya”); aqui elas viram “i” e “u”, como manda o alfabeto oficial de três vogais (“nuqa”, “quya”). Ficaram de fora as orações subordinadas e os sufixos que mudam a direção da ação, que pedem mais do que o A2. Nenhuma voz sintética conhecida fala o quéchua de Áncash, então o áudio pode ficar mudo.',
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
  fontes: FONTES_HUAY1239,
  metodos: METODOS_HUAY1239,
  specialChars: ['ñ'],
  genders: [],
  greeting: 'Yaw',
  sampleSentence: 'Yaw! Imanawllataq kaykanki? Yamayllam kaykaa.',
  // “Yosulpaaki”, 'Gracias': Parker (1976), p. 72, lido na imagem da página
  phrases: { hi: 'Yaw!', thanks: 'Yosulpaaki!', letsStart: ['Yaw!', 'Ei! Vamos começar!'] },
  formalMarkers:
    'O quéchua de Áncash não tem um “você” de respeito separado, mas tem respostas mais respeitosas: “Nuqallaa” (sou eu, aqui estou), no lugar de “Nuqam”, ao responder a quem pergunta “Pitaq?”.',
  cognateNote:
    'O quéchua de Áncash não é parente do português. É primo do quéchua do sul e do kichwa, de outro ramo da família: muitas palavras são as mesmas (“yaku”, água; “rumi”, pedra; “ñawi”, olho), mas os números e os sons mudam — três é “kima”, e não “kimsa”.',
};
