import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as B from './bao-engine';
import { lanceBao } from './bao-ia';

/**
 * A partida de exemplo das regras de Donkers (2001): Ramadhan × Kijumbe, campeonato de Zanzibar,
 * 17/10/1994 (o Sul desiste depois do 26º lance). Notação: a cova (1 a 8, da esquerda de quem joga;
 * na fase mtaji, com a fileira: A/a a da frente, B/b a de trás), o sentido L ou R em que a mão anda
 * (numa captura da fase namua, o kichwa escolhido), “*” takasa e “>” jogar a casa (safari).
 */
const PARTIDA = `1: 7L* 5R;
2: 6R* 6R*;
3: 7R* 8L*;
4: 8R* 6R*;
5: 5R* 8L*;
6: 7R* 6R*;
7: 6R* 8L*;
8: 7R* 6R*;
9: 8R* 7;
10: 5L* 5L;
11: 3R 1;
12: 5R 7R*;
13: 8 2;
14: 8 2;
15: 3R* 5R>;
16: 5R 3L;
17: 8 6R;
18: 4R 7;
19: 5R 8;
20: 5R 7;
21: 7 6L;
22: 2 8;
23: B2L b7R;
24: A7L b8R;
25: A3R a6L;
26: A7L a6L;`;

/** Traduz um lance da notação para o `LanceBao` deste motor. */
function traduz(s: B.BaoState, txt: string): B.LanceBao {
  const m = /^([ABab])?(\d)([LR])?(\*)?(>)?$/.exec(txt);
  assert.ok(m, `notação: ${txt}`);
  const [, fileira, casa, lado, , casaJogada] = m!;
  const h = Number(casa);
  const tras = fileira === 'B' || fileira === 'b';
  const k = tras ? 16 - h : h - 1;
  let dir: B.Direcao;
  const captura = s.fase === 'namua' && !txt.includes('*');
  if (captura) {
    // numa captura da fase namua, L/R é o kichwa: o da esquerda semeia em +1, o da direita em −1
    dir = lado === 'L' ? 1 : lado === 'R' ? -1 : k <= 1 ? 1 : -1;
  } else if (tras) dir = lado === 'L' ? 1 : -1;
  else dir = lado === 'R' ? 1 : -1;
  // na fase mtaji, uma captura de kichwa/kimbi também pode vir sem lado
  if (!lado && !captura) dir = k <= 1 ? 1 : -1;
  return { k, dir, safari: casaJogada ? true : undefined };
}

test('Bao: a posição inicial da regra 2.1 (6 na nyumba, 2 e 2 à direita, 22 na mão)', () => {
  const s = B.createInitialState();
  assert.deepEqual(s.covas[0].slice(0, 8), [0, 0, 0, 0, 6, 2, 2, 0]);
  assert.deepEqual(s.reserva, [22, 22]);
  assert.equal(s.fase, 'namua');
  assert.equal(B.sementesDe(s, 0), 32);
});

test('Bao: a partida Ramadhan × Kijumbe (Zanzibar, 1994) passa inteira pelas regras do motor', () => {
  let s = B.createInitialState();
  const plies = PARTIDA.split('\n').flatMap((linha) => linha.replace(/^\d+:\s*/, '').replace(/;.*$/, '').trim().split(/\s+/));
  assert.equal(plies.length, 52);
  for (const [i, txt] of plies.entries()) {
    const l = traduz(s, txt);
    const legais = B.lancesLegais(s);
    const achou = legais.find((x) => x.k === l.k && x.dir === l.dir && !!x.safari === !!l.safari);
    assert.ok(achou, `lance ${i + 1} (${txt}) não é legal aqui; legais: ${JSON.stringify(legais)}`);
    // o asterisco diz se é takasa (sem captura)
    const e = B.jogar(s, achou!);
    assert.equal(e.ultimo!.capturou, !txt.includes('*'), `lance ${i + 1} (${txt}): captura?`);
    s = e;
    if (i === 43) assert.equal(s.fase, 'mtaji', 'depois de 44 meias-jogadas, acaba a fase namua');
    assert.equal(s.winner, null, `lance ${i + 1}: a partida não acabou`);
  }
  assert.equal(B.sementesDe(s, 0) + B.sementesDe(s, 1), 64);
});

test('Bao: na namua, captura é obrigatória; no kimbi o kichwa é forçado', () => {
  const s = B.createInitialState();
  // no começo, as covas cheias do Sul (k 4, 5, 6) ficam de frente para as vazias do Norte: takasa
  assert.ok(B.lancesLegais(s).every((l) => [4, 5, 6].includes(l.k)));
  const t = B.jogar(s, { k: 6, dir: -1 }); // 7L*
  // agora o Norte tem captura (5R da partida)
  const caps = B.lancesLegais(t);
  assert.ok(caps.some((l) => l.k === 4 && l.dir === -1));
});

test('Bao: a casa com 6 ou mais na namua só sai sozinha, e dá só 2 sementes (o “imposto”)', () => {
  const s = B.createInitialState();
  const c = s.covas[0].slice();
  c[5] = 0;
  c[6] = 0;
  const so = { ...s, covas: [c, s.covas[1]] as [number[], number[]] };
  const ls = B.lancesLegais(so);
  assert.ok(ls.every((l) => l.k === B.NYUMBA));
  const e = B.jogar(so, ls[0]!);
  assert.equal(e.covas[0][B.NYUMBA], 5, '6 + 1 − 2');
  assert.ok(e.casa[0], 'a casa continua');
});

test('Bao la kujifunza: 2 sementes em todas as covas, sem namua e sem casa', () => {
  const s = B.createInitialState('kujifunza');
  assert.equal(s.fase, 'mtaji');
  assert.ok(s.covas[0].every((n) => n === 2));
  assert.deepEqual(s.casa, [false, false]);
  assert.ok(B.lancesLegais(s).length > 0);
});

test('Bao: captura na mtaji e quem fica com a fileira da frente vazia perde', () => {
  const s = B.createInitialState('kujifunza');
  // o Sul semeia as 2 sementes da cova k1 para a direita: a última cai em k3 (já ocupada), de frente
  // para a cova k4 do Norte, a única ocupada na frente dele
  const sul = Array(16).fill(0) as number[];
  sul[1] = 2;
  sul[3] = 2;
  const norte = Array(16).fill(0) as number[];
  norte[4] = 4;
  norte[10] = 5;
  const p: B.BaoState = { ...s, covas: [sul, norte] };
  assert.ok(B.lancesLegais(p).some((l) => l.k === 1 && l.dir === 1));
  const e = B.jogar(p, { k: 1, dir: 1 });
  assert.equal(e.winner, 0);
  assert.equal(e.motivo, 'frente-vazia');
});

test('Linu no bao: partida Linu contra Linu (kujifunza e kiswahili) só tem lances válidos e é rápida', () => {
  let semente = 21;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  for (const variante of ['kujifunza', 'kiswahili'] as const) {
    let s = B.createInitialState(variante);
    let maior = 0;
    for (let k = 0; k < 40 && s.winner === null; k++) {
      const t0 = Date.now();
      const l = lanceBao(s, k % 2 ? 'dificil' : 'medio', sorteio)!;
      maior = Math.max(maior, Date.now() - t0);
      assert.ok(B.lancesLegais(s).some((x) => x.k === l.k && x.dir === l.dir && !!x.safari === !!l.safari));
      s = B.jogar(s, l);
      assert.equal(B.sementesDe(s, 0) + B.sementesDe(s, 1), 64, 'as 64 sementes continuam no jogo');
    }
    assert.ok(maior < 2500, `${variante}: lance mais lento ${maior} ms`);
  }
});
