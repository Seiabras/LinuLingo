import { test } from 'node:test';
import assert from 'node:assert/strict';
import { melodyShape, melodySimilarity, pitchTrack } from './pitch';

/** Uma voz sintética: tom com frequência que varia no tempo (Hz por amostra), com silêncio antes e depois. */
function voice(sr: number, seconds: number, hz: (t: number) => number): Float32Array {
  const n = Math.round(sr * seconds);
  const pad = Math.round(sr * 0.2);
  const out = new Float32Array(n + 2 * pad);
  let phase = 0;
  for (let i = 0; i < n; i++) {
    phase += (2 * Math.PI * hz(i / sr)) / sr;
    out[pad + i] = 0.4 * Math.sin(phase) + 0.15 * Math.sin(2 * phase);
  }
  return out;
}

test('sombra sonora: a curva de um áudio acha a altura da voz e o silêncio', () => {
  const sr = 22050;
  const track = pitchTrack(voice(sr, 1, () => 200), sr);
  const voiced = track.filter((p): p is number => p !== null);
  assert.ok(voiced.length >= 15, `${voiced.length} medidas com voz`);
  for (const p of voiced) assert.ok(Math.abs(p - 200) < 8, `${p} Hz ≈ 200 Hz`);
  assert.equal(track[0], null, 'o silêncio do começo não tem altura');
});

test('sombra sonora: a mesma melodia numa voz grave e numa aguda é parecida; subir × descer não', () => {
  const sr = 22050;
  const rise = (base: number) => (t: number) => base * 2 ** ((t * 6) / 12); // sobe 6 semitons
  const fall = (base: number) => (t: number) => base * 2 ** ((-t * 6) / 12);
  const modelo = pitchTrack(voice(sr, 1, rise(220)), sr); // voz aguda
  const aluno = pitchTrack(voice(sr, 1.3, rise(110)), sr); // uma oitava abaixo e mais devagar
  const contra = pitchTrack(voice(sr, 1, fall(110)), sr);
  const igual = melodySimilarity(aluno, modelo)!;
  const oposto = melodySimilarity(contra, modelo)!;
  assert.ok(igual >= 85, `mesma melodia: ${igual}`);
  assert.ok(oposto <= 45, `melodia contrária: ${oposto}`);
  assert.equal(melodySimilarity([null, null], modelo), null, 'sem voz, sem nota');
  const shape = melodyShape(modelo, 10)!;
  assert.equal(shape.length, 10);
  assert.ok(shape[9] > shape[0], 'a forma sobe');
});
