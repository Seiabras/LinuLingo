/**
 * Esquema SQLite local (offline-first). Cada item de MIGRATIONS roda uma única vez;
 * a versão aplicada fica em PRAGMA user_version.
 */
export const MIGRATIONS: string[] = [
  `
  CREATE TABLE IF NOT EXISTS Users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    current_language TEXT NOT NULL,
    cefr_level TEXT DEFAULT 'A1',
    streak_days INTEGER DEFAULT 0,
    total_xp INTEGER DEFAULT 0,
    last_study_date TEXT,
    streak_freezes INTEGER DEFAULT 1,
    daily_goal_xp INTEGER DEFAULT 30
  );

  CREATE TABLE IF NOT EXISTS Vocabulary (
    id TEXT PRIMARY KEY,
    language TEXT NOT NULL,
    word_target TEXT NOT NULL,
    word_native TEXT NOT NULL,
    frequency_rank INTEGER NOT NULL,
    part_of_speech TEXT,
    category TEXT,
    emoji TEXT,
    example_sentence TEXT,
    gender TEXT,
    etymology_note TEXT,
    cultural_note TEXT,
    grammar_rule TEXT,
    image_url TEXT,
    audio_url TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_vocab_lang_rank ON Vocabulary(language, frequency_rank);

  CREATE TABLE IF NOT EXISTS User_SRS_State (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    vocab_id TEXT NOT NULL,
    interval INTEGER DEFAULT 0,
    repetition INTEGER DEFAULT 0,
    ease_factor REAL DEFAULT 2.5,
    next_review_date TEXT NOT NULL,
    UNIQUE (user_id, vocab_id),
    FOREIGN KEY (user_id) REFERENCES Users(id),
    FOREIGN KEY (vocab_id) REFERENCES Vocabulary(id)
  );
  CREATE INDEX IF NOT EXISTS idx_srs_due ON User_SRS_State(user_id, next_review_date);

  CREATE TABLE IF NOT EXISTS Culture_History_Notes (
    id TEXT PRIMARY KEY,
    language TEXT NOT NULL,
    unit_id TEXT,
    title TEXT NOT NULL,
    emoji TEXT,
    history TEXT NOT NULL,
    culture_tip TEXT NOT NULL,
    grammar_why TEXT NOT NULL,
    grammar_examples TEXT,
    character_guide TEXT
  );

  CREATE TABLE IF NOT EXISTS Community_Feedback (
    id TEXT PRIMARY KEY,
    language TEXT NOT NULL,
    author_name TEXT NOT NULL,
    is_mine INTEGER DEFAULT 0,
    lesson_id TEXT,
    prompt TEXT NOT NULL,
    content TEXT NOT NULL,
    reference TEXT,
    correction TEXT,
    corrected_by TEXT,
    status TEXT DEFAULT 'aguardando',
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS Etymology_Trees (
    id TEXT PRIMARY KEY,
    vocab_id TEXT NOT NULL REFERENCES Vocabulary(id),
    root_word TEXT NOT NULL,
    origin_language TEXT NOT NULL,
    cognate_list TEXT,
    evolution_note TEXT,
    transparent INTEGER DEFAULT 0
  );

  CREATE TABLE IF NOT EXISTS Lesson_Progress (
    user_id TEXT NOT NULL,
    lesson_id TEXT NOT NULL,
    completed_at TEXT NOT NULL,
    best_score REAL DEFAULT 0,
    times_completed INTEGER DEFAULT 1,
    PRIMARY KEY (user_id, lesson_id)
  );

  CREATE TABLE IF NOT EXISTS XP_Log (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    day TEXT NOT NULL,
    xp INTEGER NOT NULL,
    source TEXT NOT NULL
  );
  CREATE INDEX IF NOT EXISTS idx_xp_day ON XP_Log(user_id, day);

  CREATE TABLE IF NOT EXISTS Meta (
    key TEXT PRIMARY KEY,
    value TEXT
  );
  `,
  // 2 — histórias interativas
  `
  CREATE TABLE IF NOT EXISTS Interactive_Stories (
    id TEXT PRIMARY KEY,
    language TEXT NOT NULL,
    cefr_level TEXT NOT NULL,
    title TEXT NOT NULL,
    content_json TEXT NOT NULL,
    cultural_context TEXT
  );

  CREATE TABLE IF NOT EXISTS Story_Progress (
    user_id TEXT NOT NULL,
    story_id TEXT NOT NULL,
    ending_id TEXT NOT NULL,
    mistakes INTEGER DEFAULT 0,
    reached_at TEXT NOT NULL,
    PRIMARY KEY (user_id, story_id, ending_id)
  );
  `,
  // 3 — diário, mnemônicos (palácio da memória) e shadowing
  `
  CREATE TABLE IF NOT EXISTS User_Journal_Logs (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL REFERENCES Users(id),
    language TEXT NOT NULL,
    created_at TEXT NOT NULL,
    day TEXT NOT NULL,
    prompt TEXT,
    raw_user_input TEXT NOT NULL,
    corrected_input TEXT,
    native_phrasing_suggestion TEXT,
    audio_recording_path TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_journal_day ON User_Journal_Logs(user_id, day);

  CREATE TABLE IF NOT EXISTS Mnemonic_Palaces (
    id TEXT PRIMARY KEY,
    vocab_id TEXT NOT NULL REFERENCES Vocabulary(id),
    gender_visual_tag TEXT,
    mnemonic_prompt TEXT,
    custom_image_url TEXT
  );

  CREATE TABLE IF NOT EXISTS Shadowing_Attempts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    phrase TEXT NOT NULL,
    rhythm_score INTEGER,
    contour_ok INTEGER,
    created_at TEXT NOT NULL
  );
  `,
  // 4 — caderno de erros: um registro por item errado (a última resposta errada e quantas vezes)
  `
  CREATE TABLE IF NOT EXISTS Mistake_Log (
    id TEXT PRIMARY KEY,
    user_id TEXT NOT NULL,
    language TEXT NOT NULL,
    source TEXT NOT NULL,
    prompt TEXT NOT NULL,
    expected TEXT NOT NULL,
    given TEXT,
    note TEXT,
    speak TEXT,
    options TEXT,
    misses INTEGER DEFAULT 1,
    streak INTEGER DEFAULT 0,
    first_at TEXT NOT NULL,
    last_at TEXT NOT NULL,
    resolved_at TEXT
  );
  CREATE INDEX IF NOT EXISTS idx_mistake_lang ON Mistake_Log(user_id, language, resolved_at);
  `,
];

export const LOCAL_USER_ID = 'local';
