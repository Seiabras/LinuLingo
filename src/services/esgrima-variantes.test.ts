import { test } from 'node:test';
import assert from 'node:assert/strict';
import { INICIO, alcanceContra, escolhaLinu, jogarTempo, novoDuelo, type Estado } from './esgrima-engine';

/** O duelo com os dois a `d` passos. */
const aDistancia = (s: Estado, d: number): Estado => ({ ...s, pos: [4, 4 + d] });

test('espada: os dois tocam juntos e os dois marcam (toque duplo)', () => {
  const s = aDistancia(novoDuelo('espada'), 1);
  const f = jogarTempo(s, ['ataque', 'contra']);
  assert.equal(f.ultimo!.veredito.tipo, 'duplo');
  assert.deepEqual(f.toques, [1, 1]);
  assert.deepEqual(f.pos, INICIO);
  // no florete, o ataque tem a prioridade
  assert.deepEqual(jogarTempo(aDistancia(novoDuelo(), 1), ['ataque', 'contra']).toques, [1, 0]);
});

test('espada: a parada não dá prioridade e o toque duplo a 4 a 4 não conta', () => {
  const p = jogarTempo(aDistancia(novoDuelo('espada'), 2), ['parada', 'ataque']);
  assert.equal(p.ultimo!.veredito.tipo, 'parada');
  assert.equal(p.prioridade, null);
  const quatro: Estado = { ...aDistancia(novoDuelo('espada'), 1), toques: [4, 4] };
  const f = jogarTempo(quatro, ['ataque', 'ataque']);
  assert.deepEqual(f.ultimo!.veredito, { tipo: 'duplo', anulado: true });
  assert.deepEqual(f.toques, [4, 4]);
  assert.equal(f.vencedor, null);
  // a 4 a 3, o duplo dá a vitória a quem tinha 4
  const v = jogarTempo({ ...quatro, toques: [4, 3] }, ['ataque', 'ataque']);
  assert.equal(v.vencedor, 0);
});

test('espada e sabre: o contra-ataque chega a 2; no sabre, a prioridade é a do florete', () => {
  assert.equal(alcanceContra('florete'), 1);
  assert.equal(alcanceContra('espada'), 2);
  assert.equal(alcanceContra('sabre'), 2);
  // a 2 passos, quem só avança toma o corte no braço (no florete o contra não chegaria)
  const s = aDistancia(novoDuelo('sabre'), 3);
  const f = jogarTempo(s, ['avancar', 'contra']);
  assert.deepEqual(f.toques, [0, 1]);
  assert.equal(jogarTempo(aDistancia(novoDuelo(), 3), ['avancar', 'contra']).toques[1], 0);
  // ataque contra contra-ataque, os dois chegando: no sabre, ponto do ataque
  assert.deepEqual(jogarTempo(aDistancia(novoDuelo('sabre'), 2), ['ataque', 'contra']).toques, [1, 0]);
  // o duelo guarda a arma, e o Linu só escolhe ações possíveis
  assert.equal(f.arma, 'sabre');
  assert.ok(['avancar', 'recuar', 'ataque', 'parada', 'contra'].includes(escolhaLinu(f, 'dificil', [], () => 0.1)));
});
