import type { LanguagePack } from '../types';
import { VOCAB_JBO } from './vocabulario';
import { UNITS_JBO } from './curriculo';
import { GRAMMAR_JBO } from './gramatica';
import { STORIES_JBO } from './historias';
import { COMMUNITY_JBO, ETYMOLOGY_JBO, JOURNAL_PROMPTS_JBO, SCENARIOS_JBO, SHADOWING_JBO } from './extras';
import { ALPHABET_JBO } from './alfabeto';

/**
 * Lojban: a segunda língua CONSTRUÍDA do app com curso de verdade, depois do esperanto
 * (08/10/2026) — pedido do Matheus: "cria o equivalente (A1) para os outros idiomas artificiais".
 * Usa `lineage.family: 'Construída'`, a mesma convenção do esperanto, prevista em `isArtificial()`
 * (ver `idiomas.ts`), pra aparecer no seletor "🤖 Artificiais" do Perfil. Diferente do esperanto
 * (uma língua auxiliar, feita pra ser fácil pra quem fala línguas europeias), o lojban é uma língua
 * LÓGICA: a gramática é formal e sem ambiguidade sintática, mais parecida com uma linguagem de
 * programação do que com o português — por isso o ramo aqui é "Lógicas", não "Auxiliares".
 * Fontes gerais do pacote: "The Complete Lojban Language" (CLL), John Woldemar Cowan, The Logical
 * Language Group, 1997 (lojban.org/publications/cll/); vlasisku.lojban.org (espelho do dicionário
 * oficial jbovlaste); mw.lojban.org (wiki oficial, história e comunidade); Wikipédia, "Lojban" e
 * "Loglan"; e a decisão "The Loglan Institute, Inc. v. The Logical Language Group, Inc.", 962 F.2d
 * 1038 (Fed. Cir. 1992), via law.justia.com, para a disputa Loglan×Lojban.
 */
export const LOJBAN: LanguagePack = {
  code: 'jbo',
  name: 'Lojban',
  nativeName: 'La lojban',
  flag: '🧮',
  lineage: {
    family: 'Construída',
    branches: ['Lógicas'],
    region: 'Criado em 1987 pelo Logical Language Group, nos EUA, a partir do Loglan de James Cooke Brown (1955) — falado por uma pequena comunidade, sobretudo online, sem território próprio',
    writing: 'Alfabeto latino com 23 letras (todo o alfabeto comum, menos h, q e w) mais o apóstrofo, que representa um som de "h" entre vogais; cada letra tem um só som, e o acento tônico é quase sempre na penúltima sílaba',
  },
  // BCP-47 na melhor tentativa ('jbo' é o código ISO 639-3 real). Não existe voz sintetizada nativa
  // de lojban em nenhum sintetizador comum — sem voz própria, cai no padrão do app (mesmo
  // tratamento dado ao esperanto e a outros idiomas raros, como o nórdico antigo).
  speechLocale: 'jbo',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1 e A2 completos (4 unidades, 95 palavras, 9 tópicos de gramática, 4 histórias). O teto real do lojban no app é B1.4 (ver TETO-DOS-IDIOMAS.md): a língua tem uma gramática de referência completa (o "The Complete Lojban Language", de 1997) e um dicionário vivo (jbovlaste), mas pouco texto de verdade escrito nela — o critério do app só garante material confiável até o B1. Faltam as quatro unidades B1 (B1.1 a B1.4), com vocabulário de viagem, saúde e opinião, e gramática mais avançada (abstrações com "du\'u"/"ka", orações relativas com "poi"/"noi").',
  },
  vocab: VOCAB_JBO,
  units: UNITS_JBO,
  etymology: ETYMOLOGY_JBO,
  community: COMMUNITY_JBO,
  scenarios: SCENARIOS_JBO,
  stories: STORIES_JBO,
  grammar: GRAMMAR_JBO,
  journalPrompts: JOURNAL_PROMPTS_JBO,
  shadowing: SHADOWING_JBO,
  specialChars: [],
  alphabet: ALPHABET_JBO,
  greeting: 'Coi',
  sampleSentence: "Coi! Mi pendo do. .ui mi klama le zarci!",
  phrases: { hi: 'Coi!', thanks: "Ki'e!", letsStart: ['Mi klama le zarci!', 'Vamos começar!'] },
  // Não existe, documentada, uma palavra pronta de lojban pra "vamos começar": o par acima é a
  // frase mais próxima e segura, já ensinada no curso ("eu vou ao mercado" = topar uma ida junto),
  // em vez de inventar uma tradução literal que nenhuma fonte confirma.
  formalMarkers:
    'o lojban não distingue registro formal/informal nem singular/plural na segunda pessoa: "do" serve pra "você", "tu", "vocês" e o "você" formal, sempre do mesmo jeito — ainda mais absoluto do que o "vi" do esperanto, que ao menos teve um "ci" informal proposto (e abandonado). No lojban nunca existiu uma segunda forma.',
  cognateNote:
    'O lojban não tem parentesco nenhum com o português: é uma língua construída do zero, sem família natural. As raízes (gismu) nem vieram de uma única língua-fonte — foram montadas por um algoritmo que combinou sons de palavras com sentido parecido em seis das línguas mais faladas do mundo (chinês, inglês, hindi, espanhol, russo e árabe), ponderadas pelo número de falantes de cada uma. O resultado é que nenhuma palavra do lojban se parece de forma confiável com nada do português — bem diferente do esperanto, que usou de propósito raízes latinas reconhecíveis.',
};
