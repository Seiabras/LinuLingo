import type { LanguagePack } from '../types';
import { VOCAB_DV } from './vocabulario';
import { UNITS_DV } from './curriculo';
import { GRAMMAR_DV } from './gramatica';
import { STORIES_DV } from './historias';
import { COMMUNITY_DV, ETYMOLOGY_DV, JOURNAL_PROMPTS_DV, SCENARIOS_DV, SHADOWING_DV } from './extras';
import { ACCENTS_DV } from './sotaques';

/**
 * Dhivehi/divehi (ދިވެހި), língua oficial e nacional das Maldivas. Pacote novo — ver o cabeçalho
 * de vocabulario.ts para a lista completa de fontes (todas checadas via WebFetch nesta sessão:
 * Wikipédia em inglês, Wikivoyage, Wiktionary).
 *
 * Decisões de classificação, checadas por fonte:
 * - Família/ramo: indo-europeu → indo-iraniano → indo-ariano. Mas, diferente do hindi (que entra
 *   no indo-ariano central), o dhivehi forma, com o sinhala do Sri Lanka, um grupo à parte dentro
 *   do indo-ariano — às vezes chamado de “indo-ariano insular” — aparentado mas não mutuamente
 *   inteligível com o resto da família (en.wikipedia.org/wiki/Dhivehi_language).
 * - Escrita: Thaana (ތާނަ), da direita pra esquerda — a exceção entre as línguas indo-arianas
 *   (que normalmente usam escritas da família brahmi, da esquerda pra direita). As letras do
 *   Thaana não descendem do brahmi: nasceram de algarismos árabes e índicos locais, e a direção
 *   de escrita veio do contato com o árabe, por causa da islamização das Maldivas
 *   (en.wikipedia.org/wiki/Thaana).
 * - Gênero gramatical: o dhivehi padrão NÃO marca gênero gramatical (só o dialeto de Mulaku, ao
 *   sul, marca) — por isso `genders: []`, como outras línguas sem gênero neste app (turco,
 *   japonês, coreano, indonésio, finlandês).
 */
export const DHIVEHI: LanguagePack = {
  code: 'dv',
  name: 'Dhivehi',
  nativeName: 'ދިވެހި',
  flag: '🇲🇻',
  direction: 'rtl',
  lineage: {
    family: 'Indo-europeu',
    branches: ['Indo-iraniano', 'Indo-ariano', 'Indo-ariano insular (com o sinhala)'],
    region: 'Maldivas (Oceano Índico)',
    writing: 'Thaana (ތާނަ), abjad-alfabeto da direita pra esquerda — único entre as línguas indo-arianas',
  },
  // Não há voz nativa confirmada para dhivehi nos sistemas de síntese de voz mais comuns; 'dv-MV'
  // é o código mais razoável (ISO 639-1 'dv' + Maldivas), mas não foi testado/confirmado nesta
  // sessão — é uma aproximação, igual a outros pacotes novos e pouco comuns deste app.
  speechLocale: 'dv-MV',
  available: true,
  incomplete: {
    until: 'A1.2',
    note:
      'Pacote novo e pequeno de propósito: só o nível A1 por enquanto (unidades 1 e 2, 64 palavras, 4 tópicos de gramática, 2 histórias). Três recortes honestos: (1) sem função de leitura/romanização ainda (como a lacuna do pinyin no mandarim deste app) — quem não lê Thaana por enquanto só vê a escrita nativa; (2) a categoria “Casa” ficou com uma palavra só (ގެ, “casa”), porque o resto do vocabulário de casa não foi confirmado por fonte a tempo; (3) a conjugação verbal e o verbo de ligação (“ser/estar”) do dhivehi não foram confirmados por fonte nesta sessão, então as frases de exemplo usam a ordem sujeito-objeto-verbo com o substantivo verbal (forma de dicionário) em vez de verbos conjugados. Da A2.1 até o C2, e os recortes acima, chegam nas próximas atualizações.',
  },
  vocab: VOCAB_DV,
  units: UNITS_DV,
  etymology: ETYMOLOGY_DV,
  community: COMMUNITY_DV,
  scenarios: SCENARIOS_DV,
  stories: STORIES_DV,
  accents: ACCENTS_DV,
  grammar: GRAMMAR_DV,
  journalPrompts: JOURNAL_PROMPTS_DV,
  shadowing: SHADOWING_DV,
  // as 24 letras do Thaana mais usadas em palavras nativas (en.wikipedia.org/wiki/Thaana): as 9
  // vindas de algarismos árabes, as 9 vindas de numerais índicos locais, e as consoantes de
  // empréstimo mais comuns. Os sinais de vogal (fili) ainda não entraram aqui.
  specialChars: [
    'ހ', 'ށ', 'ނ', 'ރ', 'ބ', 'ޅ', 'ކ', 'އ', 'ވ',
    'މ', 'ފ', 'ދ', 'ތ', 'ލ', 'ގ', 'ޱ', 'ސ', 'ޑ',
    'ޒ', 'ޓ', 'ޔ', 'ޕ', 'ޖ', 'ޗ', 'ޏ',
  ],
  // mesmas 24 letras, em fileiras de teclado, na ordem tradicional do alfabeto Thaana (que, por
  // ser uma escrita da direita pra esquerda, já é a própria ordem de leitura direita-esquerda).
  keyboardRows: [
    ['ހ', 'ށ', 'ނ', 'ރ', 'ބ', 'ޅ', 'ކ', 'އ', 'ވ'],
    ['މ', 'ފ', 'ދ', 'ތ', 'ލ', 'ގ', 'ޱ', 'ސ', 'ޑ'],
    ['ޒ', 'ޓ', 'ޔ', 'ޕ', 'ޖ', 'ޗ', 'ޏ'],
  ],
  // o dhivehi padrão não marca gênero gramatical (só o dialeto de Mulaku, ao sul, marca —
  // en.wikipedia.org/wiki/Dhivehi_language).
  genders: [],
  greeting: 'މަރުޙަބާ',
  sampleSentence: 'މަރުޙަބާ! އަހަރެންގެ ނަން ލީނޫ.',
  phrases: { hi: 'މަރުޙަބާ!', thanks: 'ޝުކުރިއްޔާ!', letsStart: ['ރަނގަޅު!', 'Vamos começar!'] },
  formalMarkers:
    'O dhivehi tem três registros de fala, ligados à hierarquia social, não só à intimidade: “maaiy bas” (o mais formal, de respeito), “reethi bas” (o padrão educado, o que este pacote ensina) e “aadhaige bas” (informal, entre amigos próximos). Este pacote ainda não confirmou por fonte as palavras específicas do registro mais formal (maaiy bas).',
  cognateNote:
    'O dhivehi é um parente indo-europeu bem distante do português — mais distante ainda do que o hindi, porque faz parte de um grupo à parte dentro do indo-ariano (o “indo-ariano insular”, com o sinhala do Sri Lanka). Não há palavra do dhivehi parecida o bastante com o português pra reconhecer sem estudar, mas dá pra ver o parentesco com o hindi por outro caminho: “ބަސް” (bas, “língua”) e o hindi “भाषा” (bhāṣā, “língua”) vêm os dois do mesmo sânscrito “bhāṣā”.',
};
