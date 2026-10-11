import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync } from 'node:fs';
import { AMIGOS_LINU, GRUPOS_AMIGOS } from './amigos-linu';

test('amigos do Linu: ids e nomes únicos, grupo válido, fatos completos e um desenho para cada um', () => {
  const art = readFileSync(new URL('../components/LinuAmigo.tsx', import.meta.url), 'utf8');
  const ids = new Set<string>();
  const names = new Set<string>();
  for (const a of AMIGOS_LINU) {
    assert.ok(!ids.has(a.id), `id repetido: ${a.id}`);
    assert.ok(!names.has(a.name), `nome repetido: ${a.name}`);
    ids.add(a.id);
    names.add(a.name);
    assert.ok(a.group in GRUPOS_AMIGOS, `${a.id}: grupo ${a.group}`);
    assert.match(a.scientific, /^[A-Z][a-z]+ [a-z]+$/, `${a.id}: nome científico`);
    assert.ok(a.facts.length >= 3, `${a.id}: pelo menos 3 fatos`);
    for (const f of [...a.facts, a.jeito, a.hi]) assert.match(f, /[.!?]$/, `${a.id}: “${f}” sem ponto final`);
    assert.ok(new RegExp(`^\\s*'?${a.id}'?: [A-Z]`, 'm').test(art), `${a.id}: sem desenho em LinuAmigo.tsx`);
  }
});

test('amigos: cada um fica escondido em um lugar só dele, que existe de verdade no app', () => {
  const codigo = (dir: string): string[] =>
    readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
      e.isDirectory() ? codigo(`${dir}/${e.name}`) : e.name.endsWith('.tsx') ? [readFileSync(`${dir}/${e.name}`, 'utf8')] : [],
    );
  const tudo = codigo('src').join('\n');
  const lugares = new Set<string>();
  for (const a of AMIGOS_LINU) {
    const usos = tudo.split(`<AmigoEscondido id="${a.id}"`).length - 1;
    assert.equal(usos, 1, `${a.id}: devia estar escondido em exatamente um lugar (achei ${usos})`);
    assert.ok(!lugares.has(a.esconderijo), `${a.id}: esconderijo repetido (${a.esconderijo})`);
    lugares.add(a.esconderijo);
    assert.ok(a.dica.length > 20 && a.dica.includes(a.name), `${a.id}: a dica fala do próprio amigo`);
    assert.ok(a.artigo === 'o' || a.artigo === 'a');
  }
});
