import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chave, rngComSemente, type CartaF } from './baralho-frances';
import { baralho40, cartaDoComputador, darMao, ganhadorDaVaza, jogar, jogaveis, jogosDaMao, novoJogo, pontosDaCarta, proximaMao, recolher, type EstadoSueca } from './sueca-engine';

const c = (valor: number, naipe: CartaF['naipe']): CartaF => ({ valor: valor as CartaF['valor'], naipe });

test('sueca: 40 cartas que somam 120 pontos', () => {
  const b = baralho40();
  assert.equal(b.length, 40);
  assert.equal(b.reduce((t, x) => t + pontosDaCarta(x), 0), 120);
});

test('sueca: 10 cartas para cada um, o trunfo fica na mão de quem deu, e abre quem está depois dele', () => {
  const s = novoJogo(3, rngComSemente(1));
  assert.deepEqual(s.maos.map((m) => m.length), [10, 10, 10, 10]);
  assert.equal(new Set(s.maos.flat().map(chave)).size, 40);
  assert.ok(s.maos[3].some((x) => chave(x) === chave(s.trunfo)));
  assert.equal(s.vez, 0);
});

test('sueca: o 7 ganha do rei, e qualquer trunfo ganha do naipe que abriu', () => {
  assert.equal(ganhadorDaVaza([{ l: 0, carta: c(13, 'copas') }, { l: 1, carta: c(7, 'copas') }, { l: 2, carta: c(1, 'paus') }, { l: 3, carta: c(12, 'copas') }], 'ouros'), 1);
  assert.equal(ganhadorDaVaza([{ l: 0, carta: c(1, 'copas') }, { l: 1, carta: c(2, 'ouros') }, { l: 2, carta: c(7, 'copas') }, { l: 3, carta: c(3, 'ouros') }], 'ouros'), 3, 'o trunfo mais alto leva');
});

test('sueca: seguir o naipe é obrigatório', () => {
  const base = darMao([0, 0], 3, rngComSemente(2));
  const s: EstadoSueca = { ...base, maos: [[c(5, 'copas')], [c(3, 'copas'), c(1, 'paus')], [], []], mesa: [{ l: 0, carta: c(6, 'copas') }], vez: 1 };
  assert.deepEqual(jogaveis(s, 1).map(chave), ['3-copas']);
  assert.equal(jogar(s, 1, c(1, 'paus')), s);
});

test('sueca: os jogos de uma mão', () => {
  assert.equal(jogosDaMao(60, 5), 0, '60 a 60: ninguém ganha jogo');
  assert.equal(jogosDaMao(61, 5), 1);
  assert.equal(jogosDaMao(90, 6), 1);
  assert.equal(jogosDaMao(91, 7), 2);
  assert.equal(jogosDaMao(120, 9), 2);
  assert.equal(jogosDaMao(120, 10), 4, 'todas as vazas');
});

test('sueca: o computador carrega pontos quando o parceiro leva a vaza', () => {
  const base = darMao([0, 0], 3, rngComSemente(3));
  // o lugar 0 (parceiro do 2) jogou o ás de copas; o 2 é o último, sem copas: carrega o 7 de paus (10)
  const s: EstadoSueca = { ...base, trunfo: c(4, 'ouros'), maos: [[], [], [c(7, 'paus'), c(3, 'paus')], []], mesa: [{ l: 3, carta: c(2, 'copas') }, { l: 0, carta: c(1, 'copas') }, { l: 1, carta: c(4, 'copas') }], vez: 2 };
  assert.equal(chave(cartaDoComputador(s, 2)), '7-paus');
});

test('sueca: partidas inteiras do computador acabam com uma dupla em 4 jogos', () => {
  for (let semente = 1; semente <= 15; semente++) {
    const rng = rngComSemente(semente);
    let s = novoJogo(3, rng);
    for (let passos = 0; passos < 20000 && s.fase !== 'fimJogo'; passos++) {
      if (s.fase === 'vaza') s = recolher(s);
      else if (s.fase === 'fimMao') {
        assert.equal(s.pontos[0] + s.pontos[1], 120);
        s = proximaMao(s, rng);
      } else {
        const antes = s;
        s = jogar(s, s.vez, cartaDoComputador(s, s.vez));
        assert.notEqual(s, antes);
      }
    }
    assert.equal(s.fase, 'fimJogo', `semente ${semente}`);
    assert.ok(Math.max(...s.placar) >= 4);
  }
});
