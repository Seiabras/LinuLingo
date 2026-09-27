import { DatabaseSync } from 'node:sqlite';
import type { SQLiteDatabase } from 'expo-sqlite';

// Só para os testes (node): o app nunca importa este arquivo.

/** SQLite de verdade (o do Node) com a mesma interface assíncrona do expo-sqlite. */
export function memoryDb(): SQLiteDatabase {
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
