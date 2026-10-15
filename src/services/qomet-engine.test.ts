import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CASAS, CENTRO, DIRECOES, LINHAS, PROXIMA, QUADRADOS, casaEm, createInitialState, destinosDe, jogar, lancesLegais, naMao, passar, type JogadorQ, type QometState } from './qomet-engine';
import { lanceQomet } from './qomet-ia';

const c = (x: number, y: number) => casaEm(x, y)!;
const dir = (dx: number, dy: number) => DIRECOES.findIndex(([a, b]) => a === dx && b === dy);
const com = (pecas: [number, number, JogadorQ][], vez: JogadorQ = 0): QometState => {
  const s = createInitialState(vez);
  const casas = [...s.casas];
  for (const [x, y, j] of pecas) casas[c(x, y)] = j;
  return { ...s, casas };
};

test('tabuleiro: 25 casas (3 quadrados e o centro), 16 linhas', () => {
  assert.equal(CASAS.length, 25);
  assert.deepEqual(CASAS[CENTRO], [0, 0]);
  assert.equal(LINHAS.length, 16);
  // do centro dá para ir para as 8 direções
  assert.ok(PROXIMA[CENTRO]!.every((p) => typeof p === 'number'));
  // do canto de dentro, para cima não há linha; do canto de fora, para fora sai do tabuleiro
  assert.equal(PROXIMA[c(-1, -1)]![dir(0, -1)], null);
  assert.equal(PROXIMA[c(3, -3)]![dir(1, 0)], 'fora');
  assert.equal(PROXIMA[c(0, -3)]![dir(0, -1)], 'fora');
  assert.equal(PROXIMA[c(0, -3)]![dir(1, 0)], c(3, -3));
  assert.equal(PROXIMA[c(-2, -2)]![dir(1, 1)], c(-1, -1));
});

test('quadrados: os dois exemplos da regra valem; um quadrado de pontas soltas, não', () => {
  const tem = (pts: [number, number][]) => QUADRADOS.some((q) => q.join() === pts.map(([x, y]) => c(x, y)).sort((a, b) => a - b).join());
  assert.ok(tem([[-2, -2], [0, -2], [-2, 0], [0, 0]]));
  assert.ok(tem([[0, 0], [3, 0], [0, 3], [3, 3]]));
  assert.ok(tem([[-3, -3], [3, -3], [-3, 3], [3, 3]]));
  assert.ok(tem([[-1, -1], [1, -1], [-1, 1], [1, 1]]));
  // os meios dos lados formam um quadrado inclinado, sem linhas entre eles: não vale
  assert.ok(!tem([[0, -1], [1, 0], [0, 1], [-1, 0]]));
});

test('começo: 7 estrelas na mão, pôr numa casa vazia', () => {
  let s = createInitialState();
  assert.equal(naMao(s, 0), 7);
  assert.equal(lancesLegais(s).length, 25);
  s = jogar(s, { tipo: 'colocar', casa: CENTRO });
  assert.equal(s.casas[CENTRO], 0);
  assert.equal(s.vez, 1);
  assert.equal(jogar(s, { tipo: 'colocar', casa: CENTRO }), s); // ocupada
});

test('mover: só a sua estrela, uma casa ao longo de uma linha', () => {
  const s = com([[0, 0, 0], [1, 1, 1]]);
  assert.equal(jogar(s, { tipo: 'mover', de: c(1, 1), dir: dir(1, 1) }), s); // não é sua
  const m = jogar(s, { tipo: 'mover', de: CENTRO, dir: dir(-1, 0) });
  assert.equal(m.casas[c(-1, 0)], 0);
  assert.equal(m.casas[CENTRO], null);
});

test('empurrar: uma estrela de qualquer cor vai para a casa seguinte, se estiver vazia', () => {
  const s = com([[0, 0, 0], [1, 0, 1]]);
  const m = jogar(s, { tipo: 'mover', de: CENTRO, dir: dir(1, 0) });
  assert.equal(m.casas[c(1, 0)], 0);
  assert.equal(m.casas[c(2, 0)], 1);
  assert.deepEqual(m.ultimo?.empurrada, { de: c(1, 0), para: c(2, 0), dono: 1 });
  // duas em fila: não empurra
  const t = com([[0, 0, 0], [1, 0, 1], [2, 0, 0]]);
  assert.equal(jogar(t, { tipo: 'mover', de: CENTRO, dir: dir(1, 0) }), t);
});

test('para fora: do quadrado de fora, empurrar ou tirar a sua; a estrela volta para a mão', () => {
  const s = com([[0, -3, 0], [3, -3, 1]]);
  const m = jogar(s, { tipo: 'mover', de: c(0, -3), dir: dir(1, 0) });
  assert.equal(m.casas[c(3, -3)], 0);
  assert.equal(naMao(m, 1), 7);
  const t = jogar(com([[3, 3, 0]]), { tipo: 'mover', de: c(3, 3), dir: dir(1, 0) });
  assert.equal(t.casas[c(3, 3)], null);
  assert.equal(naMao(t, 0), 7);
  // do quadrado de dentro, não sai
  const u = com([[1, -1, 0]]);
  assert.ok(!destinosDe(u, c(1, -1)).some((d) => d.para === 'fora'));
});

test('não vale desfazer o lance anterior do adversário', () => {
  let s = com([[0, 0, 0], [1, 0, 1]], 0);
  s = jogar(s, { tipo: 'mover', de: CENTRO, dir: dir(1, 0) }); // 0 empurra 1 para (2,0)
  // o 1 voltaria empurrando de volta? (2,0)→(1,0) empurra o 0 para o centro: igual ao de antes
  const volta = jogar(s, { tipo: 'mover', de: c(2, 0), dir: dir(-1, 0) });
  assert.equal(volta, s);
});

test('vitória: quadrado de 4 da sua cor; quadrado do outro por engano dá a vitória a ele', () => {
  const s = com([[-2, -2, 0], [0, -2, 0], [-2, 0, 0]]);
  const v = jogar(s, { tipo: 'colocar', casa: CENTRO });
  assert.equal(v.vencedor, 0);
  assert.equal(v.porEngano, false);
  assert.equal(lancesLegais(v).length, 0);
  // o 0 empurra uma estrela do 1 e completa o quadrado dele
  const e = com([[-2, -2, 1], [0, -2, 1], [-2, 0, 1], [0, 1, 1], [0, 2, 0]], 0);
  const r = jogar(e, { tipo: 'mover', de: c(0, 2), dir: dir(0, -1) });
  assert.equal(r.casas[CENTRO], 1);
  assert.equal(r.vencedor, 1);
  assert.equal(r.porEngano, true);
});

test('sem lance: passa a vez (o manual não diz)', () => {
  const s = createInitialState();
  assert.equal(passar(s), s); // tem lance: não passa
});

test('o Linu completa o quadrado quando pode e evita entregar um', () => {
  const s = com([[-2, -2, 1], [0, -2, 1], [-2, 0, 1]], 1);
  for (const n of ['facil', 'medio', 'dificil'] as const) assert.deepEqual(lanceQomet(s, n), { tipo: 'colocar', casa: CENTRO });
  // o humano ameaça fechar no centro: o difícil ocupa o centro
  const b = com([[-2, -2, 0], [0, -2, 0], [-2, 0, 0], [3, 3, 1]], 1);
  const l = lanceQomet(b, 'dificil')!;
  const f = jogar(b, l);
  assert.ok(lancesLegais(f).every((x) => jogar(f, x).vencedor !== 0), 'o difícil deixou o quadrado aberto');
});

test('o Linu joga partidas inteiras sem lance inválido, e o difícil é rápido', () => {
  for (const [a, b] of [['facil', 'medio'], ['medio', 'dificil']] as const) {
    let s = createInitialState();
    for (let k = 0; k < 120 && s.vencedor === null; k++) {
      const t0 = Date.now();
      const l = lanceQomet(s, s.vez === 0 ? a : b);
      assert.ok(Date.now() - t0 < 1500, 'lance demorado');
      if (!l) {
        s = passar(s);
        continue;
      }
      const f = jogar(s, l);
      assert.notEqual(f, s, 'lance inválido');
      s = f;
    }
  }
});
