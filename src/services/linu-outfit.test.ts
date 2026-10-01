import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { loadAlbum, onSticker } from '@/services/album';
import { krillForPacote, loadPacoteWon, openPacote, PACOTE_PRICE } from './linu-outfit';

test('pacote de chance: sem krill suficiente não abre', async () => {
  const db = memoryDb();
  await initDatabase(db);
  const result = await openPacote(db, 'sv', PACOTE_PRICE * 10 - 1, () => 0.9);
  assert.equal(result, null);
});

test('pacote de chance: com krill, dá uma roupinha se a sorte cair nela e gasta o krill', async () => {
  const db = memoryDb();
  await initDatabase(db);
  const totalXp = PACOTE_PRICE * 10;
  const before = await krillForPacote(db, totalXp);
  const result = await openPacote(db, 'sv', totalXp, () => 0);
  assert.ok(result);
  assert.equal(result!.kind, 'roupa');
  const won = await loadPacoteWon(db);
  assert.ok(won.includes((result as { kind: 'roupa'; outfit: { id: string } }).outfit.id));
  assert.equal(await krillForPacote(db, totalXp), before - PACOTE_PRICE);
});

test('pacote de chance: sorte ruim dá uma figurinha e avisa quem estiver ouvindo', async () => {
  const db = memoryDb();
  await initDatabase(db);
  const seen: string[] = [];
  const off = onSticker((e) => seen.push(e.sticker.id));
  const result = await openPacote(db, 'sv', PACOTE_PRICE * 10, () => 0.99);
  off();
  assert.ok(result);
  assert.equal(result!.kind, 'figurinha');
  assert.equal(seen.length, 1);
  const album = await loadAlbum(db);
  assert.equal(album[seen[0]], 1);
});
