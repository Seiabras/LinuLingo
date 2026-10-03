import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { completeLesson, skipLessons } from '@/database/queries';
import { ROMENO } from '@/data/ro';
import { jumpLessons } from './curriculum';
import { cachecolDoProgresso, CORES_CACHECOL, fraseDoCachecol, loadCachecol, NIVEIS_CEFR, proximoCachecol, setUsarCachecol, USAR_CACHECOL_KEY } from './cachecol';
import { getMeta } from '@/database/queries';

const prova = (level: string) => ROMENO.units.find((u) => u.level === level)!.lessons.find((l) => l.kind === 'prova')!.id;
const licao = (level: string) => ROMENO.units.find((u) => u.level === level)!.lessons.find((l) => l.kind === 'licao')!.id;

test('cachecol: seis cores diferentes, uma por nível do CEFR', () => {
  assert.deepEqual(Object.keys(CORES_CACHECOL), NIVEIS_CEFR);
  const meios = NIVEIS_CEFR.map((c) => CORES_CACHECOL[c].cores[1].toLowerCase());
  assert.equal(new Set(meios).size, 6);
  assert.equal(new Set(NIVEIS_CEFR.map((c) => CORES_CACHECOL[c].nome)).size, 6);
  assert.equal(CORES_CACHECOL.B1.nome, 'verde');
});

test('cachecol: nenhum antes da primeira travessia; lições soltas não contam', () => {
  assert.equal(cachecolDoProgresso(ROMENO.units, new Map()), null);
  assert.equal(cachecolDoProgresso(ROMENO.units, new Map([[licao('A1.1'), 1], [licao('B1.1'), 1]])), null);
  assert.match(fraseDoCachecol(null), /primeira travessia/);
});

test('cachecol: o nível mais alto entre as travessias vencidas', () => {
  assert.deepEqual(cachecolDoProgresso(ROMENO.units, new Map([[prova('A1.1'), 1]])), { cefr: 'A1', level: 'A1.1' });
  assert.deepEqual(cachecolDoProgresso(ROMENO.units, new Map([[prova('A1.1'), 1], [prova('A1.2'), 0.9]])), { cefr: 'A1', level: 'A1.2' });
  const b1 = cachecolDoProgresso(ROMENO.units, new Map([[prova('A1.1'), 1], [prova('B1.2'), 0.8], [prova('A2.1'), 1]]));
  assert.deepEqual(b1, { cefr: 'B1', level: 'B1.2' });
  assert.equal(fraseDoCachecol(b1), 'Cachecol verde: chegou ao B1 · próximo: azul (B2)');
  const c2 = cachecolDoProgresso(ROMENO.units, new Map([[prova('C2'), 1]]));
  assert.equal(c2?.cefr, 'C2');
  assert.equal(proximoCachecol(c2), null);
  assert.match(fraseDoCachecol(c2), /vermelho.*mais alto/);
  assert.equal(proximoCachecol(null), 'A1');
});

test('cachecol: lido do banco, com a travessia ou com o teste para pular', async () => {
  const db = memoryDb();
  await initDatabase(db);
  assert.equal(await loadCachecol(db, ROMENO), null);
  await completeLesson(db, prova('A1.1'), 0.9);
  assert.equal((await loadCachecol(db, ROMENO))?.cefr, 'A1');
  // o teste para pular até o A2.2 marca tudo até lá como feito, inclusive as travessias
  await skipLessons(db, jumpLessons(ROMENO, ROMENO.units.find((u) => u.level === 'A2.2')!.id), 0.85);
  assert.deepEqual(await loadCachecol(db, ROMENO), { cefr: 'A2', level: 'A2.2' });
});

test('cachecol: guardar o cachecol fica salvo e não apaga a conquista', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await completeLesson(db, prova('A1.1'), 1);
  await setUsarCachecol(db, false);
  assert.equal(await getMeta(db, USAR_CACHECOL_KEY), '0');
  // a conquista continua: guardar é só não mostrar
  assert.equal((await loadCachecol(db, ROMENO))?.cefr, 'A1');
  await setUsarCachecol(db, true);
  assert.equal(await getMeta(db, USAR_CACHECOL_KEY), '1');
});
