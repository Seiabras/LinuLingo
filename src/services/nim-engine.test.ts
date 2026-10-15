import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createInitialState, emBinario, jogar, lanceVencedor, lancesLegais, somaNim, type NimState } from './nim-engine';
import { lanceNim } from './nim-ia';

/** quem ganha, jogando os dois perfeito, a partir de `pilhas` com a vez de quem joga (busca completa) */
function ganhaQuemJoga(pilhas: number[], misere: boolean, memo = new Map<string, boolean>()): boolean {
  const k = pilhas.join(',');
  if (memo.has(k)) return memo.get(k)!;
  if (pilhas.every((n) => n === 0)) return misere; // o outro tirou o último
  let r = false;
  for (let i = 0; i < pilhas.length && !r; i++)
    for (let q = 1; q <= pilhas[i]! && !r; q++) {
      const p = [...pilhas];
      p[i]! -= q;
      if (!ganhaQuemJoga(p, misere, memo)) r = true;
    }
  memo.set(k, r);
  return r;
}

test('tira de uma pilha só, pelo menos 1, no máximo o que tem', () => {
  const s = createInitialState([3, 4, 5]);
  assert.equal(lancesLegais(s).length, 12);
  assert.equal(jogar(s, { pilha: 0, quantos: 4 }), s);
  assert.equal(jogar(s, { pilha: 0, quantos: 0 }), s);
  const t = jogar(s, { pilha: 2, quantos: 5 });
  assert.deepEqual(t.pilhas, [3, 4, 0]);
  assert.equal(t.vez, 1);
});

test('normal: quem tira o último ganha; misère: perde', () => {
  const n = jogar(createInitialState([1]), { pilha: 0, quantos: 1 });
  assert.equal(n.vencedor, 0);
  const m = jogar(createInitialState([1], true), { pilha: 0, quantos: 1 });
  assert.equal(m.vencedor, 1);
});

test('soma nim: 3-4-5 dá 2; 1-3-5-7 dá 0; binário', () => {
  assert.equal(somaNim([3, 4, 5]), 2);
  assert.equal(somaNim([1, 3, 5, 7]), 0);
  assert.equal(emBinario(5, 3), '101');
});

test('o lance vencedor confere com a busca completa, normal e misère', () => {
  for (const misere of [false, true]) {
    const memo = new Map<string, boolean>();
    for (let a = 0; a <= 5; a++)
      for (let b = 0; b <= 5; b++)
        for (let c = 0; c <= 5; c++) {
          const p = [a, b, c];
          if (p.every((x) => x === 0)) continue;
          const l = lanceVencedor(p, misere);
          const ganha = ganhaQuemJoga(p, misere, memo);
          assert.equal(l !== null, ganha, `${p} ${misere ? 'misère' : 'normal'}`);
          if (l) {
            const q = [...p];
            q[l.pilha]! -= l.quantos;
            assert.ok(l.quantos >= 1 && !ganhaQuemJoga(q, misere, memo), `lance ruim em ${p}`);
          }
        }
  }
});

test('o Linu difícil ganha sempre de uma posição ganha', () => {
  for (const misere of [false, true]) {
    for (const pilhas of [[3, 4, 5], [1, 3, 5, 6], [2, 2, 3]]) {
      if (!lanceVencedor(pilhas, misere)) continue;
      let s: NimState = createInitialState(pilhas, misere, 1);
      const rng = () => 0.37;
      while (s.vencedor === null) s = jogar(s, lanceNim(s, s.vez === 1 ? 'dificil' : 'facil', rng)!);
      assert.equal(s.vencedor, 1, `${pilhas} ${misere}`);
    }
  }
});
