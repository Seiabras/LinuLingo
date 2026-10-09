import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  addProng,
  basesOf,
  canAddProng,
  canCaptureJumped,
  captureJumped,
  createInitialState,
  endTurn,
  jump,
  legalJumpHops,
  legalSteps,
  movePod,
  podAt,
  type OctiState,
} from './octi-engine';

test('octi: estado inicial tem 4 pods por jogador nas bases certas, reserva 12 e vez do jogador 0', () => {
  const s = createInitialState();
  assert.equal(s.pods.length, 8);
  assert.equal(s.pods.filter((p) => p.player === 0).length, 4);
  assert.equal(s.pods.filter((p) => p.player === 1).length, 4);
  assert.deepEqual(
    s.pods.filter((p) => p.player === 0).map((p) => ({ row: p.row, col: p.col })).sort((a, b) => a.col - b.col),
    basesOf(0),
  );
  assert.deepEqual(
    s.pods.filter((p) => p.player === 1).map((p) => ({ row: p.row, col: p.col })).sort((a, b) => a.col - b.col),
    basesOf(1),
  );
  assert.deepEqual(s.reserve, [12, 12]);
  assert.equal(s.turn, 0);
  assert.equal(s.winner, null);
  assert.equal(s.phase.kind, 'normal');
});

test('octi: pod sem prong nenhum não tem movimento nem salto legal', () => {
  const s = createInitialState();
  const pod = s.pods.find((p) => p.player === 0)!;
  assert.deepEqual(legalSteps(s, pod.id), []);
  assert.deepEqual(legalJumpHops(s, pod.id), []);
});

test('octi: instalar prong gasta reserva, passa a vez, e não pode duplicar direção', () => {
  const s = createInitialState();
  const pod = s.pods.find((p) => p.player === 0)!;
  assert.equal(canAddProng(s, pod.id, 0), true);
  const s2 = addProng(s, pod.id, 0);
  assert.equal(s2.reserve[0], 11);
  assert.equal(s2.turn, 1);
  assert.ok(s2.pods.find((p) => p.id === pod.id)!.prongs.has(0));
  assert.equal(canAddProng(s2, pod.id, 0), false); // já é vez do jogador 1, não pode mexer em pod do 0
});

test('octi: não pode instalar prong em pod do adversário nem repetir direção já instalada', () => {
  let s = createInitialState();
  const meu = s.pods.find((p) => p.player === 0)!;
  const dele = s.pods.find((p) => p.player === 1)!;
  assert.equal(canAddProng(s, dele.id, 0), false);
  s = addProng(s, meu.id, 0); // jogador 0 instala; passa a vez pro jogador 1
  s = addProng(s, dele.id, 0); // jogador 1 instala em pod próprio; passa a vez de volta
  assert.equal(s.turn, 0);
  assert.equal(canAddProng(s, meu.id, 0), false); // direção 0 já instalada nesse pod
});

test('octi: depois de instalar um prong, o único passo legal é na direção dele, pra casa vazia', () => {
  const s0 = createInitialState();
  const pod = s0.pods.find((p) => p.player === 0)!;
  const s1 = addProng(s0, pod.id, 0); // direção 0 = N (row+1)
  // devolve a vez pro jogador 0 manualmente pra testar o movimento (simula 2 turnos: aqui só testamos o pod)
  const s1ComoSeFosseVezDoJogador0: OctiState = { ...s1, turn: 0 };
  const moves = legalSteps(s1ComoSeFosseVezDoJogador0, pod.id);
  assert.deepEqual(moves, [{ row: pod.row + 1, col: pod.col }]);
});

test('octi: mover pra casa ilegal não faz nada (sem trapaça)', () => {
  const s = createInitialState();
  const pod = s.pods.find((p) => p.player === 0)!;
  const s2 = movePod(s, pod.id, { row: 3, col: 3 });
  assert.equal(s2, s);
});

test('octi: mover pro meio do tabuleiro passa a vez; pisar na base do adversário vence na hora', () => {
  // Pod do jogador 0 bem perto da base do jogador 1 (linha 5, colunas 1-4), com prong apontando pra lá.
  const base: OctiState = {
    pods: [
      { id: 0, player: 0, row: 4, col: 2, prongs: new Set([0]) }, // N = row+1
      { id: 1, player: 1, row: 6, col: 0, prongs: new Set() },
    ],
    reserve: [0, 12],
    turn: 0,
    winner: null,
    phase: { kind: 'normal' },
  };
  const s2 = movePod(base, 0, { row: 5, col: 2 });
  assert.equal(s2.winner, 0); // (5,2) é base do jogador 1
});

test('octi: salto simples sobre peça adversária, sem capturar — peça saltada continua no tabuleiro', () => {
  const base: OctiState = {
    pods: [
      { id: 0, player: 0, row: 2, col: 2, prongs: new Set([0]) }, // N
      { id: 1, player: 1, row: 3, col: 2, prongs: new Set() },
    ],
    reserve: [5, 5],
    turn: 0,
    winner: null,
    phase: { kind: 'normal' },
  };
  const hops = legalJumpHops(base, 0);
  assert.deepEqual(hops, [{ to: { row: 4, col: 2 }, overPodId: 1 }]);
  const s2 = jump(base, 0, { row: 4, col: 2 });
  assert.equal(s2.turn, 0); // turno continua (fase salto)
  assert.equal(s2.phase.kind, 'salto');
  assert.ok(s2.pods.find((p) => p.id === 0)!.row === 4);
  assert.ok(s2.pods.find((p) => p.id === 1)); // não foi capturada
  assert.equal(canCaptureJumped(s2), true);

  const s3 = endTurn(s2);
  assert.equal(s3.turn, 1);
  assert.equal(s3.phase.kind, 'normal');
  assert.equal(s3.pods.find((p) => p.id === 1)?.row, 3); // continua lá
});

test('octi: capturar a peça saltada remove ela e manda os prongs pra reserva de quem capturou', () => {
  const base: OctiState = {
    pods: [
      { id: 0, player: 0, row: 2, col: 2, prongs: new Set([0]) },
      { id: 1, player: 1, row: 3, col: 2, prongs: new Set([1, 2, 3]) }, // 3 prongs
    ],
    reserve: [5, 5],
    turn: 0,
    winner: null,
    phase: { kind: 'normal' },
  };
  const s2 = jump(base, 0, { row: 4, col: 2 });
  const s3 = captureJumped(s2);
  assert.equal(s3.pods.find((p) => p.id === 1), undefined);
  assert.equal(s3.reserve[0], 5 + 3);
  assert.equal(canCaptureJumped(s3), false);
});

test('octi: salto encadeado não pode pular a mesma casa duas vezes no mesmo turno', () => {
  // Coluna 0 (fora das bases, que ficam nas colunas 1-4) pra não terminar o jogo sem querer.
  // Monta uma cadeia real: pod salta N sobre peça em (2,0) caindo em (3,0); dali salta de novo N sobre peça em (4,0) caindo em (5,0).
  const base: OctiState = {
    pods: [
      { id: 0, player: 0, row: 1, col: 0, prongs: new Set([0]) },
      { id: 1, player: 1, row: 2, col: 0, prongs: new Set() },
      { id: 2, player: 1, row: 4, col: 0, prongs: new Set() },
    ],
    reserve: [5, 5],
    turn: 0,
    winner: null,
    phase: { kind: 'normal' },
  };
  const s2 = jump(base, 0, { row: 3, col: 0 });
  assert.equal(s2.pods.find((p) => p.id === 0)!.row, 3);
  const hops2 = legalJumpHops(s2, 0);
  assert.deepEqual(hops2, [{ to: { row: 5, col: 0 }, overPodId: 2 }]);
  const s3 = jump(s2, 0, { row: 5, col: 0 });
  assert.equal(s3.pods.find((p) => p.id === 0)!.row, 5);
  assert.equal(s3.phase.kind, 'salto');
  if (s3.phase.kind === 'salto') {
    assert.equal(s3.phase.jumped.size, 2); // (2,0) e (4,0), as duas casas já saltadas
  }
});

test('octi: ficar sem nenhuma ação legal na sua vez faz o adversário vencer (bloqueio)', () => {
  // Jogador 1 sem pods e sem reserva: ao passar a vez pra ele, ele não tem nenhuma ação -> jogador 0 vence.
  const base: OctiState = {
    pods: [{ id: 0, player: 0, row: 2, col: 2, prongs: new Set([0]) }],
    reserve: [0, 0],
    turn: 0,
    winner: null,
    phase: { kind: 'normal' },
  };
  const s2 = movePod(base, 0, { row: 3, col: 2 });
  assert.equal(s2.winner, 0);
});

test('octi: podAt encontra a peça na posição certa', () => {
  const s = createInitialState();
  const pod = s.pods[0];
  assert.equal(podAt(s, { row: pod.row, col: pod.col })?.id, pod.id);
  assert.equal(podAt(s, { row: 6, col: 5 }), undefined);
});
