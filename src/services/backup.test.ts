import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import type { SQLiteDatabase } from 'expo-sqlite';
import { initDatabase } from '@/database/db';
import { awardXp, completeLesson, getMeta, getUser, reviewWord, setMeta } from '@/database/queries';
import { BackupError, backupFileName, exportProgress, importProgress, parseBackup, summarize } from './backup';

/** SQLite de verdade (o do Node) com a mesma interface assíncrona do expo-sqlite. */
function memoryDb(): SQLiteDatabase {
  const d = new DatabaseSync(':memory:');
  const args = (p: unknown[]) => (p.length === 1 && Array.isArray(p[0]) ? p[0] : p) as never[];
  return {
    execAsync: async (sql: string) => d.exec(sql),
    runAsync: async (sql: string, ...p: unknown[]) => {
      const r = d.prepare(sql).run(...args(p));
      return { lastInsertRowId: Number(r.lastInsertRowid), changes: Number(r.changes) };
    },
    getAllAsync: async (sql: string, ...p: unknown[]) => d.prepare(sql).all(...args(p)),
    getFirstAsync: async (sql: string, ...p: unknown[]) => d.prepare(sql).get(...args(p)) ?? null,
    withTransactionAsync: async (fn: () => Promise<void>) => {
      d.exec('BEGIN');
      try {
        await fn();
        d.exec('COMMIT');
      } catch (e) {
        d.exec('ROLLBACK');
        throw e;
      }
    },
  } as unknown as SQLiteDatabase;
}

async function studied() {
  const db = memoryDb();
  await initDatabase(db);
  await awardXp(db, 25, 'licao');
  await completeLesson(db, 'ro-a1-1-l1', 0.9);
  const words = await db.getAllAsync<{ id: string }>(`SELECT id FROM Vocabulary WHERE language = 'ro' ORDER BY frequency_rank LIMIT 3`);
  for (const w of words) await reviewWord(db, w.id, 5);
  await setMeta(db, 'tutorial_visto', '1');
  await setMeta(db, 'theme', 'dark');
  await db.runAsync(`UPDATE Users SET name = 'Ana' WHERE id = 'local'`);
  return { db, words: words.map((w) => w.id) };
}

test('a cópia leva o progresso e as preferências, sem o conteúdo dos idiomas', async () => {
  const { db } = await studied();
  const b = await exportProgress(db);
  assert.equal(b.app, 'LinuLingo');
  assert.deepEqual(b.languages, ['ro']);
  assert.equal(b.tables.User_SRS_State?.rows.length, 3);
  assert.equal(b.tables.Lesson_Progress?.rows.length, 1);
  const keys = b.tables.Meta!.rows.map((r) => r[0]);
  assert.ok(keys.includes('tutorial_visto') && keys.includes('theme'));
  assert.ok(!keys.some((k) => String(k).startsWith('content_')), 'a versão do conteúdo é do aparelho, não do aluno');
  assert.equal(b.tables.Community_Feedback?.rows.length, 0, 'textos de outros alunos sem correção ficam de fora');
  const s = summarize(parseBackup(JSON.stringify(b)));
  assert.equal(s.name, 'Ana');
  assert.equal(s.lessons, 1);
  assert.equal(s.words, 3);
  assert.deepEqual(s.languages, ['Romeno']);
});

test('restaurar num aparelho novo devolve tudo, e o conteúdo é gravado lá', async () => {
  const { db, words } = await studied();
  const text = JSON.stringify(await exportProgress(db));
  const other = memoryDb();
  await initDatabase(other);
  await awardXp(other, 5, 'licao'); // progresso que a cópia substitui
  const { skipped } = await importProgress(other, parseBackup(text));
  assert.equal(skipped, 0);
  const u = await getUser(other);
  const orig = await getUser(db);
  assert.equal(u?.name, 'Ana');
  assert.equal(u?.total_xp, orig?.total_xp);
  assert.equal(u?.streak_days, orig?.streak_days);
  const srs = await other.getAllAsync<{ vocab_id: string }>('SELECT vocab_id FROM User_SRS_State ORDER BY vocab_id');
  assert.deepEqual(srs.map((r) => r.vocab_id), [...words].sort());
  assert.equal((await other.getAllAsync('SELECT * FROM XP_Log')).length, (await db.getAllAsync('SELECT * FROM XP_Log')).length);
  assert.equal(await getMeta(other, 'theme'), 'dark');
  assert.ok(await getMeta(other, 'content_ro'), 'o conteúdo do romeno continua marcado como gravado');
  // e a cópia da cópia é igual à original (tirando a data)
  const again = await exportProgress(other);
  const first = JSON.parse(text);
  assert.deepEqual({ ...again, exported_at: '' }, { ...first, exported_at: '' });
});

test('revisões de palavras que o app não tem mais ficam de fora, sem estragar o resto', async () => {
  const { db } = await studied();
  const b = await exportProgress(db);
  b.tables.User_SRS_State!.rows[0][2] = 'ro-palavra-que-nao-existe';
  const other = memoryDb();
  await initDatabase(other);
  const { skipped } = await importProgress(other, parseBackup(JSON.stringify(b)));
  assert.equal(skipped, 1);
  assert.equal((await other.getAllAsync('SELECT * FROM User_SRS_State')).length, 2);
  assert.equal((await other.getAllAsync('SELECT * FROM Lesson_Progress')).length, 1);
});

test('arquivos errados ou estragados são recusados com uma explicação', () => {
  assert.throws(() => parseBackup('isto não é json'), BackupError);
  assert.throws(() => parseBackup(JSON.stringify({ app: 'OutroApp', format: 1, tables: {} })), /não é uma cópia/);
  assert.throws(() => parseBackup(JSON.stringify({ app: 'LinuLingo', format: 99, tables: {} })), /versão mais nova/);
  assert.throws(() => parseBackup(JSON.stringify({ app: 'LinuLingo', format: 1, tables: { XP_Log: { columns: ['id'], rows: [[1, 2]] } } })), /estragada/);
  assert.throws(() => parseBackup(JSON.stringify({ app: 'LinuLingo', format: 1, tables: { XP_Log: { columns: ['id'], rows: [[{ x: 1 }]] } } })), /estragada/);
});

test('colunas e tabelas desconhecidas são ignoradas (nada de SQL vindo do arquivo)', () => {
  const b = parseBackup(
    JSON.stringify({
      app: 'LinuLingo',
      format: 1,
      languages: ['ro', 7],
      tables: {
        Meta: { columns: ['key', 'value', 'value); DROP TABLE Users; --'], rows: [['theme', 'dark', 'x']] },
        sqlite_master: { columns: ['name'], rows: [['x']] },
      },
    }),
  );
  assert.deepEqual(b.tables.Meta, { columns: ['key', 'value'], rows: [['theme', 'dark']] });
  assert.ok(!('sqlite_master' in b.tables));
  assert.deepEqual(b.languages, ['ro']);
});

test('nome do arquivo com a data', () => {
  assert.equal(backupFileName(new Date(2026, 8, 7)), 'linulingo-progresso-2026-09-07.json');
});
