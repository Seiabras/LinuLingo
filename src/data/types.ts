import type { CefrLevel, Cognate, PartOfSpeech } from '@/types';

export type Gender = 'm' | 'f' | 'n';

/** [palavra, tradução, classe, categoria, emoji, frase de exemplo, gênero] */
export type VocabRow = [string, string, PartOfSpeech, string, string | null, string, Gender?];

export interface VocabSeed {
  id: string;
  language: string;
  word_target: string;
  word_native: string;
  frequency_rank: number;
  part_of_speech: PartOfSpeech;
  category: string;
  emoji: string | null;
  example_sentence: string;
  gender: Gender | null;
}

export function buildVocab(language: string, rows: VocabRow[]): VocabSeed[] {
  return rows.map(([word_target, word_native, part_of_speech, category, emoji, example_sentence, gender], i) => ({
    id: `${language}-${String(i + 1).padStart(4, '0')}`,
    language,
    word_target,
    word_native,
    frequency_rank: i + 1,
    part_of_speech,
    category,
    emoji,
    example_sentence,
    gender: gender ?? null,
  }));
}

/** Card "Aprenda primeiro": história, cultura, gramática e guia de escrita. */
export interface CultureCardSeed {
  id: string;
  title: string;
  emoji: string;
  history: string;
  culture_tip: string;
  grammar_why: string;
  /** Exemplos da regra: [idioma alvo, tradução] */
  grammar_examples: [string, string][];
  /** Guia de caracteres: [letra, som aproximado, exemplo] */
  character_guide: [string, string, string][] | null;
}

export interface ClozeItem {
  /** Frase com ___ no lugar da palavra-chave */
  sentence: string;
  answer: string;
  options: string[];
  translation: string;
}

export interface VoiceChallenge {
  bot: string;
  botTranslation: string;
  /** Respostas aceitas (a primeira é o modelo mostrado como dica) */
  expected: string[];
  hint: string;
}

export type LessonKind = 'licao' | 'voz' | 'prova';

export interface LessonSeed {
  id: string;
  title: string;
  kind: LessonKind;
  /** Palavras (word_target) apresentadas na associação imersiva */
  words: string[];
  cloze: ClozeItem[];
  voice: VoiceChallenge;
  communityPrompt: string;
}

export interface UnitSeed {
  id: string;
  cefr: CefrLevel;
  title: string;
  emoji: string;
  card: CultureCardSeed;
  lessons: LessonSeed[];
}

export interface EtymologySeed {
  word: string;
  root_word: string;
  origin_language: string;
  cognates: Cognate[];
  evolution_note: string;
  /** Um falante de português reconhece a palavra sem estudar */
  transparent: boolean;
}

export interface CommunitySeed {
  author_name: string;
  prompt: string;
  content: string;
  /** Correção de referência mostrada depois que o aluno envia a sua */
  reference: string;
}

export interface ScenarioTurn {
  bot: string;
  botTranslation: string;
  /** Palavras-chave que indicam uma resposta adequada */
  keywords: string[];
  /** Respostas-modelo sugeridas ao aluno */
  suggestions: string[];
  /** Palavras que quebram o registro pedido (ex.: "tu" num cenário formal) */
  registerBreakers?: string[];
}

export interface ScenarioSeed {
  id: string;
  title: string;
  emoji: string;
  cefr: CefrLevel;
  register: 'formal' | 'informal';
  persona: string;
  description: string;
  turns: ScenarioTurn[];
}

/** Classificação genealógica e geográfica, usada para agrupar o seletor de idiomas. */
export interface LanguageLineage {
  family: string; // ex.: 'Indo-europeu', 'Urálico'
  branches: string[]; // do mais geral ao mais específico
  region: string; // região de origem
  writing: string; // sistema de escrita
}

export interface LanguageInfo {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  lineage: LanguageLineage;
}

export interface LanguagePack extends LanguageInfo {
  /** Locale para síntese e reconhecimento de voz */
  speechLocale: string;
  available: boolean;
  vocab: VocabSeed[];
  units: UnitSeed[];
  etymology: EtymologySeed[];
  community: CommunitySeed[];
  scenarios: ScenarioSeed[];
  /** Letras especiais para o teclado adaptado */
  specialChars: string[];
}

/** Meta do núcleo de vocabulário por idioma (as palavras mais frequentes). */
export const VOCAB_TARGET_TOTAL = 4000;
