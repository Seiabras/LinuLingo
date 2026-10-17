import { test } from 'node:test';
import assert from 'node:assert/strict';
import { rngComSemente } from './baralho-frances';
import { abrir, abrirVolta, marcar, minasRestantes, NIVEIS_CAMPO, novoCampo, vizinhosDe } from './campo-minado-engine';

test('campo minado: o primeiro toque nunca tem mina, nem em volta, e abre um pedaço', () => {
  for (const nivel of ['iniciante', 'intermediario', 'especialista'] as const)
    for (let semente = 1; semente <= 30; semente++) {
      const s0 = novoCampo(nivel);
      const i = Math.floor(s0.mina.length / 2);
      const s = abrir(s0, i, rngComSemente(semente));
      assert.equal(s.mina.filter(Boolean).length, NIVEIS_CAMPO[nivel].minas);
      assert.ok(!s.mina[i] && vizinhosDe(s, i).every((v) => !s.mina[v]));
      assert.equal(s.vizinhas[i], 0);
      assert.ok(s.aberta.filter(Boolean).length > 1, 'abre mais de uma casa');
      assert.notEqual(s.fase, 'perdeu');
    }
});

test('campo minado: os números contam as minas em volta', () => {
  const s = abrir(novoCampo('iniciante'), 40, rngComSemente(7));
  s.vizinhas.forEach((n, i) => assert.equal(n, vizinhosDe(s, i).filter((v) => s.mina[v]).length));
});

test('campo minado: bandeira, explodir e ganhar', () => {
  let s = abrir(novoCampo('iniciante'), 0, rngComSemente(3));
  const umaMina = s.mina.findIndex(Boolean);
  s = marcar(s, umaMina);
  assert.equal(minasRestantes(s), 9);
  assert.equal(abrir(s, umaMina, rngComSemente(3)), s, 'casa com bandeira não abre');
  const perdeu = abrir(marcar(s, umaMina), umaMina, rngComSemente(3));
  assert.equal(perdeu.fase, 'perdeu');
  assert.equal(perdeu.explodiu, umaMina);
  // abrir todas as casas sem mina ganha
  let g = s;
  s.mina.forEach((m, i) => {
    if (!m) g = abrir(g, i, rngComSemente(3));
  });
  assert.equal(g.fase, 'ganhou');
  assert.equal(minasRestantes(g), 0, 'as minas ganham bandeira no fim');
});

test('campo minado: abrir em volta de um número com as bandeiras certas', () => {
  let s = abrir(novoCampo('iniciante'), 40, rngComSemente(11));
  const num = s.aberta.findIndex((a, i) => a && s.vizinhas[i] > 0 && vizinhosDe(s, i).some((v) => !s.aberta[v] && !s.mina[v]));
  if (num < 0) return;
  assert.equal(abrirVolta(s, num), s, 'sem as bandeiras, não abre');
  for (const v of vizinhosDe(s, num)) if (s.mina[v]) s = marcar(s, v);
  const t = abrirVolta(s, num);
  assert.ok(vizinhosDe(t, num).every((v) => t.aberta[v] || t.mina[v]));
  assert.notEqual(t.fase, 'perdeu');
});
