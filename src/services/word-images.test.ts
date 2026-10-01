import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PICTO_EXCLUDE, PICTO_MAP } from '@/data/pictogramas-mapa';
import { AMBIGUOUS, isGrammarNote, makeImageLookup, normalizeTranslation, PHOTO_POS, queryAlternatives, translationHead, withoutNotes } from './word-images';

test('imagens das palavras: nota de gramática × sentido no parêntese', () => {
  // formas da palavra, abreviaturas, rótulos, regiões e regência: só nota
  for (const n of ['juuston, juustoa', 'pl. câini', 'perf.', 'informal', 'Espanha: patatas fritas', 'aux. essere', '+ dat.', 'alguém', '-se', 'm/f'])
    assert.ok(isGrammarNote(n), n);
  // sentido em português: muda a palavra
  for (const n of ['assento', 'dinheiro', 'de roupa', 'de árvore', '1/4', 'no cargo']) assert.ok(!isGrammarNote(n), n);
  // com a palavra estudada, as formas dela também contam como nota
  assert.ok(!isGrammarNote('osten'));
  assert.ok(isGrammarNote('osten', 'ost'));
});

test('imagens das palavras: a tradução sem as notas', () => {
  assert.equal(withoutNotes('Queijo (juuston, juustoa)'), 'queijo');
  assert.equal(withoutNotes('cachorro / cão (pl. câini)'), 'cachorro / cão');
  assert.equal(withoutNotes('banco (assento)'), 'banco (assento)');
  assert.equal(normalizeTranslation('  Pão   d’água '), "pão d'água");
  // só o primeiro sentido; nada quando sobra um parêntese de sentido
  assert.deepEqual(queryAlternatives('borracha; chiclete'), ['borracha']);
  assert.deepEqual(queryAlternatives('banco (assento)'), []);
});

test('imagens das palavras: fotos (tradução inteira, sem notas, alternativas)', () => {
  const photo = makeImageLookup({
    queijo: 'queijo',
    banco: 'banco-dinheiro',
    'cachorro / cão': 'cachorro',
    pena: 'pena-de-ave',
    chiclete: 'chiclete',
    rosa: 'flor',
    'rosa#adjetivo': 'cor-rosa',
  });
  assert.equal(photo('queijo (juuston, juustoa)'), 'queijo');
  assert.equal(photo('Queijo'), 'queijo');
  assert.equal(photo('banco (assento)'), undefined); // outro sentido
  assert.equal(photo('banco (pl. bancos)'), 'banco-dinheiro');
  assert.equal(photo('cão'), 'cachorro'); // alternativa da chave
  assert.equal(photo('cachorro / cão (pl. câini)'), 'cachorro');
  assert.equal(photo('pena'), 'pena-de-ave');
  assert.equal(photo('punição, pena'), undefined); // “pena” tem mais de um sentido
  assert.ok(AMBIGUOUS.has('pena'));
  assert.equal(photo('borracha; chiclete'), undefined); // só o primeiro sentido
  assert.equal(photo('queijo (osten)'), undefined);
  assert.equal(photo('queijo (osten)', { target: 'ost' }), 'queijo');
  // a chave com a classe vem antes
  assert.equal(photo('rosa', { pos: 'adjetivo' }), 'cor-rosa');
  assert.equal(photo('rosa', { pos: 'substantivo' }), 'flor');
  assert.equal(photo('rosa'), 'flor');
  assert.ok(PHOTO_POS.has('substantivo') && !PHOTO_POS.has('verbo'));
});

test('imagens das palavras: pictogramas (cabeça, sem dividir as chaves, com exceções)', () => {
  const table = { cadeira: 'chair', banco: 'bench', comer: 'eat', 'hum, que delícia': 'yum', 'rosa#adjetivo': 'pink' };
  const picto = makeImageLookup(table, { loose: true });
  assert.equal(picto('cadeira (de balanço)'), 'chair'); // a lista é conferida à mão: o parêntese sai
  assert.equal(picto('banco (assento)'), undefined); // menos nas palavras de vários sentidos
  assert.equal(picto('banco'), 'bench');
  assert.equal(picto('comer (syön, söin)'), 'eat');
  assert.equal(picto('comer; engolir'), 'eat');
  assert.equal(picto('hum'), undefined); // a chave vale inteira
  assert.equal(picto('hum, que delícia'), 'yum');
  assert.equal(picto('rosa', { pos: 'adjetivo' }), 'pink');
  assert.equal(picto('rosa', { pos: 'substantivo' }), undefined);
  const excluding = makeImageLookup(table, { loose: true, exclude: new Set(['cadeira (de rodas)']) });
  assert.equal(excluding('cadeira (de rodas)'), undefined);
  assert.equal(excluding('cadeira (de praia)'), 'chair');
  assert.equal(translationHead('comida (ruoan ou ruuan)'), 'comida');
  assert.equal(translationHead('cachorro / cão'), 'cachorro');
  assert.equal(translationHead('Olá!'), 'olá');
});

test('imagens das palavras: o mapa dos pictogramas está normalizado', () => {
  const keys = Object.keys(PICTO_MAP);
  assert.ok(keys.length > 1000);
  for (const k of keys) {
    const base = k.replace(/#[a-zçãéêíóú]+$/, '').replace(/\*$/, '');
    assert.equal(normalizeTranslation(base), base, k);
    assert.ok(PICTO_MAP[k] && !PICTO_MAP[k].endsWith('.svg'), k);
  }
  for (const e of PICTO_EXCLUDE) assert.equal(normalizeTranslation(e), e, e);
});
