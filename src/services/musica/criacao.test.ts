import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MELODIAS } from '@/data/musica/melodias';
import { codificarCriacao, criacaoVazia, decodificarCriacao, exemploCriacao, nomeDeArquivo, redimensionar, surpresa, wavDaCriacao } from './criacao';

test('criar: a música vai no link e volta igual', () => {
  const c = { ...criacaoVazia(16), nome: 'Minha música', escala: 'pentatonica' as const, bpm: 130 };
  c.grade[3]![0] = true;
  c.grade[7]![5] = true;
  const de = decodificarCriacao(codificarCriacao(c));
  assert.deepEqual(de, c);
  assert.ok(codificarCriacao(redimensionar(c, 32)).length < 400, 'o link fica curto');
});

test('criar: link cortado ou editado à mão não abre nada', () => {
  assert.equal(decodificarCriacao('abc'), null);
  assert.equal(decodificarCriacao(''), null);
  const c = codificarCriacao(criacaoVazia(16));
  assert.equal(decodificarCriacao(c.slice(0, c.length - 10)), null);
});

test('criar: 16 → 32 tempos repete a música; 32 → 16 corta', () => {
  const c = criacaoVazia(16);
  c.grade[0]![1] = true;
  const g = redimensionar(c, 32);
  assert.equal(g.grade[0]!.length, 32);
  assert.equal(g.grade[0]![17], true);
  assert.equal(redimensionar(g, 16).grade[0]!.length, 16);
});

test('criar: o WAV tem o cabeçalho certo e a duração da música', () => {
  const c = criacaoVazia(16);
  c.grade[0]![0] = true;
  const w = wavDaCriacao(c, 8000);
  assert.equal(String.fromCharCode(...w.subarray(0, 4)), 'RIFF');
  assert.equal(String.fromCharCode(...w.subarray(8, 12)), 'WAVE');
  const amostras = (w.length - 44) / 2;
  const segundos = amostras / 8000;
  assert.ok(Math.abs(segundos - (16 * (60 / 110 / 2) + 1.2)) < 0.01);
});

test('criar: exemplos de domínio público e a surpresa ficam na grade', () => {
  const ode = exemploCriacao('Ode à Alegria', MELODIAS.find((m) => m.id === 'ode')!.notas);
  assert.equal(ode.grade.flat().filter(Boolean).length, 15);
  let s = 0.3;
  const sorteio = () => (s = (s * 9301 + 49297) % 233280 / 233280);
  const sur = surpresa(criacaoVazia(16), sorteio);
  assert.ok(sur.grade.flat().some(Boolean));
  assert.equal(sur.grade[7]![14], true, 'termina na nota de baixo');
  assert.equal(nomeDeArquivo('Minha música!'), 'minha-musica');
  assert.equal(nomeDeArquivo('  '), 'minha-musica');
});
