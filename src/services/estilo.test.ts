import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

function tsxFiles(dir: string): string[] {
  return readdirSync(dir).flatMap((f) => {
    const p = join(dir, f);
    return statSync(p).isDirectory() ? tsxFiles(p) : p.endsWith('.tsx') ? [p] : [];
  });
}

// O NativeWind só aplica className nos componentes que conhece: no Animated.View/Text do
// Reanimated a classe é ignorada em silêncio (o layout some). Use style ou uma View por dentro.
test('estilo: nenhum componente animado do Reanimated com className', () => {
  const bad: string[] = [];
  for (const f of tsxFiles('src')) {
    const s = readFileSync(f, 'utf8');
    for (const m of s.matchAll(/<Animated\.(\w+)\b((?:[^<>]|=>|\{[^{}]*\})*?)>/gs))
      if (/\bclassName=/.test(m[2])) bad.push(`${f}:${s.slice(0, m.index).split('\n').length} Animated.${m[1]}`);
  }
  assert.deepEqual(bad, []);
});
