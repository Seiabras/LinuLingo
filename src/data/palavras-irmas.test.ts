import { test } from 'node:test';
import assert from 'node:assert/strict';
import { areSiblings, KIN_LANGS, WORD_FAMILIES, wordIn, type KinLang } from './palavras-irmas';

test('palavras irmãs: ids únicos, cada língua uma vez por família, todas com o português', () => {
  assert.equal(new Set(WORD_FAMILIES.map((f) => f.id)).size, WORD_FAMILIES.length);
  for (const f of WORD_FAMILIES) {
    const langs = f.groups.flatMap((g) => Object.keys(g.words));
    assert.equal(new Set(langs).size, langs.length, `${f.id}: língua repetida`);
    for (const l of langs) assert.ok(l in KIN_LANGS, `${f.id}: língua ${l}`);
    assert.ok(wordIn(f, 'pt'), `${f.id}: falta o português`);
    for (const g of f.groups) for (const w of Object.values(g.words)) assert.ok(w && w.trim() === w, `${f.id}: palavra vazia`);
    if (f.root === null) assert.ok(f.groups.length >= 2, `${f.id}: sem raiz comum, precisa de dois grupos`);
  }
});

test('palavras irmãs: parecer não é ser parente, e não parecer não impede', () => {
  const fam = (id: string) => WORD_FAMILIES.find((f) => f.id === id)!;
  assert.ok(!areSiblings(fam('dia'), 'pt', 'en'), '«day» não é irmão de «dia»');
  assert.ok(areSiblings(fam('dia'), 'pt', 'ru'), '«день» é irmão de «dia»');
  assert.ok(!areSiblings(fam('agua'), 'pt', 'sv'), '«vatten» é de outra raiz');
  assert.ok(areSiblings(fam('agua'), 'ro', 'it'), '«apă» e «acqua» vêm de aqua');
  assert.ok(areSiblings(fam('noite'), 'ru', 'sv'));
  assert.ok(!areSiblings(fam('coracao'), 'ro', 'pt'), '«inimă» vem de anima');
  assert.equal(wordIn(fam('mar'), 'sv')?.word, 'hav', '«hav» é mar, não água');
  const langs: KinLang[] = ['ro', 'ru', 'es', 'it', 'sv', 'nb', 'da', 'is', 'fo'];
  for (const l of langs) assert.ok(WORD_FAMILIES.filter((f) => areSiblings(f, l, 'pt')).length >= 5, `${l}: poucas irmãs do português para o jogo`);
});

test('palavras irmãs: o finlandês e o estoniano são de outra família (nenhuma irmã do português)', () => {
  for (const l of ['fi', 'et'] as KinLang[]) {
    assert.ok(WORD_FAMILIES.filter((f) => wordIn(f, l)).length >= 10, `${l}: poucas palavras`);
    assert.equal(WORD_FAMILIES.filter((f) => areSiblings(f, l, 'pt')).length, 0, `${l}: tem irmã do português?`);
  }
  const fam = (id: string) => WORD_FAMILIES.find((f) => f.id === id)!;
  assert.ok(areSiblings(fam('noite'), 'is', 'sv'), '«nótt» e «natt»');
  assert.ok(!areSiblings(fam('comer'), 'da', 'sv'), '«spise» não vem de *etaną');
});
