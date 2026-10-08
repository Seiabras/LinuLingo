import type { LanguagePack } from '../types';
import { VOCAB_TLH } from './vocabulario';
import { UNITS_TLH } from './curriculo';
import { GRAMMAR_TLH } from './gramatica';
import { STORIES_TLH } from './historias';
import { COMMUNITY_TLH, ETYMOLOGY_TLH, JOURNAL_PROMPTS_TLH, SCENARIOS_TLH, SHADOWING_TLH } from './extras';
import { ALPHABET_TLH } from './alfabeto';

/**
 * Klingon (tlhIngan Hol): a segunda língua CONSTRUÍDA do app com curso de verdade, depois do
 * esperanto — mas de um tipo diferente: não uma língua auxiliar feita para unir pessoas, e sim uma
 * língua "artística"/de ficção, criada por Marc Okrand em 1984/1985 para os filmes de Star Trek.
 * Usa `lineage.family: 'Construída'` (a mesma convenção do esperanto, prevista em `isArtificial()`
 * em `idiomas.ts`), com `branches: ['Artísticas']` para diferenciar do ramo auxiliar do esperanto
 * dentro do mesmo grupo "Construída" no seletor.
 *
 * O vocabulário real e confirmado por Okrand é bem mais limitado do que o de uma língua auxiliar:
 * por decisão deste curso, preferimos um pacote menor e 100% rastreável a inventar palavras para
 * "completar" o nível A1 — ver a nota de cada arquivo para as fontes (sempre "The Klingon
 * Dictionary", de Okrand, e o Klingon Language Institute, nunca vocabulário de fã).
 */
export const KLINGON: LanguagePack = {
  code: 'tlh',
  name: 'Klingon',
  nativeName: 'tlhIngan Hol',
  flag: '🖖',
  lineage: {
    family: 'Construída',
    branches: ['Artísticas'],
    region: 'Criado por Marc Okrand em 1984/1985 para os filmes de Star Trek — falado pelo povo klingon de ficção, sem território real; hoje estudado por uma pequena comunidade de fãs ao redor do mundo, reunida sobretudo pelo Klingon Language Institute',
    writing: 'Romanização padrão criada pelo próprio Okrand (letras latinas em que maiúscula e minúscula marcam sons diferentes, como “q”/“Q” e “D”); existe também uma escrita de ficção própria chamada pIqaD, usada nas produções de Star Trek mais como decoração do que como sistema efetivamente ensinado',
  },
  // Não existe sintetizador de voz para klingon em aparelhos comuns (é uma língua de ficção, sem
  // código de voz oficial em nenhum sistema): sem voz nativa, cai no padrão do app — o mesmo
  // tratamento dado ao esperanto e a outros idiomas raros, como o nórdico antigo.
  speechLocale: 'tlh',
  available: true,
  incomplete: {
    until: 'A1.2',
    note: 'Só o nível A1 por enquanto (2 unidades, pouco mais de 70 palavras, 5 tópicos de gramática e 2 histórias). O vocabulário confirmado por Marc Okrand para o klingon é mais limitado do que o de uma língua auxiliar como o esperanto — preferimos um curso menor e honesto a inventar palavras para completar os níveis. Da A2.1 em diante chega conforme novas fontes confiáveis forem conferidas.',
  },
  vocab: VOCAB_TLH,
  units: UNITS_TLH,
  etymology: ETYMOLOGY_TLH,
  community: COMMUNITY_TLH,
  scenarios: SCENARIOS_TLH,
  stories: STORIES_TLH,
  grammar: GRAMMAR_TLH,
  journalPrompts: JOURNAL_PROMPTS_TLH,
  shadowing: SHADOWING_TLH,
  specialChars: ["'"],
  alphabet: ALPHABET_TLH,
  greeting: 'nuqneH',
  sampleSentence: 'nuqneH! tlhIngan jIH.',
  phrases: { hi: 'nuqneH!', thanks: "qatlho'!", letsStart: ["Qapla'!", 'Vamos ter sucesso!'] },
  formalMarkers:
    'Não há uma distinção gramatical confirmada entre tratamento formal e informal: “SoH” serve para “você/tu” no singular e “tlhIH” para “vocês” no plural — essa diferença marca só o número, não a formalidade.',
  cognateNote:
    'Diferente do esperanto (que empresta raízes do latim de propósito, para ficar fácil de reconhecer), o klingon foi desenhado por Marc Okrand justamente para NÃO lembrar nenhuma língua humana: ele escolheu sons raros (como o “tlh” e os sons de garganta “q”/“Q”/“H”) e a ordem de palavras objeto-verbo-sujeito, rara entre as línguas do mundo. Não espere nenhuma palavra parecida com o português aqui — é quase o oposto do esperanto nesse sentido.',
};
