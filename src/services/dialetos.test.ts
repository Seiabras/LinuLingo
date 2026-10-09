import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { splitPacks, accentsForDialect } from './dialetos';
import { PACKS } from '@/data/idiomas';

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

describe('accentsForDialect: sotaques/dialetos regionais escopados ao dialeto nacional ativo', () => {
  const pt = PACKS.pt;

  it('português do Brasil não mostra sotaques de Portugal, e vice-versa', () => {
    const br = accentsForDialect(pt, 'pt-BR');
    const pt_ = accentsForDialect(pt, 'pt-PT');
    assert.ok(br.some((a) => a.id === 'pt-carioca'), 'carioca deveria aparecer no escopo pt-BR');
    assert.ok(!br.some((a) => a.variant === 'pt-PT'), 'nenhum sotaque de Portugal deveria aparecer no escopo pt-BR');
    assert.ok(pt_.some((a) => a.id === 'pt-lisboeta') || pt_.some((a) => a.variant === 'pt-PT'), 'algum sotaque de Portugal deveria aparecer no escopo pt-PT');
    assert.ok(!pt_.some((a) => a.variant === 'pt-BR'), 'nenhum sotaque do Brasil deveria aparecer no escopo pt-PT');
  });

  it('os sotaques dos PALOP e de Timor seguem a norma de Portugal (speechLocale pt-PT), e só aparecem no escopo pt-PT', () => {
    const palop = ['pt-angolano', 'pt-mocambicano', 'pt-cabo-verdiano', 'pt-sao-tomense', 'pt-timorense'];
    const br = accentsForDialect(pt, 'pt-BR');
    const ptPt = accentsForDialect(pt, 'pt-PT');
    for (const id of palop) {
      assert.ok(!br.some((a) => a.id === id), `${id} não deveria aparecer no escopo pt-BR`);
      assert.ok(ptPt.some((a) => a.id === id), `${id} deveria aparecer no escopo pt-PT`);
    }
  });

  it('sem dialeto ativo (idioma com só 1 país, ou nenhum escolhido ainda) não filtra nada', () => {
    const es = PACKS.es; // tem dialeto real, mas sem escopo ativo (null) não filtra
    assert.deepEqual(accentsForDialect(es, null), es.accents ?? []);
    const et = PACKS.et; // só 1 país: nunca filtra, mesmo passando um código qualquer
    assert.deepEqual(accentsForDialect(et, 'et-EE'), et.accents ?? []);
  });

  it('sotaques/dialetos que atravessam mais de um dialeto nacional (sem `variant`) aparecem nos dois lados', () => {
    const ro = PACKS.ro;
    const md = accentsForDialect(ro, 'ro-MD');
    const roRo = accentsForDialect(ro, 'ro-RO');
    assert.ok(md.some((a) => a.id === 'ro-moldovenesc'), 'ro-moldovenesc deveria aparecer no escopo ro-MD');
    assert.ok(roRo.some((a) => a.id === 'ro-moldovenesc'), 'ro-moldovenesc deveria aparecer também no escopo ro-RO (atravessa os dois lados do Prut, de propósito)');
  });

  it('o mesmo escopo vale pra variantes de escrita (bokmål×nynorsk), não só dialeto nacional', () => {
    const nb = PACKS.nb;
    const bokmal = accentsForDialect(nb, 'nb-NO');
    const nynorsk = accentsForDialect(nb, 'nn-NO');
    assert.ok(bokmal.some((a) => a.variant === 'nb-NO'), 'algum sotaque do bokmål deveria aparecer no escopo nb-NO');
    assert.ok(!bokmal.some((a) => a.variant === 'nn-NO'), 'nenhum sotaque do nynorsk deveria aparecer no escopo nb-NO');
    assert.ok(nynorsk.some((a) => a.variant === 'nn-NO'), 'algum sotaque do nynorsk deveria aparecer no escopo nn-NO');
    assert.ok(!nynorsk.some((a) => a.variant === 'nb-NO'), 'nenhum sotaque do bokmål deveria aparecer no escopo nn-NO');
  });
});
