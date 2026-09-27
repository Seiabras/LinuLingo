import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { grantRareSticker, loadAlbum, loadRare, onSticker, pickRare, STICKERS } from './album';
import { currentStop, finished, loadExpedition, MAX_MISSES, saveExpedition, stopStars } from './expeditions';

test('expedição: o progresso da semana fica guardado por idioma e semana', async () => {
  const db = memoryDb();
  await initDatabase(db);
  const p = await loadExpedition(db, 'ro', '2026-39');
  assert.equal(currentStop(p), 0);
  p.stops[0] = { done: true, misses: 1, hints: 0 };
  await saveExpedition(db, p);
  const again = await loadExpedition(db, 'ro', '2026-39');
  assert.equal(currentStop(again), 1);
  assert.equal(currentStop(await loadExpedition(db, 'ro', '2026-40')), 0, 'semana nova, expedição nova');
  assert.equal(currentStop(await loadExpedition(db, 'es', '2026-39')), 0, 'cada idioma tem a sua');
  again.stops = again.stops.map(() => ({ done: true, misses: 0, hints: 0 }));
  assert.ok(finished(again));
});

test('expedição: estrelas por dicas e erros', () => {
  assert.equal(stopStars({ done: true, misses: 0, hints: 0 }), 3);
  assert.equal(stopStars({ done: true, misses: 1, hints: 1 }), 1);
  assert.equal(stopStars({ done: true, misses: 0, hints: 5 }), 1);
  assert.equal(stopStars({ done: true, misses: MAX_MISSES, hints: 0 }), 0, 'o mapa revelou');
  assert.equal(stopStars({ done: false, misses: 0, hints: 0 }), 0);
});

test('figurinha rara: dos países visitados, de preferência uma que falta; fica dourada e avisa', async () => {
  const db = memoryDb();
  await initDatabase(db);
  const ro = STICKERS.filter((s) => s.iso === 'ROU');
  assert.ok(ro.length >= 2);
  let seen: string | null = null;
  const off = onSticker((e) => (seen = e.rare ? e.sticker.id : null));
  const e = await grantRareSticker(db, ['ROU'], () => 0);
  off();
  assert.ok(e && e.rare && e.sticker.iso === 'ROU');
  assert.equal(seen, e!.sticker.id);
  assert.ok((await loadRare(db)).has(e!.sticker.id));
  assert.equal((await loadAlbum(db))[e!.sticker.id], 1, 'entra no álbum');
  // a próxima não repete a rara e prefere uma que falta no álbum
  const album = { [ro[1].id]: 1 };
  const next = pickRare(album, new Set([e!.sticker.id]), ['ROU'], () => 0);
  assert.ok(next && next.id !== e!.sticker.id && !album[next.id]);
  assert.equal(pickRare({}, new Set(ro.map((s) => s.id)), ['ROU']), null, 'todas raras: nada');
});
