import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CONFIGS, ONCA, ONCA_TOCAS, createInitialState, grafo, jogar, passosLegais } from './caca-engine';
import { lanceCaca } from './caca-ia';

test('jogo da onça com duas tocas: a segunda embaixo, com as mesmas ligações da de cima', () => {
  assert.equal(ONCA_TOCAS.pontos.length, ONCA.pontos.length + 6);
  assert.equal(ONCA_TOCAS.ligacoes.length, ONCA.ligacoes.length + 10);
  assert.equal(CONFIGS['onca-tocas'], ONCA_TOCAS);
  const s = createInitialState(ONCA_TOCAS);
  assert.equal(s.board.filter((v) => v === 'p').length, 14);
  assert.equal(s.board.filter((v) => v === 'h').length, 1);
  // o meio da borda de baixo (22) tem 3 ligações a mais, para a toca nova
  assert.equal(grafo(ONCA_TOCAS).vizinhos[22]!.length, grafo(ONCA).vizinhos[22]!.length + 3);
});

test('jogo da onça com duas tocas: dá para saltar para dentro da toca de baixo', () => {
  const base = createInitialState(ONCA_TOCAS);
  const board = base.board.map(() => null as 'h' | 'p' | null);
  board[17] = 'h'; // (2, 5)
  board[22] = 'p'; // (2, 6), o vértice da toca de baixo
  board[0] = 'p';
  const s = { ...base, board, turn: 'h' as const };
  const salto = passosLegais(s).find((p) => p.captura === 22);
  assert.ok(salto, 'a onça salta o cachorro do vértice');
  assert.equal(ONCA_TOCAS.pontos[salto!.para]!.y, 7);
  const f = jogar(s, salto!);
  assert.equal(f.capturas, 1);
  assert.ok(lanceCaca(createInitialState(ONCA_TOCAS), 'medio', () => 0.5));
});
