import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ascii, atbash, batidas, braille, pontosBraille, cesar, CODIGOS, morse, otan, polibio, semAcento, semaforo, SEMAFORO_TABLE } from './codigos';

test('códigos: acentos e cedilha viram as 26 letras', () => {
  assert.equal(semAcento('Ação já'), 'ACAO JA');
});

test('códigos: morse letra por letra, palavras separadas por /', () => {
  assert.equal(morse('sos'), '... --- ...');
  assert.equal(morse('Oi, pé!'), '--- .. / .--. .');
});

test('códigos: OTAN com a grafia oficial', () => {
  assert.equal(otan('Juliana'), 'Juliett Uniform Lima India Alfa November Alfa');
});

test('códigos: braille com o sinal de número', () => {
  assert.equal(braille('abc'), '⠁⠃⠉');
  assert.equal(braille('w'), '⠺');
  assert.equal(braille('z'), '⠵');
  assert.equal(braille('10'), '⠼⠁⠚');
  assert.deepEqual(pontosBraille('⠁'), [1]);
  assert.deepEqual(pontosBraille('⠺'), [2, 4, 5, 6]);
  assert.deepEqual(pontosBraille('⠼'), [3, 4, 5, 6]);
});

test('códigos: César anda 3 casas e dá a volta no alfabeto', () => {
  assert.equal(cesar('xyz abc'), 'ABC DEF');
  assert.equal(cesar(cesar('Linu'), -3), 'LINU');
});

test('códigos: atbash duas vezes devolve o original', () => {
  assert.equal(atbash('az'), 'ZA');
  assert.equal(atbash(atbash('pinguim')), 'PINGUIM');
});

test('códigos: Políbio junta I e J; batidas trocam K por C', () => {
  assert.equal(polibio('ij'), '24 24');
  assert.equal(polibio('a z'), '11 / 55');
  assert.equal(batidas('k'), batidas('c'));
  assert.equal(batidas('a'), '• •');
  assert.equal(batidas('z'), '••••• •••••');
});

test('códigos: semáforo tem as 26 letras confirmadas, sem repetir combinação', () => {
  const letras = SEMAFORO_TABLE.map(([l]) => l);
  assert.equal(letras.length, 26);
  for (const letra of 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') assert.ok(letras.includes(letra), letra);
  const combinacoes = SEMAFORO_TABLE.map(([, v]) => v);
  assert.equal(new Set(combinacoes).size, combinacoes.length, 'combinação repetida');
  for (const [, v] of SEMAFORO_TABLE) assert.equal([...v].length, 2, 'cada letra deve ter exatamente 2 setas');
  assert.equal(semaforo('SINAL'), '↘← ↙↖ ↘↙ ↓↙ ↗↙');
  assert.equal(semaforo('WOW'), '→↗ ↖← →↗', 'P, W, X e Y agora confirmados contra 2 fontes (ver nota em codigos.ts)');
});

test('códigos: ASCII em 8 bits', () => {
  assert.equal(ascii('A'), '01000001');
  assert.equal(ascii('é'), '01100101');
});

test('códigos: todos têm id único, exemplo e codificador que funciona', () => {
  assert.equal(new Set(CODIGOS.map((c) => c.id)).size, CODIGOS.length);
  for (const c of CODIGOS) {
    assert.ok(c.codificar('Linu').length > 0, c.id);
    assert.ok(c.exemplo[1].length > 0, c.id);
  }
});
