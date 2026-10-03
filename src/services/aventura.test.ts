/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { destinoDoIdioma, iso2OfFlag, rotaDaAventura } from './aventura';
import { buildTravessia, passou, travessiaTotal } from './travessia';
import { PARADAS_ANTARTICA } from '../data/aventura';
import { AMIGOS_LINU } from '../data/amigos-linu';
import { PACKS } from '../data/idiomas';
import { ROMENO } from '../data/ro';
import { SUBLEVELS } from '../types';

test('aventura: 15 paradas, uma por subnível, a Antártica primeiro e o país do idioma no fim', () => {
  const rota = rotaDaAventura(ROMENO);
  assert.deepEqual(
    rota.map((p) => p.level),
    [...SUBLEVELS],
  );
  assert.equal(rota[0].name, 'Ilha Meia-Lua');
  assert.ok(rota.slice(0, PARADAS_ANTARTICA.length).every((p) => p.zona !== 'terra'));
  const terra = rota.slice(PARADAS_ANTARTICA.length);
  assert.ok(terra.every((p) => p.zona === 'terra'));
  assert.equal(terra.filter((p) => p.desembarque).length, 1);
  assert.equal(terra[0].name, 'Bucareste');
  assert.ok(terra[0].fala.includes('Romênia'));
  assert.ok(rota.every((p) => p.unit?.level === p.level));
});

test('aventura: os amigos das paradas existem', () => {
  for (const p of PARADAS_ANTARTICA) if (p.amigo) assert.ok(AMIGOS_LINU.some((a) => a.id === p.amigo), p.amigo);
});

test('aventura: todo idioma tem rota com nomes e desembarca num país', () => {
  const semPais: string[] = [];
  for (const pack of Object.values(PACKS)) {
    const rota = rotaDaAventura(pack);
    assert.equal(rota.length, SUBLEVELS.length, pack.code);
    assert.equal(new Set(rota.map((p) => p.id)).size, rota.length, pack.code);
    for (const p of rota) assert.ok(p.name.trim() && p.fala.trim(), `${pack.code} ${p.level}`);
    if (!destinoDoIdioma(pack.code, pack.flag)) semPais.push(pack.code);
  }
  // só o que não tem nem país no mapa nem bandeira de país (o Linu desembarca na “terra do …”)
  assert.ok(semPais.length <= 2, `sem país: ${semPais.join(', ')}`);
});

test('travessia: toda unidade de todo idioma gera um desafio válido', () => {
  for (const pack of Object.values(PACKS)) {
    for (const unit of pack.units) {
      const t = buildTravessia(unit, () => 0.42);
      const where = `${pack.code} ${unit.level}`;
      assert.ok(travessiaTotal(t) >= 4, `${where}: só ${travessiaTotal(t)} perguntas`);
      for (const c of [...t.escuta, ...t.decisao]) {
        assert.ok(c.options.includes(c.answer), where);
        assert.equal(new Set(c.options.map((o) => o.trim().toLowerCase())).size, c.options.length, `${where}: opções repetidas`);
      }
    }
  }
});

test('travessia: 80% para passar', () => {
  assert.equal(passou(6, 7), true);
  assert.equal(passou(5, 7), false);
  assert.equal(passou(0, 0), false);
});

test('aventura: país pela bandeira, para as línguas fora do mapa', () => {
  assert.equal(iso2OfFlag('🇧🇷'), 'BR');
  assert.equal(iso2OfFlag('☀️'), '');
  assert.equal(destinoDoIdioma('tca', '🇧🇷')?.name, 'Brasil');
});
