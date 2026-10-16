import { test } from 'node:test';
import assert from 'node:assert/strict';
import { semente, expandir } from './comum';
import {
  BARALHOS_B,
  CARTAS_B,
  JogadaInvalidaB,
  MAO_INICIAL,
  aplicarB,
  cartaB,
  ehValida,
  lancesSimples,
  novaPartidaB,
  quemAge,
  type BaralhoB,
  type BichoEmJogo,
  type EstadoB,
} from './biomas-engine';
import { jogadaDoLinuB, type NivelB } from './biomas-ia';

const BARALHOS = Object.keys(BARALHOS_B) as BaralhoB[];

/** um estado montado à mão: lado 0 com os bichos e biomas dados, na fase principal 1 */
function mesa(bichos0: string[], bichos1: string[], biomas0 = 0, turno = 5): EstadoB {
  const e = novaPartidaB('gelo', 'mata', semente(1));
  let uid = 1000;
  const bicho = (carta: string): BichoEmJogo => ({ uid: uid++, carta, virado: false, dano: 0, entrou: 1, bonus: 0 });
  e.turno = turno;
  e.lados[0].bichos = bichos0.map(bicho);
  e.lados[1].bichos = bichos1.map(bicho);
  e.lados[0].biomas = Array.from({ length: biomas0 }, () => ({ uid: uid++, carta: 'bioma-gelo', virado: false }));
  e.lados[0].mao = [];
  e.lados[1].mao = [];
  return e;
}

test('biomas: os 4 baralhos têm 40 cartas, 17 biomas, e só cartas que existem', () => {
  for (const b of BARALHOS) {
    const lista = expandir(BARALHOS_B[b].lista);
    assert.equal(lista.length, 40, b);
    assert.equal(lista.filter((c) => cartaB(c).tipo === 'bioma').length, 17, b);
    for (const c of lista) assert.ok(CARTAS_B[c], c);
  }
});

test('biomas: começa com 7 cartas e quem começa não compra no 1º turno', () => {
  const e = novaPartidaB('gelo', 'savana', semente(3));
  assert.equal(e.lados[0].mao.length, MAO_INICIAL);
  assert.equal(e.lados[1].mao.length, MAO_INICIAL);
  assert.equal(e.lados[0].baralho.length, 33);
  const fim = aplicarB(e, { t: 'fim' });
  assert.equal(fim.vez, 1);
  assert.equal(fim.lados[1].mao.length, MAO_INICIAL + 1, 'o segundo compra no seu 1º turno');
});

test('biomas: um bioma por turno, e o custo vira os biomas', () => {
  let e = mesa([], [], 0);
  e.lados[0].mao = [
    { uid: 1, carta: 'bioma-gelo' },
    { uid: 2, carta: 'bioma-gelo' },
    { uid: 3, carta: 'pipo' },
  ];
  e = aplicarB(e, { t: 'bioma', uid: 1 });
  assert.throws(() => aplicarB(e, { t: 'bioma', uid: 2 }), JogadaInvalidaB);
  assert.ok(!ehValida(e, { t: 'lancar', uid: 3 }), 'o Pipo custa 2');
  e.lados[0].biomas.push({ uid: 9, carta: 'bioma-gelo', virado: false });
  e = aplicarB(e, { t: 'lancar', uid: 3 });
  assert.equal(e.lados[0].biomas.filter((b) => b.virado).length, 2);
  assert.equal(e.lados[0].bichos.length, 1);
});

test('biomas: o bicho que chega não ataca, a não ser com Ímpeto', () => {
  let e = mesa([], [], 2);
  e.lados[0].mao = [
    { uid: 1, carta: 'pipo' },
    { uid: 2, carta: 'dede' },
  ];
  e = aplicarB(e, { t: 'lancar', uid: 1 });
  assert.ok(!ehValida(e, { t: 'atacar', uids: [1] }), 'o Pipo chegou agora');
  e.lados[0].biomas.push({ uid: 50, carta: 'bioma-gelo', virado: false });
  e = aplicarB(e, { t: 'lancar', uid: 2 });
  assert.ok(ehValida(e, { t: 'atacar', uids: [2] }), 'a Dedé tem Ímpeto');
});

test('biomas: combate com bloqueio, dano de uma vez, e o dano some no fim do turno', () => {
  let e = mesa(['tamandua'], ['capivara']);
  const [duque] = e.lados[0].bichos;
  const [capi] = e.lados[1].bichos;
  e = aplicarB(e, { t: 'atacar', uids: [duque!.uid] });
  assert.equal(quemAge(e), 1, 'quem defende escolhe os bloqueios');
  e = aplicarB(e, { t: 'bloquear', pares: [[capi!.uid, duque!.uid]] });
  e = aplicarB(e, { t: 'passar' });
  e = aplicarB(e, { t: 'passar' });
  assert.equal(e.fase, 'principal2');
  // Tamanduá 3/4 contra Capivara 2/4: ninguém sai
  assert.equal(e.lados[0].bichos[0]!.dano, 2);
  assert.equal(e.lados[1].bichos[0]!.dano, 3);
  assert.equal(e.lados[1].vida, 20);
  e = aplicarB(e, { t: 'fim' });
  assert.equal(e.lados[0].bichos[0]!.dano, 0, 'o dano some no fim do turno');
});

test('biomas: sem bloqueio, o dano vai na vida; Voo só é bloqueado por Voo ou Alcance', () => {
  let e = mesa(['vento'], ['capivara', 'tamandua']);
  const vento = e.lados[0].bichos[0]!;
  const [capi, tama] = e.lados[1].bichos;
  e = aplicarB(e, { t: 'atacar', uids: [vento.uid] });
  assert.ok(!ehValida(e, { t: 'bloquear', pares: [[capi!.uid, vento.uid]] }), 'a capivara não alcança o albatroz');
  assert.ok(ehValida(e, { t: 'bloquear', pares: [[tama!.uid, vento.uid]] }), 'o tamanduá tem Alcance');
  e = aplicarB(e, { t: 'bloquear', pares: [] });
  e = aplicarB(e, { t: 'passar' });
  e = aplicarB(e, { t: 'passar' });
  assert.equal(e.lados[1].vida, 18);
});

test('biomas: Atropelar passa o que sobra do bloqueador para a vida', () => {
  let e = mesa(['rinoceronte'], ['formiga']);
  const r = e.lados[0].bichos[0]!;
  const f = e.lados[1].bichos[0]!;
  e = aplicarB(e, { t: 'atacar', uids: [r.uid] });
  e = aplicarB(e, { t: 'bloquear', pares: [[f.uid, r.uid]] });
  e = aplicarB(e, { t: 'passar' });
  e = aplicarB(e, { t: 'passar' });
  assert.equal(e.lados[1].bichos.length, 0, 'a formiga sai');
  assert.equal(e.lados[1].vida, 16, '5 de força, 1 na formiga, 4 na vida');
});

test('biomas: magia rápida na janela depois dos bloqueios muda o combate', () => {
  let e = mesa(['pipo'], ['sapo']);
  e.lados[1].mao = [{ uid: 7, carta: 'pulo-onca' }];
  e.lados[1].biomas = [{ uid: 8, carta: 'bioma-mata', virado: false }];
  const pipo = e.lados[0].bichos[0]!;
  const sapo = e.lados[1].bichos[0]!;
  e = aplicarB(e, { t: 'atacar', uids: [pipo.uid] });
  e = aplicarB(e, { t: 'bloquear', pares: [[sapo.uid, pipo.uid]] });
  assert.equal(quemAge(e), 1, 'quem defende age primeiro na janela');
  e = aplicarB(e, { t: 'lancar', uid: 7, alvo: { lado: 1, uid: sapo.uid } });
  e = aplicarB(e, { t: 'passar' });
  e = aplicarB(e, { t: 'passar' });
  assert.equal(e.lados[0].bichos.length, 0, 'o sapo com +3/+3 (4/6) derruba o Pipo');
  assert.equal(e.lados[1].bichos.length, 1);
});

test('biomas: o combate que fecha a partida deixa o estado consistente (sem janela pendurada)', () => {
  let e = mesa(['malhada'], []);
  e.lados[1].vida = 3;
  const m = e.lados[0].bichos[0]!;
  e = aplicarB(e, { t: 'atacar', uids: [m.uid] });
  e = aplicarB(e, { t: 'bloquear', pares: [] });
  e = aplicarB(e, { t: 'passar' });
  e = aplicarB(e, { t: 'passar' });
  assert.equal(e.vencedor, 0);
  assert.equal(e.fase, 'principal2');
  assert.equal(quemAge(e), 0);
});

test('biomas: perde quem não tem carta para comprar', () => {
  let e = mesa([], []);
  e.lados[1].baralho = [];
  e = aplicarB(e, { t: 'fim' });
  assert.equal(e.vencedor, 0);
});

function partida(b0: BaralhoB, n0: NivelB, b1: BaralhoB, n1: NivelB, s: number) {
  const rng = semente(s);
  let e = novaPartidaB(b0, b1, rng, (s % 2) as 0 | 1);
  let passos = 0;
  while (e.vencedor === null && passos < 3000) {
    const quem = quemAge(e);
    const a = jogadaDoLinuB(e, quem === 0 ? n0 : n1, rng);
    e = aplicarB(e, a);
    passos++;
  }
  return { e, passos };
}

test('biomas: o Linu termina partidas com os 4 baralhos e os 3 níveis, sem jogada inválida', () => {
  let s = 1;
  for (const b0 of BARALHOS)
    for (const b1 of BARALHOS)
      for (const n of ['facil', 'medio', 'dificil'] as NivelB[]) {
        const { e, passos } = partida(b0, n, b1, n, s++);
        assert.notEqual(e.vencedor, null, `${b0}×${b1} ${n}: não terminou em ${passos} passos`);
        assert.ok(e.turno < 80, `${b0}×${b1} ${n}: partida longa demais (${e.turno} turnos)`);
      }
});

test('biomas: o difícil ganha do fácil na maioria das partidas', () => {
  let vitorias = 0;
  let total = 0;
  let s = 100;
  for (const b0 of BARALHOS)
    for (const b1 of BARALHOS)
      for (let k = 0; k < 2; k++) {
        const { e } = partida(b0, 'dificil', b1, 'facil', s++);
        total++;
        if (e.vencedor === 0) vitorias++;
      }
  assert.ok(vitorias / total >= 0.7, `o difícil ganhou ${vitorias} de ${total}`);
});

test('biomas: os baralhos ficam equilibrados entre si no nível médio', () => {
  const vit: Record<string, number> = {};
  let s = 500;
  for (const b0 of BARALHOS)
    for (const b1 of BARALHOS) {
      if (b0 === b1) continue;
      for (let k = 0; k < 6; k++) {
        const { e } = partida(b0, 'medio', b1, 'medio', s++);
        const ganhou = e.vencedor === 0 ? b0 : b1;
        vit[ganhou] = (vit[ganhou] ?? 0) + 1;
      }
    }
  const jogos = 12 * 6;
  for (const b of BARALHOS) {
    const taxa = (vit[b] ?? 0) / (jogos / 2);
    assert.ok(taxa >= 0.25 && taxa <= 0.75, `${b} ganhou ${(taxa * 100).toFixed(0)}% das suas partidas`);
  }
});

test('biomas: as jogadas simples são todas válidas', () => {
  const e = novaPartidaB('montanha', 'savana', semente(9));
  for (const a of lancesSimples(e)) assert.ok(ehValida(e, a), JSON.stringify(a));
});
