import type { SQLiteBindValue, SQLiteDatabase } from 'expo-sqlite';
import { ensurePack, insertMany } from '@/database/db';
import { COLUNAS_COM_CODIGO, GUARANI_ANTIGO_RENOMEADO, renomearCodigos } from '@/database/codigos-renomeados';
import { LOCAL_USER_ID } from '@/database/schema';
import { isAvailable } from '@/data/idiomas';
import { IDIOMAS_METADADOS } from '@/data/idiomas-metadados';

/**
 * Cópia do progresso num arquivo JSON: tudo o que é do aluno (XP, ofensiva, lições, revisões,
 * histórias, diário, shadowing, textos da comunidade, preferências), sem o conteúdo dos idiomas,
 * que o app já traz. Serve para trocar de aparelho ou não perder o progresso ao limpar o navegador.
 */

export const BACKUP_APP = 'LinuLingo';
/** 2: o guarani antigo trocou de código (gnw → oldp1258); as cópias de formato 1 são renomeadas ao ler. */
export const BACKUP_FORMAT = 2;

/** Trocas de código de idioma a aplicar numa cópia mais antiga do que elas, por formato. */
const RENOMEACOES: { antesDoFormato: number; mapa: Readonly<Record<string, string>> }[] = [
  { antesDoFormato: 2, mapa: GUARANI_ANTIGO_RENOMEADO },
];

/** Tabelas com dados do aluno e as colunas de cada uma: só estas são lidas do arquivo. */
export const USER_TABLES = {
  Users: ['id', 'name', 'current_language', 'cefr_level', 'streak_days', 'total_xp', 'last_study_date', 'streak_freezes', 'daily_goal_xp'],
  User_SRS_State: ['id', 'user_id', 'vocab_id', 'interval', 'repetition', 'ease_factor', 'next_review_date'],
  Lesson_Progress: ['user_id', 'lesson_id', 'completed_at', 'best_score', 'times_completed'],
  XP_Log: ['id', 'user_id', 'day', 'xp', 'source'],
  Story_Progress: ['user_id', 'story_id', 'ending_id', 'mistakes', 'reached_at'],
  User_Journal_Logs: ['id', 'user_id', 'language', 'created_at', 'day', 'prompt', 'raw_user_input', 'corrected_input', 'native_phrasing_suggestion', 'audio_recording_path'],
  Mnemonic_Palaces: ['id', 'vocab_id', 'gender_visual_tag', 'mnemonic_prompt', 'custom_image_url'],
  Shadowing_Attempts: ['id', 'user_id', 'phrase', 'rhythm_score', 'contour_ok', 'created_at'],
  Community_Feedback: ['id', 'language', 'author_name', 'is_mine', 'lesson_id', 'prompt', 'content', 'reference', 'correction', 'corrected_by', 'status', 'created_at', 'kind', 'audio', 'reaction', 'reply_reaction', 'reply_suggestion', 'reply_from', 'reply_at'],
  Mistake_Log: ['id', 'user_id', 'language', 'source', 'prompt', 'expected', 'given', 'note', 'speak', 'options', 'misses', 'streak', 'first_at', 'last_at', 'resolved_at'],
  Meta: ['key', 'value'],
} as const;
export type UserTable = keyof typeof USER_TABLES;
const TABLES = Object.keys(USER_TABLES) as UserTable[];

/** Linhas que não são do aluno: a versão do conteúdo gravado (content_<idioma>) é deste aparelho. */
const WHERE: Partial<Record<UserTable, string>> = {
  Meta: `key NOT LIKE 'content\\_%' ESCAPE '\\'`,
  // dos textos de outros alunos, só os que o aluno corrigiu
  Community_Feedback: `is_mine = 1 OR correction IS NOT NULL OR status <> 'aguardando'`,
};

type Value = string | number | null;
export interface Backup {
  app: typeof BACKUP_APP;
  format: number;
  exported_at: string;
  /** idiomas com progresso: o conteúdo deles é gravado antes de restaurar */
  languages: string[];
  tables: Partial<Record<UserTable, { columns: string[]; rows: Value[][] }>>;
}

export class BackupError extends Error {}

export async function exportProgress(db: SQLiteDatabase, now = new Date()): Promise<Backup> {
  const tables: Backup['tables'] = {};
  for (const t of TABLES) {
    const columns = [...USER_TABLES[t]];
    const rows = await db.getAllAsync<Record<string, Value>>(`SELECT ${columns.join(', ')} FROM ${t}${WHERE[t] ? ` WHERE ${WHERE[t]}` : ''}`);
    tables[t] = { columns, rows: rows.map((r) => columns.map((c) => r[c] ?? null)) };
  }
  const langs = await db.getAllAsync<{ language: string }>(
    `SELECT DISTINCT language FROM Vocabulary WHERE id IN (SELECT vocab_id FROM User_SRS_State UNION SELECT vocab_id FROM Mnemonic_Palaces)
     UNION SELECT current_language FROM Users
     UNION SELECT language FROM User_Journal_Logs
     UNION SELECT language FROM Mistake_Log
     UNION SELECT language FROM Community_Feedback WHERE is_mine = 1 OR correction IS NOT NULL`,
  );
  return { app: BACKUP_APP, format: BACKUP_FORMAT, exported_at: now.toISOString(), languages: langs.map((l) => l.language).sort(), tables };
}

const isValue = (v: unknown): v is Value => v === null || typeof v === 'string' || (typeof v === 'number' && Number.isFinite(v));

/** Lê e confere o arquivo. Colunas e tabelas desconhecidas são ignoradas; o resto precisa estar certo. */
export function parseBackup(text: string): Backup {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new BackupError('Este arquivo não é uma cópia do LinuLingo (não é um JSON).');
  }
  const d = data as Partial<Backup> | null;
  if (!d || typeof d !== 'object' || d.app !== BACKUP_APP) throw new BackupError('Este arquivo não é uma cópia do progresso do LinuLingo.');
  if (typeof d.format !== 'number' || d.format > BACKUP_FORMAT)
    throw new BackupError('A cópia foi feita numa versão mais nova do app. Atualize o LinuLingo e tente de novo.');
  if (!d.tables || typeof d.tables !== 'object') throw new BackupError('A cópia está incompleta (sem as tabelas).');
  const tables: Backup['tables'] = {};
  for (const t of TABLES) {
    const raw = (d.tables as Record<string, unknown>)[t] as { columns?: unknown; rows?: unknown } | undefined;
    if (raw === undefined) continue;
    if (!raw || !Array.isArray(raw.columns) || !Array.isArray(raw.rows)) throw new BackupError(`A cópia está estragada (tabela ${t}).`);
    const cols = raw.columns as unknown[];
    const keep = cols.map((c, i) => [c, i] as const).filter(([c]) => (USER_TABLES[t] as readonly unknown[]).includes(c));
    const rows: Value[][] = [];
    for (const row of raw.rows) {
      if (!Array.isArray(row) || row.length !== cols.length || !row.every(isValue)) throw new BackupError(`A cópia está estragada (tabela ${t}).`);
      rows.push(keep.map(([, i]) => row[i] as Value));
    }
    tables[t] = { columns: keep.map(([c]) => c as string), rows };
  }
  let languages = Array.isArray(d.languages) ? d.languages.filter((l): l is string => typeof l === 'string') : [];
  // cópia feita antes de um idioma trocar de código: o progresso dele passa para o código novo
  for (const { antesDoFormato, mapa } of RENOMEACOES) {
    if (d.format >= antesDoFormato) continue;
    languages = languages.map((l) => renomearCodigos(l, mapa));
    for (const t of TABLES) {
      const data = tables[t];
      const cols = new Set(COLUNAS_COM_CODIGO[t] ?? []);
      if (!data || !cols.size) continue;
      const idx = data.columns.flatMap((c, i) => (cols.has(c) ? [i] : []));
      data.rows = data.rows.map((r) => r.map((v, i) => (typeof v === 'string' && idx.includes(i) ? renomearCodigos(v, mapa) : v)));
    }
  }
  return { app: BACKUP_APP, format: BACKUP_FORMAT, exported_at: typeof d.exported_at === 'string' ? d.exported_at : '', languages, tables };
}

/** O que a cópia traz, para a pessoa conferir antes de restaurar. */
export function summarize(b: Backup) {
  const t = b.tables;
  const col = (table: UserTable, name: string) => t[table]?.columns.indexOf(name) ?? -1;
  const user = t.Users?.rows[0];
  const pick = (name: string) => (user && col('Users', name) >= 0 ? user[col('Users', name)] : null);
  return {
    name: (pick('name') as string | null) ?? 'Aluno',
    xp: Number(pick('total_xp') ?? 0),
    streak: Number(pick('streak_days') ?? 0),
    lessons: t.Lesson_Progress?.rows.length ?? 0,
    words: t.User_SRS_State?.rows.length ?? 0,
    journal: t.User_Journal_Logs?.rows.length ?? 0,
    languages: b.languages.filter((l) => isAvailable(l)).map((l) => IDIOMAS_METADADOS[l].name),
    exportedAt: b.exported_at,
  };
}

/**
 * Troca o progresso deste aparelho pelo da cópia (numa transação: ou entra tudo, ou nada muda).
 * Revisões de palavras que não existem mais no app são deixadas de fora; devolve quantas.
 */
export async function importProgress(db: SQLiteDatabase, b: Backup): Promise<{ skipped: number }> {
  // o conteúdo dos idiomas precisa estar no banco: as revisões apontam para as palavras
  for (const l of b.languages) if (isAvailable(l)) await ensurePack(db, l);
  const vocab = new Set((await db.getAllAsync<{ id: string }>('SELECT id FROM Vocabulary')).map((r) => r.id));
  let skipped = 0;

  await db.withTransactionAsync(async () => {
    await db.execAsync(`
      DELETE FROM User_SRS_State; DELETE FROM Lesson_Progress; DELETE FROM XP_Log; DELETE FROM Story_Progress;
      DELETE FROM User_Journal_Logs; DELETE FROM Mnemonic_Palaces; DELETE FROM Shadowing_Attempts; DELETE FROM Mistake_Log;
      DELETE FROM Community_Feedback WHERE is_mine = 1;
      UPDATE Community_Feedback SET correction = NULL, corrected_by = NULL, status = 'aguardando';
      DELETE FROM Meta WHERE ${WHERE.Meta};
    `);
    for (const t of TABLES) {
      const data = b.tables[t];
      if (!data || !data.rows.length) continue;
      const cols = data.columns;
      // tudo pertence ao aluno deste aparelho
      const uid = cols.indexOf('user_id');
      let rows = uid < 0 ? data.rows : data.rows.map((r) => r.map((v, i) => (i === uid ? LOCAL_USER_ID : v)));
      if (t === 'Users') {
        const row = rows[0];
        if (!row) continue;
        const set = cols.map((c, i) => [c, row[i]] as const).filter(([c, v]) => c !== 'id' && !(c === 'current_language' && !isAvailable(v as string)));
        if (set.length) await db.runAsync(`UPDATE Users SET ${set.map(([c]) => `${c} = ?`).join(', ')} WHERE id = ?`, [...set.map(([, v]) => v), LOCAL_USER_ID]);
        continue;
      }
      if (t === 'Meta') rows = rows.filter((r) => !String(r[cols.indexOf('key')]).startsWith('content_'));
      const vid = cols.indexOf('vocab_id');
      if (vid >= 0) {
        const before = rows.length;
        rows = rows.filter((r) => vocab.has(String(r[vid])));
        skipped += before - rows.length;
      }
      await insertMany(db, `INSERT OR REPLACE INTO ${t} (${cols.join(', ')})`, cols.length, rows as SQLiteBindValue[][]);
    }
  });
  return { skipped };
}

/** Nome do arquivo: linulingo-progresso-2026-09-27.json */
export function backupFileName(now = new Date()): string {
  const p = (n: number) => String(n).padStart(2, '0');
  return `linulingo-progresso-${now.getFullYear()}-${p(now.getMonth() + 1)}-${p(now.getDate())}.json`;
}
