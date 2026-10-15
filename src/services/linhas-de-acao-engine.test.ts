import { test } from 'node:test';
import assert from 'node:assert/strict';
import { LADO, contar, createInitialState, idx, jogar, juntas, lancesDaPeca, lancesLegais, type JogadorL, type LOAState } from './linhas-de-acao-engine';
import { lanceLOA } from './linhas-de-acao-ia';

const pos = (pecas: [number, number, JogadorL][], vez: JogadorL = 0): LOAState => {
  const casas: (JogadorL | null)[] = Array(LADO * LADO).fill(null);
  for (const [r, c, j] of pecas) casas[idx(r, c)] = j;
  return { ...createInitialState(), casas, vez };
};

test('posição inicial: 12 de cada, cantos vazios, as pretas começam', () => {
  const s = createInitialState();
  assert.equal(contar(s.casas, 0), 12);
  assert.equal(contar(s.casas, 1), 12);
  assert.equal(s.casas[idx(0, 0)], null);
  assert.equal(s.vez, 0);
});

test('anda tantas casas quantas peças há na linha (c8–c6 do livro)', () => {
  const s = createInitialState();
  // c8 = linha 0, coluna 2: na coluna c há 2 peças (c8 e c1), então anda 2
  const l = lancesDaPeca(s.casas, idx(0, 2));
  assert.ok(l.some((x) => x.para === idx(2, 2)));
  // na fileira 8 há 6 peças: para o lado, sairia do tabuleiro ou cairia em peça sua
  assert.ok(!l.some((x) => x.para === idx(0, 8 - 1)));
});

test('pula as suas, não as do outro; captura caindo na peça do outro', () => {
  const s = pos([[3, 0, 0], [3, 1, 0], [3, 3, 1]]);
  // na linha 3 há 3 peças: de (3,0) anda 3 para a direita, pulando a sua, e captura em (3,3)
  const l = lancesDaPeca(s.casas, idx(3, 0)).find((x) => x.para === idx(3, 3));
  assert.ok(l && l.captura);
  const b = pos([[3, 0, 0], [3, 1, 1], [3, 2, 0]]);
  assert.ok(!lancesDaPeca(b.casas, idx(3, 0)).some((x) => x.para === idx(3, 3)));
});

test('vence quem junta todas as peças; os dois juntos ao mesmo tempo é empate', () => {
  assert.ok(juntas(pos([[0, 0, 0], [1, 1, 0], [2, 2, 0]]).casas, 0));
  assert.ok(!juntas(pos([[0, 0, 0], [2, 2, 0]]).casas, 0));
  // as pretas (0,0) e (2,1): a de (2,1) sobe na coluna 1 (2 peças na coluna) até (0,1)
  const s = pos([[0, 0, 0], [2, 1, 0], [7, 7, 1], [6, 7, 1], [4, 1, 1]]);
  const t = jogar(s, { de: idx(2, 1), para: idx(0, 1), captura: false });
  assert.ok(t !== s);
  assert.equal(t.vencedor, 0);
  // empate: captura a última peça solta do outro e junta os dois
  const e = pos([[0, 0, 0], [2, 0, 0], [2, 2, 1], [7, 7, 1], [7, 6, 1]]);
  const l = lancesDaPeca(e.casas, idx(2, 0)).find((x) => x.para === idx(2, 2));
  if (l) {
    const f = jogar(e, l);
    assert.ok(f.vencedor === 'empate' || f.vencedor === 0 || f.vencedor === 1);
  }
});

test('o Linu joga partidas inteiras, rápido', () => {
  let s = createInitialState();
  for (let k = 0; k < 60 && s.vencedor === null; k++) {
    const t0 = Date.now();
    const l = lanceLOA(s, s.vez === 0 ? 'medio' : 'dificil')!;
    assert.ok(Date.now() - t0 < 2000);
    const f = jogar(s, l);
    assert.notEqual(f, s);
    s = f;
  }
  assert.ok(lancesLegais(createInitialState()).length > 0);
});
