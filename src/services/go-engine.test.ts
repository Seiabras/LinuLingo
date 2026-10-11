import { test } from 'node:test';
import assert from 'node:assert/strict';
import { alternarMorto, contarArea, createInitialState, desistir, encerrar, jogadaLegal, jogar, passar, voltarAJogar, type GoState, type Ponto } from './go-engine';

const N = 9;
const p = (linha: number, coluna: number) => linha * N + coluna;

/** Joga uma sequência de pontos (alternando as cores, pretas primeiro). */
function partida(lances: [number, number][]): GoState {
  let s = createInitialState();
  for (const [l, c] of lances) {
    const s2 = jogar(s, p(l, c));
    assert.notEqual(s2, s, `lance (${l},${c}) devia valer`);
    s = s2;
  }
  return s;
}

test('go: começa vazio, 9×9, pretas jogam primeiro, komi 7,5', () => {
  const s = createInitialState();
  assert.equal(s.board.length, 81);
  assert.ok(s.board.every((x) => x === null));
  assert.equal(s.turn, 'b');
  assert.equal(s.komi, 7.5);
});

test('go: pedra sem liberdade é capturada e conta como prisioneiro', () => {
  // brancas em (0,1) cercada por pretas em (0,0), (1,1) e (0,2)
  const s = partida([[0, 0], [0, 1], [1, 1], [8, 8], [0, 2]]);
  assert.equal(s.board[p(0, 1)], null);
  assert.equal(s.capturas.b, 1);
});

test('go: suicídio não vale (regra 7A)', () => {
  // pretas fecham o canto (0,0) com (0,1) e (1,0); branca não pode jogar em (0,0)
  const s = partida([[0, 1], [8, 8], [1, 0]]);
  assert.equal(s.turn, 'w');
  assert.equal(jogadaLegal(s, p(0, 0)), false);
});

test('go: jogada que captura não é suicídio, mesmo sem liberdade antes de tirar as pedras', () => {
  // branca em (0,0) com uma liberdade só em (0,1)… mas jogar ali captura a preta de (0,1)? montamos o ko
  // pretas: (0,1) (1,0)… brancas: (0,2) (1,1) — a preta em (0,1) fica com a liberdade (0,0)
  const s = partida([[0, 1], [0, 2], [1, 0], [1, 1]]);
  assert.equal(s.turn, 'b');
  const s2 = jogar(s, p(8, 8));
  // branca joga em (0,0): fica sem liberdade, mas captura (0,1) e (1,0)? (1,0) ainda tem (2,0), então só (0,1)
  const s3 = jogar(s2, p(0, 0));
  assert.notEqual(s3, s2);
  assert.equal(s3.board[p(0, 1)], null);
  assert.equal(s3.board[p(0, 0)], 'w');
});

test('go: ko — não vale retomar na hora e recriar a posição anterior (regra 8)', () => {
  // forma de ko no meio: pretas (3,3) (4,2) (5,3); brancas (3,4) (4,5) (5,4) (4,3)
  // depois as pretas capturam em (4,4) e a branca não pode recapturar em (4,3) logo em seguida
  let s = partida([
    [3, 3], [3, 4],
    [4, 2], [4, 5],
    [5, 3], [5, 4],
    [8, 8], [4, 3],
  ]);
  assert.equal(s.turn, 'b');
  s = jogar(s, p(4, 4)); // captura a branca de (4,3)
  assert.equal(s.board[p(4, 3)], null);
  assert.equal(s.capturas.b, 1);
  assert.equal(jogadaLegal(s, p(4, 3)), false, 'retomar o ko na hora repetiria a posição');
  // jogando em outro lugar e voltando, a posição já é outra e vale
  s = jogar(s, p(0, 8));
  s = jogar(s, p(0, 0));
  assert.equal(jogadaLegal(s, p(4, 3)), true);
});

test('go: dois passes seguidos levam à contagem; voltar a jogar zera os passes', () => {
  let s = passar(createInitialState());
  assert.equal(s.fase, 'jogando');
  s = passar(s);
  assert.equal(s.fase, 'contagem');
  s = voltarAJogar(s);
  assert.equal(s.fase, 'jogando');
  assert.equal(s.passes, 0);
});

test('go: contagem por área — pedras mais território cercado só por uma cor', () => {
  const b: Ponto[] = Array(81).fill(null);
  // parede preta na coluna 3 e parede branca na coluna 5: cols 0-2 são das pretas, 6-8 das brancas, a 4 é neutra
  for (let l = 0; l < 9; l++) {
    b[p(l, 3)] = 'b';
    b[p(l, 5)] = 'w';
  }
  const { b: pretas, w: brancas } = contarArea(b, 9);
  assert.equal(pretas, 9 * 4);
  assert.equal(brancas, 9 * 4);
});

test('go: pedra marcada como morta sai da contagem e o lugar dela vira território do outro', () => {
  let s = partida([[0, 0], [4, 4]]);
  s = passar(passar(s));
  assert.equal(s.fase, 'contagem');
  // sem marcar nada: ninguém tem território (as duas cores tocam a mesma região)
  assert.equal(contarArea(s.board, 9, s.mortas).b, 1);
  s = alternarMorto(s, p(4, 4));
  assert.deepEqual(s.mortas, [p(4, 4)]);
  s = encerrar(s);
  assert.equal(s.fase, 'fim');
  assert.equal(s.resultado?.pretas, 81);
  assert.equal(s.resultado?.brancas, 7.5);
  assert.equal(s.resultado?.vencedor, 'b');
});

test('go: o komi decide o tabuleiro vazio a favor das brancas', () => {
  const s = encerrar(passar(passar(createInitialState())));
  assert.equal(s.resultado?.vencedor, 'w');
});

test('go: desistir dá a vitória ao outro', () => {
  const s = desistir(createInitialState());
  assert.equal(s.resultado?.vencedor, 'w');
  assert.equal(s.resultado?.desistencia, true);
});
