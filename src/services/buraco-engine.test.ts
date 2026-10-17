import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rngComSemente, type CartaF } from './baralho-frances';
import {
  arrumar,
  baixar,
  baralhoDuplo,
  comprarDoMonte,
  darMao,
  descartar,
  ehLimpa,
  juntar,
  linuPegaLixo,
  novoJogo,
  passoDoLinu,
  pegarLixo,
  pontosDaMao,
  proximaMao,
  type CartaB,
  type EstadoBuraco,
} from './buraco-engine';

let proximoId = 1000;
const c = (valor: number, naipe: CartaF['naipe']): CartaB => ({ valor: valor as CartaF['valor'], naipe, id: proximoId++ });
const valores = (g: CartaB[] | undefined) => g?.map((x) => (x.valor === 2 && x.naipe !== 'copas' ? 'W' : x.valor));

test('buraco: dois baralhos, 104 cartas com ids únicos', () => {
  const b = baralhoDuplo();
  assert.equal(b.length, 104);
  assert.equal(new Set(b.map((x) => x.id)).size, 104);
});

test('buraco: arrumar sequências do mesmo naipe, com um coringa no máximo', () => {
  assert.deepEqual(valores(arrumar([c(5, 'copas'), c(3, 'copas'), c(4, 'copas')])?.ordem), [3, 4, 5]);
  assert.equal(arrumar([c(3, 'copas'), c(4, 'copas'), c(5, 'ouros')]), null, 'naipes diferentes');
  assert.equal(arrumar([c(3, 'copas'), c(4, 'copas')]), null, 'menos de 3');
  assert.equal(arrumar([c(3, 'copas'), c(4, 'copas'), c(4, 'copas')]), null, 'carta repetida');
  const comCoringa = arrumar([c(3, 'copas'), c(5, 'copas'), c(2, 'paus')]);
  assert.deepEqual(valores(comCoringa?.ordem), [3, 'W', 5]);
  assert.equal(comCoringa?.suja, true);
  assert.equal(arrumar([c(3, 'copas'), c(6, 'copas'), c(2, 'paus')]), null, 'faltam duas e só há um coringa');
  assert.equal(arrumar([c(3, 'copas'), c(4, 'copas'), c(2, 'paus'), c(2, 'ouros')]), null, 'dois coringas não');
  const doisNatural = arrumar([c(1, 'copas'), c(2, 'copas'), c(3, 'copas')]);
  assert.equal(doisNatural?.suja, false, 'o 2 do naipe no lugar dele é carta comum');
  assert.deepEqual(valores(arrumar([c(12, 'paus'), c(13, 'paus'), c(1, 'paus')])?.ordem), [12, 13, 1], 'o ás depois do rei');
  assert.deepEqual(valores(arrumar([c(12, 'paus'), c(13, 'paus'), c(2, 'ouros')])?.ordem), ['W', 12, 13], 'sem lugar em cima, o coringa vai para baixo');
});

test('buraco: canastra limpa e suja, e os pontos da mão', () => {
  const limpa = [3, 4, 5, 6, 7, 8, 9].map((v) => c(v, 'espadas'));
  assert.ok(ehLimpa(arrumar(limpa)!.ordem));
  const suja = arrumar([3, 4, 5, 6, 7, 9].map((v) => c(v, 'espadas')).concat(c(2, 'copas')))!;
  assert.equal(suja.suja, true);
  assert.ok(!ehLimpa(suja.ordem));
  const s: EstadoBuraco = { ...darMao([0, 0], 0, rngComSemente(1)), jogos: [[arrumar(limpa)!.ordem], [suja.ordem]], maos: [[], [c(1, 'ouros')]], pegouMorto: [true, false] };
  // limpa: 5×5 (3 a 7) + 2×10 (8, 9) + 200 + batida 100 = 345
  assert.equal(pontosDaMao(s, 0, 0), 345);
  // suja: 5×5 + 10 (9) + 10 (o 2) + 100 − 15 (o ás na mão) − 100 (sem morto) = 30
  assert.equal(pontosDaMao(s, 1, 0), 30);
});

test('buraco: comprar, baixar, juntar e descartar', () => {
  const mao = [c(3, 'copas'), c(4, 'copas'), c(5, 'copas'), c(6, 'copas'), c(13, 'paus')];
  let s: EstadoBuraco = { ...darMao([0, 0], 0, rngComSemente(2)), maos: [mao, [c(9, 'ouros')]] };
  assert.equal(baixar(s, [mao[0]!.id, mao[1]!.id, mao[2]!.id]), s, 'antes de comprar não baixa');
  s = comprarDoMonte(s);
  assert.equal(s.fase, 'jogar');
  assert.equal(s.maos[0].length, 6);
  s = baixar(s, [mao[0]!.id, mao[1]!.id, mao[2]!.id]);
  assert.equal(s.jogos[0].length, 1);
  s = juntar(s, 0, [mao[3]!.id]);
  assert.deepEqual(valores(s.jogos[0][0]), [3, 4, 5, 6]);
  assert.equal(juntar(s, 0, [mao[4]!.id]), s, 'o rei de paus não entra');
  s = descartar(s, mao[4]!.id);
  assert.equal(s.vez, 1);
  assert.equal(s.fase, 'comprar');
  assert.equal(s.lixo[s.lixo.length - 1]!.id, mao[4]!.id);
});

test('buraco: pegar o lixo inteiro, e a carta única do lixo não volta para ele na mesma vez', () => {
  let s: EstadoBuraco = { ...darMao([0, 0], 0, rngComSemente(3)) };
  const lixo = s.lixo[0]!;
  s = pegarLixo(s);
  assert.equal(s.lixo.length, 0);
  assert.ok(s.maos[0].some((x) => x.id === lixo.id));
  assert.equal(descartar(s, lixo.id), s);
});

test('buraco: sem cartas na mão pega o morto; depois, só bate com canastra limpa', () => {
  const mao = [c(3, 'copas'), c(4, 'copas'), c(5, 'copas')];
  let s: EstadoBuraco = { ...darMao([0, 0], 0, rngComSemente(4)), maos: [mao, [c(9, 'ouros')]], fase: 'jogar' };
  s = baixar(s, mao.map((x) => x.id));
  assert.ok(s.pegouMorto[0], 'baixou tudo: pegou o morto');
  assert.equal(s.maos[0].length, 11);
  assert.equal(s.fase, 'jogar', 'e continua jogando');

  const ultima = c(8, 'paus');
  const semLimpa: EstadoBuraco = { ...s, maos: [[ultima], s.maos[1]] };
  assert.equal(descartar(semLimpa, ultima.id), semLimpa, 'sem canastra limpa não pode ficar sem cartas');
  const limpa = arrumar([3, 4, 5, 6, 7, 8, 9].map((v) => c(v, 'espadas')))!.ordem;
  const comLimpa: EstadoBuraco = { ...semLimpa, jogos: [[limpa], []] };
  const bateu = descartar(comLimpa, ultima.id);
  assert.ok(bateu.fase === 'fimMao' || bateu.fase === 'fimJogo');
  assert.equal(bateu.resultado?.bateu, 0);
});

test('buraco: o Linu pega o lixo quando a carta serve num jogo dele', () => {
  const s: EstadoBuraco = { ...darMao([0, 0], 1, rngComSemente(5)), vez: 1, jogos: [[], [[c(3, 'ouros'), c(4, 'ouros'), c(5, 'ouros')]]], lixo: [c(6, 'ouros')] };
  assert.ok(linuPegaLixo(s, 1));
  assert.ok(!linuPegaLixo({ ...s, lixo: [c(10, 'paus')], maos: [s.maos[0], [c(1, 'copas'), c(7, 'espadas')]] }, 1));
});

test('buraco: partidas do Linu contra o Linu acabam (todas as cartas sempre contadas)', () => {
  for (let semente = 1; semente <= 6; semente++) {
    const rng = rngComSemente(semente);
    let s = novoJogo(0, rng);
    let maos = 0;
    for (let passos = 0; passos < 40000 && s.fase !== 'fimJogo' && maos < 40; passos++) {
      if (s.fase === 'fimMao') {
        s = proximaMao(s, rng);
        maos++;
        continue;
      }
      const total = s.monte.length + s.lixo.length + s.maos[0].length + s.maos[1].length + (s.mortos[0]?.length ?? 0) + (s.mortos[1]?.length ?? 0) + s.jogos.flat(2).length;
      assert.equal(total, 104, `semente ${semente}: carta sumiu ou duplicou`);
      if (s.fase === 'comprar') s = linuPegaLixo(s, s.vez) ? pegarLixo(s) : comprarDoMonte(s);
      else {
        const antes = s;
        s = passoDoLinu(s, s.vez);
        assert.notEqual(s, antes, `semente ${semente}: o Linu travou`);
      }
    }
    assert.ok(s.fase === 'fimJogo' || maos >= 40, `semente ${semente}: não terminou`);
  }
});
