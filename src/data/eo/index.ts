import type { LanguagePack } from '../types';
import { VOCAB_EO } from './vocabulario';
import { UNITS_EO } from './curriculo';
import { GRAMMAR_EO } from './gramatica';
import { STORIES_EO } from './historias';
import { COMMUNITY_EO, ETYMOLOGY_EO, JOURNAL_PROMPTS_EO, SCENARIOS_EO, SHADOWING_EO } from './extras';
import { ALPHABET_EO } from './alfabeto';

/**
 * Esperanto: a primeira língua CONSTRUÍDA do app com curso de verdade (pedido do Matheus,
 * 08/10/2026 — "coloca... o primeiro curso... pode começar com esperanto"). Até aqui, idiomas
 * construídos só existiam como verbetes culturais em `tipos-de-linguas.ts`; este pacote usa
 * `lineage.family: 'Construída'`, a convenção já prevista em `isArtificial()` (ver `idiomas.ts`),
 * pra aparecer no seletor "🤖 Artificiais" do Perfil, ao lado dos idiomas naturais.
 */
export const ESPERANTO: LanguagePack = {
  code: 'eo',
  name: 'Esperanto',
  nativeName: 'Esperanto',
  flag: '⭐',
  lineage: {
    family: 'Construída',
    branches: ['Auxiliares'],
    region: 'Criado em Białystok (Império Russo, hoje Polônia), 1887, por L. L. Zamenhof — hoje falado por uma comunidade mundial, sem território próprio',
    writing: 'Alfabeto latino próprio: 28 letras, 22 iguais ao alfabeto comum (sem q/w/x/y) e 6 com acento (ĉ, ĝ, ĥ, ĵ, ŝ, ŭ)',
  },
  // BCP-47 na melhor tentativa ('eo' é o código real). Alguns sintetizadores (ex. eSpeak) têm voz de
  // esperanto, mas a cobertura em aparelhos comuns é inconsistente — sem voz nativa, cai no padrão
  // do app (mesmo tratamento dado a outros idiomas raros, como o nórdico antigo).
  speechLocale: 'eo',
  available: true,
  incomplete: {
    until: 'A2.2',
    note: 'A1.1 até A2.2 completo (4 unidades, ~152 palavras, 11 tópicos de gramática — incluindo participios, comparativo/superlativo e oração relativa com "kiu" —, 4 histórias). Do B1 até o C2 chega nas próximas atualizações.',
  },
  vocab: VOCAB_EO,
  units: UNITS_EO,
  etymology: ETYMOLOGY_EO,
  community: COMMUNITY_EO,
  scenarios: SCENARIOS_EO,
  stories: STORIES_EO,
  grammar: GRAMMAR_EO,
  journalPrompts: JOURNAL_PROMPTS_EO,
  shadowing: SHADOWING_EO,
  specialChars: ['ĉ', 'ĝ', 'ĥ', 'ĵ', 'ŝ', 'ŭ'],
  alphabet: ALPHABET_EO,
  greeting: 'Saluton',
  sampleSentence: 'Saluton! Mia nomo estas Linu. Ni parolu Esperanton!',
  phrases: { hi: 'Saluton!', thanks: 'Dankon!', letsStart: ['Ni komencu!', 'Vamos começar!'] },
  formalMarkers:
    'No esperanto não existe distinção formal/informal nem singular/plural na segunda pessoa: "vi" serve pra "você", "tu", "vocês" e o "você" formal, sempre igual. Existe um "ci" informal arcaico proposto por Zamenhof, mas o próprio Fundamento de Esperanto o deixou de fora da lista oficial de pronomes, e ele é hoje praticamente em desuso.',
  cognateNote:
    'A maior parte do vocabulário do esperanto vem do latim e das línguas românicas (como o português), com uma camada menor de raízes germânicas e eslavas — Zamenhof escolheu de propósito palavras já reconhecíveis por quem fala línguas europeias. Muita palavra do esperanto é parecida com o português sem nem precisar estudar: "familio", "granda", "akvo".',
};
