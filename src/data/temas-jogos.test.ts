import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { TEMAS_JOGO, TEMAS_LOJA } from './temas-jogos';
import { contraste } from './exercitos-jogos';

test('temas dos jogos: todo tema da loja tem preço, origem, descrição, padrão e as duas cores do padrão', () => {
  for (const t of TEMAS_LOJA) {
    assert.ok(t.preco && t.preco > 0, `${t.id}: preço`);
    assert.ok(t.origem && t.sobre && t.sobre.length > 40, `${t.id}: origem e descrição`);
    assert.ok(t.padrao && t.padraoCores?.length === 2, `${t.id}: padrão da moldura`);
  }
});

test('temas dos jogos: as casas claras e escuras se distinguem, e as preferências aceitam todos os temas', () => {
  const prefs = readFileSync('src/services/jogos-prefs.ts', 'utf8');
  for (const t of Object.values(TEMAS_JOGO)) {
    assert.ok(contraste(t.claro, t.escuro) >= 1.5, `${t.id}: casas parecidas (${contraste(t.claro, t.escuro).toFixed(2)})`);
    assert.ok(prefs.includes(`'${t.id}'`), `${t.id}: falta na lista de temas aceitos (jogos-prefs.ts)`);
  }
});

test('temas dos jogos: todo padrão de moldura tem desenho', () => {
  const visual = readFileSync('src/components/jogos/visual.tsx', 'utf8');
  for (const t of TEMAS_LOJA) assert.ok(visual.includes(`case '${t.padrao}':`), `${t.id}: o padrão ${t.padrao} não tem desenho`);
});
