import { test } from 'node:test';
import assert from 'node:assert/strict';
import { detectarAltura } from './altura';
import { frequencia, nomeComOitava, notaMaisPerto, posicaoNaPauta, letraNota } from './notas';

const tom = (hz: number, taxa = 44100, n = 2048, harmonicos = false) =>
  Float32Array.from({ length: n }, (_, i) => {
    const t = i / taxa;
    let v = 0.5 * Math.sin(2 * Math.PI * hz * t);
    if (harmonicos) v += 0.3 * Math.sin(2 * Math.PI * 2 * hz * t) + 0.2 * Math.sin(2 * Math.PI * 3 * hz * t);
    return v;
  });

test('notas: lá 440, dó central e nomes', () => {
  assert.equal(frequencia(69), 440);
  assert.ok(Math.abs(frequencia(60) - 261.63) < 0.01);
  assert.equal(nomeComOitava(60), 'dó4');
  assert.equal(letraNota(61), 'C♯');
  assert.deepEqual(notaMaisPerto(445), { midi: 69, cents: 20 });
});

test('pauta da clave de sol: mi4 na 1ª linha, sol4 na 2ª, dó4 na linha suplementar de baixo', () => {
  assert.equal(posicaoNaPauta(64), 0);
  assert.equal(posicaoNaPauta(67), 2);
  assert.equal(posicaoNaPauta(60), -2);
  assert.equal(posicaoNaPauta(77), 8);
});

test('YIN acha a nota de um som puro e de um som com harmônicos', () => {
  for (const midi of [45, 57, 60, 64, 69, 76, 84]) {
    for (const h of [false, true]) {
      const r = detectarAltura(tom(frequencia(midi), 44100, 4096, h), 44100);
      assert.ok(r, `midi ${midi}`);
      assert.equal(notaMaisPerto(r!.hz).midi, midi, `midi ${midi} harm ${h}: ${r!.hz}`);
      assert.ok(Math.abs(notaMaisPerto(r!.hz).cents) <= 3);
    }
  }
});

test('silêncio não vira nota', () => {
  assert.equal(detectarAltura(new Float32Array(2048), 44100), null);
});

test('o WAV da nota tem cabeçalho e tamanho certos', async () => {
  const { wavDaNota } = await import('./sintese');
  const uri = wavDaNota(69, 100, 8000);
  assert.ok(uri.startsWith('data:audio/wav;base64,UklGR'));
  const bytes = Buffer.from(uri.split(',')[1]!, 'base64');
  assert.equal(bytes.length, 44 + 800 * 2);
});
