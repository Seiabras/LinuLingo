import { test } from 'node:test';
import assert from 'node:assert/strict';
import { musicaSalva, proximaMusica } from './musica-inicio';

test('o botão de som passa por desligado → tranquila → pesada → desligado', () => {
  assert.equal(proximaMusica(null), 'tranquila');
  assert.equal(proximaMusica('tranquila'), 'pesada');
  assert.equal(proximaMusica('pesada'), null);
});

test('quem tinha o som ambiente ligado ouve a música tranquila', () => {
  assert.equal(musicaSalva('1'), 'tranquila');
  assert.equal(musicaSalva('pesada'), 'pesada');
  assert.equal(musicaSalva('0'), null);
  assert.equal(musicaSalva(null), null);
});
