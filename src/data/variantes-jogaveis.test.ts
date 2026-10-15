import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { KNOWLEDGE_GAMES } from './jogos-conhecimento';

// o arquivo do tabuleiro de cada jogo, lido do mapa em `components/jogos/tabuleiros.ts`
const TABULEIROS = Object.fromEntries(
  [...readFileSync('src/components/jogos/tabuleiros.ts', 'utf8').matchAll(/^\s+'?([a-z0-9-]+)'?: (\w+Board),$/gm)].map((m) => [m[1], m[2]]),
);

test('variantes jogáveis: só em jogo com tabuleiro, ids sem repetir, e o tabuleiro conhece cada id', () => {
  for (const g of KNOWLEDGE_GAMES) {
    const ids = (g.variants ?? []).flatMap((v) => (v.jogavel ? [v.jogavel] : []));
    if (!ids.length) continue;
    assert.equal(new Set(ids).size, ids.length, `${g.id}: variante jogável repetida`);
    const arquivo = TABULEIROS[g.id];
    assert.ok(arquivo, `${g.id}: variante jogável num jogo sem tabuleiro`);
    const src = readFileSync(`src/components/${arquivo}.tsx`, 'utf8');
    assert.ok(src.includes(`useVariante('${g.id}')`), `${g.id}: o tabuleiro não lê a variante escolhida`);
    for (const id of ids) assert.ok(src.includes(`'${id}'`), `${g.id}: o tabuleiro não conhece a variante '${id}'`);
  }
});
