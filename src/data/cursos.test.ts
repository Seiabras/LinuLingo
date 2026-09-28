import { test } from 'node:test';
import assert from 'node:assert/strict';
import { MINI_COURSES } from './cursos';
import { BRAILLE } from './cursos/tatil';

test('mini-cursos: ids únicos, lições com itens e perguntas válidas', () => {
  const ids = new Set<string>();
  for (const c of MINI_COURSES) {
    assert.ok(!ids.has(c.id), `curso repetido: ${c.id}`);
    ids.add(c.id);
    assert.ok(c.lessons.length >= 2, `${c.id}: poucas lições`);
    const lessons = new Set<string>();
    for (const l of c.lessons) {
      assert.ok(!lessons.has(l.id), `${c.id}/${l.id} repetida`);
      lessons.add(l.id);
      assert.ok(l.intro.length > 0 && l.items.length > 0 && l.quiz.length > 0, `${c.id}/${l.id}`);
      for (const q of l.quiz) assert.ok(q.answer >= 0 && q.answer < q.options.length && new Set(q.options).size === q.options.length, `${c.id}/${l.id}: ${q.q}`);
      if (c.vlibras) for (const i of l.items) assert.ok(i.vlibras, `${c.id}/${l.id}: ${i.term} sem texto para o VLibras`);
    }
  }
});

test('Braille: celas válidas, todas diferentes, e as perguntas batem com a tabela', () => {
  const cells = Object.values(BRAILLE);
  for (const c of cells) assert.match(c, /^1?2?3?4?5?6?$/);
  assert.equal(new Set(cells).size, cells.length, 'duas letras com a mesma cela');
  // k–t são a–j com o ponto 3
  const add3 = (d: string) => [...new Set([...d, '3'])].sort().join('');
  for (const [a, k] of ['ak', 'bl', 'cm', 'dn', 'eo', 'fp', 'gq', 'hr', 'is', 'jt']) assert.equal(BRAILLE[k], add3(BRAILLE[a]), k);
  const tatil = MINI_COURSES.find((c) => c.id === 'tatil')!;
  for (const l of tatil.lessons)
    for (const q of l.quiz) {
      const letter = q.options[q.answer];
      if (q.braille && BRAILLE[letter]) assert.equal(BRAILLE[letter], q.braille, `${l.id}: ${q.q}`);
    }
});
