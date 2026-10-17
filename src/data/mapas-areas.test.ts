import { test } from 'node:test';
import assert from 'node:assert/strict';
import { WORLD } from './mapa-mundi';
import { KNOWLEDGE_GAMES } from './jogos-conhecimento';
import { JOGOS_FORA_DO_MAPA, OUTROS_FORA_DO_MAPA, PAISES_DO_JOGO, PAISES_DO_OUTRO_JOGO } from './jogos-paises';
import { OUTROS_JOGOS } from './outros-jogos';
import { paisDaPessoa, PESSOAS_BRASIL, PESSOAS_MUNDO } from './psicologia/pessoas';
import { PESSOAS_MUSICA } from './musica/mundo';

const ISOS = new Set(WORLD.map((c) => c.iso));

test('todo jogo pronto está no mapa ou tem o motivo de ficar fora', () => {
  for (const g of KNOWLEDGE_GAMES.filter((j) => j.status === 'pronto')) {
    assert.ok(PAISES_DO_JOGO[g.id] || JOGOS_FORA_DO_MAPA[g.id], `${g.id} sem país no mapa`);
  }
  for (const [id, paises] of Object.entries(PAISES_DO_JOGO)) {
    assert.ok(
      KNOWLEDGE_GAMES.some((g) => g.id === id),
      `${id} não é um jogo`,
    );
    for (const iso of paises) assert.ok(ISOS.has(iso), `${id}: ${iso} não está no mapa`);
  }
});

test('todo outro jogo pronto do Lazer está no mapa ou tem o motivo de ficar fora', () => {
  for (const g of OUTROS_JOGOS.filter((j) => j.status === 'pronto')) {
    assert.ok(PAISES_DO_OUTRO_JOGO[g.id] || OUTROS_FORA_DO_MAPA[g.id], `${g.id} sem país no mapa`);
  }
  for (const [id, paises] of Object.entries(PAISES_DO_OUTRO_JOGO)) {
    assert.ok(
      OUTROS_JOGOS.some((g) => g.id === id),
      `${id} não é um jogo`,
    );
    for (const iso of paises) assert.ok(ISOS.has(iso), `${id}: ${iso} não está no mapa`);
  }
});

test('toda pessoa da psicologia e da música tem um país do mapa', () => {
  for (const p of [...PESSOAS_MUNDO, ...PESSOAS_BRASIL]) assert.ok(ISOS.has(paisDaPessoa(p) ?? ''), `${p.nome} (${p.onde}) sem país`);
  for (const p of PESSOAS_MUSICA) assert.ok(ISOS.has(p.pais), `${p.nome} sem país`);
});
