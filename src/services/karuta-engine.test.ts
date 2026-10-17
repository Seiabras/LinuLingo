import { test } from 'node:test';
import assert from 'node:assert/strict';
import { HYAKUNIN_ISSHU } from '@/data/hyakunin-isshu';
import { rngComSemente } from './baralho-frances';
import { KIMARIJI, lerMais, leituraDeCima, novoJogo, proximo, tocar, versosDaCarta } from './karuta-engine';

test('karuta: os 100 poemas, cada um com 5 versos e leitura', () => {
  assert.equal(HYAKUNIN_ISSHU.length, 100);
  for (const p of HYAKUNIN_ISSHU) {
    assert.equal(p.texto.length, 5, `poema ${p.n}`);
    assert.equal(p.leitura.length, 5, `poema ${p.n}`);
    assert.ok(p.autor.length > 0);
  }
  assert.equal(leituraDeCima(1), 'あきのたのかりほのいほのとまをあらみ');
  assert.deepEqual(versosDaCarta(1), ['わがころもでは', 'つゆにぬれつつ']);
});

test('karuta: os sete poemas de uma sílaba só (む す め ふ さ ほ せ)', () => {
  const um = HYAKUNIN_ISSHU.filter((p) => KIMARIJI[p.n] === 1).map((p) => leituraDeCima(p.n)[0]);
  assert.deepEqual([...um].sort(), ['さ', 'す', 'せ', 'ふ', 'ほ', 'む', 'め'].sort());
  // todo kimariji é único: nenhum outro poema começa igual
  for (const p of HYAKUNIN_ISSHU) {
    const som = (t: string) => t.replace(/を/g, 'お').replace(/ゐ/g, 'い').replace(/ゑ/g, 'え');
    const pre = som(leituraDeCima(p.n)).slice(0, KIMARIJI[p.n]);
    assert.equal(HYAKUNIN_ISSHU.filter((q) => som(leituraDeCima(q.n)).startsWith(pre)).length, 1, `poema ${p.n}`);
  }
});

test('karuta: ler, errar, pegar e seguir até a mesa ficar vazia', () => {
  let s = novoJogo(rngComSemente(3), 4);
  assert.equal(s.mesa.length, 4);
  s = lerMais(lerMais(s));
  assert.equal(s.lidas, 2);
  const errada = s.mesa.find((n) => n !== s.atual)!;
  s = tocar(s, 0, errada);
  assert.ok(s.errou);
  assert.equal(tocar(s, 0, s.atual), s, 'quem errou não toca de novo neste poema');
  s = tocar(s, 1, s.atual);
  assert.equal(s.fase, 'pegou');
  assert.deepEqual(s.pontos, [0, 1]);
  assert.equal(s.mesa.length, 3);
  for (let k = 0; k < 3; k++) {
    s = proximo(s);
    assert.equal(s.errou, false);
    s = tocar(s, 0, s.atual);
  }
  s = proximo(s);
  assert.equal(s.fase, 'fim');
  assert.deepEqual(s.pontos, [3, 1]);
});
