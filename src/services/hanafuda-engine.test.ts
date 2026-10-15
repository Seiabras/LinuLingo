import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  BARALHO_HANA,
  decidir,
  decisaoDoLinu,
  escolhaDoMonteDoLinu,
  escolherDoMonte,
  jogadaDoLinu,
  jogarDaMao,
  maoEspecial,
  mesDe,
  novaRodada,
  paresNaMesa,
  pontosDe,
  yakusDe,
  type EstadoHana,
} from './hanafuda-engine';

/** gerador repetível (mulberry32) */
function semente(n: number) {
  let a = n >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const ids = (pred: (c: (typeof BARALHO_HANA)[number]) => boolean) => BARALHO_HANA.filter(pred).map((c) => c.id);

test('hanafuda: 48 cartas, 12 meses com 4 cada; 5 luzes, 9 animais, 10 fitas, 24 comuns', () => {
  assert.equal(BARALHO_HANA.length, 48);
  for (let m = 1; m <= 12; m++) assert.equal(BARALHO_HANA.filter((c) => c.mes === m).length, 4);
  const n = (t: string) => BARALHO_HANA.filter((c) => c.tipo === t).length;
  assert.deepEqual([n('luz'), n('animal'), n('fita'), n('comum')], [5, 9, 10, 24]);
  assert.equal(BARALHO_HANA.filter((c) => c.fita === 'poema').length, 3);
  assert.equal(BARALHO_HANA.filter((c) => c.fita === 'azul').length, 3);
});

test('hanafuda: yaku das luzes (sankō, shikō, ame-shikō, gokō)', () => {
  const luzes = ids((c) => c.tipo === 'luz');
  const chuva = ids((c) => c.especial === 'chuva')[0];
  const semChuva = luzes.filter((l) => l !== chuva);
  assert.deepEqual(yakusDe(semChuva.slice(0, 3)).map((y) => [y.id, y.pontos]), [['sanko', 5]]);
  assert.deepEqual(yakusDe([...semChuva.slice(0, 2), chuva]), []); // três com a chuva não vale
  assert.deepEqual(yakusDe(semChuva).map((y) => [y.id, y.pontos]), [['shiko', 8]]);
  assert.deepEqual(yakusDe([...semChuva.slice(0, 3), chuva]).map((y) => [y.id, y.pontos]), [['ameshiko', 7]]);
  assert.equal(pontosDe(luzes), 10);
});

test('hanafuda: saquê com lua e com cortina, inoshikachō, fitas e comuns contam +1 por carta a mais', () => {
  const [saque] = ids((c) => c.especial === 'saque');
  const [lua] = ids((c) => c.especial === 'lua');
  const [cortina] = ids((c) => c.especial === 'cortina');
  assert.equal(pontosDe([saque, lua]), 5);
  assert.equal(pontosDe([saque, lua, cortina]), 10);
  const isc = ids((c) => c.especial === 'javali' || c.especial === 'veado' || c.especial === 'borboletas');
  assert.equal(pontosDe(isc), 5);
  const animais = ids((c) => c.tipo === 'animal');
  // os 9 animais: inoshikachō 5+6, tane 5, e o saquê sozinho não faz kasu
  assert.equal(yakusDe(animais).find((y) => y.id === 'tane')!.pontos, 5);
  const poemas = ids((c) => c.fita === 'poema');
  const azuis = ids((c) => c.fita === 'azul');
  assert.deepEqual(yakusDe(poemas).map((y) => y.id), ['akatan']);
  assert.deepEqual(yakusDe([...poemas, ...azuis]).map((y) => [y.id, y.pontos]), [['chofuku', 10], ['tanzaku', 2]]);
  const comuns = ids((c) => c.tipo === 'comum');
  assert.equal(yakusDe(comuns.slice(0, 9)).length, 0);
  assert.equal(yakusDe(comuns.slice(0, 10))[0].pontos, 1);
  assert.equal(yakusDe([...comuns.slice(0, 9), saque]).find((y) => y.id === 'kasu')!.pontos, 1); // saquê também é comum
});

test('hanafuda: teshi e kuttsuki', () => {
  assert.equal(maoEspecial([0, 1, 2, 3, 4, 8, 12, 16]), 'teshi');
  assert.equal(maoEspecial([0, 1, 4, 5, 8, 9, 12, 13]), 'kuttsuki');
  assert.equal(maoEspecial([0, 1, 4, 5, 8, 9, 12, 16]), null);
});

test('hanafuda: distribuição dá 8 + 8 + 8 e monte de 24, sem repetir carta; mesma semente, mesmo jogo', () => {
  for (let s = 1; s < 50; s++) {
    const e = novaRodada(semente(s), 0);
    const todas = [...e.maos[0], ...e.maos[1], ...e.campo, ...e.monte];
    assert.equal(new Set(todas).size, 48);
    assert.deepEqual([e.maos[0].length, e.maos[1].length, e.campo.length, e.monte.length], [8, 8, 8, 24]);
    const meses = new Map<number, number>();
    for (const c of e.campo) meses.set(mesDe(c), (meses.get(mesDe(c)) ?? 0) + 1);
    assert.ok([...meses.values()].every((n) => n < 4));
  }
  assert.deepEqual(novaRodada(semente(7)), novaRodada(semente(7)));
});

function estadoFixo(parcial: Partial<EstadoHana>): EstadoHana {
  return {
    maos: [[], []],
    campo: [],
    monte: [],
    capturas: [[], []],
    vez: 0,
    oya: 0,
    fase: 'jogar',
    koi: [0, 0],
    marcados: [0, 0],
    pendente: null,
    ultima: null,
    resultado: null,
    ...parcial,
  };
}

test('hanafuda: jogar casa com o mês da mesa, pede escolha com dois pares e leva os quatro com três', () => {
  // mão: pinheiro comum (2); mesa: grou (0) e cerejeira (10); monte: ameixeira comum (6), sem par
  let e = estadoFixo({ maos: [[2, 20], [30]], campo: [0, 10], monte: [6, 40] });
  e = jogarDaMao(e, 2);
  assert.deepEqual(e.capturas[0].sort(), [0, 2]);
  assert.deepEqual(e.campo.sort((a, b) => a - b), [6, 10]);
  assert.equal(e.vez, 1);

  const dois = estadoFixo({ maos: [[2, 20], [30]], campo: [0, 1], monte: [6] });
  assert.throws(() => jogarDaMao(dois, 2));
  const d = jogarDaMao(dois, 2, 1);
  assert.deepEqual(d.capturas[0].sort(), [1, 2]);
  assert.ok(d.campo.includes(0));

  const tres = jogarDaMao(estadoFixo({ maos: [[3, 20], [30]], campo: [0, 1, 2], monte: [6] }), 3);
  assert.deepEqual(tres.capturas[0].sort(), [0, 1, 2, 3]);
});

test('hanafuda: carta do monte com dois pares espera a escolha', () => {
  const e = jogarDaMao(estadoFixo({ maos: [[20, 21], [30]], campo: [0, 1], monte: [2] }), 20);
  assert.equal(e.fase, 'escolherMonte');
  assert.deepEqual(paresNaMesa(e, e.pendente!).sort(), [0, 1]);
  const f = escolherDoMonte(e, 0);
  assert.deepEqual(f.capturas[0].sort(), [0, 2]);
  assert.equal(f.fase, 'jogar');
});

test('hanafuda: yaku novo pede decisão; parar marca com dobro de 7+ e de koi-koi do outro', () => {
  // já tem 2 luzes sem chuva; leva a terceira (fênix 44) com uma paulównia comum (45)
  const base = estadoFixo({ maos: [[45, 20], [30, 31]], campo: [44], monte: [6, 7], capturas: [[0, 8], []] });
  const e = jogarDaMao(base, 45);
  assert.equal(e.fase, 'decidir');
  const parou = decidir(e, 'parar');
  assert.equal(parou.resultado!.pontos, 5);
  assert.equal(parou.resultado!.vencedor, 0);
  const comKoiDoOutro = decidir({ ...e, koi: [0, 1] }, 'parar');
  assert.equal(comKoiDoOutro.resultado!.pontos, 10);
  // koi-koi: passa a vez e só volta a decidir com yaku maior
  const koi = decidir(e, 'koikoi');
  assert.equal(koi.vez, 1);
  assert.equal(koi.marcados[0], 5);
  // 7 ou mais: dobra
  const sete = decidir({ ...e, capturas: [[0, 8, 44, 45, 32], []] }, 'parar');
  assert.equal(sete.resultado!.pontos, 20); // sankō 5 + hanami 5 = 10 → ×2
});

test('hanafuda: sem cartas e sem ninguém parar, o oya ganha 1 ponto', () => {
  const e = jogarDaMao(estadoFixo({ maos: [[], [20]], campo: [], monte: [24], vez: 1, oya: 0 }), 20);
  assert.equal(e.fase, 'fim');
  assert.deepEqual([e.resultado!.vencedor, e.resultado!.pontos, e.resultado!.motivo], [0, 1, 'oya-ken']);
});

test('hanafuda: partidas inteiras do Linu contra o Linu terminam sempre, sem perder cartas', () => {
  for (let s = 1; s <= 200; s++) {
    let e = novaRodada(semente(s), (s % 2) as 0 | 1);
    let passos = 0;
    while (e.fase !== 'fim') {
      if (e.fase === 'jogar') {
        const j = jogadaDoLinu(e);
        e = jogarDaMao(e, j.carta, j.alvo);
      } else if (e.fase === 'escolherMonte') e = escolherDoMonte(e, escolhaDoMonteDoLinu(e));
      else e = decidir(e, decisaoDoLinu(e));
      const total = e.maos[0].length + e.maos[1].length + e.campo.length + e.monte.length + e.capturas[0].length + e.capturas[1].length + (e.pendente !== null ? 1 : 0);
      assert.equal(total, 48);
      assert.ok(++passos < 100);
    }
    assert.ok(e.resultado && e.resultado.pontos > 0);
  }
});
