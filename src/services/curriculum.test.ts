/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildPath, currentUnit, jumpLessons, resolveLesson } from './curriculum';
import { ROMENO } from '../data/ro';

test('trilha: só a primeira lição fica liberada no começo', () => {
  const path = buildPath(ROMENO, new Map());
  assert.equal(path[0].state, 'atual');
  assert.ok(path.slice(1).every((p) => p.state === 'bloqueada'));
});

test('trilha: concluir libera a próxima, inclusive na unidade seguinte', () => {
  const u1 = ROMENO.units[0].lessons.map((l) => [l.id, 1] as [string, number]);
  const path = buildPath(ROMENO, new Map(u1));
  const atual = path.find((p) => p.state === 'atual');
  assert.equal(atual?.lesson.id, ROMENO.units[1].lessons[0].id);
  assert.equal(currentUnit(path)?.id, ROMENO.units[1].id);
});

test('prova junta palavras e lacunas das lições da unidade', () => {
  const unit = ROMENO.units[0];
  const prova = resolveLesson(unit, unit.lessons.at(-1)!, () => 0.5);
  const unitWords = new Set(unit.lessons.flatMap((l) => l.words));
  assert.equal(prova.words.length, 6);
  assert.equal(prova.cloze.length, 5);
  assert.ok(prova.words.every((w) => unitWords.has(w)));
});

test('teste para pular marca todas as lições até a unidade escolhida', () => {
  const target = ROMENO.units[2];
  const ids = jumpLessons(ROMENO, target.id);
  const expected = ROMENO.units.slice(0, 3).flatMap((u) => u.lessons.map((l) => l.id));
  assert.deepEqual(ids, expected);
  const path = buildPath(ROMENO, new Map(ids.map((id) => [id, 0.9] as [string, number])));
  assert.equal(currentUnit(path)?.id, ROMENO.units[3].id);
  assert.deepEqual(jumpLessons(ROMENO, 'nao-existe'), []);
});
