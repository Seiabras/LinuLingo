import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { normalize, shuffle } from './answers';

/**
 * Caderno de erros: cada item errado em qualquer treino fica guardado (com a última resposta errada
 * e quantas vezes). Na revisão do caderno, acertar RESOLVE_STREAK vezes seguidas tira o item de lá.
 */

export type MistakeSource =
  | 'licao'
  | 'imersao'
  | 'gramatica'
  | 'escuta'
  | 'ditado'
  | 'pares'
  | 'falsos-amigos'
  | 'alfabeto'
  | 'palacio'
  | 'sotaque'
  | 'bichos'
  | 'revisao';

export const SOURCES: Record<MistakeSource, { emoji: string; name: string }> = {
  licao: { emoji: '⭐', name: 'Lições' },
  imersao: { emoji: '🖼️', name: 'Imagem e som' },
  gramatica: { emoji: '📐', name: 'Gramática' },
  escuta: { emoji: '🎧', name: 'Escuta' },
  ditado: { emoji: '✍️', name: 'Ditado' },
  pares: { emoji: '👂', name: 'Pares mínimos' },
  'falsos-amigos': { emoji: '🪤', name: 'Falsos amigos' },
  alfabeto: { emoji: '🔤', name: 'Alfabeto' },
  palacio: { emoji: '🏛️', name: 'Palácio (gêneros)' },
  sotaque: { emoji: '🗣️', name: 'Sotaques' },
  bichos: { emoji: '🐶', name: 'Sons dos bichos' },
  revisao: { emoji: '🗂️', name: 'Revisão de palavras' },
};

export const RESOLVE_STREAK = 2;

export interface MistakeInput {
  language: string;
  source: MistakeSource;
  /** o que identifica o item dentro do treino (a palavra, o id da pergunta…) */
  key: string;
  /** a pergunta como apareceu */
  prompt: string;
  expected: string;
  /** a resposta errada */
  given?: string | null;
  /** explicação curta (sentido, regra) */
  note?: string | null;
  /** texto no idioma para ouvir (se a pergunta era de ouvido, a revisão toca e não mostra) */
  speak?: string | null;
  /** as opções, quando era de escolher */
  options?: string[] | null;
  /** a pergunta era de ouvir (escuta, pares): a revisão toca o som em vez de mostrar */
  byEar?: boolean;
}

export interface Mistake {
  id: string;
  language: string;
  source: MistakeSource;
  prompt: string;
  expected: string;
  given: string | null;
  note: string | null;
  speak: string | null;
  options: string | null;
  misses: number;
  streak: number;
  first_at: string;
  last_at: string;
  resolved_at: string | null;
}

/** Guarda (ou atualiza) um erro. Um item que volta a ser errado sai de «aprendidos». */
export async function logMistake(db: SQLiteDatabase, m: MistakeInput, now = new Date()): Promise<void> {
  const at = now.toISOString();
  const id = `${m.language}:${m.source}:${m.key}`;
  const prompt = m.byEar ? `🔊 ${m.prompt}` : m.prompt;
  await db.runAsync(
    `INSERT INTO Mistake_Log (id, user_id, language, source, prompt, expected, given, note, speak, options, misses, streak, first_at, last_at, resolved_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 0, ?, ?, NULL)
     ON CONFLICT(id) DO UPDATE SET misses = misses + 1, streak = 0, resolved_at = NULL, last_at = excluded.last_at,
       prompt = excluded.prompt, expected = excluded.expected, given = excluded.given, note = excluded.note,
       speak = excluded.speak, options = excluded.options`,
    [id, LOCAL_USER_ID, m.language, m.source, prompt, m.expected, m.given ?? null, m.note ?? null, m.speak ?? null, m.options ? JSON.stringify(m.options) : null, at, at],
  );
}

/** Todos os erros do idioma: os abertos primeiro (os mais errados no topo), depois os aprendidos. */
export function listMistakes(db: SQLiteDatabase, language: string): Promise<Mistake[]> {
  return db.getAllAsync<Mistake>(
    `SELECT id, language, source, prompt, expected, given, note, speak, options, misses, streak, first_at, last_at, resolved_at
     FROM Mistake_Log WHERE user_id = ? AND language = ?
     ORDER BY resolved_at IS NOT NULL, misses DESC, last_at DESC`,
    [LOCAL_USER_ID, language],
  );
}

export async function openMistakeCount(db: SQLiteDatabase, language: string): Promise<number> {
  const r = await db.getFirstAsync<{ n: number }>(`SELECT COUNT(*) AS n FROM Mistake_Log WHERE user_id = ? AND language = ? AND resolved_at IS NULL`, [LOCAL_USER_ID, language]);
  return r?.n ?? 0;
}

export interface MistakeQuestion {
  m: Mistake;
  /** a resposta certa e as parecidas; vazio: a pessoa mesma diz se lembrou */
  options: string[];
  /** a pergunta era de ouvir: toca o som e não mostra a palavra */
  byEar: boolean;
}

/**
 * Uma rodada do caderno: os mais errados e os que estão perto de sair (1 acerto seguido) primeiro.
 * As opções são as da pergunta original ou a certa, a errada que você deu e as certas de outros
 * erros do mesmo treino.
 */
export function buildMistakeRound(list: Mistake[], size = 10, rnd: () => number = Math.random): MistakeQuestion[] {
  const open = list.filter((m) => !m.resolved_at);
  const ranked = shuffle(open, rnd).sort((a, b) => b.streak - a.streak || b.misses - a.misses);
  return ranked.slice(0, size).map((m) => {
    const byEar = m.prompt.startsWith('🔊');
    let options: string[] = [];
    if (m.options) {
      try {
        options = JSON.parse(m.options) as string[];
      } catch {}
    }
    if (options.length < 2) {
      const pool = [m.given, ...shuffle(open.filter((o) => o.source === m.source && o.id !== m.id).map((o) => o.expected), rnd)];
      options = [m.expected];
      for (const o of pool) {
        if (options.length >= 4) break;
        if (o && !options.some((x) => normalize(x) === normalize(o))) options.push(o);
      }
    }
    if (!options.includes(m.expected)) options = [m.expected, ...options.slice(0, 3)];
    return { m, options: options.length >= 2 ? shuffle(options, rnd) : [], byEar };
  });
}

/** Resultado de uma revisão: acertou (e se saiu do caderno) ou errou de novo. */
export async function reviewMistake(db: SQLiteDatabase, m: Mistake, ok: boolean, now = new Date()): Promise<'aprendido' | 'certo' | 'errado'> {
  const at = now.toISOString();
  if (!ok) {
    await db.runAsync(`UPDATE Mistake_Log SET misses = misses + 1, streak = 0, last_at = ? WHERE id = ?`, [at, m.id]);
    return 'errado';
  }
  const streak = m.streak + 1;
  const done = streak >= RESOLVE_STREAK;
  await db.runAsync(`UPDATE Mistake_Log SET streak = ?, resolved_at = ? WHERE id = ?`, [streak, done ? at : null, m.id]);
  return done ? 'aprendido' : 'certo';
}

/** Apaga os aprendidos do idioma (a lista fica só com o que falta). */
export async function clearLearned(db: SQLiteDatabase, language: string): Promise<void> {
  await db.runAsync(`DELETE FROM Mistake_Log WHERE user_id = ? AND language = ? AND resolved_at IS NOT NULL`, [LOCAL_USER_ID, language]);
}
