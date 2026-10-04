import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ajustarXp } from './xp-regras';

test('primeira vez numa lição: XP inteiro; repetir: metade', () => {
  assert.deepEqual(ajustarXp(20, 'licao:a1-1-1', 0, 5), { xp: 20, motivo: null, producao: false });
  assert.deepEqual(ajustarXp(20, 'licao:a1-1-1', 1, 0), { xp: 10, motivo: 'repetido', producao: false });
});

test('prática repetível: 3 rodadas no dia valem inteiro, a 4ª vale metade', () => {
  assert.equal(ajustarXp(15, 'escuta', 0, 2).xp, 15);
  assert.equal(ajustarXp(15, 'escuta', 3, 3).motivo, 'limite');
  assert.equal(ajustarXp(15, 'escuta', 3, 3).xp, 8);
  // as que dão XP por acerto contam 10 acertos por rodada
  assert.equal(ajustarXp(2, 'confunda', 29, 29).xp, 2);
  assert.equal(ajustarXp(2, 'confunda', 30, 30).xp, 1);
});

test('produzir vale 1,5×; a metade não fica abaixo de 1 XP', () => {
  assert.deepEqual(ajustarXp(10, 'diario', 0, 0), { xp: 15, motivo: null, producao: true });
  assert.equal(ajustarXp(10, 'conversa:padaria', 1, 0).xp, 8);
  assert.equal(ajustarXp(1, 'licao:x', 2, 0).xp, 1);
});

test('revisão, reparo e travessia nova não têm limite', () => {
  assert.equal(ajustarXp(10, 'revisao', 9, 9).motivo, null);
  assert.equal(ajustarXp(10, 'reparo', 9, 9).motivo, null);
  assert.equal(ajustarXp(10, 'travessia:u1', 0, 0).motivo, null);
});
