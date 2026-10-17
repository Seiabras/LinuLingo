import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chave, rngComSemente, type CartaF } from './baralho-frances';
import { baralho40, darMao, jogar, lanceDoLinu, novoJogo, pontosDaMao, proximaMao, valorDaCarta, vazasPossiveis, type EstadoEscopa } from './escopa-engine';

const c = (valor: number, naipe: CartaF['naipe']): CartaF => ({ valor: valor as CartaF['valor'], naipe });

test('escopa: 40 cartas; dama 8, valete 9, rei 10', () => {
  assert.equal(baralho40().length, 40);
  assert.equal(valorDaCarta(c(12, 'copas')), 8);
  assert.equal(valorDaCarta(c(11, 'copas')), 9);
  assert.equal(valorDaCarta(c(13, 'copas')), 10);
  assert.equal(valorDaCarta(c(1, 'copas')), 1);
});

test('escopa: 3 cartas para cada um e 4 na mesa', () => {
  const s = novoJogo(1, rngComSemente(1));
  assert.deepEqual([s.maos[0].length, s.maos[1].length, s.mesa.length, s.monte.length], [3, 3, 4, 30]);
  assert.equal(s.vez, 0, 'quem não deu joga primeiro');
});

test('escopa: os grupos que fazem 15 com a carta', () => {
  const mesa = [c(5, 'copas'), c(3, 'paus'), c(2, 'ouros'), c(13, 'espadas')];
  const g = vazasPossiveis(mesa, c(5, 'ouros')).map((x) => x.map(chave).sort().join(' '));
  assert.ok(g.includes('13-espadas'), '5 + rei (10) = 15');
  assert.ok(g.includes('2-ouros 3-paus 5-copas'), '5 + 5 + 3 + 2 = 15');
});

const montar = (extra: Partial<EstadoEscopa>): EstadoEscopa => ({ ...darMao([0, 0], 1, rngComSemente(2)), ...extra });

test('escopa: levar a mesa inteira é escopa; quando dá 15, é preciso levar', () => {
  const s = montar({ mesa: [c(5, 'copas'), c(3, 'paus')], maos: [[c(7, 'ouros'), c(1, 'paus')], [c(4, 'espadas')]], vez: 0 });
  assert.equal(jogar(s, 0, c(7, 'ouros')), s, 'dá 15 com 5 + 3: não pode jogar sem levar');
  const t = jogar(s, 0, c(7, 'ouros'), [c(5, 'copas'), c(3, 'paus')]);
  assert.equal(t.mesa.length, 0);
  assert.equal(t.escopas[0], 1);
  assert.equal(t.levadas[0].length, 3);
  assert.equal(t.ultimo?.escopa, true);
  const u = jogar(s, 0, c(1, 'paus'));
  assert.equal(u.mesa.length, 3, 'sem 15, a carta fica na mesa');
});

test('escopa: a contagem da mão', () => {
  const ourosTodos = Array.from({ length: 7 }, (_, i) => c(i + 1, 'ouros')).concat([c(11, 'ouros'), c(12, 'ouros'), c(13, 'ouros')]);
  const [a, b] = pontosDaMao([[...ourosTodos, c(7, 'copas'), c(7, 'paus'), c(7, 'espadas')], [c(2, 'copas')]], [2, 0]);
  assert.deepEqual(a, { escopas: 2, ouros: 2, seteDeOuros: 1, setes: 3, cartas: 1, total: 9 });
  assert.equal(b.total, 0);
});

test('escopa: o Linu prefere a escopa e o sete de ouros', () => {
  const s = montar({ mesa: [c(5, 'copas'), c(3, 'paus')], maos: [[], [c(7, 'ouros'), c(7, 'copas')]], vez: 1 });
  const l = lanceDoLinu(s, 1);
  assert.equal(chave(l.carta), '7-ouros', 'os dois setes fazem escopa; leva com o sete de ouros');
  assert.equal(l.grupo.length, 2);
});

test('escopa: partidas do Linu contra o Linu acabam em 21, com as 40 cartas contadas', () => {
  for (let semente = 1; semente <= 15; semente++) {
    const rng = rngComSemente(semente);
    let s = novoJogo(1, rng);
    for (let passos = 0; passos < 5000 && s.fase !== 'fimJogo'; passos++) {
      if (s.fase === 'fimMao') {
        assert.equal(s.levadas[0].length + s.levadas[1].length + s.mesa.length, 40);
        s = proximaMao(s, rng);
        continue;
      }
      const { carta, grupo } = lanceDoLinu(s, s.vez);
      const antes = s;
      s = jogar(s, s.vez, carta, grupo);
      assert.notEqual(s, antes);
    }
    assert.equal(s.fase, 'fimJogo', `semente ${semente}`);
    assert.ok(Math.max(...s.placar) >= 21);
  }
});
