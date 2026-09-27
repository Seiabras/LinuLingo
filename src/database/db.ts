import type { SQLiteBindValue, SQLiteDatabase } from 'expo-sqlite';
import { MIGRATIONS, LOCAL_USER_ID } from './schema';
import { PACKS, DEFAULT_LANGUAGE } from '@/data/idiomas';
import type { LanguagePack } from '@/data/types';

export const DB_NAME = 'linulingo.db';

/**
 * Chamado pelo SQLiteProvider antes de renderizar o app. Só grava o conteúdo do idioma que o
 * aluno estuda: os outros entram quando ele trocar de idioma (ensurePack), para a primeira
 * abertura não esperar milhares de palavras de idiomas que ele talvez nunca abra.
 */
export async function initDatabase(db: SQLiteDatabase): Promise<void> {
  await db.execAsync('PRAGMA foreign_keys = ON;');
  const row = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  const current = row?.user_version ?? 0;
  for (let v = current; v < MIGRATIONS.length; v++) {
    await db.execAsync(MIGRATIONS[v]);
    await db.execAsync(`PRAGMA user_version = ${v + 1}`);
  }
  await db.runAsync(
    `INSERT OR IGNORE INTO Users (id, name, current_language) VALUES (?, ?, ?)`,
    LOCAL_USER_ID,
    'Aluno',
    DEFAULT_LANGUAGE,
  );
  const user = await db.getFirstAsync<{ current_language: string }>('SELECT current_language FROM Users WHERE id = ?', LOCAL_USER_ID);
  await ensurePack(db, user && PACKS[user.current_language] ? user.current_language : DEFAULT_LANGUAGE);
}

// por banco: cada banco guarda o seu conteúdo (no app há um só; nos testes, vários)
const seedings = new WeakMap<SQLiteDatabase, Map<string, Promise<void>>>();

/** Grava (uma vez por sessão, e só se o conteúdo mudou) o pacote de um idioma no banco. */
export function ensurePack(db: SQLiteDatabase, code: string): Promise<void> {
  const pack = PACKS[code];
  if (!pack) return Promise.resolve();
  let seeding = seedings.get(db);
  if (!seeding) seedings.set(db, (seeding = new Map()));
  let p = seeding.get(code);
  if (!p) {
    p = seedPack(db, pack);
    seeding.set(code, p);
    p.catch(() => seeding.delete(code));
  }
  return p;
}

/** Insere muitas linhas com poucos comandos: no navegador, cada comando é uma ida e volta ao SQLite. */
export async function insertMany(db: SQLiteDatabase, head: string, cols: number, rows: SQLiteBindValue[][], tail = ''): Promise<void> {
  // até ~900 parâmetros por comando (o limite antigo do SQLite é 999)
  const per = Math.max(1, Math.floor(900 / cols));
  const one = `(${Array(cols).fill('?').join(', ')})`;
  for (let i = 0; i < rows.length; i += per) {
    const chunk = rows.slice(i, i + per);
    await db.runAsync(`${head} VALUES ${chunk.map(() => one).join(', ')} ${tail}`, chunk.flat());
  }
}

/** Assinatura barata do conteúdo, para só regravar quando o pacote mudar. */
function contentVersion(pack: LanguagePack): string {
  const s = JSON.stringify([pack.vocab, pack.units, pack.etymology, pack.community, pack.stories]);
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return `${s.length}:${h}`;
}

async function seedPack(db: SQLiteDatabase, pack: LanguagePack): Promise<void> {
  const key = `content_${pack.code}`;
  const version = contentVersion(pack);
  const meta = await db.getFirstAsync<{ value: string }>('SELECT value FROM Meta WHERE key = ?', key);
  if (meta?.value === version) return;

  const etymByWord = new Map(pack.etymology.map((e) => [e.word, e]));

  await db.withTransactionAsync(async () => {
    await insertMany(
      db,
      'INSERT INTO Vocabulary (id, language, word_target, word_native, frequency_rank, part_of_speech, category, emoji, example_sentence, gender, etymology_note)',
      11,
      pack.vocab.map((v) => {
        const e = etymByWord.get(v.word_target);
        return [v.id, v.language, v.word_target, v.word_native, v.frequency_rank, v.part_of_speech, v.category, v.emoji, v.example_sentence, v.gender, e ? `${e.origin_language}: ${e.root_word}` : null];
      }),
      `ON CONFLICT(id) DO UPDATE SET word_target=excluded.word_target, word_native=excluded.word_native,
         frequency_rank=excluded.frequency_rank, part_of_speech=excluded.part_of_speech, category=excluded.category,
         emoji=excluded.emoji, example_sentence=excluded.example_sentence, gender=excluded.gender, etymology_note=excluded.etymology_note`,
    );

    const idByWord = new Map(pack.vocab.map((v) => [v.word_target, v.id]));
    await insertMany(
      db,
      'INSERT OR REPLACE INTO Etymology_Trees (id, vocab_id, root_word, origin_language, cognate_list, evolution_note, transparent)',
      7,
      pack.etymology.flatMap((e) => {
        const vocabId = idByWord.get(e.word);
        return vocabId ? [[`ety-${vocabId}`, vocabId, e.root_word, e.origin_language, JSON.stringify(e.cognates), e.evolution_note, e.transparent ? 1 : 0]] : [];
      }),
    );

    await insertMany(
      db,
      'INSERT OR REPLACE INTO Culture_History_Notes (id, language, unit_id, title, emoji, history, culture_tip, grammar_why, grammar_examples, character_guide)',
      10,
      pack.units.map(({ id, card: c }) => [
        c.id, pack.code, id, c.title, c.emoji, c.history, c.culture_tip, c.grammar_why,
        JSON.stringify(c.grammar_examples), c.character_guide ? JSON.stringify(c.character_guide) : null,
      ]),
    );

    await insertMany(
      db,
      'INSERT OR REPLACE INTO Interactive_Stories (id, language, cefr_level, title, content_json, cultural_context)',
      6,
      pack.stories.map((st) => [st.id, pack.code, st.cefr, st.title, JSON.stringify(st), st.cultural_context]),
    );

    // Textos de outros alunos: só insere os que ainda não existem (preserva correções feitas)
    const now = new Date().toISOString();
    await insertMany(
      db,
      'INSERT OR IGNORE INTO Community_Feedback (id, language, author_name, is_mine, prompt, content, reference, status, created_at)',
      9,
      pack.community.map((s, i) => [`${pack.code}-peer-${i + 1}`, pack.code, s.author_name, 0, s.prompt, s.content, s.reference, 'aguardando', now]),
    );

    await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', key, version);
  });
}
