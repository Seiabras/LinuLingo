import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as P from './pachisi-engine';
import { lancePachisi } from './pachisi-ia';
import { lotesCom } from './lotes';

/** búzios com `k` bocas para cima */
const buzios = (k: number) => lotesCom(6, k);

test('Pachisi: o caminho tem 83 casas, cruza o tabuleiro todo e volta pelo meio do braço', () => {
  for (const c of P.CAMINHOS) assert.equal(c.length, 83);
  // juntos, os quatro caminhos cobrem as 96 casas dos braços
  const todas = new Set(P.CAMINHOS.flatMap((c) => c.map(P.chave)));
  assert.equal(todas.size, 96, 'as 96 casas dos braços');
  assert.equal(P.CASTELOS.size, 12);
  assert.ok(P.ehCastelo([18, 9]) && P.ehCastelo([15, 8]) && P.ehCastelo([9, 18]));
});

test('Pachisi: os búzios valem 2 a 6, 10 e 25; 6, 10 e 25 são graça', () => {
  assert.deepEqual(P.valorDosBuzios(0), { valor: 25, graca: true });
  assert.deepEqual(P.valorDosBuzios(1), { valor: 10, graca: true });
  assert.deepEqual(P.valorDosBuzios(3), { valor: 3, graca: false });
  assert.deepEqual(P.valorDosBuzios(6), { valor: 6, graca: true });
});

test('Pachisi: a primeira peça sai com qualquer número; a segunda só com graça', () => {
  let s = P.lancarCom(P.createInitialState(), buzios(3));
  assert.deepEqual(P.origensLegais(s), [P.NO_CHARKONI]);
  s = P.mover(s, P.NO_CHARKONI);
  assert.equal(s.pos[0]![0], 2, 'andou 3 a partir do Charkoni');
  assert.equal(s.turn, 1, 'sem graça, a vez passa para o Vermelho');
  // de volta ao Amarelo: com 4, só a que já saiu anda
  const t = P.lancarCom({ ...s, turn: 0 }, buzios(4));
  assert.deepEqual(P.origensLegais(t), [2]);
  // com graça (6), outra peça pode sair, e lança de novo
  const u = P.lancarCom({ ...s, turn: 0 }, buzios(6));
  assert.ok(P.origensLegais(u).includes(P.NO_CHARKONI));
  assert.equal(P.mover(u, P.NO_CHARKONI).turn, 0, 'graça: lança de novo');
});

test('Pachisi: captura fora do castelo dá outro lançamento; no castelo inimigo não se para', () => {
  const base = P.createInitialState();
  // Amarelo na posição 10; Vermelho numa casa que é a posição 13 do Amarelo
  const alvo = P.CAMINHOS[0]![13]!;
  const iVermelho = P.CAMINHOS[1]!.findIndex((c) => c[0] === alvo[0] && c[1] === alvo[1]);
  assert.ok(iVermelho >= 0);
  const pos = base.pos.map((x) => x.slice());
  pos[0]![0] = 10;
  pos[1]![0] = iVermelho;
  const s = P.lancarCom({ ...base, pos, saiu: [true, true, false, false] }, buzios(3));
  const t = P.mover(s, 10);
  assert.equal(t.pos[1]![0], P.NO_CHARKONI, 'voltou ao Charkoni');
  assert.equal(t.turn, 0, 'capturou: lança de novo');
  // castelo (a ponta do braço, posição 7 do Amarelo) ocupado pelo Vermelho: não pode parar
  const castelo = P.CAMINHOS[0]![7]!;
  const iV = P.CAMINHOS[1]!.findIndex((c) => c[0] === castelo[0] && c[1] === castelo[1]);
  const pos2 = base.pos.map((x) => x.slice());
  pos2[0]![0] = 4;
  pos2[1]![0] = iV;
  const u = P.lancarCom({ ...base, pos: pos2, saiu: [true, true, false, false] }, buzios(3));
  assert.ok(!P.origensLegais(u).includes(4));
});

test('Pachisi: casa só com o número exato; a dupla com as 8 peças em casa vence', () => {
  const base = P.createInitialState();
  const pos = base.pos.map((x) => x.slice());
  pos[0] = [P.CASA, P.CASA, P.CASA, 80];
  pos[2] = [P.CASA, P.CASA, P.CASA, P.CASA];
  const s = P.lancarCom({ ...base, pos, saiu: [true, true, true, true] }, buzios(3));
  assert.ok(P.origensLegais(s).includes(80), '80 + 3 = 83, a casa');
  assert.equal(P.mover(s, 80).winner, 0);
  const t = P.lancarCom({ ...base, pos, saiu: [true, true, true, true] }, buzios(4));
  assert.ok(!P.origensLegais(t).includes(80), '80 + 4 passa da casa');
});

test('Linu no pachisi: partida curta Linu × Linu termina', () => {
  let semente = 17;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = P.createInitialState(2);
  for (let k = 0; k < 20000 && s.winner === null; k++) {
    if (s.fase === 'lancar') s = P.lancar(s, sorteio);
    else {
      const o = lancePachisi(s, P.jogadorDa(s.turn) === 0 ? 'dificil' : 'medio', sorteio);
      s = o === null ? P.naoMover(s) : P.mover(s, o);
    }
  }
  assert.notEqual(s.winner, null);
});
