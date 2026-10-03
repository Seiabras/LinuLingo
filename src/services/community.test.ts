import { test } from 'node:test';
import assert from 'node:assert/strict';
import { memoryDb } from '@/database/banco-teste';
import { initDatabase, ensurePack } from '@/database/db';
import { applyReply, decodeExchange, encodeExchange, exchangeLink, LINK_MAX_CHARS, listCommunityRows, loadIdeais, ratePeer, submitMine, toggleIdeal, type ExchangeRequest } from './community';

const req: ExchangeRequest = {
  v: 1,
  t: 'pedido',
  id: 'mine-1',
  lang: 'ro',
  langName: 'romeno',
  prompt: 'Diário: o que você fez hoje?',
  kind: 'texto',
  content: 'Astăzi am mâncat sarmale. Мне нравится. ¿Qué tal? ção',
  from: 'Ana',
};

test('troca por link: ida e volta sem perder acentos, cirílico nem cedilhas', () => {
  const code = encodeExchange(req);
  assert.match(code, /^[\w-]+$/, 'só caracteres seguros de URL');
  assert.deepEqual(decodeExchange(code), req);
  assert.deepEqual(decodeExchange('#' + code), req);
  const reply = { v: 1 as const, t: 'resposta' as const, id: 'mine-1', reaction: 'quase' as const, suggestion: 'Astăzi am mâncat sarmale.', from: 'Bia' };
  assert.deepEqual(decodeExchange(encodeExchange(reply)), reply);
});

test('troca por link: link cortado, editado ou com campos estranhos é recusado', () => {
  const code = encodeExchange(req);
  assert.equal(decodeExchange(code.slice(0, 20)), null);
  assert.equal(decodeExchange('abc'), null);
  assert.equal(decodeExchange(encodeExchange({ ...req, v: 2 } as never)), null);
  assert.equal(decodeExchange(encodeExchange({ v: 1, t: 'resposta', id: 'x', reaction: 'ótimo', from: 'a' } as never)), null);
  assert.equal(decodeExchange(encodeExchange({ ...req, audio: 'javascript:alert(1)' })), null);
});

test('troca por link: áudio grande demais sai do link, o texto fica', () => {
  const small = exchangeLink('https://x.org/LinuLingo', { ...req, kind: 'audio', audio: 'data:audio/webm;codecs=opus;base64,AAAA' });
  assert.ok(!small.withoutAudio);
  assert.ok(small.url.startsWith('https://x.org/LinuLingo/troca#'));
  const big = exchangeLink('https://x.org/LinuLingo/', { ...req, kind: 'audio', audio: `data:audio/webm;base64,${'A'.repeat(LINK_MAX_CHARS)}` });
  assert.ok(big.withoutAudio);
  assert.ok(big.url.length < LINK_MAX_CHARS);
  assert.equal((decodeExchange(big.url.split('#')[1]) as ExchangeRequest).audio, undefined);
});

test('comunidade: avaliar colega com emoji e guardar a resposta que voltou por link', async () => {
  const db = memoryDb();
  await initDatabase(db);
  await ensurePack(db, 'ro');
  const peers = (await listCommunityRows(db, 'ro')).filter((r) => !r.is_mine);
  assert.ok(peers.length > 0);
  await ratePeer(db, peers[0].id, 'claro', '  ');
  const rated = (await listCommunityRows(db, 'ro')).find((r) => r.id === peers[0].id)!;
  assert.equal(rated.reaction, 'claro');
  assert.equal(rated.correction, null, 'sugestão vazia não vira correção');
  assert.equal(rated.status, 'corrigido');

  const id = await submitMine(db, { language: 'ro', prompt: 'Leia em voz alta', content: 'Bună ziua!', kind: 'audio', audio: 'data:audio/webm;base64,AAAA' });
  assert.equal(await applyReply(db, { v: 1, t: 'resposta', id: 'nao-existe', reaction: 'quase', from: 'Bia' }), null);
  // a resposta não pode mexer no texto de um colega (só nos seus envios)
  assert.equal(await applyReply(db, { v: 1, t: 'resposta', id: peers[1]?.id ?? peers[0].id, reaction: 'quase', from: 'Bia' }), null);
  const got = await applyReply(db, { v: 1, t: 'resposta', id, reaction: 'quase', suggestion: 'Bună ziua! (o “ă” é mais fechado)', from: 'Bia' });
  assert.equal(got?.reply_reaction, 'quase');
  assert.equal(got?.reply_from, 'Bia');
  assert.equal(got?.kind, 'audio');
  assert.equal(got?.status, 'corrigido');
});

test('respostas ideais: marca, desmarca e aguenta um valor estragado no Meta', async () => {
  const db = memoryDb();
  await initDatabase(db);
  assert.equal((await loadIdeais(db)).size, 0);
  assert.deepEqual([...(await toggleIdeal(db, 'mine-1'))], ['mine-1']);
  assert.ok((await loadIdeais(db)).has('mine-1'));
  assert.equal((await toggleIdeal(db, 'mine-1')).size, 0);
  await db.runAsync("INSERT OR REPLACE INTO Meta (key, value) VALUES ('respostas_ideais', '{oops')");
  assert.equal((await loadIdeais(db)).size, 0);
});
