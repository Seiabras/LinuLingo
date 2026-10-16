import { test } from 'node:test';
import assert from 'node:assert/strict';
import { expandir, semente } from './comum';
import {
  BARALHOS_D,
  CARTAS_D,
  JogadaInvalidaD,
  KRILL_MAX,
  MAO_INICIAL_D,
  aplicarD,
  ehValidaD,
  lancesD,
  novaPartidaD,
  type BaralhoD,
  type BichoD,
  type EstadoD,
} from './duelo-bichos-engine';
import { jogadaDoLinuD, type NivelD } from './duelo-bichos-ia';

const BARALHOS = Object.keys(BARALHOS_D) as BaralhoD[];

function mesa(c0: string[], c1: string[], krill = 8, turno = 6): EstadoD {
  const e = novaPartidaD('gelo', 'mata', semente(1));
  let uid = 1000;
  const x = (carta: string): BichoD => ({ uid: uid++, carta, dano: 0, atacou: false, entrou: 1, bonus: 0, embaixo: [] });
  e.turno = turno;
  e.vez = 0;
  e.lados[0].campo = c0.map(x);
  e.lados[1].campo = c1.map(x);
  e.lados[0].krill = krill;
  e.lados[0].krillMax = krill;
  e.lados[0].mao = [];
  e.lados[1].mao = [];
  return e;
}

test('duelo de bichos: os 4 baralhos têm 30 cartas que existem, e as evoluções têm a base no baralho', () => {
  for (const b of BARALHOS) {
    const lista = expandir(BARALHOS_D[b].lista);
    assert.equal(lista.length, 30, b);
    for (const c of lista) {
      assert.ok(CARTAS_D[c], c);
      const de = CARTAS_D[c]!.evoluiDe;
      if (de) assert.ok(lista.includes(de), `${b}: ${c} sem a base ${de}`);
    }
  }
});

test('duelo de bichos: quem joga depois começa com 6; o krill sobe 1 por turno até 8', () => {
  let e = novaPartidaD('gelo', 'savana', semente(2));
  assert.equal(e.lados[0].mao.length, MAO_INICIAL_D);
  assert.equal(e.lados[1].mao.length, MAO_INICIAL_D + 1);
  assert.equal(e.lados[0].krill, 1);
  for (let k = 0; k < 20; k++) e = aplicarD(e, { t: 'passar' });
  assert.equal(e.lados[0].krillMax, KRILL_MAX);
});

test('duelo de bichos: evolução por cima do filhote que já estava no campo, e cura', () => {
  let e = mesa(['filhote-pinguim'], []);
  const base = e.lados[0].campo[0]!;
  base.dano = 1;
  e.lados[0].mao = [{ uid: 1, carta: 'tobias' }];
  e = aplicarD(e, { t: 'evoluir', uid: 1, sobre: base.uid });
  const t = e.lados[0].campo[0]!;
  assert.equal(t.carta, 'tobias');
  assert.equal(t.dano, 0);
  assert.deepEqual(t.embaixo, ['filhote-pinguim']);
  // o filhote que acabou de entrar não evolui
  let f = mesa([], []);
  f.lados[0].mao = [
    { uid: 1, carta: 'girino' },
    { uid: 2, carta: 'sapo' },
  ];
  f = aplicarD(f, { t: 'jogar', uid: 1 });
  assert.throws(() => aplicarD(f, { t: 'evoluir', uid: 2, sobre: 1 }), JogadaInvalidaD);
});

test('duelo de bichos: Guarda segura os ataques, Voo passa por cima', () => {
  const e = mesa(['pipo', 'colibri'], ['wendel']);
  const [pipo, colibri] = e.lados[0].campo;
  assert.ok(!ehValidaD(e, { t: 'atacar', uid: pipo!.uid, alvo: { lado: 1, vida: true } }));
  assert.ok(ehValidaD(e, { t: 'atacar', uid: colibri!.uid, alvo: { lado: 1, vida: true } }));
});

test('duelo de bichos: o dano fica, e a armadilha dispara no ataque', () => {
  let e = mesa(['malhada'], ['pipo']);
  e.lados[1].armadilhas = [{ uid: 77, carta: 'buraco-gelo' }];
  const m = e.lados[0].campo[0]!;
  const p = e.lados[1].campo[0]!;
  e = aplicarD(e, { t: 'atacar', uid: m.uid, alvo: { lado: 1, uid: p.uid } });
  assert.equal(e.lados[1].armadilhas.length, 0);
  // Malhada 5/4 leva 3 do buraco e 2 do Pipo: sai; o Pipo leva 5: sai
  assert.equal(e.lados[0].campo.length, 0);
  assert.equal(e.lados[1].campo.length, 0);
});

test('duelo de bichos: o eco anula o truque', () => {
  let e = mesa([], ['pipo']);
  e.lados[1].armadilhas = [{ uid: 9, carta: 'eco' }];
  e.lados[0].mao = [{ uid: 1, carta: 'corrente-fria' }];
  const p = e.lados[1].campo[0]!;
  e = aplicarD(e, { t: 'jogar', uid: 1, alvo: { lado: 1, uid: p.uid } });
  assert.equal(e.lados[1].campo[0]!.dano, 0);
});

function partida(b0: BaralhoD, n0: NivelD, b1: BaralhoD, n1: NivelD, s: number) {
  const rng = semente(s);
  let e = novaPartidaD(b0, b1, rng, (s % 2) as 0 | 1);
  let passos = 0;
  while (e.vencedor === null && passos < 4000) {
    e = aplicarD(e, jogadaDoLinuD(e, e.vez === 0 ? n0 : n1, rng));
    passos++;
  }
  return e;
}

test('duelo de bichos: o Linu termina as partidas com os 4 baralhos e os 3 níveis', () => {
  let s = 1;
  for (const b0 of BARALHOS)
    for (const b1 of BARALHOS)
      for (const n of ['facil', 'medio', 'dificil'] as NivelD[]) {
        const e = partida(b0, n, b1, n, s++);
        assert.notEqual(e.vencedor, null, `${b0}×${b1} ${n}`);
        assert.ok(e.turno < 70, `${b0}×${b1} ${n}: ${e.turno} turnos`);
      }
});

test('duelo de bichos: o difícil ganha do fácil na maioria', () => {
  let v = 0;
  let n = 0;
  let s = 300;
  for (const b0 of BARALHOS)
    for (const b1 of BARALHOS) {
      const e = partida(b0, 'dificil', b1, 'facil', s++);
      n++;
      if (e.vencedor === 0) v++;
    }
  assert.ok(v / n >= 0.75, `${v} de ${n}`);
});

test('duelo de bichos: os baralhos ficam equilibrados no nível difícil', () => {
  const vit: Record<string, number> = {};
  let s = 700;
  for (const b0 of BARALHOS)
    for (const b1 of BARALHOS) {
      if (b0 === b1) continue;
      for (let k = 0; k < 6; k++) {
        const e = partida(b0, 'dificil', b1, 'dificil', s++);
        const g = e.vencedor === 0 ? b0 : b1;
        vit[g] = (vit[g] ?? 0) + 1;
      }
    }
  for (const b of BARALHOS) {
    const taxa = (vit[b] ?? 0) / 36;
    assert.ok(taxa >= 0.25 && taxa <= 0.75, `${b}: ${(taxa * 100).toFixed(0)}%`);
  }
});

test('duelo de bichos: as jogadas listadas são válidas', () => {
  const e = novaPartidaD('montanha', 'savana', semente(4));
  for (const a of lancesD(e)) assert.ok(ehValidaD(e, a));
});
