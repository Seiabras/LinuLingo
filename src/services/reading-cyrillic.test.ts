/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingRu, toReadingUk, toReadingBe, toReadingBg, toReadingMk, toReadingSr, toReadingMn } from './reading-cyrillic';

test('russo: sistema popular (BGN/PCGN), sem diacríticos', () => {
  assert.equal(toReadingRu('Здравствуйте'), 'Zdravstvuyte');
  assert.equal(toReadingRu('привет'), 'privet');
  assert.equal(toReadingRu('актёр'), 'aktyor');
  assert.equal(toReadingRu('съезд'), 'syezd');
});

test('ucraniano: sistema nacional de 2010 (Київ → Kyiv, Андрій → Andrii)', () => {
  assert.equal(toReadingUk('Київ'), 'Kyiv');
  assert.equal(toReadingUk('Андрій'), 'Andrii');
});

test('bielorrusso: sistema nacional de 2007 (parte da Łacinka)', () => {
  assert.equal(toReadingBe('Прывітанне'), 'Pryvitannie');
  assert.equal(toReadingBe('Дзякуй'), 'Dziakuj');
});

test('búlgaro: Streamlined System de 2006 (България → Balgaria, grafia oficial do nome do país)', () => {
  assert.equal(toReadingBg('България'), 'Balgaria');
  assert.equal(toReadingBg('Здравей'), 'Zdravey');
});

test('macedônio: sistema nacional de 2008, sem diacríticos (ѓ→gj, ќ→kj)', () => {
  assert.equal(toReadingMk('Здраво'), 'Zdravo');
  assert.equal(toReadingMk('ноќ'), 'nokj');
});

test('sérvio: bialfabético, correspondência letra a letra com o alfabeto latino de Gaj', () => {
  assert.equal(toReadingSr('Хвала'), 'Hvala');
  assert.equal(toReadingSr('љубав'), 'ljubav');
});

test('mongol: MNS 5217:2012, diferente do russo (е sempre "ye", й sempre "i", ж→j)', () => {
  assert.equal(toReadingMn('Улаанбаатар'), 'Ulaanbaatar');
  assert.equal(toReadingMn('Сайн байна уу?'), 'Sain baina uu?');
  assert.equal(toReadingMn('төгрөг'), 'tögrög');
});

test('cirílico: texto que não é cirílico passa intacto', () => {
  assert.equal(toReadingRu('olá, 123!'), 'olá, 123!');
});
