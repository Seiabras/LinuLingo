import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CURSOS_JOGOS, type DesafioVelha } from './cursos-jogos';
import { createInitialState, jogar, type LinhaState } from '../services/linha-engine';

/** Monta a posição do desafio. */
function posicao(d: DesafioVelha): LinhaState {
  const s = createInitialState(3, 3);
  const board = s.board.slice();
  for (const i of d.x) board[i] = 'x';
  for (const i of d.o) board[i] = 'o';
  return { ...s, board, turn: d.vez };
}

/** Valor da posição com jogo perfeito, para quem tem a vez: 1 vence, 0 empata, -1 perde. */
function valor(s: LinhaState): number {
  if (s.winner !== null) return s.winner === 'empate' ? 0 : s.winner === s.turn ? 1 : -1;
  let melhor = -2;
  for (let i = 0; i < 9; i++) {
    if (s.board[i] !== null) continue;
    melhor = Math.max(melhor, (0 - valor(jogar(s, i))));
  }
  return melhor;
}

/** Quantas linhas o jogador `m` tem com duas marcas e a terceira casa livre. */
function ameacas(board: (string | null)[], m: string): number {
  const linhas = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];
  return linhas.filter((l) => l.filter((i) => board[i] === m).length === 2 && l.some((i) => board[i] === null)).length;
}

const licoes = CURSOS_JOGOS.velha!.licoes;
const desafio = (id: string) => licoes.find((l) => l.id === id)!.desafio!;

test('curso da velha: as posições dos desafios são possíveis e as respostas são casas vazias', () => {
  for (const l of licoes) {
    if (!l.desafio) continue;
    const d = l.desafio;
    // o X começa: na vez do X, os dois têm o mesmo número de marcas; na vez do O, o X tem uma a mais
    assert.equal(d.x.length - d.o.length, d.vez === 'x' ? 0 : 1, `${l.id}: contagem de marcas`);
    for (const r of d.respostas) assert.ok(!d.x.includes(r) && !d.o.includes(r), `${l.id}: a resposta ${r} está ocupada`);
  }
});

test('curso da velha: “três em linha” — a resposta ganha na hora', () => {
  const d = desafio('objetivo');
  for (const r of d.respostas) assert.equal(jogar(posicao(d), r).winner, 'x');
});

test('curso da velha: “bloquear” — só a resposta evita perder', () => {
  const d = desafio('bloquear');
  const s = posicao(d);
  for (let i = 0; i < 9; i++) {
    if (s.board[i] !== null) continue;
    const v = (0 - valor(jogar(s, i)));
    if (d.respostas.includes(i)) assert.ok(v >= 0, `bloquear em ${i} devia segurar`);
    else assert.equal(v, -1, `jogar em ${i} devia perder`);
  }
});

test('curso da velha: “garfo” — cada resposta cria duas ameaças, e o O não tem ameaça própria', () => {
  const d = desafio('garfo');
  const s = posicao(d);
  assert.equal(ameacas(s.board, 'x'), 0, 'o X ainda não tem ameaça (senão a lição seria ganhar)');
  assert.equal(ameacas(s.board, 'o'), 0, 'o O não tem ameaça (senão a lição seria bloquear)');
  for (const r of d.respostas) {
    const depois = jogar(s, r);
    assert.equal(ameacas(depois.board, 'x'), 2, `${r} devia criar duas ameaças`);
    assert.equal(-valor(depois), 1, `${r} devia ganhar com jogo perfeito`);
  }
});

test('curso da velha: nas lições de abertura e defesa, as respostas seguram o empate e as outras casas perdem', () => {
  for (const id of ['contra-garfo', 'abertura-canto', 'abertura-centro']) {
    const d = desafio(id);
    const s = posicao(d);
    for (let i = 0; i < 9; i++) {
      if (s.board[i] !== null) continue;
      const v = (0 - valor(jogar(s, i)));
      if (d.respostas.includes(i)) assert.equal(v, 0, `${id}: ${i} devia empatar`);
      else assert.equal(v, -1, `${id}: ${i} devia perder`);
    }
  }
});

test('curso da velha: o canto oposto mantém o jogo empatado com jogo perfeito', () => {
  const d = desafio('canto-oposto');
  for (const r of d.respostas) assert.equal((0 - valor(jogar(posicao(d), r))), 0);
});
