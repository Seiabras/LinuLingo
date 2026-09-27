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
