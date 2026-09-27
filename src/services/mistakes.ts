import type { SQLiteDatabase } from 'expo-sqlite';
import { LOCAL_USER_ID } from '@/database/schema';
import { normalize, shuffle } from './answers';

/**
 * Caderno de erros: cada item errado em qualquer treino fica guardado (com a última resposta errada
 * e quantas vezes). Na revisão do caderno, acertar RESOLVE_STREAK vezes seguidas tira o item de lá.
 *
 * Ligado ao SRS: quando o erro é sobre uma palavra do vocabulário, o fator de facilidade (SM-2) dela
 * cai e ela volta para a revisão já no dia seguinte, na frente das outras no sprint de 5 minutos.
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
  | 'mapa'
  | 'sons'
  | 'diario'
  | 'shadowing'
  | 'irmas'
  | 'leitura'
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
  mapa: { emoji: '🗺️', name: 'Jogo do mapa' },
  sons: { emoji: '🔊', name: 'Adivinhe o som' },
  diario: { emoji: '📓', name: 'Diário' },
  shadowing: { emoji: '🎙️', name: 'Shadowing' },
  irmas: { emoji: '🌳', name: 'Palavras irmãs' },
  leitura: { emoji: '📰', name: 'Artigos' },
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
  /** a palavra do vocabulário (no idioma) a que o erro se refere, para o SRS; sem ela, tenta «speak» e «key» */
  word?: string | null;
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

/** Quanto o fator de facilidade (SM-2) de uma palavra cai a cada erro (o SM-2 não deixa passar de 1,3). */
export const MISTAKE_EASE_PENALTY = 0.2;
const MIN_EASE = 1.3;

/** A revisão do sprint já aplica o SM-2 ao erro: não precisa de penalidade a mais. */
const SRS_SELF_PENALIZED = new Set<MistakeSource>(['revisao']);

const bare = (w: string) => w.normalize('NFC').toLowerCase().replace(/\u0301/g, '').replace(/ё/g, 'е').replace(/[.!?¿¡,;:«»"]/g, '').trim();

/** Índice palavra → id do vocabulário, por banco e idioma (o vocabulário não muda durante o uso). */
const vocabIndex = new WeakMap<SQLiteDatabase, Map<string, Promise<Map<string, string>>>>();
function vocabIdsOf(db: SQLiteDatabase, language: string): Promise<Map<string, string>> {
  let byLang = vocabIndex.get(db);
  if (!byLang) vocabIndex.set(db, (byLang = new Map()));
  let p = byLang.get(language);
  if (!p) {
    p = db.getAllAsync<{ id: string; word_target: string }>('SELECT id, word_target FROM Vocabulary WHERE language = ?', [language]).then((rows) => {
      const m = new Map<string, string>();
      for (const r of rows) {
        const k = bare(r.word_target);
        if (!m.has(k)) m.set(k, r.id);
        // romeno: «a vorbi» também é achado como «vorbi»
        if (language === 'ro') {
          const noA = k.replace(/^a (se |-și )?/, '');
          if (!m.has(noA)) m.set(noA, r.id);
        }
      }
      return m;
    });
    // o vocabulário pode ainda não ter sido semeado: tenta de novo na próxima vez
    p.then((m) => m.size === 0 && byLang!.delete(language));
    byLang.set(language, p);
  }
  return p;
}

/** A palavra do vocabulário a que o erro se refere (a indicada, o texto falado ou a chave). */
export async function vocabIdForMistake(db: SQLiteDatabase, m: Pick<MistakeInput, 'language' | 'word' | 'speak' | 'key'>): Promise<string | null> {
  const ids = await vocabIdsOf(db, m.language);
  for (const c of [m.word, m.speak, m.key]) {
    if (!c) continue;
    const id = ids.get(bare(c));
    if (id) return id;
  }
  return null;
}

/** Meia-noite do dia seguinte (hora local), em ISO: a revisão fica para amanhã logo cedo. */
export function tomorrowStart(now = new Date()): string {
  const d = new Date(now);
  d.setHours(24, 0, 0, 0);
  return d.toISOString();
}

/**
 * Penaliza a palavra no SRS: o fator de facilidade cai MISTAKE_EASE_PENALTY, as repetições zeram e a
 * revisão vai para amanhã. Uma palavra errada várias vezes no mesmo dia cai uma vez só.
 */
export async function penalizeWord(db: SQLiteDatabase, vocabId: string, now = new Date()): Promise<void> {
  const next = tomorrowStart(now);
  const row = await db.getFirstAsync<{ ease_factor: number; repetition: number; next_review_date: string }>(
    'SELECT ease_factor, repetition, next_review_date FROM User_SRS_State WHERE user_id = ? AND vocab_id = ?',
    [LOCAL_USER_ID, vocabId],
  );
  if (row && row.repetition === 0 && row.next_review_date === next) return;
  const ease = Math.max(MIN_EASE, Math.round(((row?.ease_factor ?? 2.5) - MISTAKE_EASE_PENALTY) * 100) / 100);
  await db.runAsync(
    `INSERT INTO User_SRS_State (id, user_id, vocab_id, interval, repetition, ease_factor, next_review_date)
     VALUES (?, ?, ?, 1, 0, ?, ?)
     ON CONFLICT(user_id, vocab_id) DO UPDATE SET interval = 1, repetition = 0, ease_factor = excluded.ease_factor, next_review_date = excluded.next_review_date`,
    [`${LOCAL_USER_ID}-${vocabId}`, LOCAL_USER_ID, vocabId, ease, next],
  );
}

/** Guarda (ou atualiza) um erro. Um item que volta a ser errado sai de «aprendidos». */
export async function logMistake(db: SQLiteDatabase, m: MistakeInput, now = new Date()): Promise<void> {
  await saveMistake(db, m, now);
  if (SRS_SELF_PENALIZED.has(m.source)) return;
  const vocabId = await vocabIdForMistake(db, m).catch(() => null);
  if (vocabId) await penalizeWord(db, vocabId, now);
}

async function saveMistake(db: SQLiteDatabase, m: MistakeInput, now: Date): Promise<void> {
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
