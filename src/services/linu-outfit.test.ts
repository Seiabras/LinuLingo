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
  // só sai roupa comprável na loja (com preço), nunca as de presente das lições
  assert.ok((result as { kind: 'roupa'; outfit: { price?: number } }).outfit.price);
});

test('pacote de chance: em muitos sorteios, toda roupa que sai tem preço na loja', async () => {
  const db = memoryDb();
  await initDatabase(db);
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  for (let k = 0; k < 40; k++) {
    const r = await openPacote(db, 'pt', PACOTE_PRICE * 1000, rnd);
    if (r?.kind === 'roupa') assert.ok(r.outfit.price, `${r.outfit.id} é de presente, não comprável`);
  }
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
