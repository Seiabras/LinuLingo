import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from './banco-teste';
import { ensurePack, initDatabase } from './db';
import { MIGRATIONS } from './schema';
import { awardXp, completeLesson, getMeta, getUser, reviewWord, saveMnemonic, setMeta, updateUser } from './queries';
import { COLUNAS_COM_CODIGO, GUARANI_ANTIGO_RENOMEADO, renomearCodigos, renomearCodigosNoBanco } from './codigos-renomeados';
import { PACKS } from '@/data/idiomas';
import { logMistake } from '@/services/mistakes';
import { exportProgress, importProgress, parseBackup, summarize } from '@/services/backup';

test('o código antigo só é trocado como palavra inteira', () => {
  const r = (s: string) => renomearCodigos(s, GUARANI_ANTIGO_RENOMEADO);
  assert.equal(r('gnw'), 'oldp1258');
  assert.equal(r('gnw-u1-l1'), 'oldp1258-u1-l1');
  assert.equal(r('licao:gnw-u1-l1'), 'licao:oldp1258-u1-l1');
  assert.equal(r('escuta_prog_gnw'), 'escuta_prog_oldp1258');
  assert.equal(r('expedicao:gnw:2026-W41'), 'expedicao:oldp1258:2026-W41');
  assert.equal(r('{"gnw":["gnw-g1","gnw-g2"]}'), '{"oldp1258":["oldp1258-g1","oldp1258-g2"]}');
  for (const outro of ['gn', 'gun', 'agnw', 'gnwx', 'gnw2', 'west2640', 'GNW']) assert.equal(r(outro), outro);
});

test('o guarani antigo não usa mais o código do guarani boliviano ocidental', () => {
  assert.ok(PACKS.oldp1258, 'o pacote está registrado com o glottocode');
  assert.equal(PACKS.oldp1258.code, 'oldp1258');
  assert.equal(PACKS.gnw, undefined, '`gnw` é, no ISO 639-3, outra língua');
  const ids = [
    ...PACKS.oldp1258.vocab.map((v) => v.id),
    ...PACKS.oldp1258.units.flatMap((u) => [u.id, u.card.id, ...u.lessons.map((l) => l.id)]),
    ...PACKS.oldp1258.stories.map((s) => s.id),
    ...(PACKS.oldp1258.grammar ?? []).map((g) => g.id),
  ];
  assert.ok(ids.length > 0);
  for (const id of ids) assert.ok(id.startsWith('oldp1258-'), id);
});

test('a lista de colunas renomeadas cobre só tabelas que existem', async () => {
  const db = memoryDb();
  await initDatabase(db);
  for (const [tabela, colunas] of Object.entries(COLUNAS_COM_CODIGO)) {
    const existem = (await db.getAllAsync<{ name: string }>(`PRAGMA table_info(${tabela})`)).map((c) => c.name);
    for (const c of colunas) assert.ok(existem.includes(c), `${tabela}.${c}`);
  }
});

/**
 * Um aparelho de antes da troca: o banco na versão 5, o guarani antigo gravado com `gnw` (o próprio
 * pacote de hoje com os ids de volta para `gnw`) e progresso de verdade nele.
 */
async function aparelhoAntigo() {
  const db = memoryDb();
  await initDatabase(db);
  const velho = JSON.parse(renomearCodigos(JSON.stringify(PACKS.oldp1258), { oldp1258: 'gnw' }));
  PACKS.gnw = velho;
  try {
    await ensurePack(db, 'gnw');
  } finally {
    delete PACKS.gnw;
  }
  await updateUser(db, { current_language: 'gnw' });
  await completeLesson(db, 'gnw-u1-l1', 0.9);
  await completeLesson(db, 'gnw-u1-l2', 1);
  await awardXp(db, 20, 'licao:gnw-u1-l1');
  await reviewWord(db, 'gnw-0001', 5);
  await reviewWord(db, 'gnw-0002', 4);
  await saveMnemonic(db, 'gnw-0003', 'n', 'uma ponte sobre o rio');
  await logMistake(db, { language: 'gnw', source: 'escuta', key: 'tã', prompt: 'Qual palavra você ouviu?', expected: 'tã', given: 'heẽ' }, new Date('2026-10-01T12:00:00'));
  await setMeta(db, 'escuta_prog_gnw', JSON.stringify({ acertos: 7 }));
  await setMeta(db, 'quiz_melhor_gnw-g1', '4');
  await db.execAsync(`INSERT INTO Story_Progress (user_id, story_id, ending_id, reached_at) VALUES ('local', 'gnw-h1', 'fim-bom', '2026-10-01')`);
  await db.execAsync(`INSERT INTO User_Journal_Logs (id, user_id, language, created_at, day, raw_user_input) VALUES ('j1', 'local', 'gnw', '2026-10-01', '2026-10-01', 'Ereyupa?')`);
  await db.execAsync(`PRAGMA user_version = 5`);
  return db;
}

async function semGnw(db: Awaited<ReturnType<typeof aparelhoAntigo>>) {
  for (const [tabela, colunas] of Object.entries(COLUNAS_COM_CODIGO)) {
    const filtro = colunas.map((c) => `${c} = 'gnw' OR ${c} LIKE 'gnw-%' OR ${c} LIKE '%\\_gnw' ESCAPE '\\' OR ${c} LIKE '%:gnw-%' OR ${c} LIKE 'gnw:%'`).join(' OR ');
    const n = await db.getFirstAsync<{ n: number }>(`SELECT COUNT(*) AS n FROM ${tabela} WHERE ${filtro}`);
    assert.equal(n?.n, 0, `sobrou gnw em ${tabela}`);
  }
}

test('ao atualizar o app, o progresso salvo com `gnw` passa para `oldp1258` sem perder nada', async () => {
  const db = await aparelhoAntigo();
  const antes = {
    xp: (await getUser(db))?.total_xp,
    srs: (await db.getAllAsync<{ interval: number; repetition: number; ease_factor: number }>('SELECT interval, repetition, ease_factor FROM User_SRS_State ORDER BY vocab_id')).map((r) => ({ ...r })),
  };

  await initDatabase(db);

  const versao = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  assert.equal(versao?.user_version, MIGRATIONS.length);
  const u = await getUser(db);
  assert.equal(u?.current_language, 'oldp1258');
  assert.equal(u?.total_xp, antes.xp);
  const licoes = await db.getAllAsync<{ lesson_id: string }>('SELECT lesson_id FROM Lesson_Progress ORDER BY lesson_id');
  assert.deepEqual(licoes.map((l) => l.lesson_id), ['oldp1258-u1-l1', 'oldp1258-u1-l2']);
  const srs = await db.getAllAsync<{ id: string; vocab_id: string; interval: number; repetition: number; ease_factor: number }>('SELECT * FROM User_SRS_State ORDER BY vocab_id');
  assert.deepEqual(srs.map((s) => s.vocab_id), ['oldp1258-0001', 'oldp1258-0002']);
  assert.deepEqual(srs.map((s) => s.id), ['local-oldp1258-0001', 'local-oldp1258-0002']);
  assert.deepEqual(srs.map(({ interval, repetition, ease_factor }) => ({ interval, repetition, ease_factor })), antes.srs);
  // as revisões apontam para palavras que existem (e com o conteúdo de hoje)
  const palavra = await db.getFirstAsync<{ word_target: string; language: string }>(`SELECT word_target, language FROM Vocabulary WHERE id = 'oldp1258-0001'`);
  assert.equal(palavra?.language, 'oldp1258');
  assert.equal(palavra?.word_target, PACKS.oldp1258.vocab[0].word_target);
  assert.deepEqual(await db.getAllAsync('PRAGMA foreign_key_check'), []);
  assert.equal((await db.getFirstAsync<{ vocab_id: string }>('SELECT vocab_id FROM Mnemonic_Palaces'))?.vocab_id, 'oldp1258-0003');
  const erro = await db.getFirstAsync<{ id: string; language: string }>('SELECT id, language FROM Mistake_Log');
  assert.deepEqual({ ...erro }, { id: 'oldp1258:escuta:tã', language: 'oldp1258' });
  assert.equal((await db.getFirstAsync<{ story_id: string }>('SELECT story_id FROM Story_Progress'))?.story_id, 'oldp1258-h1');
  assert.equal((await db.getFirstAsync<{ language: string }>('SELECT language FROM User_Journal_Logs'))?.language, 'oldp1258');
  assert.equal((await db.getFirstAsync<{ source: string }>(`SELECT source FROM XP_Log WHERE source LIKE 'licao:%'`))?.source, 'licao:oldp1258-u1-l1');
  assert.equal(await getMeta(db, 'escuta_prog_oldp1258'), JSON.stringify({ acertos: 7 }));
  assert.equal(await getMeta(db, 'quiz_melhor_oldp1258-g1'), '4');
  assert.equal(await getMeta(db, 'content_gnw'), null);
  assert.ok(await getMeta(db, 'content_oldp1258'));
  await semGnw(db);
  // e os textos da comunidade não duplicam
  const peers = await db.getFirstAsync<{ n: number }>(`SELECT COUNT(*) AS n FROM Community_Feedback WHERE language = 'oldp1258'`);
  assert.equal(peers?.n, PACKS.oldp1258.community.length);
});

test('a migração roda uma vez só: um `gnw` gravado depois dela fica como está', async () => {
  const db = await aparelhoAntigo();
  await initDatabase(db);
  await setMeta(db, 'escuta_prog_gnw', '{}');
  await initDatabase(db);
  assert.equal(await getMeta(db, 'escuta_prog_gnw'), '{}');
});

test('renomear de novo não muda nada (o banco já migrado fica igual)', async () => {
  const db = await aparelhoAntigo();
  await initDatabase(db);
  const tudo = async () => JSON.stringify(await db.getAllAsync('SELECT * FROM Lesson_Progress UNION ALL SELECT key, value, 0, 0, 0 FROM Meta'));
  const antes = await tudo();
  await renomearCodigosNoBanco(db, GUARANI_ANTIGO_RENOMEADO);
  assert.equal(await tudo(), antes);
});

test('uma cópia feita antes da troca (formato 1) restaura o guarani antigo com o código novo', async () => {
  const velho = await aparelhoAntigo();
  const copia = { ...(await exportProgress(velho)), format: 1 };
  assert.ok(copia.languages.includes('gnw'));

  const b = parseBackup(JSON.stringify(copia));
  assert.ok(b.languages.includes('oldp1258') && !b.languages.includes('gnw'));
  assert.ok(summarize(b).languages.includes('Guarani Antigo'));

  const novo = memoryDb();
  await initDatabase(novo);
  const { skipped } = await importProgress(novo, b);
  assert.equal(skipped, 0, 'nenhuma revisão perdida');
  assert.equal((await getUser(novo))?.current_language, 'oldp1258');
  const licoes = await novo.getAllAsync<{ lesson_id: string }>('SELECT lesson_id FROM Lesson_Progress ORDER BY lesson_id');
  assert.deepEqual(licoes.map((l) => l.lesson_id), ['oldp1258-u1-l1', 'oldp1258-u1-l2']);
  assert.equal((await novo.getAllAsync('SELECT * FROM User_SRS_State')).length, 2);
  assert.equal(await getMeta(novo, 'escuta_prog_oldp1258'), JSON.stringify({ acertos: 7 }));
  assert.deepEqual(await novo.getAllAsync('PRAGMA foreign_key_check'), []);
  await semGnw(novo);
});

test('uma cópia de formato 2 não é renomeada', () => {
  const b = parseBackup(JSON.stringify({ app: 'LinuLingo', format: 2, exported_at: '', languages: ['gnw'], tables: { Lesson_Progress: { columns: ['user_id', 'lesson_id', 'completed_at', 'best_score', 'times_completed'], rows: [['local', 'gnw-u1-l1', '2026-10-09', 1, 1]] } } }));
  assert.deepEqual(b.languages, ['gnw']);
  assert.equal(b.tables.Lesson_Progress?.rows[0][1], 'gnw-u1-l1');
});
