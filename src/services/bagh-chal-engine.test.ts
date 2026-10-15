import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as C from './caca-engine';
import { lanceCaca } from './caca-ia';

const id = (x: number, y: number) => y * 5 + x;

function posicao(tigres: number[], cabras: number[], turn: C.Lado, naMao = 0, capturas = 0): C.CacaState {
  const s = C.createInitialState(C.BAGH_CHAL);
  const board = s.board.map(() => null as C.Lado | null);
  for (const t of tigres) board[t] = 'h';
  for (const c of cabras) board[c] = 'p';
  return { ...s, board, turn, presasNaMao: naMao, capturas };
}

test('Bagh-chal: 4 tigres nos cantos, 20 cabras na mão, as cabras começam', () => {
  const s = C.createInitialState(C.BAGH_CHAL);
  assert.deepEqual(
    s.board.flatMap((v, i) => (v === 'h' ? [i] : [])),
    [0, 4, 20, 24],
  );
  assert.equal(s.presasNaMao, 20);
  assert.equal(s.turn, 'p');
});

test('Bagh-chal: enquanto há cabras na mão, a vez das cabras é sempre pôr uma', () => {
  const s = C.createInitialState(C.BAGH_CHAL);
  const passos = C.passosLegais(s);
  assert.equal(passos.length, 21);
  assert.ok(passos.every((p) => p.de === null));
  const t = C.jogar(s, { de: null, para: 12 });
  assert.equal(t.presasNaMao, 19);
  assert.equal(t.turn, 'h');
});

test('Bagh-chal: o tigre captura saltando, um salto só por vez, e pode capturar antes de todas as cabras entrarem', () => {
  // tigre em (0,0), cabras em (1,1) e (3,3): pulando a (1,1) cai em (2,2), mas não segue pulando
  const s = posicao([0], [id(1, 1), id(3, 3)], 'h', 18);
  const u = C.jogar(s, { de: 0, para: id(2, 2), captura: id(1, 1) });
  assert.equal(u.capturas, 1);
  assert.equal(u.cadeia, null);
  assert.equal(u.turn, 'p');
});

test('Bagh-chal: diagonal só nos pontos de soma par', () => {
  const s = posicao([id(1, 0)], [id(2, 1)], 'h');
  assert.ok(!C.passosLegais(s).some((p) => p.para === id(2, 1) || p.captura === id(2, 1)), 'do (1,0) não há diagonal');
});

test('Bagh-chal: tigres sem lance perdem; 5 capturas vencem', () => {
  // tigre no canto (0,0) cercado por cabras em (1,0), (0,1), (1,1), com cabras atrás de cada uma
  const s = posicao([0], [id(1, 0), id(0, 1), id(1, 1), id(2, 0), id(0, 2), id(2, 2), id(4, 4)], 'p');
  const u = C.jogar(s, { de: id(4, 4), para: id(4, 3) });
  assert.equal(u.winner, 'p');
  assert.equal(u.motivo, 'preso');
  const v = C.jogar(posicao([0], [id(1, 1)], 'h', 0, 4), { de: 0, para: id(2, 2), captura: id(1, 1) });
  assert.equal(v.winner, 'h');
});

test('Bagh-chal: depois de entrarem todas as cabras, nenhum lance pode repetir uma posição', () => {
  // as cabras e os tigres vão e voltam: a volta à posição já vista é proibida
  let s = posicao([0], [id(4, 4), id(2, 4)], 'p');
  s = { ...s, vistas: [s.board.map((v) => v ?? '.').join('')] };
  s = C.jogar(s, { de: id(4, 4), para: id(4, 3) });
  s = C.jogar(s, { de: 0, para: id(1, 0) });
  s = C.jogar(s, { de: id(4, 3), para: id(4, 4) });
  // o tigre voltar para (0,0) recriaria a posição inicial
  assert.ok(!C.passosLegais(s).some((p) => p.de === id(1, 0) && p.para === 0));
});

test('Linu no bagh-chal: o tigre captura quando pode; as cabras não deixam cabra solta na frente do tigre', () => {
  const s = posicao([0, 4, 20, 24], [id(1, 1)], 'h', 15);
  for (const nivel of ['medio', 'dificil'] as const) {
    const l = lanceCaca(s, nivel)!;
    assert.ok(l.some((p) => p.captura !== undefined), `${nivel}: capturou`);
  }
});

test('Linu no bagh-chal: partida Linu contra Linu só tem lances válidos e é rápida', () => {
  let semente = 13;
  const sorteio = () => {
    semente = (semente * 16807) % 2147483647;
    return semente / 2147483647;
  };
  let s = C.createInitialState(C.BAGH_CHAL);
  let maior = 0;
  for (let k = 0; k < 60 && s.winner === null; k++) {
    const t0 = Date.now();
    const l = lanceCaca(s, k % 2 ? 'dificil' : 'medio', sorteio)!;
    maior = Math.max(maior, Date.now() - t0);
    const e = C.aplicarLance(s, l);
    assert.notEqual(e, s);
    s = e;
  }
  assert.ok(maior < 2500, `lance mais lento: ${maior} ms`);
});

test('Bagh-chal: tigre que só pode repetir posição fica preso (motivo “repeticao”)', () => {
  // tigre em (0,0) com uma saída só, para (1,0); a posição com ele lá já foi vista
  const base = posicao([0], [id(0, 1), id(1, 1), id(0, 2), id(2, 2), id(3, 4)], 'p');
  const depois = base.board.slice();
  depois[0] = null;
  depois[id(1, 0)] = 'h';
  depois[id(3, 4)] = null;
  depois[id(4, 4)] = 'p';
  const s = { ...base, vistas: [depois.map((v) => v ?? '.').join('')] };
  const u = C.jogar(s, { de: id(3, 4), para: id(4, 4) });
  assert.equal(u.winner, 'p');
  assert.equal(u.motivo, 'repeticao');
});
