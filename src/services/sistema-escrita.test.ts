import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PACKS } from '@/data/idiomas';
import { fraseAberturaEscrita } from './sistema-escrita';

test('frase de abertura: alfabeto único (romeno), igual ao pedido original do Matheus', () => {
  assert.equal(fraseAberturaEscrita(PACKS.ro), 'Vamos praticar o alfabeto do romeno.');
});

test('frase de abertura: escrita combinada (japonês) enumera os tipos, não chama tudo de "alfabeto"', () => {
  assert.equal(fraseAberturaEscrita(PACKS.ja), 'Vamos praticar o sistema de escrita do japonês: dois silabários, Hiragana e Katakana, e um logográfico, Kanji.');
});

test('frase de abertura: abjad (árabe) e abugida (hindi) usam o termo certo, não "alfabeto"', () => {
  assert.equal(fraseAberturaEscrita(PACKS.ar), 'Vamos praticar a escrita abjad do árabe.');
  assert.equal(fraseAberturaEscrita(PACKS.hi), 'Vamos praticar a escrita abugida do híndi.');
});

test('frase de abertura: silabário (amárico/ge’ez) usa o termo da própria descrição dos dados', () => {
  assert.equal(fraseAberturaEscrita(PACKS.am), 'Vamos praticar o silabário do amárico.');
});

test('frase de abertura: ressalva depois do primeiro ponto não muda a classificação (toki pona cita o sitelen pona, não-oficial, mas o curso ensina só a escrita latina)', () => {
  assert.equal(fraseAberturaEscrita(PACKS.tok), 'Vamos praticar o alfabeto do toki Pona.');
});

test('frase de abertura: klingon é alfabeto mesmo sem a palavra "alfabeto" no texto (usa "letras latinas"/romanização)', () => {
  assert.equal(fraseAberturaEscrita(PACKS.tlh), 'Vamos praticar o alfabeto do klingon.');
});

test('frase de abertura: sem palavra-chave reconhecida, fica neutra em vez de inventar o tipo (mongol tradicional)', () => {
  assert.equal(fraseAberturaEscrita(PACKS.mvf), 'Vamos praticar o sistema de escrita do mongol (escrita tradicional).');
});
