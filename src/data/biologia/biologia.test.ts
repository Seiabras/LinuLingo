import { test } from 'node:test';
import assert from 'node:assert/strict';
import { amigosDaBiologia } from './seres';
import { PERGUNTAS_BICHO, CARACTERES_MENDEL } from './laboratorio';
import { caminhoAte, parenteComum } from './arvore';
import { MARCOS_DA_VIDA, horaNoDia } from './linha-do-tempo';

test('Descubra o bicho: as perguntas separam todos os amigos', () => {
  const ids = amigosDaBiologia().map((a) => a.id);
  const assinaturas = ids.map((id) => PERGUNTAS_BICHO.map((p) => (p.sim.includes(id) ? 1 : 0)).join(''));
  assert.equal(new Set(assinaturas).size, ids.length);
  for (const p of PERGUNTAS_BICHO) for (const id of p.sim) assert.ok(ids.includes(id), `${p.id}: ${id}`);
});

test('Mendel: as contagens da F2 dão perto de 3 para 1', () => {
  for (const c of CARACTERES_MENDEL) {
    const r = c.f2[0] / c.f2[1];
    assert.ok(r > 2.7 && r < 3.3, c.id);
  }
});

test('Árvore: todo amigo está na árvore e o parente comum faz sentido', () => {
  for (const a of amigosDaBiologia()) assert.ok(caminhoAte(a.id), a.id);
  assert.equal(parenteComum('imperador', 'rei')?.id, 'aptenodytes');
  assert.equal(parenteComum('imperador', 'albatroz')?.id, 'austrodyptornithes');
  assert.equal(parenteComum('weddell', 'jubarte')?.id, 'mamiferos');
  assert.equal(parenteComum('krill', 'jubarte')?.id, 'animais');
});

test('Linha do tempo em ordem e no dia de 24 horas', () => {
  for (let i = 1; i < MARCOS_DA_VIDA.length; i++) assert.ok(MARCOS_DA_VIDA[i]!.anos < MARCOS_DA_VIDA[i - 1]!.anos);
  assert.equal(horaNoDia(4_540_000_000), '00:00:00');
  assert.equal(horaNoDia(0), '24:00:00');
});
