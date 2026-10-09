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
import { TETO, ultimoSubnivel } from '../data/tetos';

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
    const ate = Math.max(SUBLEVELS.indexOf(ultimoSubnivel(pack.code)), ...pack.units.map((u) => SUBLEVELS.indexOf(u.level)));
    assert.equal(rota.length, ate + 1, `${pack.code}: uma parada por subnível até o teto`);
    assert.ok(pack.units.every((u) => rota.some((p) => p.unit?.id === u.id)), `${pack.code}: nenhuma unidade fica fora da trilha`);
    assert.equal(rota.at(-1)?.zona, 'terra', `${pack.code}: toda trilha termina em terra`);
    assert.equal(rota.filter((p) => p.desembarque).length, 1, pack.code);
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
  assert.equal(passou(0, 0), true); // sem perguntas, a travessia não tranca a trilha
});

test('aventura: país pela bandeira, para as línguas fora do mapa', () => {
  assert.equal(iso2OfFlag('🇧🇷'), 'BR');
  assert.equal(iso2OfFlag('☀️'), '');
  assert.equal(destinoDoIdioma('tca', '🇧🇷')?.name, 'Brasil');
  assert.equal(destinoDoIdioma('kmr', '☀️')?.name, 'Curdistão');
});

test('aventura: trilha curta (teto baixo) encolhe e desembarca no fim; as moradias seguem a posição na rota inteira', () => {
  const porTeto = (teto: string) => Object.values(PACKS).find((p) => TETO[p.code] === teto)!;
  const a1 = rotaDaAventura(porTeto('A1'));
  assert.deepEqual(a1.map((p) => p.level), ['A1.1', 'A1.2']);
  assert.deepEqual(a1.map((p) => p.id), ['meia-lua', 'terra-1']);
  const a2 = rotaDaAventura(porTeto('A2'));
  assert.deepEqual(a2.map((p) => p.id), ['meia-lua', 'rei-george', 'drake', 'terra-1']);
  assert.deepEqual(a2.map((p) => p.ordem), [0, 1, 6, 8]);
  const b1 = rotaDaAventura(porTeto('B1'));
  assert.equal(b1.length, 8);
  assert.deepEqual(b1.slice(-2).map((p) => p.id), ['drake', 'terra-1']);
  assert.equal(b1.at(-1)?.level, 'B1.4');
  // do B2 pra cima, as 8 paradas da Antártica inteiras
  const b2 = rotaDaAventura(porTeto('B2'));
  assert.equal(b2.length, 12);
  assert.deepEqual(b2.slice(0, PARADAS_ANTARTICA.length).map((p) => p.ordem), PARADAS_ANTARTICA.map((_, i) => i));
  assert.equal(b2[PARADAS_ANTARTICA.length].desembarque, true);
});

// feroês e suaíli: trilha até o C2 (set/2026), escrita antes do sistema de teto nascer. Investigado em
// 09/10/2026 (ver "O que chamou a atenção" em TETO-DOS-IDIOMAS.md): o conteúdo é bem fontado (não é o
// caso de "sem fonte citada"), mas nenhum dos dois preenche o critério do C2 nem vira exceção nova tipo
// o islandês — feroês tem universidade na língua, mas não o acervo nacional enorme que o islandês tem
// junto; suaíli passa dos 90 mil artigos na Wikipédia própria, mas fica com 218 editores ativos (not
// quite os ~250 exigidos) e o ensino superior é majoritariamente em inglês. Ficam grandfathered no C1
// oficial: a regra de não inventar conteúdo além do teto vale pro que é novo, não apaga o que já existia.
const ACIMA_DO_TETO_A_REVISAR = new Set(['fo', 'sw']);

test('tetos: todo idioma do app tem teto, e nenhum curso foi além do próprio teto', () => {
  for (const pack of Object.values(PACKS)) {
    if (ACIMA_DO_TETO_A_REVISAR.has(pack.code)) continue;
    assert.ok(TETO[pack.code], `${pack.code}: sem teto em src/data/tetos.ts (e TETO-DOS-IDIOMAS.md)`);
    const ate = pack.incomplete?.until ?? 'C2';
    assert.ok(SUBLEVELS.indexOf(ate) <= SUBLEVELS.indexOf(ultimoSubnivel(pack.code)), `${pack.code}: conteúdo até ${ate}, além do teto ${TETO[pack.code]}`);
  }
});
