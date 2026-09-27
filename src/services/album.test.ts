import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase } from '@/database/db';
import { awardXp } from '@/database/queries';
import { albumStats, loadAlbum, onSticker, pickSticker, STICKERS, TRADE_COST, tradeDuplicates, type Album } from './album';

let seed = 17;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

test('álbum: uma figurinha por bicho e por instrumento, com ids únicos', () => {
  assert.ok(STICKERS.length >= 80);
  assert.equal(new Set(STICKERS.map((s) => s.id)).size, STICKERS.length);
  assert.ok(STICKERS.some((s) => s.kind === 'bicho') && STICKERS.some((s) => s.kind === 'instrumento'));
});

test('álbum: a maioria das figurinhas vem dos países do idioma estudado', () => {
  let home = 0;
  const album: Album = {};
  for (let i = 0; i < 400; i++) if (['ESP', 'MEX', 'COL', 'ARG', 'PER', 'CHL', 'CUB'].includes(pickSticker(album, 'es', rnd).iso)) home++;
  assert.ok(home / 400 > 0.6, `do espanhol: ${home}/400`);
});

test('álbum: com o tempo o álbum completa, e repetidas aparecem', () => {
  const album: Album = {};
  for (let i = 0; i < 1500; i++) {
    const s = pickSticker(album, 'ro', rnd);
    album[s.id] = (album[s.id] ?? 0) + 1;
  }
  const st = albumStats(album);
  assert.equal(st.owned, st.total);
  assert.ok(st.duplicates > 0);
});

test('álbum: 3 repetidas trocam por uma que falta (do idioma estudado, se houver)', () => {
  const [a, b] = STICKERS.filter((s) => s.iso === 'ITA');
  const album: Album = { [a.id]: 3, [b.id]: 2 };
  const r = tradeDuplicates(album, 'it', rnd)!;
  assert.ok(r);
  assert.equal(albumStats(r.album).duplicates, 3 - TRADE_COST + 0);
  assert.equal(r.sticker.iso, 'ITA');
  assert.ok(!album[r.sticker.id], 'a troca dá uma que faltava');
  assert.equal(tradeDuplicates({ [a.id]: 3 }, 'it', rnd), null, 'só 2 repetidas: não dá');
});

test('álbum: cada atividade que dá XP dá uma figurinha e avisa a tela', async () => {
  const db = memoryDb();
  await initDatabase(db);
  const seen: string[] = [];
  const off = onSticker((e) => seen.push(e.sticker.id));
  await awardXp(db, 10, 'licao');
  await awardXp(db, 1, 'toque');
  off();
  assert.equal(seen.length, 1, 'XP pequeno (menos que MIN_XP) não dá figurinha');
  const album = await loadAlbum(db);
  assert.equal(album[seen[0]], 1);
});
