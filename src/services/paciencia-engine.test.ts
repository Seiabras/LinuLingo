import { test } from 'node:test';
import assert from 'node:assert/strict';
import { baralho52, chave, embaralhar, rngComSemente, type CartaF } from './baralho-frances';
import { comprar, destinosDe, melhorDestino, mover, novaPartida, passoFinal, podeMover, podeTerminarSozinho, venceu, type EstadoPaciencia } from './paciencia-engine';

const c = (valor: number, naipe: CartaF['naipe']): CartaF => ({ valor: valor as CartaF['valor'], naipe });
const todas = (s: EstadoPaciencia) => [...s.monte, ...s.descarte, ...s.fundacoes.flat(), ...s.colunas.flat()];

test('baralho: 52 cartas diferentes, e embaralhar não perde nem repete carta', () => {
  const b = baralho52();
  assert.equal(new Set(b.map(chave)).size, 52);
  const e = embaralhar(b, rngComSemente(7));
  assert.equal(new Set(e.map(chave)).size, 52);
  assert.notDeepEqual(e, b);
});

test('paciência: a distribuição tem 1 a 7 cartas nas colunas, só a última aberta, e 24 no monte', () => {
  const s = novaPartida(rngComSemente(3));
  assert.deepEqual(s.colunas.map((col) => col.length), [1, 2, 3, 4, 5, 6, 7]);
  for (const col of s.colunas) col.forEach((x, i) => assert.equal(x.aberta, i === col.length - 1));
  assert.equal(s.monte.length, 24);
  assert.equal(new Set(todas(s).map(chave)).size, 52);
});

test('paciência: comprar 1 ou 3, e o descarte volta para o monte na mesma ordem', () => {
  let s = novaPartida(rngComSemente(5));
  const ordem = [...s.monte].reverse().map(chave);
  for (let i = 0; i < 24; i++) s = comprar(s);
  assert.equal(s.monte.length, 0);
  assert.deepEqual(s.descarte.map(chave), ordem);
  s = comprar(s);
  assert.equal(s.descarte.length, 0);
  assert.equal(s.voltas, 1);
  s = comprar(s);
  assert.equal(chave(s.descarte[0]!), ordem[0]);

  let t = novaPartida(rngComSemente(5), 3);
  t = comprar(t);
  assert.equal(t.descarte.length, 3);
  assert.equal(chave(t.descarte[2]!), ordem[2], 'a terceira comprada fica por cima');
});

test('paciência: na coluna, desce um valor e troca a cor; coluna vazia só aceita rei', () => {
  const s: EstadoPaciencia = {
    monte: [],
    descarte: [c(6, 'copas')],
    fundacoes: [[], [c(1, 'ouros')], [], []],
    colunas: [[{ ...c(7, 'espadas'), aberta: true }], [{ ...c(7, 'ouros'), aberta: true }], [], [{ ...c(13, 'paus'), aberta: false }, { ...c(2, 'ouros'), aberta: true }], [], [], []],
    pesca: 1,
    voltas: 0,
    lances: 0,
  };
  assert.ok(podeMover(s, { de: 'descarte' }, { para: 'coluna', col: 0 }), '6 vermelho sobre 7 preto');
  assert.ok(!podeMover(s, { de: 'descarte' }, { para: 'coluna', col: 1 }), '6 vermelho sobre 7 vermelho não');
  assert.ok(!podeMover(s, { de: 'descarte' }, { para: 'coluna', col: 2 }), 'coluna vazia só recebe rei');
  assert.ok(podeMover(s, { de: 'coluna', col: 3, idx: 1 }, { para: 'fundacao', f: 1 }), '2 de ouros sobe sobre o ás de ouros');
  assert.ok(!podeMover(s, { de: 'coluna', col: 3, idx: 0 }, { para: 'coluna', col: 2 }), 'carta fechada não se mexe');
  const t = mover(s, { de: 'coluna', col: 3, idx: 1 }, { para: 'fundacao', f: 1 });
  assert.equal(t.fundacoes[1]!.length, 2);
  assert.equal(t.colunas[3]![0]!.aberta, true, 'a carta de baixo se abre');
  assert.equal(t.lances, 1);
  assert.equal(mover(s, { de: 'descarte' }, { para: 'coluna', col: 1 }), s, 'lance que não vale devolve o mesmo estado');
});

test('paciência: a sequência inteira muda de coluna junto, e o rei vai para a coluna vazia', () => {
  const s: EstadoPaciencia = {
    monte: [],
    descarte: [],
    fundacoes: [[], [], [], []],
    colunas: [
      [{ ...c(5, 'paus'), aberta: false }, { ...c(13, 'copas'), aberta: true }, { ...c(12, 'paus'), aberta: true }, { ...c(11, 'ouros'), aberta: true }],
      [],
      [{ ...c(13, 'espadas'), aberta: true }],
      [], [], [], [],
    ],
    pesca: 1,
    voltas: 0,
    lances: 0,
  };
  const t = mover(s, { de: 'coluna', col: 0, idx: 1 }, { para: 'coluna', col: 1 });
  assert.deepEqual(t.colunas[1]!.map((x) => x.valor), [13, 12, 11]);
  assert.equal(t.colunas[0]!.length, 1);
  assert.equal(t.colunas[0]![0]!.aberta, true);
  assert.equal(melhorDestino(s, { de: 'coluna', col: 2, idx: 0 }), null, 'rei que já está no topo não troca de coluna vazia à toa');
  assert.ok(destinosDe(s, { de: 'coluna', col: 2, idx: 0 }).length > 0);
});

test('paciência: “terminar sozinho” leva todas as cartas abertas para as fundações e ganha', () => {
  // 4 colunas, cada uma uma escada do rei ao ás alternando a cor; juntas, as 52 cartas
  const escada = (preto: CartaF['naipe'], vermelho: CartaF['naipe'], reiPreto: boolean) =>
    Array.from({ length: 13 }, (_, i) => ({ ...c(13 - i, (i % 2 === 0) === reiPreto ? preto : vermelho), aberta: true }));
  let s: EstadoPaciencia = {
    monte: [],
    descarte: [],
    fundacoes: [[], [], [], []],
    colunas: [escada('espadas', 'copas', true), escada('espadas', 'copas', false), escada('paus', 'ouros', true), escada('paus', 'ouros', false), [], [], []],
    pesca: 1,
    voltas: 0,
    lances: 0,
  };
  assert.equal(new Set(s.colunas.flat().map(chave)).size, 52);
  assert.ok(podeTerminarSozinho(s));
  for (let k = 0; k < 52; k++) s = passoFinal(s);
  assert.ok(venceu(s));
  assert.equal(passoFinal(s), s, 'depois de ganhar, não há mais passo');
});

test('paciência: venceu quando as 4 fundações chegam ao rei', () => {
  const cheia = (n: CartaF['naipe']) => Array.from({ length: 13 }, (_, i) => c(i + 1, n));
  const s: EstadoPaciencia = { monte: [], descarte: [], fundacoes: [cheia('copas'), cheia('ouros'), cheia('espadas'), cheia('paus')], colunas: [[], [], [], [], [], [], []], pesca: 1, voltas: 0, lances: 0 };
  assert.ok(venceu(s));
  assert.ok(!podeTerminarSozinho(s));
});
