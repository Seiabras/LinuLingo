import type { LanguagePack } from '../types';
import { VOCAB_TPW } from './vocabulario';
import { UNITS_TPW } from './curriculo';
import { GRAMMAR_TPW } from './gramatica';
import { STORIES_TPW } from './historias';
import { COMMUNITY_TPW, ETYMOLOGY_TPW, JOURNAL_PROMPTS_TPW, SCENARIOS_TPW, SHADOWING_TPW } from './extras';

export const TUPI_ANTIGO: LanguagePack = {
  code: 'tpw',
  name: 'Tupi Antigo',
  // "Abanheenga" ("língua de gente", de abá "pessoa" + nheenga "fala, língua") é o nome que os
  // próprios cronistas e falantes usavam para a língua — não "nheẽgatu" ("língua boa"), que é como se
  // chama o tupi moderno/a língua geral amazônica, hoje uma língua à parte no app (código yrl).
  nativeName: 'Abanheenga',
  // território histórico: a costa do Brasil colonial, não um estado atual — um emoji de bandeira do
  // Brasil de hoje, na falta de um símbolo próprio da língua extinta.
  flag: '🇧🇷',
  lineage: {
    family: 'Tupi',
    branches: ['Tupi-guarani', 'Tupi/Tupinambá (Grupo III da classificação de Rodrigues & Cabral)'],
    region: 'Costa do Brasil, séculos XVI–XVIII (língua extinta)',
    writing: 'Alfabeto latino, na ortografia moderna de Eduardo de Almeida Navarro (apóstrofo para a oclusiva glotal; til para as vogais nasais: ã ẽ ĩ õ ũ ỹ)',
  },
  // BCP-47 na melhor tentativa: não há voz nativa para tupi antigo em nenhum aparelho.
  speechLocale: 'tpw',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, cerca de 80 palavras, 4 tópicos de gramática, 2 histórias), na ortografia de Navarro. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_TPW,
  units: UNITS_TPW,
  etymology: ETYMOLOGY_TPW,
  community: COMMUNITY_TPW,
  scenarios: SCENARIOS_TPW,
  stories: STORIES_TPW,
  grammar: GRAMMAR_TPW,
  journalPrompts: JOURNAL_PROMPTS_TPW,
  shadowing: SHADOWING_TPW,
  specialChars: ['ã', 'ẽ', 'ĩ', 'õ', 'ũ', 'ỹ', "'"],
  genders: [],
  greeting: 'Ereîúrype?',
  sampleSentence: 'Ereîúrype? Xe rera Linu. Taîasó!',
  phrases: {
    hi: 'Ereîúrype?',
    // o tupi antigo não lexicalizou um "obrigado" como o português: "katu" (bom, bem) é a palavra
    // documentada mais próxima para uma resposta positiva de apreço — ver o relatório da entrega.
    thanks: 'Katu!',
    letsStart: ['Taîasó!', 'Vamos!'],
  },
  formalMarkers:
    'o tupi antigo não tem uma forma "formal" de tratamento separada: "endé" (tu/você) e "peẽ" (vocês) servem para qualquer pessoa, sem a distinção que o português marca com "você"/"o senhor".',
  cognateNote:
    'O tupi antigo não é parente do português — é uma língua indígena de uma família totalmente diferente (tupi-guarani) —, mas deixou centenas de palavras no português do Brasil: nomes de bichos, plantas, lugares e costumes que os colonizadores aprenderam com os próprios tupinambás. Aqui a etimologia mostra o caminho inverso dos idiomas europeus do aplicativo: a palavra tupi é a origem, e o português é quem herdou dela.',
};
