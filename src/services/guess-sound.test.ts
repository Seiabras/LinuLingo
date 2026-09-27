import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildSoundRound, recordSound, soundPool } from './guess-sound';
import { INSTRUMENTOS } from '../data/sons-nomes';
import { BICHOS_RO } from '../data/ro/bichos';
import { BICHOS_ES } from '../data/es/bichos';

let seed = 29;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
const all = new Set([...BICHOS_RO.map((a) => a.id), ...INSTRUMENTOS.map((i) => i.id)]);

test('sons: todo instrumento tem nome nos 6 idiomas do app', () => {
  for (const i of INSTRUMENTOS) for (const lang of ['es', 'ro', 'ru', 'it', 'pt', 'sv']) assert.ok(i.names[lang], `${i.id} em ${lang}`);
});

test('sons: só entram os que têm gravação, com o nome no idioma estudado', () => {
  const pool = soundPool('ro', BICHOS_RO, new Set(['cao', 'piano']));
  assert.deepEqual(
    pool.map((p) => [p.id, p.name]),
    [
      ['cao', 'câinele'],
      ['piano', 'pianul'],
    ],
  );
  assert.equal(soundPool('es', BICHOS_ES, all).find((p) => p.id === 'violino')?.name, 'el violín');
});

test('sons: as opções são do mesmo tipo e trazem a certa', () => {
  const pool = soundPool('ro', BICHOS_RO, all);
  const round = buildSoundRound(pool, {}, 10, rnd);
  assert.equal(round.length, 10);
  const kind = new Map(pool.map((p) => [p.id, p.kind]));
  for (const q of round) {
    assert.equal(q.options.length, 4);
    assert.ok(q.options.includes(q.item.id));
    assert.ok(q.options.every((o) => kind.get(o) === q.item.kind), 'bicho com bicho, instrumento com instrumento');
  }
  const p = recordSound(recordSound({}, 'cao', true), 'cao', false);
  assert.equal(p.cao, -1);
});
