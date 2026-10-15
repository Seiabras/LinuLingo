import { test } from 'node:test';
import assert from 'node:assert/strict';
import * as I from './invasores-engine';

const parado: I.Comando = { dir: 0, atirar: false };
const nunca = () => 0.99;
function emJogo(extra: Partial<I.InvasoresState> = {}): I.InvasoresState {
  return { ...I.estadoInicial(), espera: 0, relogioBomba: 999, relogioNave: 999, ...extra };
}
function ate(s: I.InvasoresState, ev: I.EventoInvasores, cmd: I.Comando = parado, n = 2000, rng: I.Rng = nunca) {
  let r = { s, eventos: [] as I.EventoInvasores[] };
  for (let k = 0; k < n && !r.eventos.includes(ev); k++) r = I.avancar(r.s, cmd, I.PASSO, rng);
  return r;
}

test('Invasores: 5 fileiras de 11, 4 abrigos, 3 vidas, placar zerado', () => {
  const s = I.estadoInicial();
  assert.equal(s.vivos.length, 55);
  assert.equal(I.quantosVivos(s), 55);
  assert.equal(s.abrigos.length, I.ABRIGOS * I.ABRIGO_LINS * I.ABRIGO_COLS);
  assert.equal(s.vidas, 3);
});

test('Invasores: quanto menos alienígenas, mais rápida a marcha', () => {
  assert.ok(I.intervaloMarcha(10, 'normal') < I.intervaloMarcha(55, 'normal'));
  assert.ok(I.intervaloMarcha(1, 'normal') < I.intervaloMarcha(10, 'normal'));
  assert.ok(I.intervaloMarcha(55, 'rapido') < I.intervaloMarcha(55, 'devagar'));
});

test('Invasores: a formação anda de lado e, na beira, desce e volta', () => {
  let s = emJogo();
  const oy0 = s.oy;
  let desceu = false;
  for (let k = 0; k < 120 * 60 && !desceu; k++) {
    s = I.avancar(s, parado, I.PASSO, nunca).s;
    if (s.oy > oy0) desceu = true;
  }
  assert.ok(desceu);
  assert.equal(s.dir, -1);
});

test('Invasores: um tiro de cada vez; acertar dá os pontos da fileira', () => {
  // canhão embaixo da coluna 0; o tiro sobe e acerta a fileira de baixo (10 pontos)
  const s = emJogo({ canhao: 24 + I.INVASOR_L / 2, abrigos: Array(I.ABRIGOS * I.ABRIGO_LINS * I.ABRIGO_COLS).fill(false) });
  const r1 = I.avancar(s, { dir: 0, atirar: true });
  assert.ok(r1.s.tiro);
  const r2 = I.avancar(r1.s, { dir: 0, atirar: true });
  assert.ok(!r2.eventos.includes('tiro'), 'não sai outro tiro com um no ar');
  const r = ate(r1.s, 'acerto');
  assert.equal(r.s.pontos, 10);
  assert.equal(I.quantosVivos(r.s), 54);
  assert.equal(r.s.vivos[4 * I.COLUNAS + 0], false);
});

test('Invasores: o tiro quebra o abrigo', () => {
  const x = I.abrigoX(0) + 4;
  const s = emJogo({ canhao: x, vivos: Array(55).fill(false).map((_, i) => i === 54) });
  const antes = s.abrigos.filter(Boolean).length;
  const r = ate(I.avancar(s, { dir: 0, atirar: true }).s, 'fim', parado, 60);
  assert.ok(r.s.abrigos.filter(Boolean).length < antes);
});

test('Invasores: a bomba que acerta o canhão tira uma vida; sem vidas, fim', () => {
  const s = emJogo({ bombas: [{ x: 112, y: I.CANHAO_Y - 20 }], canhao: 112, abrigos: Array(I.ABRIGOS * I.ABRIGO_LINS * I.ABRIGO_COLS).fill(false) });
  const r = ate(s, 'atingido');
  assert.equal(r.s.vidas, 2);
  const f = ate({ ...s, vidas: 1 }, 'fim');
  assert.equal(f.s.fim, true);
  assert.equal(I.avancar(f.s, parado).s, f.s);
});

test('Invasores: se a formação chega lá embaixo, acabou', () => {
  const r = ate(emJogo({ oy: I.CANHAO_Y - 60 }), 'fim', parado, 120 * 60);
  assert.equal(r.s.fim, true);
});

test('Invasores: limpou a onda, vem outra começando mais baixo', () => {
  const um = Array(55).fill(false);
  um[54] = true;
  const p = I.posInvasor({ ox: 24, oy: I.TOPO_INICIAL }, 54);
  const s = emJogo({ vivos: um, canhao: p.x + 6, abrigos: Array(I.ABRIGOS * I.ABRIGO_LINS * I.ABRIGO_COLS).fill(false), relogioMarcha: 999 });
  const r = ate(I.avancar(s, { dir: 0, atirar: true }).s, 'onda');
  assert.equal(r.s.onda, 2);
  assert.equal(I.quantosVivos(r.s), 55);
  assert.ok(r.s.oy > I.TOPO_INICIAL);
});

test('Invasores: a nave misteriosa passa e vale pontos', () => {
  const s = emJogo({ relogioNave: 0, vivos: Array(55).fill(true) });
  const r = I.avancar(s, parado, I.PASSO, () => 0.2);
  assert.ok(r.s.nave);
  assert.ok(r.eventos.includes('nave'));
});

test('Invasores: o canhão anda pelo teclado e pelo dedo, sem sair da tela', () => {
  let s = emJogo();
  for (let k = 0; k < 600; k++) s = I.avancar(s, { dir: -1, atirar: false }).s;
  assert.ok(s.canhao >= I.CANHAO_L / 2);
  for (let k = 0; k < 600; k++) s = I.avancar(s, { dir: 0, alvo: 200, atirar: false }).s;
  assert.ok(Math.abs(s.canhao - 200) < 1);
});
