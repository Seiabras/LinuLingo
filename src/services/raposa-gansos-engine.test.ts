import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARESTAS, CENTRO, MINIMO_GANSOS, PONTOS, createInitialState, idx, jogar, lancesLegais, type RGState } from './raposa-gansos-engine';
import { lanceRG } from './raposa-gansos-ia';

test('tabuleiro em cruz de 33 pontos, com diagonais', () => {
  assert.equal(PONTOS.length, 33);
  assert.ok(ARESTAS.some(([a, b]) => a === idx(2, 2) && b === idx(3, 3)));
  assert.ok(!ARESTAS.some(([a, b]) => a === idx(2, 3) && b === idx(3, 4)));
});

test('as duas versões: 13 gansos (1870) e 15 (moderna); a raposa no centro; os gansos começam', () => {
  const a = createInitialState('1870');
  const b = createInitialState('moderna');
  assert.equal(a.gansos.length, 13);
  assert.equal(b.gansos.length, 15);
  assert.equal(a.raposa, CENTRO);
  assert.equal(a.vez, 'gansos');
});

test('gansos nunca andam para trás; em 1870, nem na diagonal', () => {
  const pos = (versao: '1870' | 'moderna'): RGState => ({ ...createInitialState(versao), gansos: [idx(2, 2)], raposa: idx(6, 4), vez: 'gansos' });
  const a = lancesLegais(pos('1870')).map((l) => (l.tipo === 'mover' ? l.para : -1));
  assert.deepEqual(a.sort((x, y) => x - y), [idx(2, 1), idx(2, 3), idx(3, 2)].sort((x, y) => x - y));
  const b = lancesLegais(pos('moderna')).map((l) => (l.tipo === 'mover' ? l.para : -1));
  assert.ok(b.includes(idx(3, 3)) && b.includes(idx(3, 1)));
  assert.ok(!b.includes(idx(1, 2)));
});

test('a raposa salta e captura, pode continuar ou parar', () => {
  const s: RGState = { ...createInitialState('1870'), raposa: idx(3, 3), gansos: [idx(3, 4), idx(2, 4), idx(0, 2), idx(0, 3), idx(0, 4), idx(1, 2), idx(1, 4), idx(2, 0)], vez: 'raposa' };
  let t = jogar(s, { tipo: 'mover', de: idx(3, 3), para: idx(3, 5), capturado: idx(3, 4) });
  assert.equal(t.gansos.length, 7);
  assert.equal(t.vez, 'raposa');
  assert.ok(t.seq);
  assert.ok(lancesLegais(t).some((l) => l.tipo === 'parar'));
  t = jogar(t, { tipo: 'parar' });
  assert.equal(t.vez, 'gansos');
});

test('fim: raposa presa (gansos vencem); com menos de 7 gansos, a raposa vence', () => {
  const presa: RGState = { ...createInitialState('1870'), raposa: idx(0, 2), gansos: [idx(0, 3), idx(1, 2), idx(1, 3), idx(0, 4), idx(2, 2), idx(2, 4), idx(1, 4), idx(6, 3), idx(5, 3)], vez: 'gansos' };
  const t = jogar(presa, { tipo: 'mover', de: idx(5, 3), para: idx(6, 2), capturado: null });
  // o ganso de (5,3) não pode ir para (6,2) (seria diagonal em 1870): procura um lance válido
  const l = lancesLegais(presa).find((x) => x.tipo === 'mover' && x.de === idx(5, 3))!;
  const u = jogar(presa, l);
  assert.equal(t, presa);
  assert.equal(u.vencedor, 'gansos');
  const poucos: RGState = { ...createInitialState('1870'), raposa: idx(3, 3), gansos: [idx(3, 4), idx(0, 2), idx(0, 3), idx(0, 4), idx(1, 2), idx(1, 3), idx(1, 4)], vez: 'raposa' };
  assert.equal(poucos.gansos.length, MINIMO_GANSOS);
  assert.equal(jogar(poucos, { tipo: 'mover', de: idx(3, 3), para: idx(3, 5), capturado: idx(3, 4) }).vencedor, 'raposa');
});

test('o Linu joga dos dois lados, nas duas versões, rápido', () => {
  for (const versao of ['1870', 'moderna'] as const) {
    let s = createInitialState(versao);
    for (let k = 0; k < 120 && s.vencedor === null; k++) {
      const t0 = Date.now();
      const l = lanceRG(s, s.vez === 'gansos' ? 'dificil' : 'medio')!;
      assert.ok(Date.now() - t0 < 2000);
      const f = jogar(s, l);
      assert.notEqual(f, s);
      s = f;
    }
  }
  // a raposa captura quando pode
  const s: RGState = { ...createInitialState('1870'), raposa: idx(3, 3), gansos: [idx(3, 4), idx(0, 2), idx(0, 3), idx(0, 4), idx(1, 2), idx(1, 3), idx(1, 4), idx(2, 0)], vez: 'raposa' };
  const l = lanceRG(s, 'dificil')!;
  assert.ok(l.tipo === 'mover' && l.capturado === idx(3, 4));
});
