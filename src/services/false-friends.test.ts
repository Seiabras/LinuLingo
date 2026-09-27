import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildFFRound, recordFF } from './false-friends';
import type { FalseFriend } from '../data/types';

const L: FalseFriend[] = [
  { word: 'exquisito', means: 'delicioso', looksLike: 'esquisito', forThat: 'raro / extraño', emoji: '😋', example: ['La comida está exquisita.', 'A comida está deliciosa.'] },
  { word: 'embarazada', means: 'grávida', looksLike: 'envergonhada', forThat: 'avergonzada', emoji: '🤰', example: ['Mi hermana está embarazada.', 'Minha irmã está grávida.'] },
  { word: 'oficina', means: 'escritório', looksLike: 'oficina mecânica', forThat: 'taller', emoji: '🏢', example: ['Trabajo en una oficina.', 'Trabalho num escritório.'] },
  { word: 'polvo', means: 'pó', looksLike: 'polvo (animal)', forThat: 'pulpo', emoji: '🌫️', example: ['Hay polvo en la mesa.', 'Tem pó na mesa.'] },
];

test('falsos amigos: a armadilha está nas opções junto com a resposta', () => {
  let s = 3;
  const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  const r = buildFFRound(L, {}, 4, rnd);
  assert.equal(r.length, 4);
  for (const q of r) {
    assert.ok(q.options.includes(q.answer));
    assert.ok(q.options.includes(q.trap));
    assert.notEqual(q.answer, q.trap);
  }
  assert.ok(r.some((q) => q.kind === 'como-se-diz' && q.answer === 'raro' || q.kind === 'como-se-diz'));
  assert.equal(recordFF({}, r[0], true)[r[0].ff.word], 1);
});
