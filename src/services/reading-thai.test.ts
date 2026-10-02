/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toReadingTh } from './reading-thai';

test('tailandês: RTGS, sem marcar tom nem duração (como o padrão oficial)', () => {
  assert.equal(toReadingTh('สวัสดี'), 'sawatdi');
  assert.equal(toReadingTh('อร่อย'), 'aroi');
  assert.equal(toReadingTh('ของ'), 'khong');
});

test('tailandês: vogal escrita antes da consoante (เ/แ/โ/ใ/ไ) sai depois dela, como se pronuncia', () => {
  assert.equal(toReadingTh('เชียงใหม่'), 'chiangmai');
});

test('tailandês: texto que não é tailandês passa intacto', () => {
  assert.equal(toReadingTh('olá, 123!'), 'olá, 123!');
});
