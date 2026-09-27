import { test } from 'node:test';
import assert from 'node:assert/strict';
import { buildMapRound, frameOf, isAccentRegion, mainOfficial } from './map-game';
import { ACCENTS_ES } from '../data/es/sotaques';
import { languagesIn } from '../data/onde-se-fala';

let seed = 23;
const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;

test('mapa: a língua oficial principal de alguns países', () => {
  assert.equal(mainOfficial('ROU')?.code, 'ro');
  assert.equal(mainOfficial('ARG')?.code, 'es');
  assert.equal(mainOfficial('BRA')?.code, 'pt');
  assert.equal(mainOfficial('RUS')?.code, 'ru');
});

test('mapa: o enquadramento traz os vizinhos (sub-região, ou a região se for pequena)', () => {
  const { frame, place } = frameOf('ROU');
  assert.ok(frame.includes('ROU') && frame.length >= 4, place);
  assert.ok(frameOf('ARG').frame.includes('CHL'));
});

test('mapa: rodada com os 3 tipos, sempre com uma resposta possível', () => {
  for (let k = 0; k < 20; k++) {
    const round = buildMapRound('es', ACCENTS_ES, 8, rnd);
    assert.equal(round.length, 8);
    assert.deepEqual([...new Set(round.map((q) => q.kind))].sort(), ['onde', 'qual', 'sotaque']);
    for (const q of round) {
      if (q.kind === 'onde') {
        assert.ok(q.accept.length > 0, `${q.lang.name} em ${q.place}`);
        assert.ok(q.accept.every((iso) => q.frame.includes(iso)));
        for (const iso of q.accept) assert.ok(languagesIn(iso).some((x) => x.lang.code === q.lang.code && x.spoken.role === 'oficial'));
      } else if (q.kind === 'qual') {
        assert.equal(q.options.length, 4);
        assert.ok(q.options.includes(q.answer));
        const official = languagesIn(q.iso).filter((x) => x.spoken.role === 'oficial').map((x) => x.lang.code);
        assert.deepEqual(q.options.filter((o) => official.includes(o)), [q.answer], `só uma oficial nas opções (${q.iso})`);
      } else {
        assert.ok(q.accent.subdivisions?.length);
      }
    }
  }
  // a primeira pergunta de «onde se fala» é a do idioma estudado
  const where = buildMapRound('es', [], 8, rnd).filter((q) => q.kind === 'onde');
  assert.ok(where.some((q) => q.kind === 'onde' && q.lang.code === 'es'));
});

test('mapa: tocar na região do sotaque (pelo código ou pelo pai)', () => {
  const andaluz = ACCENTS_ES.find((a) => a.id === 'es-andaluz')!;
  assert.ok(isAccentRegion(andaluz, 'ES-AN'));
  assert.ok(isAccentRegion(andaluz, 'ES-SE', 'ES-AN'), 'Sevilha é uma província da Andaluzia');
  assert.ok(!isAccentRegion(andaluz, 'ES-MD'));
});
