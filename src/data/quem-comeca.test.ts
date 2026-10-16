import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { KNOWLEDGE_GAMES } from './jogos-conhecimento';
import { OUTROS_JOGOS } from './outros-jogos';
import { SEM_QUEM_COMECA } from './quem-comeca';
import { ladoDoLinu, primeiroAJogar } from '../services/quem-comeca-regra';

const TABULEIROS = Object.fromEntries(
  [...readFileSync('src/components/jogos/tabuleiros.ts', 'utf8').matchAll(/^\s+'?([a-z0-9-]+)'?: (\w+Board),$/gm)].map((m) => [m[1], m[2]]),
);
const COMPONENTES = Object.fromEntries(
  [...readFileSync('src/components/outros-jogos/registro.ts', 'utf8').matchAll(/^\s+'?([a-z0-9-]+)'?: (\w+Jogo),$/gm)].map((m) => [m[1], m[2]]),
);

test('quem começa: todo jogo de tabuleiro com o Linu tem a opção ou está na lista das exceções', () => {
  assert.ok(Object.keys(TABULEIROS).length > 30, 'leu o mapa dos tabuleiros');
  for (const g of KNOWLEDGE_GAMES.filter((x) => x.linu && x.playable)) {
    if (SEM_QUEM_COMECA[g.id]) continue;
    const arquivo = TABULEIROS[g.id];
    assert.ok(arquivo, `${g.id}: jogo com o Linu sem tabuleiro no mapa`);
    const src = readFileSync(`src/components/${arquivo}.tsx`, 'utf8');
    assert.ok(/useLadoDoLinu(<[^>]*>)?\(/.test(src), `${g.id}: o tabuleiro não usa a escolha “quem começa” (useLadoDoLinu) nem está em SEM_QUEM_COMECA`);
  }
});

test('quem começa: todo jogo do Lazer com o Linu tem a opção ou está na lista das exceções', () => {
  for (const g of OUTROS_JOGOS.filter((x) => x.linu && x.playable)) {
    if (SEM_QUEM_COMECA[g.id]) continue;
    const src = readFileSync(`src/components/outros-jogos/${COMPONENTES[g.id]}.tsx`, 'utf8');
    assert.ok(/useLadoDoLinu(<[^>]*>)?\(/.test(src) || src.includes('primeiroAJogar'), `${g.id}: sem a escolha “quem começa” e fora de SEM_QUEM_COMECA`);
  }
});

test('quem começa: as exceções são jogos que existem e têm o Linu, com o motivo escrito', () => {
  const ids = new Set([...KNOWLEDGE_GAMES, ...OUTROS_JOGOS].filter((g) => g.linu).map((g) => g.id));
  for (const [id, motivo] of Object.entries(SEM_QUEM_COMECA)) {
    assert.ok(ids.has(id), `${id}: exceção de um jogo que não tem o Linu`);
    assert.ok(motivo.length > 20, `${id}: motivo curto demais`);
  }
});

test('quem começa: “Eu começo” põe o Linu no outro lado, “O Linu começa” no lado que começa, e o sorteio usa os dois', () => {
  assert.equal(ladoDoLinu('eu', 'w', 'b'), 'b');
  assert.equal(ladoDoLinu('linu', 'w', 'b'), 'w');
  assert.equal(ladoDoLinu('sorteio', 'w', 'b', () => 0.2), 'w');
  assert.equal(ladoDoLinu('sorteio', 'w', 'b', () => 0.8), 'b');
  assert.equal(primeiroAJogar('eu', 0, 1), 0);
  assert.equal(primeiroAJogar('linu', 0, 1), 1);
});
