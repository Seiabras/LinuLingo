import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, idx, jogar, lancesLegais, type AlquerqueState, type JogadorA } from './alquerque-engine';
import { lanceAlquerque } from './alquerque-ia';

function pos(pecas: [number, number, JogadorA][], vez: JogadorA = 0): AlquerqueState {
  const s = createInitialState('soprada');
  const casas: (JogadorA | null)[] = Array(25).fill(null);
  const ids: (number | null)[] = Array(25).fill(null);
  const visitados: Record<number, number[]> = {};
  pecas.forEach(([r, c, j], n) => {
    casas[idx(r, c)] = j;
    ids[idx(r, c)] = n;
    visitados[n] = [idx(r, c)];
  });
  return { ...s, casas, ids, visitados, vez };
}

test('alquerque, peça soprada: quem podia capturar e andou perde a peça que se mexeu', () => {
  // a clara em (3,2) pode saltar a escura em (2,2); a outra clara em (4,0)
  const s = pos([
    [3, 2, 0],
    [4, 0, 0],
    [2, 2, 1],
    [0, 4, 1],
  ]);
  assert.ok(lancesLegais(s).some((l) => l.capturada === null), 'o lance simples continua possível');
  const f = jogar(s, { de: idx(3, 2), para: idx(3, 3), capturada: null });
  assert.equal(f.casas[idx(3, 3)], null, 'a peça que se mexeu foi soprada');
  assert.equal(f.soprada, idx(3, 3));
  assert.equal(f.vez, 1);
});

test('alquerque, peça soprada: se outra peça andou, sai a que podia capturar; capturar não sopra', () => {
  const s = pos([
    [3, 2, 0],
    [4, 0, 0],
    [2, 2, 1],
    [0, 4, 1],
  ]);
  const f = jogar(s, { de: idx(4, 0), para: idx(4, 1), capturada: null });
  assert.equal(f.casas[idx(3, 2)], null, 'a que devia ter capturado saiu');
  assert.equal(f.casas[idx(4, 1)], 0);
  const c = jogar(s, { de: idx(3, 2), para: idx(1, 2), capturada: idx(2, 2) });
  assert.equal(c.soprada ?? null, null);
  assert.equal(c.casas[idx(2, 2)], null);
  // sem captura possível, ninguém é soprado
  const calmo = pos([
    [4, 0, 0],
    [0, 4, 1],
  ]);
  assert.equal(jogar(calmo, { de: idx(4, 0), para: idx(3, 0), capturada: null }).soprada, null);
  // o Linu captura em vez de perder a peça
  const l = lanceAlquerque(s, 'medio', () => 0.5)!;
  assert.notEqual(l.capturada, null);
});
