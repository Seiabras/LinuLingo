import { test } from 'node:test';
import assert from 'node:assert/strict';
import { acoesPossiveis, arbitrar, distancia, escolhaLinu, jogarTempo, novoDuelo, PISTA, type Estado } from './esgrima-engine';

const em = (d: number, extra: Partial<Estado> = {}): Estado => ({ ...novoDuelo(), pos: [4, 4 + d], ...extra });

test('esgrima: começa nas linhas de en garde, 4 passos de distância, 0 a 0', () => {
  const s = novoDuelo();
  assert.equal(distancia(s), 4);
  assert.deepEqual(s.toques, [0, 0]);
});

test('esgrima: o ataque com afundo alcança 2; de longe fica curto e perde a prioridade', () => {
  assert.deepEqual(arbitrar(em(2), ['ataque', 'parada']).veredito, { tipo: 'parada', quem: 1 });
  assert.deepEqual(arbitrar(em(2), ['ataque', 'avancar']).veredito, { tipo: 'toque', para: 0, por: 'ataque' });
  const r = arbitrar(em(3), ['ataque', 'parada']);
  assert.deepEqual(r.veredito, { tipo: 'curto', quem: 0 });
  assert.equal(r.prioridade, 1);
  // recuar faz o ataque ficar curto
  assert.equal(arbitrar(em(2), ['ataque', 'recuar']).veredito.tipo, 'curto');
});

test('esgrima: o ataque tem prioridade sobre o contra-ataque', () => {
  assert.deepEqual(arbitrar(em(1), ['ataque', 'contra']).veredito, { tipo: 'toque', para: 0, por: 'prioridade' });
  assert.deepEqual(arbitrar(em(1), ['contra', 'ataque']).veredito, { tipo: 'toque', para: 1, por: 'prioridade' });
});

test('esgrima: dois ataques juntos são simultâneos e ninguém marca', () => {
  const s = jogarTempo(em(2), ['ataque', 'ataque']);
  assert.deepEqual(s.ultimo?.veredito, { tipo: 'simultaneo' });
  assert.deepEqual(s.toques, [0, 0]);
});

test('esgrima: contra-ataque em quem só avança pega a preparação', () => {
  assert.deepEqual(arbitrar(em(2), ['avancar', 'contra']).veredito, { tipo: 'toque', para: 1, por: 'preparacao' });
});

test('esgrima: quem para ganha a riposta, que vence o toque duplo no tempo seguinte', () => {
  let s = jogarTempo(em(2), ['ataque', 'parada']);
  assert.equal(s.prioridade, 1);
  s = jogarTempo(s, ['ataque', 'ataque']);
  assert.deepEqual(s.ultimo?.veredito, { tipo: 'toque', para: 1, por: 'riposta' });
  assert.deepEqual(s.toques, [0, 1]);
  assert.equal(s.prioridade, null);
  assert.equal(distancia(s), 4, 'depois do toque, volta ao en garde');
});

test('esgrima: a pista tem fundo e ninguém atravessa o outro', () => {
  const s = { ...novoDuelo(), pos: [0, 1] as [number, number] };
  assert.deepEqual(acoesPossiveis(s, 0), ['ataque', 'parada', 'contra']);
  const f = jogarTempo({ ...novoDuelo(), pos: [5, 7] }, ['avancar', 'avancar']);
  assert.equal(distancia(f), 1);
  assert.ok(f.pos[1] <= PISTA - 1);
});

test('esgrima: 5 toques vencem', () => {
  let s = em(2, { toques: [4, 2] });
  s = jogarTempo(s, ['ataque', 'avancar']);
  assert.equal(s.vencedor, 0);
  assert.equal(jogarTempo(s, ['ataque', 'avancar']), s, 'depois do fim, nada muda');
});

test('esgrima: o Linu riposta quando tem a prioridade e responde ao hábito do jogador no difícil', () => {
  assert.equal(escolhaLinu(em(2, { prioridade: 1 }), 'medio', [], () => 0.5), 'ataque');
  const hist = [
    { d: 2, acao: 'ataque' as const },
    { d: 2, acao: 'ataque' as const },
    { d: 2, acao: 'ataque' as const },
  ];
  assert.equal(escolhaLinu(em(2), 'dificil', hist, () => 0.1), 'parada');
  for (let i = 0; i < 50; i++) {
    const a = escolhaLinu(em(1), 'facil');
    assert.ok(acoesPossiveis(em(1), 1).includes(a));
  }
});
