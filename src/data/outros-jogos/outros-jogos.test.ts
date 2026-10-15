import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { AREAS_JOGO, GRUPOS_CARTAS, OUTROS_JOGOS } from './index';

test('outros jogos: ids únicos e nome/emoji/área válida em todo jogo', () => {
  const ids = new Set<string>();
  const areas = new Set(AREAS_JOGO.map((a) => a.id));
  for (const g of OUTROS_JOGOS) {
    assert.ok(!ids.has(g.id), `id repetido: ${g.id}`);
    ids.add(g.id);
    assert.ok(g.name.length > 0, `${g.id} sem nome`);
    assert.ok(g.emoji.length > 0, `${g.id} sem emoji`);
    assert.ok(areas.has(g.area), `${g.id}: área desconhecida “${g.area}”`);
  }
});

test('outros jogos: todo jogo "pronto" tem história, regras e pelo menos uma variante', () => {
  for (const g of OUTROS_JOGOS.filter((x) => x.status === 'pronto')) {
    assert.ok(g.about && g.about.length > 40, `${g.id}: história muito curta ou ausente`);
    assert.ok(g.rules && g.rules.length >= 2, `${g.id}: menos de 2 regras`);
    assert.ok(g.variants && g.variants.length >= 1, `${g.id}: sem nenhuma variante`);
    for (const v of g.variants!) {
      assert.ok(v.name && v.where && v.text.length > 20, `${g.id}: variante "${v.name}" incompleta`);
    }
  }
});

test('outros jogos: todo jogo "em breve" não promete conteúdo que não tem', () => {
  for (const g of OUTROS_JOGOS.filter((x) => x.status === 'em breve')) {
    assert.equal(g.about, undefined, `${g.id}: "em breve" não devia ter história ainda`);
    assert.equal(g.rules, undefined, `${g.id}: "em breve" não devia ter regras ainda`);
    assert.ok(!g.playable, `${g.id}: "em breve" não pode ser jogável`);
  }
});

test('outros jogos: todo jogo jogável tem componente no registro', () => {
  // o registro importa componentes de tela, que não rodam no Node: confere pelo texto do arquivo
  const registro = readFileSync(new URL('../../components/outros-jogos/registro.ts', import.meta.url), 'utf8');
  for (const g of OUTROS_JOGOS.filter((x) => x.playable)) {
    assert.match(registro, new RegExp(`^\\s*'?${g.id}'?\\s*:`, 'm'), `${g.id}: jogável, mas sem componente em registro.ts`);
  }
});

test('outros jogos: Cartas e Azar estreiam com o Hanafuda e a roleta', () => {
  assert.ok(OUTROS_JOGOS.some((g) => g.area === 'cartas' && g.id === 'hanafuda' && g.playable && g.linu));
  assert.ok(OUTROS_JOGOS.some((g) => g.area === 'azar' && g.id === 'roleta' && g.playable));
});

test('outros jogos: só os de Cartas têm subgrupo, e todo jogo de Cartas tem um subgrupo válido', () => {
  const grupos = new Set(GRUPOS_CARTAS.map((g) => g.id));
  for (const g of OUTROS_JOGOS) {
    if (g.area === 'cartas') assert.ok(g.grupo && grupos.has(g.grupo), `${g.id}: sem subgrupo de Cartas`);
    else assert.equal(g.grupo, undefined, `${g.id}: subgrupo fora de Cartas`);
  }
});

test('outros jogos: todo jogo "pronto" explica de onde vem o nome (etimologia)', () => {
  for (const g of OUTROS_JOGOS.filter((x) => x.status === 'pronto')) {
    assert.ok(g.etimologia && g.etimologia.length > 40, `${g.id}: sem etimologia (ou curta demais)`);
  }
});
