import { test } from 'node:test';
import assert from 'node:assert/strict';
import { KOMI, KOMI_HANDICAP, KOMI_TERRITORIO, contarArea, contarTerritorio, createInitialState, encerrar, jogar, passar, pontos, pontosDeHandicap, type GoState, type Ponto } from './go-engine';

/** Um 5×5 desenhado em texto (b, w, .) já na fase de contagem. */
function desenho(linhas: string[], extra: Partial<GoState> = {}): GoState {
  const n = linhas.length;
  const s = createInitialState(n, KOMI, { contagem: 'territorio' });
  const board = linhas.join('').split('').map((c) => (c === '.' ? null : c)) as Ponto[];
  return { ...s, board, fase: 'contagem', ...extra };
}

test('Go por território: komi de 6,5; território vazio mais prisioneiros', () => {
  assert.equal(createInitialState(9, KOMI, { contagem: 'territorio' }).komi, KOMI_TERRITORIO);
  // pretas cercam a coluna 0 e 1 (5 pontos vazios na coluna 0); brancas a coluna 4
  const s = desenho(['.b.w.', '.b.w.', '.b.w.', '.b.w.', '.b.w.'], { capturas: { b: 2, w: 1 } });
  const t = contarTerritorio(s);
  assert.equal(t.b, 5 + 2, '5 pontos vazios + 2 prisioneiros');
  assert.equal(t.w, 5 + 1);
  // por área seriam as pedras também
  assert.equal(contarArea(s.board, 5).b, 10);
});

test('Go por território: a pedra morta vira prisioneiro e o lugar dela vira território', () => {
  // uma pedra branca morta dentro do território preto (canto de cima, à esquerda)
  const comMorta = desenho(['wb.w.', '.b.w.', '.b.w.', '.b.w.', '.b.w.'], { mortas: [0] });
  const t = contarTerritorio(comMorta);
  assert.equal(t.b, 5 + 1, 'os 5 pontos da coluna 0 (com o da pedra morta) + 1 prisioneiro');
  assert.equal(pontos(comMorta).b, t.b);
});

test('Go por território: o resultado usa o komi de 6,5', () => {
  const s = desenho(['.b.w.', '.b.w.', '.b.w.', '.b.w.', '.b.w.']);
  const f = encerrar(s);
  assert.equal(f.resultado!.pretas, 5);
  assert.equal(f.resultado!.brancas, 5 + KOMI_TERRITORIO);
  assert.equal(f.resultado!.vencedor, 'w');
});

test('Go com handicap: 2 a 4 pedras pretas nos pontos dos cantos, brancas jogam primeiro, komi 0,5', () => {
  for (const [n, h] of [
    [9, 2],
    [9, 4],
    [13, 3],
    [19, 4],
  ] as const) {
    const s = createInitialState(n, KOMI, { handicap: h });
    const pretas = s.board.flatMap((p, i) => (p === 'b' ? [i] : []));
    assert.deepEqual(pretas.sort((a, b) => a - b), pontosDeHandicap(n).slice(0, h).sort((a, b) => a - b));
    assert.equal(s.turn, 'w');
    assert.equal(s.komi, KOMI_HANDICAP);
  }
  // a primeira jogada é das brancas
  const s = createInitialState(9, KOMI, { handicap: 2 });
  const f = jogar(s, 40);
  assert.equal(f.board[40], 'w');
  assert.equal(passar(passar(f)).fase, 'contagem');
});
