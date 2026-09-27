import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildPairRound, contrastAccuracy, playablePairs, recordPair } from './minimal-pairs';
import { toIpaEs } from './ipa-es';
import { toIpa as toIpaRo } from './ipa-ro';
import { PARES_ES } from '../data/es/pares';
import { PARES_RU } from '../data/ru/pares';
import { PARES_RO } from '../data/ro/pares';
import { PARES_IT } from '../data/it/pares';

let seed = 11;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

test('pares mínimos: dados coerentes (contraste existe, palavras diferentes, sentidos preenchidos)', () => {
  for (const mp of [PARES_ES, PARES_RU, PARES_RO, PARES_IT]) {
    const ids = new Set(mp.contrasts.map((c) => c.id));
    assert.equal(ids.size, mp.contrasts.length);
    for (const p of mp.pairs) {
      assert.ok(ids.has(p.contrast), `contraste ${p.contrast}`);
      assert.notEqual(p.a[0], p.b[0]);
      assert.ok(p.a[1] && p.b[1], `sentido de ${p.a[0]} × ${p.b[0]}`);
    }
    for (const c of mp.contrasts) assert.ok(mp.pairs.filter((p) => p.contrast === c.id).length >= 2, `pelo menos 2 pares em ${c.id}`);
  }
});

test('pares mínimos: casa × caza só é par onde soa diferente (distinción na Espanha, seseo na América)', () => {
  const none = () => false;
  const america = playablePairs(PARES_ES, (t) => toIpaEs(t, '419'), none);
  const spain = playablePairs(PARES_ES, (t) => toIpaEs(t, 'ES'), none);
  const sz = (l: { contrast: string }[]) => l.filter((p) => p.contrast === 's-z').length;
  assert.equal(sz(america.pairs), 0);
  assert.equal(sz(america.same), 6);
  assert.equal(sz(spain.pairs), 6);
  assert.equal(spain.same.length, 0, 'na Espanha, todos os pares soam diferente');
  // os outros contrastes existem nas duas
  assert.equal(america.pairs.length, PARES_ES.pairs.length - 6);
});

test('pares mínimos: todos os pares do romeno soam diferente pela IPA', () => {
  assert.equal(playablePairs(PARES_RO, toIpaRo, () => false).same.length, 0);
});

test('pares mínimos: gravação de nativo só quando há das duas palavras (senão, as duas na voz do aparelho)', () => {
  const clips = new Set(['pero', 'perro', 'caro', 'casa', 'caza']);
  const { pairs } = playablePairs(PARES_ES, (t) => toIpaEs(t, 'ES'), (w) => clips.has(w));
  const src = (w: string) => pairs.find((p) => p.a[0] === w)?.source;
  assert.equal(src('pero'), 'nativo');
  assert.equal(src('caro'), 'aparelho', 'carro não tem gravação');
  assert.equal(src('casa'), 'aparelho', 's × z usa a voz do aparelho mesmo com gravações');
});

test('pares mínimos: a rodada puxa o contraste em que você erra', () => {
  const { pairs } = playablePairs(PARES_RU, undefined, () => false);
  const progress = { 'dura-mole': [20, 20] as [number, number], 'y-i': [2, 20] as [number, number] };
  let yi = 0;
  for (let k = 0; k < 20; k++) yi += buildPairRound(pairs, progress, 6, rnd).filter((q) => q.pair.contrast === 'y-i').length;
  assert.ok(yi / (20 * 6) > 0.6, `ы × и deveria dominar (${yi})`);
  const round = buildPairRound(pairs, {}, 30, rnd);
  assert.equal(round.length, 30, 'rodada maior que a lista recomeça os pares');
  assert.ok(round.some((q) => q.target === 'a') && round.some((q) => q.target === 'b'));
  let p = recordPair({}, 'y-i', true);
  p = recordPair(p, 'y-i', false);
  assert.equal(contrastAccuracy(p, 'y-i'), 0.5);
  assert.equal(contrastAccuracy(p, 'dura-mole'), null);
});
