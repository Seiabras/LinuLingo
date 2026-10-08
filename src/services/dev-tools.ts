import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { USER_TABLES, type UserTable } from './backup';

/**
 * Apaga só o progresso de UM idioma (pra testar do zero sem perder o resto) — diferente do botão
 * «Apagar meu progresso» do Perfil, que apaga tudo. `XP_Log` e `Shadowing_Attempts` não têm coluna
 * de idioma no banco, então ficam de fora (o XP total e as tentativas de shadowing continuam).
 */
export async function resetLanguageProgress(db: SQLiteDatabase, code: string): Promise<void> {
  await db.withTransactionAsync(async () => {
    await db.runAsync(`DELETE FROM User_SRS_State WHERE user_id = ? AND vocab_id IN (SELECT id FROM Vocabulary WHERE language = ?)`, [LOCAL_USER_ID, code]);
    await db.runAsync(`DELETE FROM Lesson_Progress WHERE user_id = ? AND lesson_id LIKE ?`, [LOCAL_USER_ID, `${code}-%`]);
    await db.runAsync(`DELETE FROM Story_Progress WHERE user_id = ? AND story_id IN (SELECT id FROM Interactive_Stories WHERE language = ?)`, [LOCAL_USER_ID, code]);
    await db.runAsync(`DELETE FROM User_Journal_Logs WHERE user_id = ? AND language = ?`, [LOCAL_USER_ID, code]);
    await db.runAsync(`DELETE FROM Mistake_Log WHERE user_id = ? AND language = ?`, [LOCAL_USER_ID, code]);
    await db.runAsync(`DELETE FROM Community_Feedback WHERE is_mine = 1 AND language = ?`, [code]);
    await db.runAsync(`DELETE FROM Mnemonic_Palaces WHERE vocab_id IN (SELECT id FROM Vocabulary WHERE language = ?)`, [code]);
  });
}

/** Quantas linhas cada tabela do aluno tem agora — pra conferir o estado bruto do banco sem abrir o devtools do navegador. */
export async function tableCounts(db: SQLiteDatabase): Promise<{ table: UserTable; rows: number }[]> {
  const tables = Object.keys(USER_TABLES) as UserTable[];
  const out: { table: UserTable; rows: number }[] = [];
  for (const t of tables) {
    const r = await db.getFirstAsync<{ n: number }>(`SELECT COUNT(*) as n FROM ${t}`);
    out.push({ table: t, rows: r?.n ?? 0 });
  }
  return out;
}
