/// <reference types="node" />
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { contarSilabas, leituraPinyin, pinyinDaTraducao } from './zh-pinyin';
import { CHINES } from '../data/zh';

test('pinyin: conta sílabas e recusa o que não é pinyin', () => {
  assert.equal(contarSilabas('zǎoshang'), 2);
  assert.equal(contarSilabas('xīngqī’èr'), 3);
  assert.equal(contarSilabas('nǎr'), 1);
  assert.equal(contarSilabas('dì-yī'), 2);
  assert.equal(contarSilabas('formal'), null);
});

test('pinyin: acha o pinyin nos parênteses da tradução, uma sílaba por caractere', () => {
  assert.equal(pinyinDaTraducao('你好', 'oi, olá (nǐ hǎo)'), 'nǐ hǎo');
  assert.equal(pinyinDaTraducao('巴西人', 'brasileiro (pessoa: Bāxīrén)'), 'Bāxīrén');
  assert.equal(pinyinDaTraducao('是', 'ser (shì; liga dois nomes: 我是学生)'), 'shì');
  assert.equal(pinyinDaTraducao('女儿', 'filha (nǚ’ér)'), 'nǚ’ér');
  assert.equal(pinyinDaTraducao('哪儿', 'onde (nǎr)'), 'nǎr');
  // português no lugar do pinyin não passa
  assert.equal(pinyinDaTraducao('在', 'estar (em algum lugar)'), null);
});

test('pinyin: lê a frase palavra por palavra; caractere desconhecido deixa sem leitura', () => {
  const ler = leituraPinyin([
    ['你好', '(nǐ hǎo)'],
    ['你', '(nǐ)'],
    ['叫', '(jiào)'],
    ['什么', '(shénme)'],
    ['名字', '(míngzi)'],
  ]);
  assert.equal(ler('你好！你叫什么名字？'), 'nǐ hǎo! nǐ jiào shénme míngzi?');
  assert.equal(ler('你叫猫？'), '');
  assert.equal(ler('Olá'), '');
});

test('pinyin: o pacote do mandarim tem leitura em quase todas as frases', () => {
  const frases = new Set<string>();
  for (const w of CHINES.vocab) if (w.example_sentence) frases.add(w.example_sentence);
  for (const u of CHINES.units) for (const l of u.lessons) l.cloze.forEach((c) => frases.add(c.sentence.replace('___', c.answer)));
  const sem = [...frases].filter((f) => !CHINES.reading!(f));
  assert.ok(sem.length <= frases.size * 0.05, `sem leitura: ${sem.join(' ')}`);
  assert.equal(CHINES.reading!('我会说一点儿中文。'), 'wǒ huì shuō yìdiǎnr Zhōngwén.');
});
