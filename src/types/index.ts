export type CefrLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1';

export type PartOfSpeech =
  | 'substantivo'
  | 'verbo'
  | 'adjetivo'
  | 'advérbio'
  | 'pronome'
  | 'preposição'
  | 'conjunção'
  | 'artigo'
  | 'numeral'
  | 'interjeição';

export interface User {
  id: string;
  name: string;
  current_language: string;
  cefr_level: CefrLevel;
  streak_days: number;
  total_xp: number;
  last_study_date: string | null;
}

export interface VocabularyWord {
  id: string;
  language: string;
  word_target: string;
  word_native: string;
  frequency_rank: number;
  part_of_speech: PartOfSpeech | null;
  category: string | null;
  emoji: string | null;
  example_sentence: string | null;
  gender: 'm' | 'f' | 'n' | null;
  etymology_note: string | null;
  cultural_note: string | null;
  grammar_rule: string | null;
  image_url: string | null;
  audio_url: string | null;
}

export interface SRSState {
  id: string;
  user_id: string;
  vocab_id: string;
  interval: number;
  repetition: number;
  ease_factor: number;
  next_review_date: string;
}

/** Palavra do cofre já combinada com o estado SRS do usuário (se houver). */
export interface VocabWithSRS extends VocabularyWord {
  interval: number | null;
  repetition: number | null;
  ease_factor: number | null;
  next_review_date: string | null;
}

export interface CultureHistoryNote {
  id: string;
  language: string;
  unit_id: string | null;
  title: string;
  history: string;
  culture_tip: string;
  grammar_why: string;
  character_guide: string | null;
}

export type FeedbackStatus = 'aguardando' | 'corrigido';

export interface CommunityFeedback {
  id: string;
  author_name: string;
  is_mine: number;
  lesson_id: string | null;
  prompt: string;
  content: string;
  correction: string | null;
  corrected_by: string | null;
  status: FeedbackStatus;
  created_at: string;
}

export interface EtymologyTree {
  id: string;
  vocab_id: string;
  root_word: string;
  origin_language: string;
  cognate_list: string; // JSON: [{ lang, word }]
  evolution_note: string;
}

export interface Cognate {
  lang: string;
  word: string;
}
