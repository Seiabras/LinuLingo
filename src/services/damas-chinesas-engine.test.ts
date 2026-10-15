import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  CASAS_DA_PONTA,
  CELULAS,
  createInitialState,
  destinoBloqueado,
  indice,
  jogar,
  lancesDaPeca,
  lancesLegais,
  N_CELULAS,
  oposta,
  PONTA,
  podeParar,
  quemJoga,
  saltosDe,
  type EstrelaState,
} from './damas-chinesas-engine';
import { BUSCA_DAMAS_CHINESAS, escolherLance, NIVEIS } from './jogos-ia';

/** Um tabuleiro vazio com as peças dadas ([q, r, dono]). */
const montar = (pecas: [number, number, number][], jogadores = [0, 3], vez = 0): EstrelaState => {
  const board = Array<number>(N_CELULAS).fill(-1);
  for (const [q, r, d] of pecas) board[indice(q, r)] = d;
  return { board, jogadores, vez, winner: null, ultimo: null, lances: 0 };
};
const destinos = (s: EstrelaState, q: number, r: number) =>
  lancesDaPeca(s, indice(q, r))
    .map((l) => l.para)
    .sort((a, b) => a - b);
const ids = (...cs: [number, number][]) => cs.map(([q, r]) => indice(q, r)).sort((a, b) => a - b);

test('damas chinesas: estrela de 121 casas, hexágono de 61 e 6 pontas de 10', () => {
  assert.equal(CELULAS.length, 121);
  assert.equal(PONTA.filter((p) => p === -1).length, 61);
  for (let p = 0; p < 6; p++) assert.equal(CASAS_DA_PONTA[p]!.length, 10);
  // cada ponta tem a oposta do outro lado do centro
  for (let p = 0; p < 6; p++) {
    const a = CELULAS[CASAS_DA_PONTA[p]![0]!]!;
    const somaQ = CASAS_DA_PONTA[p]!.reduce((t, i) => t + CELULAS[i]!.q, 0) + CASAS_DA_PONTA[oposta(p)]!.reduce((t, i) => t + CELULAS[i]!.q, 0);
    assert.equal(somaQ, 0, `ponta ${p} (${a.q},${a.r})`);
  }
});

test('damas chinesas: a dois, 10 peças em pontas opostas; a três, uma ponta sim, uma não', () => {
  const s = createInitialState(2);
  assert.deepEqual(s.jogadores, [0, 3]);
  assert.equal(s.board.filter((x) => x === 0).length, 10);
  assert.equal(s.board.filter((x) => x === 3).length, 10);
  assert.equal(quemJoga(s), 0);
  const t = createInitialState(3);
  assert.deepEqual(t.jogadores, [0, 2, 4]);
  assert.equal(t.board.filter((x) => x !== -1).length, 30);
});

test('damas chinesas: na abertura, só as peças da frente andam um passo ou saltam', () => {
  const s = createInitialState(2);
  const ls = lancesLegais(s);
  for (const l of ls) assert.equal(PONTA[l.para], -1, 'todo lance de abertura vai para o hexágono do meio');
  // contado à mão: as 4 peças da frente dão 2 passos cada (8) e as 3 da segunda fileira saltam
  // sobre a da frente em 2 direções cada (6); a terceira e a quarta fileiras ficam presas
  assert.equal(ls.filter((l) => l.caminho.length === 2 && !l.troca).length, 14);
  assert.equal(ls.length, 14);
});

test('damas chinesas: passo para a vizinha vazia; salto sobre peça de qualquer cor, sem captura', () => {
  const s = montar([
    [0, 0, 0],
    [1, 0, 3],
  ]);
  const d = destinos(s, 0, 0);
  // 5 passos (a sexta vizinha está ocupada) + o salto por cima da peça adversária
  assert.deepEqual(d, ids([-1, 0], [0, 1], [0, -1], [1, -1], [-1, 1], [2, 0]));
  const salto = lancesDaPeca(s, indice(0, 0)).find((l) => l.para === indice(2, 0))!;
  const t = jogar(s, salto);
  assert.equal(t.board[indice(1, 0)], 3, 'a peça saltada continua no tabuleiro');
  assert.equal(t.board[indice(2, 0)], 0);
  assert.equal(quemJoga(t), 3);
});

test('damas chinesas: cadeia de saltos, e o jogador pode parar em qualquer pouso', () => {
  // peças em linha com casas vazias entre elas: 0,0 salta 1,0 → 2,0, salta 3,0 → 4,0
  const s = montar([
    [0, 0, 0],
    [1, 0, 0],
    [3, 0, 3],
  ]);
  const ls = lancesDaPeca(s, indice(0, 0));
  const meio = ls.find((l) => l.para === indice(2, 0));
  const fim = ls.find((l) => l.para === indice(4, 0));
  assert.ok(meio, 'pode parar depois do primeiro salto');
  assert.ok(fim, 'pode seguir até o fim da cadeia');
  assert.deepEqual(fim!.caminho, ids([0, 0]).concat(indice(2, 0), indice(4, 0)));
  // salto a salto, como a tela faz
  assert.deepEqual(
    saltosDe(s, indice(0, 0), indice(2, 0), [indice(0, 0), indice(2, 0)]).map((x) => x.para),
    [indice(4, 0)],
  );
  // não mistura passo com salto: a casa 1,1 (passo depois do salto) não está entre os destinos
  assert.ok(!ls.some((l) => l.para === indice(2, 1) && l.caminho.length === 3));
});

test('damas chinesas: passa saltando pela ponta de outro jogador, mas não para nela (a três)', () => {
  // a três (pontas 0, 2 e 4), a ponta 1 é a de chegada do jogador 4: o jogador 0 não pode parar nela
  const s = montar(
    [
      [-4, 4, 0],
      [-5, 4, 2],
      [-6, 4, 4],
    ],
    [0, 2, 4],
  );
  assert.equal(PONTA[indice(-5, 4)], 1);
  assert.equal(podeParar(s, 0, indice(-4, 4), indice(-5, 4)), false);
  // nem como passo, nem parando no meio da cadeia; mas a cadeia passa por lá e volta
  const d = destinos(s, -4, 4);
  assert.ok(!d.some((i) => PONTA[i] === 1));
  // a dois, as pontas que não são de ninguém ficam livres
  const dois = montar([[-4, 4, 0]]);
  assert.equal(podeParar(dois, 0, indice(-4, 4), indice(-5, 4)), true);
});

test('damas chinesas: quem chegou na ponta de destino não sai mais dela', () => {
  // a ponta 3 (em cima, r < −4) é o destino do jogador 0
  const s = montar([[4, -5, 0]]);
  assert.equal(PONTA[indice(4, -5)], 3);
  for (const i of destinos(s, 4, -5)) assert.equal(PONTA[i], 3);
});

test('damas chinesas: vence quem ocupa as 10 casas da ponta oposta', () => {
  const destino = CASAS_DA_PONTA[3]!;
  // falta a casa (1, −5), na borda da ponta; a última peça está logo abaixo dela, no hexágono
  const falta = indice(1, -5);
  assert.equal(PONTA[falta], 3);
  const pecas: [number, number, number][] = destino.filter((i) => i !== falta).map((i) => [CELULAS[i]!.q, CELULAS[i]!.r, 0]);
  pecas.push([1, -4, 0], [0, 4, 3]);
  const s = montar(pecas);
  const l = lancesLegais(s).find((x) => x.para === falta && x.de === indice(1, -4));
  assert.ok(l);
  const t = jogar(s, l!);
  assert.equal(t.winner, 0);
  assert.deepEqual(lancesLegais(t), []);
});

test('damas chinesas: contra o bloqueio, troca com a peça adversária parada na ponta de destino', () => {
  // o jogador 3 deixou uma peça em casa (a ponta 3, destino do 0); o 0 encheu as outras 9
  const destino = CASAS_DA_PONTA[3]!;
  const fundo = destino.find((i) => CELULAS[i]!.r === -5)!; // uma casa da borda da ponta
  const pecas: [number, number, number][] = destino.filter((i) => i !== fundo).map((i) => [CELULAS[i]!.q, CELULAS[i]!.r, 0]);
  pecas.push([CELULAS[fundo]!.q, CELULAS[fundo]!.r, 3]);
  // a décima peça do 0 está no hexágono, vizinha da casa bloqueada
  const c = CELULAS[fundo]!;
  pecas.push([c.q, c.r + 1, 0]);
  const s = montar(pecas);
  assert.ok(destinoBloqueado(s, 0));
  const troca = lancesLegais(s).find((l) => l.troca);
  assert.ok(troca, 'a troca aparece entre os lances');
  const t = jogar(s, troca!);
  assert.equal(t.winner, 0);
  assert.equal(t.board[indice(c.q, c.r + 1)], 3, 'a peça adversária foi para a casa de onde a outra saiu');
  // sem o destino cheio, não há troca
  const vazio = montar([
    [c.q, c.r, 3],
    [c.q, c.r + 1, 0],
  ]);
  assert.ok(!lancesLegais(vazio).some((l) => l.troca));
});

test('Linu nas damas chinesas: avança, pensa em menos de 1 s no difícil e termina a partida', () => {
  const s = createInitialState(2);
  const t0 = Date.now();
  const m = escolherLance(s, NIVEIS['damas-chinesas'].dificil.prof, BUSCA_DAMAS_CHINESAS);
  const ms = Date.now() - t0;
  assert.ok(ms < 1000, `demorou ${ms} ms`);
  assert.ok(m && PONTA[m.para] === -1);
  // Linu contra Linu: só lances que valem, até alguém chegar
  let p = createInitialState(2);
  let r = 11;
  const semente = () => ((r = (r * 9301 + 49297) % 233280) / 233280);
  for (let k = 0; k < 600 && p.winner === null; k++) {
    const nivel = quemJoga(p) === 0 ? NIVEIS['damas-chinesas'].medio : NIVEIS['damas-chinesas'].facil;
    const l = escolherLance(p, nivel.prof, BUSCA_DAMAS_CHINESAS, nivel.ruido, semente);
    assert.ok(l, 'sempre há lance');
    assert.ok(lancesLegais(p).some((x) => x.de === l!.de && x.para === l!.para));
    p = jogar(p, l!);
  }
  assert.notEqual(p.winner, null, `a partida termina (${p.lances} lances)`);
});
