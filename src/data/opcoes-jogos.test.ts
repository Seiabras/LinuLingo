import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { OPCOES_DOS_JOGOS } from './opcoes-jogos';
import { JOGOS_COM_EXERCITO } from './loja-jogos';
import { KNOWLEDGE_GAMES } from './jogos-conhecimento';

// o arquivo do tabuleiro de cada jogo, lido do mapa em `components/jogos/tabuleiros.ts`
const TABULEIROS_POR_ARQUIVO = Object.fromEntries(
  [...readFileSync('src/components/jogos/tabuleiros.ts', 'utf8').matchAll(/^\s+'?([a-z0-9-]+)'?: (\w+Board),$/gm)].map((m) => [m[1], m[2]]),
);

test('personalização: todo jogo jogável diz quais opções valem para ele', () => {
  for (const g of KNOWLEDGE_GAMES.filter((x) => x.playable)) assert.ok(OPCOES_DOS_JOGOS[g.id], `${g.id}: falta em OPCOES_DOS_JOGOS`);
});

test('personalização: cada opção só aparece no jogo cujo tabuleiro usa ela', () => {
  assert.ok(Object.keys(TABULEIROS_POR_ARQUIVO).length >= 13, 'leu o mapa dos tabuleiros');
  for (const [jogo, arquivo] of Object.entries(TABULEIROS_POR_ARQUIVO)) {
    const src = readFileSync(`src/components/${arquivo}.tsx`, 'utf8');
    const o = OPCOES_DOS_JOGOS[jogo]!;
    assert.equal(o.tabuleiro, src.includes('<Moldura'), `${jogo}: tema de tabuleiro × moldura`);
    assert.equal(o.dicas, src.includes('prefs.dicas'), `${jogo}: dicas`);
    assert.equal(o.ultimoLance, src.includes('prefs.ultimoLance'), `${jogo}: último lance`);
    assert.equal(o.coordenadas, src.includes('colunas='), `${jogo}: coordenadas`);
    assert.equal(!!o.mancala, src.includes('useVisualMancala'), `${jogo}: tabuleiro e sementes de mancala`);
    assert.equal(!!o.xiangqi, src.includes('prefs.xiangqiPecas'), `${jogo}: estilo das peças do xiangqi`);
    assert.equal(!!o.coresClassicas, src.includes('PecaRedonda') && !JOGOS_COM_EXERCITO.includes(jogo), `${jogo}: cor das peças redondas`);
    assert.equal(!!o.par, src.includes('useParDeCores'), `${jogo}: par de cores`);
  }
});
