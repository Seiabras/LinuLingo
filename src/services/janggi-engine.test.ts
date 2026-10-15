import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  createInitialState,
  destinos,
  ix,
  jogar,
  lancesLegais,
  perft,
  podePassar,
  pontosJ,
  trocarArrumacao,
  type CorJ,
  type JanggiState,
  type PecaJ,
  type TipoJ,
} from './janggi-engine';

/** Lê uma posição em FEN do Fairy-Stockfish (maiúsculas = azul, Cho, embaixo). */
function fen(f: string): [(PecaJ | null)[], CorJ] {
  const T: Record<string, TipoJ> = { r: 'r', n: 'h', b: 'e', a: 'a', k: 'k', c: 'c', p: 's' };
  const [pos, lado] = f.split(' ');
  const b: (PecaJ | null)[] = [];
  for (const linha of pos!.split('/')) {
    let num = '';
    const vazias = () => {
      for (let k = 0; k < Number(num || 0); k++) b.push(null);
      num = '';
    };
    for (const ch of linha) {
      if (/\d/.test(ch)) {
        num += ch;
        continue;
      }
      vazias();
      b.push({ cor: ch === ch.toUpperCase() ? 'cho' : 'han', tipo: T[ch.toLowerCase()]! });
    }
    vazias();
  }
  assert.equal(b.length, 90);
  return [b, lado === 'w' ? 'cho' : 'han'];
}

/** Uma posição montada à mão. */
function posicao(pecas: [number, number, CorJ, TipoJ][], turn: CorJ = 'cho'): JanggiState {
  const board: (PecaJ | null)[] = Array(90).fill(null);
  for (const [r, c, cor, tipo] of pecas) board[ix(r, c)] = { cor, tipo };
  return { ...createInitialState(), board, turn, repeticoes: {} };
}

test('janggi: posição inicial — generais no centro do palácio e 32 lances (com o passe)', () => {
  const s = createInitialState();
  assert.deepEqual(s.board[ix(8, 4)], { cor: 'cho', tipo: 'k' });
  assert.deepEqual(s.board[ix(1, 4)], { cor: 'han', tipo: 'k' });
  assert.equal(lancesLegais(s).length, 32);
  assert.equal(pontosJ(s.board, 'cho'), 72);
  assert.equal(pontosJ(s.board, 'han'), 73.5);
});

test('janggi: perft igual ao do Fairy-Stockfish (tests/perft.sh)', () => {
  const s = createInitialState();
  assert.equal(perft(s.board, 'cho', 1), 32);
  assert.equal(perft(s.board, 'cho', 2), 1024);
  assert.equal(perft(s.board, 'cho', 3), 33000);
  const [b1, c1] = fen('1n1kaabn1/cr2N4/5C1c1/p1pNp3p/9/9/P1PbP1P1P/3r1p3/4A4/R1BA1KB1R b - - 0 1');
  assert.equal(perft(b1, c1, 4), 76763);
  const [b2, c2] = fen('1Pbcka3/3nNn1c1/N2CaC3/1pB6/9/9/5P3/9/4K4/9 w - - 0 23');
  assert.equal(perft(b2, c2, 4), 151202);
});

test('janggi: o canhão só anda pulando uma peça, e não pula nem captura canhão', () => {
  const s = createInitialState();
  // na posição inicial, os canhões não têm lance
  assert.deepEqual(destinos(s.board, ix(7, 1)), []);
  const t = posicao([
    [9, 4, 'cho', 'c'],
    [8, 4, 'cho', 'k'],
    [7, 4, 'cho', 's'],
    [9, 2, 'han', 'c'],
    [9, 0, 'cho', 'c'],
    [1, 3, 'han', 'k'],
  ]);
  // o de baixo: plataforma é o general, mas logo depois vem um soldado do mesmo lado; à esquerda, a
  // plataforma seria o canhão vermelho
  assert.deepEqual(destinos(t.board, ix(9, 4)), []);
  // o do canto também não pula o canhão vermelho
  assert.deepEqual(destinos(t.board, ix(9, 0)), []);
  // com um soldado de plataforma, anda e captura o carro depois dele
  const u = posicao([
    [5, 0, 'cho', 'c'],
    [5, 2, 'cho', 's'],
    [5, 5, 'han', 'r'],
  ]);
  assert.deepEqual(
    destinos(u.board, ix(5, 0)).sort((x, y) => x - y),
    [ix(5, 3), ix(5, 4), ix(5, 5)],
  );
});

test('janggi: o elefante anda 1 reto e 2 na diagonal, e a peça no caminho o bloqueia', () => {
  const s = posicao([[5, 4, 'cho', 'e']]);
  assert.equal(destinos(s.board, ix(5, 4)).length, 8);
  const t = posicao([
    [5, 4, 'cho', 'e'],
    [4, 4, 'han', 's'],
    [7, 5, 'han', 's'],
  ]);
  // para cima está tapado; o caminho para baixo-direita passa por (6,4) e (7,5): tapado também
  const d = destinos(t.board, ix(5, 4));
  assert.ok(!d.includes(ix(2, 2)) && !d.includes(ix(2, 6)));
  assert.ok(!d.includes(ix(8, 6)));
  assert.ok(d.includes(ix(8, 2)));
});

test('janggi: o carro e o soldado usam as diagonais do palácio', () => {
  const s = posicao([
    [9, 3, 'cho', 'r'],
    [2, 3, 'cho', 's'],
    [8, 5, 'cho', 'k'],
    [0, 4, 'han', 'k'],
  ]);
  const carro = destinos(s.board, ix(9, 3));
  assert.ok(carro.includes(ix(8, 4)) && carro.includes(ix(7, 5)), 'do canto ao centro e ao outro canto');
  const soldado = destinos(s.board, ix(2, 3));
  assert.ok(soldado.includes(ix(1, 4)), 'na diagonal para a frente, no palácio do adversário');
});

test('janggi: passar é permitido fora do xeque; os dois passarem acaba pelos pontos (o vermelho tem o 덤)', () => {
  let s = createInitialState();
  assert.ok(podePassar(s));
  s = jogar(s, -1, -1);
  assert.equal(s.turn, 'han');
  s = jogar(s, -1, -1);
  assert.equal(s.fim, 'passes');
  assert.equal(s.winner, 'han', '73,5 contra 72');
});

test('janggi: bikjang — o lance que mantém os generais frente a frente não vale; passar acaba a partida', () => {
  let s = posicao(
    [
      [8, 4, 'cho', 'k'],
      [1, 3, 'han', 'k'],
      [5, 0, 'cho', 'r'],
      [0, 8, 'han', 'r'],
    ],
    'han',
  );
  // o general vermelho vai para a coluna do azul: bikjang
  s = jogar(s, ix(1, 3), ix(1, 4));
  assert.ok(s.bikjang);
  // o carro azul andar sem tapar a coluna não vale
  assert.equal(jogar(s, ix(5, 0), ix(5, 1)), s);
  // tapar a coluna vale
  assert.notEqual(jogar(s, ix(5, 0), ix(5, 4)), s);
  const fim = jogar(s, -1, -1);
  assert.equal(fim.fim, 'bikjang');
  assert.equal(fim.winner, 'han', '13 + 1,5 contra 13');
});

test('janggi: xeque-mate', () => {
  // o general azul no canto do palácio: um carro fecha a linha 8 e o outro dá o xeque na linha 9
  const s = posicao(
    [
      [9, 3, 'cho', 'k'],
      [0, 4, 'han', 'k'],
      [8, 0, 'han', 'r'],
      [5, 8, 'han', 'r'],
    ],
    'han',
  );
  const m = jogar(s, ix(5, 8), ix(9, 8));
  assert.equal(m.fim, 'mate');
  assert.equal(m.winner, 'han');
});

test('janggi: a arrumação dos cavalos e elefantes muda antes do primeiro lance', () => {
  const s = trocarArrumacao(createInitialState(), 'cho', 'smms');
  assert.equal(s.board[ix(9, 1)]?.tipo, 'e');
  assert.equal(s.board[ix(9, 2)]?.tipo, 'h');
  // o vermelho lê da esquerda dele (a direita da tela)
  const t = trocarArrumacao(createInitialState(), 'han', 'msms');
  assert.equal(t.board[ix(0, 7)]?.tipo, 'h');
  assert.equal(t.board[ix(0, 6)]?.tipo, 'e');
  assert.equal(t.board[ix(0, 2)]?.tipo, 'h');
  assert.equal(t.board[ix(0, 1)]?.tipo, 'e');
});
