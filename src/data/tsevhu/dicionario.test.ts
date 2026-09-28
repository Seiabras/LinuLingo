import { test } from 'node:test';
import assert from 'node:assert/strict';
import { koiLetters } from '@/services/koiwrit';
import { CATEGORIAS, DICIONARIO } from './dicionario';

test('tsevhu: dicionário completo, com categoria e significado em português', () => {
  assert.ok(DICIONARIO.length > 3500, `só ${DICIONARIO.length} verbetes`);
  const cats = new Set(CATEGORIAS);
  // a planilha ainda não tem o IPA de umas poucas palavras novas; a tela mostra só a palavra
  assert.ok(DICIONARIO.filter((e) => !e[1]).length < 50);
  const ruins = DICIONARIO.filter(([palavra, , classe, sentido, cat]) => !palavra || !classe || !sentido.trim() || !cats.has(cat));
  assert.deepEqual(ruins.slice(0, 5), []);
  for (const c of CATEGORIAS) assert.ok(DICIONARIO.some((e) => e[4] === c), `categoria vazia: ${c}`);
});

test('tsevhu: toda palavra do dicionário se escreve em Koiwrit sem sobrar letra', () => {
  // o que koiLetters descarta são só espaços, hífens e pontuação
  const semSinal = DICIONARIO.filter(([p]) => {
    const letras = koiLetters(p).map((l) => l.letter).join('');
    const limpo = p.toLowerCase().replace(/[\s\-.,;/()!?’]/g, '').replace(/tz/g, 'ts').replace(/dj|tj/g, 'ch').replace(/rh/g, 'r');
    return letras.replace(/'/g, '') !== limpo.replace(/'/g, '');
  });
  assert.deepEqual(semSinal.slice(0, 40).map((e) => e[0]), []);
});
