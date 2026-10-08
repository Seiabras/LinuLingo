import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KNOWLEDGE_GAMES } from './jogos-conhecimento';

test('jogos do conhecimento: ids únicos e nome/emoji em todo jogo', () => {
  const ids = new Set<string>();
  for (const g of KNOWLEDGE_GAMES) {
    assert.ok(!ids.has(g.id), `id repetido: ${g.id}`);
    ids.add(g.id);
    assert.ok(g.name.length > 0, `${g.id} sem nome`);
    assert.ok(g.emoji.length > 0, `${g.id} sem emoji`);
  }
});

test('jogos do conhecimento: todo jogo "pronto" tem história, regras e pelo menos uma variante', () => {
  for (const g of KNOWLEDGE_GAMES.filter((x) => x.status === 'pronto')) {
    assert.ok(g.about && g.about.length > 40, `${g.id}: história muito curta ou ausente`);
    assert.ok(g.rules && g.rules.length >= 2, `${g.id}: menos de 2 regras`);
    assert.ok(g.variants && g.variants.length >= 1, `${g.id}: sem nenhuma variante`);
    for (const v of g.variants!) {
      assert.ok(v.name && v.where && v.text.length > 20, `${g.id}: variante "${v.name}" incompleta`);
    }
  }
});

test('jogos do conhecimento: todo jogo "em breve" não promete conteúdo que não tem', () => {
  for (const g of KNOWLEDGE_GAMES.filter((x) => x.status === 'em breve')) {
    assert.equal(g.about, undefined, `${g.id}: "em breve" não devia ter história ainda`);
    assert.equal(g.rules, undefined, `${g.id}: "em breve" não devia ter regras ainda`);
  }
});
