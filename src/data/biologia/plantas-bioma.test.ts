import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BIOMAS } from './biomas';
import type { BiomaBrasil } from './biomas-ibge';
import { PLANTAS_DO_BIOMA, plantasDoBiomaBrasil, plantasDoBiomaMundo } from './plantas-bioma';

const BRASIL: BiomaBrasil[] = ['amazonia', 'caatinga', 'cerrado', 'mata-atlantica', 'pampa', 'pantanal'];

test('Plantas do bioma: todo bioma do Brasil tem pelo menos duas plantas', () => {
  for (const id of BRASIL) assert.ok(plantasDoBiomaBrasil(id).length >= 2, id);
});

test('Plantas do bioma: os números do mundo existem no Ecoregions 2017', () => {
  const validos = new Set(BIOMAS.map((b) => b.num));
  for (const p of PLANTAS_DO_BIOMA) {
    assert.ok(p.mundo.length > 0, p.nome);
    for (const n of p.mundo) assert.ok(validos.has(n), `${p.nome}: ${n}`);
  }
  for (const n of [1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]) assert.ok(plantasDoBiomaMundo(n).length >= 1, String(n));
});

test('Plantas do bioma: sem nome científico repetido e sem campo vazio', () => {
  assert.equal(new Set(PLANTAS_DO_BIOMA.map((p) => p.cientifico)).size, PLANTAS_DO_BIOMA.length);
  assert.equal(new Set(PLANTAS_DO_BIOMA.map((p) => p.nome)).size, PLANTAS_DO_BIOMA.length);
  for (const p of PLANTAS_DO_BIOMA) {
    assert.ok(p.nome.trim(), p.cientifico);
    assert.match(p.cientifico, /^[A-Z][a-z]+ [a-z]+$/, p.nome);
    if (p.fato !== undefined) assert.ok(p.fato.trim(), p.nome);
    if (p.brasil) for (const b of p.brasil) assert.ok(BRASIL.includes(b), `${p.nome}: ${b}`);
  }
});
