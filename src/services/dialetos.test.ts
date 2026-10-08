import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { splitPacks } from './dialetos';

describe('dialetos: agrupamento variante/dialeto/sotaque', () => {
  const { real, unico } = splitPacks();

  it('todo grupo "real" tem 2+ entradas, todas dialeto (ou sem kind)', () => {
    for (const g of real) {
      assert.ok(g.dialects.length >= 2, `${g.pack.code} tem só ${g.dialects.length}`);
      for (const v of g.dialects) assert.ok(v.kind === 'dialeto' || !v.kind, `${g.pack.code}/${v.code} é kind=${v.kind}`);
    }
  });

  it('todo idioma em "unico" tem exatamente 1 variante dialeto (nada pra comparar)', () => {
    const reaisCodes = new Set(real.map((g) => g.pack.code));
    for (const p of unico) {
      assert.ok(!reaisCodes.has(p.code), `${p.code} apareceu nos dois grupos`);
      const dialetos = (p.variants ?? []).filter((v) => v.kind === 'dialeto' || !v.kind);
      assert.equal(dialetos.length, 1, `${p.code} tem ${dialetos.length} dialetos, esperava 1`);
    }
  });

  it('variantes de escrita (kind "variante", ex. nb, zh) não entram como dialeto', () => {
    const grupoNb = real.find((g) => g.pack.code === 'nb');
    assert.equal(grupoNb, undefined, 'bokmål/nynorsk é variante de escrita, não deveria virar grupo de dialeto');
    const grupoZh = real.find((g) => g.pack.code === 'zh');
    assert.equal(grupoZh, undefined, 'chinês tradicional/pinyin é variante de escrita, não deveria virar grupo de dialeto');
  });

  it('espanhol, português e romeno têm dialeto real; estoniano, feroês, lituano e letão só têm padrão', () => {
    const reaisCodes = real.map((g) => g.pack.code);
    const unicoCodes = unico.map((p) => p.code);
    for (const c of ['es', 'pt', 'ro']) assert.ok(reaisCodes.includes(c), `${c} deveria estar em "real"`);
    for (const c of ['et', 'fo', 'lt', 'lv']) assert.ok(unicoCodes.includes(c), `${c} deveria estar em "unico"`);
  });

  it('cada dialeto não-padrão tem pronúncia ou vocabulário contrastivo documentado', () => {
    for (const g of real) {
      const [, ...resto] = g.dialects;
      for (const v of resto) {
        const temDado = (v.pronunciation?.length ?? 0) > 0 || (v.vocab?.length ?? 0) > 0;
        assert.ok(temDado, `${g.pack.code}/${v.code} não tem pronúncia nem vocabulário contrastivo`);
      }
    }
  });
});
