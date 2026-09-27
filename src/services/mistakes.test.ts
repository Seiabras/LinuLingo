import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { resetProgress } from '@/database/queries';
import { buildMistakeRound, clearLearned, listMistakes, logMistake, openMistakeCount, RESOLVE_STREAK, reviewMistake } from './mistakes';
import { exportProgress, importProgress, parseBackup } from './backup';

let seed = 5;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

async function db0() {
  const db = memoryDb();
  await initDatabase(db);
  return db;
}

test('caderno: o mesmo item errado de novo soma, não duplica', async () => {
  const db = await db0();
  await logMistake(db, { language: 'es', source: 'falsos-amigos', key: 'exquisito', prompt: 'O que quer dizer «exquisito»?', expected: 'delicioso', given: 'esquisito' });
  await logMistake(db, { language: 'es', source: 'falsos-amigos', key: 'exquisito', prompt: 'O que quer dizer «exquisito»?', expected: 'delicioso', given: 'estranho' });
  await logMistake(db, { language: 'es', source: 'escuta', key: 'perro', prompt: 'Qual palavra você ouviu?', expected: 'perro', given: 'pero', speak: 'perro', byEar: true, options: ['pero', 'perro', 'peor', 'pera'] });
  await logMistake(db, { language: 'ro', source: 'palacio', key: 'casă', prompt: 'casă', expected: 'feminino', given: 'neutro' });
  const es = await listMistakes(db, 'es');
  assert.equal(es.length, 2);
  assert.equal(es[0].misses, 2, 'o mais errado vem primeiro');
  assert.equal(es[0].given, 'estranho', 'guarda a última resposta errada');
  assert.equal(await openMistakeCount(db, 'es'), 2);
  assert.equal(await openMistakeCount(db, 'ro'), 1);
});

test('caderno: acertar seguido tira o item; errar de novo zera e devolve', async () => {
  const db = await db0();
  await logMistake(db, { language: 'es', source: 'licao', key: 'c1', prompt: 'Yo ___ café.', expected: 'tomo', given: 'toma' });
  let [m] = await listMistakes(db, 'es');
  assert.equal(await reviewMistake(db, m, true), 'certo');
  [m] = await listMistakes(db, 'es');
  assert.equal(await reviewMistake(db, m, false), 'errado');
  [m] = await listMistakes(db, 'es');
  assert.equal(m.streak, 0);
  assert.equal(m.misses, 2);
  for (let i = 0; i < RESOLVE_STREAK; i++) {
    [m] = await listMistakes(db, 'es');
    await reviewMistake(db, m, true);
  }
  [m] = await listMistakes(db, 'es');
  assert.ok(m.resolved_at, 'saiu do caderno');
  assert.equal(await openMistakeCount(db, 'es'), 0);
  // errou de novo num treino: volta
  await logMistake(db, { language: 'es', source: 'licao', key: 'c1', prompt: 'Yo ___ café.', expected: 'tomo', given: 'tomas' });
  [m] = await listMistakes(db, 'es');
  assert.equal(m.resolved_at, null);
  assert.equal(m.misses, 3);
  await clearLearned(db, 'es');
  assert.equal((await listMistakes(db, 'es')).length, 1, 'apagar aprendidos não apaga os abertos');
});

test('caderno: a revisão usa as opções originais, ou a certa, a errada e outras do mesmo treino', async () => {
  const db = await db0();
  await logMistake(db, { language: 'es', source: 'escuta', key: 'perro', prompt: 'Qual palavra você ouviu?', expected: 'perro', given: 'pero', speak: 'perro', byEar: true, options: ['pero', 'perro', 'peor', 'pera'] });
  await logMistake(db, { language: 'es', source: 'falsos-amigos', key: 'a', prompt: 'exquisito?', expected: 'delicioso', given: 'esquisito' });
  await logMistake(db, { language: 'es', source: 'falsos-amigos', key: 'b', prompt: 'embarazada?', expected: 'grávida', given: 'envergonhada' });
  await logMistake(db, { language: 'es', source: 'palacio', key: 'x', prompt: 'viaje', expected: 'masculino' });
  const round = buildMistakeRound(await listMistakes(db, 'es'), 10, rnd);
  assert.equal(round.length, 4);
  const ear = round.find((q) => q.m.source === 'escuta')!;
  assert.ok(ear.byEar);
  assert.deepEqual([...ear.options].sort(), ['peor', 'pera', 'pero', 'perro']);
  const ff = round.find((q) => q.m.expected === 'delicioso')!;
  assert.ok(ff.options.includes('delicioso') && ff.options.includes('esquisito') && ff.options.includes('grávida'));
  const alone = round.find((q) => q.m.source === 'palacio')!;
  assert.deepEqual(alone.options, [], 'sem opções: a pessoa diz se lembrou');
});

test('caderno: entra na cópia do progresso e sai no «apagar progresso»', async () => {
  const db = await db0();
  await logMistake(db, { language: 'ro', source: 'palacio', key: 'casă', prompt: 'casă', expected: 'feminino', given: 'neutro' });
  const other = await db0();
  await importProgress(other, parseBackup(JSON.stringify(await exportProgress(db))));
  assert.equal(await openMistakeCount(other, 'ro'), 1);
  await resetProgress(other);
  assert.equal(await openMistakeCount(other, 'ro'), 0);
});

test('caderno ↔ SRS: errar uma palavra do vocabulário derruba o fator de facilidade e marca revisão para amanhã', async () => {
  const { ensurePack } = await import('@/database/db');
  const { dueReviews, reviewWord } = await import('@/database/queries');
  const { MISTAKE_EASE_PENALTY, penalizeWord, tomorrowStart, vocabIdForMistake } = await import('./mistakes');
  const db = await db0();
  await ensurePack(db, 'es');
  const now = new Date('2026-09-27T15:00:00');
  // «perro» já estudado, com fator 2,5
  const id = await vocabIdForMistake(db, { language: 'es', key: 'perro' });
  assert.ok(id, 'perro está no vocabulário do espanhol');
  await reviewWord(db, id, 5);
  const before = await db.getFirstAsync<{ ease_factor: number }>('SELECT ease_factor FROM User_SRS_State WHERE vocab_id = ?', [id]);
  await logMistake(db, { language: 'es', source: 'escuta', key: 'perro', prompt: 'Qual palavra você ouviu?', expected: 'perro', given: 'pero', speak: 'perro', byEar: true }, now);
  const after = await db.getFirstAsync<{ ease_factor: number; repetition: number; interval: number; next_review_date: string }>('SELECT * FROM User_SRS_State WHERE vocab_id = ?', [id]);
  assert.equal(after?.ease_factor, Math.round((before!.ease_factor - MISTAKE_EASE_PENALTY) * 100) / 100);
  assert.equal(after?.repetition, 0);
  assert.equal(after?.interval, 1);
  assert.equal(after?.next_review_date, tomorrowStart(now));

  // errar de novo no mesmo dia não derruba duas vezes
  await logMistake(db, { language: 'es', source: 'pares', key: 'perro', prompt: '?', expected: 'perro', given: 'pero' }, now);
  const again = await db.getFirstAsync<{ ease_factor: number }>('SELECT ease_factor FROM User_SRS_State WHERE vocab_id = ?', [id]);
  assert.equal(again?.ease_factor, after?.ease_factor);

  // o fator nunca passa do mínimo do SM-2
  for (let d = 1; d <= 12; d++) await penalizeWord(db, id, new Date(now.getTime() + d * 86400000));
  const floor = await db.getFirstAsync<{ ease_factor: number }>('SELECT ease_factor FROM User_SRS_State WHERE vocab_id = ?', [id]);
  assert.equal(floor?.ease_factor, 1.3);

  // uma palavra nova (nunca estudada) errada entra direto na revisão
  const gato = await vocabIdForMistake(db, { language: 'es', key: 'gato' });
  assert.ok(gato);
  await logMistake(db, { language: 'es', source: 'imersao', key: 'x', word: 'gato', prompt: '?', expected: 'gato' }, now);
  const g = await db.getFirstAsync<{ ease_factor: number }>('SELECT ease_factor FROM User_SRS_State WHERE vocab_id = ?', [gato]);
  assert.equal(g?.ease_factor, 2.3);

  // no sprint, as erradas vêm antes das outras revisões vencidas
  const casa = await vocabIdForMistake(db, { language: 'es', key: 'casa' });
  await reviewWord(db, casa!, 5);
  await db.runAsync('UPDATE User_SRS_State SET next_review_date = ? WHERE vocab_id = ?', ['2026-01-01T00:00:00.000Z', casa!]);
  await db.runAsync('UPDATE User_SRS_State SET next_review_date = ? WHERE vocab_id IN (?, ?)', ['2026-06-01T00:00:00.000Z', id, gato!]);
  const due = await dueReviews(db, 'es');
  assert.deepEqual(due.slice(0, 3).map((v) => v.id), [id, gato, casa], 'a mais difícil primeiro, a acertada por último');
});

test('caderno ↔ SRS: a revisão do sprint já aplica o SM-2 (sem penalidade dobrada) e erros sem palavra não mexem no SRS', async () => {
  const { ensurePack } = await import('@/database/db');
  const { vocabIdForMistake } = await import('./mistakes');
  const db = await db0();
  await ensurePack(db, 'es');
  const id = await vocabIdForMistake(db, { language: 'es', key: 'perro' });
  await logMistake(db, { language: 'es', source: 'revisao', key: id!, prompt: 'O que é «perro»?', expected: 'cachorro', speak: 'perro' });
  assert.equal((await db.getFirstAsync<{ n: number }>('SELECT COUNT(*) AS n FROM User_SRS_State'))?.n, 0);
  await logMistake(db, { language: 'es', source: 'gramatica', key: '¿Cuál es el plural de «luz»?', prompt: '?', expected: 'luces' });
  assert.equal((await db.getFirstAsync<{ n: number }>('SELECT COUNT(*) AS n FROM User_SRS_State'))?.n, 0);
});
