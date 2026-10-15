import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BUSCA_SHOGI, escolherLance, NIVEIS } from './jogos-ia';
import * as S from './shogi-engine';

function posicao(pecas: [number, number, number][], turn: S.CorS, maoS: Partial<Record<number, number>> = {}, maoG: Partial<Record<number, number>> = {}): S.ShogiState {
  const board = Array(81).fill(0) as number[];
  for (const [r, c, p] of pecas) board[S.ix(r, c)] = p;
  const mao = (m: Partial<Record<number, number>>) => Array.from({ length: 8 }, (_, t) => m[t] ?? 0);
  const s: S.ShogiState = { board, maos: { s: mao(maoS), g: mao(maoG) }, turn, winner: null, fim: null, emXeque: false, ultimo: null, historico: [], xeques: [] };
  return { ...s, historico: [S.chave(s)], xeques: [false] };
}

test('Linu no shogi: captura a torre solta', () => {
  const s = posicao(
    [
      [8, 0, S.T.K],
      [0, 8, -S.T.K],
      [4, 2, -S.T.B],
      [6, 4, S.T.R],
    ],
    'g',
  );
  const m = escolherLance(s, NIVEIS.shogi.medio.prof, BUSCA_SHOGI);
  assert.deepEqual(m && [m.de, m.para], [S.ix(4, 2), S.ix(6, 4)], 'o bispo do gote leva a torre');
});

test('Linu no shogi: acha o mate com o ouro largado (e não com o peão, que seria uchifuzume)', () => {
  const s = posicao(
    [
      [0, 0, -S.T.K],
      [8, 4, S.T.K],
      [8, 3, S.T.L],
      [8, 5, S.T.L],
      [6, 4, -S.T.G],
    ],
    'g',
    {},
    { [S.T.P]: 1, [S.T.G]: 1 },
  );
  const m = escolherLance(s, NIVEIS.shogi.dificil.prof, BUSCA_SHOGI)!;
  assert.ok(m.drop && m.tipo === S.T.G && m.para === S.ix(7, 4), `lance: ${JSON.stringify(m)}`);
  const depois = S.jogar(s, m.de, m.para, m.promove, m.tipo);
  assert.equal(depois.winner, 'g');
});

test('Linu no shogi: no difícil, cada lance sai rápido; uma partida Linu contra Linu só tem lances que valem', () => {
  let s = S.createInitialState();
  let pior = 0;
  let x = 7;
  const semente = () => (x = (x * 9301 + 49297) % 233280) / 233280;
  for (let k = 0; k < 40 && s.winner === null; k++) {
    const nivel = k % 2 === 0 ? 'dificil' : 'facil';
    // tempo de CPU (não o do relógio): com a máquina ocupada por outros processos, o relógio mente
    const c0 = process.cpuUsage();
    const m = escolherLance(s, NIVEIS.shogi[nivel].prof, BUSCA_SHOGI, NIVEIS.shogi[nivel].ruido, semente)!;
    if (nivel === 'dificil') pior = Math.max(pior, process.cpuUsage(c0).user / 1000);
    const n = S.jogar(s, m.de, m.para, m.promove, m.drop ? m.tipo : 0);
    assert.notEqual(n, s, `lance ${k} não valeu`);
    s = n;
  }
  console.log('shogi difícil, pior lance:', Math.round(pior), 'ms de CPU');
  assert.ok(pior < 3000, `demorou ${Math.round(pior)} ms`);
});
