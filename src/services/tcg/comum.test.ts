import { test } from 'node:test';
import assert from 'node:assert/strict';
import { AMIGOS_LINU } from '@/data/amigos-linu';
import { BICHOS, BIOMAS, TEMAS_TCG, embaralhar, expandir, semente } from './comum';

test('tcg: os Amigos do Linu entram com o nome e o desenho que já têm no app', () => {
  for (const b of Object.values(BICHOS)) {
    if (!b.amigo) {
      assert.ok(b.forma && b.cores, `${b.id}: sem amigo, precisa de forma e cores para o desenho`);
      continue;
    }
    const a = AMIGOS_LINU.find((x) => x.id === b.amigo);
    assert.ok(a, `${b.id}: amigo ${b.amigo} não existe`);
    assert.ok(b.nome.startsWith(`${a.name},`), `${b.id}: o nome tem de começar por “${a.name},”`);
  }
});

test('tcg: os 4 temas têm bioma, nome e bichos', () => {
  for (const bioma of Object.keys(BIOMAS) as (keyof typeof BIOMAS)[]) {
    assert.ok(TEMAS_TCG[bioma].nome);
    assert.ok(Object.values(BICHOS).filter((b) => b.bioma === bioma).length >= 10, `${bioma}: poucos bichos`);
  }
});

test('tcg: embaralhar com a mesma semente dá a mesma ordem, sem perder carta', () => {
  const lista = expandir({ a: 3, b: 2, c: 1 });
  assert.equal(lista.length, 6);
  const x = embaralhar(lista, semente(7));
  const y = embaralhar(lista, semente(7));
  assert.deepEqual(x, y);
  assert.deepEqual([...x].sort(), [...lista].sort());
});
