import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { DEFAULT_ACCESS_PREFS, loadAccessPrefs, saveAccessPrefs, segundosDoSprint, VOZ_FATOR } from './acessibilidade-prefs';

test('acessibilidade: o tempo do Sprint segue a preferência', () => {
  assert.equal(segundosDoSprint(300, 'normal'), 300);
  assert.equal(segundosDoSprint(300, 'dobro'), 600);
  assert.equal(segundosDoSprint(300, 'livre'), null);
});

test('acessibilidade: a velocidade da voz vira um fator para toda fala', () => {
  assert.equal(VOZ_FATOR.normal, 1);
  assert.ok(VOZ_FATOR.devagar < 1 && VOZ_FATOR['bem-devagar'] < VOZ_FATOR.devagar);
  // as gravações não tocam abaixo de 0,5×
  assert.ok(VOZ_FATOR['bem-devagar'] >= 0.5);
});

test('acessibilidade: preferências salvas antes das opções novas ganham os padrões', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await db.runAsync(`INSERT OR REPLACE INTO Meta (key, value) VALUES ('access', ?)`, JSON.stringify({ reduceMotion: true, textScale: 'grande' }));
  assert.deepEqual(await loadAccessPrefs(db), { ...DEFAULT_ACCESS_PREFS, reduceMotion: true, textScale: 'grande' });
  const novas = { ...DEFAULT_ACCESS_PREFS, altoContraste: true, tempoSprint: 'livre' as const };
  await saveAccessPrefs(db, novas);
  assert.deepEqual(await loadAccessPrefs(db), novas);
});
