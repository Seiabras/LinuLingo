import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from './schema';
import { calculateNextReview, newCard, type SRSCard } from '@/srs/sm2';
import { localDay, registerStudy, type StreakResult } from '@/services/progress';
import type { CommunityFeedback, CultureHistoryNote, EtymologyTree, User, VocabWithSRS } from '@/types';

const uid = LOCAL_USER_ID;

// ---------- Usuário ----------

export function getUser(db: SQLiteDatabase) {
  return db.getFirstAsync<User & { streak_freezes: number; daily_goal_xp: number }>('SELECT * FROM Users WHERE id = ?', uid);
}

export async function updateUser(db: SQLiteDatabase, fields: Partial<Pick<User, 'name' | 'current_language'>> & { daily_goal_xp?: number }) {
  const entries = Object.entries(fields).filter(([, v]) => v !== undefined);
  if (!entries.length) return;
  await db.runAsync(
    `UPDATE Users SET ${entries.map(([k]) => `${k} = ?`).join(', ')} WHERE id = ?`,
    ...entries.map(([, v]) => v as string | number),
    uid,
  );
}

/** Soma XP, atualiza a ofensiva e registra no log diário. */
export async function awardXp(db: SQLiteDatabase, xp: number, source: string): Promise<StreakResult | null> {
  const user = await getUser(db);
  if (!user) return null;
  const today = localDay();
  const streak = registerStudy(
    { streak: user.streak_days, freezes: user.streak_freezes, lastStudyDate: user.last_study_date },
    today,
  );
  await db.runAsync(
    `UPDATE Users SET total_xp = total_xp + ?, streak_days = ?, streak_freezes = ?, last_study_date = ? WHERE id = ?`,
    xp, streak.streak, streak.freezes, today, uid,
  );
  await db.runAsync('INSERT INTO XP_Log (user_id, day, xp, source) VALUES (?, ?, ?, ?)', uid, today, xp, source);
  return streak;
}

export async function xpByDay(db: SQLiteDatabase, days = 7): Promise<{ day: string; xp: number }[]> {
  const out: { day: string; xp: number }[] = [];
  const rows = await db.getAllAsync<{ day: string; xp: number }>(
    'SELECT day, SUM(xp) AS xp FROM XP_Log WHERE user_id = ? GROUP BY day ORDER BY day DESC LIMIT ?',
    uid, days,
  );
  const map = new Map(rows.map((r) => [r.day, r.xp]));
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const key = localDay(d);
    out.push({ day: key, xp: map.get(key) ?? 0 });
  }
  return out;
}

// ---------- Vocabulário e SRS ----------

const VOCAB_WITH_SRS = `
  SELECT v.*, s.interval, s.repetition, s.ease_factor, s.next_review_date
  FROM Vocabulary v
  LEFT JOIN User_SRS_State s ON s.vocab_id = v.id AND s.user_id = ?`;

export function listVocab(db: SQLiteDatabase, language: string, search = '') {
  const q = `%${search.trim().toLowerCase()}%`;
  return db.getAllAsync<VocabWithSRS>(
    `${VOCAB_WITH_SRS} WHERE v.language = ? AND (? = '%%' OR lower(v.word_target) LIKE ? OR lower(v.word_native) LIKE ?)
     ORDER BY v.frequency_rank`,
    uid, language, q, q, q,
  );
}

export function vocabByWords(db: SQLiteDatabase, language: string, words: string[]) {
  if (!words.length) return Promise.resolve([] as VocabWithSRS[]);
  return db.getAllAsync<VocabWithSRS>(
    `${VOCAB_WITH_SRS} WHERE v.language = ? AND v.word_target IN (${words.map(() => '?').join(',')})`,
    uid, language, ...words,
  );
}

export function dueReviews(db: SQLiteDatabase, language: string, limit = 50) {
  return db.getAllAsync<VocabWithSRS>(
    `${VOCAB_WITH_SRS} WHERE v.language = ? AND s.next_review_date IS NOT NULL AND s.next_review_date <= ?
     ORDER BY s.next_review_date LIMIT ?`,
    uid, language, new Date().toISOString(), limit,
  );
}

/** Para o sprint: revisões vencidas primeiro, depois palavras novas por frequência. */
export async function sprintDeck(db: SQLiteDatabase, language: string, size = 20) {
  const due = await dueReviews(db, language, size);
  if (due.length >= size) return due;
  const fresh = await db.getAllAsync<VocabWithSRS>(
    `${VOCAB_WITH_SRS} WHERE v.language = ? AND s.id IS NULL AND v.emoji IS NOT NULL ORDER BY v.frequency_rank LIMIT ?`,
    uid, language, size - due.length,
  );
  return [...due, ...fresh];
}

export async function vocabStats(db: SQLiteDatabase, language: string) {
  const r = await db.getFirstAsync<{ total: number; learned: number; mastered: number; due: number }>(
    `SELECT COUNT(*) AS total,
            SUM(CASE WHEN s.id IS NOT NULL THEN 1 ELSE 0 END) AS learned,
            SUM(CASE WHEN s.repetition >= 3 THEN 1 ELSE 0 END) AS mastered,
            SUM(CASE WHEN s.next_review_date <= ? THEN 1 ELSE 0 END) AS due
     FROM Vocabulary v LEFT JOIN User_SRS_State s ON s.vocab_id = v.id AND s.user_id = ?
     WHERE v.language = ?`,
    new Date().toISOString(), uid, language,
  );
  return { total: r?.total ?? 0, learned: r?.learned ?? 0, mastered: r?.mastered ?? 0, due: r?.due ?? 0 };
}

export function categoryStats(db: SQLiteDatabase, language: string) {
  return db.getAllAsync<{ category: string; total: number; learned: number; mastery: number }>(
    `SELECT v.category AS category, COUNT(*) AS total,
            SUM(CASE WHEN s.id IS NOT NULL THEN 1 ELSE 0 END) AS learned,
            COALESCE(AVG(CASE WHEN s.id IS NOT NULL THEN MIN(s.repetition, 5) / 5.0 END), 0) AS mastery
     FROM Vocabulary v LEFT JOIN User_SRS_State s ON s.vocab_id = v.id AND s.user_id = ?
     WHERE v.language = ? GROUP BY v.category ORDER BY learned DESC, total DESC`,
    uid, language,
  );
}

/** Aplica o SM-2 a uma resposta e grava o novo estado. */
export async function reviewWord(db: SQLiteDatabase, vocabId: string, quality: number): Promise<SRSCard> {
  const row = await db.getFirstAsync<{ interval: number; repetition: number; ease_factor: number; next_review_date: string }>(
    'SELECT interval, repetition, ease_factor, next_review_date FROM User_SRS_State WHERE user_id = ? AND vocab_id = ?',
    uid, vocabId,
  );
  const card: SRSCard = row
    ? { wordId: vocabId, interval: row.interval, repetition: row.repetition, easeFactor: row.ease_factor, nextReviewDate: row.next_review_date }
    : newCard(vocabId);
  const next = calculateNextReview(card, quality);
  await db.runAsync(
    `INSERT INTO User_SRS_State (id, user_id, vocab_id, interval, repetition, ease_factor, next_review_date)
     VALUES (?, ?, ?, ?, ?, ?, ?)
     ON CONFLICT(user_id, vocab_id) DO UPDATE SET interval = excluded.interval, repetition = excluded.repetition,
       ease_factor = excluded.ease_factor, next_review_date = excluded.next_review_date`,
    `${uid}-${vocabId}`, uid, vocabId, next.interval, next.repetition, next.easeFactor, next.nextReviewDate,
  );
  return next;
}

// ---------- Etimologia ----------

export function listEtymology(db: SQLiteDatabase, language: string) {
  return db.getAllAsync<EtymologyTree & { word_target: string; word_native: string; transparent: number; emoji: string | null }>(
    `SELECT e.*, v.word_target, v.word_native, v.emoji FROM Etymology_Trees e
     JOIN Vocabulary v ON v.id = e.vocab_id WHERE v.language = ? ORDER BY e.transparent DESC, v.frequency_rank`,
    language,
  );
}

// ---------- Cultura ----------

export function listCultureNotes(db: SQLiteDatabase, language: string) {
  return db.getAllAsync<CultureHistoryNote & { emoji: string; grammar_examples: string }>(
    'SELECT * FROM Culture_History_Notes WHERE language = ? ORDER BY id',
    language,
  );
}

// ---------- Lições ----------

export async function completedLessons(db: SQLiteDatabase): Promise<Map<string, number>> {
  const rows = await db.getAllAsync<{ lesson_id: string; best_score: number }>(
    'SELECT lesson_id, best_score FROM Lesson_Progress WHERE user_id = ?',
    uid,
  );
  return new Map(rows.map((r) => [r.lesson_id, r.best_score]));
}

export async function completeLesson(db: SQLiteDatabase, lessonId: string, score: number) {
  await db.runAsync(
    `INSERT INTO Lesson_Progress (user_id, lesson_id, completed_at, best_score) VALUES (?, ?, ?, ?)
     ON CONFLICT(user_id, lesson_id) DO UPDATE SET completed_at = excluded.completed_at,
       best_score = MAX(best_score, excluded.best_score), times_completed = times_completed + 1`,
    uid, lessonId, new Date().toISOString(), score,
  );
}

/** Marca lições como feitas sem mexer nas que já tinham nota (teste para pular). */
export async function skipLessons(db: SQLiteDatabase, lessonIds: string[], score: number) {
  const now = new Date().toISOString();
  for (const id of lessonIds)
    await db.runAsync(`INSERT OR IGNORE INTO Lesson_Progress (user_id, lesson_id, completed_at, best_score) VALUES (?, ?, ?, ?)`, uid, id, now, score);
}

// ---------- Comunidade ----------

export function listCommunity(db: SQLiteDatabase, language: string) {
  return db.getAllAsync<CommunityFeedback & { reference: string | null }>(
    'SELECT * FROM Community_Feedback WHERE language = ? ORDER BY is_mine, created_at DESC',
    language,
  );
}

export async function pendingPeerCount(db: SQLiteDatabase, language: string) {
  const r = await db.getFirstAsync<{ n: number }>(
    `SELECT COUNT(*) AS n FROM Community_Feedback WHERE language = ? AND is_mine = 0 AND status = 'aguardando'`,
    language,
  );
  return r?.n ?? 0;
}

export async function submitToCommunity(db: SQLiteDatabase, language: string, lessonId: string | null, prompt: string, content: string) {
  await db.runAsync(
    `INSERT INTO Community_Feedback (id, language, author_name, is_mine, lesson_id, prompt, content, status, created_at)
     VALUES (?, ?, 'Você', 1, ?, ?, ?, 'aguardando', ?)`,
    `mine-${Date.now()}`, language, lessonId, prompt, content, new Date().toISOString(),
  );
}

export async function correctPeer(db: SQLiteDatabase, id: string, correction: string) {
  await db.runAsync(
    `UPDATE Community_Feedback SET correction = ?, corrected_by = 'Você', status = 'corrigido' WHERE id = ?`,
    correction, id,
  );
}

// ---------- Histórias ----------

/** Finais já descobertos por história: { storyId: Set(endingId) } */
export async function storyEndings(db: SQLiteDatabase): Promise<Map<string, Set<string>>> {
  const rows = await db.getAllAsync<{ story_id: string; ending_id: string }>(
    'SELECT story_id, ending_id FROM Story_Progress WHERE user_id = ?',
    uid,
  );
  const out = new Map<string, Set<string>>();
  for (const r of rows) {
    if (!out.has(r.story_id)) out.set(r.story_id, new Set());
    out.get(r.story_id)!.add(r.ending_id);
  }
  return out;
}

/** Registra um final; devolve true se é a primeira vez que o aluno chega nele. */
export async function reachEnding(db: SQLiteDatabase, storyId: string, endingId: string, mistakes: number): Promise<boolean> {
  const r = await db.runAsync(
    `INSERT OR IGNORE INTO Story_Progress (user_id, story_id, ending_id, mistakes, reached_at) VALUES (?, ?, ?, ?, ?)`,
    uid, storyId, endingId, mistakes, new Date().toISOString(),
  );
  return r.changes > 0;
}

// ---------- Diário ----------

export interface JournalEntry {
  id: string;
  created_at: string;
  day: string;
  prompt: string | null;
  raw_user_input: string;
  corrected_input: string | null;
}

export function listJournal(db: SQLiteDatabase, language: string) {
  return db.getAllAsync<JournalEntry>(
    'SELECT id, created_at, day, prompt, raw_user_input, corrected_input FROM User_Journal_Logs WHERE user_id = ? AND language = ? ORDER BY created_at DESC LIMIT 60',
    uid, language,
  );
}

/** Salva a entrada do dia; devolve true se é a primeira de hoje (vale XP). */
export async function saveJournal(db: SQLiteDatabase, language: string, day: string, prompt: string, raw: string, corrected: string): Promise<boolean> {
  const before = await db.getFirstAsync<{ n: number }>('SELECT COUNT(*) AS n FROM User_Journal_Logs WHERE user_id = ? AND language = ? AND day = ?', uid, language, day);
  await db.runAsync(
    `INSERT INTO User_Journal_Logs (id, user_id, language, created_at, day, prompt, raw_user_input, corrected_input, native_phrasing_suggestion)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    `j-${Date.now()}`, uid, language, new Date().toISOString(), day, prompt, raw, corrected, corrected,
  );
  return (before?.n ?? 0) === 0;
}

export async function journalDoneToday(db: SQLiteDatabase, language: string, day: string) {
  const r = await db.getFirstAsync<{ n: number }>('SELECT COUNT(*) AS n FROM User_Journal_Logs WHERE user_id = ? AND language = ? AND day = ?', uid, language, day);
  return (r?.n ?? 0) > 0;
}

// ---------- Palácio da memória ----------

export interface PalaceNoun {
  id: string;
  word_target: string;
  word_native: string;
  emoji: string | null;
  gender: 'm' | 'f' | 'n';
  learned: number;
  mnemonic_prompt: string | null;
}

export function palaceNouns(db: SQLiteDatabase, language: string) {
  return db.getAllAsync<PalaceNoun>(
    `SELECT v.id, v.word_target, v.word_native, v.emoji, v.gender,
            CASE WHEN s.id IS NULL THEN 0 ELSE 1 END AS learned, p.mnemonic_prompt
     FROM Vocabulary v
     LEFT JOIN User_SRS_State s ON s.vocab_id = v.id AND s.user_id = ?
     LEFT JOIN Mnemonic_Palaces p ON p.vocab_id = v.id
     WHERE v.language = ? AND v.gender IS NOT NULL AND v.word_target NOT LIKE '% %'
     ORDER BY learned DESC, v.frequency_rank`,
    uid, language,
  );
}

export async function saveMnemonic(db: SQLiteDatabase, vocabId: string, gender: string, text: string) {
  await db.runAsync(
    `INSERT OR REPLACE INTO Mnemonic_Palaces (id, vocab_id, gender_visual_tag, mnemonic_prompt) VALUES (?, ?, ?, ?)`,
    `mn-${vocabId}`, vocabId, { m: 'masculino_forja', f: 'feminino_lago', n: 'neutro_jardim' }[gender] ?? gender, text,
  );
}

// ---------- Shadowing ----------

export async function saveShadowing(db: SQLiteDatabase, phrase: string, rhythm: number, contourOk: boolean | null) {
  await db.runAsync(
    'INSERT INTO Shadowing_Attempts (user_id, phrase, rhythm_score, contour_ok, created_at) VALUES (?, ?, ?, ?, ?)',
    uid, phrase, rhythm, contourOk === null ? null : contourOk ? 1 : 0, new Date().toISOString(),
  );
}

// ---------- Preferências (Meta) ----------

export async function getMeta(db: SQLiteDatabase, key: string): Promise<string | null> {
  const r = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', key);
  return r?.value ?? null;
}

export async function setMeta(db: SQLiteDatabase, key: string, value: string) {
  await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', key, value);
}

// ---------- Reset (perfil) ----------

export async function resetProgress(db: SQLiteDatabase) {
  await db.execAsync(`
    DELETE FROM User_SRS_State; DELETE FROM Lesson_Progress; DELETE FROM XP_Log; DELETE FROM Story_Progress; DELETE FROM User_Journal_Logs; DELETE FROM Mnemonic_Palaces; DELETE FROM Shadowing_Attempts;
    DELETE FROM Community_Feedback WHERE is_mine = 1;
    UPDATE Community_Feedback SET correction = NULL, corrected_by = NULL, status = 'aguardando';
    UPDATE Users SET streak_days = 0, total_xp = 0, last_study_date = NULL, streak_freezes = 1;
  `);
}
