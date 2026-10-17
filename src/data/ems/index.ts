import type { LanguagePack } from '../types';
import { VOCAB_EMS } from './vocabulario';
import { UNITS_EMS } from './curriculo';
import { GRAMMAR_EMS } from './gramatica';
import { STORIES_EMS } from './historias';
import { COMMUNITY_EMS, ETYMOLOGY_EMS, JOURNAL_PROMPTS_EMS, SCENARIOS_EMS, SHADOWING_EMS } from './extras';
import { ACCENTS_EMS } from './sotaques';
import { VARIANTS_EMS } from './variantes';
import { FONTES_EMS, METODOS_EMS } from './fontes';

/**
 * Fontes gerais (detalhes em vocabulario.ts): [WIKT] Wikcionário em inglês, verbetes do alutiiq e os
 * exemplos deles; [WIKI] Wikipédia em inglês, «Alutiiq language»; [ANLC] Alaska Native Language Center,
 * «Alutiiq / Sugpiaq» (todas consultadas em 10/10/2026). Curso criado a pedido do dono (10/10/2026) para
 * completar a família esquimó-aleúte. O A2 (17/10/2026) segue o “Kodiak Alutiiq Language Textbook”
 * (Sun’aq Tribe of Kodiak e Alutiiq Museum, 2023) e o “Kodiak Alutiiq Conversational Phrasebook” (Alutiiq
 * Museum, 2006), com a página de cada frase no comentário; detalhes em vocabulario.ts.
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
  // Curso completo até o teto (A2, em tetos): o teste de teto lê “incomplete.until igual ao último
  // subnível do teto” como curso completo.
  incomplete: {
    until: 'A2.2',
    note:
      'Curso completo até o teto do alutiiq (A2): quatro unidades, 115 palavras, 8 tópicos de gramática e 4 histórias, no alutiiq koniag de Kodiak. O A1 vem do Wikcionário, da Wikipédia e do Alaska Native Language Center. O A2 vem do livro-texto de alutiiq de Kodiak (2023), feito pela tribo Sun’aq e pelo Alutiiq Museum, e do guia de conversação de Kodiak (2006), revisado por Jeff Leer e por anciãos falantes: as frases do A2 são desses livros, e só o nome do Linu foi posto no molde de apresentação do livro (“Gui …”). Os livros dão primeiro a forma do norte de Kodiak e marcam a do sul, e o curso faz o mesmo. Por isso algumas palavras aparecem com duas grafias, como o chá, “cayuq” no Wikcionário e “caayuq” nos livros. Ficaram de fora os verbos com objeto (os transitivos), que pedem mais do que o A2. Nenhuma voz sintética conhecida fala o alutiiq, então o áudio pode ficar mudo.',
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
  fontes: FONTES_EMS,
  metodos: METODOS_EMS,
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
