/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { daysBetween, lessonXp, registerStudy, visibleStreak } from './progress';

test('daysBetween atravessa meses', () => {
  assert.equal(daysBetween('2026-09-30', '2026-10-01'), 1);
  assert.equal(daysBetween('2026-09-25', '2026-09-25'), 0);
});

test('estudar em dias seguidos aumenta a ofensiva; no mesmo dia não', () => {
  let s = registerStudy({ streak: 0, freezes: 1, lastStudyDate: null }, '2026-09-01');
  assert.equal(s.streak, 1);
  s = registerStudy(s, '2026-09-01');
  assert.equal(s.streak, 1);
  assert.equal(s.increased, false);
  s = registerStudy(s, '2026-09-02');
  assert.equal(s.streak, 2);
});

test('um dia perdido consome congelamento; dois dias zeram', () => {
  const frozen = registerStudy({ streak: 5, freezes: 1, lastStudyDate: '2026-09-01' }, '2026-09-03');
  assert.equal(frozen.streak, 6);
  assert.equal(frozen.freezes, 0);
  assert.equal(frozen.usedFreeze, true);
  const lost = registerStudy({ streak: 5, freezes: 1, lastStudyDate: '2026-09-01' }, '2026-09-04');
  assert.equal(lost.streak, 1);
});

test('ganha congelamento no 7º dia, até 2', () => {
  const s = registerStudy({ streak: 6, freezes: 2, lastStudyDate: '2026-09-06' }, '2026-09-07');
  assert.equal(s.streak, 7);
  assert.equal(s.freezes, 2);
  assert.equal(registerStudy({ streak: 6, freezes: 0, lastStudyDate: '2026-09-06' }, '2026-09-07').freezes, 1);
});

test('visibleStreak mostra 0 depois de perder a ofensiva', () => {
  assert.equal(visibleStreak({ streak: 4, freezes: 0, lastStudyDate: '2026-09-01' }, '2026-09-02'), 4);
  assert.equal(visibleStreak({ streak: 4, freezes: 0, lastStudyDate: '2026-09-01' }, '2026-09-03'), 0);
  assert.equal(visibleStreak({ streak: 4, freezes: 1, lastStudyDate: '2026-09-01' }, '2026-09-03'), 4);
});

test('XP da lição e da prova', () => {
  assert.equal(lessonXp(3, 3, false), 10 + 6 + 5);
  assert.equal(lessonXp(1, 3, false), 12);
  assert.equal(lessonXp(3, 3, true), 42);
});
