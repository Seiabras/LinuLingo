import { test } from 'node:test';
import assert from 'node:assert/strict';
import { GRADES_LIGUE4, JOGOS_COM_PAR, PAR_PADRAO, PARES_DE_CORES, parDoJogo } from './pares-cores';

/** Distância entre duas cores #RRGGBB (no espaço RGB, com o peso do olho no verde). */
function distancia(a: string, b: string): number {
  const v = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [v(a), v(b)];
  return Math.sqrt(2 * (x[0]! - y[0]!) ** 2 + 4 * (x[1]! - y[1]!) ** 2 + 3 * (x[2]! - y[2]!) ** 2);
}

test('pares de cores: ids únicos e as duas cores bem diferentes', () => {
  assert.equal(new Set(PARES_DE_CORES.map((p) => p.id)).size, PARES_DE_CORES.length);
  for (const p of PARES_DE_CORES) assert.ok(distancia(p.cores[0], p.cores[1]) > 250, `${p.id}: cores parecidas (${distancia(p.cores[0], p.cores[1]).toFixed(0)})`);
});

test('pares de cores: todo jogo tem um par padrão que existe, e a escolha do jogador vale', () => {
  for (const j of JOGOS_COM_PAR) assert.ok(PARES_DE_CORES.some((p) => p.id === PAR_PADRAO[j]), j);
  assert.deepEqual(parDoJogo('conecta4', {}), ['#E11D48', '#FACC15']);
  assert.deepEqual(parDoJogo('conecta4', { conecta4: 'verde-roxo' }), ['#16A34A', '#7C3AED']);
  assert.equal(new Set(GRADES_LIGUE4.map((g) => g.id)).size, GRADES_LIGUE4.length);
});
