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
    // o chinês tem dialetos de verdade (10/10/2026), mas as escritas tradicional e pinyin não entram neles
    const grupoZh = real.find((g) => g.pack.code === 'zh');
    assert.deepEqual(grupoZh?.dialects.map((d) => d.code), ['zh-CN', 'zh-TW', 'zh-SG', 'zh-sichuan']);
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

  it('cada país de língua portuguesa é um dialeto próprio, e o sotaque dele aparece só dentro dele (decisão do dono, 09/10/2026)', () => {
    const paises: [string, string][] = [
      ['pt-angolano', 'pt-AO'],
      ['pt-mocambicano', 'pt-MZ'],
      ['pt-cabo-verdiano', 'pt-CV'],
      ['pt-guineense', 'pt-GW'],
      ['pt-sao-tomense', 'pt-ST'],
      ['pt-timorense', 'pt-TL'],
      ['pt-macaense', 'pt-MO'],
      ['pt-goes', 'pt-IN'],
      ['pt-barranquenho-fala', 'pt-barrancos'],
    ];
    const codes = (pt.variants ?? []).map((v) => v.code);
    for (const [id, code] of paises) {
      assert.ok(codes.includes(code), `${code} deveria ser um dialeto do português`);
      const a = pt.accents?.find((x) => x.id === id);
      assert.equal(a?.sameAsVariant, code, `${id} deveria ser o próprio dialeto ${code}`);
      assert.ok(!accentsForDialect(pt, 'pt-BR').some((x) => x.id === id), `${id} não deveria aparecer no escopo pt-BR`);
      assert.ok(!accentsForDialect(pt, 'pt-PT').some((x) => x.id === id), `${id} não deveria aparecer no escopo pt-PT`);
      assert.ok(accentsForDialect(pt, code).some((x) => x.id === id), `${id} deveria aparecer no escopo ${code}`);
    }
  });

  it('cada dialeto do português tem as duas histórias combinadas, ambientadas nele', () => {
    for (const v of pt.variants ?? []) {
      if (v.code === 'pt-PT') continue;
      const n = pt.stories.filter((s) => s.variant === v.code).length;
      assert.ok(n >= 2, `${v.code} tem ${n} histórias`);
    }
  });

  it('o mirandês é de Portugal e o kriolu de Cabo Verde; o galego atravessa todos', () => {
    const lingua = (id: string) => pt.accents?.find((x) => x.id === id);
    assert.equal(lingua('pt-mirandes')?.variant, 'pt-PT');
    assert.equal(lingua('pt-kriolu')?.variant, 'pt-CV');
    assert.equal(lingua('pt-galego')?.variant, undefined);
    assert.ok(accentsForDialect(pt, 'pt-BR').some((x) => x.id === 'pt-nheengatu'));
    assert.ok(accentsForDialect(pt, 'pt-BR').some((x) => x.id === 'pt-libras'));
  });

  it('espanhol: México, América Central, Caribe, Andes e Chile são dialetos, cada sotaque dentro do seu (09/10/2026)', () => {
    const es = PACKS.es;
    const codes = (es.variants ?? []).map((v) => v.code);
    assert.equal(codes[0], 'es-419', 'o padrão latino-americano continua o primeiro');
    for (const c of ['es-MX', 'es-centroamerica', 'es-caribe', 'es-andes', 'es-CL', 'es-AR', 'es-ES']) assert.ok(codes.includes(c), c);
    const dentro: [string, string][] = [
      ['es-mexicano', 'es-MX'],
      ['es-yucateco', 'es-MX'],
      ['es-tico', 'es-centroamerica'],
      ['es-cubano', 'es-caribe'],
      ['es-boricua', 'es-caribe'],
      ['es-paisa', 'es-andes'],
      ['es-andino', 'es-andes'],
    ];
    for (const [id, code] of dentro) assert.ok(accentsForDialect(es, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    assert.equal(es.accents?.find((a) => a.id === 'es-chileno')?.sameAsVariant, 'es-CL');
    assert.equal(es.accents?.find((a) => a.id === 'es-porteno')?.sameAsVariant, 'es-AR');
    assert.ok(!(es.accents ?? []).some((a) => a.kind === 'dialeto'), 'no espanhol, o que fica dentro de um dialeto é sotaque');
    for (const c of ['es-MX', 'es-centroamerica', 'es-caribe', 'es-andes', 'es-CL']) assert.ok(es.stories.filter((s) => s.variant === c).length >= 2, c);
  });

  it('coreano: China (Yanbian) e Ásia Central (고려말) são dialetos; as províncias são sotaques (09/10/2026)', () => {
    const ko = PACKS.ko;
    const codes = (ko.variants ?? []).map((v) => v.code);
    assert.deepEqual(codes, ['ko-KR', 'ko-KP', 'ko-CN', 'ko-koryo']);
    for (const [id, code] of [['ko-busan', 'ko-KR'], ['ko-jeolla', 'ko-KR'], ['ko-hamgyong', 'ko-KP'], ['ko-yanbian', 'ko-CN'], ['ko-koryomar', 'ko-koryo']] as const) {
      assert.ok(accentsForDialect(ko, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of ['ko-CN', 'ko-koryo']) assert.ok(ko.stories.filter((s) => s.variant === c).length >= 2, c);
  });

  it('catalão: central, valenciano, Andorra, Rosselló e l’Alguer são dialetos; Lleida e Baleares, sotaques (09/10/2026)', () => {
    const ca = PACKS.ca;
    assert.deepEqual((ca.variants ?? []).map((v) => v.code), ['ca-ES', 'ca-VC', 'ca-AD', 'ca-FR', 'ca-IT']);
    for (const [id, code] of [['ca-central', 'ca-ES'], ['ca-nordoccidental', 'ca-ES'], ['ca-balear', 'ca-ES'], ['ca-valencia', 'ca-VC'], ['ca-andorra', 'ca-AD'], ['ca-rossellones', 'ca-FR'], ['ca-alguerès', 'ca-IT']] as const) {
      assert.ok(accentsForDialect(ca, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of ['ca-VC', 'ca-AD', 'ca-FR', 'ca-IT']) assert.ok(ca.stories.filter((s) => s.variant === c).length >= 2, c);
    // a IPA do valenciano não reduz as átonas
    const vc = ca.variants?.find((v) => v.code === 'ca-VC');
    assert.equal(vc?.ipa?.('Barcelona'), '[barseˈlɔna]');
  });

  it('suaíli: Tanzânia, Quênia e RD Congo são dialetos, cada sotaque dentro do seu (10/10/2026)', () => {
    const sw = PACKS.sw;
    assert.deepEqual((sw.variants ?? []).map((v) => v.code), ['sw-TZ', 'sw-KE', 'sw-CD']);
    for (const [id, code] of [['sw-unguja', 'sw-TZ'], ['sw-bara', 'sw-TZ'], ['sw-mvita', 'sw-KE'], ['sw-amu', 'sw-KE'], ['sw-sheng', 'sw-KE'], ['sw-lubumbashi', 'sw-CD'], ['sw-kongo', 'sw-CD']] as const) {
      assert.ok(accentsForDialect(sw, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of ['sw-KE', 'sw-CD']) assert.ok(sw.stories.filter((s) => s.variant === c).length >= 2, c);
    // a IPA do Quênia simplifica os sons árabes; a de Lubumbashi troca r por l e cala o h
    assert.equal(sw.variants?.find((v) => v.code === 'sw-KE')?.ipa?.('dhahabu'), '[dɑˈhɑbu]');
    assert.equal(sw.accents?.find((a) => a.id === 'sw-lubumbashi')?.ipa?.('hapa rafiki'), '[ˈɑpɑ lɑˈfiki]');
  });

  it('albanês: tosk e gheg são dialetos; arbëresh e arvanítico, línguas próprias (09/10/2026)', () => {
    const sq = PACKS.sq;
    assert.deepEqual((sq.variants ?? []).map((v) => v.code), ['sq-tosk', 'sq-geg']);
    assert.equal(sq.accents?.find((a) => a.id === 'sq-gheg')?.sameAsVariant, 'sq-geg');
    for (const id of ['sq-arberesh', 'sq-arvanitico']) assert.equal(sq.accents?.find((a) => a.id === id)?.kind, 'língua', id);
    assert.ok(sq.stories.filter((s) => s.variant === 'sq-geg').length >= 2);
  });

  it('russo: Rússia, Belarus, Cazaquistão e Ucrânia são dialetos; os falares da Rússia, sotaques (10/10/2026)', () => {
    const ru = PACKS.ru;
    assert.deepEqual((ru.variants ?? []).map((v) => v.code), ['ru-RU', 'ru-BY', 'ru-KZ', 'ru-UA']);
    for (const [id, code] of [['ru-moscou', 'ru-RU'], ['ru-norte', 'ru-RU'], ['ru-sul', 'ru-RU'], ['ru-belarus', 'ru-BY'], ['ru-cazaquistao', 'ru-KZ']] as const) {
      assert.ok(accentsForDialect(ru, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of ['ru-BY', 'ru-KZ']) assert.ok(ru.stories.filter((s) => s.variant === c).length >= 2, c);
    // a IPA de Belarus: г fricativo, р e ч duros
    assert.equal(ru.variants?.find((v) => v.code === 'ru-BY')?.ipa?.('Четы́ре гру́ши'), '[t͡ʂɪˈtɨrɪ ˈɣruʂɨ]');
    // Odessa e Kharkiv: sotaques do russo da Ucrânia (dono, 10/10/2026), com o г aspirado
    for (const id of ['ru-odessa', 'ru-kharkiv']) assert.ok(accentsForDialect(ru, 'ru-UA').some((a) => a.id === id), id);
    assert.ok(ru.stories.filter((s) => s.variant === 'ru-UA').length >= 2);
    assert.equal(ru.variants?.find((v) => v.code === 'ru-UA')?.ipa?.('го́род'), '[ˈɦorət]');
  });

  it('alemão: Alemanha, Áustria e Suíça são dialetos, cada sotaque dentro do seu (10/10/2026)', () => {
    const de = PACKS.de;
    assert.deepEqual((de.variants ?? []).map((v) => v.code), ['de-DE', 'de-AT', 'de-CH']);
    for (const [id, code] of [['de-berlim', 'de-DE'], ['de-baviera', 'de-DE'], ['de-viena', 'de-AT'], ['de-tirol', 'de-AT'], ['de-suica', 'de-CH'], ['de-gsw', 'de-CH']] as const) {
      assert.ok(accentsForDialect(de, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of ['de-AT', 'de-CH']) assert.ok(de.stories.filter((s) => s.variant === c).length >= 2, c);
  });

  it('inglês: EUA, Reino Unido, Irlanda, AAVE, Canadá, Austrália, Nova Zelândia, Índia e África do Sul são dialetos (10/10/2026)', () => {
    const en = PACKS.en;
    const codes = (en.variants ?? []).map((v) => v.code);
    assert.deepEqual(codes, ['en-US', 'en-GB', 'en-IE', 'en-AAVE', 'en-CA', 'en-AU', 'en-NZ', 'en-IN', 'en-ZA']);
    for (const [id, code] of [['en-sulista', 'en-US'], ['en-cockney', 'en-GB'], ['en-escoces', 'en-GB'], ['en-afro-americano', 'en-AAVE'], ['en-australiano', 'en-AU']] as const) {
      assert.ok(accentsForDialect(en, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of codes.slice(1)) assert.ok(en.stories.filter((s) => s.variant === c).length >= 2, c);
    // o Reino Unido não pronuncia o r do fim da sílaba
    assert.equal(en.variants?.find((v) => v.code === 'en-GB')?.ipa?.('water'), '[ˈwɔːtə]');
  });

  it('chinês: China, Taiwan, Singapura e Sichuan são dialetos; tradicional e pinyin, escritas (10/10/2026)', () => {
    const zh = PACKS.zh;
    assert.deepEqual((zh.variants ?? []).map((v) => v.code), ['zh-CN', 'zh-TW', 'zh-SG', 'zh-sichuan', 'zh-Hant', 'zh-Latn']);
    for (const [id, code] of [['zh-pequim', 'zh-CN'], ['zh-nordeste', 'zh-CN'], ['zh-guoyu', 'zh-TW'], ['zh-sichuanes', 'zh-sichuan']] as const) {
      assert.ok(accentsForDialect(zh, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of ['zh-TW', 'zh-SG', 'zh-sichuan']) assert.ok(zh.stories.filter((s) => s.variant === c).length >= 2, c);
  });

  it('neerlandês: Países Baixos, Bélgica e Suriname são dialetos (10/10/2026)', () => {
    const nl = PACKS.nl;
    assert.deepEqual((nl.variants ?? []).map((v) => v.code), ['nl-NL', 'nl-BE', 'nl-SR']);
    for (const [id, code] of [['nl-brabante', 'nl-NL'], ['nl-antuerpia', 'nl-BE'], ['nl-surinames', 'nl-SR']] as const) {
      assert.ok(accentsForDialect(nl, code).some((a) => a.id === id), `${id} deveria estar em ${code}`);
    }
    for (const c of ['nl-BE', 'nl-SR']) assert.ok(nl.stories.filter((s) => s.variant === c).length >= 2, c);
  });

  it('grego: Grécia e Chipre são dialetos (10/10/2026)', () => {
    const el = PACKS.el;
    assert.deepEqual((el.variants ?? []).map((v) => v.code), ['el-GR', 'el-CY']);
    assert.ok(accentsForDialect(el, 'el-GR').some((a) => a.id === 'el-creta'));
    assert.ok(el.stories.filter((s) => s.variant === 'el-CY').length >= 2);
  });

  it('em todos os idiomas, o que fica dentro de um dialeto é sotaque (regra do dono, 09/10/2026)', () => {
    // dialeto é país ou grupo grande (fica em `variants`); em `accents`, só sotaque ou língua própria
    for (const code of Object.keys(PACKS)) {
      const dialetos = (PACKS[code].accents ?? []).filter((a) => a.kind === 'dialeto').map((a) => a.id);
      assert.deepEqual(dialetos, [], `${code}: ${dialetos.join(', ')}`);
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
