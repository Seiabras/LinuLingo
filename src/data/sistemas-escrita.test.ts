import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { writingSystems, BEYOND_APP_SYSTEMS } from './sistemas-escrita';
import { PACKS } from './idiomas';

describe('sistemas de escrita: agrupamento por sistema real, não por idioma', () => {
  const systems = writingSystems();

  it('todo idioma do app aparece em pelo menos um sistema', () => {
    const covered = new Set(systems.flatMap((s) => s.languages.map((l) => l.code)));
    const allCodes = new Set(Object.values(PACKS).map((p) => p.code));
    for (const code of allCodes) assert.ok(covered.has(code), `${code} não casou com nenhum sistema de escrita`);
  });

  it('sistemas distintos e claramente não-latinos não se misturam (ex. hangul só coreano, devanágari não pega bengali)', () => {
    const hangul = systems.find((s) => s.id === 'hangul')!;
    assert.deepEqual(hangul.languages.map((l) => l.code).sort(), ['jje', 'ko']);
    const devanagari = systems.find((s) => s.id === 'devanagari')!;
    assert.deepEqual(devanagari.languages.map((l) => l.code).sort(), ['hi', 'mr']);
    const khmer = systems.find((s) => s.id === 'khmer')!;
    assert.deepEqual(khmer.languages.map((l) => l.code).sort(), ['km']);
    const georgiano = systems.find((s) => s.id === 'georgiano')!;
    assert.deepEqual(georgiano.languages.map((l) => l.code).sort(), ['ka']);
  });

  it('runas pega o nórdico antigo, que também aparece no alfabeto latino (as duas coisas são verdade no app)', () => {
    const runico = systems.find((s) => s.id === 'runico')!;
    assert.ok(runico.languages.some((l) => l.code === 'non'));
    const latino = systems.find((s) => s.id === 'latino')!;
    assert.ok(latino.languages.some((l) => l.code === 'non'));
  });

  it('cada sistema tem nome, resumo, história e pelo menos um idioma', () => {
    for (const s of systems) {
      assert.ok(s.name.length > 0, s.id);
      assert.ok(s.summary.length > 0, s.id);
      assert.ok(s.history.length > 0, s.id);
      assert.ok(s.languages.length > 0, s.id);
    }
  });

  it('sistemas fora do app não têm idioma nenhum (não dão pra estudar)', () => {
    for (const s of BEYOND_APP_SYSTEMS) {
      assert.ok(s.name.length > 0, s.id);
      assert.ok(s.curiosities.length > 0, s.id);
    }
  });
});
