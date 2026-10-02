/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingHy } from './reading-armenian';

test('armênio: oclusivas/africadas surdas simples vs. aspiradas (b/p/p\', g/k/k\', d/t/t\', dz/ts/ts\', j/ch/ch\')', () => {
  assert.equal(toReadingHy('բարև'), 'barev');
  assert.equal(toReadingHy('պանիր'), 'panir');
  assert.equal(toReadingHy('փոքր'), "p'ok'r");
  assert.equal(toReadingHy('կատու'), 'katu');
  assert.equal(toReadingHy('քաղաք'), "k'aghak'");
  assert.equal(toReadingHy('տուն'), 'tun');
  assert.equal(toReadingHy('թեյ'), "t'ey");
  assert.equal(toReadingHy('ուրբաթ'), "urbat'");
});

test('armênio: ե e ո mudam no começo da palavra (ye-, vo-), և também (yev-)', () => {
  assert.equal(toReadingHy('ես'), 'yes');
  assert.equal(toReadingHy('երկու'), 'yerku');
  assert.equal(toReadingHy('ոչ'), "voch'");
  assert.equal(toReadingHy('որտեղ'), 'vortegh');
  assert.equal(toReadingHy('և'), 'yev');
  assert.equal(toReadingHy('Բարև'), 'Barev');
});

test('armênio: ու é sempre um dígrafo só (u), ը é sempre ë, pontuação e marcas de entonação somem/convertem', () => {
  assert.equal(toReadingHy('ուզել'), 'uzel');
  assert.equal(toReadingHy('վաղը'), 'vaghë');
  assert.equal(toReadingHy('Ինչպե՞ս ես'), "Inch'pes yes");
  assert.equal(toReadingHy('Շնորհակալություն'), "Shnorhakalut'yun");
  assert.equal(toReadingHy('Ցտեսություն'), "Ts'tesut'yun");
});

test('armênio: texto que não é armênio passa intacto', () => {
  assert.equal(toReadingHy('olá, 123!'), 'olá, 123!');
});
