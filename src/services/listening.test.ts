import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildListenRound, checkDictation, distractors, listenMastery, listenPool, MASTERED, recordListen, speakerOf, type ListenItem } from './listening';
import { toIpaEs } from './ipa-es';
import type { AudioClip, VocabSeed } from '../data/types';

const clip = (w: string): AudioClip => ({ src: 1, file: `LL-Q1321 (spa)-Precision27-${w}.wav`, author: 'Speaker: Precision27\nRecorder: Precision27', license: 'CC BY 4.0', licenseUrl: '', page: '' });
const WORDS = ['hola', 'ola', 'vaca', 'baca', 'casa', 'cosa', 'caza', 'masa', 'mesa', 'misa', 'peso', 'beso', 'queso', 'pero', 'perro', 'caro', 'carro', 'si', 'sí', 'el/la'];
const vocab = WORDS.map((w, i) => ({ id: `es-${i}`, language: 'es', word_target: w, word_native: `sentido de ${w}`, frequency_rank: i + 1 }) as VocabSeed);
const ipa = (t: string) => toIpaEs(t, '419');
let seed = 7;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

test('escuta: só palavras com gravação de nativo quando há bastante; sem gravações, a voz do aparelho', () => {
  const many = Object.fromEntries(Array.from({ length: 50 }, (_, i) => [`p${i}`, clip(`p${i}`)]));
  const big = [...vocab, ...Array.from({ length: 50 }, (_, i) => ({ ...vocab[0], id: `x${i}`, word_target: `p${i}`, frequency_rank: 100 + i }))];
  const pool = listenPool({ vocab: big }, many);
  assert.equal(pool.length, 50);
  assert.ok(pool.every((i) => i.clip));
  const noClips = listenPool({ vocab }, undefined);
  assert.ok(noClips.every((i) => !i.clip));
  assert.ok(!noClips.some((i) => i.word === 'el/la'), 'palavras com variantes na escrita ficam de fora');
  assert.deepEqual(noClips.slice(0, 3).map((i) => i.word), ['hola', 'ola', 'vaca'], 'da mais frequente para a menos');
});

test('escuta: as opções parecem a certa, mas nenhuma soa igual (homófonos não dá para distinguir de ouvido)', () => {
  const pool = listenPool({ vocab }, undefined);
  const hola = pool.find((i) => i.word === 'hola')!;
  const vaca = pool.find((i) => i.word === 'vaca')!;
  const d1 = distractors(hola, pool, 3, rnd, ipa);
  assert.ok(!d1.includes('ola'), '“hola” e “ola” soam igual');
  const d2 = distractors(vaca, pool, 3, rnd, ipa);
  assert.ok(!d2.includes('baca'), '“vaca” e “baca” soam igual');
  assert.equal(d2.length, 3);
  // «casa» e «caza» soam igual no espanhol da América (seseo), não na Espanha
  const casa = pool.find((i) => i.word === 'casa')!;
  assert.ok(!distractors(casa, pool, 5, rnd, ipa).includes('caza'));
  assert.ok(distractors(casa, pool, 5, rnd, (t) => toIpaEs(t, 'ES')).includes('caza'));
  const round = buildListenRound(pool, {}, 'escolher', 6, rnd, ipa);
  assert.equal(round.length, 6);
  for (const q of round) {
    assert.equal(q.options?.length, 4);
    assert.ok(q.options!.includes(q.item.word));
    assert.equal(new Set(q.options).size, 4);
  }
});

test('escuta: as erradas voltam primeiro, as dominadas só completam a rodada', () => {
  const pool = listenPool({ vocab }, undefined);
  const progress = Object.fromEntries(pool.map((i) => [i.word, MASTERED]));
  progress['perro'] = -2;
  progress['queso'] = -4;
  const round = buildListenRound(pool, progress, 'escrever', 5, rnd, ipa);
  const words = round.map((q) => q.item.word);
  assert.ok(words.includes('perro') && words.includes('queso'));
  assert.equal(new Set(words).size, 5);
  assert.ok(round.every((q) => q.options === undefined));
});

test('ditado: acentos, homófonos e quase', () => {
  const pool = listenPool({ vocab }, undefined);
  const item = (w: string) => pool.find((i) => i.word === w) as ListenItem;
  assert.deepEqual(checkDictation('Hola!', item('hola'), pool, ipa), { kind: 'certo' });
  assert.deepEqual(checkDictation('si', item('sí'), pool, ipa), { kind: 'acentos' });
  assert.deepEqual(checkDictation('ola', item('hola'), pool, ipa), { kind: 'homofono', other: 'ola' });
  assert.deepEqual(checkDictation('baca', item('vaca'), pool, ipa), { kind: 'homofono', other: 'baca' });
  assert.deepEqual(checkDictation('pero', item('perro'), pool, ipa), { kind: 'quase' });
  assert.deepEqual(checkDictation('mesa', item('perro'), pool, ipa), { kind: 'errado' });
  assert.deepEqual(checkDictation('   ', item('perro'), pool, ipa), { kind: 'errado' });
});

test('escuta: pontos sobem mais no ditado e zeram ao errar', () => {
  const pool = listenPool({ vocab }, undefined);
  const q = { mode: 'escrever' as const, item: pool[0] };
  let p = recordListen({}, q, true);
  assert.equal(p[pool[0].word], 2);
  p = recordListen(p, { ...q, mode: 'escolher' }, true);
  assert.equal(p[pool[0].word], 3);
  p = recordListen(p, q, false);
  assert.equal(p[pool[0].word], -2);
  p = recordListen(p, q, true);
  assert.equal(p[pool[0].word], 2, 'depois de errar, recomeça do zero');
  assert.equal(listenMastery(pool, { [pool[0].word]: MASTERED }).done, 1);
  assert.equal(speakerOf(clip('x')), 'Precision27');
});
