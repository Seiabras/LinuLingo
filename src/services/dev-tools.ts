import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { skipLessons } from '@/database/queries';
import type { LanguagePack } from '@/data/types';
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

/** Lições (e travessias, que são as provas de unidade) de um idioma, todas marcadas como feitas — pra testar a trilha inteira sem jogar. Não mexe nas que já tinham nota. */
export async function unlockAllLessons(db: SQLiteDatabase, pack: LanguagePack): Promise<number> {
  const ids = pack.units.flatMap((u) => u.lessons.map((l) => l.id));
  await skipLessons(db, ids, 1);
  return ids.length;
}

export interface ContentCount {
  idiomas: number;
  unidades: number;
  licoes: number;
  palavras: number;
  historias: number;
  gramatica: number;
}

/** Quanto conteúdo um conjunto de pacotes tem (o app inteiro ou um idioma só). */
export function contentCount(packs: LanguagePack[]): ContentCount {
  const c: ContentCount = { idiomas: packs.length, unidades: 0, licoes: 0, palavras: 0, historias: 0, gramatica: 0 };
  for (const p of packs) {
    c.unidades += p.units.length;
    c.licoes += p.units.reduce((s, u) => s + u.lessons.length, 0);
    c.palavras += p.vocab.length;
    c.historias += p.stories.length;
    c.gramatica += p.grammar.length;
  }
  return c;
}

/**
 * De qual commit veio esta versão e quando foi montada: o workflow do GitHub Pages passa
 * `EXPO_PUBLIC_COMMIT` e `EXPO_PUBLIC_BUILD_TIME` pro `expo export`, que grava os valores no código.
 * No servidor de desenvolvimento os dois ficam vazios.
 */
export function buildInfo(): { commit: string | null; builtAt: string | null } {
  return { commit: process.env.EXPO_PUBLIC_COMMIT || null, builtAt: process.env.EXPO_PUBLIC_BUILD_TIME || null };
}
