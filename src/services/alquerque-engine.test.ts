import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARESTAS, LIMITE_SEM_CAPTURA, contar, createInitialState, idx, jogar, lancesLegais, temDiagonal, type AlquerqueState, type JogadorA, type RegraA } from './alquerque-engine';
import { lanceAlquerque } from './alquerque-ia';

/** monta uma posição: lista de [linha, coluna, dono] */
function pos(pecas: [number, number, JogadorA][], vez: JogadorA = 0, regra: RegraA = 'livro'): AlquerqueState {
  const s = createInitialState(regra);
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

test('tabuleiro 5×5 com diagonais nos pontos pares: 56 linhas', () => {
  assert.ok(temDiagonal(idx(0, 0)) && temDiagonal(idx(2, 2)) && !temDiagonal(idx(0, 1)));
  assert.equal(ARESTAS.length, 56);
});

test('posição inicial: 12 de cada lado, o meio vazio; o primeiro lance é forçado para o meio', () => {
  const s = createInitialState();
  assert.equal(contar(s, 0), 12);
  assert.equal(contar(s, 1), 12);
  assert.equal(s.casas[idx(2, 2)], null);
  const l = lancesLegais(s);
  assert.ok(l.length > 0 && l.every((x) => x.para === idx(2, 2) && x.capturada === null));
});

test('o segundo jogador captura saltando, como diz o livro', () => {
  let s = createInitialState();
  s = jogar(s, { de: idx(3, 2), para: idx(2, 2), capturada: null });
  const caps = lancesLegais(s).filter((l) => l.capturada !== null);
  assert.ok(caps.length > 0);
  const t = jogar(s, caps[0]!);
  assert.equal(contar(t, 0), 11);
});

test('livro: captura opcional; Bell: obrigatória', () => {
  const pecas: [number, number, JogadorA][] = [
    [2, 2, 0],
    [1, 2, 1],
    [4, 0, 0],
  ];
  const livro = lancesLegais(pos(pecas));
  assert.ok(livro.some((l) => l.capturada === null));
  const bell = lancesLegais(pos(pecas, 0, 'bell'));
  assert.ok(bell.length > 0 && bell.every((l) => l.capturada !== null));
});

test('saltos em sequência: a mesma peça continua enquanto der', () => {
  const s = pos([
    [4, 0, 0],
    [3, 0, 1],
    [1, 0, 1],
    [4, 4, 1],
  ]);
  let t = jogar(s, { de: idx(4, 0), para: idx(2, 0), capturada: idx(3, 0) });
  assert.equal(t.vez, 0);
  assert.equal(t.seq, idx(2, 0));
  assert.deepEqual(lancesLegais(t).map((l) => l.para), [idx(0, 0)]);
  t = jogar(t, lancesLegais(t)[0]!);
  assert.equal(contar(t, 1), 1);
  assert.equal(t.vez, 1);
});

test('Bell: não anda para trás nem volta a um ponto onde esteve; na última fileira só captura', () => {
  const s = pos([[2, 2, 0], [0, 4, 1]], 0, 'bell');
  const l = lancesLegais(s);
  assert.ok(l.every((x) => Math.floor(x.para / 5) <= 2), 'andou para trás');
  // anda para o lado e não pode voltar
  let t = jogar(s, { de: idx(2, 2), para: idx(2, 1), capturada: null });
  t = { ...t, vez: 0 };
  assert.ok(!lancesLegais(t).some((x) => x.para === idx(2, 2)));
  const fundo = pos([[0, 1, 0], [4, 4, 1]], 0, 'bell');
  assert.equal(lancesLegais(fundo).length, 0);
});

test('fim: sem peças, sem lance ou 40 lances sem captura', () => {
  const ultima = pos([[2, 2, 0], [1, 2, 1]]);
  const t = jogar(ultima, { de: idx(2, 2), para: idx(0, 2), capturada: idx(1, 2) });
  assert.equal(t.vencedor, 0);
  const preso = pos([[0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 0], [2, 0, 0], [2, 2, 0], [0, 2, 0], [4, 4, 0]], 0);
  const p2 = jogar(preso, { de: idx(4, 4), para: idx(4, 3), capturada: null });
  assert.equal(p2.vencedor, 0); // as escuras ficaram sem lance
  const lento = { ...pos([[4, 0, 0], [0, 4, 1]]), semCaptura: LIMITE_SEM_CAPTURA - 1 };
  assert.equal(jogar(lento, lancesLegais(lento)[0]!).vencedor, 'empate');
});

test('o Linu captura quando pode e joga partidas inteiras rápido', () => {
  const s = pos([[2, 2, 1], [3, 2, 0], [4, 4, 0]], 1);
  for (const n of ['medio', 'dificil'] as const) assert.equal(lanceAlquerque(s, n)?.capturada, idx(3, 2));
  for (const regra of ['livro', 'bell'] as const) {
    let e = createInitialState(regra);
    for (let k = 0; k < 200 && e.vencedor === null; k++) {
      const t0 = Date.now();
      const l = lanceAlquerque(e, e.vez === 0 ? 'facil' : 'dificil');
      assert.ok(Date.now() - t0 < 1500, 'lance demorado');
      const f = jogar(e, l!);
      assert.notEqual(f, e);
      e = f;
    }
    assert.notEqual(e.vencedor, null, `${regra}: a partida não acabou`);
  }
});
