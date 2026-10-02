import type { LanguagePack } from '../types';
import { VOCAB_MVF } from './vocabulario';
import { UNITS_MVF } from './curriculo';
import { GRAMMAR_MVF } from './gramatica';
import { STORIES_MVF } from './historias';
import { COMMUNITY_MVF, ETYMOLOGY_MVF, JOURNAL_PROMPTS_MVF, SCENARIOS_MVF, SHADOWING_MVF } from './extras';
import { toReadingMongolScript, typedMongolScript } from '@/services/reading-mongol-script';

/**
 * Mongol na escrita tradicional (vertical). O código é o da ISO 639-3 para o mongol da Mongólia
 * Interior (mvf, “Peripheral Mongolian”), onde essa escrita é a do dia a dia; a Mongólia usa o cirílico
 * (pacote mn). As palavras são as mesmas do pacote em cirílico, com a grafia de cada uma tirada do
 * Wiktionary (ver vocabulario.ts). É o primeiro pacote de escrita vertical do app: `direction: 'ttb'`
 * (ver src/services/direction.ts).
 */
export const MONGOL_TRADICIONAL: LanguagePack = {
  code: 'mvf',
  name: 'Mongol (escrita tradicional)',
  // ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ (mongɣol kele), “língua mongol”: grafias de “монгол” e “хэл” no Wiktionary
  nativeName: 'ᠮᠣᠩᠭᠣᠯ ᠬᠡᠯᠡ',
  flag: '🇨🇳',
  lineage: {
    family: 'Mongólico',
    branches: ['Mongólico central', 'Mongol da Mongólia Interior (escrita tradicional)'],
    region: 'Mongólia Interior, na China, onde a escrita tradicional continua sendo a do dia a dia; na Mongólia, onde o cirílico é a escrita oficial, o governo anunciou em 2020 o uso das duas escritas nos documentos oficiais a partir de 2025.',
    writing: 'Escrita mongol tradicional: vertical, de cima pra baixo, com as colunas andando da esquerda pra direita.',
  },
  direction: 'ttb',
  // não há voz que leia a escrita tradicional: o locale é o do mongol, com a escrita marcada (BCP 47)
  speechLocale: 'mn-Mong-CN',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (unidades 1 e 2, as mesmas 60 palavras do mongol em cirílico, 4 tópicos de gramática e 2 histórias), na escrita mongol tradicional, que se lê de cima pra baixo. Cada grafia foi copiada do Wiktionary em inglês, que traz a forma na escrita tradicional de cada palavra; as frases usam só os padrões já usados no mongol em cirílico. Nenhuma voz sintética conhecida lê a escrita tradicional, então o áudio pode ficar mudo; a leitura em letras latinas aparece embaixo de cada frase, e digitar essa leitura também vale como resposta. No celular (fora do navegador), o texto aparece deitado, com as letras giradas, porque o aplicativo nativo ainda não sabe escrever na vertical. Da A2.1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_MVF,
  units: UNITS_MVF,
  etymology: ETYMOLOGY_MVF,
  community: COMMUNITY_MVF,
  scenarios: SCENARIOS_MVF,
  stories: STORIES_MVF,
  grammar: GRAMMAR_MVF,
  journalPrompts: JOURNAL_PROMPTS_MVF,
  shadowing: SHADOWING_MVF,
  // embaixo de cada frase, a transliteração do Wiktionary (ᠮᠣᠷᠢ · mori), que também vale digitada
  reading: toReadingMongolScript,
  typedReading: typedMongolScript,
  specialChars: [],
  // as letras básicas da escrita, na ordem do alfabeto latino da transliteração (a forma de cada uma
  // muda sozinha conforme a posição na palavra)
  keyboardRows: [
    ['ᠠ', 'ᠡ', 'ᠢ', 'ᠣ', 'ᠤ', 'ᠥ', 'ᠦ'],
    ['ᠨ', 'ᠩ', 'ᠪ', 'ᠫ', 'ᠬ', 'ᠭ', 'ᠮ', 'ᠯ', 'ᠰ'],
    ['ᠱ', 'ᠲ', 'ᠳ', 'ᠴ', 'ᠵ', 'ᠶ', 'ᠷ', 'ᠸ'],
  ],
  genders: [],
  greeting: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?',
  sampleSentence: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ? ᠲᠠᠨ ᠤ ᠨᠡᠷ᠎ᠡ ᠬᠡᠨ ᠪᠤᠢ?',
  phrases: {
    hi: 'ᠰᠠᠶ᠋ᠢᠨ ᠪᠠᠢᠨ᠎ᠠ ᠤᠤ?',
    thanks: 'ᠪᠠᠶᠠᠷᠯᠠᠯᠤᠭ᠎ᠠ',
    letsStart: ['ᠰᠠᠶ᠋ᠢᠨ!', 'Bom! (usado aqui como “vamos lá”)'],
  },
  formalMarkers: 'Como no mongol em cirílico, ᠴᠢ (či) é o “você” informal e ᠲᠠ (ta) o formal: com uma pessoa mais velha ou desconhecida, use ᠲᠠ.',
  cognateNote: 'O mongol NÃO é parente do português: é da família mongólica, sem relação com as línguas indo-europeias. As palavras são as mesmas do mongol em cirílico; o que muda é a escrita, que guarda a grafia antiga — compare ᠮᠣᠷᠢ (mori) com “морь”, e ᠰᠦᠨ (sün) com “сүү”. Algumas palavras de pastores, como ᠬᠣᠨᠢ (ovelha) e ᠠᠶᠢᠷᠠᠭ (airag), vieram de línguas túrquicas vizinhas por contato, não por parentesco.',
};
