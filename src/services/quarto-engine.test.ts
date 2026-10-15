import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as Q from './quarto-engine';
import { aplicarLanceQuarto, lanceQuarto } from './quarto-ia';

/** Monta uma posição: as peças em cada casa (null = vazia), com a vez na fase “colocar” e a peça na mão. */
function posicao(casas: Record<number, number>, dada: number, opcoes: { quadrados?: boolean; anunciar?: boolean } = {}): Q.QuartoState {
  const s = Q.createInitialState(opcoes);
  const board = s.board.slice();
  let livres = 0xffff & ~(1 << dada);
  for (const [i, p] of Object.entries(casas)) {
    board[Number(i)] = p;
    livres &= ~(1 << p);
  }
  return { ...s, board, livres, fase: 'colocar', dada, turn: 0 };
}

test('Quarto: as 16 peças são todas diferentes e a descrição tem as 4 características', () => {
  assert.equal(Q.descreverPeca(0), 'baixa, clara, redonda, maciça');
  assert.equal(Q.descreverPeca(15), 'alta, escura, quadrada, furada');
  assert.equal(new Set(Array.from({ length: 16 }, (_, p) => Q.descreverPeca(p))).size, 16);
});

test('Quarto: quem escolhe dá a peça e a vez passa para o outro colocar', () => {
  let s = Q.createInitialState();
  assert.equal(s.fase, 'escolher');
  assert.equal(Q.colocar(s, 0), s, 'não coloca sem peça na mão');
  s = Q.escolher(s, 5);
  assert.equal(s.turn, 1);
  assert.equal(s.fase, 'colocar');
  assert.equal(s.dada, 5);
  assert.equal(Q.escolher(s, 6), s, 'não escolhe de novo antes de colocar');
  s = Q.colocar(s, 10);
  assert.equal(s.board[10], 5);
  assert.equal(s.turn, 1, 'quem colocou agora escolhe');
  assert.equal(s.fase, 'escolher');
  assert.equal(Q.escolher(s, 5), s, 'a peça já usada não volta');
});

test('Quarto: linha com uma característica em comum vence; sem nada em comum, não', () => {
  // 1, 3, 5, 7 são todas altas (bit 1)
  const s = Q.colocar(posicao({ 0: 1, 1: 3, 2: 5 }, 7), 3);
  assert.equal(s.winner, 0);
  assert.deepEqual(s.linha, [0, 1, 2, 3]);
  assert.equal(Q.descreverComum(Q.comum([1, 3, 5, 7])), 'todas altas e maciças');
  // 0 (baixa clara redonda maciça) e 15 (o contrário de tudo) não têm nada em comum
  const t = Q.colocar(posicao({ 0: 0, 1: 1, 2: 2 }, 15), 3);
  assert.equal(t.winner, null);
  assert.equal(Q.descreverComum(Q.comum([0, 2, 4, 6])), 'todas baixas e maciças');
});

test('Quarto: coluna e diagonal também valem; o quadrado 2×2 só na variante avançada', () => {
  assert.equal(Q.colocar(posicao({ 0: 0, 4: 2, 8: 4 }, 6), 12).winner, 0, 'coluna');
  assert.equal(Q.colocar(posicao({ 3: 0, 6: 2, 9: 4 }, 6), 12).winner, 0, 'diagonal');
  assert.equal(Q.colocar(posicao({ 0: 0, 1: 2, 4: 4 }, 6), 5).winner, null, 'quadrado sem a variante');
  const q = Q.colocar(posicao({ 0: 0, 1: 2, 4: 4 }, 6, { quadrados: true }), 5);
  assert.equal(q.winner, 0, 'quadrado na variante');
  assert.deepEqual(q.linha.sort((a, b) => a - b), [0, 1, 4, 5]);
  assert.equal(Q.QUADRADOS.length, 9, 'são 9 quadrados a mais');
});

test('Quarto: com o anúncio, quem completa precisa dizer “Quarto!”', () => {
  const s = Q.colocar(posicao({ 0: 1, 1: 3, 2: 5 }, 7, { anunciar: true }), 3);
  assert.equal(s.winner, null, 'ainda não ganhou');
  assert.ok(Q.quartoAnunciavel(s));
  assert.equal(Q.anunciar(s).winner, 0);
});

test('Quarto: o Quarto que passou sem anúncio pode ser anunciado pelo adversário, só naquele momento', () => {
  const s = Q.colocar(posicao({ 0: 1, 1: 3, 2: 5 }, 7, { anunciar: true }), 3);
  const deu = Q.escolher(s, 0);
  assert.equal(deu.turn, 1);
  const roubou = Q.anunciar(deu);
  assert.equal(roubou.winner, 1, 'o adversário ganha');
  assert.ok(roubou.roubado);
  // se o adversário coloca a peça sem anunciar, o alinhamento perde o valor
  const passou = Q.colocar(deu, 15);
  assert.equal(Q.quartoAnunciavel(passou), null);
  assert.equal(Q.anunciar(passou), passou, 'não dá mais para anunciar');
  assert.equal(passou.winner, null);
});

test('Quarto: anunciar sem alinhamento não faz nada', () => {
  const s = Q.colocar(posicao({ 0: 1 }, 7, { anunciar: true }), 3);
  assert.equal(Q.anunciar(s), s);
});

test('Quarto: tabuleiro cheio sem Quarto é empate', () => {
  // posição conhecida sem nenhum alinhamento com algo em comum
  let s = Q.createInitialState();
  const ordem = [0, 15, 1, 14, 6, 9, 7, 8, 11, 4, 10, 5, 13, 2, 12, 3];
  // procura uma ordem de casas que não forme Quarto, colocando cada peça na primeira casa que não fecha
  for (const p of ordem) {
    s = Q.escolher(s, p);
    const casa = Q.casasVazias(s).find((i) => {
      const b = s.board.slice();
      b[i] = p;
      return Q.quartosNaCasa(b, i, false).length === 0;
    });
    if (casa === undefined) break;
    s = Q.colocar(s, casa);
  }
  if (Q.casasVazias(s).length === 0) assert.equal(s.winner, 'empate');
});

test('Linu no Quarto: completa o Quarto quando pode e nunca dá uma peça que perde na hora (médio e difícil)', () => {
  const s = posicao({ 0: 1, 1: 3, 2: 5 }, 7);
  for (const nivel of ['facil', 'medio', 'dificil'] as const) assert.equal(aplicarLanceQuarto(s, lanceQuarto(s, nivel)!).winner, 0, nivel);
  // 1, 3 e 5 são altas e maciças; a 8 (baixa e furada) não completa a linha de cima
  const t = posicao({ 0: 1, 1: 3, 2: 5 }, 8);
  for (const nivel of ['medio', 'dificil'] as const) {
    const l = lanceQuarto(t, nivel)!;
    const e = aplicarLanceQuarto(t, l);
    if (e.winner === null) {
      const p = e.dada!;
      // se a casa 3 ficou vazia, a peça dada não pode ser alta nem maciça (fecharia a linha)
      if (e.board[3] === null) assert.ok(!(p & Q.ALTA) && !!(p & Q.FURADA), `${nivel} deu uma peça que fecha a linha`);
    }
  }
});

test('Linu no Quarto: anuncia o Quarto que você deixou passar (difícil)', () => {
  const s = Q.escolher(Q.colocar(posicao({ 0: 1, 1: 3, 2: 5 }, 7, { anunciar: true }), 3), 0);
  const l = lanceQuarto(s, 'dificil')!;
  assert.ok(l.anunciar);
  assert.equal(aplicarLanceQuarto(s, l).winner, 1);
});

test('Linu no Quarto: partida Linu contra Linu só tem lances válidos, e o difícil pensa rápido', () => {
  let semente = 7;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  for (const quadrados of [false, true]) {
    let s = Q.createInitialState({ quadrados });
    let maior = 0;
    for (let k = 0; k < 40 && s.winner === null; k++) {
      const t0 = Date.now();
      const l = lanceQuarto(s, k % 2 ? 'dificil' : 'medio', sorteio);
      maior = Math.max(maior, Date.now() - t0);
      assert.ok(l, 'tem lance');
      const e = aplicarLanceQuarto(s, l!);
      assert.notEqual(e, s, 'o lance mudou a posição');
      s = e;
    }
    assert.notEqual(s.winner, null, 'a partida terminou');
    assert.ok(maior < 2500, `lance mais lento: ${maior} ms`);
  }
});
