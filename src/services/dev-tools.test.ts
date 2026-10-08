import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { ensurePack, initDatabase } from '@/database/db';
import { completedLessons, completeLesson } from '@/database/queries';
import { buildPath } from '@/services/curriculum';
import { ROMENO } from '@/data/ro';
import { RUSSO } from '@/data/ru';
import { contentCount, resetLanguageProgress, unlockAllLessons } from './dev-tools';

test('modo dev: liberar a trilha marca todas as lições e travessias, sem mexer na nota das já feitas', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await ensurePack(db, 'ro');
  const primeira = ROMENO.units[0].lessons[0].id;
  await completeLesson(db, primeira, 0.5);

  const n = await unlockAllLessons(db, ROMENO);
  const done = await completedLessons(db);
  assert.equal(n, ROMENO.units.reduce((s, u) => s + u.lessons.length, 0));
  assert.equal(buildPath(ROMENO, done).every((p) => p.state === 'feita'), true, 'nada fica bloqueado, nem as travessias');
  assert.equal(done.get(primeira), 0.5, 'a nota que já existia continua');

  // o reset do idioma desfaz
  await resetLanguageProgress(db, 'ro');
  assert.equal((await completedLessons(db)).size, 0);
});

test('modo dev: a contagem de conteúdo soma os pacotes', () => {
  const ro = contentCount([ROMENO]);
  const ru = contentCount([RUSSO]);
  const juntos = contentCount([ROMENO, RUSSO]);
  assert.equal(ro.idiomas, 1);
  assert.equal(ro.palavras, ROMENO.vocab.length);
  assert.equal(ro.historias, ROMENO.stories.length);
  assert.equal(juntos.idiomas, 2);
  assert.equal(juntos.licoes, ro.licoes + ru.licoes);
  assert.equal(juntos.gramatica, ro.gramatica + ru.gramatica);
  assert.deepEqual(contentCount([]), { idiomas: 0, unidades: 0, licoes: 0, palavras: 0, historias: 0, gramatica: 0 });
});
