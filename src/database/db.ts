import type { SQLiteDatabase } from 'expo-sqlite';
import { MIGRATIONS, LOCAL_USER_ID } from './schema';
import { PACKS, DEFAULT_LANGUAGE } from '@/data/idiomas';
import type { LanguagePack } from '@/data/types';

export const DB_NAME = 'linulingo.db';

/** Chamado pelo SQLiteProvider antes de renderizar o app. */
export async function initDatabase(db: SQLiteDatabase): Promise<void> {
  await db.execAsync('PRAGMA foreign_keys = ON;');
  const row = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  const current = row?.user_version ?? 0;
  for (let v = current; v < MIGRATIONS.length; v++) {
    await db.execAsync(MIGRATIONS[v]);
    await db.execAsync(`PRAGMA user_version = ${v + 1}`);
  }
  for (const pack of Object.values(PACKS)) await seedPack(db, pack);
  await db.runAsync(
    `INSERT OR IGNORE INTO Users (id, name, current_language) VALUES (?, ?, ?)`,
    LOCAL_USER_ID,
    'Aluno',
    DEFAULT_LANGUAGE,
  );
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
    for (const v of pack.vocab) {
      const e = etymByWord.get(v.word_target);
      await db.runAsync(
        `INSERT INTO Vocabulary (id, language, word_target, word_native, frequency_rank, part_of_speech, category, emoji, example_sentence, gender, etymology_note)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
         ON CONFLICT(id) DO UPDATE SET word_target=excluded.word_target, word_native=excluded.word_native,
           frequency_rank=excluded.frequency_rank, part_of_speech=excluded.part_of_speech, category=excluded.category,
           emoji=excluded.emoji, example_sentence=excluded.example_sentence, gender=excluded.gender, etymology_note=excluded.etymology_note`,
        v.id, v.language, v.word_target, v.word_native, v.frequency_rank, v.part_of_speech, v.category, v.emoji,
        v.example_sentence, v.gender, e ? `${e.origin_language}: ${e.root_word}` : null,
      );
    }

    const idByWord = new Map(pack.vocab.map((v) => [v.word_target, v.id]));
    for (const e of pack.etymology) {
      const vocabId = idByWord.get(e.word);
      if (!vocabId) continue;
      await db.runAsync(
        `INSERT OR REPLACE INTO Etymology_Trees (id, vocab_id, root_word, origin_language, cognate_list, evolution_note, transparent)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        `ety-${vocabId}`, vocabId, e.root_word, e.origin_language, JSON.stringify(e.cognates), e.evolution_note, e.transparent ? 1 : 0,
      );
    }

    for (const u of pack.units) {
      const c = u.card;
      await db.runAsync(
        `INSERT OR REPLACE INTO Culture_History_Notes (id, language, unit_id, title, emoji, history, culture_tip, grammar_why, grammar_examples, character_guide)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        c.id, pack.code, u.id, c.title, c.emoji, c.history, c.culture_tip, c.grammar_why,
        JSON.stringify(c.grammar_examples), c.character_guide ? JSON.stringify(c.character_guide) : null,
      );
    }

    for (const st of pack.stories) {
      await db.runAsync(
        `INSERT OR REPLACE INTO Interactive_Stories (id, language, cefr_level, title, content_json, cultural_context) VALUES (?, ?, ?, ?, ?, ?)`,
        st.id, pack.code, st.cefr, st.title, JSON.stringify(st), st.cultural_context,
      );
    }

    // Textos de outros alunos: só insere os que ainda não existem (preserva correções feitas)
    for (const [i, s] of pack.community.entries()) {
      await db.runAsync(
        `INSERT OR IGNORE INTO Community_Feedback (id, language, author_name, is_mine, prompt, content, reference, status, created_at)
         VALUES (?, ?, ?, 0, ?, ?, ?, 'aguardando', ?)`,
        `${pack.code}-peer-${i + 1}`, pack.code, s.author_name, s.prompt, s.content, s.reference, new Date().toISOString(),
      );
    }

    await db.runAsync('INSERT OR REPLACE INTO Meta (key, value) VALUES (?, ?)', key, version);
  });
}
